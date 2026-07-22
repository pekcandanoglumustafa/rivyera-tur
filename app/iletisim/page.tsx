import type { Metadata } from "next";
import { CONTACT } from "@/data/tours";

export const metadata: Metadata = {
  title: "İletişim & Rezervasyon",
  description:
    "Sonnenklar Reisen Turizm rezervasyon hattı: 0507 658 42 45. WhatsApp'tan yazın, iki dakikada yerinizi ayırtalım.",
  alternates: { canonical: "/iletisim" },
};

export default function IletisimPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="display text-4xl font-extrabold text-navy">Rezervasyon & İletişim</h1>
      <p className="mx-auto mt-3 max-w-md text-ink/70">
        Form yok, üyelik yok. Tur adını, tarihi ve kişi sayısını yazın —
        dakikalar içinde dönüş yapalım.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener"
          className="w-full max-w-sm rounded-full bg-cta py-4 text-lg font-bold text-white hover:bg-cta-dark"
        >
          WhatsApp&apos;tan Yaz
        </a>
        <a
          href={`tel:${CONTACT.phoneIntl}`}
          className="w-full max-w-sm rounded-full bg-navy py-4 text-lg font-bold text-white hover:bg-deep"
        >
          Ara: {CONTACT.phoneDisplay}
        </a>
        <a
          href={CONTACT.instagram}
          target="_blank"
          rel="noopener"
          className="w-full max-w-sm rounded-full border-2 border-navy py-4 text-lg font-bold text-navy hover:bg-navy hover:text-white"
        >
          Instagram
        </a>
      </div>
      <p className="mt-10 text-sm text-ink/75">{CONTACT.address}</p>
    </div>
  );
}
