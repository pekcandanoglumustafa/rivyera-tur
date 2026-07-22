import Link from "next/link";
import Image from "next/image";
import { CONTACT } from "@/data/tours";
import LangSwitcher from "@/components/LangSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center" aria-label="Sonnenklar Reisen Turizm ana sayfa">
          <span className="rounded-lg bg-white px-2.5 py-1.5">
            <Image src="/logo.png" alt="Sonnenklar Reisen Turizm" width={132} height={33} priority />
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/turlar" className="hover:text-white/85">Turlar</Link>
          <Link href="/#populer" className="hover:text-white/85">Popüler</Link>
          <Link href="/#sss" className="hover:text-white/85">S.S.S.</Link>
          <Link href="/iletisim" className="hover:text-white/85">İletişim</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={`tel:${CONTACT.phoneIntl}`}
            className="hidden rounded-full border border-white/25 px-4 py-2 text-sm font-semibold hover:bg-white/10 md:block"
          >
            {CONTACT.phoneDisplay}
          </a>
          <LangSwitcher />
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-cta px-4 py-2 text-sm font-bold text-white hover:bg-cta-dark"
          >
            Rezervasyon
          </a>
        </div>
      </div>
    </header>
  );
}
