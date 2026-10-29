"use client";

import Link from "next/link";
import { useMemo, useState, useTransition } from "react";
import { setInquiryStatusAction } from "@/app/admin/actions";
import {
  deploymentLabel,
  formatAdminDate,
  inquiryStatusLabel,
  type AdminInquiry,
  type InquiryStatus,
} from "@/lib/admin-data";

export function InquiryList({ initialItems }: { initialItems: AdminInquiry[] }) {
  const [items, setItems] = useState(initialItems);
  const [filter, setFilter] = useState<"all" | InquiryStatus>("all");
  const [pending, startTransition] = useTransition();
  const visible = useMemo(
    () => (filter === "all" ? items : items.filter((item) => item.status === filter)),
    [filter, items],
  );

  function updateStatus(id: string, status: InquiryStatus) {
    const previous = items;
    setItems((current) => current.map((item) => (item.id === id ? { ...item, status } : item)));
    startTransition(async () => {
      try {
        await setInquiryStatusAction(id, status);
      } catch {
        setItems(previous);
      }
    });
  }

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-navy">온라인 문의</h1>
          <p className="mt-2 text-sm text-slate-600">상담 신청이 DB에 저장됩니다. 상태 변경도 바로 반영됩니다.</p>
        </div>
        <select
          className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value as "all" | InquiryStatus)}
        >
          <option value="all">전체</option>
          <option value="received">접수</option>
          <option value="contacting">연락중</option>
          <option value="done">완료</option>
        </select>
      </div>
      <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3 font-medium">접수일</th>
              <th className="px-4 py-3 font-medium">회사</th>
              <th className="px-4 py-3 font-medium">담당자</th>
              <th className="px-4 py-3 font-medium">도입 형태</th>
              <th className="px-4 py-3 font-medium">상태</th>
              <th className="px-4 py-3 font-medium">상세</th>
            </tr>
          </thead>
          <tbody>
            {visible.map((item) => (
              <tr key={item.id} className="border-t border-slate-100">
                <td className="px-4 py-3 text-slate-600">{formatAdminDate(item.createdAt)}</td>
                <td className="px-4 py-3 font-medium text-navy">{item.company}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3">{deploymentLabel[item.deployment] ?? item.deployment}</td>
                <td className="px-4 py-3">
                  <select
                    className="rounded-lg border border-slate-200 px-2 py-1.5"
                    value={item.status}
                    disabled={pending}
                    onChange={(e) => updateStatus(item.id, e.target.value as InquiryStatus)}
                  >
                    {(Object.keys(inquiryStatusLabel) as InquiryStatus[]).map((status) => (
                      <option key={status} value={status}>
                        {inquiryStatusLabel[status]}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-4 py-3">
                  <Link href={`/admin/inquiries/${item.id}`} className="font-semibold text-brand">
                    보기
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
