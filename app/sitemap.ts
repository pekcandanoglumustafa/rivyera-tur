import type { MetadataRoute } from "next";
import { tours } from "@/data/tours";

const SITE = "https://sonnenklarreisen.com";
const LOCALES = ["", "/en", "/de"];

export default function sitemap(): MetadataRoute.Sitemap {
  const out: MetadataRoute.Sitemap = [];
  for (const l of LOCALES) {
    out.push({ url: `${SITE}${l || "/"}`, changeFrequency: "weekly", priority: 1 });
    out.push({ url: `${SITE}${l}/turlar`, changeFrequency: "weekly", priority: 0.9 });
    out.push({ url: `${SITE}${l}/iletisim`, changeFrequency: "monthly", priority: 0.6 });
    for (const t of tours) {
      out.push({ url: `${SITE}${l}/turlar/${t.slug}`, changeFrequency: "weekly", priority: 0.8 });
    }
  }
  return out;
}
