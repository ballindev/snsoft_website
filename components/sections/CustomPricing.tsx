import Link from "next/link";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass, secondaryButtonClass } from "@/components/ui/buttons";

const features = [
  { text: "다년 간의 노하우가 쌓인 ERP 전문 개발업체", tone: "bg-sky-500" },
  { text: "저렴한 가격", tone: "bg-sky-500" },
  { text: "신속/정확한 개발", tone: "bg-sky-600" },
  { text: "기존 시스템과의 통합 가능", tone: "bg-sky-600" },
  { text: "담당 컨설턴트와의 지속적인 협의", tone: "bg-brand" },
  { text: "언제 어디서나 업무 가능", tone: "bg-rose-500" },
  { text: "특수 업종용 솔루션 구축 개발 가능", tone: "bg-rose-500" },
  { text: "최첨단 IDC 운영, 관리로 안전", tone: "bg-rose-600" },
  { text: "고성능 서버로 최상의 성능 보장", tone: "bg-slate-500" },
  { text: "쉽고 빠른 사용자중심 인터페이스 구현", tone: "bg-slate-600" },
];

const audiences = [
  "업무 현황과 맞지 않아 시스템 도입이 실패한 경우",
  "상용화된 솔루션으로는 처리할 수 없는 영역이 필요한 경우",
  "회사의 장점 요인을 살린 시스템이 필요한 경우",
  "기존 ERP프로그램에서 약간의 추가 기능이 필요한 경우",
  "회사 업무방식에 맞추어 아예 새로운 ERP프로그램을 개발하고 싶은 경우",
  "업종별 솔루션 메뉴에 나와있는 업종 이외에 기타 업종에 따른 맞춤 개발이 필요한 경우",
  "본사와 지사, 각 대리점간의 데이터 연동 및 관리할 수 있는 프로그램을 개발하고 싶은 경우",
  "업무상 빈번하게 발생하는 문제점과 그에 대한 해결책으로 업무의 체계화를 구축하고 싶은 경우",
];

const outcomes = [
  "번거롭고 반복적인 업무를 체계적으로 시스템화 할 수 있습니다.",
  "맞춤 ERP시스템으로 더 나은 업무 효율성과 매출 증대를 경험할 수 있습니다.",
  "더이상 업무 프로세스를 강제로 시스템에 맞추는 것이 아니라, 회사에서 필요로 하는 방식으로 시스템화하여 효율적으로 회사를 운영할 수 있습니다.",
];

export function CustomPricing() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold text-brand">요금 및 맞춤도입</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">1:1 맞춤 커스터마이징</h1>
          <p className="mt-6 break-keep text-xl font-semibold leading-8 text-navy sm:text-2xl sm:leading-9">
            업무 프로세스와 맞지 않는 솔루션 도입으로 고민중이신가요?
          </p>
          <p className="mt-3 break-keep text-xl font-semibold leading-8 text-navy sm:text-2xl sm:leading-9">
            우리 회사에 딱 필요한 기능들로만 갖추어진{" "}
            <span className="text-brand">맞춤 ERP시스템</span>을 구축하고 싶으신가요?
          </p>
          <div className="mt-6 space-y-2 break-keep text-[15px] leading-7 text-slate-700">
            <p>에스앤소프트는 개별 기업의 특성에 맞도록 1:1 커스터마이징하여 최적의 ERP솔루션을 제공합니다.</p>
            <p>이로써 업무 프로세스와 기업문화를 담은 최적화된 시스템 구현이 가능합니다.</p>
          </div>
          <p className="mt-5 break-keep text-sm font-semibold text-slate-500">
            에스앤소프트는 약 17,000여 고객사와 함께합니다.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center gap-2.5 text-center text-xl font-bold text-navy">
            <span className="h-5 w-1 rounded-full bg-brand" aria-hidden />
            에스앤소프트 1:1 커스터마이징 개발의 특징
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <li
                key={feature.text}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4"
              >
                <span className={`mt-1.5 size-2.5 shrink-0 rounded-full ${feature.tone}`} aria-hidden />
                <span className="break-keep text-[15px] font-medium leading-6 text-navy">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="flex items-center justify-center gap-2.5 text-center text-xl font-bold text-navy">
            <span className="h-5 w-1 rounded-full bg-brand" aria-hidden />
            이런 분들께 추천됩니다
          </h2>
          <ul className="mt-6 space-y-3">
            {audiences.map((item) => (
              <li key={item} className="flex gap-3 break-keep text-[15px] leading-7 text-slate-700">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 break-keep text-sm leading-6 text-slate-500">
            이미 준비된 업종은{" "}
            <Link href="/#industries" className="font-semibold text-brand hover:underline">
              업종별 솔루션
            </Link>
            에서 확인할 수 있습니다.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            {outcomes.map((outcome) => (
              <article key={outcome} className="rounded-2xl border border-slate-200 bg-white p-5">
                <p className="break-keep text-[15px] leading-7 text-slate-700">{outcome}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href={CONSULTATION_HREF} className={primaryButtonClass}>
              무료 도입 상담 및 견적 신청
            </Link>
            <Link href="/pricing/cases" className={secondaryButtonClass}>
              도입 성공 사례 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
