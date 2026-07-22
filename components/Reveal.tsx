"use client";
import { useEffect, useRef } from "react";

/** Tek IntersectionObserver ile scroll animasyonu — düzen hesaplaması minimum */
let shared: IntersectionObserver | null = null;
function getObserver() {
  if (typeof window === "undefined") return null;
  if (!shared) {
    shared = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            shared!.unobserve(e.target);
          }
        }
      },
      { threshold: 0.1, rootMargin: "80px" }
    );
  }
  return shared;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    const obs = getObserver();
    if (!el || !obs) return;
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);
  const d = delay ? ` reveal-delay-${delay}` : "";
  return (
    <div ref={ref} className={`reveal${d} ${className}`}>
      {children}
    </div>
  );
}
