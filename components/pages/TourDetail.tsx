import Image from "next/image";
import { notFound } from "next/navigation";
import FAQ from "@/components/FAQ";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import { getTour, categories, CONTACT, toTL } from "@/data/tours";
import { getGallery } from "@/data/gallery";
import { T, type Locale } from "@/data/i18n";
import { translateTour, translatePhrase } from "@/data/tours-i18n";

const CAT_I18N: Record<string, Record<string, string>> = {
  macera: { en: "Adventure", de: "Abenteuer" },
  tekne: { en: "Boat Tours", de: "Bootstouren" },
  kultur: { en: "Culture & Sightseeing", de: "Kultur & Ausflüge" },
  aile: { en: "Family & Kids", de: "Familie & Kinder" },
  keyif: { en: "Relax & Spa", de: "Wellness & Spa" },
};

export default function TourDetail({ slug, locale }: { slug: string; locale: Locale }) {
  const tour = getTour(slug);
  if (!tour) notFound();
  const t = T[locale];
  const tr = translateTour(slug, locale);
  const name = tr?.name ?? tour.name;
  const tagline = tr?.tagline ?? tour.tagline;
  const desc = locale === "tr" ? tour.description : tr?.desc ?? tagline;
  const gallery = getGallery(slug);
  const cat = locale === "tr" ? categories[tour.category] : CAT_I18N[tour.category]?.[locale] ?? categories[tour.category];

  const waText = encodeURIComponent(
    locale === "tr"
      ? `Merhaba, "${name}" için rezervasyon yapmak istiyorum. Tarih ve kişi sayısı: `
      : `Hello, I would like to book "${name}". Date and number of people: `
  );
  const waLink = `${CONTACT.whatsapp}?text=${waText}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        name,
        description: desc,
        touristType: cat,
        provider: { "@type": "TravelAgency", name: "Sonnenklar Reisen Turizm", telephone: CONTACT.phoneIntl },
        ...(tour.price
          ? { offers: { "@type": "Offer", price: tour.price, priceCurrency: "EUR", availability: "https://schema.org/InStock" } }
          : {}),
      },
      ...(locale === "tr" && tour.faq.length
        ? [{
            "@type": "FAQPage",
            mainEntity: tour.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }]
        : []),
    ],
  };

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={`relative overflow-hidden bg-gradient-to-br ${tour.hue} text-white`}>
        {tour.image && <Image src={tour.image} alt={name} fill priority sizes="100vw" className="object-cover" />}
        {tour.image && <div className="absolute inset-0 bg-navy/60" aria-hidden />}
        <div className="relative mx-auto max-w-4xl px-4 py-16">
          <p className="mb-3 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-bold backdrop-blur">
            {cat} · {tour.duration} · {tour.days}
          </p>
          <h1 className="display text-4xl font-extrabold leading-tight md:text-5xl">{name}</h1>
          <p className="mt-3 max-w-xl text-lg text-white/90">{tagline}</p>
        </div>
      </header>

      <Gallery images={gallery} alt={name} />

      <div className="mx-auto grid max-w-4xl gap-10 px-4 py-12 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-lg leading-relaxed text-ink/85">{desc}</p>

          {locale === "tr" && (
            <>
              <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.highlights}</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {tour.highlights.map((h) => (
                  <li key={h} className="rounded-xl bg-turq-soft px-4 py-3 font-semibold text-navy">✓ {h}</li>
                ))}
              </ul>

              <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.program}</h2>
              <ol className="mt-4 space-y-0">
                {tour.program.map((p, i) => (
                  <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    <div className="flex flex-col items-center">
                      <span className="h-3 w-3 shrink-0 rounded-full bg-cta" />
                      {i < tour.program.length - 1 && <span className="w-px flex-1 bg-cta/30" />}
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wide text-deep">{p.time}</p>
                      <p className="text-ink/85">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </>
          )}

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.included}</h2>
          <ul className="mt-4 space-y-2">
            {tour.includes.map((inc) => (
              <li key={inc} className="text-ink/85">✓ {translatePhrase(inc, locale)}</li>
            ))}
          </ul>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">{t.faqTitle}</h2>
          <div className="mt-4">
            <FAQ items={locale === "tr" && tour.faq.length ? tour.faq : t.faq} />
          </div>
        </div>

        <aside className="h-fit md:sticky md:top-24">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/70">{t.perPerson}</p>
            <p className="flex items-baseline gap-2">
              {tour.oldPrice && <span className="text-lg font-semibold text-ink/50 line-through">€{tour.oldPrice}</span>}
              <span className="display text-3xl font-extrabold text-cta">
                {tour.price ? `€${tour.price}` : t.askPrice}
              </span>
            </p>
            {tour.price && <p className="text-sm font-semibold text-ink/75">≈ {toTL(tour.price)} ₺</p>}
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="mt-4 block rounded-full bg-[#25d366] py-3.5 text-center font-bold text-white hover:bg-[#1da851]"
            >
              {t.bookWhats}
            </a>
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="mt-2 block rounded-full bg-navy py-3.5 text-center font-bold text-white hover:bg-deep"
            >
              {t.callNow}: {CONTACT.phoneDisplay}
            </a>
            <p className="mt-3 text-center text-xs text-ink/75">{t.noPrepay}</p>
          </div>
        </aside>
      </div>

      <Reviews locale={locale} limit={3} />
    </article>
  );
}
