import Link from "next/link";
import { ArrowRight, BadgeCheck, Layers, UserRound } from "lucide-react";
import { DashboardMock } from "@/components/mocks/ErpPreviews";
import { primaryButtonClass, secondaryButtonClass } from "@/components/ui/buttons";

const points = [
  { icon: BadgeCheck, label: "표준 패키지로 핵심 업무 시작" },
  { icon: Layers, label: "특수 공정·유통 로직은 1:1 확장" },
  { icon: UserRound, label: "컨설턴트 세팅 후 오픈" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.045)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:gap-14 lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-semibold text-brand">
            중소·제조·유통기업 맞춤형 클라우드 ERP
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-navy sm:text-5xl sm:leading-[1.15]">
            표준 업무는 즉시 도입하고, 우리 회사만의 특별한 업무는 1:1로 맞춥니다.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            기성 패키지의 답답함은 해결하고, 수천만 원대 외주 개발의 부담은 덜었습니다. 전문 컨설턴트가 우리 회사에 딱 맞는 ERP 환경을 세팅해 드립니다.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/#consultation" className={primaryButtonClass}>
              전문가 무료 도입 상담 신청
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link href="/#industries" className={secondaryButtonClass}>
              업종별 솔루션 둘러보기
            </Link>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {points.map((point) => (
              <li key={point.label} className="flex items-start gap-2 text-sm font-medium leading-5 text-slate-700">
                <point.icon className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                {point.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <DashboardMock />
        </div>
      </div>
    </section>
  );
}
