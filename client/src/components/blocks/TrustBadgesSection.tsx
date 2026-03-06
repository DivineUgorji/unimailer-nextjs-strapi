import { StrapiImage } from "../Strapi-image";
import { getThemeClasses } from "@/utils/theme";
import type { TrustedBadgesSectionProps } from "@/types";

export function TrustBadgesSection({
  heading,
  theme,
  images,
}: Readonly<TrustedBadgesSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    // <section className="bg-neutral-50">
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container px-4 sm:psx-8 lg:px-33 py-12 sm:py-18">
        <h6 className="text-center">{heading}</h6>
        <div
          className="flex overflow-hidden mt-9 before:content-[''] 
        after:content-[''] before:absolute after:absolute before:h-full 
        after:h-full before:w-5 after:w-5 relative
        before:left-0 after:right-0 before:top-0 after:top-0 before:z-10 before:bg-[linear-gradient(to_right,#fff,rgba(0,0,0,0))] after:bg-[linear-gradient(to_left,#fff,rgba(0,0,0,0))]"
        >
          <ul className="flex gap-16 flex-none pr-16">
            {images.map((image) => (
              <li key={image.id} className="">
                <StrapiImage
                  src={image.url}
                  alt={image.alternativeText || "No alternative text provided"}
                  width={152}
                  height={48}
                  className="flex-none h-8 md:h-10 lg:h-12 w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-18 h-px w-full bg-[#35323E]/15" />
      </div>
    </section>
  );
}
