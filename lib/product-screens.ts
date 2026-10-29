import inventoryScreens from "@/data/product-screens/inventory.json";
import { listPublishedScreensByPageKey } from "@/lib/admin-data";
import { isDatabaseConfigured } from "@/lib/db";

export type ProductScreen = {
  id: string;
  title: string;
  description: string;
  imageUrl: string | null;
  sortOrder: number;
};

const fallbackByProduct: Record<string, ProductScreen[]> = {
  inventory: inventoryScreens,
};

function pageKeyForProduct(product: string) {
  return `products/${product}`;
}

export async function getProductScreens(product: string): Promise<ProductScreen[]> {
  if (isDatabaseConfigured()) {
    try {
      const rows = await listPublishedScreensByPageKey(pageKeyForProduct(product));
      if (rows.length > 0) return rows;
    } catch (error) {
      console.error("[getProductScreens]", error);
    }
  }
  return [...(fallbackByProduct[product] ?? [])].sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function getScreensForPageKey(pageKey: string): Promise<ProductScreen[]> {
  if (isDatabaseConfigured()) {
    try {
      const rows = await listPublishedScreensByPageKey(pageKey);
      if (rows.length > 0) return rows;
    } catch (error) {
      console.error("[getScreensForPageKey]", error);
    }
  }
  if (pageKey === "products/inventory") {
    return [...inventoryScreens].sort((a, b) => a.sortOrder - b.sortOrder);
  }
  return [];
}
