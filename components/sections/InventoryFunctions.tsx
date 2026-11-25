import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

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
];

export function InventoryFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          기준정보, 거래, 세금계산서, 재고·분석 등 영업관리에 필요한 기능을 제공합니다.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
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
