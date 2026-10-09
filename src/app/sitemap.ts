import type { MetadataRoute } from "next";

const base = "https://www.mayosconstruction.com";
const paths = ["/", "/services/home-remodeling", "/services/flooring-drywall", "/locations/hot-springs-ar", "/locations/hot-springs-village-ar"];
export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({url: new URL(path, base).toString(), lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.7}));
}
