import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "link",
    title: "차량·연동",
    items: [
      "본부와 딜러간의 유기적인 데이터 연동이 가능",
      "거래처별 개인정보 수집, 이용 동의 항목",
      "신차, 시승차, 중고차 등 차량 구분에 따른 관리",
      "품목 대분류/중분류/소분류 체계적인 관리 및 일괄등록 기능",
      "특정 품목만 본부에서 관리 권한 부여 가능",
      "이륜자동차 제작증 출력 기능(출력여부 확인 가능)",
    ],
  },
  {
    id: "orders",
    title: "주문관리",
    items: [
      "주문차량 입력 및 검색 기능",
      "신차등록 및 검색 기능",
      "세부항목별 할인율(%) 및 할인액 입력 관리",
    ],
  },
  {
    id: "hq",
    title: "본부관리",
    items: [
      "차대번호(VIN) 배정 및 이륜자동차제작 입력 관리",
      "딜러 주문내역 확인 가능",
      "차량 매입/매출 내역 확인 가능",
      "정비 차량 이력 내역 확인 가능",
      "PDI 보증 내역 확인 가능",
      "딜러별 재고현황 확인 가능",
    ],
  },
  {
    id: "service",
    title: "정비관리",
    items: [
      "정비접수전표 입력 및 접수현황 검색 기능",
      "차대번호, 전면, 후면, 옆면, 증상 등 사진 첨부 기능",
      "정비견적서 관리",
      "예약현황 검색 기능",
      "입금/선금/대체전표 작성 기능",
      "차대번호(VIN) 관리",
    ],
  },
];

export function VehicleFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          주문 접수부터 차대번호 배정, 입고·출고와 정비까지 차량 유통에 필요한 기능을 제공합니다.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {groups.map((group) => (
            <ProductFunctionGroup key={group.id} title={group.title} items={[...group.items]} />
          ))}
        </ul>
      </div>
    </section>
  );
}
