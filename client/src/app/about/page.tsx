import { BlockRenderer } from "@/components/BlockRenderer";
import { getAboutPage } from "@/data/loaders";
import { notFound } from "next/navigation";

async function loader() {
  const response = await getAboutPage();
  if (!response?.data) notFound();
  console.log("Full response:", JSON.stringify(response, null, 2));
  return response.data;
}

export default async function AboutRoute() {
  const data = await loader();
  const blocks = data?.blocks || [];

  console.log("Blocks reaching renderer:", blocks);
  return (
    <div>
      <BlockRenderer blocks={blocks} />
    </div>
  );
}
