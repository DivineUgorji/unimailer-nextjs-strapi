import { ArticleProps, CardVariantKey } from "@/types";
import { Card } from "@/components/Card";

export function BlogCard(
  props: Readonly<ArticleProps & { cardVariant?: CardVariantKey }>,
) {
  return <Card {...props} basePath="blog" />;
}
