"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

const groups = [
  {
    id: "intake",
    title: "주문 접수",
    summary: "거래처가 웹에서 주문전표를 작성하고, 품목·이미지를 확인하며 입력합니다.",
    items: [
      "거래처별 고유 ID로 접속",
      "주문전표 입력 및 주문내역 조회",
      "주문 입력 시 품목 정보·이미지 확인",
      "판매처 매출 처리 전 주문전표 수정",
    ],
    imageLabel: "주문전표 입력 화면 캡처",
  },
  {
    id: "fulfill",
    title: "수주·출고",
    summary: "주문이 들어오면 수주전표가 자동 작성되어 바로 출고(매출) 처리할 수 있습니다.",
    items: [
      "주문 시 수주전표 자동 생성",
      "판매처의 즉시 출고(매출) 처리",
      "출고 세금유형 선택",
      "거래원장으로 주문·출고 흐름 확인",
    ],
    imageLabel: "수주전표와 출고 처리 화면 캡처",
  },
  {
    id: "options",
    title: "주문 옵션",
    summary: "재고·중복 품목 안내와 박스/낱개 등 현장 옵션을 맞춰 둡니다.",
    items: [
      "박스/낱개 버전 옵션 설정",
      "주문 시 재고여부 메시지 설정",
      "중복 품목 체크 메시지 설정",
      "거래처 사용자 관리자 권한 설정",
    ],
    imageLabel: "주문 옵션 설정 화면 캡처",
  },
  {
    id: "reports",
    title: "조회·출력",
    summary: "상품 검색과 세금계산서 출력까지 주문 이후 업무를 이어서 처리합니다.",
    items: ["상품검색", "세금계산서 출력", "주문 내역·상태 한눈에 확인"],
    imageLabel: "주문 현황 조회 화면 캡처",
  },
] as const;

export function OrdersExplore() {
  const [active, setActive] = useState<(typeof groups)[number]["id"]>(groups[0].id);
  const [moveFocus, setMoveFocus] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const current = groups.find((group) => group.id === active) ?? groups[0];

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
    <section id="explore" className="scroll-mt-28 border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">이 제품으로 하는 일</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-600 sm:text-base">
          주문 접수부터 수주·출고, 옵션과 조회까지 필요한 업무만 골라 확인합니다.
        </p>

        <div className="mt-10" role="tablist" aria-label="주문관리 업무">
          <div className="flex gap-2 overflow-x-auto pb-1 [justify-content:safe_center]">
            {groups.map((group) => {
              const selected = group.id === current.id;
              return (
                <button
                  key={group.id}
                  ref={(node) => {
                    tabRefs.current[group.id] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`orders-tab-${group.id}`}
                  aria-selected={selected}
                  aria-controls={`orders-panel-${group.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(group.id, false)}
                  onKeyDown={onKeyDown}
                  className={`inline-flex shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                    selected ? "bg-navy text-white" : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-navy"
                  }`}
                >
                  {group.title}
                </button>
              );
            })}
          </div>
        </div>

        <div
          role="tabpanel"
          id={`orders-panel-${current.id}`}
          aria-labelledby={`orders-tab-${current.id}`}
          className="mt-8 grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12"
        >
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-navy">{current.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{current.summary}</p>
            <ul className="mt-6 space-y-3">
              {current.items.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <ImagePlaceholder label={current.imageLabel} resolution="1440x900px" />
        </div>
      </div>
    </section>
  );
}
