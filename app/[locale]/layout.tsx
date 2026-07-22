import Shell from "@/components/Shell";
import HtmlLang from "@/components/HtmlLang";
import type { Locale } from "@/data/i18n";

export const dynamicParams = false;
export function generateStaticParams() {
  return [{ locale: "en" as const }, { locale: "de" as const }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <HtmlLang lang={locale} />
      <Shell locale={locale as Locale}>{children}</Shell>
    </>
  );
}
