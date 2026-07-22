import ContactPage from "@/components/pages/ContactPage";
import type { Locale } from "@/data/i18n";

export default async function Page({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <ContactPage locale={locale} />;
}
