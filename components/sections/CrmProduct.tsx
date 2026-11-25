import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  FileSpreadsheet,
  Globe,
  Grid3x3,
  Hash,
  Layers,
  MessageSquare,
  Receipt,
  RefreshCw,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { CrmPreview } from "@/components/mocks/ErpPreviews";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { CrmFunctions } from "@/components/sections/CrmFunctions";
import { CrmSectionNav } from "@/components/sections/CrmSectionNav";
import { InventoryScreens } from "@/components/sections/InventoryScreens";
import { ProductHighlights } from "@/components/sections/ProductHighlights";
import type { ProductScreen } from "@/lib/product-screens";

const points = [
  { icon: Users, label: "고객·상담" },
  { icon: Receipt, label: "청구·수납" },
  { icon: Hash, label: "시리얼 관리" },
];

const highlights = [
  { icon: Globe, body: "100% 웹기반 서비스로 언제, 어디서나" },
  { icon: Users, body: "고객 정보·상담내역·계약·청구/수납을 한곳에서" },
  { icon: Hash, body: "제품 시리얼번호 관리로 정확한 고객응대" },
  { icon: Grid3x3, body: "편리하고 파워풀한 그리드 기능" },
  { icon: FileSpreadsheet, body: "빠른 엑셀 파일 전환" },
  { icon: Settings2, body: "다양한 사용자 옵션" },
  { icon: Sparkles, body: "초보자도 쉽게 사용 가능한 UI로 구성" },
  { icon: MessageSquare, body: "SMS·DM 발송으로 고객 커뮤니케이션" },
  { icon: Calendar, body: "일정관리와 사내 게시판·메시지 지원" },
  { icon: ShieldCheck, body: "사업장별, 사원별, 메뉴별 세부 권한 설정 가능" },
  { icon: RefreshCw, body: "분기별 자동 업그레이드" },
  { icon: Layers, body: "타 제품과 유기적인 통합 관리 가능" },
];

const effects = [
  "업무용 프로그램을 아웃소싱하여, 자체 구축에 따른 비용 절감",
  "DB 및 서버를 직접 관리해야 하는 부담으로부터 해방",
  "불법적인 데이터 유출, 바이러스, 해킹으로부터 안전",
  "데이터 백업, 프로그램 업그레이드 등 시스템 관리에 대한 걱정 필요 無",
  "체계적인 고객관리로 매출 향상 효과를 기대할 수 있습니다",
];

export function CrmProduct({ screens }: { screens: ProductScreen[] }) {
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
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">고객관리</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              성공적인 사업을 위해 고객관리는 매우 중요합니다. 고객의 정보와 상담내역, 계약 및 청구/수납, 제품
              시리얼번호 관리 등이 가능하며{" "}
              <span className="font-semibold text-white">효율적이고 정확한 고객응대가 가능한 시스템</span>
              입니다.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
              체계적인 고객관리로 매출 향상 효과를 기대할 수 있습니다.
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
            <CrmPreview />
          </div>
        </div>
      </section>

      <CrmSectionNav showScreens={showScreens} />

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

      <CrmFunctions />

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
