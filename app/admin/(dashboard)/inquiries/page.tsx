import { InquiryList } from "@/components/admin/InquiryList";
import { listInquiries } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  return <InquiryList initialItems={await listInquiries()} />;
}
