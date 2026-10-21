"use client";

import { useEffect, useState } from "react";

export const companySections = [
  { id: "overview", label: "기업 개요" },
  { id: "greeting", label: "CEO 인사말" },
  { id: "history", label: "기업연혁" },
  { id: "business", label: "주요사업" },
  { id: "values", label: "기업이념" },
  { id: "service", label: "서비스정신" },
  { id: "awards", label: "수상내역" },
] as const;

export function CompanySectionNav() {
  const [active, setActive] = useState<(typeof companySections)[number]["id"]>(companySections[0].id);

  useEffect(() => {
    const onScroll = () => {
      const line = 152;
      let current: (typeof companySections)[number]["id"] = companySections[0].id;
      for (const section of companySections) {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav aria-label="기업소개 구간" className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex overflow-x-auto [justify-content:safe_center]">
        <ul className="flex w-max gap-1 px-4 py-2 sm:px-6">
          {companySections.map((section) => {
            const current = active === section.id;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={current ? "location" : undefined}
                  className={`inline-flex whitespace-nowrap rounded-full px-3 py-2 text-sm font-medium transition ${
                    current ? "bg-blue-50 text-brand" : "text-slate-600 hover:bg-slate-50 hover:text-navy"
                  }`}
                  onClick={() => setActive(section.id)}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
