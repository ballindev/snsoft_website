"use client";

import { usePathname } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { NavItem } from "@/lib/site";

export function SiteChrome({
  children,
  nav,
  showRemoteSupport = true,
  showConsultationCta = true,
}: {
  children: React.ReactNode;
  nav: NavItem[];
  showRemoteSupport?: boolean;
  showConsultationCta?: boolean;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <>
      <Header
        nav={nav}
        showRemoteSupport={showRemoteSupport}
        showConsultationCta={showConsultationCta}
      />
      {children}
      <Footer nav={nav} showRemoteSupport={showRemoteSupport} />
    </>
  );
}
