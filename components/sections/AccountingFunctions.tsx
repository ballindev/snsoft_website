import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "slips",
    title: "전표·세금",
    items: [
      "매입/매출 세금계산서 입력시 최첨단 자동분개 시스템",
      "매출전표 발행과 동시에 (세금)계산서 출력",
      "입금/출금/대체전표 입력 관리",
      "전자(세금)계산서 국세청 전송",
      "부가가치세 관리 및 전자신고 파일 생성",
    ],
  },
  {
    id: "accounts",
    title: "계정·결산",
    items: [
      "하위계정 등록에 의한 계정과목의 세분화 관리",
      "지출증빙 입력관리",
      "기초잔액 및 결산자료 입력에 의한 전표 자동생성",
      "미처분이익잉여금 및 미처리결손금의 손쉬운 처분",
      "다중사업장 관리",
      "재무제표 등 다양한 보고서 지원",
    ],
  },
  {
    id: "budget",
    title: "원가·예산",
    items: [
      "현장별 공사현황관리 및 보고서 지원",
      "사업장별 원가명세서 지원",
      "부서별/월별 손익 및 원가현황 지원",
      "부서별/월별 예산/실적 관리",
    ],
  },
  {
    id: "funds",
    title: "자금·자산",
    items: ["자금현황관리(예: 적금/대출관리)", "어음관리", "고정자산관리", "전자결재 지원"],
  },
];

export function AccountingFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          전표·세금부터 원가·예산, 자금·자산까지 회계관리에 필요한 기능을 제공합니다.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {groups.map((group) => (
            <ProductFunctionGroup key={group.id} title={group.title} items={group.items} />
          ))}
        </ul>
      </div>
    </section>
  );
}
