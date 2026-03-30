import Link from "next/link";
import { StrapiImage } from "@/components/Strapi-image";
import { formatDate } from "@/utils/formatDate";
import { CardProps } from "@/types";
import { variants } from "@/utils/contentlist-variants";

export function Card({
  heading,
  description,
  slug,
  image,
  price,
  createdAt,
  startDate,
  basePath,
  cardVariant = "light",
  ctaLabel = "Read more", // ← new, customisable per usage
}: Readonly<CardProps & { ctaLabel?: string }>) {
  const v = variants[cardVariant ?? "light"];

  return (
    <Link
      href={`/${basePath}/${slug}`}
      className={`group relative flex flex-col rounded-2xl overflow-hidden
                 h-full border transition-all duration-500 ${v.cardWrapper}`}
    >
      {/* ── Image ── */}
      <div className="relative overflow-hidden aspect-16/10 shrink-0">
        <StrapiImage
          src={image.url}
          alt={image.alternativeText || "Article image"}
          width={600}
          height={375}
          className="w-full h-full object-cover transition-transform
                     duration-700 group-hover:scale-[1.06]"
        />

        {/* Bottom fade */}
        <div
          className={`absolute inset-0 bg-linear-to-t via-transparent
                      to-transparent opacity-70 pointer-events-none
                      ${v.cardImagefade}`}
        />

        {/* Star stamp */}
        <div
          className="absolute top-3 right-3 flex items-center justify-center
                     w-7 h-7 rounded-full bg-neutral-800/50 backdrop-blur-sm
                     border border-white/10"
        >
          <span
            className="font-mono text-[0.6rem] font-bold
                           text-white/70 leading-none"
          >
            ✦
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col gap-3 p-5 flex-1">
        {/* Date */}
        {startDate &&
          (() => {
            const date = startDate ?? createdAt;
            if (!date) return null;
            return (
              <div className="flex items-center gap-1.5">
                <svg
                  className="w-3 h-3 text-orange-500 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  aria-hidden="true"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" strokeLinecap="round" />
                </svg>
                <span
                  className="font-mono text-[0.62rem] font-semibold
                               tracking-wide uppercase text-orange-500"
                >
                  {formatDate(date)}
                </span>
              </div>
            );
          })()}

        {/* Accent line */}
        <div
          className="w-8 h-0.5 rounded-full bg-orange-500/40
                     transition-all duration-500
                     group-hover:w-16 group-hover:bg-orange-500"
        />

        {/* Title */}
        <h5
          className={`m-0 leading-snug transition-colors duration-300
                      group-hover:text-orange-500 line-clamp-2
                      ${v.cardTitle}`}
        >
          {heading}
        </h5>

        {/* Price */}
        {price && (
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[0.6rem] uppercase
                             tracking-widest ${v.cardPrice}`}
            >
              Price
            </span>
            <span className="font-mono text-sm font-semibold text-orange-500">
              {price}
            </span>
          </div>
        )}

        {/* Description */}
        <p
          className={`text-sm leading-relaxed m-0 flex-1
                      line-clamp-3 ${v.cardDescription}`}
        >
          {description}
        </p>

        {/* CTA */}
        <div className={`mt-auto pt-4 border-t ${v.cardBorder}`}>
          <div className="inline-flex items-center gap-2">
            <span
              className={`font-mono text-[0.62rem] tracking-widest
                         uppercase transition-colors duration-300
                         group-hover:text-orange-500 ${v.cardCta}`}
            >
              {ctaLabel}
            </span>
            <svg
              className="w-3 h-3 text-orange-500/50 shrink-0
                         transition-all duration-300
                         group-hover:translate-x-1.5
                         group-hover:text-orange-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div
        className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2
                   rounded-br-2xl pointer-events-none transition-all duration-500
                   border-orange-500/0 group-hover:border-orange-500/45"
      />
    </Link>
  );
}
