import Link from "next/link";
import { ArrowUpRight, Beef, Building2, Car, CircleDot, Smile, Stethoscope, Store, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { industryCards, type IndustryIcon } from "@/lib/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<IndustryIcon, LucideIcon> = {
  beef: Beef,
  stethoscope: Stethoscope,
  smile: Smile,
  "circle-dot": CircleDot,
  utensils: UtensilsCrossed,
  building: Building2,
  car: Car,
  store: Store,
};

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="업종 현장의 규칙까지 담는 솔루션"
          description="육가공, 의료·치과, 타이어, 식자재, 빌딩, 차량, 매장. 표준 재고와 회계 위에 그 업종에서만 쓰는 항목을 올립니다."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industryCards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <Link
                key={card.href + card.title}
                href={card.href}
                className={`group flex h-full flex-col rounded-3xl border p-6 transition hover:-translate-y-0.5 hover:shadow-md ${
                  card.wide ? "sm:col-span-2" : ""
                } ${card.featured ? "border-navy bg-navy text-white" : "border-slate-200 bg-white text-slate-700"}`}
              >
                <span className={`flex size-11 items-center justify-center rounded-2xl ${card.featured ? "bg-white/10 text-white" : "bg-blue-50 text-brand"}`}>
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className={`mt-5 text-lg font-semibold tracking-tight ${card.featured ? "text-white" : "text-navy"}`}>{card.title}</h3>
                <p className={`mt-2 text-sm leading-6 ${card.featured ? "text-slate-200" : "text-slate-600"}`}>{card.description}</p>
                <ul className="mt-4 space-y-1 text-sm">
                  {card.points.map((point) => (
                    <li key={point} className={card.featured ? "text-slate-200" : "text-slate-600"}>· {point}</li>
                  ))}
                </ul>
                <span className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${card.featured ? "text-sky-200" : "text-brand"}`}>
                  솔루션 보기
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            );
          })}
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="mx-auto max-w-3xl">
              <ImagePlaceholder
                label="육가공 ERP 바코드 스캔 현장 사진 또는 재고 수불부 캡처"
                resolution="800x600px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
