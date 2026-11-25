"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass, secondaryButtonClass } from "@/components/ui/buttons";
import {
  caseTopics,
  customCases,
  topicForCase,
  type CaseDetail,
  type CaseTopicId,
  type CustomCase,
} from "@/lib/custom-cases";

function DetailList({ details }: { details: CaseDetail[] }) {
  return (
    <ul className="space-y-2">
      {details.map((detail, index) =>
        typeof detail === "string" ? (
          <li key={`${index}-${detail}`} className="break-keep text-sm leading-6 text-slate-700">
            {detail}
          </li>
        ) : (
          <li key={`${index}-${detail.title}`}>
            <p className="break-keep text-sm font-semibold leading-6 text-navy">{detail.title}</p>
            <ul className="mt-1 space-y-1 pl-4">
              {detail.items.map((item) => (
                <li key={item} className="break-keep text-sm leading-6 text-slate-600">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  );
}

function CaseTable({ item }: { item: CustomCase }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <h2 className="break-keep border-b border-slate-200 px-4 py-4 text-base font-bold leading-6 text-navy sm:px-5">
        {item.request}
      </h2>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{item.request} 사례 정보</caption>
        <tbody>
          <tr className="border-b border-slate-100">
            <th scope="row" className="w-28 bg-slate-50 px-4 py-3 text-sm font-semibold text-navy sm:w-32 sm:px-5">
              업종
            </th>
            <td className="break-keep px-4 py-3 text-sm leading-6 text-slate-700 sm:px-5">{item.industry}</td>
          </tr>
          <tr className="border-b border-slate-100">
            <th scope="row" className="bg-slate-50 px-4 py-3 text-sm font-semibold text-navy sm:px-5">
              도입모듈
            </th>
            <td className="break-keep px-4 py-3 text-sm leading-6 text-slate-700 sm:px-5">{item.modules.join(", ")}</td>
          </tr>
          <tr className="border-b border-slate-100">
            <th scope="row" className="bg-slate-50 px-4 py-3 align-top text-sm font-semibold text-navy sm:px-5">
              커스터마이징
            </th>
            <td className="px-4 py-3 sm:px-5">
              <DetailList details={item.details} />
            </td>
          </tr>
          <tr>
            <th scope="row" className="bg-slate-50 px-4 py-3 text-sm font-semibold text-navy sm:px-5">
              개발기간
            </th>
            <td className="break-keep px-4 py-3 text-sm leading-6 text-slate-700 sm:px-5">{item.period}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export function CaseStudies() {
  const [topic, setTopic] = useState<CaseTopicId>(caseTopics[0].id);
  const [activeId, setActiveId] = useState(customCases.find((item) => topicForCase(item) === caseTopics[0].id)?.id ?? "");

  const cases = useMemo(() => customCases.filter((item) => topicForCase(item) === topic), [topic]);
  const selected = cases.find((item) => item.id === activeId) ?? cases[0];

  function chooseTopic(next: CaseTopicId) {
    const first = customCases.find((item) => topicForCase(item) === next);
    setTopic(next);
    setActiveId(first?.id ?? "");
  }

  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold text-brand">요금 및 맞춤도입</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">도입 성공 사례</h1>
          <p className="mt-4 break-keep text-[15px] leading-7 text-slate-700">
            에스앤소프트의 1:1 커스터마이징 사례를 업무 주제별로 모았습니다. 주제를 고른 뒤 사례를 선택하면 내용을 볼 수 있습니다.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 overflow-x-auto pb-1" role="tablist" aria-label="사례 주제">
            {caseTopics.map((item) => {
              const count = customCases.filter((entry) => topicForCase(entry) === item.id).length;
              const selectedTopic = topic === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selectedTopic}
                  onClick={() => chooseTopic(item.id)}
                  className={
                    selectedTopic
                      ? "shrink-0 rounded-full bg-navy px-4 py-2 text-sm font-semibold text-white"
                      : "shrink-0 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-600 ring-1 ring-slate-200 hover:text-navy"
                  }
                >
                  {item.label}
                  <span className={selectedTopic ? "ml-1.5 text-white/70" : "ml-1.5 text-slate-400"}>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid grid-cols-1 items-start gap-4 sm:grid-cols-[15.5rem_minmax(0,1fr)] sm:gap-6">
            <div role="tabpanel">
              <ul className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                {cases.map((item) => {
                  const current = item.id === selected?.id;
                  return (
                    <li key={item.id} className="border-b border-slate-100 last:border-b-0">
                      <button
                        type="button"
                        onClick={() => setActiveId(item.id)}
                        aria-current={current ? "true" : undefined}
                        className={
                          current
                            ? "w-full bg-blue-50 px-4 py-3.5 text-left"
                            : "w-full px-4 py-3.5 text-left hover:bg-slate-50"
                        }
                      >
                        <span className="break-keep text-sm font-semibold leading-6 text-navy">{item.request}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {selected ? <CaseTable item={selected} /> : null}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link href={CONSULTATION_HREF} className={primaryButtonClass}>
              무료 도입 상담 및 견적 신청
            </Link>
            <Link href="/pricing/custom" className={secondaryButtonClass}>
              1:1 맞춤 커스터마이징
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
