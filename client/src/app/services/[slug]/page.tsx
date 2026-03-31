import type { ServiceProps } from "@/types";
import { ContentList } from "@/components/ContentList";
import { getContentBySlug } from "@/data/loaders";
import { notFound } from "next/navigation";
import { ServiceSignupForm } from "@/components/ServiceSignupForm";
import { ServiceCard } from "@/components/ServiceCard";

async function loader(slug: string) {
  const { data } = await getContentBySlug(slug, "/api/services");
  const service = data[0];
  if (!service) throw notFound();
  return { service: service as ServiceProps, blocks: service?.blocks };
}

interface ParamsProps {
  params: Promise<{ slug: string }>;
}

// const ServiceCard = (props: Readonly<CardProps>) => (
//   <Card {...props} basePath="services" />
// );

export default async function SingleServiceRoute({ params }: ParamsProps) {
  const slug = (await params).slug;
  const { service, blocks } = await loader(slug);

  return (
    <div className="container">
      <div className="event-page">
        <ServiceSignupForm
          blocks={blocks}
          serviceId={service.documentId}
          startDate={service.startDate}
          price={service.price}
          image={{
            url: service?.image?.url,
            alt: service?.image?.alternativeText || "Event image",
          }}
        />
      </div>
      {/* <ContentList
        headline="Check out our services"
        path="/api/services"
        component={ServiceCard}
        featured={true}
      /> */}

      <ContentList
        headline="Check out the services we offer"
        path="/api/services"
        showPagination
        component={ServiceCard}
        variant="services"
        itemLabel="service"
        showItemCount={true}
      />
    </div>
  );
}
