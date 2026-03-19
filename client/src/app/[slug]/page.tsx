import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DynamicPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const { blocks } = await loader(slug);

  return <BlockRenderer blocks={blocks} />;
}

async function loader(slug: string) {
  const res = await getPageBySlug(slug);
  console.log("Slug received:", slug);
  const page = res?.data?.[0];

  if (!page) notFound();

  return {
    blocks: page.blocks ?? [],
  };
}
