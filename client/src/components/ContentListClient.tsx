"use client";

import { motion } from "framer-motion";
import { variants, VariantKey } from "@/utils/contentlist-variants";
import { PaginationComponent } from "@/components/PaginationComponent";
import { Search } from "@/components/Search";

interface ContentListClientProps {
  headline: string;
  articleCount: number;
  headlineAlignment?: "center" | "right" | "left";
  cards: React.ReactNode[];
  variant?: VariantKey;
  showSearch?: boolean;
  page?: string;
  showPagination?: boolean;
  pageCount?: number;
  itemLabel?: string; // ← new
  showItemCount?: boolean; // ← new
}

export function ContentListClient({
  headline,
  articleCount,
  headlineAlignment = "left",
  cards,
  variant = "light",
  showSearch,
  showPagination,
  pageCount = 1,
  itemLabel = "item",
  showItemCount = true,
}: Readonly<ContentListClientProps>) {
  const v = variants[variant];

  const gridClass =
    articleCount === 1
      ? "grid grid-cols-1 max-w-md mx-auto"
      : articleCount === 2
        ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

  // ── Pluralise the label automatically ──
  const pluralLabel = articleCount === 1 ? itemLabel : `${itemLabel}s`;

  return (
    <section className={`relative w-full overflow-hidden ${v.section}`}>
      {/* ── Blob layer ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
          className={`absolute -top-40 -left-40 w-137.5 h-137.5
                     rounded-full blur-[110px] ${v.blob1}`}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        <motion.div
          className={`absolute -top-20 right-0 w-95 h-95
                     rounded-full blur-[90px] ${v.blob2}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2
                     w-150 h-62.5 rounded-full blur-[80px] ${v.blob3}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.8, delay: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* ── Grid texture ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: v.gridTexture,
          backgroundSize: "52px 52px",
        }}
      />

      {/* ── Ghost watermark ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center
                   pointer-events-none select-none overflow-hidden -z-10"
      >
        <span
          className={`font-mono font-bold uppercase leading-none
                     whitespace-nowrap tracking-[0.25em]
                     text-[clamp(5rem,18vw,14rem)] ${v.watermark}`}
        >
          {v.watermarkText}
        </span>
      </div>

      {/* ── Corner accents ── */}
      {(
        [
          "top-7 left-7 border-t-2 border-l-2",
          "top-7 right-7 border-t-2 border-r-2",
          "bottom-7 left-7 border-b-2 border-l-2",
          "bottom-7 right-7 border-b-2 border-r-2",
        ] as const
      ).map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-7 h-7 pointer-events-none
                     ${pos} ${v.cornerBorder}`}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
        />
      ))}

      <div className="container relative px-4 md:px-8 lg:px-16 py-20 md:py-28">
        {/* ── Section header ── */}
        <motion.div
          className={`flex items-end justify-between mb-5 gap-6 flex-wrap
            ${
              headlineAlignment === "center"
                ? "flex-col items-center text-center"
                : ""
            }
            ${headlineAlignment === "right" ? "flex-row-reverse" : ""}
          `}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-3 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <motion.span
                className="block h-px bg-orange-500 origin-left"
                initial={{ width: 0 }}
                whileInView={{ width: 28 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              />
              <span
                className="font-mono text-[0.62rem] font-medium
                               tracking-[0.2em] uppercase text-orange-500"
              >
                {v.labelText}
              </span>
            </div>
            <h3 className={`m-0 max-w-xl ${v.headline}`}>
              {headline || "Featured Articles"}
            </h3>

            {/* Search */}
            {showSearch && (
              <div className="w-full md:max-w-md">
                <Search />
              </div>
            )}
          </div>

          {/* ── Live badge — hidden when showItemCount is false ── */}
          {showItemCount && (
            <div
              className={`flex items-center gap-2.5 rounded-full px-4
                            py-1.5 self-end mb-1 shrink-0 border backdrop-blur-sm
                            ${v.badgeBorder}`}
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="animate-ping absolute inline-flex h-full w-full
                                 rounded-full bg-orange-500 opacity-60"
                />
                <span
                  className="relative inline-flex rounded-full h-2 w-2
                                 bg-orange-500"
                />
              </span>
              <span
                className={`font-mono text-[0.6rem] tracking-widest
                               uppercase ${v.badgeText}`}
              >
                {/* ── Uses itemLabel for the count text ── */}
                {articleCount} {pluralLabel}
              </span>
            </div>
          )}
        </motion.div>

        {/* ── Divider ── */}
        <motion.div
          className={`w-full h-px mb-12 origin-left ${v.divider}`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* ── Grid ── */}
        <div className={gridClass}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="flex flex-col"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {card}
            </motion.div>
          ))}
        </div>

        {/* ── Bottom meta row ── */}
        <motion.div
          className={`flex items-center justify-between mt-14 py-6 px-6
                     border-t ${v.divider}`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center gap-2" aria-hidden="true">
            {[...Array(Math.min(articleCount, 6))].map((_, i) => (
              <span
                key={i}
                className={`block rounded-sm transition-all ${v.dotBg}`}
                style={{
                  width: i < 3 ? "18px" : "6px",
                  height: "3px",
                  opacity: i < 3 ? 0.3 : 0.1,
                  borderRadius: "2px",
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 rounded-full bg-orange-500/40" />
            <span
              className={`font-mono text-[0.58rem] tracking-[0.2em]
                             uppercase hidden sm:block ${v.stampText}`}
            >
              {new Date().getFullYear()} · {v.stampLabel}
            </span>
          </div>
          {showPagination && <PaginationComponent pageCount={pageCount} />}
        </motion.div>
      </div>
    </section>
  );
}
