export interface LinkProps {
  id: number;
  text: string;
  href: string;
  isExternal: boolean;
}

export interface ImageProps {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface LogoProps {
  // logoText: string;
  image: ImageProps;
}

export interface ButtonProps extends LinkProps {
  variant: "black" | "orange";
}

export interface Theme {
  id: number;
  variant: "orange" | "white" | "black";
}

export interface FeatureCardProps {
  id: number;
  title: string;
  description: string;
  image: ImageProps;
  link?: LinkProps;
}

export interface subTextBlockprop {
  id: number;
  subheading: string;
  description: string;
  stepCount?: number;
}

export interface floatingIconProps {
  id: number;
  showIcon: boolean;
  image: ImageProps;
}

type ComponentType =
  | "blocks.hero-section"
  | "blocks.trust-badges-section"
  | "blocks.navigation-section"
  | "blocks.features-section"
  | "blocks.stats-section"
  | "blocks.services-section"
  | "blocks.investment-section"
  | "blocks.process-section"
  | "blocks.team-section";

interface Base<
  T extends ComponentType,
  D extends object = Record<string, unknown>,
> {
  id: number;
  __component?: T;
  documentId?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
  data?: D;
}

export type Block =
  | HeroSectionProps
  | TrustedBadgesSectionProps
  | NavigationSectionProps
  | FeaturesSectionProps
  | StatsSectionProps
  | ServicesSectionProps
  | InvestmentSectionProps
  | ProcessSectionProps
  | TeamSectionProps;

export interface NavigationSectionProps extends Base<"blocks.navigation-section"> {
  theme?: Theme;
  logo?: LogoProps;
  links?: LinkProps[];
  navCta?: ButtonProps;
}

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  theme?: Theme;
  heading: string;
  description: string;
  image: ImageProps;
}

export interface TrustedBadgesSectionProps extends Base<"blocks.trust-badges-section"> {
  theme?: Theme;
  images: ImageProps[];
}

export interface FeaturesSectionProps extends Base<"blocks.features-section"> {
  heading: string;
  theme?: Theme;
  features: FeatureCardProps[];
}

export interface StatsSectionProps extends Base<"blocks.stats-section"> {
  heading: string;
  description: string;
  theme?: Theme;
  image: ImageProps;
  stats: subTextBlockprop[];
}

export interface ServicesSectionProps extends Base<"blocks.services-section"> {
  heading: string;
  theme?: Theme;
  features: FeatureCardProps[];
  floatingIcon?: floatingIconProps;
}

export interface InvestmentSectionProps extends Base<"blocks.investment-section"> {
  heading: string;
  description: string;
  theme?: Theme;
  image: ImageProps;
  investmentCta: ButtonProps;
}

export interface ProcessSectionProps extends Base<"blocks.process-section"> {
  heading: string;
  theme?: Theme;
  steps: subTextBlockprop[];
}
export interface TeamSectionProps extends Base<"blocks.team-section"> {
  heading: string;
  theme?: Theme;
  teamCard?: FeatureCardProps[];
  teamSectionCta?: ButtonProps;
}
