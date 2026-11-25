import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups: { id: string; title: string; items: string[]; note?: string }[] = [
  {
    id: "sales",
    title: "육가공 판매관리",
    items: [
      "입출고 관리 기능",
      "개체식별번호, 도축장정보, 원산지, 제조일, 등급, 도체번호 등 다양한 축산정보 입력 관리",
      "개체식별번호별 이력관리",
      "축산구분별, 원산지별, 개체식별번호별 수불내역 조회",
      "이력번호별 수불내역 및 재고 관리",
      "100여종에 이르는 다양한 분석자료",
    ],
    note: "이력 신고용 전자파일 생성 가능(축산물이력관리 mtrace.go.kr, 수입쇠고기 유통이력시스템 meatwatch.go.kr 전자신고 지원)",
  },
  {
    id: "production",
    title: "육가공 생산관리",
    items: [
      "포장(소분) 가공 관리",
      "포장(소분) 가공 후 남은 잔량에 대한 폐기 또는 재입고 처리 기능",
      "묶음가공 관리",
      "전자저울 연동",
      "바코드라벨 출력 가능",
    ],
  },
];

export function MeatProcessingFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          육가공 판매관리와 생산관리로 입고부터 가공·출고, 이력 신고까지 지원합니다.
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
