"use client";

import { ScrollBannerSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import { StrapiImage } from "../Strapi-image";

export function ScrollBannerSection({
  theme,
  speed = 50,
  items,
}: Readonly<ScrollBannerSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  const scrollItems = [...items, ...items, ...items, ...items];

  return (
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container py-6">
        <div
          className="
            relative overflow-hidden
            before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-full before:w-20 before:z-10
            before:bg-linear-to-r before:from-neutral-500 before:to-transparent
            after:pointer-events-none after:absolute after:right-0 after:top-0 after:h-full after:w-20 after:z-10
            after:bg-linear-to-l after:from-neutral-500 after:to-transparent
          "
        >
          <ul
            className="marquee-track flex items-center gap-4 md:gap-6 w-max"
            style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
          >
            {scrollItems.map((item, i) => (
              <li
                key={`${item.id}-${i}`}
                className="flex items-center gap-4 md:gap-6 flex-none"
              >
                {item.image && (
                  <StrapiImage
                    src={item.image.url}
                    width={42}
                    height={42}
                    alt={item.image.alternativeText || ""}
                    className="flex-none"
                  />
                )}
                <p className="font-generalsans font-semibold text-[24px] md:text-[30px] lg:text-[36px] leading-tight whitespace-nowrap">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
