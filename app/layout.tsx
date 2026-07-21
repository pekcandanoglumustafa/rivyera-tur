import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";
import FontLoader from "@/components/FontLoader";
import { CONTACT } from "@/data/tours";

const SITE = "https://rivyeratur.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Rivyera Tur | Antalya Gezi Turları — Rafting, Tekne Turu, Safari",
    template: "%s | Rivyera Tur",
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
    siteName: "Rivyera Tur",
    title: "Rivyera Tur | Antalya Gezi Turları",
    description:
      "Rafting, tekne turları, safari, Kapadokya ve Pamukkale. Otelden alma-bırakma dahil günlük Antalya turları.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Rivyera Tur",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap"
          />
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased pb-16 md:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <CTABar />
        <FontLoader />
      </body>
    </html>
  );
}
