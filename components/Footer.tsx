import Link from "next/link";
import Image from "next/image";
import { CONTACT, tours } from "@/data/tours";
import { T, type Locale } from "@/data/i18n";
import { translateTour } from "@/data/tours-i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = T[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  const populer = tours.filter((x) => x.popular).slice(0, 6);
  return (
    <footer className="mt-20 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <span className="inline-block rounded-lg bg-white px-3 py-2">
            <Image src="/logo.png" alt="Sonnenklar Reisen Turizm" width={150} height={37} />
          </span>
          <p className="mt-3 max-w-xs text-sm text-white/85">{t.footerText}</p>
          <p className="mt-4 text-sm text-white/85">{CONTACT.address}</p>
        </div>
        <div>
          <p className="mb-3 font-bold">{t.footerPopular}</p>
          <ul className="space-y-2 text-sm text-white/85">
            {populer.map((x) => (
              <li key={x.slug}>
                <Link href={`${base}/turlar/${x.slug}`} className="hover:text-white">
                  {translateTour(x.slug, locale)?.name ?? x.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold">{t.footerBooking}</p>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <a href={`tel:${CONTACT.phoneIntl}`} className="hover:text-white">{CONTACT.phoneDisplay}</a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="font-semibold text-[#4ade80] hover:text-[#25d366]">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener" className="hover:text-white">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/75">
        © {new Date().getFullYear()} Sonnenklar Reisen Turizm · TÜRSAB 9030
      </div>
    </footer>
  );
}
