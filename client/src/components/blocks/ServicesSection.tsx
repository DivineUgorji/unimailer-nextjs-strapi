import { ServicesSectionProps } from "@/types";
import { StrapiImage } from "../Strapi-image";
import { getThemeClasses } from "@/utils/theme";
import { ArrowRight } from "lucide-react";

export function ServicesSection({
  theme,
  heading,
  features,
  floatingIcon,
  link,
}: Readonly<ServicesSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    <section
      className={`${themeClasses.background} ${themeClasses.text}  relative`}
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-33 py-6">
        <h2 className="text-center mb-12">{heading}</h2>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8 items-stretch">
          {features.map((feature) => (
            <li key={feature.id} className="flex flex-col h-full">
              <div className="flex items-center gap-2 mb-4">
                {feature.image && (
                  <StrapiImage
                    src={feature.image.url}
                    alt={feature.image.alternativeText || "Feature Image"}
                    width={24}
                    height={24}
                    className="w-4 h-4"
                    style={{
                      objectFit: "contain",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                )}
                <h3 className="text-xl">{feature.title}</h3>
              </div>
              <p className="text-neutral-200">{feature.description}</p>
              <a
                href={link?.href || "#"}
                className="mt-auto pt-4 flex items-center gap-1 text-neutral-400 hover:text-accent-400 hover:underline"
              >
                <span>{link?.text || "Learn more"}</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1 " />
              </a>
            </li>
          ))}
        </ul>
        <div className="absolute">
          {floatingIcon?.showIcon && floatingIcon.image && (
            <StrapiImage
              src={floatingIcon.image.url}
              alt={floatingIcon.image.alternativeText || "Floating Icon"}
              width={32}
              height={32}
              className="absolute bottom-4 right-4 w-16 h-16 object-cover rounded-full shadow-lg"
            />
          )}
        </div>
      </div>
    </section>
  );
}
