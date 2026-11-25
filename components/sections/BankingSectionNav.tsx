"use client";

import { useEffect, useMemo, useState } from "react";

const allSections = [
  { id: "intro", label: "소개" },
  { id: "highlights", label: "특장점" },
  { id: "effects", label: "기대효과" },
  { id: "functions", label: "기능" },
  { id: "screens", label: "화면" },
] as const;

type SectionId = (typeof allSections)[number]["id"];

export function BankingSectionNav({ showScreens = false }: { showScreens?: boolean }) {
  const sections = useMemo(
    () => allSections.filter((section) => showScreens || section.id !== "screens"),
    [showScreens],
  );
  const [active, setActive] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const onScroll = () => {
      const line = 152;
      let current: SectionId = sections[0].id;
      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (node && node.getBoundingClientRect().top <= line) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <nav aria-label="통합금융 구간" className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex overflow-x-auto [justify-content:safe_center]">
        <ul className="flex w-max gap-1 px-4 py-2 sm:px-6">
          {sections.map((section) => {
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
