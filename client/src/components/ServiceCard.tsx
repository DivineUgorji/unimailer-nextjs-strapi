import { ServiceProps } from "@/types";
import { Card } from "@/components/Card";
import { CardVariantKey } from "@/utils/contentlist-variants";

export function ServiceCard(
  props: Readonly<ServiceProps & { cardVariant?: CardVariantKey }>,
) {
  return <Card {...props} basePath="services" ctaLabel="View service" />;
}
