import Link from "next/link";
import { ExternalLink, Phone } from "lucide-react";
import { CONSULTATION_HREF } from "@/lib/site";
import { primaryButtonClass, secondaryButtonClass } from "@/components/ui/buttons";
import { NaverLocationMap } from "@/components/sections/NaverLocationMap";

const NAVER_MAP_URL =
  "https://map.naver.com/p/entry/place/1437225782";

const NAVER_DIRECTIONS_URL =
  "https://map.naver.com/v5/directions/-/14124463.05245297,4497488.466301143," +
  encodeURIComponent("유플래닛 티타워") +
  ",1437225782,PLACE_POI/-/transit?c=14123997.2643116,4497488.4663012,15,0,0,0,dh&isCorrectAnswer=true";

const busGroups = [
  { label: "일반버스", routes: ["8-2", "22", "50", "200"] },
  { label: "지선버스", routes: ["5627", "5633"] },
  { label: "마을버스", routes: ["1-1", "1-3"] },
];

const expressBuses = [
  { number: "8507", route: "사당역 4번 출구 → KTX 광명역 3번출구" },
  { number: "9633", route: "양재역 9번 출구 → 광명역써밋플레이스아브뉴프랑" },
];

export function LocationPage() {
  return (
    <main>
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 pb-4 pt-10 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand">회사소개</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-navy sm:text-4xl">오시는 길</h1>
        </div>
        <div className="mx-auto max-w-5xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <NaverLocationMap />
            <div className="flex flex-col gap-3 border-t border-slate-200 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="break-keep text-sm leading-6 text-slate-600">
                유플래닛 티타워 · 경기도 광명시 양지로 21
              </p>
              <a
                href={NAVER_MAP_URL}
                target="_blank"
                rel="noreferrer"
                className={primaryButtonClass}
              >
                네이버 지도에서 보기
                <ExternalLink className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-5xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
          <div>
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-navy">
              <span className="h-5 w-1 rounded-full bg-brand" aria-hidden />
              주소
            </h2>
            <dl className="mt-6 space-y-4 text-[15px] leading-7 text-slate-700">
              <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                <dt className="font-semibold text-navy">도로명주소</dt>
                <dd className="break-keep">(14345) 경기도 광명시 양지로 21 유플래닛 티타워 1401호</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                <dt className="font-semibold text-navy">지번주소</dt>
                <dd className="break-keep">(14345) 경기도 광명시 일직동 512-3 유플래닛 티타워 1401호</dd>
              </div>
              <div className="grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
                <dt className="flex items-center gap-1.5 font-semibold text-navy">
                  <Phone className="size-4 text-brand" aria-hidden />
                  TEL / FAX
                </dt>
                <dd className="break-keep">
                  <a href="tel:1600-4707" className="font-semibold text-brand hover:underline">
                    1600-4707
                  </a>
                  <span className="mx-2 text-slate-300" aria-hidden>
                    |
                  </span>
                  FAX 02)858-4707
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <h2 className="flex items-center gap-2.5 text-xl font-bold text-navy">
              <span className="h-5 w-1 rounded-full bg-brand" aria-hidden />
              교통 안내
            </h2>
            <div className="mt-6 grid gap-4">
              <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="text-base font-bold text-navy">지하철 · KTX</h3>
                <p className="mt-3 break-keep text-[15px] leading-7 text-slate-700">
                  1호선, KTX 광명역 (1번, 3번 출구) → 도보 5분
                </p>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="text-base font-bold text-navy">버스</h3>
                <p className="mt-3 break-keep text-[15px] leading-7 text-slate-700">
                  광명역데시앙. 일직동행정복지센터 정류장 하차
                </p>
                <p className="mt-1 break-keep text-[15px] leading-7 text-slate-700">→ 티타워까지 도보 3분</p>
                <dl className="mt-5 space-y-4">
                  {busGroups.map((group) => (
                    <div key={group.label}>
                      <dt className="text-sm font-semibold text-navy">{group.label}</dt>
                      <dd className="mt-2 flex flex-wrap gap-2">
                        {group.routes.map((route) => (
                          <span
                            key={route}
                            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
                          >
                            {route}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ))}
                  <div>
                    <dt className="text-sm font-semibold text-navy">광역버스</dt>
                    <dd className="mt-2 space-y-2">
                      {expressBuses.map((bus) => (
                        <p key={bus.number} className="break-keep text-[15px] leading-7 text-slate-700">
                          <span className="mr-2 inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                            {bus.number}
                          </span>
                          {bus.route}
                        </p>
                      ))}
                    </dd>
                  </div>
                </dl>
              </article>

              <article className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                <h3 className="text-base font-bold text-navy">자가용</h3>
                <dl className="mt-4 space-y-4 text-[15px] leading-7 text-slate-700">
                  <div>
                    <dt className="font-semibold text-navy">주소 검색</dt>
                    <dd className="mt-1 break-keep">
                      경기 광명시 양지로 21 (경기 광명시 일직동 512-3)
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-navy">주차장</dt>
                    <dd className="mt-1 break-keep">B3~B6 이용 (동시 3,200대 주차 가능)</dd>
                  </div>
                </dl>
              </article>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={CONSULTATION_HREF} className={primaryButtonClass}>
              방문 상담 신청
            </Link>
            <a
              href={NAVER_DIRECTIONS_URL}
              target="_blank"
              rel="noreferrer"
              className={secondaryButtonClass}
            >
              네이버 지도 길찾기
              <ExternalLink className="size-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
