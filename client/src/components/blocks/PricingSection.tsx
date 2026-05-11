"use client";

import type { PricingSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";
import { Button } from "../ui/Button";
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

export function PricingSection({
  heading,
  theme,
  plans,
}: Readonly<PricingSectionProps>) {
  const sectionThemeClasses = getThemeClasses(theme?.variant);

  return (
    <section
      className={`relative overflow-hidden ${sectionThemeClasses.background}`}
    >
      {/* Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-24 -right-16 w-105 h-105 rounded-full bg-orange-500/[0.07] blur-[100px]" />
        <div className="absolute -bottom-20 -left-10 w-75 h-75 rounded-full bg-orange-500/5 blur-[80px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-125 h-50 rounded-full bg-orange-500/4 blur-[80px]" />
      </div>

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(53,50,62,0.032) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(53,50,62,0.032) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Ghost watermark */}
      <div className="absolute inset-0 flex items-end justify-center overflow-hidden pointer-events-none -z-10">
        <span className="font-mono font-bold uppercase leading-none tracking-[0.25em] text-[clamp(4rem,12vw,10rem)] text-neutral-800/[0.022] whitespace-nowrap pb-1">
          Pricing
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
          className={`${cls} w-5 h-5 border-orange-500/30 pointer-events-none`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
        />
      ))}

      <div className="container px-4 md:px-8 lg:px-33 py-12 md:py-14">
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
              Simple pricing
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
            className="text-neutral-900 max-w-[30ch] mx-auto"
          >
            {heading}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-neutral-800/55 text-sm mt-2"
          >
            No hidden fees. Cancel anytime.
          </motion.p>

          <motion.div
            className="w-12 h-px bg-neutral-800/10 mx-auto mt-5 origin-center"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* Plans grid */}
        <motion.ul
          className="grid gap-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {plans?.map((plan) => {
            const planVariant = plan.themeVariant?.variant ?? theme?.variant;
            const isFeatured = planVariant === "black";

            return (
              <motion.li
                key={plan.id}
                variants={fadeUp}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`relative flex flex-col rounded-xl p-7 overflow-hidden border transition-all duration-500
                  ${
                    isFeatured
                      ? "bg-neutral-900 border-orange-500 shadow-[0_16px_48px_rgba(238,96,52,0.18)] hover:shadow-[0_20px_56px_rgba(238,96,52,0.25)]"
                      : "bg-white border-neutral-200 hover:border-orange-500/40 hover:shadow-[0_12px_40px_rgba(238,96,52,0.09)]"
                  }`}
              >
                {/* Top accent line */}
                <div
                  className={`absolute top-0 left-6 right-6 h-0.5 rounded-b transition-all duration-500
                  ${isFeatured ? "bg-orange-500" : "bg-orange-500/15 group-hover:bg-orange-500/50"}`}
                />

                {/* Featured badge */}
                {isFeatured && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-orange-500 text-white font-mono text-[0.58rem] font-semibold tracking-[0.15em] uppercase px-3.5 py-1 rounded-b-lg">
                    Most popular
                  </div>
                )}

                {/* Rays on featured card */}
                {isFeatured && (
                  <div className="absolute -top-8 -right-8 w-36 h-36 pointer-events-none opacity-20">
                    <svg
                      viewBox="0 0 140 140"
                      fill="none"
                      className="w-full h-full"
                    >
                      <line
                        x1="70"
                        y1="70"
                        x2="70"
                        y2="5"
                        stroke="#ee6034"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                      <line
                        x1="70"
                        y1="70"
                        x2="135"
                        y2="70"
                        stroke="#ee6034"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.8"
                      />
                      <line
                        x1="70"
                        y1="70"
                        x2="116"
                        y2="24"
                        stroke="#ee6034"
                        strokeWidth="1"
                        strokeLinecap="round"
                        opacity="0.6"
                      />
                      <line
                        x1="70"
                        y1="70"
                        x2="24"
                        y2="24"
                        stroke="#ee6034"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        opacity="0.4"
                      />
                      <line
                        x1="70"
                        y1="70"
                        x2="135"
                        y2="35"
                        stroke="#ee6034"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        opacity="0.35"
                      />
                      <line
                        x1="70"
                        y1="70"
                        x2="100"
                        y2="5"
                        stroke="#ee6034"
                        strokeWidth="0.75"
                        strokeLinecap="round"
                        opacity="0.3"
                      />
                      <circle
                        cx="70"
                        cy="70"
                        r="45"
                        stroke="#ee6034"
                        strokeWidth="0.75"
                        strokeDasharray="3 6"
                        opacity="0.4"
                      />
                      <circle
                        cx="70"
                        cy="70"
                        r="25"
                        stroke="#ee6034"
                        strokeWidth="0.75"
                        opacity="0.35"
                      />
                      <circle
                        cx="70"
                        cy="70"
                        r="8"
                        fill="rgba(238,96,52,0.2)"
                        stroke="#ee6034"
                        strokeWidth="1"
                        opacity="0.9"
                      />
                      <circle
                        cx="70"
                        cy="70"
                        r="3"
                        fill="#ee6034"
                        opacity="0.9"
                      />
                    </svg>
                  </div>
                )}

                {/* Plan label */}
                <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase text-orange-500/75 mb-3 mt-5">
                  {plan.planName}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-0.5 mb-1.5">
                  <span
                    className={`text-lg font-semibold leading-none ${isFeatured ? "text-white" : "text-neutral-900"}`}
                  >
                    {plan.currencySymbol}
                  </span>
                  <span
                    className={`font-mono text-[2.6rem] font-bold leading-none tracking-tight ${isFeatured ? "text-white" : "text-neutral-900"}`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ml-0.5 ${isFeatured ? "text-white/45" : "text-neutral-800/45"}`}
                  >
                    {plan.billingPeriod}
                  </span>
                </div>

                <p
                  className={`text-xs mb-5 ${isFeatured ? "text-white/40" : "text-neutral-800/45"}`}
                >
                  {plan.note}
                </p>

                {/* Divider */}
                <div
                  className={`h-px w-full mb-5 ${isFeatured ? "bg-white/10" : "bg-neutral-800/10"}`}
                />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1 mb-6">
                  {plan.features?.map((feature) => (
                    <li key={feature.id} className="flex items-start gap-2.5">
                      <span
                        className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 border
                        ${
                          isFeatured
                            ? "bg-orange-500/20 border-orange-500/50"
                            : "bg-orange-500/8 border-orange-500/25"
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      </span>
                      <span
                        className={`text-sm leading-snug ${isFeatured ? "text-white/70" : "text-neutral-800/72"}`}
                      >
                        {feature.feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.pricingCta && (
                  <Button
                    {...plan.pricingCta}
                    className={`mt-auto w-full font-mono text-[0.62rem] tracking-[0.16em] uppercase font-semibold py-3 px-6 rounded-lg transition-all duration-300
                      ${
                        isFeatured
                          ? "bg-orange-500 text-white hover:bg-orange-600"
                          : "bg-transparent border border-orange-500/35 text-orange-500 hover:bg-orange-500/[0.06] hover:border-orange-500"
                      }`}
                  >
                    {plan.pricingCta.text}
                  </Button>
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Dot trail */}
        <div className="flex items-center justify-center gap-1 mt-12">
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
