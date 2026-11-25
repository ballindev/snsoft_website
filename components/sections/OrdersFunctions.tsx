import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "order",
    title: "주문·수주",
    items: [
      "거래처별 고유ID사용",
      "주문전표 입력 및 주문내역 조회",
      "주문전표 입력시 품목정보, 품목이미지 확인 가능",
      "판매처에서 매출처리 전까지 주문전표 수정 가능",
      "주문 즉시 판매처에 수주전표로 자동 생성",
      "판매처에서 즉시 출고(매출) 처리 가능",
    ],
  },
  {
    id: "options",
    title: "옵션 설정",
    items: [
      "입수버전 옵션(묶음, 낱개) 설정 가능",
      "주문시 재고유무 메시지 옵션 설정 가능",
      "동일품목체크 메시지 옵션 설정 가능",
      "출고과세 유형 선택",
    ],
  },
  {
    id: "lookup",
    title: "권한·조회·출력",
    items: ["거래처 사용자 관리자 권한 설정 가능", "거래원장", "상품검색", "세금계산서 출력"],
  },
];

export function OrdersFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          주문 접수부터 수주·출고, 조회·출력까지 주문관리에 필요한 기능을 제공합니다.
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
