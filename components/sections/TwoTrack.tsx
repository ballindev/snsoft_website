import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tracks = [
  {
    name: "BizMore Standard",
    kicker: "표준 패키지",
    audience: "빠르고 검증된 회계·재고·주문 관리가 필요한 자영업 및 중소기업",
    points: [
      "핵심 10대 모듈 기본 제공",
      "합리적인 월 구독료",
      "컨설턴트 기초 세팅 지원",
      "회계·재고·주문 표준 업무에 바로 적용",
    ],
    href: "/pricing/standard",
    consult: "/#consultation",
  },
  {
    name: "BizMore Custom",
    kicker: "1:1 맞춤 확장형",
    audience: "고유한 제조 BOM, 복잡한 유통 단가, 특수 양식이 필요한 기업",
    points: [
      "기존 엑셀 업무 100% 시스템화",
      "바코드와 외부 기기 연동",
      "전담 엔지니어의 1:1 커스터마이징",
      "표준 패키지 위에 필요한 범위만 확장",
    ],
    href: "/pricing/custom",
    consult: "/#consultation",
  },
];

export function TwoTrack() {
  return (
    <section id="pricing" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Two-Track"
          title="기본 업무는 표준으로, 특별한 업무는 맞춘다"
          description="대부분의 회사는 검증된 패키지로 충분합니다. 우리 회사만 다른 공정과 유통 규칙이 있을 때, 그 부분만 1:1로 확장합니다."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {tracks.map((track) => (
            <article key={track.name} className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-8">
              <p className="text-sm font-semibold text-brand">{track.kicker}</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-navy">{track.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">대상 · {track.audience}</p>
              <ul className="mt-6 space-y-3">
                {track.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-slate-700">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href={track.consult} className="inline-flex items-center justify-center rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800">
                  이 방식으로 상담하기
                </Link>
                <Link href={track.href} className="inline-flex items-center justify-center gap-1 rounded-full px-4 py-2.5 text-sm font-semibold text-brand hover:text-brand-dark">
                  안내 자세히 보기
                  <ArrowUpRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          두 방식 모두 전문 컨설턴트 상담과 환경 세팅을 거쳐 오픈합니다. 금액은 업무 범위를 확인한 뒤 견적으로 안내합니다.
        </p>
      </div>
    </section>
  );
}
