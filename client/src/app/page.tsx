import { BlockRenderer } from "@/components/BlockRenderer";

import getHomePage from "@/data/loaders";
import { notFound } from "next/navigation";

// export async function loader() {
//   const data = await getHomePage();
//   if (!data) notFound();
//   console.log(data);

//   return { ...data.data };
// }

// export default async function Home() {
//   const data = await loader();
//   const blocks = data?.blocks || [];
//   console.log(data);
//   return (
//     <div>
//       {/* <h1>{data.title}</h1>
//       <p>{data.description}</p> */}
//       {/* <NavigationSection {...blocks[0]} />
//       <HeroSection {...blocks[1]} />
//       <TrustBadgesSection {...blocks[2]} /> */}

//       <BlockRenderer blocks={blocks} />
//     </div>
//   );
// }

export async function loader() {
  const data = await getHomePage();
  if (!data) notFound();
  console.log(data.data.blocks);

  return { ...data.data };
}

export default async function Home() {
  const data = await loader();
  const blocks = data?.blocks || [];
  return <BlockRenderer blocks={blocks} />;
}
