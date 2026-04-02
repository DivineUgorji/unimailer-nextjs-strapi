export function getStrapiURL() {
  // return process.env.STRAPI_API_URL;
  return process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337";
}

// ?? "http://localhost:1337"
