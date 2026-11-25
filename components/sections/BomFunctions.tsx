import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups: { id: string; title: string; items: string[]; note?: string }[] = [
  {
    id: "master",
    title: "기준·원가",
    items: [
      "품목별 특정단가 관리",
      "간편한 BOM 입력 및 조회 가능",
      "생산(외주)계획 및 생산(외주)의뢰전표 자동이체 가능",
    ],
    note: "다양한 원가산정방식 설정 지원(선입선출법, 후입선출법, 총평균법, 이동평균법, 기준매입단가법, 개별원가법 등)",
  },
  {
    id: "plan",
    title: "생산계획/의뢰관리",
    items: [
      "생산계획서 출력 및 생산계획별 소요량 산출",
      "소요량 계산시 품목 묶음단위, 낱개단위 사용가능",
      "소요량 계산표에서 발주(소요량계산분/최적발주량/미달량) 및 자재생산출고전표 작성 가능",
    ],
  },
  {
    id: "material",
    title: "자재관리",
    items: [
      "사업장별 재고현황 관리",
      "다양한 유형의 전표작성이 가능",
      "전표창에서 미착품목 및 부족재고현황 조회가 가능",
      "발주서출력 기능",
    ],
  },
  {
    id: "outsource",
    title: "외주관리",
    items: ["생산계획과 밀접한 연동처리기능", "외주자재출고시 출고증 출력"],
  },
  {
    id: "finance",
    title: "금전관리",
    items: [
      "매입/매출과 관련없는 비용처리 기능",
      "간단한 경리업무기능 제공(현금출납부, 계정별원장, 통장명세서, 카드명세서, 비용분석 등)",
      "전표에서 거래처입력시 해당거래처의 미수/미지급현황 조회 가능",
    ],
  },
];

export function BomFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          BOM·생산계획부터 자재·외주·금전관리까지 생산자재 업무에 필요한 기능을 제공합니다.
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
