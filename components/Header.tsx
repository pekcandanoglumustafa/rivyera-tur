import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/data/tours";
import { T, type Locale } from "@/data/i18n";
import LangSwitcher from "@/components/LangSwitcher";

export default function Header({ locale }: { locale: Locale }) {
  const t = T[locale];
  const base = locale === "tr" ? "" : `/${locale}`;
  return (
    <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href={base || "/"} className="flex shrink-0 items-center" aria-label="Sonnenklar Reisen Turizm">
          <span className="rounded-lg bg-white px-2.5 py-1.5">
            <Image src="/logo.png" alt="Sonnenklar Reisen Turizm" width={132} height={33} priority />
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium lg:flex">
          <Link href={`${base}/turlar`} className="hover:text-white/70">{t.navTours}</Link>
          <Link href={`${base || "/"}#populer`} className="hover:text-white/70">{t.navPopular}</Link>
          <Link href={`${base || "/"}#sss`} className="hover:text-white/70">{t.navFaq}</Link>
          <Link href={`${base}/iletisim`} className="hover:text-white/70">{t.navContact}</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phoneIntl}`}
            className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10 xl:block"
          >
            {CONTACT.phoneDisplay}
          </a>
          <LangSwitcher locale={locale} />
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-[#25d366] px-4 py-2 text-sm font-bold text-white hover:bg-[#1da851]"
          >
            {t.book}
          </a>
        </div>
      </div>
    </header>
  );
}
