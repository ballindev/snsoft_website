import { NextResponse } from "next/server";
import { parseConsultationPayload, validateConsultation } from "@/lib/consultation";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "신청 형식을 확인할 수 없습니다." }, { status: 400 });
  }

  const payload = parseConsultationPayload(body);
  if (!payload) {
    return NextResponse.json({ ok: false, message: "신청 항목이 올바르지 않습니다." }, { status: 400 });
  }

  const errors = validateConsultation(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors, message: "입력 내용을 다시 확인해 주세요." }, { status: 400 });
  }

  if (process.env.NODE_ENV === "development") {
    console.info("[consultation] received", {
      company: payload.company.trim(),
      industry: payload.industry,
      deployment: payload.deployment,
      interests: payload.interests,
      attachmentName: payload.attachmentName,
    });
  }

  return NextResponse.json({ ok: true, delivered: false });
}
