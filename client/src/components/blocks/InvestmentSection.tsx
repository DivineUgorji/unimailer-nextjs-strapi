import { StrapiImage } from "@/components/Strapi-image";
import { Button } from "../ui/Button";
import type { InvestmentSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
export function InvestmentSection({
  theme,
  heading,
  description,
  image,
  investmentCta,
}: Readonly<InvestmentSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container px-4 md:px-8 lg:px-33 py-14 md:py-18">
        {/* Text Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center">
          <div className="">
            <h2 className="mb-4">{heading}</h2>
            <p className="text-lg mb-8">{description}</p>
            <Button {...investmentCta}>{investmentCta.text}</Button>
          </div>

          <div>
            {/* Image */}
            {image?.url && (
              <StrapiImage
                src={image.url}
                alt={image.alternativeText || "Investment Image"}
                width={500}
                height={317}
                style={{ objectFit: "cover", width: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
        <div className="mt-18 w-full h-0.5 bg-[repeating-linear-gradient(to_right,#35323e_0_2px,transparent_5px_20px)] opacity-50"></div>
      </div>
    </section>
  );
}
