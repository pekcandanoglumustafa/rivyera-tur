import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FAQ from "@/components/FAQ";
import { tours, getTour, categories, CONTACT } from "@/data/tours";

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  return {
    title: `${tour.name} — Fiyat & Program`,
    description: `${tour.tagline}. ${tour.description.slice(0, 130)}…`,
    alternates: { canonical: `/turlar/${tour.slug}` },
    openGraph: { title: tour.name, description: tour.tagline },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();

  const waText = encodeURIComponent(
    `Merhaba, "${tour.name}" için rezervasyon yapmak istiyorum. Tarih ve kişi sayısı: `
  );
  const waLink = `${CONTACT.whatsapp}?text=${waText}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        name: tour.name,
        description: tour.description,
        touristType: categories[tour.category],
        provider: { "@type": "TravelAgency", name: "Rivyera Tur", telephone: CONTACT.phoneIntl },
        ...(tour.price
          ? {
              offers: {
                "@type": "Offer",
                price: tour.price,
                priceCurrency: "TRY",
                availability: "https://schema.org/InStock",
              },
            }
          : {}),
      },
      {
        "@type": "FAQPage",
        mainEntity: tour.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Başlık bloğu */}
      <header className={`relative overflow-hidden bg-gradient-to-br ${tour.hue} text-white`}>
        {tour.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tour.image}
            alt={tour.name}
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
        )}
        {tour.image && <div className="absolute inset-0 bg-navy/55" aria-hidden />}
        <div className="relative mx-auto max-w-4xl px-4 py-16">
          <p className="mb-3 inline-block rounded-full bg-white/15 px-4 py-1 text-sm font-bold">
            {categories[tour.category]} · {tour.duration} · {tour.days}
          </p>
          <h1 className="display text-4xl font-extrabold leading-tight md:text-5xl">
            {tour.name}
          </h1>
          <p className="mt-3 max-w-xl text-lg text-white/85">{tour.tagline}</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-4xl gap-10 px-4 py-12 md:grid-cols-[1fr_280px]">
        <div>
          <p className="text-lg leading-relaxed text-ink/85">{tour.description}</p>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">Öne Çıkanlar</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {tour.highlights.map((h) => (
              <li key={h} className="rounded-xl bg-turq-soft px-4 py-3 font-semibold text-navy">
                ✓ {h}
              </li>
            ))}
          </ul>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">Tur Programı</h2>
          <ol className="mt-4 space-y-0">
            {tour.program.map((p, i) => (
              <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                <div className="flex flex-col items-center">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-turq" />
                  {i < tour.program.length - 1 && <span className="w-px flex-1 bg-turq/30" />}
                </div>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-turq">{p.time}</p>
                  <p className="text-ink/85">{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="display mt-10 text-2xl font-extrabold text-navy">Fiyata Dahil</h2>
          <ul className="mt-4 space-y-2">
            {tour.includes.map((inc) => (
              <li key={inc} className="text-ink/85">✓ {inc}</li>
            ))}
          </ul>

          {tour.faq.length > 0 && (
            <>
              <h2 className="display mt-10 text-2xl font-extrabold text-navy">
                Sık Sorulanlar
              </h2>
              <div className="mt-4">
                <FAQ items={tour.faq} />
              </div>
            </>
          )}
        </div>

        {/* Rezervasyon kutusu */}
        <aside className="h-fit md:sticky md:top-24">
          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">Kişi başı</p>
            <p className="display text-3xl font-extrabold text-navy">
              {tour.price ? `${tour.price.toLocaleString("tr-TR")} ₺` : "Fiyat Sor"}
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="mt-4 block rounded-full bg-cta py-3.5 text-center font-bold text-white hover:bg-cta-dark"
            >
              WhatsApp&apos;tan Rezervasyon
            </a>
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="mt-2 block rounded-full bg-navy py-3.5 text-center font-bold text-white hover:bg-deep"
            >
              Ara: {CONTACT.phoneDisplay}
            </a>
            <p className="mt-3 text-center text-xs text-ink/60">
              Ön ödeme yok · Ödeme tur günü · Ücretsiz otel transferi
            </p>
          </div>
        </aside>
      </div>
    </article>
  );
}
