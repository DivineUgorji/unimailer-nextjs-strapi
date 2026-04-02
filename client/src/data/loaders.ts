import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const BLOG_PAGE_SIZE = 3;

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

export async function getContent(
  path: string,
  featured?: boolean,
  query?: string,
  page?: string,
) {
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);

  url.search = qs.stringify({
    sort: ["createdAt:desc"],
    filters: {
      $or: [
        { title: { $contains: query } },
        { description: { contains: query } },
      ],
      ...(featured && { featured: { $eq: featured } }),
    },
    pagination: {
      pageSize: BLOG_PAGE_SIZE,
      page: parseInt(page || "1"),
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

const blogPopulate = {
  blocks: {
    on: {
      "blocks.subscribe": {
        populate: true,
      },
      "blocks.heading": {
        populate: true,
      },
      "blocks.paragraph-with-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
      "blocks.paragraph": {
        populate: true,
      },
      "blocks.full-image": {
        populate: {
          image: {
            fields: ["url", "alternativeText"],
          },
        },
      },
    },
  },
};

export async function getContentBySlug(slug: string, path: string) {
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = qs.stringify({
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: {
        fields: ["url", "alternativeText"],
      },
      ...blogPopulate,
    },
  });

  return fetchAPI(url.href, { method: "GET" });
}

///////////////////////////////
//About page
////////////////////////////
const aboutPageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.aboutpage-hero-section": {
          populate: {
            theme: true,
            image: {
              fields: ["url", "alternativeText"],
            },
          },
        },

        "blocks.about-team-section": {
          populate: {
            theme: true,
            teamMembers: {
              populate: {
                image: {
                  fields: ["url", "alternativeText"],
                },
                teamMemberAttribute: true,
              },
            },
          },
        },

        "blocks.about-team-summary-section": {
          populate: {
            theme: true,
            image: {
              fields: ["url", "alternativeText"],
            },
            attributeCard: true,
          },
        },

        "blocks.why-choose-us": {
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
      },
    },
  },
});

export async function getAboutPage() {
  const path = "/api/about-page";
  const BASE_URL = getStrapiURL();
  const url = new URL(path, BASE_URL);
  url.search = aboutPageQuery;

  return await fetchAPI(url.href, { method: "GET" });
}
