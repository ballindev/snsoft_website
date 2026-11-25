import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass } from "@/components/ui/buttons";
import { InventoryScreens } from "@/components/sections/InventoryScreens";
import { MedicalDeviceSectionNav } from "@/components/sections/MedicalDeviceSectionNav";
import type { ProductScreen } from "@/lib/product-screens";

const grades = [
  { grade: "4", date: "2020년 7월 1일", color: "#3aa4e0" },
  { grade: "3", date: "2021년 7월 1일", color: "#1f78d1" },
  { grade: "2", date: "2022년 7월 1일", color: "#1247b0" },
  { grade: "1", date: "2023년 7월 1일", color: "#0b1f3a" },
];

const features = [
  { text: "100% 웹기반 서비스로 언제, 어디서나" },
  { text: "단 하루만 교육받아도, 초보자도 사용 가능한 쉽고 간편한 사용방식" },
  { text: "의료기기 통합정보시스템 신고용 파일(Excel 파일) 생성" },
  { text: "매입/매출전표 입력시 UDI 바코드 스캐너를 통한 신속하고 편리한 입력 기능", emphasis: true },
  { text: "Excel 파일의 대용량 UDI 관련 입/출고 자료를 간편하게 전표로 일괄생성 기능", emphasis: true },
  { text: "식약처 의료기기통합정보시스템에 등록된 품목 및 거래처정보 조회 후 ERP에 즉시 등록 가능", emphasis: true },
  { text: "UDI, 로트번호, 사용기한, 일련번호, 제조년월 등 다양한 조건으로 입출고 내역 검색 가능" },
  { text: "모든 자료 Excel 전환 가능" },
  { text: "설치된 특정 PC에 국한되지 않고 어느 PC, 집, 차량 등 어디에서나 24시간 업무처리 가능" },
  { text: "PC, 태블릿, 스마트폰 등 어느 기기에서도 사용가능" },
  { text: "전표상에서 실시간 과거 거래내역 조회 가능" },
  { text: "PDF 파일 생성 기능 제공" },
  { text: "동시에 여러 화면에서 다양한 정보 활용 가능" },
  { text: "거래처 및 품목 엑셀로 일괄 등록 가능" },
  { text: "거래명세서/거래처원장 → 메일, 팩스, SMS 발송 가능 (부가서비스)", emphasis: true },
  { text: "현재 사용중인 프로그램의 기초자료(품목, 거래처)를 BizMore ERP로 모두 이전 가능" },
];

const comparisons = [
  {
    feature: "의료기기통합정보시스템에 등록된 거래처 정보 조회 / 불러오기",
    bizmore: "O",
    other: "X",
  },
  {
    feature: "의료기기통합정보시스템에 등록된 의료기기정보 조회 / 불러오기",
    bizmore: "O",
    other: "X",
  },
  {
    feature: "의료기기통합정보시스템에 등록된 의료기기 조회 후 일괄등록",
    bizmore: "O",
    other: "X",
  },
  {
    feature: "입출고전표에서 UDI 대량자료 일괄 등록 가능여부",
    bizmore: "Excel자료 일괄 등록",
    other: "X",
  },
  {
    feature: "UDI 스캔입력시 UDI-DI, UDI-PI 각 항목을 시스템이 자동식별하여 분리저장",
    bizmore: "O",
    other: "X",
  },
  {
    feature: "초기 UDI사용 목적에 맞는 시스템 기본구성 여부",
    bizmore: "별도의 사전작업 없음",
    other: "복잡한 사전 셋팅작업 필요",
  },
  {
    feature: "의료기기 공급내역 식약처 통합정보시스템 보고체계",
    bizmore: "O",
    other: "O",
  },
  {
    feature: "UDI용 거래명세서",
    bizmore: "O",
    other: "O",
  },
];

function CompareValue({ value }: { value: string }) {
  const mark = value === "O" || value === "X";
  return (
    <span className={mark ? "text-base font-semibold" : "text-sm font-medium leading-5"}>{value}</span>
  );
}

export function MedicalDeviceProduct({ screens }: { screens: ProductScreen[] }) {
  const showScreens = screens.length > 0;

  return (
    <main id="main">
      <section id="intro" className="scroll-mt-36 bg-navy text-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-sky-200">BizMore ERP</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">의료기기 유통관리</h1>
          <p className="mt-5 text-sm text-slate-300 sm:text-base">의료기기 유통, 제조, 수입, 임대 업체를 위한</p>
          <p className="mt-3 text-sm text-white sm:text-base">
            <span className="bg-brand px-2.5 py-1 font-semibold">의료기기 표준코드(UDI)통합정보관리 프로그램</span>
            <span className="ml-1.5">입니다</span>
          </p>
        </div>
      </section>

      <MedicalDeviceSectionNav showScreens={showScreens} />

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-16">
          <h2 className="text-xl font-bold leading-snug text-brand sm:text-3xl">
            <span className="box-decoration-clone bg-yellow-300 px-1.5 leading-[1.7] text-brand">
              의료기기 표준코드(UDI) 제도를 비즈모아와 함께 준비하세요
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
            2022년 07월 01일부터 2등급 의료기기 취급업체는
            <br className="hidden sm:block" /> 공급내역을 의료기기 통합정보 시스템에 등록해야 합니다.
          </p>
          <Link href={CONSULTATION_HREF} className={`${primaryButtonClass} mt-8`}>
            무료 도입 상담 및 견적 신청
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        <div id="schedule" className="scroll-mt-36 mx-auto max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2 className="sr-only">등급별 공급내역 등록 적용 시점</h2>
          <ol className="flex flex-col sm:flex-row">
            {grades.map((item, index) => (
              <li
                key={item.grade}
                className={`flex min-h-28 flex-1 items-center justify-center text-white ${index > 0 ? "sm:-ml-3.5" : ""}`}
                style={{
                  backgroundColor: item.color,
                  clipPath:
                    index === 0
                      ? "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)"
                      : "polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%, 18px 50%)",
                }}
              >
                <div className={`px-7 text-center ${index === 0 ? "sm:pl-4" : "sm:pl-8"}`}>
                  <p className="text-3xl font-semibold leading-none tracking-tight sm:text-4xl">{item.grade}</p>
                  <p className="mt-1 text-sm font-semibold">등급</p>
                  <p className="mt-2 text-xs text-white/90 sm:text-sm">{item.date}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="highlights" className="scroll-mt-36 border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-brand sm:text-3xl">
            특장점
            <span className="mt-2 block h-0.5 w-14 bg-brand" />
          </h2>
          <ul className="mt-8 space-y-1.5">
            {features.map((item) => (
              <li
                key={item.text}
                className={
                  item.emphasis
                    ? "bg-brand px-3 py-2.5 text-sm font-semibold leading-6 text-white sm:text-base"
                    : "px-3 py-1.5 text-sm leading-7 text-slate-800 sm:text-base"
                }
              >
                - {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="compare" className="scroll-mt-36 border-t border-slate-200 bg-[#f4f7fb] py-16 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand sm:text-3xl">
            타사 기능 비교
            <span className="mt-2 block h-0.5 w-14 bg-brand" />
          </h2>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <caption className="sr-only">BizMore ERP와 E사 제품의 의료기기 UDI 기능 비교</caption>
              <thead>
                <tr className="bg-[#e7f5fb] text-navy">
                  <th scope="col" className="border border-slate-200 px-4 py-4 text-center font-semibold">
                    주요기능
                  </th>
                  <th scope="col" className="w-44 border border-slate-200 bg-[#fff8ee] px-4 py-4 text-center font-semibold">
                    BizMore ERP
                  </th>
                  <th scope="col" className="w-44 border border-slate-200 px-4 py-4 text-center font-semibold">
                    E사 제품
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.feature}>
                    <th scope="row" className="border border-slate-200 bg-white px-4 py-4 text-left font-medium text-slate-800">
                      {row.feature}
                    </th>
                    <td
                      className={`border border-slate-200 bg-[#fff8ee] px-4 py-4 text-center ${
                        row.bizmore === "X" ? "text-slate-400" : "text-navy"
                      }`}
                    >
                      <CompareValue value={row.bizmore} />
                    </td>
                    <td
                      className={`border border-slate-200 bg-white px-4 py-4 text-center ${
                        row.other === "X" ? "text-slate-400" : "text-navy"
                      }`}
                    >
                      <CompareValue value={row.other} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
