import type { LucideIcon } from "lucide-react";

export type ProductHighlight = {
  body: string;
  icon: LucideIcon;
};

export function ProductHighlights({ items }: { items: ProductHighlight[] }) {
  return (
    <section id="highlights" className="scroll-mt-36 bg-[#f4f7fb] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">특장점</h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.body} className="rounded-2xl border border-slate-200/80 bg-white px-4 py-4 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand">
                  <item.icon className="size-4" aria-hidden />
                </span>
                <p className="min-w-0 text-base font-semibold tracking-tight text-navy">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
