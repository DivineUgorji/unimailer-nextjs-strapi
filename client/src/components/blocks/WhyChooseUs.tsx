"use client";

import { WhyChooseUsProps, FeatureCardProps } from "@/types";
import { StrapiImage } from "../Strapi-image";
import { motion } from "framer-motion";
import { TrendingUp, Users, BarChart2, Shield } from "lucide-react";

function FeatureIcon({ title }: { title: string }) {
  const t = title.toLowerCase();
  if (t.includes("result") || t.includes("proven"))
    return <TrendingUp size={20} className="text-accent-400" />;
  if (t.includes("team") || t.includes("expert"))
    return <Users size={20} className="text-accent-400" />;
  if (t.includes("data") || t.includes("analyt"))
    return <BarChart2 size={20} className="text-accent-400" />;
  if (t.includes("support") || t.includes("service"))
    return <Shield size={20} className="text-accent-400" />;
  return <TrendingUp size={20} className="text-accent-400" />;
}

function getTag(title: string): string {
  const t = title.toLowerCase();
  if (t.includes("result")) return "RESULTS";
  if (t.includes("team")) return "EXPERTISE";
  if (t.includes("data")) return "ANALYTICS";
  if (t.includes("support")) return "SUPPORT";
  return title.toUpperCase().slice(0, 8);
}

function FeatureCard({
  feature,
  index,
}: {
  feature: FeatureCardProps;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="group relative bg-white/4 border border-white/8
                 rounded-xl p-8 overflow-hidden
                 transition-colors duration-300
                 hover:border-accent-400/30 hover:bg-accent-400/5"
    >
      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100
                      transition-opacity duration-400 pointer-events-none
                      bg-[radial-gradient(ellipse_at_top_left,rgba(238,96,52,0.07)_0%,transparent_65%)]"
      />

      {/* Corner bracket */}
      <div
        className="absolute top-4 right-4 w-6 h-6
                      border-t-[1.5px] border-r-[1.5px] border-accent-400
                      rounded-tr-sm opacity-0 group-hover:opacity-60
                      transition-opacity duration-300"
      />

      {/* Large faded index */}
      <span
        className="absolute bottom-5 right-6 font-mono text-[32px]
                       font-bold text-white opacity-[0.04]
                       group-hover:opacity-[0.07] transition-opacity
                       duration-300 select-none leading-none"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Icon */}
      <div
        className="w-11 h-11 rounded-lg border border-white/10
                      bg-white/5 flex items-center justify-center mb-5
                      transition-colors duration-300
                      group-hover:border-accent-400/40 group-hover:bg-accent-400/10"
      >
        {feature.image ? (
          <StrapiImage
            src={feature.image.url}
            height={24}
            width={24}
            alt={feature.image.alternativeText || feature.title}
            className="w-6 h-6 object-contain brightness-0 invert opacity-80"
          />
        ) : (
          <FeatureIcon title={feature.title} />
        )}
      </div>

      <h3 className="text-[16px] font-semibold text-neutral-500 mb-2.5">
        {feature.title}
      </h3>
      <p className="text-[13px] leading-[1.75] text-neutral-500 opacity-45 font-light">
        {feature.description}
      </p>

      {/* Bottom rule + tag */}
      <div className="flex items-center gap-3 mt-5">
        <div className="flex-1 h-px bg-white/7" />
        <span
          className="font-mono text-[10px] text-accent-400 opacity-60
                         tracking-[0.08em]"
        >
          {getTag(feature.title)}
        </span>
      </div>
    </motion.div>
  );
}

export function WhyChooseUs({ heading, features }: Readonly<WhyChooseUsProps>) {
  return (
    <section className="relative bg-neutral-900 overflow-hidden">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]
                      bg-linear-to-r from-transparent via-accent-400 to-transparent
                      opacity-60"
      />

      {/* Background glow */}
      <div
        className="absolute -bottom-48 -right-24 w-125 h-125 rounded-full
                      bg-[radial-gradient(circle,rgba(238,96,52,0.08)_0%,transparent_70%)]
                      pointer-events-none"
      />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-[1.5px] bg-accent-400" />
              <span
                className="font-mono text-[11px] tracking-[0.16em]
                               uppercase text-accent-400"
              >
                What sets us apart
              </span>
            </div>
            <h2 className="text-neutral-500 mb-3">{heading}</h2>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-accent-400 rounded-full" />
              <div className="w-5 h-0.5 bg-accent-400 rounded-full opacity-30" />
            </div>
          </div>
          <span
            className="font-mono text-[11px] text-neutral-500 opacity-30
                           tracking-[0.08em] whitespace-nowrap"
          >
            {String(features.length).padStart(2, "0")} REASONS
          </span>
        </motion.div>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
