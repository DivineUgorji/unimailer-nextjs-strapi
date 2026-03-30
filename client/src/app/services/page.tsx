//////////////////////////////////////////
import { ContentList } from "@/components/ContentList";
import { ServiceCard } from "@/components/ServiceCard";
import { ServiceSignupForm } from "@/components/ServiceSignupForm";

import { getContentBySlug } from "@/data/loaders";
import { ServiceProps } from "@/types";
import { notFound } from "next/navigation";

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug, "/api/services");
  const service = data[0];
  if (!service) throw notFound();
  return { service: service as ServiceProps, blocks: service?.blocks };
}

interface ParamsProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string; query?: string }>;
}

export default async function AllServicesRoute({
  params,
  searchParams,
}: ParamsProps) {
  // const slug = (await params).slug;
  const { query, page } = await searchParams;
  const { service, blocks } = await loader("email-strategy-and-performance");

  return (
    <div className="container">
      <ServiceSignupForm blocks={blocks} serviceId={service.documentId} />

      <ContentList
        headline="Check out the services we offer"
        path="/api/services"
        query={query}
        page={page}
        // showSearch
        showPagination
        component={ServiceCard}
        variant="services"
        itemLabel="service"
        showItemCount={true}
      />
    </div>
  );
}
