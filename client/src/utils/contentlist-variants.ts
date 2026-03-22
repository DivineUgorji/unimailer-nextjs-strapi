export type VariantKey = "light" | "dark" | "events";
export type CardVariantKey = VariantKey;

export interface VariantConfig {
  // ── Section styles ──
  section: string;
  blob1: string;
  blob2: string;
  blob3: string;
  gridTexture: string;
  watermark: string;
  watermarkText: string;
  cornerBorder: string;
  headline: string;
  labelText: string;
  badgeBorder: string;
  badgeText: string;
  divider: string;
  dotBg: string;
  stampText: string;
  stampLabel: string;
  // ── Card styles ──
  cardWrapper: string;
  cardImagefade: string;
  cardTitle: string;
  cardDescription: string;
  cardPrice: string;
  cardCta: string;
  cardBorder: string;
}

export const variants: Record<VariantKey, VariantConfig> = {
  light: {
    section: "bg-neutral-100",
    blob1: "bg-orange-500/10",
    blob2: "bg-orange-400/7",
    blob3: "bg-neutral-200/70",
    gridTexture: `
      linear-gradient(to right, rgba(53,50,62,0.035) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(53,50,62,0.035) 1px, transparent 1px)
    `,
    watermark: "text-neutral-800/[0.012]",
    watermarkText: "Articles",
    cornerBorder: "border-orange-500/35",
    headline: "text-neutral-800",
    labelText: "Latest Articles",
    badgeBorder: "border-neutral-800/10 bg-white/60",
    badgeText: "text-neutral-800/50",
    divider: "bg-neutral-800/10",
    dotBg: "bg-neutral-800",
    stampText: "text-neutral-800/25",
    stampLabel: "Editorial",
    cardWrapper:
      "border-neutral-200 bg-white hover:border-orange-500/50 hover:shadow-[0_16px_48px_rgba(238,96,52,0.11)]",
    cardImagefade: "from-white",
    cardTitle: "text-neutral-800",
    cardDescription: "text-neutral-800/55",
    cardPrice: "text-neutral-800/40",
    cardCta: "text-neutral-800/40",
    cardBorder: "border-neutral-200",
  },

  dark: {
    section: "bg-neutral-900",
    blob1: "bg-orange-500/15",
    blob2: "bg-orange-600/10",
    blob3: "bg-neutral-800/80",
    gridTexture: `
      linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.025) 1px, transparent 1px)
    `,
    watermark: "text-white/[0.012]",
    watermarkText: "Featured",
    cornerBorder: "border-orange-500/25",
    headline: "text-white",
    labelText: "Featured Articles",
    badgeBorder: "border-white/10 bg-white/5",
    badgeText: "text-white/50",
    divider: "bg-white/10",
    dotBg: "bg-white",
    stampText: "text-white/20",
    stampLabel: "Featured",
    cardWrapper:
      "border-white/10 bg-white/5 hover:border-orange-500/50 hover:shadow-[0_16px_48px_rgba(238,96,52,0.2)]",
    cardImagefade: "from-neutral-900",
    cardTitle: "text-white",
    cardDescription: "text-white/50",
    cardPrice: "text-white/40",
    cardCta: "text-white/40",
    cardBorder: "border-white/10",
  },

  events: {
    section: "bg-orange-50",
    blob1: "bg-orange-500/12",
    blob2: "bg-orange-300/15",
    blob3: "bg-orange-100/80",
    gridTexture: `
      linear-gradient(to right, rgba(238,96,52,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(238,96,52,0.05) 1px, transparent 1px)
    `,
    watermark: "text-orange-900/[0.04]",
    watermarkText: "Events",
    cornerBorder: "border-orange-400/40",
    headline: "text-orange-950",
    labelText: "Upcoming Events",
    badgeBorder: "border-orange-200 bg-white/80",
    badgeText: "text-orange-900/50",
    divider: "bg-orange-900/10",
    dotBg: "bg-orange-900",
    stampText: "text-orange-900/25",
    stampLabel: "Events",
    cardWrapper:
      "border-orange-100 bg-white hover:border-orange-400/60 hover:shadow-[0_16px_48px_rgba(238,96,52,0.15)]",
    cardImagefade: "from-white",
    cardTitle: "text-orange-950",
    cardDescription: "text-orange-900/55",
    cardPrice: "text-orange-900/40",
    cardCta: "text-orange-900/40",
    cardBorder: "border-orange-100",
  },
};
