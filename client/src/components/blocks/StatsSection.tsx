import { StrapiImage } from "@/components/Strapi-image";
import { StatsSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";

export function StatsSection({
  heading,
  theme,
  description,
  image,
  stats,
}: Readonly<StatsSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    <section className={`${themeClasses.background}`}>
      <div className="container px-4 sm:px-8 lg:px-33 py-14 sm:py-18">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4">
          <div className="flex justify-center md:justify-start">
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || "No alternative text provided"}
              width={70}
              height={70}
              className="w-full"
              style={{
                objectFit: "contain",
                width: "fit-content",
                height: "auto",
              }}
            />{" "}
          </div>
          <div>
            <h2 className="text-neutral-900 mb-10 ">{heading}</h2>
            <p>{description}</p>
            <ul className="flex flex-col md:flex-row gap-10 mt-8">
              {stats.map((stat) => (
                <li key={stat.id}>
                  <h4 className="font-semibold text-[38px] leading-tight text-accent-400">
                    {stat.subheading}
                  </h4>
                  <p>{stat.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
