import Link from "next/link";
import type { Tour } from "@/data/tours";
import { categories } from "@/data/tours";

/** Bilet formunda tur kartı: üstte görsel/gradyan, altta kesik çizgili fiyat koçanı */
export default function TourCard({ tour }: { tour: Tour }) {
  return (
    <Link
      href={`/turlar/${tour.slug}`}
      className="group block overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className={`relative h-44 bg-gradient-to-br ${tour.hue}`}>
        {tour.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={tour.image} alt={tour.name} className="card-img h-full w-full object-cover" loading="lazy" />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-navy">
          {categories[tour.category]}
        </span>
        {tour.popular && (
          <span className="absolute right-3 top-3 rounded-full bg-cta px-3 py-1 text-xs font-bold text-white">
            Popüler
          </span>
        )}
        <span className="absolute bottom-3 left-3 rounded-full bg-navy/80 px-3 py-1 text-xs font-semibold text-white">
          {tour.duration} · {tour.days}
        </span>
      </div>
      <div className="p-4">
        <h3 className="display text-lg font-bold leading-snug text-navy group-hover:text-turq">
          {tour.name}
        </h3>
        <p className="mt-1 text-sm text-ink/70">{tour.tagline}</p>
      </div>
      <div className="perf ticket-notch flex items-center justify-between px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-wide text-ink/50">
          Kişi başı
        </span>
        <span className="display text-lg font-extrabold text-navy">
          {tour.price ? `${tour.price.toLocaleString("tr-TR")} ₺` : "Fiyat Sor"}
        </span>
      </div>
    </Link>
  );
}
