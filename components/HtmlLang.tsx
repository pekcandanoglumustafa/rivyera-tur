"use client";
import { useEffect } from "react";

/** Sayfa diline göre <html lang> değerini ayarlar (SEO + erişilebilirlik) */
export default function HtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
