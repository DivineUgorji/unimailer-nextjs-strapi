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
        <div>
          <StrapiImage
            src={image.url}
            alt={image.alternativeText || "No alternative text provided"}
            width={70}
            height={70}
            style={{
              objectFit: "contain",
              width: "fit-content",
              height: "auto",
            }}
          />{" "}
        </div>
        <div>
          <h2 className="text-neutral-900 max-w-[24ch] mx-auto text-center mb-10 ">
            {heading}
          </h2>
          <p>{description}</p>
          <ul>
            {stats.map((stat) => (
              <li key={stat.id}>
                <h4>{stat.value}</h4>
                <p>{stat.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
