"use client";

import { AboutTeamSummarySectionProps, AttributeCardProps } from "@/types";
import { StrapiImage } from "../Strapi-image";
import { motion } from "framer-motion";
import { Globe, Briefcase, Users, ChevronRight } from "lucide-react";

function getAttrIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("global") || t.includes("presence"))
    return <Globe size={14} className="text-accent-400 shrink-0" />;
  if (t.includes("industr") || t.includes("served"))
    return <Briefcase size={14} className="text-accent-400 shrink-0" />;
  if (t.includes("culture") || t.includes("team"))
    return <Users size={14} className="text-accent-400 shrink-0" />;
  return <ChevronRight size={14} className="text-accent-400 shrink-0" />;
}

function AttrCard({
  attr,
  index,
}: {
  attr: AttributeCardProps;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: "easeOut" }}
      className="group relative bg-neutral-500 border border-neutral-900/7
                 rounded-[10px] px-5.5 py-5 overflow-hidden
                 transition-all duration-250
                 hover:border-accent-400/25
                 hover:shadow-[0_8px_28px_rgba(238,96,52,0.08)]
                 hover:translate-x-1.5"
    >
      {/* Left bar */}
      <div
        className="absolute left-0 top-0 bottom-0 w-0.75 bg-accent-400
                      rounded-l-[10px] scale-y-0 origin-bottom
                      group-hover:scale-y-100 transition-transform duration-300"
      />

      {/* Title */}
      <div className="flex items-center gap-2.5 mb-2">
        {getAttrIcon(attr.title)}
        <h6
          className="text-[12px] font-semibold text-neutral-900
                       tracking-[0.05em] uppercase"
        >
          {attr.title.replace(":", "").trim()}
        </h6>
      </div>

      {/* Description */}
      <p
        className="text-[13px] leading-[1.7] text-neutral-800 opacity-60
                    font-light pl-6"
      >
        {attr.description}
      </p>
    </motion.div>
  );
}

export function AboutTeamSummarySection({
  heading,
  summary,
  image,
  attributeCard,
}: Readonly<AboutTeamSummarySectionProps>) {
  return (
    <section className="relative bg-neutral-100 overflow-hidden">
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[1.5px]
                      bg-linear-to-r from-transparent via-accent-400 to-transparent
                      opacity-40"
      />

      <div className="container relative z-10 px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-[1.5px] bg-accent-400" />
            <span
              className="font-mono text-[11px] tracking-[0.16em]
                             uppercase text-accent-400"
            >
              By the numbers
            </span>
          </div>
          <h2 className="text-neutral-900 mb-3">{heading}</h2>
          <div className="flex items-center gap-2 mb-5">
            <div className="w-12 h-0.5 bg-accent-400 rounded-full" />
            <div className="w-5 h-0.5 bg-accent-400 rounded-full opacity-30" />
          </div>
          {summary && (
            <p
              className="text-[14px] leading-[1.8] text-neutral-800
                          opacity-60 font-light max-w-140"
            >
              {summary}
            </p>
          )}
        </motion.div>

        {/* Two-col grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — attribute cards */}
          <div className="flex flex-col gap-3.5">
            {attributeCard.map((attr, index) => (
              <AttrCard key={attr.id} attr={attr} index={index} />
            ))}

            {/* Derived count row */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex gap-7 mt-4 pt-6 border-t border-neutral-900/7"
            >
              {[
                { num: "12", label: "Countries" },
                { num: "9+", label: "Industries" },
                { num: "5★", label: "Core values" },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2.5">
                  <span
                    className="font-mono text-[20px] font-bold
                                   text-accent-400 leading-none"
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-[11px] uppercase tracking-[0.05em]
                                   text-neutral-800 opacity-45"
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image */}
          {image && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative pb-6"
            >
              {/* Corner brackets */}
              <div
                className="absolute -top-3 -right-3 w-10 h-10 z-10
                              border-t-[1.5px] border-r-[1.5px] border-accent-400
                              rounded-tr-md opacity-35"
              />
              <div
                className="absolute -bottom-3 -left-3 w-10 h-10
                              border-b-[1.5px] border-l-[1.5px] border-accent-400
                              opacity-20"
              />

              <div className="relative rounded-[10px] overflow-hidden">
                <StrapiImage
                  src={image.url}
                  height={360}
                  width={560}
                  alt={image.alternativeText || "Team summary"}
                  className="w-full h-90 object-cover"
                />
                <div
                  className="absolute inset-0 bg-linear-to-br
                                from-accent-400/7 to-transparent"
                />
                <div
                  className="absolute inset-0 border border-accent-400/15
                                rounded-[10px] pointer-events-none"
                />
              </div>

              {/* Badge */}
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2
                              bg-neutral-100 border border-neutral-900/9
                              rounded-md px-4 py-2.5 flex items-center gap-2.5
                              shadow-sm whitespace-nowrap"
              >
                <span
                  className="w-1.75 h-1.75 rounded-full bg-accent-400
                                 animate-pulse shrink-0"
                />
                <span
                  className="font-mono text-[11px] tracking-[0.08em]
                                 text-neutral-800 opacity-65 uppercase"
                >
                  Global · Diverse · Expert
                </span>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
