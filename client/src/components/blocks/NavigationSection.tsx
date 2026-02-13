import { StrapiImage } from "@/components/Strapi-image";
import { Button } from "@/components/ui/Button";
import type { NavigationSectionProps } from "@/types";
import { getThemeClasses } from "@/utils/theme";

export function NavigationSection({
  theme,
  logo,
  links,
  navCta,
}: Readonly<NavigationSectionProps>) {
  const themeClasses = getThemeClasses(theme?.variant);
  return (
    // <nav className="bg-neutral-500 px-4 sm:px-8 lg:px-33 py-6">
    <nav
      className={`${themeClasses.background} ${themeClasses.text} px-4 sm:px-8 lg:px-33 py-6`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        {logo?.image && (
          <StrapiImage
            src={logo.image.url}
            alt={logo.image.alternativeText || "Logo"}
            width={152}
            height={33}
            style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
          />
        )}

        {/* Links */}
        <ul className={`${themeClasses.text} flex items-center gap-8`}>
          {links?.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : undefined}
                rel={link.isExternal ? "noopener noreferrer" : undefined}
                className="font-medium text-[18px]"
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {navCta && <Button {...navCta}>{navCta.text}</Button>}
      </div>
    </nav>
  );
}
