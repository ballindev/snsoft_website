"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setMessage("");
    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !data.ok) {
        setMessage(data.message || "로그인에 실패했습니다.");
        return;
      }
      const next = searchParams.get("next") || "/admin";
      router.replace(next.startsWith("/admin") ? next : "/admin");
      router.refresh();
    } catch {
      setMessage("네트워크 오류가 발생했습니다.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold tracking-wide text-brand">SN Soft</p>
        <h1 className="mt-2 text-2xl font-semibold text-navy">관리자 로그인</h1>
        <p className="mt-2 text-sm text-slate-600">시드 계정: admin / admin123</p>
        <label className="mt-6 block text-sm">
          <span className="font-medium text-navy">아이디</span>
          <input
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2"
            value={username}
            autoComplete="username"
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label className="mt-3 block text-sm">
          <span className="font-medium text-navy">비밀번호</span>
          <input
            type="password"
            className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2"
            value={password}
            autoComplete="current-password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        {message ? <p className="mt-3 text-sm text-rose-600">{message}</p> : null}
        <button
          type="submit"
          disabled={pending}
          className="mt-5 w-full rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-60"
        >
          {pending ? "로그인 중…" : "로그인"}
        </button>
      </form>
    </div>
  );
}
