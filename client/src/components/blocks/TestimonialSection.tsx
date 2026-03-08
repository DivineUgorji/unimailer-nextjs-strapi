import { TestimonialsSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import { StrapiImage } from "@/components/Strapi-image";
import { Button } from "../ui/Button";

export function TestimonialSection({
  heading,
  image,
  theme,
  testimonial,
  name,
  role,
  TestimonialCta,
  floatingIcon,
}: Readonly<TestimonialsSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section className={`${themeClasses.background} relative`}>
      <div className="container px-4 md:px-8 lg:px-33 pb-12 sm:pb-18">
        <div className="mb-18 h-px w-full bg-neutral-400/15" />
        <div className="absolute z-10 top-10 left-0 pointer-events-none">
          {floatingIcon?.showIcon && floatingIcon.image && (
            <StrapiImage
              src={floatingIcon.image.url}
              alt={floatingIcon.image.alternativeText || "Floating Icon"}
              width={96}
              height={96}
              className="opacity-20 object-contain"
            />
          )}
        </div>
        <h2 className="text-neutral-400 text-center mb-12">{heading}</h2>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-1 gap-8">
          <div className="flex-2">
            <div className="relative">
              {/* <span className="absolute -top-8 -left-6 text-[160px] opacity-10 font-serif leading-none select-none pointer-events-none">
                “
              </span> */}
              <span className="absolute -top-4 left-0 text-[80px] md:text-[160px] md:-top-8 md:-left-6 opacity-10 font-serif leading-none select-none pointer-events-none">
                “
              </span>
              <blockquote className="relative text-neutral-300/80 text-base md:text-lg leading-relaxed">
                {/* Opening quote */}

                {testimonial}

                {/* Closing quote */}
              </blockquote>
              {/* <span className="absolute -bottom-30 right-32 text-[160px] opacity-10 font-serif leading-none select-none pointer-events-none">
                ”
              </span> */}
              <span className="absolute -bottom-14 right-33 text-[80px] md:text-[160px] md:-bottom-30 md:right-32 opacity-10 font-serif leading-none select-none pointer-events-none">
                ”
              </span>
            </div>
            <h4 className="text-neutral-400/90 mt-8">{name}</h4>
            <p className="text-neutral-300/80 mt-2 mb-8">{role}</p>
            <Button {...TestimonialCta} className="mt-auto" />
          </div>

          <div className="flex-1 flex flex-col items-center sm:items-end">
            {image && (
              <StrapiImage
                src={image.url}
                width={300}
                height={346}
                alt={image.alternativeText || "No alternative text"}
                className="border-4 border-neutral-400 rounded md:ml-auto"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
