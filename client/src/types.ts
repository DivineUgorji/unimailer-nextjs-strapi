import type { CardVariantKey } from "@/utils/contentlist-variants";

export type { CardVariantKey };

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
  image: ImageProps;
}

export interface ButtonProps extends LinkProps {
  variant: "black" | "orange";
  className?: string;
  children?: React.ReactNode;
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

export interface FloatingIconProps {
  id: number;
  showIcon: boolean;
  image: ImageProps;
}

export interface Feature {
  id: number;
  feature: string;
}

export interface PricingPlanProps {
  id: number;
  planName: string;
  currencySymbol: string;
  price: number;
  billingPeriod: string;
  note: string;
  features: Feature[];
  pricingCta?: ButtonProps;
  themeVariant?: Theme;
  isHighlighted: boolean;
}

export interface ScrollingCardsProps {
  id: number;
  images: ImageProps[];
  direction: "left" | "right";
  speed: number;
}

export interface highlightItems {
  id: number;
  image: ImageProps;
  text: string;
}

export interface contentProps {
  id: number;
  image: ImageProps;
  title: string;
  excerpt: string;
  link: LinkProps;
}

export interface SocialLinkProps {
  id: number;
  platform: string;
  url: string;
  image: ImageProps;
}

export interface FooterColumnsProps {
  id: number;
  title: string;
  footerLinks: LinkProps[];
}

export interface HeaderData {
  id: number;
  theme?: Theme;
  logo?: LogoProps;
  links?: LinkProps[];
  navCta?: ButtonProps;
}

export interface FooterData {
  theme?: Theme;
  footerLogo: LogoProps;
  description: string;
  copyright: string;
  socialLinks: SocialLinkProps[];
  footerColumns: FooterColumnsProps[];
}

// ── Single declaration of CardProps ──
export interface CardProps {
  documentId: string;
  title: string;
  description: string;
  slug: string;
  image: ImageProps;
  price?: string;
  createdAt?: string;
  startDate?: string;
  basePath: string;
  cardVariant?: CardVariantKey;
}

// ── Single declaration of ArticleProps ──
export interface ArticleProps extends Omit<
  CardProps,
  "basePath" | "cardVariant"
> {
  id: number;
  author?: string;
  featured?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  basePath?: string;
  cardVariant?: CardVariantKey;
}

type ComponentType =
  | "blocks.hero-section"
  | "blocks.trust-badges-section"
  | "blocks.features-section"
  | "blocks.stats-section"
  | "blocks.services-section"
  | "blocks.investment-section"
  | "blocks.process-section"
  | "blocks.team-section"
  | "blocks.pricing-section"
  | "blocks.showcase-section"
  | "blocks.testimonials-section"
  | "blocks.scroll-banner-section"
  | "blocks.content-grid-section"
  | "blocks.homepage-cta"
  | "blocks.featured-article"
  | "blocks.subscribe"
  | "blocks.heading" // ← new
  | "blocks.paragraph" // ← new
  | "blocks.paragraph-with-image" // ← new
  | "blocks.full-image";

// interface Base
//   T extends ComponentType,
//   D extends object = Record<string, unknown>,
// > {
//   id: number;
//   __component?: T;
//   documentId?: string;
//   createdAt?: string;
//   updatedAt?: string;
//   publishedAt?: string;
//   data?: D;
// }

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
  | FeaturesSectionProps
  | StatsSectionProps
  | ServicesSectionProps
  | InvestmentSectionProps
  | ProcessSectionProps
  | TeamSectionProps
  | PricingSectionProps
  | ShowcaseSectionProps
  | TestimonialsSectionProps
  | ScrollBannerSectionProps
  | ContentGridSectionProps
  | HomepageCtaProps
  | FeaturedArticleProps
  | SubscribeProps
  | HeadingBlockProps // ← new
  | ParagraphBlockProps // ← new
  | ParagraphWithImageProps // ← new
  | FullImageBlockProps;

export interface HeaderProps {
  data: HeaderData;
}
export interface FooterProps {
  data: FooterData;
}

export interface HeroSectionProps extends Base<"blocks.hero-section"> {
  theme?: Theme;
  heading: string;
  description: string;
  image: ImageProps;
}

export interface TrustedBadgesSectionProps extends Base<"blocks.trust-badges-section"> {
  heading: string;
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
  floatingIcon?: FloatingIconProps;
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

export interface PricingSectionProps extends Base<"blocks.pricing-section"> {
  heading: string;
  theme?: Theme;
  plans: PricingPlanProps[];
}

export interface ShowcaseSectionProps extends Base<"blocks.showcase-section"> {
  heading: string;
  image: ImageProps;
  theme?: Theme;
  scrollingCards: ScrollingCardsProps[];
}

export interface TestimonialsSectionProps extends Base<"blocks.testimonials-section"> {
  theme?: Theme;
  heading: string;
  testimonial: string;
  name: string;
  role: string;
  image: ImageProps;
  TestimonialCta: ButtonProps;
  floatingIcon?: FloatingIconProps;
}

export interface ScrollBannerSectionProps extends Base<"blocks.scroll-banner-section"> {
  theme?: Theme;
  speed?: number;
  items: highlightItems[];
}

export interface ContentGridSectionProps extends Base<"blocks.content-grid-section"> {
  theme?: Theme;
  heading: string;
  description: string;
  contentCta?: ButtonProps;
  content: contentProps[];
}

export interface HomepageCtaProps extends Base<"blocks.homepage-cta"> {
  theme?: Theme;
  text: string;
  homeCtaButton: ButtonProps;
  floatingIcon?: FloatingIconProps;
}

export interface FeaturedArticleProps extends Base<"blocks.featured-article"> {
  theme?: Theme;
  headline: string;
  excerpt: string;
  cta: LinkProps;
  image: ImageProps;
}

export interface SubscribeProps extends Base<"blocks.subscribe"> {
  heading: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

export interface HeadingBlockProps extends Base<"blocks.heading"> {
  heading: string;
  linkId?: string;
}

export interface ParagraphBlockProps extends Base<"blocks.paragraph"> {
  content: string;
}

export interface ParagraphWithImageProps extends Base<"blocks.paragraph-with-image"> {
  content: string;
  image: ImageProps;
  reversed?: boolean;
  imageLandscape?: boolean;
}

export interface FullImageBlockProps extends Base<"blocks.full-image"> {
  image: ImageProps;
}

export interface ArticleProps extends Omit<
  CardProps,
  "basePath" | "cardVariant"
> {
  id: number;
  author?: string;
  featured?: boolean;
  publishedAt?: string;
  updatedAt?: string;
  basePath?: string;
  cardVariant?: CardVariantKey;
  body?: string; // ← rich text field
  blocks?: Block[]; // ← optional dynamic zone
}
