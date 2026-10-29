"use client";

import { FormEvent, useState, useTransition } from "react";
import { removeAccountAction, saveAccountAction } from "@/app/admin/actions";
import { formatAdminDate, type AdminAccount } from "@/lib/admin-data";

const emptyForm = { username: "", name: "", password: "", passwordConfirm: "" };

export function AccountManager({ initialItems }: { initialItems: AdminAccount[] }) {
  const [items, setItems] = useState(initialItems);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");
  const [pending, startTransition] = useTransition();

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.username.trim() || !form.name.trim()) {
      setMessage("아이디와 이름을 입력해 주세요.");
      return;
    }
    if (!editingId && !form.password) {
      setMessage("새 계정의 비밀번호를 입력해 주세요.");
      return;
    }
    if (form.password || form.passwordConfirm) {
      if (form.password !== form.passwordConfirm) {
        setMessage("비밀번호 확인이 일치하지 않습니다.");
        return;
      }
      if (form.password.length < 6) {
        setMessage("비밀번호는 6자 이상으로 입력해 주세요.");
        return;
      }
    }
    startTransition(async () => {
      try {
        const saved = await saveAccountAction({
          id: editingId ?? undefined,
          username: form.username.trim(),
          name: form.name.trim(),
          password: form.password || undefined,
        });
        setItems((current) => (editingId ? current.map((item) => (item.id === editingId ? saved : item)) : [...current, saved]));
        setMessage(editingId ? "계정을 수정했습니다." : "계정을 추가했습니다.");
        setEditingId(null);
        setForm(emptyForm);
      } catch {
        setMessage("저장에 실패했습니다. 아이디 중복을 확인해 주세요.");
      }
    });
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-navy">관리자 계정</h1>
      <p className="mt-2 text-sm text-slate-600">비밀번호는 해시로 저장됩니다.</p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item.id} className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="mt-1 text-sm text-slate-600">@{item.username}</p>
                  <p className="mt-2 text-xs text-slate-500">최근 로그인 {formatAdminDate(item.lastLoginAt)}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className="text-sm font-semibold text-brand"
                    onClick={() => {
                      setEditingId(item.id);
                      setForm({ username: item.username, name: item.name, password: "", passwordConfirm: "" });
                    }}
                  >
                    수정
                  </button>
                  <button
                    type="button"
                    className="text-sm font-semibold text-rose-600"
                    onClick={() => {
                      const previous = items;
                      setItems((c) => c.filter((x) => x.id !== item.id));
                      startTransition(async () => {
                        try {
                          await removeAccountAction(item.id);
                        } catch {
                          setItems(previous);
                          setMessage("삭제에 실패했습니다.");
                        }
                      });
                    }}
                  >
                    삭제
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <form onSubmit={onSubmit} className="h-fit rounded-3xl border border-slate-200 bg-white p-5">
          <h2 className="text-lg font-semibold text-navy">{editingId ? "계정 수정" : "계정 추가"}</h2>
          <label className="mt-4 block text-sm">
            <span className="font-medium text-navy">아이디</span>
            <input className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.username} onChange={(e) => setForm((c) => ({ ...c, username: e.target.value }))} />
          </label>
          <label className="mt-3 block text-sm">
            <span className="font-medium text-navy">이름</span>
            <input className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.name} onChange={(e) => setForm((c) => ({ ...c, name: e.target.value }))} />
          </label>
          <label className="mt-3 block text-sm">
            <span className="font-medium text-navy">비밀번호{editingId ? " (바꿀 때만)" : ""}</span>
            <input type="password" className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.password} onChange={(e) => setForm((c) => ({ ...c, password: e.target.value }))} />
          </label>
          <label className="mt-3 block text-sm">
            <span className="font-medium text-navy">비밀번호 확인</span>
            <input type="password" className="mt-1.5 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.passwordConfirm} onChange={(e) => setForm((c) => ({ ...c, passwordConfirm: e.target.value }))} />
          </label>
          {message ? <p className="mt-3 text-sm text-slate-500">{message}</p> : null}
          <button type="submit" disabled={pending} className="mt-4 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white disabled:opacity-60">
            {editingId ? "수정 저장" : "추가"}
          </button>
        </form>
      </div>
    </div>
  );
}
