import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  FileSpreadsheet,
  Globe,
  Grid3x3,
  Layers,
  Percent,
  RefreshCw,
  Settings2,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
} from "lucide-react";
import { SalesPreview } from "@/components/mocks/ErpPreviews";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { FoodServiceFunctions } from "@/components/sections/FoodServiceFunctions";
import { FoodServiceSectionNav } from "@/components/sections/FoodServiceSectionNav";
import { InventoryScreens } from "@/components/sections/InventoryScreens";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import type { ProductScreen } from "@/lib/product-screens";

const points = [
  { icon: BarChart3, label: "판매분석·고객관리" },
  { icon: ShoppingCart, label: "온라인 수주·출고" },
  { icon: Percent, label: "마진 단가 자동계산" },
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
  "업무용 프로그램을 아웃소싱하여, 자체 구축에 따른 비용 절감",
  "DB 및 서버를 직접 관리해야 하는 부담으로부터 해방",
  "불법적인 데이터 유출, 바이러스, 해킹으로부터 안전",
  "데이터 백업, 프로그램 업그레이드 등 시스템 관리에 대한 걱정 필요 無",
  "본사와 물류창고, 지사 사이의 원활한 데이터 교환",
  "실시간으로 매출/재고/미수금 확인 가능",
  "수많은 전화, 팩스 주문에서 벗어나 인터넷에서 신속하고 정확하게 주문받아 업무의 시간단축 및 효율성을 경험",
  "매일 변동되는 품목의 매출단가를 수기로 계산하는 번거로움에서 탈피",
  "대리점별 주문내역에 대한 실시간으로 정확하고 신속한 집계 및 생산 목표량 파악이 가능",
];

export function FoodServiceProduct({ screens }: { screens: ProductScreen[] }) {
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
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">식자재종합관리</h1>
            <p className="mt-5 max-w-xl break-keep text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              식자재 업체에 특화된 식자재종합관리 시스템을 통해{" "}
              <span className="font-semibold text-white">판매분석과 고객관리</span>가 용이해지고 매출전략
              수립하기가 쉬워집니다.
            </p>
            <p className="mt-4 max-w-xl break-keep text-sm leading-7 sm:text-base">
              <span className="box-decoration-clone bg-brand px-2 py-0.5 font-semibold leading-8 break-keep text-white">
                주문관리 시스템과 연동되어 온라인으로 수주받아 쉽고 빠른 주문내역 확인 및 출고처리가 가능합니다
              </span>
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

      <FoodServiceSectionNav showScreens={showScreens} />

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

      <FoodServiceFunctions />

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
