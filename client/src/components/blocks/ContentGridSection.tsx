import { ContentGridSectionProps } from "@/types";
import { Button } from "@/components/ui/Button";
import { getThemeClasses } from "@/utils/theme";
import { StrapiImage } from "../Strapi-image";

export function ContentGridSection({
  theme,
  heading,
  description,
  contentCta,
  content,
}: Readonly<ContentGridSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container px-4 md:px-8 lg:px-12 py-14 lg:py-18">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="mb-4">{heading}</h2>
            {description && (
              <p className="text-base opacity-80">{description}</p>
            )}
          </div>

          {contentCta && (
            <Button {...contentCta} className="self-start md:self-auto">
              {contentCta.text}
            </Button>
          )}
        </div>

        <ul className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {content.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-4 group cursor-pointer"
            >
              <div className="overflow-hidden rounded-lg">
                <StrapiImage
                  src={item.image.url}
                  width={800}
                  height={600}
                  alt={item.image.alternativeText || ""}
                  className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-xl  text-neutral-400/90">{item.title}</h4>

                <p className="text-neutral-300/80 line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
