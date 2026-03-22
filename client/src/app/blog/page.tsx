import { getPageBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { BlockRenderer } from "@/components/BlockRenderer";
import { ContentList } from "@/components/ContentList";
import { BlogCard } from "@/components/BlogCard";

async function loader(slug: string) {
  const res = await getPageBySlug(slug);
  console.log("Slug received:", slug);
  const page = res?.data?.[0];

  if (!page) notFound();

  return {
    blocks: page.blocks ?? [],
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default async function BlogRoute({ params }: PageProps) {
  // const { slug } = await params;
  const { blocks } = await loader("blog");

  return (
    <div className="blog-page">
      <BlockRenderer blocks={blocks} />
      <ContentList
        headline="Check out our latest articles"
        path="/api/articles"
        component={BlogCard}
      />
    </div>
  );
}
