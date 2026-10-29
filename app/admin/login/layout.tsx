import { Suspense } from "react";

export default function AdminLoginLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-sm text-slate-500">불러오는 중…</div>}>{children}</Suspense>;
}
