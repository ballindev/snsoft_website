import Link from "next/link";
import { Lightbulb, Presentation, UserRound, Users, type LucideIcon } from "lucide-react";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { CompanySectionNav } from "@/components/sections/CompanySectionNav";

const overview = [
  "에스앤소프트(주)는 기업업무전산화를 위한 소프트웨어를 개발하여 기업의 업무 효율성 향상에 기여하고 있으며 업무 전산개발 상담 및 용역에 적극적인 마케팅을 하고 있습니다.",
  "특히 중소기업/자영업체에서 꼭 필요한 실무 중심, 사용자 위주의 소프트웨어를 개발하여 향후 범용적이고 경제적인 전산패키지 개발을 추진하고 있습니다.",
  "이와 더불어 업무용 프로그램, 전사적자원관리 시스템, 웹지향 기업 솔루션에 이르기까지 기업 생산성 향상을 위한 토탈 솔루션 지원을 지향하고 있습니다. 현재 차세대 클라우드형 ERP솔루션 BizMore ERP를 출시하여 서비스 중에 있으며 지속적이고 꾸준한 기술지원 및 고객지원으로 고객사의 업무전산화에 만전을 기하고 있습니다.",
];

const greeting = [
  "21세기는 e-Business 시대이며, e-Business 시대의 도래는 모든 기업에 있어서 급격한 환경변화에 신속한 대응을 요구하고 있습니다.",
  "에스앤소프트(주)는 1994년 설립 후 지금까지 ‘고객을 위한 100년 가는 기업’이 되겠다는 일념으로 고객기업이 환경변화에 효과적으로 대처할 수 있도록 최첨단 기술을 활용한 솔루션 개발과 고객 중심 서비스 확충에 핵심역량을 집중해왔습니다.",
  "우리의 노력은 이에 그치지 않고 새로운 ICT패러다임에 맞는 차세대 솔루션인 BizMoreERP를 개발완료하고 보급함으로써 고객기업의 든든한 정보파트너로서 책임을 다하고자 노력하고 있습니다.",
  "총 개발기간 4년 이상의 노력이 집약된 BizMoreERP는 회계, 영업, 구매, 전자세금계산서 등 기업에서 사용되는 기본적인 기능에 충실할 뿐만 아니라, 이를 바탕으로 개별 기업의 특성에 맞도록 1:1커스터마이징이 더욱 체계적으로 이루어지고 관리될 수 있도록 설계되었습니다.",
  "또한 PC와 모바일에서 같은 정보를 실시간으로 공유하여 정보의 활용 수준을 높이고, 강력한 그리드 기능을 개발, 적용하여 업무의 효율성이 극대화되도록 하였습니다.",
  "더 나아가 BizMoreERP는 내부사용자 뿐만 아니라 구매기업, 대리점 등 관계회사들과 시스템 내에서 관련 정보를 공유할 수 있는 탁월한 통합 환경을 제공합니다.",
  "정보는 기업의 제4의 자원입니다. 에스앤소프트(주)는 고객기업의 중요한 정보자원을 효율적으로 관리되고 업무에 다양하게 활용될 수 있도록 최선의 노력을 다하겠습니다.",
  "언제나 든든한 ‘고객기업의 정보관리파트너’가 되어 드리겠습니다.",
];

const history = [
  {
    period: "2021~2025",
    items: [
      "BizMore ERP SaaS, AWS 기반 확장 구축 완료",
      "DHL과 전략적 파트너십 구축 - Dior, Kering 그룹 외 기타 해외유명브랜드를 위한 맞춤형 물류 솔루션 개발",
      "미국 3M 본사와 국내 250여개 대리점간 EDI 시스템 구축",
      "BizMoreERP 시스템내 서류팩스보내기, 문자전송 통합시스템 구축",
      "BizMore ERP 모바일 ‘주문관리’ 확장판 출시",
    ],
  },
  {
    period: "2016~2020",
    items: [
      "모든 금융기관 즉시이체 기능이 포함된 ‘통합금융’ 출시",
      "BizMore ERP Mobile ‘주문관리’ 출시",
      "등록고객 20,000업체 돌파",
      "전자신문 에스앤소프트 '100년 가는 ERP 기업' 보도",
      "BizMore 영업용 블로그 개시",
      "에스앤소프트 홈페이지 리뉴얼 오픈",
      "Bizmore ERP 빌딩종합관리 홈페이지 리뉴얼오픈(www.bizmorebld.co.kr)",
      "차세대 클라우드형ERP ‘BizMore ERP’ 출시",
      "토탈 경영 전산 서비스 브랜드, BizMore(비즈모아) 런칭",
    ],
  },
  {
    period: "2011~2015",
    items: [
      "Hi-Tech Awards ERP 고객만족 대상 수상",
      "보급형 영업 전문 ERP ‘영업통’(ASP) 출시",
      "등록고객 15,000업체 돌파",
      "‘제24회 글로벌 SW공모대전’ 장려상 수상 (지식경제부 주최)",
      "‘플러스 ERP 판매재고 Lite’ 출시",
    ],
  },
  {
    period: "2006~2010",
    items: [
      "‘플러스 ERP 판매재고 Mobile’ 발표",
      "‘플러스 ERP 철강업종 솔루션’ 발표",
      "충청대학 ‘플러스 ERP’ 교육용 공급 계약",
      "‘플러스 ERP Web 판매재고’ 서비스 시작",
      "전자세금계산서 표준 인증(국세청) 획득",
      "전자세금계산서 ASP 서비스 시작(www.bizmore.co.kr)",
      "에스앤소프트(주) 성병욱 대표이사 ‘서울디지털밸리 TOP 100 CEO Award’ 수상",
      "기업부설 연구소 인증(한국산업기술진흥협회)",
      "폴리텍 II 대학 ‘플러스 ERP’ 교육용 공급",
      "‘플러스 ERP’ 중국어 버전 개발 완료",
      "‘플러스 ERP’ 교재 고등학교 정식교과서 인증(인천교육청)",
      "빌딩관리 솔루션 ‘플러스 빌딩종합관리’ 서비스 시작",
      "소프트웨어 사업자 인증(한국소프트웨어산업협회)",
    ],
  },
  {
    period: "2001~2005",
    items: [
      "경기도 교육청 지정 ‘ERP자율연수’",
      "2005년 기술혁신 소그룹 지원사업 선정",
      "실업계고등학교 ERP 교육용 표준 프로그램으로 채택(서울시교육청)",
      "서울여자상업고등학교에 ‘플러스 ERP’ 교육용 공급",
      "인천여상에 ‘플러스 ERP’ 교육용 공급",
      "등록고객 10,000업체 돌파",
      "연구개발전담부서 인증(한국산업기술진흥협회)",
      "플러스 ERP Web, DCM(주문관리), SCM(발주관리) 시스템 발표",
      "신기술벤처기업 재선정(기술신용보증기금)",
      "우량기술기업선정(기술신용보증기금)",
      "광운대학교에 3억원 상당의 교육기자재 기증",
      "INNO-BIZ(Innovation Business) 기업으로 선정(A등급, 중소기업청)",
      "플러스 ERP ASP(임대)서비스 시작",
      "등록고객 7,000업체 돌파",
      "2001년 히트상품 선정(ERP고객만족부분, 디지털타임즈)",
    ],
  },
  {
    period: "2000년 이전",
    items: [
      "중소/중견기업용 차세대 통합경영관리시스템 ‘플러스 ERP’ 발표",
      "신기술 벤처기업 선정(중소기업청)",
      "통합경영관리시스템 ‘플러스 통합경영정보시스템’ 발표",
      "마이크로소프트 Office2000에 ‘플러스 회계’ 필터 채용",
      "등록고객 5,000업체 돌파",
      "병역특례업체 지정(병무청)",
      "마이크로소프트(주)와 프로그램 개발 공급계약 체결",
      "한글과 컴퓨터(주)에 ‘플러스 회계’ 3,000세트 공급",
      "신개념 영업관리시스템 ‘플러스 판매재고’ 발표",
      "현대영어사에 ‘플러스 회계’ 400세트 공급",
      "‘플러스 회계’ 발표",
      "국내최초 윈도우용 회계관리 프로그램 ‘태극회계’ 발표",
    ],
  },
];

const businesses = [
  {
    title: "기업 ERP 솔루션 S/W 개발 사업",
    body: "소규모 기업에서부터 중견 규모의 기업에 이르기까지 기업의 업무 전산화에 필요한 S/W를 사용자가 쉽게 사용할 수 있도록 개발하여 보급하고 있습니다.",
  },
  {
    title: "프로그램 임대 사업",
    body: "업무용 프로그램 개발사인 에스앤소프트㈜에서 고속 대용량 서버와 고속회선, 네트워크 전문기술자, 프로그램개발자, 서버용 운영체제, 경영관리프로그램 등 모든 전산자원을 구비하고 고객이 사용하는 프로그램과 데이터베이스를 개발사의 서버에서 구동하여 사용자가 어디서건 데이터에 접속하여 사용할 수 있는 사업이며, 이로써 사용자는 일정량의 월 사용료만으로 서버와 운영시스템, 경영관리프로그램 구입이나 유지관리에 드는 모든 비용에서 완전히 해방되는 사업입니다.",
  },
  {
    title: "1:1 커스터마이징 사업",
    body: "고객기업이 빠른 시간 내에 업무에 적합한 최적의 솔루션을 확보함으로써 보다 향상된 경쟁력을 가질 수 있도록 저렴한 비용으로 프로그램 내용 중 일부분을 수정하거나, 새로운 프로그램을 제작하여 드립니다.",
  },
  {
    title: "전산실 아웃소싱 사업",
    body: "당사의 업무 컨설팅 노하우와 IT전문인력을 기반으로 고객기업의 네트워크 시스템이나 서버 시스템 등, 기업경영관리시스템이 효율적으로 수행되기 위한 제반 컴퓨팅환경 아웃소싱 사업을 수행하고 있습니다.",
  },
];

const pledges: { title: string; body: string; icon: LucideIcon; color: string }[] = [
  {
    title: "고객",
    body: "우리 제품에서 나오는 정보자원과 우리의 서비스가 고객의 경영이익에 기여할 수 있도록 최상의 품질을 유지한다.",
    icon: UserRound,
    color: "bg-[#4a90c8]",
  },
  {
    title: "직원",
    body: "모든 직원 각자가 한 인간으로서 정당하고 적절하게 대우받을 수 있도록 해야 하며, 안심하고 직무를 수행할 수 있는 일터를 제공한다.",
    icon: Users,
    color: "bg-[#1c9fe6]",
  },
  {
    title: "주주",
    body: "우리는 끊임없는 새로운 아이디어로 건전한 이익을 올릴 수 있는 사업을 영위하여야 하며, 이로써 주주들이 정당한 이익배당을 받을 수 있도록 한다.",
    icon: Presentation,
    color: "bg-[#e23b3b]",
  },
  {
    title: "사회공동체",
    body: "우리는 선량한 시민으로서 선행과 자선을 베풀어야 하고 사회의 발전, 건강과 교육의 증진을 위하여 노력한다.",
    icon: Lightbulb,
    color: "bg-[#5c5c5c]",
  },
];

const serviceIntro =
  "에스앤소프트㈜는 1994년 창립이래 기업고객의 요구사항을 만족시키는 최상의 솔루션 제공을 위해 노력하고 있습니다. 이를 통해 에스앤소프트㈜는 고객사가 치열한 경쟁 속에서 승리할 수 있는 전략적인 방법을 제시하고 있습니다. 또한 에스앤소프트㈜는 완벽한 고객지원서비스를 통하여 고객만족을 넘어선 고객감동을 추구하고 있습니다.";

const serviceSpirits = [
  {
    en: "Superb",
    ko: "최상의 솔루션 제공",
    phrase: "Superb & Superb",
    body: "20,000여 업체의 컨설팅 경험을 바탕으로 고객 기업의 경쟁력을 키울 수 있는 최상의 솔루션, 업체의 특성에 맞는 최적의 솔루션 제공",
  },
  {
    en: "Strategic",
    ko: "전략적 대안의 제시",
    phrase: "Strategic & Structural",
    body: "고객 기업의 업무효율성 제고 및 체계적인 관리를 통하여, 고객 기업이 경쟁우위를 가질 수 있는 전략적인 대안 제시",
  },
  {
    en: "Satisfaction",
    ko: "고객만족",
    phrase: "Satisfaction & Smile",
    body: "고객 기업의 만족을 통하여 고객 기업과 함께 성장하는 기업. 고객 기업과 함께 웃을 수 있는 기업을 지향",
  },
];

const awards = [
  {
    year: "2009",
    title: "전자세금계산서 표준인증 획득",
    body: [
      '전자세금계산서 표준인증이란 사업자시스템이 관련 법령(부가가치세법 제16조 제2항)에 의거하여 "전자세금계산서 v3.0" 및 "개발지침 v1.0"을 준수하였는지 표준 적합성을 검증하는 시험을 말합니다.',
      "에스앤소프트㈜는 해당 인증 시험을 성공적으로 통과하여 현재 비즈모아를 통하여 전자세금계산서를 서비스하고 있습니다.",
    ],
  },
  {
    year: "2007",
    title: "에스앤소프트(주) 성병욱 대표이사 서울 디지털밸리 TOP 100 CEO수상",
    body: [
      "한국산업단지공단, 벤처기업협회, AVING SDV NEWS가 공동으로 주최한 시상식에서 에스앤소프트(주)의 성병욱 대표이사는 서울디지털밸리의 약 8000개 입주업체대표들 중 TOP 100 CEO상을 수상하였습니다.",
    ],
  },
  {
    year: "2006",
    title: "소프트웨어 사업자 인증",
    body: [
      "에스앤소프트(주)는 소프트웨어산업진흥법 24조에 의거하여 한국소프트웨어산업협회장으로부터 소프트웨어사업자로 확인 받았습니다.",
      "소프트웨어사업자로부터 확인 받은 기업은 정부 공공기관 및 기업 등 소프트웨어 수요자에게 소프트웨어 산업협회에서 선정된 기업의 신뢰성 있는 정보를 제공하여 건전한 산업의 발전을 도모하고 있습니다.",
    ],
  },
  {
    year: "2005",
    title: "기술 혁신소그룹지원사업 대상기업으로 선정",
    body: [
      "기술혁신소그룹지원사업은 기업 내부의 업무프로세서 개선 및 기술연구 활동을 지원하여 국제경쟁력이 있는 우수 기업으로 육성하는데 목적이 있는 사업으로써 기술경쟁력과 미래 성장가능성을 갖춘 INNO-BIZ기업 중에서 중소기업청이 평가하여 선정하였습니다.",
    ],
  },
  {
    year: "2003",
    title: "기술신용보증기금으로 우량기술 기업으로 선정",
    body: [
      "기술신용보증기금이 주관하는 우량기술기업 발굴·육성제도는 기술력향상에 주력하는 중소기업 중 성장잠재력이 우수한 신기술 사업자를 발굴하여 자체 성장기반을 갖추도록 지원해주는 제도입니다.",
      "에스앤소프트(주)는 2002년 중소기업청 주관의 INNO-BIZ기업 선정에 이어 2003년에도 기술신용보증기금의 우량기술기업으로 선정됨에 따라 기술경쟁력과 미래 성장가능성이 있는 기업임을 공식적으로 다시 한 번 인정받았습니다.",
    ],
  },
  {
    year: "2002",
    title: "경원전문대학교로부터 감사패 수여",
    body: [
      "평소 인재양성에 각별한 관심을 갖고있는 에스앤소프트(주) 성병욱 대표이사는 경원전문대에 실험실습 기자재등 기증, 공로를 인정받아 감사패를 수여 받았으며 학생들을 위한 특강도 진행하였습니다. 에스앤소프트(주)는 이후에도 인재양성을 위한 지속적인 교육사업을 진행해오고 있습니다.",
    ],
  },
  {
    year: "2002",
    title: "하반기 INNO-BIZ 기업으로 선정",
    body: [
      "INNO-BIZ는 중소기업청 주관으로 기술경쟁력과 미래 성장가능성을 갖춘 중소기업을 기술혁신형 기업(INNO-BIZ: Innovation Business)으로 선정하여 기술, 자금 등을 집중 지원함으로써 국제경쟁력이 있는 우수 기업으로 육성하는 사업입니다.",
      "에스앤소프트(주)는 9월 초 INNO-BIZ 기업 선정사업에 신청하여, 자가진단과 온라인 심사를 거쳐, 기술신용보증기금 기술평가센터의 현장평가를 통과함으로써 최종적으로 INNO-BIZ 기업으로 선정되었습니다.",
      "이로써 에스앤소프트(주)는 기술경쟁력과 미래 성장가능성이 있는 기업으로 공식적으로 인정 받게 되었습니다.",
    ],
  },
  {
    year: "2001",
    title: "디지털타임스선정 ERP부문 고객만족상 수상",
    body: [
      "에스앤소프트(주)는 네티즌 설문조사 및 전문기자단 투표를 통해 제품의 우수함과 소비자들의 높은 호응도를 얻어 디지털타임스의 IT 2001 히트상품 고객만족상을 수상하였습니다.",
    ],
  },
];

function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-center text-2xl font-semibold tracking-tight text-navy">{title}</h2>;
}

export function CompanyOverview() {
  return (
    <main id="main">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold text-brand">회사소개</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">기업소개</h1>
            <p className="mt-8 text-2xl font-semibold leading-snug tracking-tight text-navy sm:text-3xl">
              고객의 성장을 위해 에스앤소프트는 달리고 있습니다.
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-600">언제나 목표는 고객의 승리입니다.</p>
          </div>
        </div>
      </section>

      <CompanySectionNav />

      <section id="overview" className="scroll-mt-36 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title="기업 개요" />
            <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
              {overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="greeting" className="scroll-mt-36 border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title="CEO 인사말" />
            <blockquote className="mt-6 border-l-4 border-brand pl-5 text-lg font-medium leading-8 text-navy">
              언제나 든든한 고객기업의 정보관리파트너가 되어 드리겠습니다.
            </blockquote>
            <div className="mt-8 space-y-5 text-base leading-8 text-slate-700">
              {greeting.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="font-medium text-navy">감사합니다.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="scroll-mt-36 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title="기업연혁" />
            <ol className="mt-10 space-y-10">
              {history.map((group) => (
                <li key={group.period}>
                  <h3 className="text-lg font-semibold tracking-tight text-navy">{group.period}</h3>
                  <ul className="mt-4 space-y-3 border-l border-slate-200 pl-5">
                    {group.items.map((item) => (
                      <li key={item} className="relative text-sm leading-6 text-slate-700">
                        <span className="absolute top-2 left-0 size-1.5 -translate-x-[calc(1.25rem+1px)] rounded-full bg-brand" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-center text-sm font-semibold text-navy">1994년 10월 설립</p>
          </div>
        </div>
      </section>

      <section id="business" className="scroll-mt-36 border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="주요사업" />
          <ul className="mt-10 grid gap-4 lg:grid-cols-2">
            {businesses.map((business) => (
              <li key={business.title} className="rounded-3xl border border-slate-200 bg-[#f4f7fb] p-6 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-navy">{business.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">{business.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="values" className="scroll-mt-36 border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="기업이념" />
          <p className="mt-6 text-center text-3xl font-semibold tracking-tight text-[#1a9ad8] sm:text-4xl">모두를 위한 경영</p>
          <p className="mt-2 text-center text-lg font-medium text-[#1a9ad8]">에스앤소프트(주)의 다짐입니다.</p>
          <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {pledges.map((pledge) => (
              <li key={pledge.title} className="text-center">
                <div className={`mx-auto flex size-36 flex-col items-center justify-center rounded-full sm:size-40 ${pledge.color}`}>
                  <span className="text-base font-semibold text-white">{pledge.title}</span>
                  <pledge.icon className="mt-2 size-9 text-slate-800" strokeWidth={1.75} aria-hidden />
                </div>
                <p className="mt-5 text-sm leading-6 text-slate-600">{pledge.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="service" className="scroll-mt-36 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle title="서비스정신" />
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-700">{serviceIntro}</p>
          <div className="mx-auto mt-12 max-w-5xl lg:grid lg:grid-cols-[9rem_2.5rem_minmax(0,1fr)] lg:grid-rows-3">
            <div className="mb-8 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mb-0 lg:flex lg:items-center">
              <div>
                <p className="text-4xl font-light tracking-tight text-[#7eb6ea] sm:text-5xl">Needs</p>
                <p className="mt-1 text-sm text-slate-500">고객의 요구사항</p>
              </div>
            </div>
            {serviceSpirits.map((item, index) => (
              <div key={item.en} className="contents">
                <div className={`relative hidden lg:col-start-2 lg:block ${["lg:row-start-1", "lg:row-start-2", "lg:row-start-3"][index]}`} aria-hidden>
                  <span
                    className={`absolute left-0 w-px bg-[#7eb6ea] ${
                      index === 0 ? "top-1/2 h-1/2" : index === serviceSpirits.length - 1 ? "bottom-1/2 h-1/2" : "inset-y-0"
                    }`}
                  />
                  <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-[#7eb6ea]" />
                </div>
                <article className={`border-l border-[#7eb6ea] py-5 pl-5 lg:col-start-3 lg:border-0 lg:py-6 lg:pl-2 ${["lg:row-start-1", "lg:row-start-2", "lg:row-start-3"][index]}`}>
                  <div className="grid gap-2 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-8">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-slate-500">{item.en}</h3>
                      <p className="mt-1 text-sm text-slate-500">{item.ko}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-brand">{item.phrase}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="scroll-mt-36 border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionTitle title="수상내역" />
            <ol className="mt-10 space-y-4">
              {awards.map((award) => (
                <li key={award.title} className="rounded-3xl border border-slate-200 bg-[#f4f7fb] p-6 sm:p-8">
                  <p className="text-sm font-semibold text-brand">{award.year}</p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-navy">{award.title}</h3>
                  <div className="mt-3 space-y-3 text-sm leading-7 text-slate-700">
                    {award.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <Link href={CONSULTATION_HREF} className={primaryButtonClass}>
            무료 도입 상담 및 견적 신청
          </Link>
        </div>
      </section>
    </main>
  );
}
