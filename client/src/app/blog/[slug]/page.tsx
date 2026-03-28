import type { ArticleProps, HeadingBlockProps } from "@/types";
import { notFound } from "next/navigation";
import { formatDate } from "@/utils/formatDate";
import { getContentBySlug } from "@/data/loaders";
import { StrapiImage } from "@/components/Strapi-image";
import { BlockRenderer } from "@/components/BlockRenderer";
import { TableOfContents } from "@/components/blocks/TableOfContents";

import { ContentList } from "@/components/ContentList";
import { BlogCard } from "@/components/BlogCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function loader(slug: string) {
  const response = await getContentBySlug(slug, "/api/articles");
  const article = response?.data?.[0];
  if (!article) throw notFound();
  return { article: article as ArticleProps };
}

export default async function SingleBlogRoute({ params }: PageProps) {
  const { slug } = await params;
  const { article } = await loader(slug);
  const { title, author, publishedAt, description, image, blocks } = article;

  // ── Extract only heading blocks for the TOC ──
  const headings = (blocks ?? []).filter(
    (block): block is HeadingBlockProps =>
      block.__component === "blocks.heading",
  );

  return (
    <section>
      <main className="min-h-screen bg-neutral-100">
        {/* ── Hero ── */}
        <div className="relative w-full min-h-[60vh] md:aspect-[16/7] overflow-hidden">
          {image && (
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || title}
              width={1440}
              height={630}
              className="w-full h-full object-cover"
            />
          )}

          {/* Overlay */}
          <div
            className="absolute inset-0 bg-linear-to-t
                   from-neutral-900/80 via-neutral-900/30
                   to-transparent"
          />

          {/* Content */}
          <div
            className="absolute bottom-0 left-0 right-0
                   container px-4 md:px-8 lg:px-16
                   pb-6 md:pb-12"
          >
            <div className="max-w-3xl flex flex-col gap-3 md:gap-4">
              {/* Label */}
              <div className="flex items-center gap-2.5">
                <span className="block w-7 h-px bg-orange-500" />
                <span
                  className="font-mono text-[0.62rem] font-medium
                         tracking-[0.2em] uppercase text-orange-500"
                >
                  Article
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-white leading-tight
                       text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                       wrap-break-word max-w-[90%] sm:max-w-full"
              >
                {title}
              </h1>

              {/* Meta */}
              <div className="flex items-center gap-4 flex-wrap">
                {author && (
                  <div className="flex items-center gap-2">
                    <div
                      className="w-6 h-6 rounded-full bg-orange-500/20
                             border border-orange-500/40 flex items-center
                             justify-center"
                    >
                      <span
                        className="font-mono text-[0.5rem] text-orange-400
                               font-bold uppercase"
                      >
                        {author.charAt(0)}
                      </span>
                    </div>

                    <span
                      className="font-mono text-[0.65rem] tracking-wide
                             text-white/70 uppercase"
                    >
                      {author}
                    </span>
                  </div>
                )}

                {publishedAt && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                    <span
                      className="font-mono text-[0.65rem] tracking-wide
                             text-white/60 uppercase"
                    >
                      {formatDate(publishedAt)}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Description ── */}
        {description && (
          <div className="container px-4 md:px-8 lg:px-16 pt-14">
            <div className="max-w-4xl">
              <p
                className="text-lg leading-relaxed text-neutral-800/70
                       pb-10 border-b border-neutral-200 font-medium"
              >
                {description}
              </p>
            </div>
          </div>
        )}

        {/* ── Article body ── */}
        {blocks && blocks.length > 0 && (
          <div className="container px-4 md:px-8 lg:px-16 py-14 md:py-20">
            {/* Table of contents */}
            <TableOfContents headings={headings} />

            {/* Content blocks */}
            <BlockRenderer blocks={blocks} />

            <ContentList
              headline="Featured Articles"
              path="/api/articles"
              component={BlogCard}
              featured={true}
            />
          </div>
        )}
      </main>
    </section>
  );
}
