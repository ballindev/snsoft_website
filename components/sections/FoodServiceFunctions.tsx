import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "orders",
    title: "주문·단가",
    items: [
      "인터넷으로 주문받은 내역에 대한 출고상태 조회 가능",
      "주문 시 해당 품목의 단가를 실시간으로 확인 가능",
      "주문받은 수주건 매출전표 자동입력 가능",
      "거래처별 품목별 세부적인 단가 적용 가능",
      "한번의 매입단가 입력으로 지정된 마진율별 거래처별 매출단가 자동계산",
      "품목이 많을 경우 품목그룹을 지정하여 마진율을 일괄 적용 가능",
    ],
  },
  {
    id: "stock",
    title: "재고·원가",
    items: [
      "전표 입력시 실시간으로 출고품목의 재고, 원가, 이익률 확인 가능",
      "바코드 스캐너 및 핸디터미널을 사용한 재고관리 가능",
      "바코드 라벨 출력",
      "사업장별 창고별 재고 수불 내역 확인",
      "다양한 원가산정방식에 의한 재고관리 및 손익 분석 가능(선입선출법, 총평균법, 이동평균법, 기준매입단가법, 개별원가법 등)",
    ],
  },
  {
    id: "settlement",
    title: "채권·세금",
    items: [
      "사업장별 거래처별 영업사원별 미수/미지급금 현황 확인 가능",
      "거래처 원장 등 각종 보고서 지원",
      "월합계 세금계산서/거래명세서 발행",
      "전자(세금)계산서 국세청 전송",
    ],
  },
];

export function FoodServiceFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          온라인 수주부터 단가·재고, 미수와 세금계산서까지 식자재 유통에 필요한 기능을 제공합니다.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <ProductFunctionGroup key={group.id} title={group.title} items={[...group.items]} />
          ))}
        </ul>
      </div>
    </section>
  );
}
