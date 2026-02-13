export const sectionThemeMap = {
  white: "bg-white text-gray-900",
  black: "bg-black text-white",
  orange: "bg-orange-500 text-white",
} as const;

export type ThemeVariant = keyof typeof sectionThemeMap;
