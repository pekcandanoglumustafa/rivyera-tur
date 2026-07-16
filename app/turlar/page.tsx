import type { Metadata } from "next";
import TourCard from "@/components/TourCard";
import { tours, categories } from "@/data/tours";

export const metadata: Metadata = {
  title: "Tüm Turlar — Antalya Günlük Gezi Turları",
  description:
    "Antalya, Side ve Manavgat çıkışlı tüm günlük turlar: rafting, tekne turları, jeep safari, Kapadokya, Pamukkale, hamam ve daha fazlası.",
  alternates: { canonical: "/turlar" },
};

export default function TurlarPage() {
  const keys = Object.keys(categories) as (keyof typeof categories)[];
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="display text-4xl font-extrabold text-navy">Tüm Turlar</h1>
      <p className="mt-2 max-w-xl text-ink/70">
        Otelden alma-bırakma dahil, ödemesi tur günü yapılan günlük geziler.
      </p>
      {keys.map((k) => {
        const list = tours.filter((t) => t.category === k);
        if (!list.length) return null;
        return (
          <section key={k} className="mt-12">
            <h2 className="display text-2xl font-extrabold text-navy">{categories[k]}</h2>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((t) => (
                <TourCard key={t.slug} tour={t} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
