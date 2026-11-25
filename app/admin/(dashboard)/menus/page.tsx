import { MenuVisibilityManager } from "@/components/admin/MenuVisibilityManager";
import { listNavMenuVisibility } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

export default async function AdminMenusPage() {
  return <MenuVisibilityManager initialItems={await listNavMenuVisibility()} />;
}
