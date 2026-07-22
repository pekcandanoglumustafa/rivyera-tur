/** Kendi sitemizdeki (toursfromowner.com) gerçek tur fotoğrafları */
const B = "https://toursfromowner.com/panel/dimg/rooms/";

export const GALLERY: Record<string, string[]> = {
  "quad-safari": [
    `${B}64b5a2edb8d6f.webp`,
    `${B}64b5a2edbb0ba.webp`,
    `${B}64b5a2f1891dc.webp`,
    `${B}64b5a2f1d30ee.webp`,
    `${B}64b5a2f520a84.webp`,
  ],
  "quad-buggy-safari": [
    `${B}64b5a2edb8d6f.webp`,
    `${B}64b5a49547193.webp`,
    `${B}64b5a4969e669.webp`,
    `${B}64b5a2f1891dc.webp`,
  ],
  "buggy-safari": [
    `${B}64b5a49547193.webp`,
    `${B}64b5a4969e669.webp`,
    `${B}64b5a49694171.webp`,
    `${B}64b5a498c8f68.webp`,
    `${B}64b5a4996f07d.webp`,
    `${B}64b5a499bdae1.webp`,
  ],
  "aile-buggy-safari": [
    `${B}64b5a498c8f68.webp`,
    `${B}64b5a4996f07d.webp`,
    `${B}64b5a499bdae1.webp`,
    `${B}64b5a49694171.webp`,
  ],
  "turk-hamami": [`${B}64b55ccac8f50.webp`],
  "demre-myra-kekova-turu": [`${B}64b55c595aae3.webp`],
};

export function getGallery(slug: string) {
  return GALLERY[slug] ?? [];
}
