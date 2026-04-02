"use client";

import {
  AboutTeamSectionProps,
  TeamMembersProps,
  AttributeCardProps,
} from "@/types";
import { StrapiImage } from "../Strapi-image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { useState } from "react";

// Parse "- item\n- item" strings into a clean array
function parseItems(text: string): string[] {
  return text
    .split("\n")
    .map((l) => l.replace(/^[-•]\s*/, "").trim())
    .filter(Boolean);
}

function AttributeSection({ attr }: { attr: AttributeCardProps }) {
  const items = parseItems(attr.description);
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-4 h-[1.5px] bg-accent-400 shrink-0" />
        <h4 className="text-[11px] font-semibold text-neutral-900 uppercase tracking-[0.08em]">
          {attr.title.replace(":", "")}
        </h4>
      </div>
      <ul className="flex flex-col gap-1.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2.5 text-[13px] leading-[1.6] text-neutral-800 opacity-75"
          >
            <span className="w-1.25 h-1.25 rounded-full bg-accent-400 opacity-60 shrink-0 mt-1.5" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MemberModal({
  member,
  onClose,
}: {
  member: TeamMembersProps;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6
                   bg-neutral-900/50 backdrop-blur-sm"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative bg-neutral-100 rounded-2xl w-full max-w-170
                     max-h-[85vh] overflow-hidden flex flex-col
                     shadow-[0_32px_80px_rgba(30,27,41,0.2)]"
        >
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full
                       bg-neutral-900/7 hover:bg-accent-400/12 hover:text-accent-400
                       flex items-center justify-center transition-colors duration-200
                       text-neutral-800 cursor-pointer"
          >
            <X size={14} />
          </button>

          {/* Top — image + intro */}
          {/* <div className="flex shrink-0">
            <div className="w-45 h-55 shrink-0">
              {member?.image?.url && (
                <StrapiImage
                  src={member.image.url}
                  alt={member.image.alternativeText || member.name}
                  width={180}
                  height={220}
                  className="w-full h-full object-cover object-top"
                />
              )}
            </div>
            <div
              className="flex-1 px-7 py-6 bg-neutral-500 border-b border-neutral-900/7
                            flex flex-col justify-end"
            >
              <h3 className="text-neutral-900 mb-1">{member.name}</h3>
              <p className="text-[13px] text-neutral-800 opacity-50 mb-4">
                {member.role}
              </p>
              <div className="flex items-center gap-2">
                <span className="w-1.57 h-1.75 rounded-full bg-accent-400 animate-pulse flex-shrink-0" />
                <span className="font-mono text-[11px] text-accent-400 tracking-[0.08em]">
                  UNIMAILERS TEAM
                </span>
              </div>
            </div>
          </div> */}

          {/* Top — image + intro */}
          <div className="flex shrink-0">
            {/* Fixed px dimensions instead of Tailwind arbitrary sizing */}
            <div className="w-45 h-55 shrink-0 overflow-hidden">
              <StrapiImage
                src={member.image.url}
                alt={member.image.alternativeText || member.name}
                width={180}
                height={220}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div
              className="flex-1 px-7 py-6 bg-neutral-500 border-b border-neutral-900/7
               flex flex-col justify-end"
            >
              <h3 className="text-neutral-900 mb-1">{member.name}</h3>
              <p className="text-[13px] text-neutral-800 opacity-50 mb-4">
                {member.role}
              </p>
              <div className="flex items-center gap-2">
                {/* Fixed dot sizing */}
                <span className="w-1.75 h-1.75 rounded-full bg-accent-400 animate-pulse shrink-0" />
                <span className="font-mono text-[11px] text-accent-400 tracking-[0.08em]">
                  UNIMAILERS TEAM
                </span>
              </div>
            </div>
          </div>

          {/* Scrollable attributes */}
          <div className="overflow-y-auto flex-1 px-7 py-6">
            {member.teamMemberAttribute.map((attr) => (
              <AttributeSection key={attr.id} attr={attr} />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function TeamCard({
  member,
  index,
  onOpen,
}: {
  member: TeamMembersProps;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative rounded-[10px] overflow-hidden bg-neutral-500
                 border border-neutral-900/7 cursor-pointer
                 transition-shadow duration-300
                 hover:shadow-[0_20px_48px_rgba(238,96,52,0.10)]
                 hover:border-accent-400/25"
    >
      {/* Image */}
      <div className="relative h-65 overflow-hidden">
        <StrapiImage
          src={member.image.url}
          alt={member.image.alternativeText || member.name}
          width={400}
          height={260}
          className="w-full h-full object-cover object-top
                     grayscale-15 brightness-95
                     transition-all duration-500
                     group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-[1.04]"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-accent-400/12 to-transparent
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div
          className="absolute top-3 right-3 w-7 h-7
                        border-t-[1.5px] border-r-[1.5px] border-accent-400 rounded-tr-sm
                        opacity-0 group-hover:opacity-70 transition-opacity duration-300"
        />
      </div>

      {/* Body */}
      <div className="relative px-5 py-4.5 border-t border-neutral-900/6">
        <span
          className="absolute top-4.5 right-5 font-mono text-[11px]
                         text-accent-400 opacity-50 tracking-[0.06em]"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <p className="text-[15px] font-semibold text-neutral-900 mb-1">
          {member.name}
        </p>
        <p className="text-[12px] text-neutral-800 opacity-50 tracking-[0.02em] mb-4">
          {member.role}
        </p>

        <button
          onClick={onOpen}
          className="inline-flex items-center gap-1.5 font-mono text-[11px]
                     tracking-[0.08em] uppercase text-accent-400
                     border border-accent-400/30 rounded px-2.5 py-1.5
                     hover:bg-accent-400 hover:text-neutral-100
                     transition-colors duration-200 cursor-pointer"
        >
          View profile <ArrowUpRight size={12} />
        </button>

        {/* Bottom accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-400
                        rounded-b-[10px] scale-x-0 origin-left
                        group-hover:scale-x-100 transition-transform duration-300"
        />
      </div>
    </motion.div>
  );
}

export function AboutTeamSection({
  heading,
  teamMembers,
}: Readonly<AboutTeamSectionProps>) {
  const [activeMember, setActiveMember] = useState<TeamMembersProps | null>(
    null,
  );

  return (
    <section className="relative bg-neutral-100 overflow-hidden">
      <div className="container px-6 md:px-12 lg:px-20 py-20 md:py-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-7 h-[1.5px] bg-accent-400" />
              <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-accent-400">
                The people behind the work
              </span>
            </div>
            <h2 className="text-neutral-900 mb-3">{heading}</h2>
            <div className="flex items-center gap-2">
              <div className="w-12 h-0.5 bg-accent-400 rounded-full" />
              <div className="w-5 h-0.5 bg-accent-400 rounded-full opacity-30" />
            </div>
          </div>
          <span className="font-mono text-[11px] text-neutral-800 opacity-40 tracking-[0.08em] whitespace-nowrap">
            {String(teamMembers.length).padStart(2, "0")} MEMBERS
          </span>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              onOpen={() => setActiveMember(member)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeMember && (
        <MemberModal
          member={activeMember}
          onClose={() => setActiveMember(null)}
        />
      )}
    </section>
  );
}
