// src/lib/schema.ts

import { site } from "@/data/site";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hot Springs",
      addressRegion: "AR",
      addressCountry: "US",
    },
    areaServed: [
      "Hot Springs, AR",
      "Hot Springs Village, AR",
      "Malvern, AR",
      "Bismarck, AR",
      "Garland County, AR",
    ],
    serviceType: [
      "Home Remodeling",
      "Home Repairs",
      "Home Improvement",
      "Flooring",
      "Drywall",
      "Carpentry",
      "Gutters",
      "Renovations",
    ],
    description: site.description,
  };
}