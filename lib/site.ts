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
        title: "회계/금융",
        links: [
          {
            label: "재무회계",
            href: "/products/accounting",
            description: "전표, 장부, 재무제표를 표준 업무 흐름으로 관리합니다.",
            body: "매입·매출, 일반전표, 결산까지 중소기업 회계실에서 반복되는 업무를 표준 화면으로 맞춰 둡니다. 특수 전표나 관리 양식이 필요하면 표준 장부를 유지한 채 그 부분만 맞춤으로 확장합니다.",
            imageLabel: "재무회계 전표 입력과 재무상태표 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "전자세금계산서",
            href: "/products/e-tax",
            description: "발행, 수정, 국세청 전송 상태를 한곳에서 확인합니다.",
            body: "매출 자료에서 전자세금계산서를 발행하고, 전송·수정·미발행 상태를 실무자가 바로 구분할 수 있게 보여 줍니다. 국세청 연동 세부 설정은 도입 상담에서 회사 환경에 맞춰 안내합니다.",
            imageLabel: "전자세금계산서 목록과 전송 상태 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "통합금융",
            href: "/products/banking",
            description: "계좌 입출금과 회계 전표를 맞춰 자금 흐름을 봅니다.",
            body: "여러 계좌의 입출금을 회계 전표와 나란히 보고, 미확인 입금과 자금 일보를 줄입니다. 은행 연동 범위는 사용 중인 금융기관에 따라 컨설턴트가 세팅합니다.",
            imageLabel: "통합금융 입출금과 미확인 입금 화면 캡처",
            imageResolution: shot,
          },
        ],
      },
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
            description: "주문 접수부터 출고, 매출까지 상태를 추적합니다.",
            body: "견적, 수주, 출고, 매출로 이어지는 주문 상태를 거래처와 품목 기준으로 확인합니다. 복잡한 단가표나 납품처별 양식은 맞춤 범위로 나눠 설계합니다.",
            imageLabel: "주문 현황과 출고 상태 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "영업통",
            href: "/products/field-sales",
            description: "외근 영업의 주문, 수금, 거래처 일정을 현장에서 이어갑니다.",
            body: "영업 담당자가 거래처 방문 전후에 주문과 미수, 상담 메모를 같은 거래처 카드에서 확인합니다. 표준 영업 업무로 시작하고, 회사 전용 활동 항목이 있으면 항목만 추가합니다.",
            imageLabel: "영업통 거래처 방문과 주문 등록 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "매장관리",
            href: "/products/store",
            description: "매장별 매출, 재고, 마감을 본사와 같은 기준으로 봅니다.",
            body: "매장 매출과 재고, 근무 마감을 본사 재고·회계와 어긋나지 않게 모읍니다. 포스 연동 범위는 사용 중인 장비에 따라 상담 때 확인합니다.",
            imageLabel: "매장별 일매출과 마감 화면 캡처",
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
            description: "부품 구성, 생산지시, 자재 소요를 연결합니다.",
            body: "제품 BOM으로 생산지시와 자재 소요, 생산 입고를 연결합니다. 공정의 분할, 수율, 부산물처럼 회사마다 다른 규칙은 1:1 맞춤으로 표준 BOM 위에 올립니다.",
            imageLabel: "BOM 구성과 자재 소요 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "A/S관리",
            href: "/products/after-service",
            description: "접수, 처리, 부품 사용 이력을 남깁니다.",
            body: "접수부터 방문, 부품 사용, 완료까지 서비스 이력을 제품과 고객 기준으로 남깁니다. 전용 접수 양식이 있으면 기존 서류를 첨부해 항목을 맞출 수 있습니다.",
            imageLabel: "A/S 접수 목록과 처리 상태 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "무역관리",
            href: "/products/trade",
            description: "오더, 선적, 부대비용을 구매와 재고에 반영합니다.",
            body: "수입 오더와 선적, 부대비용을 입고 단가와 재고에 연결합니다. 회사의 오퍼·인보이스 양식은 상담 때 받아 표준 문서와 맞춰 봅니다.",
            imageLabel: "무역 오더와 선적 현황 화면 캡처",
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
            description: "상담, 견적, 거래 이력을 거래처 기준으로 모읍니다.",
            body: "상담 기록, 견적, 주문, 미수를 거래처 한 장에서 이어서 봅니다. 영업 단계 이름은 회사 용어에 맞춰 세팅할 수 있습니다.",
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
            description: "도체 입고, 부위 분할, 로트와 유통기한을 출고까지 잇습니다.",
            body: "원료 입고부터 부위·상품 분할, 생산, 바코드 출고까지 육가공과 식품가공 현장의 수불을 한 흐름으로 관리합니다. 수율과 부산물, 거래처별 스펙이 다르면 그 규칙은 맞춤 개발로 표준 재고 위에 붙입니다.",
            imageLabel: "육가공 ERP 바코드 스캔 현장 사진 또는 재고 수불부 캡처",
            imageResolution: "800x600px",
          },
        ],
      },
      {
        title: "유통/도소매",
        links: [
          {
            label: "의료기기 유통",
            href: "/industries/medical-device",
            description: "품목 이력, 거래처 단가, 납품 추적을 유통 업무에 맞춥니다.",
            body: "품목 마스터, 로트 이력, 병원·대리점 단가, 납품 상태를 유통 담당자 화면에서 함께 봅니다. 인허가·UDI처럼 업종 필수 항목은 도입 진단에서 표준 항목과 추가 항목을 구분합니다.",
            imageLabel: "의료기기 유통 납품과 로트 이력 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "치과기자재",
            href: "/industries/dental",
            description: "진료 품목, 세트 구성, 수금을 함께 관리합니다.",
            body: "치과·기공소별 주문, 세트 상품, 청구와 수금을 재고와 같이 관리합니다. 기존 견적 엑셀이 있으면 상담 신청에 첨부해 항목을 맞춰 드립니다.",
            imageLabel: "치과기자재 주문과 세트 상품 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "타이어 종합관리",
            href: "/industries/tire",
            description: "규격별 재고, 장착 이력, 지점 이동을 관리합니다.",
            body: "사이즈·규격·브랜드 재고와 지점 이동, 장착·교체 이력을 한 품목 기준으로 봅니다. 바코드 입고와 차량 정보 항목은 매장 운영 방식에 맞춰 세팅합니다.",
            imageLabel: "타이어 규격 재고와 장착 이력 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "식자재 종합관리",
            href: "/industries/food-service",
            description: "단위 환산, 배송, 거래처 단가를 신선 유통에 맞춥니다.",
            body: "박스·kg·개 단위 환산, 배송 코스, 거래처별 단가를 주문·재고와 연결합니다. 신선 품목의 유통기한과 결품 대체 규칙은 현장 양식을 보고 맞춤 범위를 정합니다.",
            imageLabel: "식자재 배송 코스와 단위 환산 주문 화면 캡처",
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
            description: "호실 계약, 관리비 부과, 시설 점검을 한 흐름으로 봅니다.",
            body: "호실·계약, 관리비 부과, 민원과 점검 일정을 건물 기준으로 관리합니다. 고지서 양식과 부과 기준은 건물마다 달라 상담에서 표준 부과와 맞춤 양식을 나눕니다.",
            imageLabel: "빌딩 호실 계약과 관리비 부과 화면 캡처",
            imageResolution: shot,
          },
          {
            label: "차량종합관리",
            href: "/industries/vehicle",
            description: "차량 대장, 정비, 보험과 검사 일정을 관리합니다.",
            body: "차량 대장과 정비 이력, 보험·검사 만료를 달력과 목록으로 확인합니다. 운행일지 양식이 따로 있으면 기존 서식을 기준으로 항목을 맞춥니다.",
            imageLabel: "차량 대장과 정비·검사 일정 화면 캡처",
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
            description: "특수 공정과 양식은 표준 위에 필요한 범위만 개발합니다.",
            body: "고유 BOM, 복잡한 유통 단가, 사내 전용 양식처럼 표준에 없는 업무만 범위를 정해 개발합니다. 전체 시스템을 처음부터 외주로 다시 짜지 않고, 표준 패키지 위에 필요한 화면과 연동을 올리는 방식입니다.",
            imageLabel: "맞춤 개발 범위가 표시된 업무 화면 또는 기존 엑셀 양식 예시",
            imageResolution: photo,
          },
          {
            label: "도입 성공 사례",
            href: "/pricing/cases",
            description: "업종별 도입 과정은 고객 확인 후 이 페이지에 소개합니다.",
            body: "제조, 유통, 매장 현장에서 표준 업무와 맞춤 확장을 어떻게 나눴는지 고객 확인을 거친 사례를 소개할 자리입니다. 사명과 수치, 사진은 고객이 동의한 자료만 올립니다.",
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
            label: "서식/양식지 신청",
            href: "/support/forms",
            description: "거래명세서, 세금계산서 등 출력 양식 문의를 안내합니다.",
            body: "거래명세서, 견적서, 세금계산서 서식처럼 출력 양식 변경과 추가 신청을 안내하는 공간입니다. 원하는 양식 파일을 상담 신청에 첨부하면 표준 서식과 맞춰 볼 수 있습니다.",
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
            description: "중소·제조·유통 기업을 위한 BizMore ERP를 만듭니다.",
            body: "에스앤소프트는 중소기업, 제조, 유통, 회계 현장에 맞춘 클라우드 웹 ERP BizMore를 제공합니다. 검증된 표준 업무는 패키지로 합리적으로 시작하고, 회사만의 공정과 유통 로직은 컨설턴트와 1:1로 맞춥니다.",
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
            description: "회사 위치와 방문 상담 안내입니다.",
            body: "주소와 교통 안내는 회사 정보가 이 페이지에 반영되면 함께 표시됩니다. 방문 상담이 필요하면 온라인 상담 신청에 희망 일정과 지역을 적어 주세요.",
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
  | "store";

export type IndustryCard = {
  title: string;
  href: string;
  description: string;
  points: [string, string];
  icon: IndustryIcon;
  wide?: boolean;
  featured?: boolean;
};

export const industryCards: IndustryCard[] = [
  {
    title: "육가공·식품가공",
    href: "/industries/meat-processing",
    description: "도체 입고부터 부위 분할, 로트, 바코드 출고까지 가공 수불을 맞춥니다.",
    points: ["수율·부산물·유통기한", "바코드 입출고"],
    icon: "beef",
    wide: true,
    featured: true,
  },
  {
    title: "의료기기 유통",
    href: "/industries/medical-device",
    description: "품목 이력과 거래처 단가, 납품 상태를 함께 추적합니다.",
    points: ["로트 이력", "병원·대리점 단가"],
    icon: "stethoscope",
  },
  {
    title: "치과기자재",
    href: "/industries/dental",
    description: "세트 상품과 진료처별 주문, 청구와 수금을 연결합니다.",
    points: ["세트 구성", "청구·수금"],
    icon: "smile",
  },
  {
    title: "타이어",
    href: "/industries/tire",
    description: "규격별 재고와 장착 이력, 지점 간 이동을 관리합니다.",
    points: ["규격·사이즈 재고", "장착 이력"],
    icon: "circle-dot",
  },
  {
    title: "식자재",
    href: "/industries/food-service",
    description: "단위 환산과 배송 코스, 거래처 단가를 주문에 반영합니다.",
    points: ["박스·중량 환산", "배송 코스"],
    icon: "utensils",
  },
  {
    title: "빌딩관리",
    href: "/industries/building",
    description: "호실 계약, 관리비 부과, 점검과 민원을 건물 기준으로 봅니다.",
    points: ["관리비 부과", "점검 일정"],
    icon: "building",
  },
  {
    title: "차량관리",
    href: "/industries/vehicle",
    description: "차량 대장과 정비, 보험·검사 만료를 한 목록에서 확인합니다.",
    points: ["정비 이력", "보험·검사 일정"],
    icon: "car",
  },
  {
    title: "매장관리",
    href: "/products/store",
    description: "매장 매출과 재고, 마감을 본사 기준과 같게 맞춥니다.",
    points: ["매장별 일매출", "본사 재고와 마감"],
    icon: "store",
    wide: true,
  },
];
