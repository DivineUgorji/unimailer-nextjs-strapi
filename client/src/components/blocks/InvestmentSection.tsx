"use client";

import { StrapiImage } from "@/components/Strapi-image";
import { Button } from "../ui/Button";
import type { InvestmentSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const PILLS = ["Highest ROI channel", "Data-driven", "Revenue focused"];

export function InvestmentSection({
  theme,
  heading,
  description,
  image,
  investmentCta,
}: Readonly<InvestmentSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section
      className={`relative overflow-hidden ${themeClasses.background} ${themeClasses.text}`}
    >
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -right-16 w-105 h-105 rounded-full bg-orange-500/[0.07] blur-[100px]" />
        <div className="absolute -bottom-20 -left-10 w-75 h-75 rounded-full bg-orange-500/5 blur-[80px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(53,50,62,0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(53,50,62,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-end justify-end overflow-hidden pointer-events-none -z-10">
        <span className="font-mono font-bold uppercase leading-none tracking-[0.25em] text-[clamp(4rem,12vw,10rem)] text-neutral-800/2.5 whitespace-nowrap pr-2 pb-1">
          ROI
        </span>
      </div>

      {/* Corner brackets */}
      {[
        "absolute top-4 left-4 border-t-2 border-l-2",
        "absolute top-4 right-4 border-t-2 border-r-2",
        "absolute bottom-4 left-4 border-b-2 border-l-2",
        "absolute bottom-4 right-4 border-b-2 border-r-2",
      ].map((cls, i) => (
        <motion.div
          key={i}
          className={`${cls} w-5 h-5 border-orange-500/35 pointer-events-none`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
        />
      ))}

      <div className="container px-4 md:px-8 lg:px-33 py-14 md:py-18">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 md:gap-14 items-center"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Left — text content */}
          <div>
            {/* Mono label */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-4"
            >
              <motion.span
                className="block h-px bg-orange-500 origin-left"
                initial={{ width: 0 }}
                whileInView={{ width: 22 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              />
              <span className="font-mono text-[0.62rem] font-medium tracking-[0.2em] uppercase text-orange-500">
                Your investment
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-neutral-900 mb-4"
            >
              {heading}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-neutral-800/70 text-lg leading-relaxed mb-8"
            >
              {description}
            </motion.p>

            {/* Keyword pills */}
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="font-mono text-[0.6rem] font-medium tracking-[0.12em] uppercase px-3 py-1.5 rounded-full border border-orange-500/25 text-orange-500/85 bg-orange-500/6"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button {...investmentCta}>{investmentCta.text}</Button>
            </motion.div>
          </div>

          {/* Right — image */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Image corner brackets */}
            <motion.div
              className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-orange-500/45 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <motion.div
              className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-orange-500/45 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
            />

            {/* ROI badge */}
            <div className="absolute top-3 right-3 z-10 bg-orange-500 text-white font-mono text-[0.6rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1.5 rounded-md">
              $42 per $1 spent
            </div>

            <div className="rounded-xl overflow-hidden border border-neutral-800/10">
              {image?.url && (
                <StrapiImage
                  src={image.url}
                  alt={image.alternativeText || "Investment Image"}
                  width={500}
                  height={317}
                  style={{ objectFit: "cover", width: "100%", height: "auto" }}
                />
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Dashed divider — kept from original */}
        <motion.div
          className="mt-18 w-full h-0.5"
          style={{
            background:
              "repeating-linear-gradient(to right, rgba(53,50,62,0.15) 0 2px, transparent 5px 20px)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Dot trail */}
        <div className="flex items-center gap-1 mt-5">
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="block rounded-sm bg-neutral-800"
              style={{
                width: i === 0 ? "20px" : "6px",
                height: "3px",
                opacity: i === 0 ? 0.35 : 0.1,
                borderRadius: "2px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
