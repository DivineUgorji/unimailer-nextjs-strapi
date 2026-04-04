import { getContent } from "@/data/loaders";
import { ContentListClient } from "@/components/ContentListClient";
import { VariantKey, CardVariantKey } from "@/utils/contentlist-variants";

interface ContentListProps<T extends { documentId: string }> {
  headline: string;
  query?: string;
  path: string;
  featured?: boolean;
  variant?: VariantKey;
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
  itemLabel?: string;
  showItemCount?: boolean;
  component: React.ComponentType<T & { cardVariant?: CardVariantKey }>;
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
    items: data || [],
    pageCount: meta?.pagination?.pageCount ?? 1,
  };
}

export async function ContentList<T extends { documentId: string }>({
  headline,
  path,
  featured,
  variant = "light",
  showSearch,
  showPagination,
  query,
  page,
  itemLabel = "item",
  showItemCount = true,
  component: Component,
  headlineAlignment = "left",
}: Readonly<ContentListProps<T>>) {
  const { items, pageCount } = await loader(path, featured, query, page);

  const cards = items.map((item: T) => (
    <Component
      key={item.documentId}
      {...item}
      cardVariant={variant as CardVariantKey}
    />
  ));

  return (
    <ContentListClient
      headline={headline}
      articleCount={items.length}
      headlineAlignment={headlineAlignment}
      variant={variant}
      cards={cards}
      showSearch={showSearch}
      showPagination={showPagination}
      pageCount={pageCount}
      itemLabel={itemLabel}
      showItemCount={showItemCount}
    />
  );
}
