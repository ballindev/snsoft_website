import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "issue",
    title: "작성·발급",
    items: [
      "매입/매출 거래에 대한 전자(세금)계산서 작성·발급",
      "매출전표 내역을 전자(세금)계산서로 발행",
      "전표 작성 시 세부정보 확인 가능",
    ],
  },
  {
    id: "transmit",
    title: "국세청 전송",
    items: [
      "전자(세금)계산서 국세청 전송",
      "발행·전송·수정·미발행 상태 구분",
      "신고건 누락 등 실수 방지",
    ],
  },
  {
    id: "manage",
    title: "보관·연동",
    items: [
      "발행된 전자(세금)계산서 금융결제원 서버 5년 보관",
      "빠른 엑셀 파일 전환",
      "타 제품과 유기적인 통합 관리 가능",
    ],
  },
];

export function ETaxFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          작성·발급부터 국세청 전송, 상태 확인까지 전자세금계산서 업무에 필요한 기능을 제공합니다.
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
