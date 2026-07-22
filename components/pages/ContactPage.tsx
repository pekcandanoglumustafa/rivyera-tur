import { CONTACT } from "@/data/tours";
import { T, type Locale } from "@/data/i18n";

export default function ContactPage({ locale }: { locale: Locale }) {
  const t = T[locale];
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="display text-4xl font-extrabold text-navy">{t.contactTitle}</h1>
      <p className="mx-auto mt-3 max-w-md text-ink/75">{t.contactText}</p>
      <div className="mt-8 flex flex-col items-center gap-3">
        <a
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener"
          className="w-full max-w-sm rounded-full bg-[#25d366] py-4 text-lg font-bold text-white hover:bg-[#1da851]"
        >
          WhatsApp
        </a>
        <a
          href={`tel:${CONTACT.phoneIntl}`}
          className="w-full max-w-sm rounded-full bg-navy py-4 text-lg font-bold text-white hover:bg-deep"
        >
          {t.callNow}: {CONTACT.phoneDisplay}
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
      <p className="mt-1 text-xs text-ink/70">TÜRSAB 9030</p>
    </div>
  );
}
