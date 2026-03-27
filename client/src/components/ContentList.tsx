import { ArticleProps, CardVariantKey } from "@/types";
import { getContent } from "@/data/loaders";
import { ContentListClient } from "@/components/ContentListClient";
import { VariantKey } from "@/utils/contentlist-variants";

interface ContentListProps {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  variant?: VariantKey;
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
  component: React.ComponentType<
    ArticleProps & { cardVariant?: CardVariantKey }
  >;
  headlineAlignment?: "center" | "right" | "left";
}

async function loader(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string,
) {
  const { data, meta } = await getContent(path, featured, query, page);
  return {
    articles: (data as ArticleProps[]) || [],
    pageCount: meta?.pagination?.pageCount || 1,
  };
}

export async function ContentList({
  headline,
  path,
  featured,
  variant = "light",
  showSearch,
  query,
  page,
  showPagination,
  component: Component,
  headlineAlignment = "left",
}: Readonly<ContentListProps>) {
  const { articles, pageCount } = await loader(path, featured, query, page);

  const cardVariantMap: Record<VariantKey, CardVariantKey> = {
    light: "light",
    dark: "dark",
    events: "events",
  };

  const cards = articles.map((article) => (
    <Component
      key={article.documentId}
      {...article}
      cardVariant={cardVariantMap[variant]}
    />
  ));

  return (
    <ContentListClient
      headline={headline}
      articleCount={articles.length}
      headlineAlignment={headlineAlignment}
      variant={variant}
      cards={cards}
      showSearch={showSearch}
      showPagination={showPagination}
      pageCount={pageCount}
    />
  );
}
