import Link from "next/link";
import {
  ArrowUpRight,
  Beef,
  BrickWall,
  Building2,
  Car,
  CircleDot,
  Smile,
  Stethoscope,
  Store,
  Ticket,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";
import { industryCards, type IndustryIcon } from "@/lib/site";
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
  ticket: Ticket,
  brick: BrickWall,
};

export function Industries() {
  return (
    <section id="industries" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industries"
          title="업종 현장의 규칙까지 담는 솔루션"
          description="제조·가공부터 유통·매장, 빌딩·차량까지. 표준 재고와 회계 위에 그 업종에서만 쓰는 항목을 올립니다."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industryCards.map((card) => {
            const Icon = icons[card.icon];
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group flex h-full min-h-[280px] flex-col rounded-3xl border border-slate-200 bg-white p-6 text-slate-700 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-blue-50 text-brand">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-base font-semibold tracking-tight text-navy">{card.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{card.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-600">
                  {card.points.map((point) => (
                    <li key={point}>· {point}</li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  솔루션 보기
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
