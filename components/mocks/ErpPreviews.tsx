import type { ReactNode } from "react";
import { AlertTriangle, BarChart3, FileText, Package, ScanBarcode, Wallet } from "lucide-react";

function WindowChrome({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="size-2.5 rounded-full bg-rose-300" />
        <span className="size-2.5 rounded-full bg-amber-300" />
        <span className="size-2.5 rounded-full bg-emerald-300" />
        <p className="ml-2 truncate text-xs font-medium text-slate-500">{title}</p>
        <p className="ml-auto shrink-0 text-[10px] font-semibold tracking-wide text-slate-400">예시 화면</p>
      </div>
      {children}
    </div>
  );
}

const salesBars = [
  { month: "5월", height: "42%" },
  { month: "6월", height: "55%" },
  { month: "7월", height: "48%" },
  { month: "8월", height: "64%" },
  { month: "9월", height: "73%" },
  { month: "10월", height: "88%" },
];

export function DashboardMock() {
  return (
    <div aria-hidden className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_28px_70px_-32px_rgba(15,23,42,0.5)]">
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
        <span className="size-2.5 rounded-full bg-rose-300" />
        <span className="size-2.5 rounded-full bg-amber-300" />
        <span className="size-2.5 rounded-full bg-emerald-300" />
        <p className="ml-2 text-xs font-medium text-slate-500">BizMore ERP · 경영현황</p>
        <p className="ml-auto text-[10px] font-semibold tracking-wide text-slate-400">예시 화면</p>
      </div>
      <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[64px_1fr]">
        <div className="flex flex-col items-center gap-3 border-r border-slate-100 bg-navy py-4 text-slate-300">
          <span className="flex size-8 items-center justify-center rounded-lg bg-white/10 text-white">
            <BarChart3 className="size-4" />
          </span>
          <Wallet className="size-4" />
          <Package className="size-4" />
          <FileText className="size-4" />
          <ScanBarcode className="size-4" />
        </div>
        <div className="space-y-4 p-3 sm:p-4">
          <div className="grid gap-2 sm:grid-cols-3">
            <article className="rounded-xl bg-slate-50 p-3">
              <p className="text-[11px] font-medium text-slate-500">이번 달 매출</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-navy">1.28억</p>
              <p className="text-[11px] font-medium text-emerald-600">전월 대비 +12%</p>
            </article>
            <article className="rounded-xl bg-slate-50 p-3">
              <p className="text-[11px] font-medium text-slate-500">거래처 미수금</p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-navy">3,420만</p>
              <p className="text-[11px] font-medium text-slate-500">12개 거래처</p>
            </article>
            <article className="rounded-xl bg-amber-50 p-3">
              <p className="flex items-center gap-1 text-[11px] font-medium text-amber-700">
                <AlertTriangle className="size-3" />
                재고 부족
              </p>
              <p className="mt-1 text-lg font-semibold tabular-nums text-navy">7품목</p>
              <p className="text-[11px] font-medium text-amber-700">안전재고 미달</p>
            </article>
          </div>
          <div className="rounded-xl border border-slate-100 p-3">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-semibold text-navy">월별 매출</p>
              <p className="text-[11px] text-slate-500">단위: 백만 원</p>
            </div>
            <div className="flex h-28 items-end gap-2">
              {salesBars.map((bar, index) => (
                <div key={bar.month} className="flex flex-1 flex-col items-center gap-1">
                  <div className="flex h-24 w-full items-end">
                    <div
                      className={`w-full rounded-t-md ${index === salesBars.length - 1 ? "bg-navy" : "bg-brand"}`}
                      style={{ height: bar.height }}
                    />
                  </div>
                  <span className="text-[10px] text-slate-500">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
          <ul className="space-y-2">
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs">
              <span className="text-slate-700">한빛식품 · 미수 86일</span>
              <span className="font-semibold tabular-nums text-navy">860만</span>
            </li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs">
              <span className="text-slate-700">등심 1kg · 안전재고 미달</span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 font-medium text-amber-800">재고 4</span>
            </li>
            <li className="flex items-center justify-between rounded-lg bg-slate-50 px-3 py-2 text-xs">
              <span className="text-slate-700">전자세금계산서 전송 대기</span>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 font-medium text-brand">3건</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function AccountingPreview() {
  const rows = [
    ["한빛식품", "4,280,000", "전송완료"],
    ["메디칼라인", "1,150,000", "발행대기"],
    ["푸른유통", "860,000", "수정발행"],
  ];

  return (
    <WindowChrome title="전자세금계산서">
      <div className="grid gap-2 p-4 sm:grid-cols-3">
        {[
          ["발행", "128"],
          ["전송완료", "121"],
          ["확인 필요", "7"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-xl bg-slate-50 px-3 py-3">
            <p className="text-[11px] text-slate-500">{label}</p>
            <p className="mt-1 text-xl font-semibold tabular-nums text-navy">{value}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="overflow-hidden rounded-xl border border-slate-100">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-3 py-2 font-medium">거래처</th>
                <th className="px-3 py-2 font-medium">공급가액</th>
                <th className="px-3 py-2 font-medium">상태</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([partner, amount, status]) => (
                <tr key={partner} className="border-t border-slate-100">
                  <td className="px-3 py-2.5 text-slate-700">{partner}</td>
                  <td className="px-3 py-2.5 tabular-nums text-navy">{amount}</td>
                  <td className="px-3 py-2.5">
                    <span className="rounded-full bg-blue-50 px-2 py-0.5 font-medium text-brand">{status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WindowChrome>
  );
}

export function SalesPreview() {
  const rows = [
    ["SO-1024", "한빛식품", "양념육 1kg", "출고대기"],
    ["SO-1025", "서울메디칼", "진료 세트", "배송중"],
    ["SO-1026", "푸른식자재", "채소 박스", "매출완료"],
  ];

  return (
    <WindowChrome title="주문 · 판매재고">
      <div className="p-4">
        <div className="overflow-hidden rounded-xl border border-slate-100">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-3 py-2 font-medium">주문</th>
                <th className="px-3 py-2 font-medium">거래처</th>
                <th className="hidden px-3 py-2 font-medium sm:table-cell">품목</th>
                <th className="px-3 py-2 font-medium">상태</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([order, partner, item, status]) => (
                <tr key={order} className="border-t border-slate-100">
                  <td className="px-3 py-2.5 font-medium text-navy">{order}</td>
                  <td className="px-3 py-2.5 text-slate-700">{partner}</td>
                  <td className="hidden px-3 py-2.5 text-slate-600 sm:table-cell">{item}</td>
                  <td className="px-3 py-2.5">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5 font-medium text-slate-700">{status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[11px] text-slate-500">오늘 출고 예정</p>
            <p className="mt-1 text-lg font-semibold text-navy">18건</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-3">
            <p className="text-[11px] text-amber-700">가용재고 부족</p>
            <p className="mt-1 text-lg font-semibold text-navy">3품목</p>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function ProductionPreview() {
  return (
    <WindowChrome title="생산자재 BOM">
      <div className="space-y-3 p-4">
        <div className="rounded-xl border border-slate-100 p-3">
          <p className="text-xs font-semibold text-navy">양념육 1kg</p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
            <li className="flex justify-between border-l-2 border-brand pl-3"><span>원료육</span><span className="tabular-nums">0.80 kg</span></li>
            <li className="flex justify-between border-l-2 border-slate-200 pl-3"><span>양념 소스</span><span className="tabular-nums">0.15 kg</span></li>
            <li className="flex justify-between border-l-2 border-amber-400 pl-3"><span>포장재</span><span className="font-medium text-amber-700">안전재고 미달</span></li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[11px] text-slate-500">오늘 생산지시</p>
            <p className="mt-1 text-lg font-semibold text-navy">240 kg</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[11px] text-slate-500">자재 부족</p>
            <p className="mt-1 text-lg font-semibold text-navy">2건</p>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function SpecialtyPreview() {
  const lots = [
    ["LT-24018", "등심", "D-12", "출고가능"],
    ["LT-24022", "목심", "D-4", "우선출고"],
    ["LT-24031", "포장재", "—", "재고부족"],
  ];

  return (
    <WindowChrome title="로트 · 바코드">
      <div className="space-y-2 p-4">
        {lots.map(([lot, item, life, status]) => (
          <div key={lot} className="flex items-center justify-between rounded-xl border border-slate-100 px-3 py-2.5">
            <div>
              <p className="text-xs font-semibold text-navy">{lot}</p>
              <p className="text-[11px] text-slate-500">{item} · 유통 {life}</p>
            </div>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-700">{status}</span>
          </div>
        ))}
        <div className="flex items-center gap-2 rounded-xl bg-navy px-3 py-3 text-white">
          <ScanBarcode className="size-4 shrink-0" />
          <p className="text-xs">최근 스캔 · 출고 12박스 · 한빛식품</p>
        </div>
      </div>
    </WindowChrome>
  );
}
