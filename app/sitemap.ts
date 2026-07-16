import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";

const SITE = "https://rivyeratur.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE}/turlar`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE}/iletisim`, changeFrequency: "monthly", priority: 0.6 },
    ...tours.map((t) => ({
      url: `${SITE}/turlar/${t.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
