import Link from "next/link";
import { CONTACT, tours } from "@/data/tours";

export default function Footer() {
  return (
    <footer className="mt-20 bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
        <div>
          <p className="display text-2xl font-extrabold">
            Sonnenklar<span className="text-turq">Tur</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/85">
            Antalya, Side ve Manavgat merkezli günlük gezi turları. Otelden
            alınış, sigorta ve rehberlik hizmetiyle.
          </p>
          <p className="mt-4 text-sm text-white/85">{CONTACT.address}</p>
        </div>
        <div>
          <p className="mb-3 font-bold">Popüler Turlar</p>
          <ul className="space-y-2 text-sm text-white/85">
            {tours.filter((t) => t.popular).map((t) => (
              <li key={t.slug}>
                <Link href={`/turlar/${t.slug}`} className="hover:text-white">
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 font-bold">Rezervasyon</p>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <a href={`tel:${CONTACT.phoneIntl}`} className="hover:text-white">
                Telefon: {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener" className="hover:text-white">
                WhatsApp ile yazın
              </a>
            </li>
            <li>
              <a href={CONTACT.instagram} target="_blank" rel="noopener" className="hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/85">
        © {new Date().getFullYear()} Sonnenklar Reisen Turizm — Antalya Gezi Turları
      </div>
    </footer>
  );
}
