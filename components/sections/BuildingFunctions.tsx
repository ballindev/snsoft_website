import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "meter",
    title: "검침 입력",
    items: [
      "전기/수도/온수/난방 사용량 입력이 용이",
      "전출입 동호 개별 사용량 별도 입력으로 완벽한 관리비 계산 가능",
    ],
  },
  {
    id: "billing",
    title: "부과 업무",
    items: [
      "전기요금 자동계산으로 전기료 예상부과 가능",
      "부과시 각 항목별로 사용량 부과, 면적 부과 선택 가능",
      "일반관리비 항목 회계 자료에서 자동 집계",
      "월정임대료 및 월정관리비 부과 가능",
      "수익사업 원가 자동 배분",
      "전출입 동호 및 미입주 세대 관리비 자동 계산",
      "부과와 동시에 회계전표, (세금)계산서 자동 생성",
      "선급/선수 목록 관리 및 부과 용이",
    ],
  },
  {
    id: "payment",
    title: "수납/연체료 관리",
    items: [
      "수납 처리와 동시에 회계전표 자동 생성",
      "자동이체 신청 세대 별도 관리 가능",
      "연체율 월별로 차등 적용하여 관리 가능",
      "동호별 월별 체납 대장 등 다양한 보고서 지원",
    ],
  },
  {
    id: "accounting",
    title: "회계 관리",
    items: [
      "일반관리비 전표 처리시 부과/미부과 옵션 처리 가능",
      "수익사업 원가 자동 배분에 의한 비영리사업/영리사업 손익계산서 별도 작성 가능",
      "초급 경리지식으로도, 자동분개에 의해 회계 처리 가능",
      "부가가치세 전자신고 가능",
      "재무제표 등 다양한 회계 보고서 지원",
    ],
    note: "재무회계 시스템과의 연동",
  },
  {
    id: "parking",
    title: "주차 관리",
    items: [
      "1회의 차량 등록으로 월정 주차요금 자동 계산",
      "다양한 유형의 주차쿠폰 판매 및 수불 관리 가능",
      "월정 주차요금 및 주차쿠폰 월합계 관리",
      "분양 면적에 의한 무료 주차 관리",
    ],
  },
];

export function BuildingFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          검침, 부과, 수납, 회계, 주차 등 빌딩 운영에 필요한 기능을 제공합니다.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <ProductFunctionGroup
              key={group.id}
              title={group.title}
              note={group.note}
              items={group.items}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
