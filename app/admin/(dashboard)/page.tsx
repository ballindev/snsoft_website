import Link from "next/link";
import { countDashboard } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const counts = await countDashboard();
  const cards = [
    { href: "/admin/inquiries", label: "온라인 문의", value: counts.inquiries, hint: "접수·연락중·완료 상태 확인" },
    { href: "/admin/faqs", label: "자주 묻는 질문", value: counts.faqs, hint: "공개 FAQ 추가·수정" },
    { href: "/admin/screens", label: "예시 화면", value: counts.screens, hint: "제품·업종 슬라이드 이미지" },
    { href: "/admin/accounts", label: "관리자 계정", value: counts.accounts, hint: "로그인 계정 관리" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-navy">대시보드</h1>
      <p className="mt-2 text-sm text-slate-600">DB에 저장된 항목을 관리합니다.</p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <li key={card.href}>
            <Link
              href={card.href}
              className="block rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              <p className="text-sm font-semibold text-brand">{card.label}</p>
              <p className="mt-3 text-3xl font-semibold tabular-nums text-navy">{card.value}</p>
              <p className="mt-2 text-sm text-slate-500">{card.hint}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
