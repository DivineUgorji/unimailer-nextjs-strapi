"use client";

import { getThemeClasses } from "@/utils/theme";
import { StrapiImage } from "@/components/Strapi-image";
import { FeaturesSectionProps } from "@/types";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export function FeaturesSection({
  heading,
  theme,
  features,
}: Readonly<FeaturesSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section
      className={`relative w-full overflow-hidden ${themeClasses.background}`}
    >
      {/* ── Blob layer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className="absolute -top-40 -right-40 w-125 h-125
                     rounded-full bg-orange-500/8 blur-[110px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -left-32 w-95 h-95
                     rounded-full bg-orange-400/6 blur-[90px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* ── Grid texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(53,50,62,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(53,50,62,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── Ghost watermark ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center
                   pointer-events-none select-none overflow-hidden"
      >
        <span
          className="font-mono font-bold uppercase leading-none
                     tracking-[0.3em] whitespace-nowrap
                     text-[clamp(4rem,14vw,10rem)]
                     text-neutral-800/2.5"
        >
          Features
        </span>
      </div>

      {/* ── Corner accents ── */}
      <motion.div
        className="absolute top-6 left-6 w-6 h-6 border-t-2 border-l-2
                   border-orange-500/30 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5 }}
      />
      <motion.div
        className="absolute top-6 right-6 w-6 h-6 border-t-2 border-r-2
                   border-orange-500/30 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-6 left-6 w-6 h-6 border-b-2 border-l-2
                   border-orange-500/30 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.7 }}
      />
      <motion.div
        className="absolute bottom-6 right-6 w-6 h-6 border-b-2 border-r-2
                   border-orange-500/30 pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.8 }}
      />

      <div className="container relative px-4 md:px-8 lg:px-16 py-20 md:py-28">
        {/* ── Section header ── */}
        <motion.div
          className="flex flex-col items-center gap-4 text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div className="flex items-center gap-3">
            <motion.span
              className="block h-px bg-orange-500 origin-right"
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            />
            <span
              className="font-mono text-[0.62rem] font-medium
                             tracking-[0.2em] uppercase text-orange-500"
            >
              What We Offer
            </span>
            <motion.span
              className="block h-px bg-orange-500 origin-left"
              initial={{ width: 0 }}
              whileInView={{ width: 28 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            />
          </div>

          {/* Heading */}
          <h2 className="m-0 max-w-[22ch] text-neutral-800 leading-tight">
            {heading}
          </h2>

          {/* Animated divider */}
          <motion.div
            className="w-16 h-0.5 rounded-full bg-orange-500/40 mt-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* ── Feature cards grid ── */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none m-0 p-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {features.map((feature, index) => (
            <motion.li
              key={feature.id}
              className="group relative flex flex-col items-center text-center
                         rounded-2xl border border-neutral-200 bg-white p-8
                         hover:border-orange-500/40
                         hover:shadow-[0_12px_40px_rgba(238,96,52,0.09)]
                         transition-all duration-500 overflow-hidden"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Card number stamp */}
              <div
                aria-hidden="true"
                className="absolute top-4 right-4 font-mono text-[0.6rem]
                           font-bold text-neutral-800/10 tracking-widest"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Image container with glow */}
              <div className="relative mb-6">
                <div
                  className="absolute inset-0 rounded-full bg-orange-500/10
                             blur-xl scale-150 opacity-0
                             group-hover:opacity-100 transition-opacity duration-500"
                />
                <div
                  className="relative w-16 h-16 flex items-center justify-center
                             rounded-2xl bg-orange-50 border border-orange-100
                             group-hover:border-orange-200
                             group-hover:bg-orange-100/70
                             transition-all duration-300"
                >
                  <StrapiImage
                    src={feature.image.url}
                    alt={feature.image.alternativeText || "Feature icon"}
                    width={36}
                    height={36}
                    className="object-contain w-9 h-9"
                  />
                </div>
              </div>

              {/* Animated accent line */}
              <div
                className="w-8 h-0.5 rounded-full bg-orange-500/30 mb-5
                           transition-all duration-500
                           group-hover:w-14 group-hover:bg-orange-500"
              />

              {/* Title */}
              <h4
                className="m-0 mb-3 text-neutral-800 leading-snug
                           transition-colors duration-300
                           group-hover:text-orange-500"
              >
                {feature.title}
              </h4>

              {/* Description */}
              <p className="text-sm leading-relaxed text-neutral-600/80 m-0 flex-1">
                {feature.description}
              </p>

              {/* Learn more CTA — appears on hover */}
              <div
                className="flex items-center gap-1.5 mt-6 opacity-0
                           group-hover:opacity-100 transition-all duration-300
                           translate-y-2 group-hover:translate-y-0"
              >
                <span
                  className="font-mono text-[0.62rem] tracking-widest
                             uppercase text-orange-500"
                >
                  Learn more
                </span>
                <ArrowRight
                  className="w-3 h-3 text-orange-500 transition-transform
                             duration-200 group-hover:translate-x-0.5"
                  strokeWidth={2.5}
                />
              </div>

              {/* Bottom-right corner accent */}
              <div
                className="absolute bottom-0 right-0 w-6 h-6
                           border-b-2 border-r-2 rounded-br-2xl
                           border-orange-500/0 pointer-events-none
                           transition-all duration-500
                           group-hover:border-orange-500/40"
              />
            </motion.li>
          ))}
        </motion.ul>

        {/* ── Bottom dot trail ── */}
        <motion.div
          className="flex items-center justify-center gap-1.5 mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          aria-hidden="true"
        >
          {features.map((_, i) => (
            <span
              key={i}
              className="block rounded-sm bg-neutral-800"
              style={{
                width: i === 0 ? "20px" : "6px",
                height: "3px",
                opacity: i === 0 ? 0.3 : 0.1,
                borderRadius: "2px",
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
