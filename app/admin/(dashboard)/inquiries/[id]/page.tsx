import { notFound } from "next/navigation";
import { InquiryDetail } from "@/components/admin/InquiryDetail";
import { getInquiry } from "@/lib/admin-data";

export const dynamic = "force-dynamic";

export default async function AdminInquiryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const inquiry = await getInquiry(id);
  if (!inquiry) notFound();
  return <InquiryDetail initial={inquiry} />;
}
