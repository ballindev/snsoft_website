import Link from "next/link";
import { CONSULTATION_HREF, mainNav, REMOTE_SUPPORT_HREF } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-7 lg:px-8">
        <div className="lg:col-span-2">
          <Link href="/" className="inline-flex flex-col gap-2" aria-label="BizMore ERP 홈">
            <img src="/brand/bizmore-erp.png" alt="BizMore ERP" className="h-8 w-auto" />
            <span className="text-xs text-slate-500">에스앤소프트</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            중소·제조·유통 기업의 회계, 영업, 생산, 재고를 위한 클라우드 웹 ERP입니다. 표준 업무는 패키지로, 회사만의 업무는 1:1로 맞춥니다.
          </p>
          <Link href={CONSULTATION_HREF} className="mt-4 inline-flex text-sm font-semibold text-brand hover:text-brand-dark">
            무료 도입 상담 및 견적 신청
          </Link>
        </div>
        {mainNav.map((item) => (
          <div key={item.id}>
            <p className="text-sm font-semibold text-navy">{item.label}</p>
            <ul className="mt-3 space-y-2">
              {item.groups.flatMap((group) => group.links).map((link) => (
                <li key={item.id + link.href + link.label}>
                  <Link href={link.href} className="text-sm text-slate-600 hover:text-navy">
                    {link.label}
                  </Link>
                </li>
              ))}
              {item.id === "support" ? (
                <li>
                  <Link href={REMOTE_SUPPORT_HREF} className="text-sm text-slate-600 hover:text-navy">
                    원격지원 연결
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs leading-5 text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 에스앤소프트. BizMore ERP.</p>
          <p>도입은 전문 컨설턴트 상담, 환경 세팅, 교육 후 오픈됩니다.</p>
        </div>
      </div>
    </footer>
  );
}
