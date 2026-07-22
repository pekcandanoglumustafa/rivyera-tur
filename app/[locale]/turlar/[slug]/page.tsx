import type { Metadata } from "next";
import TourDetail from "@/components/pages/TourDetail";
import { tours, getTour } from "@/data/tours";
import { translateTour } from "@/data/tours-i18n";
import type { Locale } from "@/data/i18n";

export function generateStaticParams() {
  return ["en", "de"].flatMap((locale) => tours.map((t) => ({ locale, slug: t.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  const tr = translateTour(slug, locale);
  const name = tr?.name ?? tour.name;
  const tagline = tr?.tagline ?? tour.tagline;
  return {
    title: `${name} — ${locale === "de" ? "Preis & Programm" : "Price & Itinerary"}`,
    description: `${tagline}. ${(tr?.desc ?? "").slice(0, 120)}`,
    alternates: {
      canonical: `/${locale}/turlar/${slug}`,
      languages: { tr: `/turlar/${slug}`, en: `/en/turlar/${slug}`, de: `/de/turlar/${slug}` },
    },
    openGraph: { title: name, description: tagline, images: tour.image ? [tour.image] : undefined },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: Locale; slug: string }> }) {
  const { locale, slug } = await params;
  return <TourDetail slug={slug} locale={locale} />;
}
