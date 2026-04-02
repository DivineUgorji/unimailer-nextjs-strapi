import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { TrustBadgesSection } from "@/components/blocks/TrustBadgesSection";
import { FeaturesSection } from "./blocks/FeaturesSection";
import { StatsSection } from "./blocks/StatsSection";
import { ServicesSection } from "./blocks/ServicesSection";
import { InvestmentSection } from "./blocks/InvestmentSection";
import { ProcessSection } from "@/components/blocks/ProcessSection";
import { TeamSection } from "./blocks/TeamSection";
import { PricingSection } from "./blocks/PricingSection";
import { ShowcaseSection } from "./blocks/ShowcaseSection";
import { TestimonialSection } from "./blocks/TestimonialSection";
import { ScrollBannerSection } from "./blocks/ScrollBannerSection";
import { ContentGridSection } from "./blocks/ContentGridSection";
import { HomepageCta } from "./blocks/HomePageCta";
import { FeaturedArticle } from "./blocks/FeaturedArticle";
import { Subscribe } from "./blocks/Subscribe";
import { BlogHeadingBlock } from "./blocks/BlogHeadingBlock";
import { BlogParagraphBlock } from "./blocks/BlogParagraphBlock";
import { BlogParagraphWithImage } from "./blocks/BlogParagraphWithImage";
import { BlogFullImageBlock } from "./blocks/BlogFullImageBlock";
import { AboutHeroSection } from "./blocks/AboutHeroSection";
import { AboutTeamSection } from "./blocks/AboutTeamSection";
import { AboutTeamSummarySection } from "./blocks/AboutTeamSummarySection";
import { WhyChooseUs } from "./blocks/WhyChooseUs";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.hero-section":
      return <HeroSection {...block} key={index} />;
    case "blocks.trust-badges-section":
      return <TrustBadgesSection {...block} key={index} />;
    case "blocks.features-section":
      return <FeaturesSection {...block} key={index} />;
    case "blocks.stats-section":
      return <StatsSection {...block} key={index} />;
    case "blocks.services-section":
      return <ServicesSection {...block} key={index} />;
    case "blocks.investment-section":
      return <InvestmentSection {...block} key={index} />;
    case "blocks.process-section":
      return <ProcessSection {...block} key={index} />;
    case "blocks.team-section":
      return <TeamSection {...block} key={index} />;
    case "blocks.pricing-section":
      return <PricingSection {...block} key={index} />;
    case "blocks.showcase-section":
      return <ShowcaseSection {...block} key={index} />;
    case "blocks.testimonials-section":
      return <TestimonialSection {...block} key={index} />;
    case "blocks.scroll-banner-section":
      return <ScrollBannerSection {...block} key={index} />;
    // case "blocks.content-grid-section":
    //   return <ContentGridSection {...block} key={index} />;
    case "blocks.homepage-cta":
      return <HomepageCta {...block} key={index} />;
    case "blocks.featured-article":
      return <FeaturedArticle key={block.id} {...block} />;
    case "blocks.subscribe":
      return <Subscribe key={block.id} {...block} />;
    case "blocks.heading":
      return <BlogHeadingBlock {...block} key={index} />;
    case "blocks.paragraph":
      return <BlogParagraphBlock {...block} key={index} />;
    case "blocks.paragraph-with-image":
      return <BlogParagraphWithImage {...block} key={index} />;
    case "blocks.full-image":
      return <BlogFullImageBlock {...block} key={index} />;
    case "blocks.aboutpage-hero-section":
      return <AboutHeroSection {...block} key={index} />;
    case "blocks.about-team-section":
      return <AboutTeamSection {...block} key={index} />;
    case "blocks.about-team-summary-section":
      return <AboutTeamSummarySection {...block} key={index} />;
    case "blocks.why-choose-us":
      return <WhyChooseUs {...block} key={index} />;
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
