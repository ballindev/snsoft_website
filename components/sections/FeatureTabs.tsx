"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Factory, Landmark, ScanBarcode, ShoppingCart } from "lucide-react";
import { AccountingPreview, ProductionPreview, SalesPreview, SpecialtyPreview } from "@/components/mocks/ErpPreviews";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tabs = [
  {
    id: "finance",
    label: "회계/금융",
    icon: Landmark,
    summary: "재무회계, 전자세금계산서, 계좌 입출금을 한 흐름으로 맞춥니다.",
    points: ["전표·장부·재무제표", "세금계산서 발행과 전송 상태", "입출금과 전표 대조"],
    preview: AccountingPreview,
  },
  {
    id: "sales",
    label: "영업/유통",
    icon: ShoppingCart,
    summary: "견적부터 주문, 출고, 매장 판매까지 재고가 같이 움직입니다.",
    points: ["판매재고와 주문 상태", "거래처·품목 단가", "매장별 매출과 재고"],
    preview: SalesPreview,
  },
  {
    id: "production",
    label: "생산/자재",
    icon: Factory,
    summary: "BOM과 생산지시, 자재 소요를 연결해 현장 수불을 맞춥니다.",
    points: ["다단계 BOM", "자재 부족 알림", "생산 실적과 재고 반영"],
    preview: ProductionPreview,
  },
  {
    id: "specialty",
    label: "특화관리",
    icon: ScanBarcode,
    summary: "업종마다 다른 로트, 바코드, 양식, 단가 규칙을 표준 위에 올립니다.",
    points: ["로트·유통기한", "바코드 스캔 이력", "특수 양식과 외부 기기 연동"],
    preview: SpecialtyPreview,
  },
];

export function FeatureTabs() {
  const [active, setActive] = useState(tabs[0].id);
  const [moveFocus, setMoveFocus] = useState(false);
  const [animatedId, setAnimatedId] = useState<string | null>(null);
  const reduce = useReducedMotion();
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];
  const Preview = current.preview;
  const canAnimate = animatedId === current.id && reduce === false;

  function selectTab(id: string, focus: boolean) {
    setAnimatedId(id);
    setMoveFocus(focus);
    setActive(id);
  }

  useEffect(() => {
    if (moveFocus) tabRefs.current[active]?.focus();
  }, [active, moveFocus]);

  function onTabKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    const index = tabs.findIndex((tab) => tab.id === active);
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const next = tabs[(index + direction + tabs.length) % tabs.length];
    selectTab(next.id, true);
  }

  return (
    <section id="features" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Modules"
          title="실무 화면으로 보는 핵심 기능"
          description="탭을 누르면 회계, 영업, 생산, 업종 특화 업무의 설명과 예시 화면이 함께 바뀝니다."
        />
        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div>
            <div role="tablist" aria-label="핵심 기능" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {tabs.map((tab) => {
                const selected = tab.id === active;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    ref={(node) => {
                      tabRefs.current[tab.id] = node;
                    }}
                    id={`tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectTab(tab.id, false)}
                    onKeyDown={onTabKeyDown}
                    className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition ${
                      selected ? "border-navy bg-navy text-white" : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                    }`}
                  >
                    <Icon className={`size-5 shrink-0 ${selected ? "text-sky-200" : "text-brand"}`} aria-hidden />
                    <span className="text-sm font-semibold">{tab.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="mt-6" role="tabpanel" id={`panel-${current.id}`} aria-labelledby={`tab-${current.id}`}>
              <h3 className="text-xl font-semibold tracking-tight text-navy">{current.label}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{current.summary}</p>
              <ul className="mt-4 space-y-2">
                {current.points.map((point) => (
                  <li key={point} className="text-sm text-slate-700">· {point}</li>
                ))}
              </ul>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={canAnimate ? { opacity: 0, y: 8 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={canAnimate ? { opacity: 0, y: -8 } : undefined}
              transition={{ duration: 0.2 }}
            >
              <Preview />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
