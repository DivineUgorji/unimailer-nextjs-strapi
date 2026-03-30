import { getStrapiURL } from "@/utils/get-strapi-url";
const BASE_URL = process.env.STRAPI_API_URL ?? "http://localhost:1337";

export async function subscribeService(email: string) {
  const url = new URL("/api/newsletter-signups", BASE_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email,
        },
      }),
    });

    // return response.json();
    const data = await response.json();
    console.log("STRAPI RESPONSE STATUS:", response.status);
    console.log("STRAPI RESPONSE DATA:", JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.error("Subscribe Service Error:", error);
  }
}
/////////////////////////////
//Services subscribe this.props
////////////////////////////
export interface ServicesSubscribeProps {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  service: {
    connect: [string];
  };
}

export async function servicesSubscribeService(data: ServicesSubscribeProps) {
  const BASE_URL = getStrapiURL();
  const url = new URL("/api/service-signups", BASE_URL);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { ...data } }),
    });

    return await response.json();
  } catch (error) {
    console.error("Services Subscribe Service Error:", error);
  }
}
