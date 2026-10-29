import type { ProductScreen } from "@/lib/product-screens";

export function ProductScreens({ title = "주요 화면", screens }: { title?: string; screens: ProductScreen[] }) {
  if (screens.length === 0) return null;

  return (
    <section className="border-t border-slate-200 bg-slate-50 py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-navy">{title}</h2>
        <p className="mt-2 text-sm text-slate-600">실제 업무에서 자주 쓰는 화면을 순서대로 안내합니다.</p>
        <ol className="mt-8 space-y-4">
          {screens.map((screen, index) => (
            <li key={screen.id} className="rounded-3xl border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold text-brand">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{screen.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{screen.description}</p>
              <div className="mt-4 flex aspect-video items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 text-xs text-slate-500">
                {screen.imageUrl ? screen.imageUrl : "화면 이미지 준비 중"}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
