import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Subpage } from "@/components/layout/Subpage";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { FaqSupport } from "@/components/sections/FaqSupport";
import { InventoryProduct } from "@/components/sections/InventoryProduct";
import { ProductScreens } from "@/components/sections/ProductScreens";
import { getPublicFaqs } from "@/lib/faqs";
import { getProductScreens, getScreensForPageKey } from "@/lib/product-screens";
import { getPage, getStaticSlugParams } from "@/lib/site";

type Params = { slug: string[] };

export const dynamicParams = false;
export const revalidate = 60;

export function generateStaticParams() {
  return getStaticSlugParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) return { title: "페이지를 찾을 수 없습니다" };
  return { title: page.title, description: page.description };
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const page = getPage(slug);
  if (!page) notFound();
  if (page.href === "/about") return <CompanyOverview />;
  if (page.href === "/products/inventory") {
    const screens = await getProductScreens("inventory");
    return <InventoryProduct screens={screens} />;
  }

  if (page.href === "/support/faq") {
    const faqs = await getPublicFaqs();
    return <FaqSupport page={page} faqs={faqs} />;
  }

  const pageKey = page.href.replace(/^\//, "");
  const screens =
    pageKey.startsWith("products/") || pageKey.startsWith("industries/")
      ? await getScreensForPageKey(pageKey)
      : [];

  if (screens.length > 0) {
    return (
      <>
        <Subpage page={page} />
        <ProductScreens screens={screens} />
      </>
    );
  }

  return <Subpage page={page} />;
}
