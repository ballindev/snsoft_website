import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Subpage } from "@/components/layout/Subpage";
import { getPage, getStaticSlugParams } from "@/lib/site";

type Params = { slug: string[] };

export const dynamicParams = false;

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
  return <Subpage page={page} />;
}
