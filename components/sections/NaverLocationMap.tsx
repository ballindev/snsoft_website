"use client";

import { useEffect, useRef, useState } from "react";

const LAT = 37.4176904;
const LNG = 126.8822104;
const CLIENT_ID = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID || "sbw2sbeytg";

type NaverMaps = {
  Map: new (element: HTMLElement, options: Record<string, unknown>) => unknown;
  Marker: new (options: Record<string, unknown>) => unknown;
  LatLng: new (lat: number, lng: number) => unknown;
  Position: { TOP_RIGHT: unknown };
  ZoomControlStyle: { SMALL: unknown };
};

declare global {
  interface Window {
    naver?: { maps: NaverMaps };
    __initSnsoftNaverMap?: () => void;
  }
}

export function NaverLocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "denied">("loading");

  useEffect(() => {
    const element = mapRef.current;
    if (!element) return;

    let cancelled = false;

    const draw = () => {
      const maps = window.naver?.maps;
      if (!maps || !mapRef.current || cancelled) {
        if (!cancelled) setStatus("denied");
        return;
      }

      const center = new maps.LatLng(LAT, LNG);
      const map = new maps.Map(mapRef.current, {
        center,
        zoom: 16,
        zoomControl: true,
        zoomControlOptions: {
          style: maps.ZoomControlStyle.SMALL,
          position: maps.Position.TOP_RIGHT,
        },
      });
      new maps.Marker({ position: center, map });

      window.setTimeout(() => {
        if (cancelled) return;
        const message = mapRef.current?.innerText ?? "";
        setStatus(message.includes("인증") ? "denied" : "ready");
      }, 700);
    };

    if (window.naver?.maps) {
      draw();
      return () => {
        cancelled = true;
      };
    }

    window.__initSnsoftNaverMap = () => {
      if (!cancelled) draw();
    };

    const scriptId = "naver-map-sdk";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${CLIENT_ID}&callback=__initSnsoftNaverMap`;
      script.onerror = () => {
        if (!cancelled) setStatus("denied");
      };
      document.head.appendChild(script);
    }

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative h-[280px] w-full bg-slate-100 sm:h-[420px]">
      <div ref={mapRef} className="h-full w-full" />
      {status === "denied" ? (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 px-6 text-center">
          <p className="break-keep text-sm leading-6 text-slate-600">
            지도를 이 페이지에 표시하지 못했습니다. 아래 버튼으로 네이버 지도에서 위치를 확인할 수
            있습니다.
          </p>
        </div>
      ) : null}
    </div>
  );
}
