import Link from "next/link";
import Image from "next/image";
import type { Tour } from "@/data/tours";
import { categories } from "@/data/tours";

/** Büyük, sinematik tur kartı — fotoğraf öne çıkar, altta koyu degrade üzerinde başlık */
export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/turlar/${tour.slug}`}
      className="group relative block overflow-hidden rounded-3xl bg-navy shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Görsel katmanı */}
      <div className={`relative aspect-[4/5] bg-gradient-to-br ${tour.hue}`}>
        {tour.image && (
          <Image
            src={tour.image}
            alt={tour.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="card-img object-cover"
          />
        )}
        {/* Okunabilirlik için alttan koyu degrade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

        {/* Üst etiketler */}
        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-4">
          <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-navy backdrop-blur">
            {categories[tour.category]}
          </span>
          {tour.popular && (
            <span className="rounded-full bg-cta px-3 py-1 text-xs font-bold text-white shadow-lg">
              Popüler
            </span>
          )}
        </div>

        {/* Alt içerik */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <span className="mb-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur">
            {tour.duration} · {tour.days}
          </span>
          <h3 className="display text-xl font-extrabold leading-tight drop-shadow-sm">
            {tour.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-white/85">{tour.tagline}</p>

          <div className="mt-4 flex items-center justify-between border-t border-white/20 pt-3">
            <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
              Kişi başı
            </span>
            <span className="flex items-center gap-2">
              <span className="flex items-baseline gap-1.5">
                {tour.oldPrice && (
                  <span className="text-sm font-semibold text-white/60 line-through">
                    €{tour.oldPrice}
                  </span>
                )}
                <span className="display text-xl font-extrabold">
                  {tour.price ? `€${tour.price}` : "Fiyat Sor"}
                </span>
              </span>
              <span className="rounded-full bg-cta px-3 py-1.5 text-xs font-bold text-white transition group-hover:bg-cta-dark">
                İncele →
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
