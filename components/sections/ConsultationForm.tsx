"use client";

import { FormEvent, useRef, useState, type ReactNode } from "react";
import { Check, Upload, X } from "lucide-react";
import {
  DEPLOYMENT_OPTIONS,
  INDUSTRY_OPTIONS,
  INTEREST_OPTIONS,
  validateConsultation,
  type ConsultationErrors,
  type ConsultationPayload,
} from "@/lib/consultation";
import { SectionHeading } from "@/components/ui/SectionHeading";

const emptyForm: ConsultationPayload = {
  company: "",
  name: "",
  phone: "",
  email: "",
  industry: "",
  deployment: "",
  interests: [],
  message: "",
  attachmentName: "",
};

const fieldClass =
  "mt-2 w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/10";

export function ConsultationForm() {
  const [form, setForm] = useState<ConsultationPayload>(emptyForm);
  const [errors, setErrors] = useState<ConsultationErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  function update(partial: Partial<ConsultationPayload>) {
    setForm((current) => ({ ...current, ...partial }));
  }

  function toggleInterest(interest: string) {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(interest)
        ? current.interests.filter((item) => item !== interest)
        : [...current.interests, interest],
    }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateConsultation(form);
    setErrors(nextErrors);
    setServerMessage("");
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data: unknown = await response.json().catch(() => null);
      if (!response.ok) {
        const payload = data && typeof data === "object" ? (data as { errors?: ConsultationErrors; message?: string }) : {};
        if (payload.errors) setErrors(payload.errors);
        setServerMessage(payload.message ?? "신청을 처리하지 못했습니다. 입력 내용을 다시 확인해 주세요.");
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerMessage("네트워크 연결을 확인한 뒤 다시 시도해 주세요.");
      setStatus("error");
    }
  }

  return (
    <section id="consultation" className="scroll-mt-24 bg-navy py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Consultation"
          title="무료 도입 상담 및 맞춤 데모 신청"
          description="팩스와 이메일 신청서 대신, 회사 상황과 기존 양식을 이 화면에서 남기면 컨설턴트가 표준과 맞춤 범위를 나눠 연락드립니다."
          tone="inverted"
        />

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl bg-white p-5 shadow-2xl shadow-slate-950/20 sm:p-8">
          {status === "success" ? (
            <div className="px-2 py-8 text-center" role="status">
              <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-blue-50 text-brand">
                <Check className="size-6" aria-hidden />
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-navy">신청 내용을 확인했습니다.</h3>
              <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-600">
                입력은 정상이지만, 컨설턴트에게 자동으로 전달하는 메일·저장 연동은 아직 연결 전입니다. 연결 전에는 이 신청이 보관되지 않습니다.
              </p>
              {process.env.NODE_ENV === "development" ? (
                <p className="mx-auto mt-3 max-w-lg text-xs leading-5 text-slate-500">
                  개발 서버 터미널에 신청 내용이 기록됩니다.
                </p>
              ) : null}
              <button
                type="button"
                className="mt-6 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white"
                onClick={() => {
                  setForm(emptyForm);
                  setErrors({});
                  setStatus("idle");
                  if (fileRef.current) fileRef.current.value = "";
                }}
              >
                다른 내용으로 다시 작성
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-describedby={serverMessage ? "consultation-status" : undefined}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="회사명" error={errors.company} htmlFor="company">
                  <input id="company" className={fieldClass} value={form.company} autoComplete="organization" onChange={(event) => update({ company: event.target.value })} />
                </Field>
                <Field label="담당자 성함" error={errors.name} htmlFor="name">
                  <input id="name" className={fieldClass} value={form.name} autoComplete="name" onChange={(event) => update({ name: event.target.value })} />
                </Field>
                <Field label="연락처" error={errors.phone} htmlFor="phone">
                  <input id="phone" className={fieldClass} value={form.phone} autoComplete="tel" inputMode="tel" onChange={(event) => update({ phone: event.target.value })} />
                </Field>
                <Field label="이메일" error={errors.email} htmlFor="email">
                  <input id="email" type="email" className={fieldClass} value={form.email} autoComplete="email" onChange={(event) => update({ email: event.target.value })} />
                </Field>
              </div>

              <Field label="업종" error={errors.industry} htmlFor="industry" className="mt-4">
                <select
                  id="industry"
                  className={fieldClass}
                  value={form.industry}
                  onChange={(event) => update({ industry: event.target.value })}
                >
                  <option value="">업종을 선택해 주세요</option>
                  {INDUSTRY_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </Field>

              <fieldset className="mt-6">
                <legend className="text-sm font-semibold text-navy">희망 도입 형태</legend>
                <div className="mt-3 grid gap-3 md:grid-cols-3">
                  {DEPLOYMENT_OPTIONS.map((option) => {
                    const selected = form.deployment === option.value;
                    return (
                      <label
                        key={option.value}
                        className={`cursor-pointer rounded-2xl border p-4 transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand ${
                          selected ? "border-brand bg-blue-50" : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="deployment"
                          value={option.value}
                          checked={selected}
                          className="sr-only"
                          onChange={() => update({ deployment: option.value })}
                        />
                        <span className="block text-sm font-semibold text-navy">{option.label}</span>
                        <span className="mt-1 block text-xs leading-5 text-slate-600">{option.hint}</span>
                      </label>
                    );
                  })}
                </div>
                {errors.deployment ? <p className="mt-2 text-sm text-rose-600">{errors.deployment}</p> : null}
              </fieldset>

              <fieldset className="mt-6">
                <legend className="text-sm font-semibold text-navy">주요 관심 기능</legend>
                <p className="mt-1 text-xs text-slate-500">여러 개를 선택할 수 있습니다.</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {INTEREST_OPTIONS.map((interest) => {
                    const selected = form.interests.includes(interest);
                    return (
                      <button
                        key={interest}
                        type="button"
                        aria-pressed={selected}
                        onClick={() => toggleInterest(interest)}
                        className={`rounded-full border px-3 py-1.5 text-sm font-medium transition ${
                          selected ? "border-brand bg-brand text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        {interest}
                      </button>
                    );
                  })}
                </div>
                {errors.interests ? <p className="mt-2 text-sm text-rose-600">{errors.interests}</p> : null}
              </fieldset>

              <Field label="현재 사용 중인 프로그램 또는 애로사항" error={errors.message} htmlFor="message" className="mt-6">
                <textarea
                  id="message"
                  rows={5}
                  className={fieldClass}
                  value={form.message}
                  placeholder="예: 시중 회계 프로그램으로 장부는 보고 있고, 부위별 수율과 거래처 단가는 엑셀로 따로 관리합니다."
                  onChange={(event) => update({ message: event.target.value })}
                />
              </Field>

              <div className="mt-4">
                <label htmlFor="attachment" className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-6 text-center hover:border-slate-400">
                  <Upload className="size-5 text-slate-500" aria-hidden />
                  <span className="mt-2 text-sm font-medium text-navy">기존 사용 중인 엑셀/양식 파일 첨부 (선택)</span>
                  <span className="mt-1 text-xs text-slate-500">xls, xlsx, csv, pdf, hwp, 이미지</span>
                  <input
                    ref={fileRef}
                    id="attachment"
                    type="file"
                    className="sr-only"
                    accept=".xls,.xlsx,.csv,.pdf,.hwp,.doc,.docx,.png,.jpg,.jpeg"
                    onChange={(event) => update({ attachmentName: event.target.files?.[0]?.name ?? "" })}
                  />
                </label>
                {form.attachmentName ? (
                  <p className="mt-2 flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    <span className="truncate">{form.attachmentName}</span>
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center gap-1 text-xs font-semibold text-slate-500"
                      onClick={() => {
                        update({ attachmentName: "" });
                        if (fileRef.current) fileRef.current.value = "";
                      }}
                    >
                      <X className="size-3.5" aria-hidden />
                      제거
                    </button>
                  </p>
                ) : null}
              </div>

              {serverMessage ? (
                <p id="consultation-status" className="mt-4 text-sm text-rose-600" role="alert">{serverMessage}</p>
              ) : null}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-dark disabled:cursor-wait disabled:opacity-70 sm:w-auto"
              >
                {status === "submitting" ? "신청 내용을 확인하는 중" : "무료 도입 상담 및 맞춤 데모 신청하기"}
              </button>
              <p className="mt-3 text-xs leading-5 text-slate-500">
                첨부 파일은 파일명만 확인하며, 파일 내용은 이 단계에서 서버에 저장하지 않습니다.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  htmlFor,
  className = "",
  children,
}: {
  label: string;
  error?: string;
  htmlFor: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="text-sm font-semibold text-navy">{label}</label>
      {children}
      {error ? <p className="mt-1.5 text-sm text-rose-600">{error}</p> : null}
    </div>
  );
}
