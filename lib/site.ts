export const CONSULTATION_HREF = "/#consultation";
export const REMOTE_SUPPORT_HREF = "/support/remote";

export type Faq = { question: string; answer: string };

export type NavLink = {
  label: string;
  href: string;
  description: string;
  body?: string;
  imageLabel?: string;
  imageResolution?: string;
  faqs?: Faq[];
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export type NavItem = {
  id: string;
  label: string;
  groups: NavGroup[];
};

export type SitePage = {
  title: string;
  href: string;
  description: string;
  group: string;
  body: string;
  imageLabel: string;
  imageResolution: string;
  faqs?: Faq[];
};

const shot = "1440x900px";
const photo = "1200x675px";

export const mainNav: NavItem[] = [
  {
    id: "products",
    label: "제품",
    groups: [
      {
        title: "영업/유통",
        links: [
          {
            label: "판매재고",
            href: "/products/inventory",
            description: "입고, 출고, 재고 수불을 같은 기준으로 맞춥니다.",
            body: "창고와 매장의 입고·출고·조정·현재고를 한 수불 기준으로 관리합니다. 바코드 검수나 위치 관리가 필요하면 표준 재고 위에 기기 연동을 추가합니다.",
            imageLabel: "판매재고 수불부와 현재고 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "주문관리",
            href: "/products/orders",
            description: "전화·팩스 없이 거래처 주문을 한꺼번에 해결합니다.",
            body: "거래처가 주문전표를 작성하면 판매처에 자동으로 수주전표가 작성되어 즉시 출고 처리할 수 있습니다. 주문내역과 수주·출고 현황을 한눈에 확인합니다.",
            imageLabel: "주문 현황과 출고 상태 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "영업통",
            href: "/products/field-sales",
            description: "매입·매출부터 재고·세금계산서까지 함축한 영업관리 Lite입니다.",
            body: "매입/매출, 미수·미지급, 견적서, 전자세금계산서, 재고·거래처·품목 관리 등 영업관리에 필요한 기능을 담은 본격 영업관리 프로그램입니다. ERP 판매재고의 Lite 버전으로 부담 없이 시작할 수 있습니다.",
            imageLabel: "영업통 매입매출과 재고 현황 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "발주관리",
            href: "/products/purchase-order",
            description: "거래처·본사 간 발주와 입고 처리를 한 흐름으로 관리합니다.",
            body: "발주 요청부터 승인, 입고 반영까지 수발주 업무를 연결합니다. 거래처별 발주 단위와 납기 규칙은 상담에서 표준 흐름과 맞춰 봅니다.",
            imageLabel: "발주 현황과 입고 처리 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "정비관리",
            href: "/products/maintenance",
            description: "정비 접수, 작업, 부품 사용 이력을 체계적으로 남깁니다.",
            body: "정비 접수부터 작업 진행, 부품 사용, 완료까지 이력을 남깁니다. 현장 양식이 있으면 기존 서식을 기준으로 항목을 맞출 수 있습니다.",
            imageLabel: "정비 접수와 작업 현황 화면 캡처",
            imageResolution: shot,
          },
        ],
      },
      {
        title: "회계/금융",
        links: [
          {
            label: "재무회계",
            href: "/products/accounting",
            description: "기업의 성과를 실시간으로 파악하고 의사결정을 돕는 필수 회계 솔루션입니다.",
            body: "기업의 다양한 업무처리를 효율적으로 관리하기 위한 전문화된 회계관리 시스템입니다. 전문회계 지식이 없어도 누구나 손쉽게 사용할 수 있습니다.",
            imageLabel: "재무회계 전표 입력과 재무상태표 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "전자세금계산서",
            href: "/products/e-tax",
            description: "매입/매출 전자(세금)계산서 작성·발급부터 국세청 전송까지 관리합니다.",
            body: "매입/매출 거래에 대한 전자(세금)계산서 작성·발급과 국세청 전송까지 일련의 과정을 관리하는 전자세금계산서 시스템입니다. 신고건 누락 등 실수를 방지하고 쉽고 편리한 세금계산서 관리가 가능합니다.",
            imageLabel: "전자세금계산서 목록과 전송 상태 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "통합금융",
            href: "/products/banking",
            description: "이체수수료 없이 즉시이체하고, 금융 자료를 자동 수집합니다.",
            body: "BizMore ERP에서 즉시 이체하면 이체수수료 없이 모든 은행에 간편하게 이체할 수 있습니다. 통합금융서비스를 함께 도입하면 은행 거래내역, 국세청 세금계산서, 신용카드, 현금영수증 등의 자료를 자동 수집하여 전표처리도 자동으로 처리합니다.",
            imageLabel: "통합금융 즉시이체와 계좌 잔액 화면 캡처",
            imageResolution: shot,
          },
        ],
      },
      {
        title: "생산/물류",
        links: [
          {
            label: "생산자재(BOM)",
            href: "/products/bom",
            description: "생산(외주)계획부터 자재·재고·금전관리까지 통합 관리합니다.",
            body: "생산자재 시스템은 기업의 생산 활동에 필요한 총체적인 관리 시스템으로서 생산(외주)계획, 자재관리, 재고관리, 금전관리 등 수주에서 제품 출하 후 수금까지의 전 과정을 통합 관리할 수 있습니다.",
            imageLabel: "BOM 구성과 자재 소요 화면 캡처",
            imageResolution: shot,
          },
        ],
      },
      {
        title: "고객/인사",
        links: [
          {
            label: "고객관리(CRM)",
            href: "/products/crm",
            description: "고객 정보, 상담, 청구/수납, 시리얼번호까지 체계적으로 관리합니다.",
            body: "성공적인 사업을 위해 고객관리는 매우 중요합니다. 고객의 정보와 상담내역, 계약 및 청구/수납, 제품 시리얼번호 관리 등이 가능하며 효율적이고 정확한 고객응대가 가능한 시스템입니다.",
            imageLabel: "고객관리 거래처 카드와 상담 이력 화면 캡처",
            imageResolution: shot,
          },
        ],
      },
    ],
  },
  {
    id: "industries",
    label: "업종별 솔루션",
    groups: [
      {
        title: "제조/가공",
        links: [
          {
            label: "육가공·식품가공 종합관리",
            href: "/industries/meat-processing",
            description: "개체식별번호·가공·포장·거래이력까지 육가공 전 과정을 관리합니다.",
            body: "육가공 전 과정에 대한 운영 시스템으로서 축산물이력제 시행에 따른 개체식별번호, 가공 및 포장, 거래이력의 체계적인 관리가 가능합니다. 원재료 입고에서 가공 및 출고까지 이력번호 관리가 시스템화되어 작업시간이 단축되고 생산성이 향상됩니다.",
            imageLabel: "육가공 ERP 바코드 스캔 현장 사진 또는 재고 수불부 캡처",
            imageResolution: "800x600px",
          },
        ],
      },
      {
        title: "유통/도소매",
        links: [
          {
            label: "의료기기 유통관리",
            href: "/industries/medical-device",
            description: "유통·제조·수입·임대 업체를 위한 UDI 표준코드 통합정보관리 프로그램입니다.",
            body: "2022년 7월 1일부터 2등급 의료기기 취급업체는 공급내역을 의료기기 통합정보 시스템에 등록해야 합니다. 바코드 스캔, 신고용 엑셀, 식약처 등록정보 조회를 유통 업무 화면에서 처리합니다.",
            imageLabel: "의료기기 UDI 등급별 적용 일정과 기능 비교",
            imageResolution: shot,
          },
          {
            label: "치과기자재",
            href: "/industries/dental",
            description: "본사/지사 실시간 통합과 수주·매출·재고·영업실적 분석을 지원합니다.",
            body: "치과기자재 유통업체에서 본사/지사 간 실시간 데이터 통합 자료관리가 가능한 관리 시스템입니다. 수주내역, 매출자료, 재고, 영업실적 등 분석이 용이하고 고객과의 상담시에도 신속한 고객응대 및 적정단가 산출이 가능합니다.",
            imageLabel: "치과기자재 주문과 세트 상품 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "타이어 종합관리",
            href: "/industries/tire",
            description: "여러 매장의 매출 실적과 품목 검색·할인 적용을 효율적으로 관리합니다.",
            body: "여러 개의 매장 관리시 효율적인 매장별 매출 실적 관리가 가능한 타이어종합관리 프로그램입니다. 품목의 신속한 검색과 거래처별 품목별 다양한 할인 적용 등 업무 생산성 및 효율성을 극대화시킵니다.",
            imageLabel: "타이어 규격 재고와 장착 이력 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "식자재 종합관리",
            href: "/industries/food-service",
            description: "판매분석과 고객관리, 온라인 수주·출고를 식자재 유통에 맞춥니다.",
            body: "식자재 업체에 특화된 식자재종합관리 시스템을 통해 판매분석과 고객관리가 용이해지고 매출전략 수립하기가 쉬워집니다. 주문관리 시스템과 연동되어 온라인으로 수주받아 쉽고 빠른 주문내역 확인 및 출고처리가 가능합니다.",
            imageLabel: "식자재 온라인 수주와 출고 처리 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "매장관리",
            href: "/industries/store",
            description: "본사, 물류센터, 온라인 마켓, 매장의 주문·배송·매출·재고를 실시간으로 통합합니다.",
            body: "본사, 물류센터, 온라인 마켓, 오픈마켓, 매장 등이 유기적으로 연결되어 주문, 배송, 매출, 재고 등 실시간으로 데이터 공유 및 통합관리가 가능한 매장관리 시스템입니다. 바코드 입출력과 재무회계 연계로 사업장별 회계 결산까지 처리합니다.",
            imageLabel: "매장별 매출과 재고 통합 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "상품권 업종",
            href: "/industries/gift-voucher",
            description: "상품권 판매, 회수, 정산을 유통 업무에 맞춥니다.",
            body: "상품권 발행·판매·회수와 거래처 정산을 한 흐름으로 관리합니다. 권종·유효기간·정산 주기는 회사 운영 방식에 맞춰 상담에서 세팅합니다.",
            imageLabel: "상품권 판매와 회수 정산 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "타일/철물/건축자재",
            href: "/industries/tile-hardware",
            description: "규격별 재고, 시공 납품, 거래처 단가를 관리합니다.",
            body: "타일·철물·건축자재의 규격·단위 재고와 납품, 거래처별 단가를 연결합니다. 현장 납품과 반품 규칙은 도입 상담에서 표준 재고 흐름과 맞춰 봅니다.",
            imageLabel: "건축자재 규격 재고와 납품 화면 캡처",
            imageResolution: shot,
          },
        ],
      },
      {
        title: "특수/시설관리",
        links: [
          {
            label: "빌딩종합관리",
            href: "/industries/building",
            description: "상가·오피스·오피스텔 관리비 부과/수납, 연체료·주차를 통합 관리합니다.",
            body: "건물 입주사의 관리비 부과·수납, 연체료, 주차 관리를 한곳에서 처리하는 빌딩관리 시스템입니다. 부과 대행 서비스로 복잡한 관리비 업무도 한 번에 해결할 수 있습니다.",
            imageLabel: "빌딩 관리비 부과와 수납 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "차량종합관리",
            href: "/industries/vehicle",
            description: "딜러·본부·본사의 주문, 차대번호, 입고와 출고를 실시간으로 연동합니다.",
            body: "딜러와 본부, 본사간의 데이터가 실시간으로 연동되는 차량종합관리 시스템입니다. 주문 접수부터 차대번호 배정, 입고와 동시에 매입전표 작성, 고객 출고까지 한 흐름으로 처리합니다.",
            imageLabel: "차량 주문과 차대번호 배정 화면 캡처",
            imageResolution: shot,
          },
        ],
      },
    ],
  },
  {
    id: "pricing",
    label: "요금 및 맞춤도입",
    groups: [
      {
        title: "도입 방식",
        links: [
          {
            label: "표준 패키지 안내",
            href: "/pricing/standard",
            description: "회계·재고·주문 등 검증된 업무를 월 구독으로 시작합니다.",
            body: "핵심 모듈이 포함된 표준 패키지로 회계, 판매재고, 주문처럼 이미 검증된 업무를 시작합니다. 월 구독 금액은 사용자 수와 모듈 범위에 따라 달라지므로, 상담에서 범위를 확인한 뒤 견적으로 안내합니다.",
            imageLabel: "표준 패키지 모듈 구성이 보이는 제품 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "1:1 맞춤 커스터마이징",
            href: "/pricing/custom",
            description:
              "개별 기업의 특성에 맞도록 1:1 커스터마이징하여 업무 프로세스와 기업문화를 담은 ERP를 구현합니다.",
            body: "에스앤소프트는 개별 기업의 특성에 맞도록 1:1 커스터마이징하여 최적의 ERP솔루션을 제공합니다. 상용 솔루션으로 어려운 업무, 지사·대리점 연동, 업종별 추가 개발까지 회사에 필요한 기능만 갖춘 시스템으로 구축합니다.",
            imageLabel: "맞춤 개발 범위가 표시된 업무 화면 또는 기존 엑셀 양식 예시",
            imageResolution: photo,
          },
          {
            label: "도입 성공 사례",
            href: "/pricing/cases",
            description: "주문·단가, 재고·이력, 차량·정비, 외부 연동, 업종 전용으로 모은 1:1 커스터마이징 사례입니다.",
            body: "1:1 커스터마이징 사례를 업무 주제별로 나누고, 사례를 고르면 업종, 개발기간, 도입모듈, 커스터마이징 내용을 보여 줍니다.",
            imageLabel: "고객 동의를 받은 도입 현장 사진 또는 사용 화면 캡처",
            imageResolution: photo,
          },
        ],
      },
    ],
  },
  {
    id: "support",
    label: "고객지원",
    groups: [
      {
        title: "지원",
        links: [
          {
            label: "자주 묻는 질문",
            href: "/support/faq",
            description: "도입 순서, 표준과 맞춤, 자료 이전을 먼저 확인합니다.",
            body: "도입 상담 전에 자주 확인하는 내용을 모았습니다. 회사에 맞는 모듈과 견적은 온라인 상담으로 이어서 안내합니다.",
            imageLabel: "고객지원 상담 장면 또는 제품 도움말 화면 캡처",
            imageResolution: photo,
            faqs: [
              {
                question: "도입은 어떤 순서로 진행되나요?",
                answer:
                  "온라인 상담을 접수한 뒤 전문 컨설턴트가 업무를 진단하고, 표준 또는 맞춤 범위를 정해 환경을 세팅합니다. 실무자 교육이 끝나면 서비스를 오픈합니다.",
              },
              {
                question: "표준 패키지와 맞춤 개발은 어떻게 고르나요?",
                answer:
                  "회계, 재고, 주문처럼 검증된 업무는 표준 패키지로 시작합니다. 고유한 제조 BOM, 유통 단가, 특수 양식이 있을 때 그 부분만 1:1로 확장합니다. 범위가 애매하면 컨설턴트 진단을 선택하면 됩니다.",
              },
              {
                question: "지금 쓰는 엑셀과 양식을 어떻게 넘기나요?",
                answer:
                  "상담 신청에 사용 중인 엑셀이나 양식을 첨부할 수 있습니다. 표준 화면으로 담기는 범위와 맞춤 개발이 필요한 범위를 나눠 안내합니다.",
              },
              {
                question: "요금은 어디서 확인하나요?",
                answer:
                  "표준 패키지는 월 구독, 맞춤 개발은 범위가 확정된 뒤 별도 견적입니다. 금액은 사용자 수와 업무 범위를 확인한 상담에서 안내합니다.",
              },
              {
                question: "이미 PlusERP를 쓰고 있습니다.",
                answer:
                  "구버전 매뉴얼과 출력물 안내는 PlusERP 전용관에서 확인합니다. 신규 화면과 재구축은 BizMore ERP 도입 상담으로 이어집니다.",
              },
            ],
          },
          {
            label: "1:1 온라인 문의",
            href: CONSULTATION_HREF,
            description: "도입 상담과 맞춤 데모 신청 폼으로 이동합니다.",
          },
          {
            label: "양식지 주문",
            href: "/support/forms",
            description: "거래명세서, 세금계산서 등 양식지 주문을 안내합니다.",
            body: "거래명세서, 견적서, 세금계산서 등 출력용 양식지 주문을 안내하는 공간입니다. 필요한 양식과 수량을 확인한 뒤 주문·상담으로 이어집니다.",
            imageLabel: "거래명세서 또는 세금계산서 양식지 샘플 캡처",
            imageResolution: "800x600px",
          },
          {
            label: "PlusERP 전용관",
            href: "/support/plus-erp",
            description: "구버전 매뉴얼과 출력물 안내를 모읍니다.",
            body: "기존 PlusERP 고객을 위한 매뉴얼과 출력물 안내 공간입니다. 신규 도입과 화면 재구성은 BizMore ERP 상담에서 표준 패키지와 맞춤 범위를 함께 봅니다.",
            imageLabel: "PlusERP 매뉴얼 표지 또는 출력물 샘플 캡처",
            imageResolution: shot,
          },
        ],
      },
    ],
  },
  {
    id: "about",
    label: "회사소개",
    groups: [
      {
        title: "에스앤소프트",
        links: [
          {
            label: "기업소개",
            href: "/about",
            description: "고객의 성장을 위해 에스앤소프트는 달리고 있습니다. 언제나 목표는 고객의 승리입니다.",
            body: "에스앤소프트(주)는 기업업무전산화를 위한 소프트웨어를 개발하여 기업의 업무 효율성 향상에 기여하고 있습니다. 차세대 클라우드형 ERP솔루션 BizMore ERP를 서비스 중입니다.",
            imageLabel: "에스앤소프트 사옥 또는 팀 작업 현장 사진",
            imageResolution: photo,
          },
          {
            label: "미디어센터",
            href: "/about/media",
            description: "공지와 제품 소개 영상을 올리는 공간입니다.",
            body: "제품 공지, 기능 업데이트, 소개 영상을 모으는 공간입니다. 게시할 공지와 영상이 준비되면 이 목록에 날짜와 함께 올리면 됩니다.",
            imageLabel: "제품 소개 영상 썸네일 또는 공지 대표 이미지",
            imageResolution: photo,
          },
          {
            label: "인재채용",
            href: "/about/careers",
            description: "진행 중인 채용 공고를 안내합니다.",
            body: "현재 이 페이지에 게시된 채용 공고는 없습니다. 채용을 시작하면 직무, 근무 형태, 지원 방법을 이곳에 안내합니다.",
            imageLabel: "사무실 업무 환경 사진",
            imageResolution: photo,
          },
          {
            label: "오시는 길",
            href: "/about/location",
            description:
              "경기도 광명시 양지로 21 유플래닛 티타워 1401호. 1호선·KTX 광명역에서 도보 5분, 버스와 주차장 안내입니다.",
            body: "도로명주소 (14345) 경기도 광명시 양지로 21 유플래닛 티타워 1401호. TEL 1600-4707, FAX 02)858-4707. 1호선·KTX 광명역 1번·3번 출구에서 도보 5분. 주차장은 B3~B6입니다.",
            imageLabel: "사옥 외관 사진 또는 지도 캡처",
            imageResolution: photo,
          },
        ],
      },
    ],
  },
];

const remoteSupport: NavLink = {
  label: "원격지원 연결",
  href: REMOTE_SUPPORT_HREF,
  description: "이미 사용 중인 고객의 화면을 컨설턴트와 함께 봅니다.",
  body: "BizMore ERP 또는 PlusERP를 사용 중인 고객을 위한 원격지원 안내입니다. 연결 프로그램 주소는 도입 시 안내드린 전용 경로를 사용하며, 이 자리에 연결 버튼이 들어갈 예정입니다. 새 도입 문의는 온라인 상담으로 접수해 주세요.",
  imageLabel: "원격지원 연결 안내 화면 캡처",
  imageResolution: shot,
};

function toPage(link: NavLink, group: string): SitePage | null {
  if (!link.body || !link.imageLabel || !link.imageResolution || link.href.includes("#")) return null;
  return {
    title: link.label,
    href: link.href,
    description: link.description,
    group,
    body: link.body,
    imageLabel: link.imageLabel,
    imageResolution: link.imageResolution,
    faqs: link.faqs,
  };
}

export function getAllPages(): SitePage[] {
  const fromNav = mainNav.flatMap((item) => item.groups.flatMap((group) => group.links.flatMap((link) => {
    const page = toPage(link, item.label);
    return page ? [page] : [];
  })));
  const remote = toPage(remoteSupport, "고객지원");
  return remote ? [...fromNav, remote] : fromNav;
}

export function getPage(slug: string[]): SitePage | null {
  const href = `/${slug.join("/")}`;
  return getAllPages().find((page) => page.href === href) ?? null;
}

export function getStaticSlugParams(): { slug: string[] }[] {
  return getAllPages().map((page) => ({ slug: page.href.split("/").filter(Boolean) }));
}

export type IndustryIcon =
  | "beef"
  | "stethoscope"
  | "smile"
  | "circle-dot"
  | "utensils"
  | "building"
  | "car"
  | "store"
  | "ticket"
  | "brick";

export type IndustryCard = {
  title: string;
  href: string;
  description: string;
  points: [string, string];
  icon: IndustryIcon;
};

export const industryCards: IndustryCard[] = [
  {
    title: "육가공·식품가공 종합관리",
    href: "/industries/meat-processing",
    description: "개체식별번호·가공·포장·거래이력까지 육가공 전 과정을 관리합니다.",
    points: ["개체식별·이력관리", "소분·묶음가공"],
    icon: "beef",
  },
  {
    title: "의료기기 유통관리",
    href: "/industries/medical-device",
    description: "유통·제조·수입·임대 업체를 위한 UDI 표준코드 통합정보관리입니다.",
    points: ["UDI 바코드 입력", "공급내역 보고"],
    icon: "stethoscope",
  },
  {
    title: "치과기자재",
    href: "/industries/dental",
    description: "본사/지사 실시간 통합과 수주·매출·재고·영업실적 분석을 지원합니다.",
    points: ["여신·미수 관리", "실시간 이익 분석"],
    icon: "smile",
  },
  {
    title: "타이어 종합관리",
    href: "/industries/tire",
    description: "여러 매장의 매출 실적과 품목 검색·할인 적용을 효율적으로 관리합니다.",
    points: ["매장별 매출 실적", "품목·할인 관리"],
    icon: "circle-dot",
  },
  {
    title: "식자재 종합관리",
    href: "/industries/food-service",
    description: "판매분석과 고객관리, 온라인 수주·출고를 식자재 유통에 맞춥니다.",
    points: ["온라인 수주·출고", "마진 단가 자동계산"],
    icon: "utensils",
  },
  {
    title: "매장관리",
    href: "/industries/store",
    description: "본사, 물류센터, 온라인 마켓, 매장의 주문·배송·매출·재고를 실시간으로 통합합니다.",
    points: ["본사·매장 통합", "POS·바코드"],
    icon: "store",
  },
  {
    title: "상품권 업종",
    href: "/industries/gift-voucher",
    description: "상품권 판매, 회수, 정산을 유통 업무에 맞춥니다.",
    points: ["발행·판매·회수", "거래처 정산"],
    icon: "ticket",
  },
  {
    title: "타일/철물/건축자재",
    href: "/industries/tile-hardware",
    description: "규격별 재고, 시공 납품, 거래처 단가를 관리합니다.",
    points: ["규격·단위 재고", "시공 납품"],
    icon: "brick",
  },
  {
    title: "빌딩종합관리",
    href: "/industries/building",
    description: "상가·오피스·오피스텔 관리비 부과/수납, 연체료·주차를 통합 관리합니다.",
    points: ["관리비 부과·수납", "연체료·주차"],
    icon: "building",
  },
  {
    title: "차량종합관리",
    href: "/industries/vehicle",
    description: "딜러·본부·본사의 주문, 차대번호, 입고와 출고를 실시간으로 연동합니다.",
    points: ["차대번호 배정", "정비·PDI"],
    icon: "car",
  },
];
