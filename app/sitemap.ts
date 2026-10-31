import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${site.url}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/polityka-prywatnosci`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${site.url}/regulamin`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
