"use client";

import { getThemeClasses } from "@/utils/theme";
import type { ProcessSectionProps } from "@/types";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const STEP_LABELS = [
  "Step one",
  "Step two",
  "Step three",
  "Step four",
  "Step five",
];

export function ProcessSection({ heading, theme, steps }: ProcessSectionProps) {
  const themeClasses = getThemeClasses(theme?.variant);

  return (
    <section className={`relative overflow-hidden ${themeClasses.background}`}>
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-20 -right-16 w-95 h-95 rounded-full bg-orange-500/[0.07] blur-[90px]" />
        <div className="absolute -bottom-24 -left-10 w-95 h-95 rounded-full bg-orange-500/5 blur-[80px]" />
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
        <span className="font-mono font-bold uppercase leading-none tracking-[0.25em] text-[clamp(4rem,12vw,10rem)] text-neutral-800/[0.025] whitespace-nowrap pr-2 pb-1">
          Process
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

      <div className="container px-4 md:px-8 lg:px-33 pb-14 md:pb-18 pt-14 md:pt-18">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          variants={container}
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <motion.span
              className="block h-px bg-orange-500 origin-right"
              initial={{ width: 0 }}
              whileInView={{ width: 22 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            />
            <span className="font-mono text-[0.62rem] font-medium tracking-[0.2em] uppercase text-orange-500">
              How it works
            </span>
            <motion.span
              className="block h-px bg-orange-500 origin-left"
              initial={{ width: 0 }}
              whileInView={{ width: 22 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-neutral-900 max-w-[26ch] mx-auto"
          >
            {heading}
          </motion.h2>

          <motion.div
            className="w-12 h-px bg-neutral-800/10 mx-auto mt-5 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Steps */}
        <motion.ul
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {steps.map((step, i) => (
            <motion.li
              key={step.id}
              variants={fadeUp}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-left md:px-8 first:md:pl-0 last:md:pr-0"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+32px)] right-[calc(-50%+32px)] h-px bg-neutral-800/12 pointer-events-none">
                  <span className="absolute -right-1 -top-[3px] w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                </div>
              )}

              {/* Step number */}
              <div className="relative w-16 h-16 mb-6">
                <div className="absolute inset-0 rounded-full border-[1.5px] border-orange-500/30" />
                <div className="absolute inset-[6px] rounded-full bg-orange-500/[0.08] flex items-center justify-center">
                  <span className="font-mono text-xl font-bold text-orange-500 leading-none">
                    {String(step.stepCount).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Step label */}
              <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-orange-500/60 mb-2.5">
                {STEP_LABELS[i] ?? `Step ${step.stepCount}`}
              </p>

              {/* Title */}
              <h4 className="text-neutral-900 font-semibold mb-3">
                {step.subheading}
              </h4>

              {/* Description */}
              <p className="text-neutral-800/68 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>

        {/* Dot trail */}
        <div className="flex items-center justify-center gap-1 mt-14">
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
