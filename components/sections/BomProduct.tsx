import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  FileSpreadsheet,
  Globe,
  Grid3x3,
  Layers,
  Package,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";
import { ProductionPreview } from "@/components/mocks/ErpPreviews";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { BomFunctions } from "@/components/sections/BomFunctions";
import { BomSectionNav } from "@/components/sections/BomSectionNav";
import { InventoryScreens } from "@/components/sections/InventoryScreens";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import type { ProductScreen } from "@/lib/product-screens";

const points = [
  { icon: Workflow, label: "생산·외주 계획" },
  { icon: Package, label: "자재·재고" },
  { icon: ClipboardList, label: "수주~수금 통합" },
];

const highlights = [
  { icon: Globe, body: "100% 웹기반 서비스로 언제, 어디서나" },
  { icon: Layers, body: "영업통 프로그램의 상위 버전" },
  { icon: Grid3x3, body: "편리하고 파워풀한 그리드 기능" },
  { icon: FileSpreadsheet, body: "빠른 엑셀 파일 전환" },
  { icon: Settings2, body: "다양한 사용자 옵션" },
  { icon: ClipboardList, body: "전표 작성시 세부정보 확인 가능" },
  { icon: Sparkles, body: "초보자도 쉽게 사용 가능한 UI로 구성" },
  { icon: BarChart3, body: "매출, 재고현황이 한 눈에 확인 및 분석 가능" },
  { icon: ShieldCheck, body: "사업장별, 사원별, 메뉴별 세부 권한 설정 가능" },
  { icon: RefreshCw, body: "분기별 자동 업그레이드" },
  { icon: Layers, body: "타 제품과 유기적인 통합 관리 가능" },
];

const effects = [
  "업무용 프로그램을 아웃소싱하여, 자체 구축에 따른 비용 절감",
  "DB 및 서버를 직접 관리해야 하는 부담으로부터 해방",
  "불법적인 데이터 유출, 바이러스, 해킹으로부터 안전",
  "데이터 백업, 프로그램 업그레이드 등 시스템 관리에 대한 걱정 필요 無",
  "본사와 물류창고, 지사 사이의 원활한 데이터 교환",
  "실시간으로 매출/재고/미수금 확인 가능",
];

export function BomProduct({ screens }: { screens: ProductScreen[] }) {
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
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">생산자재</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              생산자재 시스템은{" "}
              <span className="font-semibold text-white">기업의 생산 활동에 필요한 총체적인 관리 시스템</span>
              으로서 생산(외주)계획, 자재관리, 재고관리, 금전관리 등 수주에서 제품 출하 후 수금까지의 전 과정을 통합
              관리할 수 있습니다.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              생산계획에 따른 효율적인 생산으로 수익성을 높이세요!
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
            <ProductionPreview />
          </div>
        </div>
      </section>

      <BomSectionNav showScreens={showScreens} />

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

      <BomFunctions />

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
