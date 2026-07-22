import type { Metadata } from "next";
import ToursPage from "@/components/pages/ToursPage";
import type { Locale } from "@/data/i18n";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = locale === "de"
    ? { title: "Alle Touren — Tagesausflüge in Antalya", desc: "Alle Tagesausflüge ab Antalya, Side und Manavgat: Rafting, Bootstouren, Jeep-Safari, Quad, Kappadokien, Pamukkale und mehr." }
    : { title: "All Tours — Daily Excursions in Antalya", desc: "All daily tours from Antalya, Side and Manavgat: rafting, boat trips, jeep safari, quad, Cappadocia, Pamukkale and more." };
  return {
    title: t.title,
    description: t.desc,
    alternates: { canonical: `/${locale}/turlar`, languages: { tr: "/turlar", en: "/en/turlar", de: "/de/turlar" } },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <ToursPage locale={locale} />;
}
