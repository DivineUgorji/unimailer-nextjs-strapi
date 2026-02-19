import { StrapiImage } from "../Strapi-image";
import { getThemeClasses } from "@/utils/theme";
import type { TrustedBadgesSectionProps } from "@/types";

export function TrustBadgesSection({
  theme,
  images,
}: Readonly<TrustedBadgesSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    // <section className="bg-neutral-50">
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container px-4 sm:psx-8 lg:px-33 py-12 sm:py-18">
        <ul className="flex gap-10 justify-center">
          {images.map((image) => (
            <li key={image.id}>
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || "No alternative text provided"}
                height={48}
                width={130}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            </li>
          ))}
        </ul>
        <div className="mt-18 h-px w-full bg-[#35323E]/15" />
      </div>
    </section>
  );
}
