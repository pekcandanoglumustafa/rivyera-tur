import type { Metadata } from "next";
import ToursPage from "@/components/pages/ToursPage";

export const metadata: Metadata = {
  title: "Tüm Turlar — Antalya Günlük Gezi Turları",
  description: "Antalya, Side ve Manavgat çıkışlı tüm günlük turlar: rafting, tekne turları, jeep safari, quad, buggy, Kapadokya, Pamukkale ve daha fazlası.",
  alternates: { canonical: "/turlar", languages: { tr: "/turlar", en: "/en/turlar", de: "/de/turlar" } },
};

export default function Page() {
  return <ToursPage locale="tr" />;
}
