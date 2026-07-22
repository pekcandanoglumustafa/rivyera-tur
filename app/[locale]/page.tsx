import type { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import type { Locale } from "@/data/i18n";

const META: Record<string, { title: string; desc: string }> = {
  en: {
    title: "Sonnenklar Reisen | Antalya Tours — Rafting, Boat Trips, Safari",
    desc: "Daily tours from Antalya, Side and Manavgat: rafting, boat trips, jeep and quad safari, Cappadocia and Pamukkale. Free hotel pick-up, pay on the tour day.",
  },
  de: {
    title: "Sonnenklar Reisen | Ausflüge in Antalya — Rafting, Bootstouren, Safari",
    desc: "Tagesausflüge ab Antalya, Side und Manavgat: Rafting, Bootstouren, Jeep- und Quad-Safari, Kappadokien und Pamukkale. Kostenlose Abholung, Zahlung am Tourtag.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale];
  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: `/${locale}`, languages: { tr: "/", en: "/en", de: "/de" } },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
