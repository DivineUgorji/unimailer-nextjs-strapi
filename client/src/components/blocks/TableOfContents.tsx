"use client";

import { useState } from "react";
import { HeadingBlockProps } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import { List, ChevronDown, MoveRight } from "lucide-react";
import Link from "next/link";

interface TableOfContentsProps {
  headings: HeadingBlockProps[];
}

function TOCItem({
  heading,
  index,
}: {
  heading: HeadingBlockProps;
  index: number;
}) {
  return (
    <Link
      href={`#${heading.linkId}`}
      className="m-0 group flex items-center gap-3 py-1.5
                   no-underline transition-colors duration-200"
    >
      {/* Number */}
      <span
        className="font-mono text-[0.58rem] w-4 shrink-0
                     text-right leading-none mt-px
                     text-orange-500/60 group-hover:text-orange-500
                     transition-colors duration-200"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* Dot */}
      <span
        className="w-1 h-1 rounded-full shrink-0
                     bg-neutral-300 group-hover:bg-orange-500
                     transition-colors duration-200"
      />

      {/* Heading text */}
      <span
        className="text-sm leading-snug text-neutral-600
                     group-hover:text-orange-500
                     transition-colors duration-200"
      >
        {heading.heading}
      </span>

      {/* Arrow — Lucide icon, no raw SVG paths needed */}
      <MoveRight
        strokeWidth={2}
        className="w-3.5 h-3.5 ml-auto shrink-0
                     text-transparent group-hover:text-orange-500/60
                     transition-colors duration-200"
      />
    </Link>
  );
}

export function TableOfContents({ headings }: Readonly<TableOfContentsProps>) {
  const [isOpen, setIsOpen] = useState(true);

  if (!headings.length) return null;

  return (
    <div
      className="mb-12 rounded-xl border border-neutral-200
                 bg-white shadow-[0_2px_12px_rgba(53,50,62,0.06)]
                 overflow-hidden"
    >
      {/* ── Header row ── */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="toc-list"
        className="w-full flex items-center justify-between
                   px-6 py-4 transition-colors duration-200
                   hover:bg-neutral-50"
      >
        <div className="flex items-center gap-3">
          <span className="block w-5 h-px bg-orange-500" />
          <List className="w-3.5 h-3.5 text-orange-500" strokeWidth={2} />
          <span
            className="font-mono text-[0.65rem] font-medium
                       tracking-[0.18em] uppercase text-neutral-800"
          >
            Table of Contents
          </span>
        </div>
        <ChevronDown
          strokeWidth={2}
          className={`w-4 h-4 text-neutral-400 transition-transform
                      duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>

      {/* ── Divider ── */}
      {isOpen && <div className="w-full h-px bg-neutral-100" />}

      {/* ── Collapsible TOC list ── */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="toc-list"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ol className="flex flex-col px-6 py-4 gap-1 list-none m-0">
              {headings.map((heading, i) => (
                <TOCItem key={heading.id} heading={heading} index={i} />
              ))}
            </ol>

            {/* ── Bottom accent line ── */}
            <div
              className="mx-6 mb-4 h-px bg-linear-to-r
                         from-orange-500/30 via-orange-500/10 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
