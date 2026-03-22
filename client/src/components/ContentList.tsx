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
  component: React.ComponentType<
    ArticleProps & { cardVariant?: CardVariantKey }
  >;
  headlineAlignment?: "center" | "right" | "left";
}

async function loader(path: string, featured?: boolean) {
  const { data } = await getContent(path, featured);
  return { articles: (data as ArticleProps[]) || [] };
}

export async function ContentList({
  headline,
  path,
  featured,
  variant = "light",
  component: Component,
  headlineAlignment = "left",
}: Readonly<ContentListProps>) {
  const { articles } = await loader(path, featured);

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
    />
  );
}
