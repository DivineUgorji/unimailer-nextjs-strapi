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
    backgroundColor: Schema.Attribute.Enumeration<['black', 'orange']>;
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
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

export interface ElementsStats extends Struct.ComponentSchema {
  collectionName: 'components_elements_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    description: Schema.Attribute.String;
    value: Schema.Attribute.String;
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
      'blocks.navigation-section': BlocksNavigationSection;
      'blocks.services-section': BlocksServicesSection;
      'blocks.stats-section': BlocksStatsSection;
      'blocks.trust-badges-section': BlocksTrustBadgesSection;
      'elements.button': ElementsButton;
      'elements.feature-card': ElementsFeatureCard;
      'elements.floating-icon': ElementsFloatingIcon;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.stats': ElementsStats;
      'elements.theme': ElementsTheme;
    }
  }
}
