"use client";

import { FeaturedArticleProps } from "@/types";
import { StrapiImage } from "../Strapi-image";
import Link from "next/link";
import { getThemeClasses } from "@/utils/theme";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.15,
    },
  },
};

export function FeaturedArticle({
  theme,
  headline,
  excerpt,
  cta,
  image,
}: Readonly<FeaturedArticleProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section
      className={`${themeClasses.background} relative w-full overflow-hidden isolate`}
    >
      {/* ── Orb container ── */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <motion.div
          className="absolute -top-32 -right-32 w-120 h-120 rounded-full
                     bg-orange-500/10 blur-[96px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full
                     bg-orange-400/8 blur-[72px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        {/* ── Ghost "Our Blog" heading centered ── */}
        <motion.div
          className="text-center mb-0"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            aria-hidden="true"
            className="select-none font-serif text-[clamp(4rem,12vw,9rem)] font-bold
                       leading-none text-black/4.5 pointer-events-none"
          >
            Our Blog
          </span>
        </motion.div>

        {/* ── Full-width divider ── */}
        <motion.div
          className="w-full h-px bg-current/15 mb-6 origin-center"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── Sub-header row: Featured Article (left) + Reading time (right) ── */}
        <motion.div
          className="flex items-center justify-between mb-12"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
        >
          {/* Left: Featured Article label */}
          <div className="flex items-center gap-3">
            <motion.span
              className="block w-10 h-px bg-orange-500 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.45, delay: 0.55, ease: "easeOut" }}
            />
            <span className="font-mono text-[0.65rem] font-medium tracking-[0.18em] uppercase text-orange-500">
              Featured Article
            </span>
          </div>

          {/* Right: Reading time badge */}
          <div className="flex items-center gap-1.5 border border-current/15 rounded-full px-3 py-1">
            <svg
              className="w-3 h-3 opacity-50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span className="font-mono text-[0.6rem] tracking-widest uppercase opacity-50">
              5 min read
            </span>
          </div>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Text column */}
          <motion.div
            className="flex flex-col gap-7 order-2 md:order-1"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {/* Category dot + tag */}
            <motion.div
              className="flex items-center gap-2"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              <span className="font-mono text-[0.65rem] tracking-widest uppercase opacity-50">
                Email Marketing
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-[2.75rem] lg:text-5xl font-normal
                         leading-[1.12] tracking-tight m-0"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {headline}
            </motion.h1>

            {/* Excerpt */}
            <motion.p
              className="text-base leading-[1.8] opacity-60 max-w-[54ch] m-0"
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              {excerpt}
            </motion.p>

            {/* Short divider before CTA */}
            <motion.div
              className="w-12 h-px bg-orange-500/40"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={cta.href}
                className="group inline-flex items-center gap-2.5 font-mono text-[0.72rem]
                           font-medium tracking-widest uppercase no-underline pb-0.5
                           border-b border-current/30 w-fit transition-all duration-200
                           hover:text-orange-500 hover:border-orange-500/60"
              >
                <span>{cta.text}</span>
                <svg
                  className="w-4 h-4 shrink-0 transition-transform duration-200
                             group-hover:translate-x-1.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Dot trail */}
            <motion.div
              className="hidden md:flex items-center gap-1.5 mt-2"
              variants={fadeUp}
              transition={{ duration: 0.5, ease: "easeOut" }}
              aria-hidden="true"
            >
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="block rounded-full bg-current"
                  style={{
                    width: i === 2 ? "6px" : "4px",
                    height: i === 2 ? "6px" : "4px",
                    opacity: i === 2 ? 0.3 : 0.12,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Image column */}
          <motion.div
            className="relative order-1 md:order-2 group"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Corner accent — top-left */}
            <motion.div
              className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2
                         border-orange-500 pointer-events-none z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
            />

            {/* Corner accent — bottom-right */}
            <motion.div
              className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2
                         border-orange-500 pointer-events-none z-10"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
            />

            {/* Orange offset border behind image */}
            <div
              className="absolute inset-0 border border-orange-500/40 rounded
                         translate-x-3 translate-y-3 -z-10 pointer-events-none
                         transition-transform duration-300 group-hover:translate-x-4
                         group-hover:translate-y-4"
            />

            {/* Second fainter offset layer */}
            <div
              className="absolute inset-0 border border-orange-500/15 rounded
                         translate-x-6 translate-y-6 -z-20 pointer-events-none
                         transition-transform duration-300 group-hover:translate-x-8
                         group-hover:translate-y-8"
            />

            {/* Image + overlays */}
            <div className="relative overflow-hidden rounded">
              <StrapiImage
                src={image.url}
                height={500}
                width={650}
                alt={image.alternativeText}
                className="block w-full h-auto object-cover rounded
                           transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100
                           transition-opacity duration-500 pointer-events-none
                           bg-linear-to-tr from-transparent via-white/8 to-transparent"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-1/3
                           bg-linear-to-t from-black/20 to-transparent
                           pointer-events-none rounded-b"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
