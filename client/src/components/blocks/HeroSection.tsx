"use client";

import { StrapiImage } from "@/components/Strapi-image";
import type { HeroSectionProps } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export function HeroSection({
  heading,
  description,
  image,
  cta,
}: Readonly<HeroSectionProps>) {
  return (
    <section className="relative bg-neutral-500 overflow-hidden">
      {/* Top accent line */}
      {/* <div
        className="absolute top-0 left-0 right-0 h-[1.5px]
                      bg-linear-to-r from-transparent via-accent-400 to-transparent
                      opacity-50"
      /> */}

      {/* Glow orbs */}
      <div
        className="absolute -top-48 -left-36 w-150 h-150 rounded-full
                      bg-[radial-gradient(circle,rgba(238,96,52,0.06)_0%,transparent_70%)]
                      pointer-events-none"
      />
      <div
        className="absolute -bottom-24 -right-20 w-100 h-100 rounded-full
                      bg-[radial-gradient(circle,rgba(238,96,52,0.04)_0%,transparent_70%)]
                      pointer-events-none"
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(30,27,41,0.08) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse at 70% 50%, black 20%, transparent 65%)",
        }}
      />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Badge row */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-3 mb-8">
          <div
            className="inline-flex items-center gap-2 bg-accent-400/8
                          border border-accent-400/20 rounded-full px-3.5 py-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent-400 animate-pulse" />
            <span className="font-mono text-[11px] text-accent-400 tracking-[0.08em]">
              EMAIL MARKETING AGENCY
            </span>
          </div>
          <div className="flex-1 h-px bg-neutral-900/8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <div>
            <motion.h1 {...fadeUp(0.1)} className="text-neutral-900 mb-5">
              {heading}
            </motion.h1>

            <motion.p
              {...fadeUp(0.2)}
              className="text-[15px] leading-[1.8] text-neutral-800
                         opacity-60 font-light mb-9"
            >
              {description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex items-center gap-4 flex-wrap"
            >
              <Link
                href={cta?.href ?? "/pricing"}
                className="inline-flex items-center gap-2 bg-neutral-900 text-neutral-500
                           rounded-md px-6 py-3.5 text-[14px] font-medium
                           hover:bg-neutral-800 hover:-translate-y-px
                           transition-all duration-200 group"
              >
                {cta?.text ?? "Get started"}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <button
                className="inline-flex items-center gap-2.5 text-[13px]
                                 text-neutral-800 opacity-50 hover:opacity-85
                                 transition-opacity duration-200 cursor-pointer"
              >
                <div
                  className="w-7 h-7 rounded-full border border-accent-400/30
                                bg-accent-400/6 flex items-center justify-center"
                >
                  <Play size={10} className="text-accent-400 fill-accent-400" />
                </div>
                Watch how it works
              </button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex items-center gap-4 mt-10 pt-7
                         border-t border-neutral-900/8 flex-wrap"
            >
              {/* Avatar stack */}
              <div className="flex">
                {["JN", "SM", "HU", "PS"].map((initials, i) => (
                  <div
                    key={initials}
                    style={{ marginRight: i < 3 ? "-8px" : 0, zIndex: 4 - i }}
                    className="relative w-7 h-7 rounded-full
                               border-2 border-neutral-500
                               bg-neutral-300 flex items-center justify-center
                               font-mono text-[9px] text-neutral-800 font-semibold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <p
                className="text-[12px] text-neutral-800 opacity-50
                            leading-normal ml-2"
              >
                <span className="text-neutral-900 opacity-100 font-semibold">
                  200+ brands
                </span>
                <br />
                trust UniMailers worldwide
              </p>

              <div className="w-px h-7 bg-neutral-900/10" />

              <div className="flex items-center gap-1.5">
                <span className="text-accent-400 text-[12px] tracking-wide">
                  ★★★★★
                </span>
                <span className="font-mono text-[11px] text-neutral-800 opacity-40">
                  4.9 / 5.0
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — image */}
          {image && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative pb-6"
            >
              {/* Corner brackets */}
              <div
                className="absolute -top-3 -right-3 w-10 h-10 z-10
                              border-t-[1.5px] border-r-[1.5px] border-accent-400
                              rounded-tr-md opacity-35"
              />
              <div
                className="absolute bottom-3 -left-3 w-10 h-10
                              border-b-[1.5px] border-l-[1.5px] border-accent-400
                              opacity-20"
              />

              <div
                className="relative rounded-xl overflow-hidden
                              shadow-[0_24px_64px_rgba(30,27,41,0.10)]"
              >
                <StrapiImage
                  src={image.url}
                  alt={image.alternativeText || "Hero image"}
                  width={572}
                  height={420}
                  className="w-full h-105 object-cover object-top"
                />
                <div
                  className="absolute inset-0 bg-linear-to-br
                                from-accent-400/6 to-transparent"
                />
                <div
                  className="absolute inset-0 border border-accent-400/15
                                rounded-xl pointer-events-none"
                />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 -left-5 bg-neutral-500
                           border border-neutral-900/10 rounded-lg
                           px-4 py-3.5 flex items-center gap-3
                           shadow-[0_8px_32px_rgba(30,27,41,0.10)]"
              >
                <div
                  className="w-8 h-8 rounded-md bg-accent-400/10
                                flex items-center justify-center shrink-0"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#ee6034"
                    strokeWidth="2"
                  >
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-mono text-[16px] font-bold text-accent-400
                                  leading-none mb-0.5"
                  >
                    +156%
                  </div>
                  <div
                    className="text-[11px] text-neutral-800 opacity-40
                                  tracking-[0.04em]"
                  >
                    Avg. email revenue lift
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
