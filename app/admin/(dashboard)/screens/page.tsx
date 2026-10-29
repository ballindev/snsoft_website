import { ScreenManager } from "@/components/admin/ScreenManager";
import { listScreenSlides } from "@/lib/admin-data";
import { getScreenPageOptions } from "@/lib/admin-sample";

export const dynamic = "force-dynamic";

export default async function AdminScreensPage() {
  return <ScreenManager initialItems={await listScreenSlides()} pageOptions={getScreenPageOptions()} />;
}
