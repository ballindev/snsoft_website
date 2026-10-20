"use client";

import Link from "next/link";
import { useEffect, useState, type ComponentType } from "react";
import {
  Archive,
  BadgeCheck,
  Briefcase,
  Building2,
  Calculator,
  Car,
  ChevronDown,
  CircleDot,
  ClipboardList,
  Factory,
  FileText,
  Handshake,
  Headset,
  HelpCircle,
  Landmark,
  MapPin,
  Menu,
  MessagesSquare,
  Newspaper,
  Package,
  Receipt,
  Salad,
  Ship,
  Smile,
  Stethoscope,
  Store,
  Users,
  Utensils,
  Wrench,
  X,
} from "lucide-react";
import { CONSULTATION_HREF, mainNav, REMOTE_SUPPORT_HREF } from "@/lib/site";

const linkIcons: Record<string, ComponentType<{ className?: string; "aria-hidden"?: boolean }>> = {
  "/products/accounting": Calculator,
  "/products/e-tax": Receipt,
  "/products/banking": Landmark,
  "/products/inventory": Package,
  "/products/orders": ClipboardList,
  "/products/field-sales": Handshake,
  "/products/store": Store,
  "/products/bom": Factory,
  "/products/after-service": Wrench,
  "/products/trade": Ship,
  "/products/crm": Users,
  "/industries/meat-processing": Utensils,
  "/industries/medical-device": Stethoscope,
  "/industries/dental": Smile,
  "/industries/tire": CircleDot,
  "/industries/food-service": Salad,
  "/industries/building": Building2,
  "/industries/vehicle": Car,
  "/pricing/standard": BadgeCheck,
  "/pricing/custom": Wrench,
  "/pricing/cases": Newspaper,
  "/support/faq": HelpCircle,
  [CONSULTATION_HREF]: MessagesSquare,
  "/support/forms": FileText,
  "/support/plus-erp": Archive,
  "/about": Building2,
  "/about/media": Newspaper,
  "/about/careers": Briefcase,
  "/about/location": MapPin,
};

function MenuLink({ href, label, onClick }: { href: string; label: string; onClick: () => void }) {
  const Icon = linkIcons[href] ?? Package;
  return (
    <Link href={href} className="flex items-center gap-2 py-1.5 text-sm font-bold tracking-[-0.04em] text-[#333333] transition hover:text-brand" onClick={onClick}>
      <Icon className="size-4 shrink-0 text-[#333333]" aria-hidden />
      {label}
    </Link>
  );
}

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const activeItem = mainNav.find((item) => item.id === openMenu);

  return (
    <header
      className="sticky top-0 z-50 border-b border-slate-200 bg-white"
      onMouseLeave={() => setOpenMenu(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null);
      }}
    >
      <div className="relative mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <Link href="/" className="z-10 flex shrink-0 items-center" aria-label="BizMore ERP 홈" onClick={closeAll}>
          <img
            src="/brand/bizmore-erp.png"
            alt=""
            className="h-8 w-auto animate-logo-appear motion-reduce:animate-none"
          />
        </Link>

        <nav className="pointer-events-none absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 xl:pointer-events-auto xl:flex" aria-label="주요 메뉴">
          {mainNav.map((item) => {
            const expanded = openMenu === item.id;
            return (
              <button
                key={item.id}
                type="button"
                className="inline-flex items-center gap-1 py-2 text-base font-medium tracking-[-0.04em] text-[#333333]"
                aria-expanded={expanded}
                aria-controls={`mega-${item.id}`}
                onMouseEnter={() => setOpenMenu(item.id)}
                onFocus={() => setOpenMenu(item.id)}
                onClick={() => setOpenMenu(item.id)}
              >
                {item.label}
                <ChevronDown className={`size-4 text-[#333333] transition ${expanded ? "rotate-180" : ""}`} aria-hidden />
              </button>
            );
          })}
        </nav>

        <div className="relative z-20 ml-auto flex shrink-0 items-center gap-3 sm:gap-5">
          <Link href={REMOTE_SUPPORT_HREF} className="inline-flex items-center gap-1.5 text-base font-medium tracking-[-0.04em] text-[#262626] transition hover:text-black max-xl:hidden" onClick={closeAll}>
            <Headset className="size-5 text-brand" aria-hidden />
            원격지원
          </Link>
          <Link
            href={CONSULTATION_HREF}
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark xl:inline-flex"
            onClick={closeAll}
          >
            도입 상담
          </Link>
          <Link
            href={CONSULTATION_HREF}
            className="rounded-full bg-brand px-3.5 py-2 text-sm font-semibold text-white xl:hidden"
            onClick={closeAll}
          >
            도입 상담
          </Link>
          <button
            type="button"
            className="relative z-20 inline-flex size-11 shrink-0 cursor-pointer items-center justify-center text-navy touch-manipulation xl:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {activeItem ? (
        <div id={`mega-${activeItem.id}`} className="absolute inset-x-0 top-full hidden border-t border-slate-100 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)] xl:block">
          <div className="mx-auto flex max-w-7xl justify-center px-8 py-8">
            <div
              className={`grid w-max justify-center gap-x-16 gap-y-8 ${
                activeItem.groups.length >= 4
                  ? "grid-cols-4"
                  : activeItem.groups.length === 3
                    ? "grid-cols-3"
                    : activeItem.groups.length === 2
                      ? "grid-cols-2"
                      : "grid-cols-1"
              }`}
            >
              {activeItem.groups.map((group) => (
                <div key={group.title}>
                  <p className="text-xs font-normal tracking-[-0.04em] text-[#888888]">{group.title}</p>
                  <ul className="mt-4 space-y-1">
                    {group.links.map((link) => (
                      <li key={link.href + link.label}>
                        <MenuLink href={link.href} label={link.label} onClick={closeAll} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {mobileOpen ? (
        <div id="mobile-nav" className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-slate-200 bg-white xl:hidden">
          <nav className="px-5 py-2" aria-label="모바일 메뉴">
            {mainNav.map((item) => {
              const expanded = mobileSection === item.id;
              return (
                <div key={item.id} className="border-b border-slate-100">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left text-base font-medium tracking-[-0.04em] text-[#333333]"
                    aria-expanded={expanded}
                    onClick={() => setMobileSection(expanded ? null : item.id)}
                  >
                    {item.label}
                    <ChevronDown className={`size-4 text-[#333333] transition ${expanded ? "rotate-180" : ""}`} aria-hidden />
                  </button>
                  {expanded ? (
                    <div className="space-y-4 pb-4">
                      {item.groups.map((group) => (
                        <div key={group.title}>
                          <p className="text-xs font-normal tracking-[-0.04em] text-[#888888]">{group.title}</p>
                            <ul className="mt-2 space-y-1">
                            {group.links.map((link) => (
                              <li key={link.href + link.label}>
                                <MenuLink href={link.href} label={link.label} onClick={closeAll} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </nav>
          <div className="grid gap-3 px-5 py-5">
            <Link href={REMOTE_SUPPORT_HREF} className="inline-flex items-center gap-2 text-base font-medium tracking-[-0.04em] text-[#262626]" onClick={closeAll}>
              <Headset className="size-5 text-brand" aria-hidden />
              원격지원
            </Link>
            <Link href={CONSULTATION_HREF} className="inline-flex justify-center rounded-full bg-brand px-4 py-3 text-sm font-semibold text-white" onClick={closeAll}>
              무료 도입 상담 / 데모 신청
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
