"use client";

import Link from "next/link";
import { useState, useTransition } from "react";
import { setInquiryStatusAction } from "@/app/admin/actions";
import {
  deploymentLabel,
  formatAdminDate,
  inquiryStatusLabel,
  type AdminInquiry,
  type InquiryStatus,
} from "@/lib/admin-data";

export function InquiryDetail({ initial }: { initial: AdminInquiry }) {
  const [status, setStatus] = useState(initial.status);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();
  const rows = [
    ["접수일", formatAdminDate(initial.createdAt)],
    ["회사명", initial.company],
    ["담당자", initial.name],
    ["전화", initial.phone],
    ["이메일", initial.email],
    ["업종", initial.industry],
    ["도입 형태", deploymentLabel[initial.deployment] ?? initial.deployment],
    ["관심 기능", initial.interests.join(", ") || "—"],
    ["첨부 파일", initial.attachmentName || "없음"],
  ];

  return (
    <div>
      <Link href="/admin/inquiries" className="text-sm font-semibold text-brand">
        ← 문의 목록
      </Link>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-navy">{initial.company}</h1>
          <p className="mt-2 text-sm text-slate-600">
            {initial.name} · {initial.email}
          </p>
        </div>
        <select
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
          value={status}
          disabled={pending}
          onChange={(e) => {
            const next = e.target.value as InquiryStatus;
            const previous = status;
            setStatus(next);
            startTransition(async () => {
              try {
                await setInquiryStatusAction(initial.id, next);
                setMessage("상태를 저장했습니다.");
              } catch {
                setStatus(previous);
                setMessage("상태 저장에 실패했습니다.");
              }
            });
          }}
        >
          {(Object.keys(inquiryStatusLabel) as InquiryStatus[]).map((value) => (
            <option key={value} value={value}>
              {inquiryStatusLabel[value]}
            </option>
          ))}
        </select>
      </div>
      {message ? <p className="mt-2 text-sm text-slate-500">{message}</p> : null}
      <dl className="mt-8 grid gap-3 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-2">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-xs font-semibold text-slate-500">{label}</dt>
            <dd className="mt-1 text-sm text-navy">{value}</dd>
          </div>
        ))}
      </dl>
      <section className="mt-4 rounded-3xl border border-slate-200 bg-white p-6">
        <h2 className="text-sm font-semibold text-navy">문의 내용</h2>
        <p className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-700">{initial.message || "내용 없음"}</p>
      </section>
    </div>
  );
}
