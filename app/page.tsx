import Link from "next/link";
import TourCard from "@/components/TourCard";
import FAQ from "@/components/FAQ";
import { tours, CONTACT } from "@/data/tours";

const genelSSS = [
  {
    q: "Rezervasyon için ön ödeme gerekiyor mu?",
    a: "Hayır. WhatsApp veya telefonla yerinizi ayırtırsınız, ödemeyi tur günü yaparsınız.",
  },
  {
    q: "Otelden alma-bırakma her turda var mı?",
    a: "Evet, aksi belirtilmedikçe Side, Manavgat, Kumköy, Çolaklı, Evrenseki ve Kızılağaç bölgelerinden ücretsiz transfer dahildir. Diğer bölgeler için bize yazın.",
  },
  {
    q: "Tur iptal olursa ne oluyor?",
    a: "Hava koşulları nedeniyle iptal olan turlarda ücret tam iade edilir veya dilediğiniz başka bir güne alınır.",
  },
  {
    q: "Çocuklar için indirim var mı?",
    a: "0-6 yaş çoğu turda ücretsiz, 7-12 yaş indirimlidir. Tur sayfasındaki fiyatın detayını WhatsApp'tan sorabilirsiniz.",
  },
];

export default function Home() {
  const populer = tours.filter((t) => t.popular);
  const digerleri = tours.filter((t) => !t.popular).slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 80% at 80% 10%, #0ea5a4 0%, transparent 60%), radial-gradient(50% 60% at 10% 90%, #ff6b1a33 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-28">
          <p className="mb-4 inline-block rounded-full border border-turq/40 bg-turq/10 px-4 py-1 text-sm font-semibold text-turq">
            Antalya · Side · Manavgat · Belek · Alanya
          </p>
          <h1 className="display max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Antalya&apos;yı gezmenin
            <span className="text-turq"> en kestirme yolu.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/80">
            Rafting&apos;ten tekne turuna, Kapadokya&apos;dan Pamukkale&apos;ye — otelinden
            alıyoruz, gününü kurup geri bırakıyoruz. Ön ödeme yok, sürpriz
            masraf yok.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/turlar"
              className="rounded-full bg-cta px-7 py-3.5 font-bold text-white shadow-lg shadow-cta/30 hover:bg-cta-dark"
            >
              Turları İncele
            </Link>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-white/25 px-7 py-3.5 font-bold hover:bg-white/10"
            >
              WhatsApp&apos;tan Sor
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
            <span>✓ Otelden alma-bırakma dahil</span>
            <span>✓ Ödeme tur günü</span>
            <span>✓ Tüm turlar sigortalı</span>
          </div>
        </div>
      </section>

      {/* POPÜLER TURLAR */}
      <section id="populer" className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-turq">
              En çok satanlar
            </p>
            <h2 className="display mt-1 text-3xl font-extrabold text-navy md:text-4xl">
              Popüler Turlar
            </h2>
          </div>
          <Link href="/turlar" className="hidden font-semibold text-turq hover:underline md:block">
            Tümünü gör →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {populer.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
      </section>

      {/* NEDEN RİVYERA */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="display text-3xl font-extrabold text-navy md:text-4xl">
            Neden Rivyera Tur?
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="display text-xl font-bold text-navy">Yerli fiyat, yerli hizmet</p>
              <p className="mt-2 text-ink/70">
                Aracısız çalışıyoruz: otel rehberi komisyonu yok, turist fiyatı
                yok. Gördüğün fiyat, ödediğin fiyat.
              </p>
            </div>
            <div>
              <p className="display text-xl font-bold text-navy">WhatsApp&apos;tan iki dakikada</p>
              <p className="mt-2 text-ink/70">
                Form doldurmak yok. Yaz, saatini seç, yerini ayırt. Ödeme tur
                günü, iptal derdi yok.
              </p>
            </div>
            <div>
              <p className="display text-xl font-bold text-navy">Bölgeyi ezbere biliyoruz</p>
              <p className="mt-2 text-ink/70">
                Side ve Manavgat bizim mahallemiz. Hangi saatte hangi koy boş,
                hangi gün pazar kurulur — hepsi programda düşünülmüş.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DİĞER TURLAR */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="display text-3xl font-extrabold text-navy md:text-4xl">
          Keşfetmeye Devam Et
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {digerleri.map((t) => (
            <TourCard key={t.slug} tour={t} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/turlar"
            className="inline-block rounded-full bg-navy px-7 py-3.5 font-bold text-white hover:bg-deep"
          >
            Tüm Turları Gör ({tours.length})
          </Link>
        </div>
      </section>

      {/* SSS */}
      <section id="sss" className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="display text-center text-3xl font-extrabold text-navy md:text-4xl">
          Sık Sorulan Sorular
        </h2>
        <div className="mt-8">
          <FAQ items={genelSSS} />
        </div>
      </section>

      {/* SON CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="rounded-3xl bg-navy p-10 text-center text-white md:p-14">
          <h2 className="display text-3xl font-extrabold md:text-4xl">
            Tatil planı iki dakika sürer.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-white/75">
            Hangi güne, kaç kişi, hangi tur — yaz yeter. Gerisini biz kurarız.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener"
              className="rounded-full bg-cta px-7 py-3.5 font-bold hover:bg-cta-dark"
            >
              WhatsApp: {CONTACT.phoneDisplay}
            </a>
            <a
              href={`tel:${CONTACT.phoneIntl}`}
              className="rounded-full border border-white/25 px-7 py-3.5 font-bold hover:bg-white/10"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
