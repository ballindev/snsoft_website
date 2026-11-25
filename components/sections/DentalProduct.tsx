import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  FileSpreadsheet,
  Globe,
  Grid3x3,
  Layers,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import { SalesPreview } from "@/components/mocks/ErpPreviews";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { DentalFunctions } from "@/components/sections/DentalFunctions";
import { DentalSectionNav } from "@/components/sections/DentalSectionNav";
import { InventoryScreens } from "@/components/sections/InventoryScreens";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import type { ProductScreen } from "@/lib/product-screens";

const points = [
  { icon: Building2, label: "본사·지사 통합" },
  { icon: BarChart3, label: "수주·매출·재고 분석" },
  { icon: Wallet, label: "적정단가 산출" },
];

const highlights = [
  { icon: Globe, body: "100% 웹기반 서비스로 언제, 어디서나" },
  { icon: Grid3x3, body: "편리하고 파워풀한 그리드 기능" },
  { icon: FileSpreadsheet, body: "빠른 엑셀 파일 전환" },
  { icon: Settings2, body: "다양한 사용자 옵션" },
  { icon: Layers, body: "전표 작성시 세부정보 확인 가능" },
  { icon: Sparkles, body: "초보자도 쉽게 사용 가능한 UI로 구성" },
  { icon: BarChart3, body: "매출, 재고현황이 한 눈에 확인 및 분석 가능" },
  { icon: ShieldCheck, body: "사업장별, 사원별, 메뉴별 세부 권한 설정 가능" },
  { icon: RefreshCw, body: "분기별 자동 업그레이드" },
  { icon: Layers, body: "타제품과 유기적인 통합 관리 가능" },
];

const effects = [
  "업무용 프로그램을 아웃소싱하여, 자체구축에 따른 비용 절감",
  "DB 및 서버를 직접 관리해야 하는 부담으로부터 해방",
  "불법적인 데이터 유출, 바이러스, 해킹으로부터 안전",
  "데이터 백업, 프로그램 업그레이드 등 시스템 관리에 대한 걱정 필요 無",
  "본사와 물류창고, 지사 사이의 원활한 데이터 교환",
  "실시간으로 매출/재고/미수금 확인 가능",
  "기존 거래내역 등 다양한 영업정보 조회를 통한 적정단가의 신속한 파악 및 결정이 가능",
  "다양한 영업관련 정보 활용을 통한 단기간 내 업무 능력 상승효과",
];

export function DentalProduct({ screens }: { screens: ProductScreen[] }) {
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
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">치과기자재종합관리</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              치과기자재 유통업체에서 본사/지사 간{" "}
              <span className="font-semibold text-white">실시간 데이터 통합 자료관리</span>가 가능한 관리
              시스템입니다.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              수주내역, 매출자료, 재고, 영업실적 등 분석이 용이하고 고객과의 상담시에도 신속한 고객응대 및 적정단가
              산출이 가능합니다.
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
            <SalesPreview />
          </div>
        </div>
      </section>

      <DentalSectionNav showScreens={showScreens} />

      <ProductHighlights items={highlights} />

      <section id="effects" className="scroll-mt-36 bg-navy py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold tracking-tight sm:text-3xl">기대효과</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {effects.map((item, index) => (
              <li key={item} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-semibold text-sky-300">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-3 text-sm leading-6 text-slate-100">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <DentalFunctions />

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
