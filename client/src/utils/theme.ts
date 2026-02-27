// utils/theme.ts

export type ThemeVariant = "orange" | "white" | "black";

export interface ThemeConfig {
  background: string;
  text: string;
  accent: string;
  border?: string;
  divider?: string;
}

export const themeMap: Record<ThemeVariant, ThemeConfig> = {
  orange: {
    background: "bg-neutral-500",
    text: "text-neutral-900",
    accent: "bg-orange-500",
  },

  white: {
    background: "bg-neutral-100",
    text: "text-neutral-900",
    accent: "bg-orange-500",
    border: "border-neutral-200",
    divider: "bg-neutral-800/15",
  },

  black: {
    background: "bg-neutral-900",
    text: "text-neutral-100",
    accent: "bg-orange-500",
    divider: "bg-neutral-400/15",
  },
};

export function getThemeClasses(variant?: ThemeVariant): ThemeConfig {
  return themeMap[variant || "white"];
}
