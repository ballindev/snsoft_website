import { ProductFunctionGroup } from "@/components/sections/ProductFunctionItems";

const groups = [
  {
    id: "stores",
    title: "매장·주문",
    items: [
      "매장단가(공급가, 판매가) 적용 관리",
      "POS 자료 연동",
      "온라인 주문 품목의 매출 전표 작성 및 배송 관리",
      "품목별 유효기간 관리",
      "적정재고 관리 및 자동 발주 기능",
      "반품 품목 재고 및 사후 관리",
      "오배송 방지를 위한 배송 목록 창고 및 저장 위치 표시 기능",
    ],
  },
  {
    id: "stock",
    title: "전표·재고",
    items: [
      "입출금전표 입력시 포인트 적용 가능",
      "기초 품목에 재고관리 제외 품목 등록으로 택배비 및 운송료 미수금에 반영 가능",
      "견적서, 수주전표 및 판매 기대품목 작성 가능",
      "매출시 품목별 창고별 현재고, 최근 매입내역 및 매출내역, 거래처별 미수금 조회 가능",
      "매출시 견적서 및 수주전표 가져오기 기능 가능",
      "매장별 매출 실적 및 실시간 재고 파악이 가능",
      "Handy Terminal, 바코드 스캐너를 이용한 재고 관리 기능",
    ],
  },
  {
    id: "finance",
    title: "원가·여신·세금",
    items: [
      "거래처별로 담당하는 영업사원 등록하여 별도 관리 가능",
      "내수/무역의 거래 구분에 따라 전표 작성시 환율 등록 가능하며, 외화와 원화 동시 관리 가능",
      "수입 품목 부대비용을 반영한 원가 계산 기능",
      "다양한 원가산정방식에 의한 재고관리 및 손익 분석 가능(선입선출법, 후입선출법, 총평균법, 이동평균법, 기준매입단가법, 개별원가법 등)",
      "월합계 세금계산서, 거래명세서 출력 가능",
      "거래처별 여신 한도 설정하여 여신/결제/미수채권/악성미수금 현황 등 고급 여신관리 가능",
      "영업사원별/이익부서별 각종 분석 자료 제공",
    ],
  },
];

export function StoreFunctions() {
  return (
    <section id="functions" className="scroll-mt-36 bg-[#f4f7fb] py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요기능</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
          POS 연동부터 매장 단가·재고, 여신과 세금계산서까지 매장 운영에 필요한 기능을 제공합니다.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <ProductFunctionGroup key={group.id} title={group.title} items={[...group.items]} />
          ))}
        </ul>
      </div>
    </section>
  );
}
