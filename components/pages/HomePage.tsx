import Link from "next/link";
import Image from "next/image";
import TourCard from "@/components/TourCard";
import Reveal from "@/components/Reveal";
import FAQ from "@/components/FAQ";
import Reviews from "@/components/Reviews";
import { tours, CONTACT, toTL } from "@/data/tours";
import { T, type Locale } from "@/data/i18n";
import { translateTour } from "@/data/tours-i18n";

export default function HomePage({ locale }: { locale: Locale }) {
  const t = T[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  const enCokSatan = ["quad-safari", "buggy-safari", "koprulu-kanyon-rafting"];
  const populerler = ["manavgat-tekne-turu", "yesil-kanyon-tekne-turu", "legends-gece-gosterisi"];
  const pick = (list: string[]) => list.map((s) => tours.find((x) => x.slug === s)!).filter(Boolean);
  const bestSellers = pick(enCokSatan);
  const populer = pick(populerler);
  const digerleri = tours.filter((x) => ![...enCokSatan, ...populerler].includes(x.slug));
  const strip = ["Rafting", "Jeep Safari", "Quad Safari", "Buggy Safari", "Kapadokya", "Pamukkale"];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/turlar/korsan-teknesi.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            quality={75}
            className="kenburns object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/65 via-transparent to-navy/15" />
        </div>
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="blob-a absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
            style={{ background: "radial-gradient(circle, #ff622b 0%, transparent 65%)" }}
          />
          <div
            className="blob-b absolute -bottom-32 left-1/3 h-[360px] w-[360px] rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #ffd166 0%, transparent 65%)" }}
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <div className="mb-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-navy shadow-lg">
              <span className="display text-base font-extrabold text-cta">4.9</span>
              <span className="text-cta" aria-hidden>★★★★★</span>
              <span className="text-ink/75">Google</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cta px-3.5 py-1.5 text-sm font-bold text-white shadow-lg">
              ✔ {t.badgeAgency}
            </span>
          </div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-sm font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-white" /> {t.heroBadge}
          </p>
          <h1 className="display max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            {t.heroTitle1} <span className="gradient-text">{t.heroTitle2}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/85">{t.heroText}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`${base}/turlar`}
              className="pulse rounded-full bg-cta px-7 py-3.5 font-bold text-white shadow-lg shadow-cta/30 transition hover:-translate-y-0.5 hover:bg-cta-dark"
            >
              {t.ctaBook}
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-[#25d366] px-7 py-3.5 font-bold text-white hover:bg-[#1da851]"
            >
              {t.ctaWhats}
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/85 sm:grid-cols-4">
            {[t.trust1, t.trust2, t.trust3, t.trust4].map((x) => (
              <span key={x} className="flex items-center gap-2">
                <span className="text-white">✔</span> {x}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-14 overflow-hidden" aria-hidden>
          <svg className="wave absolute bottom-0 h-14 w-[200%]" viewBox="0 0 2880 60" preserveAspectRatio="none" fill="#ffffff">
            <path d="M0,30 C240,55 480,5 720,30 C960,55 1200,5 1440,30 C1680,55 1920,5 2160,30 C2400,55 2640,5 2880,30 L2880,60 L0,60 Z" />
          </svg>
        </div>
      </section>

      {/* KAYAN ŞERİT */}
      <div className="overflow-hidden border-y-2 border-navy/10 bg-white py-3 text-navy" aria-hidden>
        <div className="marquee-track gap-8 px-4 text-sm font-extrabold uppercase tracking-widest">
          {[0, 1].map((k) => (
            <span key={k} className="flex shrink-0 gap-8">
              {strip.map((x) => (
                <span key={x} className="flex items-center gap-8">
                  {x} <span className="text-cta">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* POPÜLER TURLAR */}
      <section id="populer" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-deep">{t.bestSellers}</p>
            <h2 className="display mt-1 text-3xl font-extrabold text-navy md:text-4xl">{t.bestSellersTitle}</h2>
          </div>
          <Link href={`${base}/turlar`} className="hidden font-semibold text-deep hover:underline md:block">
            {t.seeAll} →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((x, i) => (
            <Reveal key={x.slug} delay={(i % 3) as 0 | 1 | 2}>
              <TourCard tour={x} locale={locale} />
            </Reveal>
          ))}
        </div>

        <h2 className="display mt-14 text-3xl font-extrabold text-navy md:text-4xl">{t.popularTours}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {populer.map((x, i) => (
            <Reveal key={x.slug} delay={(i % 3) as 0 | 1 | 2}>
              <TourCard tour={x} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* GÜVEN ŞERİDİ */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            [t.strip1Title, t.strip1Text],
            [t.strip2Title, t.strip2Text],
            [t.strip3Title, t.strip3Text],
          ].map(([a, b]) => (
            <div key={a} className="rounded-2xl bg-navy p-6 text-white">
              <p className="display text-lg font-bold text-white">{a}</p>
              <p className="mt-1 text-sm text-white/85">{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEDEN BİZ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="display text-3xl font-extrabold text-navy md:text-4xl">{t.whyTitle}</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              [t.why1Title, t.why1Text],
              [t.why2Title, t.why2Text],
              [t.why3Title, t.why3Text],
            ].map(([a, b]) => (
              <div key={a}>
                <p className="display text-xl font-bold text-navy">{a}</p>
                <p className="mt-2 text-ink/75">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TÜM TURLAR */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="display text-3xl font-extrabold text-navy md:text-4xl">{t.allTours}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {digerleri.map((x, i) => (
            <Reveal key={x.slug} delay={(i % 3) as 0 | 1 | 2}>
              <TourCard tour={x} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>

      <Reviews locale={locale} />

      {/* SSS */}
      <section id="sss" className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="display text-center text-3xl font-extrabold text-navy md:text-4xl">{t.faqTitle}</h2>
        <div className="mt-8">
          <FAQ items={t.faq} />
        </div>
      </section>

      {/* SON CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-3xl bg-navy p-10 text-center text-white md:p-14">
          <h2 className="display text-3xl font-extrabold md:text-4xl">{t.finalTitle}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/85">{t.finalText}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-[#25d366] px-7 py-3.5 font-bold text-white hover:bg-[#1da851]"
            >
              WhatsApp: {CONTACT.phoneDisplay}
            </a>
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="rounded-full border border-white/25 px-7 py-3.5 font-bold hover:bg-white/10"
            >
              {t.callNow}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
