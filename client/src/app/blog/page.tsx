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
  searchParams: Promise<{ page?: string; query?: string }>;
}

export default async function BlogRoute({ searchParams }: PageProps) {
  // const { slug } = await params;
  const { page, query } = await searchParams;
  const { blocks } = await loader("blog");

  return (
    <div className="blog-page">
      <BlockRenderer blocks={blocks} />
      <ContentList
        headline="Check out our latest articles"
        path="/api/articles"
        component={BlogCard}
        showSearch
        query={query}
        showPagination
        page={page}
      />
    </div>
  );
}
