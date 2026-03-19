import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.hero-section": {
          populate: {
            theme: true,
            image: {
              fields: ["url", "alternativeText"],
            },
            cta: true,
          },
        },

        "blocks.trust-badges-section": {
          populate: {
            theme: true,
            images: {
              fields: ["url", "alternativeText"],
            },
          },
        },

        "blocks.features-section": {
          populate: {
            theme: true,
            features: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },

        "blocks.stats-section": {
          populate: {
            theme: true,
            image: {
              fields: ["url", "alternativeText"],
            },
            stats: { fields: ["subheading", "description"] },
          },
        },

        "blocks.services-section": {
          populate: {
            theme: true,
            features: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                link: true,
              },
            },
            floatingIcon: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },

        "blocks.investment-section": {
          populate: {
            theme: true,
            image: {
              fields: ["url", "alternativeText"],
            },
            investmentCta: true,
          },
        },

        "blocks.process-section": {
          populate: {
            theme: true,
            steps: {
              fields: ["stepCount", "subheading", "description"],
            },
          },
        },

        "blocks.team-section": {
          populate: {
            theme: true,
            teamCard: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            teamSectionCta: true,
          },
        },

        "blocks.pricing-section": {
          populate: {
            theme: true,
            plans: {
              populate: {
                pricingCta: true,
                features: true,
                themeVariant: true,
              },
            },
          },
        },

        "blocks.showcase-section": {
          populate: {
            theme: true,
            image: {
              fields: ["url", "alternativeText"],
            },
            scrollingCards: {
              populate: {
                images: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },

        "blocks.testimonials-section": {
          populate: {
            theme: true,
            image: {
              fields: ["url", "alternativeText"],
            },
            floatingIcon: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
            TestimonialCta: true,
          },
        },

        "blocks.scroll-banner-section": {
          populate: {
            theme: true,
            items: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },

        "blocks.content-grid-section": {
          populate: {
            theme: true,
            contentCta: true,
            content: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },

        "blocks.homepage-cta": {
          populate: {
            theme: true,
            homeCtaButton: true,
            floatingIcon: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
              },
            },
          },
        },
      },
    },
  },
});

export default async function getHomePage() {
  const path = "/api/home-page";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = homePageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}

const pageBySlugQuery = (slug: string) =>
  qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      blocks: {
        on: {
          "blocks.hero-section": {
            populate: {
              theme: true,
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
            },
          },

          "blocks.featured-article": {
            populate: {
              image: {
                fields: ["url", "alternativeText"],
              },
              cta: true,
              theme: true,
            },
          },

          "blocks.subscribe": {
            populate: true,
          },
        },
      },
    },
  });

export async function getPageBySlug(slug: string) {
  const path = "/api/pages";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = pageBySlugQuery(slug);
  console.log("FULL URL:", url.href);
  return await fetchAPI(url.href, { method: "GET" });
}

const globalSettingQuery = qs.stringify({
  populate: {
    header: {
      populate: {
        theme: true,
        logo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        links: true,
        navCta: true,
      },
    },
    footer: {
      populate: {
        theme: true,
        footerLogo: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        socialLinks: {
          populate: {
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },
        footerColumns: {
          populate: {
            footerLinks: true,
          },
        },
      },
    },
  },
});

export async function getGlobalSettings() {
  const path = "/api/global";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = globalSettingQuery;
  return fetchAPI(url.href, { method: "GET" });
}
