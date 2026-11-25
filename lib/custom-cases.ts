export type CaseDetail = string | { title: string; items: string[] };

export type CustomCase = {
  id: string;
  request: string;
  industry: string;
  period: string;
  modules: string[];
  details: CaseDetail[];
};

export const customCases: CustomCase[] = [
  {
    id: "mall-sync",
    request: "카페24, 메이크샵 등 온라인 쇼핑몰 연동",
    industry: "PC방 음료 외 납품",
    period: "1.5개월",
    modules: ["판매재고"],
    details: [
      "카페24, 메이크샵 엑셀 자료 Migration",
      "기초자료 품목, 거래처 체크 기능",
      "거래처별 미수금 재계산",
      "품목별 재고 재계산",
      "품목별 원가 재계산",
    ],
  },
  {
    id: "daycare-order",
    request: "어린이집 주문관리시스템",
    industry: "식자재 유통",
    period: "3개월",
    modules: ["판매재고"],
    details: [
      "기초 상품조회",
      "상품 이미지와 성분(원산지, 보관온도, 최소발주량, 과세여부, 특수사항 등)관리 기능 추가",
      "주문서표 생성 및 검색",
      "거래처원장 조회",
      "세금계산서 출력",
      "거래처정보 수정",
    ],
  },
  {
    id: "handy-terminal",
    request: "핸디터미널(DT-930) 자료 연동",
    industry: "이륜자동차 유통 및 정비",
    period: "1.5개월",
    modules: ["판매재고"],
    details: [
      "마스터파일 생성 (기초자료 품목, 거래처, 창고, 품목별 재고)",
      "마스터파일 핸디터미널(DT-930)로 보내기 기능",
      "핸디터미널(DT-930) 거래내역 가져오기 기능 (기초자료 품목, 거래처 자동 생성, 매출전표 자동 생성 및 거래명세서 출력)",
      "거래처별 미수금 재계산",
      "품목별 재고 재계산",
      "품목별 원가 재계산",
    ],
  },
  {
    id: "bank-deposit",
    request: "은행입금자료 연동",
    industry: "수입자동차 부품 유통업체",
    period: "2개월",
    modules: ["판매재고"],
    details: [
      "주거래 은행 입/출금 내역 Excel 가져오기 기능",
      "각 내역별 ERP 거래처 Matching 및 거래내용 확인 및 수정화면 / 입금자명과 ERP 상의 거래처 자동 검색 및 수정가능",
      "입금전표 일괄생성 및 일괄삭제 기능 / 생성된 전표에 은행입금정보 자동입력",
    ],
  },
  {
    id: "serial-no",
    request: "Serial No 관리 및 추적관리",
    industry: "자동차부품 및 산업용품 도소매",
    period: "1.5개월",
    modules: ["판매재고"],
    details: [
      "Serial No 관리 품목 체크 기능",
      "입출고 전표 작성 시 품목별 Serial No 입력",
      "Serial No 추적관리",
      "품목별 Serial No 별 재고목록",
    ],
  },
  {
    id: "fishing-trade",
    request: "낚시 전문 무역관리",
    industry: "낚시대 제조 및 도소매",
    period: "3개월",
    modules: ["판매재고", "무역관리"],
    details: [
      "Combo 구성 품목 관리",
      "Combo 구성 품목별 FOB 단가 관리",
      "주거래처 관리 및 오파관리",
      {
        title: "오파관리",
        items: ["Proforma Invoice 입력 및 보고서 3종류", "작업지시서 & Purchase Order 입력 및 보고서 4종류"],
      },
      {
        title: "선적/입고 관리",
        items: [
          "Commercial Invoice 입력 및 보고서 5종류",
          "무한수탁 입력",
          "Packing List 입력 및 보고서 4종류",
          "Sample Invoice 입력 및 보고서",
        ],
      },
      {
        title: "입출금 관리",
        items: ["입금/출금 관리", "Debit Note / Credit Note 관리"],
      },
      {
        title: "분석 및 보고서",
        items: [
          "바이어별 미수금 현황",
          "Order Status",
          "월별 매출 현황",
          "바이어별 Item별 매출현황",
          "바이어별 기존 & 신제품 매출현황",
          "바이어별 월별 매출 현황",
        ],
      },
    ],
  },
  {
    id: "pet-pos",
    request: "온라인 쇼핑몰 연동 및 대리점 POS 시스템 자료 연동",
    industry: "펫용품 유통",
    period: "3개월",
    modules: ["판매재고", "재무회계", "인사급여"],
    details: [
      "유니온넷 쇼핑몰 주문 자료 처리 및 주문전표 자동 생성",
      "송장 엑셀 전환 및 송장내역 엑셀 파일 생성",
      "오픈마켓 자료 연동 및 주문전표 자동 생성",
      {
        title: "대리점 POS 시스템 과의 연동",
        items: [
          "기초자료 품목",
          "기초자료 매입처",
          "계정과목",
          "매출(입금) 전표 가져오기",
          "출금(기타) 전표 가져오기",
        ],
      },
    ],
  },
  {
    id: "medical-mobile",
    request: "본사 회계 시스템과의 연동 및 모바일 주문관리 솔루션",
    industry: "의료용품 도소매",
    period: "2개월",
    modules: ["판매재고"],
    details: [
      {
        title: "본사 회계 시스템과의 연동",
        items: [
          "월 마감 후 영업관련 자료 전송 (상품매입, 매출원가, 매출자료)",
          "월 마감 후 생산관련 자료 전송 (자재매입, 외주가공비, 자재생산출고)",
        ],
      },
      {
        title: "모바일 주문관리 솔루션",
        items: ["로그인 및 메인 화면", "공지사항 검색 및 보기", "새로 주문하기 및 주문전표 검색", "품목 검색", "거래처원장"],
      },
    ],
  },
  {
    id: "expiry-stock",
    request: "유통기한 입력 및 유통기한별 품목별 재고관리",
    industry: "식자재 유통",
    period: "1.5개월",
    modules: ["판매재고"],
    details: [
      "유통기한 관리 품목 체크 기능",
      "기초자료 품목별 유통기한 입력 (XXX개월 XX일)",
      "유효 만료일자별 품목별 재고현황",
      "특정유효만료기간 기준 품목별 재고현황",
      "원가마감 시 유통기한 입력 여부 체크",
      "유통기한 미입력 전표 조회 기능",
    ],
  },
  {
    id: "cost-method",
    request: "영업부서용, 회계부서용 원가산정방식의 이원화",
    industry: "식자재 유통",
    period: "1개월",
    modules: ["판매재고"],
    details: [
      "매출이익은 사용자가 지정한 임의의 단가를 원가로 반영하여 산출",
      "재고금액 산출은 매입자료를 기반으로 한 총평균법 방식으로 산출",
    ],
  },
  {
    id: "dealer-vehicle",
    request: "딜러별 차량 주문 및 정비 이력 통합 관리, 본부 콜센터 연동",
    industry: "이륜자동차 유통 및 정비관리",
    period: "3개월",
    modules: ["판매재고", "정비관리"],
    details: [
      "주문 차량 등록 및 신차 등록 화면",
      "차량 매입 / 매출 전표 작성",
      "딜러별 매출내역",
      "차량 매입매출 내역",
      "정비 차대번호(VIN) 등록",
      "정비접수전표 작성 및 작업지시서 출력",
      "정비 견적서 작성",
      "정비 차량 이력 내역 관리 (딜러별 통합 관리)",
      "본부 콜센터 연동 (차량 및 고객 정보, 정비 및 매출내역)",
    ],
  },
  {
    id: "seafood-target",
    request: "영업사원별 거래처별 매출 목표 관리 및 매출 목표 대비 실적 관리",
    industry: "수산물 제조, 도소매",
    period: "1.5개월",
    modules: ["판매재고", "생산관리"],
    details: [
      "영업사원별 거래처별 매출 목표 등록(월별)",
      "거래처별 매출 목표 대비 실적 관리",
      "특정 영업대비 거래처별 매출 실적 현황",
      "영업사원별 거래처별 매출 목표 대비 실적 관리",
    ],
  },
  {
    id: "tile-schedule",
    request: "시공자 일정 관리 및 시공 일지 관리",
    industry: "타일, 도기 등 도소매",
    period: "1개월",
    modules: ["판매재고", "생산관리"],
    details: [
      "시공자 일정 관리",
      "타일시공자, 기구시공자 관리",
      "타일시공방법 및 타일시공상태 선택",
      "기구시공상태 선택 및 기구시공시간 관리",
      "시공 비용 관리",
      "시공일지 입력 및 검색",
      "매출전표 작성 시 시공일지 입력",
    ],
  },
  {
    id: "store-order",
    request: "매장주문시스템개발",
    industry: "식자재 유통",
    period: "6개월",
    modules: ["판매재고"],
    details: [
      {
        title: "각 매장별 식자재 주문기능 개발",
        items: [
          "Webpage 및 모바일 주문기능",
          "주문품목 입력방식 5가지 제공",
          "거래처별 품목별 단가연동기능",
          "주문가능시간 조정",
        ],
      },
      {
        title: "주문System 및 ERP 연동",
        items: [
          "주문전표 매출전표 가져오기 기능 및 미출고 품목확인 Report 제공",
          "Web을 통한 매장별 거래처원장 확인",
        ],
      },
      "공지사항 및 게시판 기능",
    ],
  },
  {
    id: "calt-logistics",
    request: "CALT 로지스 물류시스템 및 주문관리 시스템 연동",
    industry: "자동차타이어 도소매",
    period: "3개월",
    modules: ["판매재고", "재무회계"],
    details: [
      "기초자료 품목, 거래처 추가 및 수정 이력 내역 자료 전송",
      "매출전표 추가 및 수정 이력 내역 자료 전송",
      "출고 지시 추가 및 수정 이력 내역 자료 전송",
      {
        title: "주문관리 시스템 연동",
        items: [
          "매출전표 및 입금전표 수정 이력 내역 자료 전송",
          "거래처별 미수금 및 품목별 정보 전송",
          "주문내역 가져와 매출전표 자동 생성",
        ],
      },
    ],
  },
  {
    id: "engine-margin",
    request: "품목분류별 마진율 관리, 쇼핑몰 자료 연동 및 재고 UpDate",
    industry: "혼다 어선 및 보트 엔진 유통",
    period: "3개월",
    modules: ["판매재고"],
    details: [
      "품목분류별 마진율 입력",
      "기초자료 품목별 세부단가별(10가지) 마진율 입력",
      "거래처별 품목분류별 적용단가 관리(3가지 단가)",
      "매출전표 작성 시 품목분류별 적용단가 불러와 적용되도록",
      "쇼핑몰 품목 자동 연동",
      "쇼핑몰 품목별 재고 UpDate",
    ],
  },
  {
    id: "dealer-allocation",
    request: "딜러별 차량 주문 및 배정관리, 게시판 관리",
    industry: "이륜자동차 유통 및 정비",
    period: "3개월",
    modules: ["판매재고", "정비관리"],
    details: [
      "신차 주문 차량 등록 및 차대 번호 배정 관리",
      "차량 매입 / 매출 전표 작성",
      "차량 매입매출 내역 관리",
      "A/S 및 Parts 게시판 등록 및 조회",
      "보증 정비 내역 조회 및 승인 관리",
      "리콜 및 클레임, TA 정비 관련 TA Data 등록 관리",
      "본부관리 품목, 색상 등록 및 Update 관리",
    ],
  },
  {
    id: "hq-accounting-file",
    request: "본사 회계 시스템과의 연동",
    industry: "이륜자동차 유통 및 정비",
    period: "1.5개월",
    modules: ["판매재고", "정비관리"],
    details: [
      {
        title: "월 마감 후 전송할 파일 생성",
        items: ["매출 및 정비 차량 정보", "매출 및 정비 고객 정보", "신차 관련 매입/매출 전표 정보", "출고완료된 정비 전표"],
      },
    ],
  },
  {
    id: "exception-price",
    request: "매출단가 일괄 Update 및 품목별 예외판가(행사단가) 관리",
    industry: "야채 및 농산물 식자재 유통",
    period: "1.5개월",
    modules: ["판매재고", "정비관리"],
    details: [
      "품목별 주거래처 관리",
      "매출 품목별 주거래처별 발주 및 매입전표 작성",
      "구매단가 기준으로 마진율 조정 후 매출전표 단가 일괄 조정",
      "품목별 예외판가(행사단가) 등록",
      "매출전표 작성 시 예외판가(행사단가) 적용",
    ],
  },
  {
    id: "nationwide-dealers",
    request: "전국 대리점 매출 데이터 취합 및 미국 본사 전산 시스템 연동",
    industry: "유통업종",
    period: "12개월",
    modules: ["판매재고"],
    details: [
      {
        title: "각 대리점별 Data 자동수집 System 개발",
        items: ["특정시각에 매출내역 자동수집(Daily)"],
      },
      "각 대리점별 사용 품목, 거래처정보 Matching 작업지원",
      {
        title: "매출내역 Excel 가져오기 기능 개발",
        items: ["30여종의 ERP에서 배출되는 매출내역 Import System 개발", "수집품목 식별 기능 및 신규거래처 일괄 등록기능개발"],
      },
      {
        title: "수집Data 미국본사 전산시스템 연동",
        items: ["미국본사 System에 지사에서 취급하는 품목, 거래처 등록 및 매출내역 연동"],
      },
    ],
  },
  {
    id: "global-erp",
    request: "본사 글로벌ERP시스템과의 연동",
    industry: "특수 산업용 소재 유통",
    period: "1개월",
    modules: ["판매재고", "재무회계"],
    details: [
      "본사 글로벌 ERP시스템에서 기초자료 및 거래내역 가져오기",
      "회계시스템과의 연동을 통한 전자세금계산서 발행 및 부가세신고 기능",
    ],
  },
  {
    id: "traceability",
    request: "개체식별번호 관리시스템",
    industry: "축산물가공 유통업체",
    period: "8개월",
    modules: ["판매재고"],
    details: [
      "개체식별번호 등록 및 축산물 정보 등록(도축장, 유통기한, 제조일 부위코드 원산지 등)",
      {
        title: "전표작성 시 개체식별번호 연동",
        items: [
          "스마트폰을 통한 개체식별번호 입력 및 매입/매출전표작성 시 개체식별번호 연동가능",
          "거래명세서에 개체식별번호 및 축산물정보 출력",
        ],
      },
      "개체식별번호 조회 및 수불내역 검색",
      "개체식별번호/제조일 별 수불집계",
      "축산물 이력정보 Site 신고서식 Excel 배출",
    ],
  },
];

export const caseTopics = [
  { id: "order-price", label: "주문·단가" },
  { id: "stock-trace", label: "재고·이력" },
  { id: "vehicle", label: "차량·정비" },
  { id: "integration", label: "외부 연동" },
  { id: "specialty", label: "업종 전용" },
] as const;

export type CaseTopicId = (typeof caseTopics)[number]["id"];

const topicById = {
  "daycare-order": "order-price",
  "cost-method": "order-price",
  "seafood-target": "order-price",
  "store-order": "order-price",
  "exception-price": "order-price",
  "engine-margin": "order-price",
  "handy-terminal": "stock-trace",
  "serial-no": "stock-trace",
  "expiry-stock": "stock-trace",
  "traceability": "stock-trace",
  "dealer-vehicle": "vehicle",
  "dealer-allocation": "vehicle",
  "hq-accounting-file": "vehicle",
  "mall-sync": "integration",
  "bank-deposit": "integration",
  "pet-pos": "integration",
  "medical-mobile": "integration",
  "calt-logistics": "integration",
  "nationwide-dealers": "integration",
  "global-erp": "integration",
  "fishing-trade": "specialty",
  "tile-schedule": "specialty",
} as const satisfies Record<CustomCase["id"], CaseTopicId>;

export function topicForCase(item: CustomCase): CaseTopicId {
  return topicById[item.id as keyof typeof topicById];
}
