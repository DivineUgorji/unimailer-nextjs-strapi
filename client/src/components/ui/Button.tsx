import { ButtonProps } from "@/types";

const BUTTON_VARIANTS = {
  black: "bg-neutral-900 text-neutral-100 hover:bg-neutral-800",
  orange: "bg-accent-400 text-neutral-400 hover:bg-orange-600",
};

export function Button({ text, href, variant, isExternal }: ButtonProps) {
  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center px-5 py-2.5 rounded-md font-medium transition ${BUTTON_VARIANTS[variant]}`}
    >
      {text}
    </a>
  );
}
