import { StrapiImage } from "../Strapi-image";
import { getThemeClasses } from "@/utils/theme";
import { ScrollingRow } from "./ScrollingRow";
import type { ShowcaseSectionProps } from "@/types";
import { ScrollingProvider } from "../providers/ScrollingContext";

export function ShowcaseSection({
  heading,
  image,
  theme,
  scrollingCards,
}: Readonly<ShowcaseSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container py-12 sm:py-18 overflow-hidden">
        <div className="px-4 sm:px-8 lg:px-33">
          {image && (
            <div className="flex justify-center mb-14">
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || ""}
                width={800}
                height={400}
              />
            </div>
          )}

          <h2 className="text-center mb-14">{heading}</h2>
        </div>

        <div
          className="relative mt-9 overflow-hidden
          before:absolute before:left-0 before:top-0 before:h-full before:w-10
          before:z-10 before:bg-[linear-gradient(to_right,#1e1b29,rgba(0,0,0,0))]
          after:absolute after:right-0 after:top-0 after:h-full after:w-10
          after:bg-[linear-gradient(to_left,#1e1b29,rgba(0,0,0,0))]"
        >
          <ScrollingProvider>
            <div className="space-y-8">
              {scrollingCards.map((row) => (
                <ScrollingRow
                  key={row.id}
                  images={row.images}
                  direction={row.direction as "left" | "right"}
                  speed={row.speed}
                />
              ))}
            </div>
          </ScrollingProvider>
        </div>
      </div>
    </section>
  );
}

// import { StrapiImage } from "../Strapi-image";
// import { getThemeClasses } from "@/utils/theme";
// import { ScrollingRow } from "./ScrollingRow";
// import { ShowcaseSectionProps } from "@/types";

// export function ShowcaseSection({
//   heading,
//   image,
//   theme,
//   scrollingCards,
// }: Readonly<ShowcaseSectionProps>) {
//   const themeClasses = getThemeClasses(theme?.variant);

//   return (
//     <section className={`${themeClasses.background} ${themeClasses.text}`}>
//       <div className="container py-12 sm:py-18 overflow-hidden">
//         <div className="px-4 sm:px-8 lg:px-33">
//           {image && (
//             <div className="flex justify-center mb-14">
//               <StrapiImage
//                 src={image.url}
//                 alt={image.alternativeText || ""}
//                 width={800}
//                 height={400}
//               />
//             </div>
//           )}

//           <h2 className="text-center mb-14">{heading}</h2>
//         </div>

//         <div className="relative overflow-hidden">
//           {/* gradient fade edges */}
//           <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-[#1e1b29] to-transparent" />
//           <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-[#1e1b29] to-transparent" />

//           <div className="space-y-8">
//             {scrollingCards.map((row) => (
//               <ScrollingRow
//                 key={row.id}
//                 images={row.images}
//                 direction={row.direction}
//                 speed={row.speed}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
