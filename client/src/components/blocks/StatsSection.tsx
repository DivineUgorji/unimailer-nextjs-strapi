"use client";

import { StrapiImage } from "@/components/Strapi-image";
import { StatsSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

// Parses "42%", "$240M+", "85M+" → { prefix, number, suffix }
function parseStatValue(value: string) {
  const prefix = value.match(/^[^0-9]*/)?.[0] ?? "";
  const suffix = value.match(/[^0-9]*$/)?.[0] ?? "";
  const number = parseFloat(value.replace(/[^0-9.]/g, ""));
  return { prefix, number, suffix };
}

function AnimatedStat({ value }: { value: string }) {
  const { prefix, number, suffix } = parseStatValue(value);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) => {
    // Keep one decimal if the original number has one
    const hasDecimal = number % 1 !== 0;
    return hasDecimal ? v.toFixed(1) : Math.floor(v).toString();
  });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, number, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
    }
  }, [isInView, motionValue, number]);

  return (
    <span
      ref={ref}
      className="font-mono font-bold text-[38px] leading-tight text-accent-400"
    >
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function StatsSection({
  heading,
  theme,
  description,
  image,
  stats,
}: Readonly<StatsSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section className={`relative overflow-hidden ${themeClasses.background}`}>
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-20 -right-16 w-90 h-90 rounded-full bg-orange-500/[0.07] blur-[90px]" />
        <div className="absolute -bottom-20 -left-10 w-70 h-70 rounded-full bg-orange-500/5 blur-[80px]" />
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
        <span className="font-mono font-bold uppercase leading-none tracking-[0.25em] text-[clamp(4rem,12vw,10rem)] text-neutral-800/25 whitespace-nowrap pr-2 pb-1">
          Agency
        </span>
      </div>

      <div className="container px-4 sm:px-8 lg:px-33 py-14 sm:py-18">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {/* Image — untouched sizing */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center md:justify-start w-fit"
          >
            <motion.div
              className="absolute -top-1.5 -left-1.5 w-5 h-5 border-t-2 border-l-2 border-orange-500/45 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
            />
            <motion.div
              className="absolute -bottom-1.5 -right-1.5 w-5 h-5 border-b-2 border-r-2 border-orange-500/45 pointer-events-none"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
            />
            <StrapiImage
              src={image.url}
              alt={image.alternativeText || "No alternative text provided"}
              width={700}
              height={70}
              className="w-full"
              style={{
                objectFit: "contain",
                width: "full",
                height: "auto",
              }}
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Mono label */}
            <div className="flex items-center gap-3 mb-4">
              <motion.span
                className="block h-px bg-orange-500 origin-left"
                initial={{ width: 0 }}
                whileInView={{ width: 22 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              />
              <span className="font-mono text-[0.62rem] font-medium tracking-[0.2em] uppercase text-orange-500">
                Email Marketing Agency
              </span>
            </div>

            <h2 className="text-neutral-900 mb-4">{heading}</h2>
            <p className="text-neutral-800/80">{description}</p>

            {/* Animated divider */}
            <motion.div
              className="w-full h-px bg-neutral-800/10 origin-left mt-8 mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />

            <ul className="flex flex-col md:flex-row gap-10">
              {stats.map((stat, i) => (
                <motion.li
                  key={stat.id}
                  variants={fadeUp}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={
                    i < stats.length - 1
                      ? "md:pr-10 md:border-r border-neutral-800/10"
                      : ""
                  }
                >
                  <AnimatedStat value={stat.subheading} />
                  <p className="text-neutral-800/70 text-sm mt-1">
                    {stat.description}
                  </p>
                </motion.li>
              ))}
            </ul>

            {/* Dot trail */}
            <div className="flex items-center gap-1 mt-8">
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
