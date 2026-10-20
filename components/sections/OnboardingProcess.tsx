import { ClipboardList, GraduationCap, MessagesSquare, Settings2 } from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "온라인 상담/데모 접수",
    description: "회사와 업종, 관심 기능, 지금 쓰는 엑셀을 웹 폼에 남깁니다.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "전문 컨설턴트 1:1 업무 진단",
    description: "방문 또는 화상으로 시연하고, 표준 패키지와 맞춤 개발 범위를 나눕니다.",
    icon: MessagesSquare,
  },
  {
    step: "03",
    title: "최적 환경 구성 및 데이터 세팅",
    description: "기초 코드와 양식지를 맞추고, 필요한 화면만 1:1로 개발합니다.",
    icon: Settings2,
  },
  {
    step: "04",
    title: "실무자 교육 및 서비스 오픈",
    description: "사용자 교육 후 오픈하고, 전담 사후 관리와 원격지원으로 이어갑니다.",
    icon: GraduationCap,
  },
];

export function OnboardingProcess() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Onboarding"
          title="상담부터 오픈까지, 네 단계"
          description="컨설턴트가 업무를 확인한 뒤 환경을 세팅하고, 교육이 끝난 다음 사용을 시작합니다."
        />
        <ol className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.step}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold tabular-nums text-brand">{step.step}</span>
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-white text-navy shadow-sm">
                    <Icon className="size-5" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold tracking-tight text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
              </li>
            );
          })}
        </ol>
        <div className="mx-auto mt-10 max-w-3xl">
          <ImagePlaceholder label="전문 컨설턴트 방문 또는 화상 데모 시연 장면" resolution="1200x675px" />
        </div>
      </div>
    </section>
  );
}
