import { Button } from "../ui/Button";
import { StrapiImage } from "@/components/Strapi-image";
import type { TeamSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";

export function TeamSection({
  heading,
  theme,
  teamCard,
  teamSectionCta,
}: Readonly<TeamSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    <section className={`${themeClasses.background} ${themeClasses.text}`}>
      <div className="container px-4 md:px-8 lg:px-33 py-12 md:py-14">
        <div className="flex items-center justify-between mb-12 gap-4">
          <h2 className="max-w-[26ch]">{heading}</h2>
          {teamSectionCta && (
            <Button {...teamSectionCta}>{teamSectionCta.text}</Button>
          )}
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 rounded">
          {teamCard?.map((card) => (
            <li key={card.id} className="relative group overflow-hidden ">
              {card.image && (
                <StrapiImage
                  src={card.image.url}
                  alt={card.image.alternativeText || "Team member image"}
                  width={300}
                  height={335}
                  className="w-full h-full object-cover "
                />
              )}

              <div className="absolute inset-0 bg-neutral-900/30 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-neutral-500 max-w-62.5 p-4 rounded">
                  <h6 className="text-neutral-900">{card.title}</h6>
                  <p className="text-neutral-800">{card.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
