import { AccountManager } from "@/components/admin/AccountManager";
import { listAccounts } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

export default async function AdminAccountsPage() {
  return <AccountManager initialItems={await listAccounts()} />;
}
