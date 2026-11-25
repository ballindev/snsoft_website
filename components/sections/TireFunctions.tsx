import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups: { id: string; title: string; items: string[]; note?: string }[] = [
  {
    id: "store",
    title: "매장·영업",
    items: [
      "재고관리 제외 품목 등록으로 택배비, 운송비 등을 미수금에 반영 가능",
      "거래처별 담당영업사원 등록으로 별도 관리 가능",
      "견적서, 수주전표 및 판매 기대품목 작성 가능",
      "매출시 각 품목별 창고별 현재고, 최근 매입내역 및 매출내역, 거래처별 미수금 조회 가능",
      "매출시 견적서 및 수주전표 가져오기 기능",
      "매장별 실시간 재고파악 및 매출실적 관리 가능",
    ],
  },
  {
    id: "finance",
    title: "여신·원가·세금",
    items: [
      "국내/무역거래유형에 따라 전표작성시 환율등록 가능하며 외화와 원화 동시관리",
      "거래처별 여신한도액 설정으로 고급여신관리 가능 (여신/결제/미수채권/악성미수금 현황)",
      "월합계 세금계산서/거래명세서 발행 가능",
    ],
    note: "다양한 원가산정방식에 의한 재고관리 및 손익 분석 가능(선입선출법, 총평균법, 이동평균법, 기준매입단가법, 개별원가법 등)",
  },
  {
    id: "ops",
    title: "현장·분석",
    items: [
      "Handy Terminal, Barcode Scanner를 이용한 재고관리 기능",
      "영업사원별/손익부서별 다양한 분석자료 제공",
    ],
  },
];

export function TireFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          매장별 매출·재고부터 여신·원가, 바코드 현장 관리까지 타이어 유통에 필요한 기능을 제공합니다.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <ProductFunctionGroup
              key={group.id}
              title={group.title}
              note={group.note}
              items={[...group.items]}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
