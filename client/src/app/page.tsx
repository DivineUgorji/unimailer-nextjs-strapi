import { BlockRenderer } from "@/components/BlockRenderer";

import getHomePage from "@/data/loaders";
import { notFound } from "next/navigation";
import { ContentList } from "@/components/ContentList";
import { BlogCard } from "@/components/BlogCard";

export async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console.log(data.data.blocks);

  return { ...data.data };
}

export default async function HomeRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return (
    <div>
      <BlockRenderer blocks={blocks} />
      <div className="container">
        <ContentList
          headline="Check out our featured articles"
          path="/api/articles"
          component={BlogCard}
          featured
          variant="dark"
        />
      </div>
    </div>
  );
}
