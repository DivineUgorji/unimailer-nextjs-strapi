import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutTeamSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_team_sections';
  info: {
    displayName: 'About team section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    teamMembers: Schema.Attribute.Component<'elements.team-members-card', true>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksAboutTeamSummarySection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_team_summary_sections';
  info: {
    displayName: 'About team summary section';
  };
  attributes: {
    attributeCard: Schema.Attribute.Component<
      'elements.team-member-attribute',
      true
    >;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    summary: Schema.Attribute.Text;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksAboutpageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_aboutpage_hero_sections';
  info: {
    displayName: 'About hero section';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksContentGridSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_grid_sections';
  info: {
    displayName: 'Content grid section';
  };
  attributes: {
    content: Schema.Attribute.Component<'elements.content-post', true>;
    contentCta: Schema.Attribute.Component<'elements.button', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksFeaturedArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_articles';
  info: {
    displayName: 'Featured Article';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    excerpt: Schema.Attribute.RichText;
    headline: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

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

export interface BlocksFullImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_full_images';
  info: {
    displayName: 'Full image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    linkId: Schema.Attribute.String;
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

export interface BlocksHomepageCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_homepage_ctas';
  info: {
    displayName: 'Homepage cta';
  };
  attributes: {
    floatingIcon: Schema.Attribute.Component<'elements.floating-icon', false>;
    homeCtaButton: Schema.Attribute.Component<'elements.button', false>;
    text: Schema.Attribute.String;
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

export interface BlocksParagraph extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraphs';
  info: {
    displayName: 'Paragraph';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface BlocksParagraphWithImage extends Struct.ComponentSchema {
  collectionName: 'components_blocks_paragraph_with_images';
  info: {
    displayName: 'Paragraph with image';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    imageLandscape: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
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

export interface BlocksScrollBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_scroll_banner_sections';
  info: {
    displayName: 'Scroll banner section';
  };
  attributes: {
    items: Schema.Attribute.Component<'elements.highlight-items', true>;
    speed: Schema.Attribute.Integer;
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

export interface BlocksShowcaseSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_showcase_sections';
  info: {
    displayName: 'Showcase section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    scrollingCards: Schema.Attribute.Component<
      'elements.scrolling-cards',
      true
    >;
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

export interface BlocksSubscribe extends Struct.ComponentSchema {
  collectionName: 'components_blocks_subscribes';
  info: {
    displayName: 'Subscribe';
  };
  attributes: {
    buttonText: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface BlocksTeamMemberCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_team_member_cards';
  info: {
    displayName: 'team member card';
  };
  attributes: {
    achievements: Schema.Attribute.RichText;
    certifications: Schema.Attribute.RichText;
    education: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    workExperience: Schema.Attribute.RichText;
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

export interface BlocksTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials_sections';
  info: {
    displayName: 'Testimonials section';
  };
  attributes: {
    floatingIcon: Schema.Attribute.Component<'elements.floating-icon', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    testimonial: Schema.Attribute.Text;
    TestimonialCta: Schema.Attribute.Component<'elements.button', false>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksTrustBadgesSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_trust_badges_sections';
  info: {
    displayName: 'Trust badges section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface BlocksWhyChooseUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_choose_uses';
  info: {
    displayName: 'Why choose us';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-card', true>;
    heading: Schema.Attribute.String;
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

export interface ElementsContentPost extends Struct.ComponentSchema {
  collectionName: 'components_elements_content_posts';
  info: {
    displayName: 'content post';
  };
  attributes: {
    excerpt: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
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

export interface ElementsFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_elements_footer_columns';
  info: {
    displayName: 'footerColumn';
  };
  attributes: {
    footerLinks: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsHighlightItems extends Struct.ComponentSchema {
  collectionName: 'components_elements_highlight_items';
  info: {
    displayName: 'highlightItems';
    icon: 'chartPie';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
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

export interface ElementsScrollingCards extends Struct.ComponentSchema {
  collectionName: 'components_elements_scrolling_cards';
  info: {
    displayName: 'scrollingCards';
  };
  attributes: {
    direction: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    images: Schema.Attribute.Media<'images', true>;
    speed: Schema.Attribute.Integer;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    platform: Schema.Attribute.Enumeration<
      ['x', 'facebook', 'instagram', 'linkedin']
    >;
    url: Schema.Attribute.String;
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

export interface ElementsTeamMemberAttribute extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_member_attributes';
  info: {
    displayName: 'attributeCard';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface ElementsTeamMembersCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_team_members_cards';
  info: {
    displayName: 'team members card';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    role: Schema.Attribute.String;
    teamMemberAttribute: Schema.Attribute.Component<
      'elements.team-member-attribute',
      true
    >;
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

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    copyright: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    footerColumns: Schema.Attribute.Component<'elements.footer-column', true>;
    footerLogo: Schema.Attribute.Component<'elements.logo', false>;
    socialLinks: Schema.Attribute.Component<'elements.social-link', true>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    links: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navCta: Schema.Attribute.Component<'elements.button', false>;
    theme: Schema.Attribute.Component<'elements.theme', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-team-section': BlocksAboutTeamSection;
      'blocks.about-team-summary-section': BlocksAboutTeamSummarySection;
      'blocks.aboutpage-hero-section': BlocksAboutpageHeroSection;
      'blocks.content-grid-section': BlocksContentGridSection;
      'blocks.featured-article': BlocksFeaturedArticle;
      'blocks.features-section': BlocksFeaturesSection;
      'blocks.full-image': BlocksFullImage;
      'blocks.heading': BlocksHeading;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.homepage-cta': BlocksHomepageCta;
      'blocks.investment-section': BlocksInvestmentSection;
      'blocks.navigation-section': BlocksNavigationSection;
      'blocks.paragraph': BlocksParagraph;
      'blocks.paragraph-with-image': BlocksParagraphWithImage;
      'blocks.pricing-section': BlocksPricingSection;
      'blocks.process-section': BlocksProcessSection;
      'blocks.scroll-banner-section': BlocksScrollBannerSection;
      'blocks.services-section': BlocksServicesSection;
      'blocks.showcase-section': BlocksShowcaseSection;
      'blocks.stats-section': BlocksStatsSection;
      'blocks.subscribe': BlocksSubscribe;
      'blocks.team-member-card': BlocksTeamMemberCard;
      'blocks.team-section': BlocksTeamSection;
      'blocks.testimonials-section': BlocksTestimonialsSection;
      'blocks.trust-badges-section': BlocksTrustBadgesSection;
      'blocks.why-choose-us': BlocksWhyChooseUs;
      'elements.button': ElementsButton;
      'elements.content-post': ElementsContentPost;
      'elements.feature-card': ElementsFeatureCard;
      'elements.floating-icon': ElementsFloatingIcon;
      'elements.footer-column': ElementsFooterColumn;
      'elements.highlight-items': ElementsHighlightItems;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
      'elements.plans': ElementsPlans;
      'elements.pricing-feature': ElementsPricingFeature;
      'elements.pricing-plans': ElementsPricingPlans;
      'elements.scrolling-cards': ElementsScrollingCards;
      'elements.social-link': ElementsSocialLink;
      'elements.stats': ElementsStats;
      'elements.team-member-attribute': ElementsTeamMemberAttribute;
      'elements.team-members-card': ElementsTeamMembersCard;
      'elements.theme': ElementsTheme;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
