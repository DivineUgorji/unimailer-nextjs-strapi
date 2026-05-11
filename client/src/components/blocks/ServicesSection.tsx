"use client";

import { ServicesSectionProps } from "@/types";
import { StrapiImage } from "../Strapi-image";
import { getThemeClasses } from "@/utils/theme";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export function ServicesSection({
  theme,
  heading,
  features,
  floatingIcon,
}: Readonly<ServicesSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section
      className={`${themeClasses.background} ${themeClasses.text} relative overflow-hidden`}
    >
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -right-20 w-100 h-100 rounded-full bg-orange-500/12 blur-[100px]" />
        <div className="absolute -bottom-28 -left-16 w-85 h-85 rounded-full bg-orange-500/8 blur-[90px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none -z-10">
        <span className="font-mono font-bold uppercase leading-none tracking-[0.25em] text-[clamp(4rem,12vw,10rem)] text-white/[0.02] whitespace-nowrap pr-2 pb-1">
          Services
        </span>
      </div>

      {/* Floating icon — bounces at intervals */}
      {floatingIcon?.showIcon && floatingIcon.image && (
        <motion.div
          className="absolute top-6 right-6 pointer-events-none w-24 h-24 opacity-55 z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 2.4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <StrapiImage
            src={floatingIcon.image.url}
            alt={floatingIcon.image.alternativeText || ""}
            width={96}
            height={96}
            className="w-full h-full object-contain"
          />
        </motion.div>
      )}

      <div className="container mx-auto px-4 sm:px-8 lg:px-33 py-12 md:py-18 relative z-10">
        {/* Section header */}
        <motion.div
          className="text-left md:text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-start md:justify-center gap-3 mb-4"
          >
            <motion.span
              className="block h-px bg-orange-500 origin-left"
              initial={{ width: 0 }}
              whileInView={{ width: 22 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            />
            <span className="font-mono text-[0.62rem] font-medium tracking-[0.2em] uppercase text-orange-500">
              What we do
            </span>
            <motion.span
              className="hidden md:block h-px bg-orange-500 origin-right"
              initial={{ width: 0 }}
              whileInView={{ width: 22 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white md:max-w-[24ch] mx-auto"
          >
            {heading}
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-white/15 mx-auto mt-5 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Cards grid */}
        <motion.ul
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-px bg-white/10 border border-white/10 rounded-xl overflow-hidden"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {features.map((feature, i) => (
            <motion.li
              key={feature.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group bg-neutral-800/60 hover:bg-neutral-800/90 transition-colors duration-300 flex flex-col p-7"
            >
              {/* Icon + number */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-orange-500/[0.18] border border-orange-500/35 flex items-center justify-center flex-shrink-0">
                  {feature.image && (
                    <StrapiImage
                      src={feature.image.url}
                      alt={feature.image.alternativeText || ""}
                      width={16}
                      height={16}
                      className="w-4 h-4"
                      style={{ objectFit: "contain" }}
                    />
                  )}
                </div>
                <span className="font-mono text-[0.6rem] tracking-[0.18em] text-orange-500/70 uppercase font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Accent line */}
              <div className="w-6 h-0.5 bg-orange-500/50 group-hover:w-10 group-hover:bg-orange-500 rounded-full transition-all duration-500 mb-4" />

              {/* Title */}
              <h3 className="text-neutral-100 text-base md:text-lg font-semibold mb-2.5 group-hover:text-white transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-300/70 text-sm leading-relaxed flex-1">
                {feature.description}
              </p>

              {/* CTA */}
              <Link
                href={feature.link?.href || "#"}
                className="mt-6 inline-flex items-center gap-2 group/cta"
              >
                <span className="font-mono text-[0.62rem] tracking-widest uppercase text-white/40 group-hover/cta:text-orange-500 transition-colors duration-300">
                  {feature.link?.text?.trim() || "Learn more"}
                </span>
                <ArrowRight className="w-3 h-3 text-orange-500/60 group-hover/cta:translate-x-1.5 group-hover/cta:text-orange-500 transition-all duration-300" />
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
