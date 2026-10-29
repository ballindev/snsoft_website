import { FaqManager } from "@/components/admin/FaqManager";
import { listFaqs } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

export default async function AdminFaqsPage() {
  return <FaqManager initialItems={await listFaqs()} />;
}
