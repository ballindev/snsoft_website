import Link from "next/link";
import { mainNav, REMOTE_SUPPORT_HREF } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <nav aria-label="푸터 메뉴" className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
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
        </nav>

        <div className="mt-12 flex flex-col gap-6 border-t border-slate-200 pt-10 sm:flex-row sm:items-center">
          <Link href="/" className="shrink-0" aria-label="에스앤소프트 홈">
            <img src="/brand/snsoft.png" alt="에스앤소프트(주)" className="h-16 w-auto sm:h-20" />
          </Link>
          <div className="text-sm leading-6 text-slate-600">
            <p>
              에스앤소프트(주)
              <span className="px-1.5 text-slate-300" aria-hidden>|</span>
              대표이사: 성병욱
              <span className="px-1.5 text-slate-300" aria-hidden>|</span>
              TEL : <a href="tel:1600-4707" className="hover:text-navy">1600-4707</a>
              <span className="px-1.5 text-slate-300" aria-hidden>|</span>
              FAX : 02)858-4707
              <span className="px-1.5 text-slate-300" aria-hidden>|</span>
              사업자등록번호 219-81-16916
            </p>
            <p>
              주소: 서울시 금천구 가산디지털1로 226 에이스하이엔드타워5차 1903호
              <span className="px-1.5 text-slate-300" aria-hidden>|</span>
              <span className="font-semibold text-brand">※ 비즈모아소프트는 에스앤소프트의 가족회사입니다.</span>
            </p>
            <p className="text-slate-500">Copyright © 2017 SNSOFT.All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
