import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "İletişim & Rezervasyon",
  description: "Sonnenklar Reisen Turizm rezervasyon hattı: 0542 744 01 01. WhatsApp'tan yazın, iki dakikada yerinizi ayırtalım.",
  alternates: { canonical: "/iletisim", languages: { tr: "/iletisim", en: "/en/iletisim", de: "/de/iletisim" } },
};

export default function Page() {
  return <ContactPage locale="tr" />;
}
