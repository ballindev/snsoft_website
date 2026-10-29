"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import type { ProductScreen } from "@/lib/product-screens";

export function InventoryScreens({ screens }: { screens: ProductScreen[] }) {
  const [active, setActive] = useState(screens[0]?.id ?? "");
  const [moveFocus, setMoveFocus] = useState(false);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const current = screens.find((screen) => screen.id === active) ?? screens[0];

  useEffect(() => {
    if (moveFocus && active) tabRefs.current[active]?.focus();
  }, [active, moveFocus]);

  if (!current) return null;

  function select(id: string, focus: boolean) {
    setMoveFocus(focus);
    setActive(id);
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp" && event.key !== "ArrowRight" && event.key !== "ArrowLeft") return;
    event.preventDefault();
    const index = screens.findIndex((screen) => screen.id === active);
    const direction = event.key === "ArrowDown" || event.key === "ArrowRight" ? 1 : -1;
    const next = screens[(index + direction + screens.length) % screens.length];
    select(next.id, true);
  }

  return (
    <section id="screens" className="scroll-mt-36 border-t border-slate-200 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">주요화면</h2>
        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
          <div role="tablist" aria-label="주요화면" className="flex gap-2 overflow-x-auto pb-1 lg:max-h-[34rem] lg:flex-col lg:overflow-y-auto lg:pb-0">
            {screens.map((screen, index) => {
              const selected = screen.id === current.id;
              return (
                <button
                  key={screen.id}
                  ref={(node) => {
                    tabRefs.current[screen.id] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`screen-tab-${screen.id}`}
                  aria-selected={selected}
                  aria-controls="screen-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => select(screen.id, false)}
                  onKeyDown={onKeyDown}
                  className={`inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-left text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand lg:w-full lg:rounded-2xl lg:px-4 lg:py-3 ${
                    selected ? "bg-navy text-white" : "border border-slate-200 bg-[#f4f7fb] text-slate-600 hover:border-slate-300 hover:text-navy"
                  }`}
                >
                  <span className={`text-xs tabular-nums ${selected ? "text-sky-200" : "text-brand"}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {screen.title}
                </button>
              );
            })}
          </div>
          <div role="tabpanel" id="screen-panel" aria-labelledby={`screen-tab-${current.id}`} className="min-w-0">
            {current.imageUrl ? (
              <img src={current.imageUrl} alt={current.title} className="aspect-video w-full rounded-2xl border border-slate-200 object-cover object-top" />
            ) : (
              <ImagePlaceholder label={`${current.title} 화면`} resolution="1440x900px" />
            )}
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-navy">{current.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">{current.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
