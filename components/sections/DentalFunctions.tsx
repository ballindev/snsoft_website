import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups: { id: string; title: string; items: string[]; note?: string }[] = [
  {
    id: "sales",
    title: "영업·여신",
    items: [
      "거래처별 영업사원별 실적관리 가능",
      "거래처별 여신/결제/미수채권/악성미수금 현황 등 고급 여신관리 가능",
      "매출전표 상에서 신속한 품목검색 기능 및 다양한 영업정보 제공",
      "매출시 창고별 현재고, 최근 매입내역 및 매출내역, 거래처별 미수금 조회 가능",
      "거래처별 기존 거래품목만 별도 조회 및 입력 기능 (유사 품목 착오 입력 방지)",
    ],
  },
  {
    id: "profit",
    title: "이익·수주",
    items: [
      "전표 상에서 실시간으로 각 품목별/전표단위의 매출이익 분석 가능",
      "전표 작성과 동시에 실시간으로 매출이익 및 이익율 조회가 가능",
      "견적서, 수주전표 및 판매 기대품목 작성 및 매출전표에서 견적서 및 수주전표 가져오기 가능",
      "각 거래처에서 온라인 상으로 직접 주문입력이 가능",
    ],
  },
  {
    id: "stock-tax",
    title: "재고·세금",
    items: [
      "월합계 세금계산서/거래명세서 발행",
      "전자(세금)계산서 국세청 전송",
    ],
    note: "다양한 원가산정방식에 의한 재고관리 및 손익 분석 가능(선입선출법, 총평균법, 이동평균법, 기준매입단가법, 개별원가법 등)",
  },
];

export function DentalFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          영업·여신부터 이익 분석, 온라인 주문, 재고·세금까지 치과기자재 유통에 필요한 기능을 제공합니다.
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
