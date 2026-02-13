import qs from "qs";
import { fetchAPI } from "@/utils/fetch-api";
import { getStrapiURL } from "@/utils/get-strapi-url";

const homePageQuery = qs.stringify({
  populate: {
    blocks: {
      on: {
        "blocks.navigation-section": {
          populate: {
            theme: true,
            logo: {
              populate: { image: { fields: ["url", "alternativeText"] } },
            },
            links: true,
            navCta: true,
          },
        },

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
            stats: { fields: ["value", "description"] },
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
