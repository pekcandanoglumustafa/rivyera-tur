"use client";
import { useEffect } from "react";

const HREF =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&display=swap";

/** Fontu sayfa çizildikten sonra yükler → render-blocking yok, hız artar */
export default function FontLoader() {
  useEffect(() => {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = HREF;
    document.head.appendChild(l);
  }, []);
  return null;
}
