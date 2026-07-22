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
  ru: {
    title: "Sonnenklar Reisen | Экскурсии в Анталье — рафтинг, лодки, сафари",
    desc: "Однодневные экскурсии из Антальи, Сиде и Манавгата: рафтинг, морские прогулки, джип- и квадро-сафари, Каппадокия и Памуккале. Бесплатный трансфер, оплата в день тура.",
  },
  pl: {
    title: "Sonnenklar Reisen | Wycieczki w Antalyi — rafting, rejsy, safari",
    desc: "Wycieczki jednodniowe z Antalyi, Side i Manavgat: rafting, rejsy, jeep i quad safari, Kapadocja i Pamukkale. Darmowy transfer, płatność w dniu wycieczki.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const m = META[locale];
  return {
    title: m.title,
    description: m.desc,
    alternates: { canonical: `/${locale}`, languages: { tr: "/", en: "/en", de: "/de", ru: "/ru", pl: "/pl" } },
  };
}

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <HomePage locale={locale} />;
}
