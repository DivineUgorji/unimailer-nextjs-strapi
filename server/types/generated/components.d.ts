import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksFeaturesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_features_sections';
  info: {
    displayName: 'Features section';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-card', true>;
    heading: Schema.Attribute.String;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksInvestmentSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_investment_sections';
  info: {
    displayName: 'Investment section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    investmentCta: Schema.Attribute.Component<'elements.button', false>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksNavigationSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_navigation_sections';
  info: {
    displayName: 'Navigation section';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navCta: Schema.Attribute.Component<'elements.button', false>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksPricingSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricing_sections';
  info: {
    displayName: 'Pricing section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    plans: Schema.Attribute.Component<'elements.plans', true>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksProcessSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_process_sections';
  info: {
    displayName: 'Process section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'elements.stats', true>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services_sections';
  info: {
    displayName: 'services section';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-card', true>;
    floatingIcon: Schema.Attribute.Component<'elements.floating-icon', false>;
    heading: Schema.Attribute.String;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksStatsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_stats_sections';
  info: {
    displayName: 'stats section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    stats: Schema.Attribute.Component<'elements.stats', true>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_sections';
  info: {
    displayName: 'Team section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    teamCard: Schema.Attribute.Component<'elements.feature-card', true>;
    teamSectionCta: Schema.Attribute.Component<'elements.button', false>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksTrustBadgesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_trust_badges_sections';
  info: {
    displayName: 'Trust badges section';
  };
  attributes: {
    images: Schema.Attribute.Media<'images', true>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface ElementsButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_buttons';
  info: {
    displayName: 'Button';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['black', 'orange']>;
  };
}

export interface ElementsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_feature_cards';
  info: {
    displayName: 'feature card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFloatingIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_floating_icons';
  info: {
    displayName: 'floatingIcon';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    showIcon: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsPlans extends Struct.ComponentSchema {
  collectionName: 'components_elements_plans';
  info: {
    displayName: 'plans';
  };
  attributes: {
    billingPeriod: Schema.Attribute.String;
    currencySymbol: Schema.Attribute.String;
    features: Schema.Attribute.Component<'elements.pricing-feature', true>;
    isHighlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    note: Schema.Attribute.String;
    planName: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
    pricingCta: Schema.Attribute.Component<'elements.button', false>;
    themeVariant: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface ElementsPricingFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_features';
  info: {
    displayName: 'pricingFeature';
  };
  attributes: {
    feature: Schema.Attribute.String;
  };
}

export interface ElementsPricingPlans extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_plans';
  info: {
    displayName: 'pricingPlan';
  };
  attributes: {
    billingPeriod: Schema.Attribute.String;
    currencySymbol: Schema.Attribute.String;
    features: Schema.Attribute.Component<'elements.pricing-feature', true>;
    isHighlighted: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    note: Schema.Attribute.String;
    planName: Schema.Attribute.String;
    price: Schema.Attribute.Integer;
    pricingCta: Schema.Attribute.Component<'elements.button', false>;
    themeVariant: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface ElementsStats extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'subTextBlock';
  };
  attributes: {
    description: Schema.Attribute.String;
    stepCount: Schema.Attribute.Integer;
    subheading: Schema.Attribute.String;
  };
}

export interface ElementsTheme extends Struct.ComponentSchema {
  collectionName: 'components_elements_themes';
  info: {
    displayName: 'theme';
  };
  attributes: {
    variant: Schema.Attribute.Enumeration<['white', 'black', 'orange']> &
      Schema.Attribute.DefaultTo<'white'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.features-section': BlocksFeaturesSection;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.investment-section': BlocksInvestmentSection;
      'blocks.navigation-section': BlocksNavigationSection;
      'blocks.pricing-section': BlocksPricingSection;
      'blocks.process-section': BlocksProcessSection;
      'blocks.services-section': BlocksServicesSection;
      'blocks.stats-section': BlocksStatsSection;
      'blocks.team-section': BlocksTeamSection;
      'blocks.trust-badges-section': BlocksTrustBadgesSection;
      'elements.button': ElementsButton;
      'elements.feature-card': ElementsFeatureCard;
      'elements.floating-icon': ElementsFloatingIcon;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.plans': ElementsPlans;
      'elements.pricing-feature': ElementsPricingFeature;
      'elements.pricing-plans': ElementsPricingPlans;
      'elements.stats': ElementsStats;
      'elements.theme': ElementsTheme;
    }
  }
}
