"use client";

import { useEffect, useId, useState } from "react";
import { X } from "lucide-react";
import {
  formatFormPrice,
  formatFormSheets,
  type FormOrderGroup,
  type FormOrderItem,
} from "@/lib/form-orders";

type SampleTarget = {
  code: string;
  spec: string;
  sampleImage: string | null;
};

function SampleDialog({
  target,
  onClose,
}: {
  target: SampleTarget;
  onClose: () => void;
}) {
  const titleId = useId();
  const label = `${target.code} ${target.spec}`;

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="presentation">
      <button type="button" aria-label="닫기" className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92vh] w-full max-w-[min(96vw,56rem)] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl"
      >
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
          <h2 id={titleId} className="text-base font-semibold text-navy">
            {label} 샘플
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-navy"
            aria-label="닫기"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="overflow-auto px-4 py-4 sm:px-6 sm:py-6">
          {target.sampleImage ? (
            <img
              src={target.sampleImage}
              alt={`${label} 양식지 샘플`}
              className="mx-auto h-auto max-h-[calc(92vh-5.5rem)] w-auto max-w-full rounded-xl border border-slate-200 object-contain"
            />
          ) : (
            <div className="flex min-h-48 flex-col items-center justify-center rounded-2xl bg-[#f4f7fb] px-6 text-center">
              <p className="text-base font-semibold text-navy">샘플 준비 중</p>
              <p className="mt-2 text-sm leading-6 text-slate-500">해당 양식지 샘플 이미지는 곧 등록됩니다.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function FormsOrder({ groups }: { groups: FormOrderGroup[] }) {
  const [sample, setSample] = useState<SampleTarget | null>(null);

  function openSample(item: FormOrderItem) {
    setSample({ code: item.code, spec: item.spec, sampleImage: item.sampleImage });
  }

  return (
    <main id="main" className="bg-white">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold text-brand">고객지원</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">양식지 주문</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
          에스앤소프트 ERP프로그램 사용시 출력되는 거래명세서, 세금계산서 등의 양식지를 주문 받습니다.
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold tracking-tight text-navy">주문내용</h2>

          <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[#f4f7fb] text-navy">
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 text-center font-semibold">
                    품목명
                  </th>
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 text-center font-semibold">
                    품번
                  </th>
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 text-center font-semibold">
                    가격
                    <span className="mt-0.5 block text-xs font-medium text-slate-500">VAT포함</span>
                  </th>
                  <th scope="col" className="border-b border-slate-200 px-4 py-3 text-center font-semibold">
                    매수
                    <span className="mt-0.5 block text-xs font-medium text-slate-500">1BOX 기준</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {groups.map((group) =>
                  group.items.map((item, index) => (
                    <tr key={item.code} className="border-b border-slate-100 last:border-b-0">
                      {index === 0 ? (
                        <th
                          scope="row"
                          rowSpan={group.items.length}
                          className="border-r border-slate-100 bg-white px-4 py-3 text-center align-middle font-semibold text-navy"
                        >
                          {group.name}
                        </th>
                      ) : null}
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-between">
                          <span className="font-medium tabular-nums text-slate-800">
                            {item.code}{" "}
                            <span className="font-normal text-slate-600">{item.spec}</span>
                          </span>
                          <button
                            type="button"
                            onClick={() => openSample(item)}
                            className="inline-flex shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 transition hover:border-brand hover:text-brand"
                          >
                            샘플보기
                          </button>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-center tabular-nums text-slate-700">{formatFormPrice(item.price)}</td>
                      <td className="px-4 py-3 text-center tabular-nums text-slate-700">{formatFormSheets(item.sheets)}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-600">
            * 필요한 양식지 품번을 확인한 뒤, 본사(
            <a href="tel:1600-4707" className="font-semibold text-navy underline-offset-4 hover:underline">
              1600-4707
            </a>
            )나 담당 컨설턴트에게 전화 주시면 택배로 발송해 드립니다.
          </p>
        </section>
      </div>

      {sample ? <SampleDialog target={sample} onClose={() => setSample(null)} /> : null}
    </main>
  );
}
