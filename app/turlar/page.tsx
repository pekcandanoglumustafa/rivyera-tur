import type { Metadata } from "next";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tüm Turlar — Antalya Günlük Gezi Turları",
  description:
    "Antalya, Side ve Manavgat çıkışlı tüm günlük turlar: rafting, tekne turları, jeep safari, Kapadokya, Pamukkale, hamam ve daha fazlası.",
  alternates: { canonical: "/turlar" },
};

export default function TurlarPage() {
  // Popülerler önce, sonra kalanlar — kategori ayrımı yok, tek akış
  const sirali = [...tours].sort((a, b) => Number(b.popular ?? false) - Number(a.popular ?? false));
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="display text-4xl font-extrabold text-navy">Tüm Turlar</h1>
      <p className="mt-2 max-w-xl text-ink/70">
        Otelden alma-bırakma dahil, ödemesi tur günü yapılan günlük geziler.
        Aşağı kaydırıp keşfetmeye başlayın.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sirali.map((t) => (
          <TourCard key={t.slug} tour={t} />
        ))}
      </div>
    </div>
  );
}
