import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/data/tours";
import { categories, toTL } from "@/data/tours";
import { T, type Locale } from "@/data/i18n";
import { translateTour } from "@/data/tours-i18n";
import { getGallery } from "@/data/gallery";

const CAT_I18N: Record<string, Record<string, string>> = {
  macera: { en: "Adventure", de: "Abenteuer", ru: "Приключения", pl: "Przygoda" },
  tekne: { en: "Boat Tours", de: "Bootstouren", ru: "Морские туры", pl: "Rejsy" },
  kultur: { en: "Culture & Sightseeing", de: "Kultur & Ausflüge", ru: "Культура и экскурсии", pl: "Kultura i zwiedzanie" },
  aile: { en: "Family & Kids", de: "Familie & Kinder", ru: "Семья и дети", pl: "Rodzina i dzieci" },
  keyif: { en: "Relax & Spa", de: "Wellness & Spa", ru: "Отдых и спа", pl: "Relaks i spa" },
};

export default function TourCard({ tour, locale = "tr" }: { tour: Tour; locale?: Locale }) {
  const t = T[locale];
  const tr = translateTour(tour.slug, locale);
  const name = tr?.name ?? tour.name;
  const tagline = tr?.tagline ?? tour.tagline;
  const cat = locale === "tr" ? categories[tour.category] : CAT_I18N[tour.category]?.[locale] ?? categories[tour.category];
  const base = locale === "tr" ? "" : `/${locale}`;
  // Gerçek tur fotoğrafı varsa onu kullan, yoksa yedek görsel
  const cover = getGallery(tour.slug)[0] ?? tour.image;

  return (
    <Link
      href={`${base}/turlar/${tour.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-navy shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className={`relative aspect-[4/5] bg-gradient-to-br ${tour.hue}`}>
        {cover && (
          <Image
            src={cover}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="card-img object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy backdrop-blur">{cat}</span>
          {tour.popular && (
            <span className="rounded-full bg-cta px-3 py-1 text-xs font-bold text-white shadow-lg">{t.popular}</span>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            {tour.duration} · {tour.days}
          </span>
          <h3 className="display text-xl font-extrabold leading-tight drop-shadow-sm">{name}</h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/85">{tagline}</p>
          <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/80">{t.perPerson}</span>
            {tour.price ? (
              <span className="text-right">
                <span className="flex items-baseline justify-end gap-1.5">
                  {tour.oldPrice && (
                    <span className="text-sm font-semibold text-white/60 line-through">€{tour.oldPrice}</span>
                  )}
                  <span className="display text-xl font-extrabold">€{tour.price}</span>
                </span>
                <span className="block text-xs font-semibold text-white/85">{toTL(tour.price)} ₺</span>
              </span>
            ) : (
              <span className="display text-lg font-extrabold">{t.askPrice}</span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
