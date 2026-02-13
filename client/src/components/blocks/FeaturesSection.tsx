import { getThemeClasses } from "@/utils/theme";
import { StrapiImage } from "@/components/Strapi-image";
import { FeaturesSectionProps } from "@/types";

export function FeaturesSection({
  heading,
  theme,
  features,
}: Readonly<FeaturesSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    <section className={`${themeClasses.background}`}>
      <div className="container px-4 sm:px-8 lg:px-33 py-14 sm:py-18">
        <h2 className="text-neutral-900 max-w-[24ch] mx-auto text-center mb-10 ">
          {heading}
        </h2>
        <ul className="flex flex-col md:flex-row gap-2 justify-center">
          {features.map((feature) => (
            <li
              key={feature.id}
              className="flex flex-col items-center flex-wrap text-center flex-1 w-full"
            >
              <StrapiImage
                src={feature.image.url}
                alt={
                  feature.image.alternativeText ||
                  "No alternative text provided"
                }
                width={70}
                height={70}
                style={{
                  objectFit: "contain",
                  width: "fit-content",
                  height: "auto",
                }}
              />
              <h4 className="text-neutral-900 mt-4">{feature.title}</h4>
              <p className="text-neutral-800 mt-2">{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
