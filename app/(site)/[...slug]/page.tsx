import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Subpage } from "@/components/layout/Subpage";
import { CompanyOverview } from "@/components/sections/CompanyOverview";
import { LocationPage } from "@/components/sections/LocationPage";
import { CustomPricing } from "@/components/sections/CustomPricing";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FaqSupport } from "@/components/sections/FaqSupport";
import { AccountingProduct } from "@/components/sections/AccountingProduct";
import { BankingProduct } from "@/components/sections/BankingProduct";
import { BomProduct } from "@/components/sections/BomProduct";
import { BuildingProduct } from "@/components/sections/BuildingProduct";
import { CrmProduct } from "@/components/sections/CrmProduct";
import { DentalProduct } from "@/components/sections/DentalProduct";
import { ETaxProduct } from "@/components/sections/ETaxProduct";
import { FieldSalesProduct } from "@/components/sections/FieldSalesProduct";
import { FoodServiceProduct } from "@/components/sections/FoodServiceProduct";
import { FormsOrder } from "@/components/sections/FormsOrder";
import { InventoryProduct } from "@/components/sections/InventoryProduct";
import { MeatProcessingProduct } from "@/components/sections/MeatProcessingProduct";
import { MedicalDeviceProduct } from "@/components/sections/MedicalDeviceProduct";
import { OrdersProduct } from "@/components/sections/OrdersProduct";
import { ProductScreens } from "@/components/sections/ProductScreens";
import { StoreProduct } from "@/components/sections/StoreProduct";
import { TireProduct } from "@/components/sections/TireProduct";
import { VehicleProduct } from "@/components/sections/VehicleProduct";
import { getFormOrderGroups } from "@/lib/form-orders-server";
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
  if (page.href === "/about/location") return <LocationPage />;
  if (page.href === "/pricing/custom") return <CustomPricing />;
  if (page.href === "/pricing/cases") return <CaseStudies />;
  if (page.href === "/products/inventory") {
    const screens = await getProductScreens("inventory");
    return <InventoryProduct screens={screens} />;
  }
  if (page.href === "/products/orders") {
    const screens = await getScreensForPageKey("products/orders");
    return <OrdersProduct screens={screens} />;
  }
  if (page.href === "/products/field-sales") {
    const screens = await getScreensForPageKey("products/field-sales");
    return <FieldSalesProduct screens={screens} />;
  }
  if (page.href === "/products/accounting") {
    const screens = await getScreensForPageKey("products/accounting");
    return <AccountingProduct screens={screens} />;
  }
  if (page.href === "/products/e-tax") {
    const screens = await getScreensForPageKey("products/e-tax");
    return <ETaxProduct screens={screens} />;
  }
  if (page.href === "/products/banking") {
    const screens = await getScreensForPageKey("products/banking");
    return <BankingProduct screens={screens} />;
  }
  if (page.href === "/products/bom") {
    const screens = await getScreensForPageKey("products/bom");
    return <BomProduct screens={screens} />;
  }
  if (page.href === "/products/crm") {
    const screens = await getScreensForPageKey("products/crm");
    return <CrmProduct screens={screens} />;
  }
  if (page.href === "/industries/meat-processing") {
    const screens = await getScreensForPageKey("industries/meat-processing");
    return <MeatProcessingProduct screens={screens} />;
  }
  if (page.href === "/industries/medical-device") {
    const screens = await getScreensForPageKey("industries/medical-device");
    return <MedicalDeviceProduct screens={screens} />;
  }
  if (page.href === "/industries/dental") {
    const screens = await getScreensForPageKey("industries/dental");
    return <DentalProduct screens={screens} />;
  }
  if (page.href === "/industries/food-service") {
    const screens = await getScreensForPageKey("industries/food-service");
    return <FoodServiceProduct screens={screens} />;
  }
  if (page.href === "/industries/store") {
    const screens = await getScreensForPageKey("industries/store");
    return <StoreProduct screens={screens} />;
  }
  if (page.href === "/industries/tire") {
    const screens = await getScreensForPageKey("industries/tire");
    return <TireProduct screens={screens} />;
  }
  if (page.href === "/industries/vehicle") {
    const screens = await getScreensForPageKey("industries/vehicle");
    return <VehicleProduct screens={screens} />;
  }
  if (page.href === "/industries/building") {
    const screens = await getScreensForPageKey("industries/building");
    return <BuildingProduct screens={screens} />;
  }

  if (page.href === "/support/faq") {
    const faqs = await getPublicFaqs();
    return <FaqSupport page={page} faqs={faqs} />;
  }
  if (page.href === "/support/forms") {
    return <FormsOrder groups={await getFormOrderGroups()} />;
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
