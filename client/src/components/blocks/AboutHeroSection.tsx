///////////////////////////////////////////////
import { AboutHeroSectionProps } from "@/types";
import { StrapiImage } from "../Strapi-image";

export function AboutHeroSection({
  heading,
  description,
  image,
}: Readonly<AboutHeroSectionProps>) {
  return (
    <section className="relative bg-neutral-500 overflow-hidden">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-accent-400 to-transparent opacity-50" />

      {/* Soft background glow */}
      <div className="absolute -bottom-48 -right-20 w-125 h-125 rounded-full bg-[radial-gradient(circle,rgba(238,96,52,0.06)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — text */}
          <div>
            {/* Eyebrow */}

            <div className="flex items-center gap-2 mb-5">
              <span className="w-1.75 h-1.75 rounded-full bg-[#e8682a] animate-pulse" />
              <span className="font-mono text-[12px] font-medium tracking-[0.12em] uppercase text-[#e8682a]">
                Who We Are
              </span>
            </div>

            {/* Heading + dash */}
            <div className="mb-7">
              <h1 className="text-neutral-900 mb-4">{heading}</h1>
              <div className="flex items-center gap-2">
                <div className="w-16 h-0.5 bg-accent-400 rounded-full" />
                {/* <div className="w-5 h-[2px] bg-accent-400 rounded-full opacity-30" /> */}
              </div>
            </div>

            <p className="whitespace-pre-line text-[15px] leading-[1.8] text-neutral-800 opacity-70 font-light mb-9">
              {description}
            </p>

            {/* Stats — orange bar style */}
            <div className="flex flex-row gap-3.5">
              {[
                { num: "200+", label: "Brands scaled" },
                { num: "94%", label: "Retention rate" },
                { num: "$40M+", label: "Revenue driven" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-4">
                  <div className="w-1 h-9 bg-accent-400/15 rounded-full shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-accent-400 rounded-full origin-bottom scale-y-100" />
                  </div>
                  <div>
                    <div className="font-mono text-[20px] font-bold text-neutral-900 leading-none mb-0.5">
                      {s.num}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.04em] text-neutral-800 opacity-45">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          {image && (
            <div className="relative pb-5">
              {/* Corner decoration */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-[1.5px] border-r-[1.5px] border-accent-400 rounded-tr-md opacity-35 z-10" />

              <div className="relative rounded-lg overflow-hidden">
                <StrapiImage
                  src={image.url}
                  height={420}
                  width={580}
                  alt={image.alternativeText || "About us"}
                  className="w-full h-105 object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-accent-400/6 to-neutral-500/15" />
                <div className="absolute inset-0 border border-accent-400/15 rounded-lg pointer-events-none" />
              </div>

              {/* Animated badge */}
              <div className="absolute bottom-0 -left-4 bg-neutral-500 border border-neutral-900/10 rounded-md px-5 py-3.5 flex items-center gap-3 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse shrink-0" />
                <span className="font-mono text-[11px] tracking-[0.08em] text-neutral-800 opacity-70">
                  EST. 2019 · RETENTION-FIRST
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
