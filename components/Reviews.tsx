import { REVIEWS } from "@/data/reviews";
import { type Locale } from "@/data/i18n";

const TITLE: Record<string, string> = {
  tr: "Misafirlerimiz Ne Diyor?",
  en: "What Our Guests Say",
  de: "Was unsere Gäste sagen",
};
const SUB: Record<string, string> = {
  tr: "Google ve site yorumlarımızdan gerçek misafir görüşleri",
  en: "Real guest reviews from Google and our website",
  de: "Echte Gästebewertungen von Google und unserer Website",
};

function Stars({ n }: { n: number }) {
  return (
    <span className="text-cta" aria-label={`${n} / 5`}>
      {"★".repeat(n)}
      <span className="text-ink/25">{"★".repeat(5 - n)}</span>
    </span>
  );
}

export default function Reviews({ locale = "tr", limit = 6 }: { locale?: Locale; limit?: number }) {
  const list = REVIEWS.slice(0, limit);
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-turq-soft px-4 py-2">
            <span className="display text-2xl font-extrabold text-cta">4.9</span>
            <Stars n={5} />
            <span className="text-sm font-semibold text-ink/75">Google</span>
          </div>
          <h2 className="display text-3xl font-extrabold text-navy md:text-4xl">
            {TITLE[locale] ?? TITLE.tr}
          </h2>
          <p className="mt-2 text-ink/75">{SUB[locale] ?? SUB.tr}</p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((r) => (
            <figure key={r.name + r.text.slice(0, 12)} className="rounded-2xl bg-sand p-5 ring-1 ring-black/5">
              <div className="flex items-center justify-between">
                <figcaption className="font-bold text-navy">{r.name}</figcaption>
                <Stars n={r.rating} />
              </div>
              {r.tour && <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-ink/70">{r.tour}</p>}
              <blockquote className="mt-3 text-sm leading-relaxed text-ink/85">“{r.text}”</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
