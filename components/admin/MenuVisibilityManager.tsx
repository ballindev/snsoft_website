"use client";

import { useMemo, useState, useTransition } from "react";
import { setNavMenuVisibleAction } from "@/app/admin/actions";
import type { AdminNavMenuItem } from "@/lib/admin-data";

export function MenuVisibilityManager({ initialItems }: { initialItems: AdminNavMenuItem[] }) {
  const [items, setItems] = useState(initialItems);
  const [pendingHref, setPendingHref] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const sections = useMemo(() => {
    const map = new Map<string, AdminNavMenuItem[]>();
    for (const item of items) {
      const list = map.get(item.section) ?? [];
      list.push(item);
      map.set(item.section, list);
    }
    return Array.from(map.entries());
  }, [items]);

  function toggle(href: string, visible: boolean) {
    setError(null);
    setPendingHref(href);
    setItems((prev) => prev.map((item) => (item.href === href ? { ...item, visible } : item)));
    startTransition(async () => {
      try {
        const updated = await setNavMenuVisibleAction(href, visible);
        setItems((prev) => prev.map((item) => (item.href === updated.href ? updated : item)));
      } catch {
        setItems((prev) => prev.map((item) => (item.href === href ? { ...item, visible: !visible } : item)));
        setError("메뉴 표시 설정을 저장하지 못했습니다. 다시 시도해 주세요.");
      } finally {
        setPendingHref(null);
      }
    });
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight text-navy">메뉴 표시</h1>
      <p className="mt-2 text-sm text-slate-600">
        꺼 둔 항목은 헤더·푸터 메뉴에서만 숨겨집니다. 페이지 URL로는 그대로 열 수 있습니다.
      </p>

      {error ? <p className="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}

      <div className="mt-8 space-y-8">
        {sections.map(([section, sectionItems]) => (
          <section key={section} className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6">
            <h2 className="text-base font-semibold text-navy">{section}</h2>
            <ul className="mt-4 divide-y divide-slate-100">
              {sectionItems.map((item) => {
                const busy = pending && pendingHref === item.href;
                return (
                  <li key={item.href} className="flex flex-wrap items-center justify-between gap-3 py-3">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-slate-900">{item.label}</p>
                      <p className="truncate text-xs text-slate-500">{item.href}</p>
                    </div>
                    <label className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-slate-700">
                      <span className={item.visible ? "text-brand" : "text-slate-400"}>
                        {item.visible ? "표시" : "숨김"}
                      </span>
                      <input
                        type="checkbox"
                        className="size-4 accent-brand"
                        checked={item.visible}
                        disabled={busy}
                        onChange={(event) => toggle(item.href, event.target.checked)}
                      />
                    </label>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
