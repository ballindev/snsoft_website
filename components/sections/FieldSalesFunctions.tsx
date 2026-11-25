import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "trade",
    title: "거래",
    items: ["매입/매출 관리", "입금/출금 관리", "견적서 관리", "미수/미지급금 관리"],
  },
  {
    id: "master",
    title: "기준·재고",
    items: ["매장/창고 관리", "재고 분석 관리", "상품품목 및 단가 관리", "거래처 관리", "결산 및 재고조정"],
  },
  {
    id: "analysis",
    title: "분석",
    items: ["원가산정방식별 이익분석", "실적분석, 현금흐름분석 등 영업자료 분석 관리"],
    note: "원가산정방식(총평균법, 기준매입단가법) 설정 지원",
  },
  {
    id: "tax",
    title: "세금계산서",
    items: ["월합계 세금계산서/거래명세서 발행", "전자(세금)계산서 국세청 전송"],
  },
];

export function FieldSalesFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          거래, 기준·재고, 분석, 세금계산서 등 영업관리에 필요한 기능을 제공합니다.
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
