import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileText,
  Headphones,
  Landmark,
  MonitorSmartphone,
  RefreshCw,
  Send,
  UserRound,
  Wallet,
  Zap,
} from "lucide-react";
import { BankingPreview } from "@/components/mocks/ErpPreviews";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { BankingFunctions } from "@/components/sections/BankingFunctions";
import { BankingSectionNav } from "@/components/sections/BankingSectionNav";
import { InventoryScreens } from "@/components/sections/InventoryScreens";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import type { ProductScreen } from "@/lib/product-screens";

const points = [
  { icon: Zap, label: "수수료 없이 즉시이체" },
  { icon: RefreshCw, label: "자료 자동 수집" },
  { icon: FileText, label: "전표 자동 처리" },
];

const highlights = [
  { icon: Zap, body: "이체수수료 없이 모든 은행에 간편하게 즉시이체" },
  { icon: Wallet, body: "출금계좌 잔액을 실시간으로 확인" },
  { icon: BadgeCheck, body: "자금이체 거래처 계좌 등록 및 실시간 예금주 조회" },
  { icon: Landmark, body: "은행 거래내역 자동 수집" },
  { icon: FileText, body: "국세청 세금계산서 자료 자동 수집" },
  { icon: Building2, body: "신용카드·현금영수증 자료 자동 수집" },
  { icon: RefreshCw, body: "수집 자료 기반 전표처리 자동화" },
  { icon: Send, body: "대량이체 목록을 한 번에 구성하고 실행" },
  { icon: MonitorSmartphone, body: "인터넷 뱅킹 접속 없이 ERP 내에서 이체 완료" },
];

const effects = [
  "매번 발생하는 이체수수료 부담 없이 모든 은행에 간편하게 이체",
  "인터넷 뱅킹 접속 없이 BizMore ERP 내에서 즉시이체 완료",
  "이체결과 확인도 바로바로",
  "은행 거래내역·세금계산서·신용카드·현금영수증을 자동 수집해 업무를 빠르고 정확하게 처리",
];

const supports = [
  {
    icon: Headphones,
    title: "전문콜센터",
    body: "전문 상담사가 BizMore ERP 가입상담을 도와드립니다.",
    meta: "T.1600-4707",
  },
  {
    icon: UserRound,
    title: "1:1컨설팅",
    body: "고객별 컨설팅 담당자를 배치하여 맞춤 컨설팅 및 고객지원을 보장합니다.",
  },
  {
    icon: MonitorSmartphone,
    title: "원격지원",
    body: "온라인을 통한 원격 접속으로 프로그램 장애 A/S 처리를 지원합니다.",
  },
  {
    icon: Building2,
    title: "방문지원",
    body: "고객님의 요청 날짜에 담당자가 방문하여 프로그램 이용교육을 지원합니다.",
  },
];

export function BankingProduct({ screens }: { screens: ProductScreen[] }) {
  const showScreens = screens.length > 0;

  return (
    <main id="main">
      <section id="intro" className="relative scroll-mt-36 overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(420px,0.92fr)] lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-semibold text-sky-200">
              BizMore ERP
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">통합금융</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              매번 발생하는 이체수수료가 아까우시죠? BizMore ERP에서 즉시 이체하면{" "}
              <span className="font-semibold text-white">이체수수료 없이 모든 은행에 간편하게 이체</span>할 수
              있어요.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              통합금융서비스를 함께 도입하면 은행 거래내역, 국세청 세금계산서, 신용카드, 현금영수증 등의 자료를
              자동 수집하여 전표처리도 자동으로 처리합니다.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-3">
              {points.map((point) => (
                <li key={point.label} className="flex items-center gap-2 text-sm font-medium text-slate-100">
                  <point.icon className="size-4 shrink-0 text-sky-300" aria-hidden />
                  {point.label}
                </li>
              ))}
            </ul>
            <Link href={CONSULTATION_HREF} className={`${primaryButtonClass} mt-8`}>
              무료 도입 상담 및 견적 신청
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div aria-hidden>
            <BankingPreview />
          </div>
        </div>
      </section>

      <BankingSectionNav showScreens={showScreens} />

      <ProductHighlights items={highlights} />

      <section id="effects" className="scroll-mt-36 bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">기대효과</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {effects.map((item, index) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-sky-300">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm leading-6 text-slate-100">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BankingFunctions />

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-navy sm:text-3xl">고객지원</h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-6 text-slate-500">
            통합금융 도입과 이용을 전문콜센터·컨설팅·원격·방문으로 지원합니다.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {supports.map((item) => (
              <li key={item.title} className="rounded-2xl border border-slate-200/80 bg-[#f4f7fb] p-5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-white text-brand">
                  <item.icon className="size-4" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-semibold tracking-tight text-navy">{item.title}</h3>
                {item.meta ? (
                  <p className="mt-1 text-sm font-semibold text-brand">
                    <a href="tel:1600-4707" className="underline-offset-4 hover:underline">
                      {item.meta}
                    </a>
                  </p>
                ) : null}
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {showScreens ? <InventoryScreens screens={screens} /> : null}

      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <Link href={CONSULTATION_HREF} className={primaryButtonClass}>
            무료 도입 상담 및 견적 신청
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </main>
  );
}
