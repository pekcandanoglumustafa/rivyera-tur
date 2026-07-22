import Link from "next/link";
import { CONTACT } from "@/data/tours";
import LangSwitcher from "@/components/LangSwitcher";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-navy/95 backdrop-blur text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="display text-xl font-extrabold tracking-tight">
          Sonnenklar<span className="text-turq">Tur</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="/turlar" className="hover:text-turq">Turlar</Link>
          <Link href="/#populer" className="hover:text-turq">Popüler</Link>
          <Link href="/#sss" className="hover:text-turq">S.S.S.</Link>
          <Link href="/iletisim" className="hover:text-turq">İletişim</Link>
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
