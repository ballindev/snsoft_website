import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  ClipboardList,
  FileSpreadsheet,
  Globe,
  Grid3x3,
  Layers,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Truck,
} from "lucide-react";
import { OrdersPreview } from "@/components/mocks/ErpPreviews";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { InventoryScreens } from "@/components/sections/InventoryScreens";
import { OrdersFunctions } from "@/components/sections/OrdersFunctions";
import { OrdersSectionNav } from "@/components/sections/OrdersSectionNav";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import type { ProductScreen } from "@/lib/product-screens";

const points = [
  { icon: Globe, label: "웹에서 주문" },
  { icon: ClipboardList, label: "수주 자동 생성" },
  { icon: Truck, label: "즉시 출고" },
];

const highlights = [
  { icon: Globe, body: "100% 웹기반 서비스로 언제, 어디서나" },
  { icon: Grid3x3, body: "편리하고 파워풀한 그리드 기능" },
  { icon: FileSpreadsheet, body: "빠른 엑셀 파일 전환" },
  { icon: Layers, body: "전표 작성시 세부정보 확인 가능" },
  { icon: Sparkles, body: "초보자도 쉽게 사용 가능한 UI로 구성" },
  { icon: BarChart3, body: "주문내역 및 수주현황이 한 눈에 확인 및 분석 가능" },
  { icon: ShieldCheck, body: "사용자별, 메뉴별 세부 권한 설정 가능" },
  { icon: RefreshCw, body: "분기별 자동 업그레이드" },
  { icon: Layers, body: "타 제품과 유기적인 통합 관리 가능" },
];

const effects = [
  "전화나 팩스로 주문하는 번거로움에서 벗어나 빠른 주문 및 출고처리가 가능하여 시간단축 및 업무 효율성이 증대됨",
  "실시간 데이터가 연동되어 수많은 거래처의 수주도 빠른 출고(매출)처리가 가능",
  "불법적인 데이터 유출, 바이러스, 해킹으로부터 안전",
  "데이터 백업, 프로그램 업그레이드 등 시스템 관리에 대한 걱정 필요 無",
  "실시간으로 출고여부 확인 가능",
];

export function OrdersProduct({ screens }: { screens: ProductScreen[] }) {
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
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">주문관리</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              수백개 거래처의 주문을 전화나 팩스로 받는 번거로움에서 벗어나,{" "}
              <span className="font-semibold text-white">모든 주문을 한꺼번에 해결</span>할 수 있는 주문관리
              시스템입니다.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              거래처가 주문전표를 작성하면 판매처에 자동으로 수주전표로 작성되어 즉시 출고 처리가 가능합니다.
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
            <OrdersPreview />
          </div>
        </div>
      </section>

      <OrdersSectionNav showScreens={showScreens} />

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

      <OrdersFunctions />

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
