import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTABar from "@/components/CTABar";
import DesktopCTA from "@/components/DesktopCTA";
import type { Locale } from "@/data/i18n";

export default function Shell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
      <CTABar locale={locale} />
      <DesktopCTA locale={locale} />
    </>
  );
}
