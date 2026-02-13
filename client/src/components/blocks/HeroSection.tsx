import { StrapiImage } from "@/components/Strapi-image";
import type { HeroSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";

export function HeroSection({
  theme,
  heading,
  image,
  description,
}: Readonly<HeroSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    // <section className="bg-neutral-500">
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container px-4 sm:px-8 lg:px-33 py-14 sm:py-18">
        <div className="grid grid-cols-2 gap-5.5">
          <div className="">
            <h1 className="text-neutral-950">{heading}</h1>
            <p className="text-neutral-800 mt-4">{description}</p>
          </div>

          <div className="">
            {image && (
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || "No alternative text provided"}
                width={572}
                height={472}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
