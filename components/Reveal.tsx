"use client";
import { useEffect, useRef } from "react";

/** Scroll ile görünüme girince .in-view ekler — kütüphanesiz animasyon */
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
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const d = delay ? ` reveal-delay-${delay}` : "";
  return (
    <div ref={ref} className={`reveal${d} ${className}`}>
      {children}
    </div>
  );
}
