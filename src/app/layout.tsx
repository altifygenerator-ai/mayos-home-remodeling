// src/app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),

  title: {
    default:
      "Mayos Home Remodeling LLC | Home Remodeling & Repairs in Hot Springs, AR",
    template: "%s | Mayos Home Remodeling LLC",
  },

  description: site.description,

  keywords: [
    "home remodeling Hot Springs AR",
    "home repairs Hot Springs AR",
    "home improvement Hot Springs Arkansas",
    "remodeling contractor Hot Springs",
    "flooring Hot Springs AR",
    "drywall repair Hot Springs AR",
    "carpentry Hot Springs AR",
    "gutter installation Hot Springs AR",
    "kitchen remodel Hot Springs AR",
    "renovations Hot Springs Arkansas",
  ],

  openGraph: {
    title:
      "Mayos Home Remodeling LLC | Home Remodeling & Repairs in Hot Springs, AR",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },

  alternates: {
    canonical: site.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en">
  <body>
    {children}
    <Analytics />
  </body>
</html>
  );
}