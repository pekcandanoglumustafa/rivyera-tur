"use client";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LOCALE_META, LOCALES, type Locale } from "@/data/i18n";

const READY: Locale[] = ["tr", "en", "de", "ru", "pl"];

export default function LangSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";

  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, []);

  // Mevcut yolu hedef dile çevir
  const hrefFor = (target: Locale) => {
    let rest = pathname;
    for (const l of LOCALES) {
      if (l !== "tr" && (rest === `/${l}` || rest.startsWith(`/${l}/`))) {
        rest = rest.slice(l.length + 1) || "/";
        break;
      }
    }
    if (target === "tr") return rest || "/";
    return rest === "/" ? `/${target}` : `/${target}${rest}`;
  };

  const active = LOCALE_META[locale];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-2 text-sm font-semibold text-white hover:bg-white/10"
        aria-label="Language"
      >
        <span className="text-base leading-none">{active.flag}</span>
        <span className="hidden sm:inline">{locale.toUpperCase()}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl bg-white py-1 shadow-xl ring-1 ring-black/10">
          {LOCALES.map((l) => {
            const m = LOCALE_META[l];
            const ready = READY.includes(l);
            return ready ? (
              <Link
                key={l}
                href={hrefFor(l)}
                onClick={() => setOpen(false)}
                className={`flex w-full items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-turq-soft ${
                  locale === l ? "font-bold text-navy" : "text-ink/80"
                }`}
              >
                <span className="text-base">{m.flag}</span>
                {m.label}
              </Link>
            ) : (
              <span
                key={l}
                className="flex w-full items-center justify-between px-4 py-2.5 text-sm text-ink/45"
              >
                <span className="flex items-center gap-2.5">
                  <span className="text-base">{m.flag}</span>
                  {m.label}
                </span>
                <span className="rounded-full bg-ink/10 px-2 py-0.5 text-[10px] font-semibold">soon</span>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
