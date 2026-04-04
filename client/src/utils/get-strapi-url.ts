// export function getStrapiURL() {
//   // return process.env.STRAPI_API_URL;
//   return process.env.STRAPI_URL ?? "http://localhost:1337";
// }

export function getStrapiURL() {
  return (
    process.env.STRAPI_URL ??
    process.env.NEXT_PUBLIC_STRAPI_URL ??
    "http://localhost:1337"
  ).replace(/\/$/, "");
}
