"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronRight } from "lucide-react";

const groups = [
  {
    id: "master",
    title: "기준정보",
    items: [
      "상품품목 및 단가 관리",
      "거래처 관리",
      "매장/창고 관리",
      "배송자, 배송유형 관리",
      "패키지 구성 품목 관리",
      "프로젝트 관리",
      "다중사업장 관리",
    ],
  },
  {
    id: "trade",
    title: "거래",
    items: ["견적서 관리", "수주/발주 관리", "매입/매출 관리", "입금/출금 관리", "선수금/선급금 관리"],
  },
  {
    id: "tax",
    title: "세금계산서",
    items: ["월합계 세금계산서/거래명세서 발행", "전자(세금)계산서 국세청 전송"],
  },
  {
    id: "stock",
    title: "재고·분석",
    items: [
      "재고현황 및 분석 관리",
      "미수/미지급금 관리",
      "원가산정방식별 이익분석",
      "거래처별 품목별 종합 분석 관리",
      "실적분석, 현금흐름분석 등 영업자료 분석 관리",
      "결산 및 재고조정",
    ],
    note: "다양한 원가산정방식 설정 지원(선입선출법, 총평균법, 이동평균법, 기준매입단가법, 개별원가법 등)",
  },
] as const;

export function InventoryFunctions() {
  const [active, setActive] = useState<(typeof groups)[number]["id"]>(groups[0].id);
  const [moveFocus, setMoveFocus] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (moveFocus) tabRefs.current[active]?.focus();
  }, [active, moveFocus]);

  function select(id: (typeof groups)[number]["id"], focus: boolean) {
    setMoveFocus(focus);
    setActive(id);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = groups.findIndex((group) => group.id === active);
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = groups[(index + direction + groups.length) % groups.length];
    select(next.id, true);
  }

  return (
    <section id="functions" className="scroll-mt-36 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          기준정보에서 거래, 세금계산서, 재고·분석으로 이어집니다.
        </p>
        <div role="tablist" aria-label="주요기능" className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {groups.map((group, index) => {
            const selected = group.id === active;
            return (
              <div key={group.id} className="flex items-center gap-2">
                <button
                  type="button"
                  role="tab"
                  ref={(node) => {
                    tabRefs.current[group.id] = node;
                  }}
                  id={`inventory-tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`inventory-panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(group.id, false)}
                  onKeyDown={onKeyDown}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${
                    selected ? "bg-navy text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-navy"
                  }`}
                >
                  <span className={selected ? "text-sky-200" : "text-brand"}>{String(index + 1).padStart(2, "0")}</span>
                  {group.title}
                </button>
                {index < groups.length - 1 ? <ChevronRight className="hidden size-4 text-slate-300 sm:block" aria-hidden /> : null}
              </div>
            );
          })}
        </div>
        {groups.map((group) => {
          const selected = group.id === active;
          return (
            <div
              key={group.id}
              role="tabpanel"
              id={`inventory-panel-${group.id}`}
              aria-labelledby={`inventory-tab-${group.id}`}
              hidden={!selected}
              className="mx-auto mt-8 max-w-4xl"
            >
              <ul className="flex flex-wrap justify-center gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded-full bg-[#f4f7fb] px-4 py-2 text-sm font-medium text-navy">
                    {item}
                  </li>
                ))}
              </ul>
              {"note" in group ? <p className="mx-auto mt-5 max-w-2xl text-center text-sm leading-6 text-slate-500">{group.note}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
