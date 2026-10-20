import Link from "next/link";
import { CONSULTATION_HREF, type SitePage } from "@/lib/site";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { primaryButtonClass } from "@/components/ui/buttons";

export function Subpage({ page }: { page: SitePage }) {
  return (
    <main id="main" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold text-brand">{page.group}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy sm:text-4xl">{page.title}</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600">{page.description}</p>
        <p className="mt-4 text-base leading-7 text-slate-700">{page.body}</p>

        {page.faqs ? (
          <div className="mt-10 space-y-3">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 px-5 py-4">
                <summary className="cursor-pointer list-none text-sm font-semibold text-navy [&::-webkit-details-marker]:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        ) : null}

        <div className="mt-10">
          <ImagePlaceholder label={page.imageLabel} resolution={page.imageResolution} />
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href={CONSULTATION_HREF} className={primaryButtonClass}>
            무료 도입 상담 및 견적 신청
          </Link>
          <Link href="/#industries" className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-brand hover:text-brand-dark">
            업종별 솔루션 보기
          </Link>
        </div>
      </div>
    </main>
  );
}
