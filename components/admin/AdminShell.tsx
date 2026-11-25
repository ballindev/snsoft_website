"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const nav = [
  { href: "/admin", label: "대시보드", exact: true },
  { href: "/admin/inquiries", label: "온라인 문의" },
  { href: "/admin/faqs", label: "자주 묻는 질문" },
  { href: "/admin/screens", label: "예시 화면" },
  { href: "/admin/menus", label: "메뉴 표시" },
  { href: "/admin/accounts", label: "관리자 계정" },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold tracking-wide text-brand">SN Soft</p>
            <h1 className="text-lg font-semibold text-navy">사이트 관리</h1>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-slate-300 hover:text-navy"
            >
              홈페이지
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-slate-300 hover:text-navy"
            >
              로그아웃
            </button>
          </div>
        </div>
        <nav className="mx-auto max-w-6xl overflow-x-auto px-4 sm:px-6">
          <ul className="flex gap-1 pb-3">
            {nav.map((item) => {
              const active = item.exact ? pathname === item.href : pathname.startsWith(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`inline-flex whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition ${
                      active ? "bg-navy text-white" : "text-slate-600 hover:bg-slate-100 hover:text-navy"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
