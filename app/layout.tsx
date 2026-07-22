import type { Metadata } from "next";
import "./globals.css";
import { CONTACT } from "@/data/tours";

const SITE = "https://sonnenklarreisen.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Sonnenklar Reisen Turizm | Antalya Gezi Turları — Rafting, Tekne Turu, Safari",
    template: "%s | Sonnenklar Reisen Turizm",
  },
  description:
    "Antalya, Side ve Manavgat'ta günlük geziler: rafting, tekne turları, jeep safari, Kapadokya ve Pamukkale turları. Otelden alma-bırakma dahil, WhatsApp'tan hemen rezervasyon: 0507 658 42 45.",
  keywords: [
    "antalya gezi turları",
    "antalya günlük turlar",
    "side tekne turu",
    "antalya rafting",
    "manavgat tekne turu",
    "antalya jeep safari",
    "antalyadan kapadokya turu",
    "antalyadan pamukkale turu",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Sonnenklar Reisen Turizm",
    title: "Sonnenklar Reisen Turizm | Antalya Gezi Turları",
    description:
      "Rafting, tekne turları, safari, Kapadokya ve Pamukkale. Otelden alma-bırakma dahil günlük Antalya turları.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/", languages: { tr: "/", en: "/en", de: "/de", ru: "/ru", pl: "/pl" } },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Sonnenklar Reisen Turizm",
  url: SITE,
  telephone: CONTACT.phoneIntl,
  areaServed: ["Antalya", "Side", "Manavgat", "Belek", "Alanya"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manavgat",
    addressRegion: "Antalya",
    addressCountry: "TR",
  },
  sameAs: [CONTACT.instagram],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <head>
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fturlar%2Fkorsan-teknesi.jpg&w=1200&q=75"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased pb-16 md:pb-0">
        {children}
      </body>
    </html>
  );
}
