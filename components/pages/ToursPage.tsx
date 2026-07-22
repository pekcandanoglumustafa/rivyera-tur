import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import { T, type Locale } from "@/data/i18n";

export default function ToursPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  const sirali = [...tours].sort((a, b) => Number(b.popular ?? false) - Number(a.popular ?? false));
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="display text-4xl font-extrabold text-navy">{t.allTours}</h1>
      <p className="mt-2 max-w-xl text-ink/75">{t.allToursText}</p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sirali.map((x) => (
          <TourCard key={x.slug} tour={x} locale={locale} />
        ))}
      </div>
    </div>
  );
}
