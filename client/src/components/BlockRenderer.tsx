import type { Block } from "@/types";

import { HeroSection } from "@/components/blocks/HeroSection";
import { NavigationSection } from "@/components/blocks/NavigationSection";
import { TrustBadgesSection } from "@/components/blocks/TrustBadgesSection";
import { FeaturesSection } from "./blocks/FeaturesSection";
import { StatsSection } from "./blocks/StatsSection";
import { ServicesSection } from "./blocks/ServicesSection";

function blockRenderer(block: Block, index: number) {
  switch (block.__component) {
    case "blocks.navigation-section":
      return <NavigationSection {...block} key={index} />;
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
    default:
      return null;
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return blocks.map((block, index) => blockRenderer(block, index));
}
