import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "signup",
    title: "가입·설정",
    items: [
      "KB국민은행: 기업인터넷뱅킹 가입 → Star CMS 가입 → 바로ERP 약정",
      "기가입 고객은 해당 서비스 가입 생략",
      "관리자 설정 > 통합금융 ID 설정 > 추가 > 인터넷뱅킹 ID 인증 > 사용자 지정",
      "Star CMS 고객지원: 1833-8222",
    ],
  },
  {
    id: "accounts",
    title: "계좌·조회",
    items: [
      "기초자료 > 거래처 > 금융계좌 > 국민은행 출금계좌 등록",
      "자금이체 거래처 계좌 등록",
      "실시간 예금주 조회",
      "국민은행 출금계좌 잔액 실시간 확인",
    ],
  },
  {
    id: "transfer",
    title: "즉시이체",
    items: [
      "재무회계 계정별잔액(외상매입금 등 부채 계정) 조회 후 대량이체 목록 구성",
      "판매재고 미지급 잔액 일괄 조회로 대량이체 목록 구성",
      "건별 즉시이체 목록 추가/수정",
      "목록에서 대상 선택 후 이체 및 결재 실행",
      "전자서명·OTP 입력으로 이체 완료",
    ],
  },
];

export function BankingFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          가입·설정부터 계좌 등록, 즉시이체 실행까지 통합금융 업무 흐름을 제공합니다.
        </p>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <ProductFunctionGroup key={group.id} title={group.title} items={group.items} />
          ))}
        </ul>
      </div>
    </section>
  );
}
