import { listPublishedFaqs } from "@/lib/admin-data";
import { isDatabaseConfigured } from "@/lib/db";
import { getPage, type Faq } from "@/lib/site";

const fallbackFaqs: Faq[] = getPage(["support", "faq"])?.faqs ?? [];

export async function getPublicFaqs(): Promise<Faq[]> {
  if (isDatabaseConfigured()) {
    try {
      const rows = await listPublishedFaqs();
      if (rows.length > 0) return rows;
    } catch (error) {
      console.error("[getPublicFaqs]", error);
    }
  }
  return fallbackFaqs;
}
