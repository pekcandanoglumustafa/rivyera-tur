import type { Metadata } from "next";
import TourDetail from "@/components/pages/TourDetail";
import { tours, getTour } from "@/data/tours";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — Fiyat & Program`,
    description: `${tour.tagline}. ${tour.description.slice(0, 130)}…`,
    alternates: {
      canonical: `/turlar/${slug}`,
      languages: { tr: `/turlar/${slug}`, en: `/en/turlar/${slug}`, de: `/de/turlar/${slug}` },
    },
    openGraph: { title: tour.name, description: tour.tagline, images: tour.image ? [tour.image] : undefined },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <TourDetail slug={slug} locale="tr" />;
}
