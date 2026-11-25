import { Resend } from "resend";
import { DEPLOYMENT_OPTIONS, type ConsultationPayload } from "@/lib/consultation";

export type ConsultationMailResult = {
  notified: boolean;
  confirmed: boolean;
  error?: string;
};

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONSULTATION_FROM?.trim();
  const notifyTo = process.env.CONSULTATION_NOTIFY_TO?.trim();
  if (!apiKey || !from || !notifyTo) return null;
  return { apiKey, from, notifyTo };
}

function deploymentLabel(value: string) {
  return DEPLOYMENT_OPTIONS.find((option) => option.value === value)?.label ?? value;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function applicantLabel(payload: ConsultationPayload) {
  const name = payload.name.trim();
  const company = payload.company.trim();
  if (name && company) return `${name} (${company})`;
  return name || company || "신청자";
}

function notifyHtml(payload: ConsultationPayload, inquiryId: string) {
  const rows = [
    ["접수번호", inquiryId],
    ["담당자", payload.name.trim() || "—"],
    ["회사명", payload.company.trim() || "—"],
    ["연락처", payload.phone.trim()],
    ["이메일", payload.email.trim() || "—"],
    ["업종", payload.industry.trim() || "—"],
    ["희망 도입 형태", deploymentLabel(payload.deployment)],
    ["관심 기능", payload.interests.length > 0 ? payload.interests.join(", ") : "—"],
    ["첨부 파일명", payload.attachmentName.trim() || "—"],
  ];

  const detailRows = rows
    .map(
      ([label, value]) =>
        `<tr><th style="text-align:left;padding:6px 12px 6px 0;vertical-align:top;color:#475569;">${escapeHtml(label)}</th><td style="padding:6px 0;color:#0f172a;">${escapeHtml(value)}</td></tr>`,
    )
    .join("");

  const message = payload.message.trim()
    ? `<p style="margin:16px 0 0;white-space:pre-wrap;line-height:1.6;color:#0f172a;">${escapeHtml(payload.message.trim())}</p>`
    : `<p style="margin:16px 0 0;color:#64748b;">문의 내용 없음</p>`;

  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.5;">
      <h1 style="font-size:18px;color:#0b1f3a;margin:0 0 12px;">신규 도입 상담 신청</h1>
      <p style="margin:0 0 16px;color:#475569;">홈페이지에서 상담 신청이 접수되었습니다.</p>
      <table style="border-collapse:collapse;">${detailRows}</table>
      <h2 style="font-size:15px;color:#0b1f3a;margin:20px 0 0;">문의 내용</h2>
      ${message}
    </div>
  `;
}

function confirmHtml(payload: ConsultationPayload) {
  return `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:14px;line-height:1.6;color:#0f172a;">
      <p>${escapeHtml(applicantLabel(payload))}님, 안녕하세요.</p>
      <p>에스앤소프트 도입 상담 및 맞춤 데모 신청이 정상적으로 접수되었습니다.</p>
      <p>입력해 주신 내용을 확인한 뒤 담당 컨설턴트가 연락드리겠습니다.</p>
      <p style="margin-top:24px;color:#64748b;">본 메일은 발신 전용입니다. 추가 문의는 사이트 상담 신청 또는 대표 전화(1600-4707)로 연락해 주세요.</p>
    </div>
  `;
}

export async function sendConsultationEmails(
  payload: ConsultationPayload,
  inquiryId: string,
): Promise<ConsultationMailResult> {
  const config = getResendConfig();
  if (!config) {
    return {
      notified: false,
      confirmed: false,
      error: "메일 발송 설정(RESEND_API_KEY, CONSULTATION_FROM, CONSULTATION_NOTIFY_TO)이 없습니다.",
    };
  }

  const resend = new Resend(config.apiKey);
  const result: ConsultationMailResult = { notified: false, confirmed: false };
  const replyTo = payload.email.trim() || undefined;

  try {
    const notify = await resend.emails.send({
      from: `에스앤소프트 상담 <${config.from}>`,
      to: config.notifyTo,
      replyTo,
      subject: `[도입 상담] ${applicantLabel(payload)}`,
      html: notifyHtml(payload, inquiryId),
    });
    if (notify.error) {
      result.error = notify.error.message;
      console.error("[consultation-email] notify", notify.error);
    } else {
      result.notified = true;
    }
  } catch (error) {
    result.error = error instanceof Error ? error.message : "알림 메일 발송 실패";
    console.error("[consultation-email] notify", error);
  }

  const applicantEmail = payload.email.trim();
  if (applicantEmail) {
    try {
      const confirm = await resend.emails.send({
        from: `에스앤소프트 <${config.from}>`,
        to: applicantEmail,
        subject: "도입 상담 신청이 접수되었습니다",
        html: confirmHtml(payload),
      });
      if (confirm.error) {
        result.error = [result.error, confirm.error.message].filter(Boolean).join(" / ");
        console.error("[consultation-email] confirm", confirm.error);
      } else {
        result.confirmed = true;
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "확인 메일 발송 실패";
      result.error = [result.error, message].filter(Boolean).join(" / ");
      console.error("[consultation-email] confirm", error);
    }
  }

  return result;
}
