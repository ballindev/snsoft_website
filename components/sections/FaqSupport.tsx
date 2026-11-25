import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { CONSULTATION_HREF, type Faq, type SitePage } from "@/lib/site";

export function FaqSupport({ page, faqs }: { page: SitePage; faqs: Faq[] }) {
  return (
    <main id="main" className="bg-white">
      <div className="border-b border-slate-200 bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_70%)]">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <p className="text-sm font-semibold text-brand">{page.group}</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{page.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            {page.description}
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8" aria-label="자주 묻는 질문 목록">
        {faqs.length > 0 ? (
          <div className="border-t border-slate-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border-b border-slate-200">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left [&::-webkit-details-marker]:hidden">
                  <span className="min-w-0 flex-1 text-sm font-medium leading-6 text-navy sm:text-base sm:leading-7">
                    <span className="mr-2 font-semibold text-brand">Q.</span>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className="size-4 shrink-0 text-slate-400 transition group-open:rotate-180"
                    aria-hidden
                  />
                </summary>
                <div className="flex gap-2 pb-5 pr-8 text-sm leading-6 text-slate-600 sm:leading-7">
                  <span className="shrink-0 font-semibold text-navy">A.</span>
                  <p className="min-w-0">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        ) : (
          <p className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
            등록된 질문이 없습니다. 온라인 문의로 바로 상담해 주세요.
          </p>
        )}
      </section>

      <section className="border-t border-slate-200" aria-labelledby="faq-contact-heading">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 sm:py-16 lg:px-8">
          <h2 id="faq-contact-heading" className="text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            찾는 질문이 없나요?
            <br className="sm:hidden" /> 도입 상담으로 이어 주세요.
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            FAQ에서 답을 찾지 못하셨다면, 아래 문의 경로로 바로 연락해 주세요.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-slate-700 sm:text-base">
            <li>
              <Link href={CONSULTATION_HREF} className="font-semibold text-brand underline-offset-4 hover:underline">
                1:1 온라인 문의 · 도입 상담
              </Link>
            </li>
            <li>
              <Link href="/support/forms" className="font-semibold text-brand underline-offset-4 hover:underline">
                양식지 주문
              </Link>
            </li>
            <li>
              전화{" "}
              <a href="tel:1600-4707" className="font-semibold text-navy underline-offset-4 hover:underline">
                1600-4707
              </a>
            </li>
            <li className="text-slate-500">평일 상담 · 자세한 견적은 상담에서 안내합니다.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
