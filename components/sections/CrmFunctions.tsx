import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups: { id: string; title: string; items: string[] }[] = [
  {
    id: "customer",
    title: "고객·상담",
    items: ["고객 기본정보 관리", "고객별 상담내역 관리", "일정관리"],
  },
  {
    id: "billing",
    title: "청구·수납",
    items: ["고객별 청구/수납 관리", "사업장별 청구자료 분석", "CMS 관리"],
  },
  {
    id: "serial",
    title: "시리얼·발송",
    items: [
      "제품 시리얼번호 관리 (생성 및 조회)",
      "DM 발송",
      "고객정보에서 SMS(문자메시지) 발신 기능",
      "발송목록 출력",
    ],
  },
  {
    id: "collab",
    title: "사내 협업",
    items: ["사내공지 등 사내 게시판 기능", "사내메시지 기능"],
  },
];

export function CrmFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          고객 정보부터 상담, 청구/수납, 시리얼·발송, 사내 협업까지 고객관리에 필요한 기능을 제공합니다.
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
