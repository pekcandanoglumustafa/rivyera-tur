/** Kendi sitemizdeki (toursfromowner.com) gerçek tur fotoğrafları */
const B = "https://toursfromowner.com/panel/dimg/rooms/";

export const GALLERY: Record<string, string[]> = {
  "koprulu-kanyon-rafting": [
    `${B}64b59fdb9cd20.webp`,
    `${B}64b59fdbc6f7b.webp`,
    `${B}64b59fdc74760.webp`,
    `${B}64b59fde1efc0.webp`,
    `${B}64b59fdea0e98.webp`,
  ],
  "rafting-kombo": [
    `${B}64b59fdb9cd20.webp`,
    `${B}64b5a2edb8d6f.webp`,
    `${B}64b59fdc74760.webp`,
    `${B}64b5a49547193.webp`,
  ],
  "rafting-zipline": [
    `${B}64b59fdbc6f7b.webp`,
    `${B}64b59fde1efc0.webp`,
    `${B}64b59fdea0e98.webp`,
  ],
  "quad-buggy-rafting": [
    `${B}64b59fdb9cd20.webp`,
    `${B}64b5a49694171.webp`,
    `${B}64b5a2f1891dc.webp`,
    `${B}64b59fdc74760.webp`,
  ],
  "super-kombo": [
    `${B}64b59fdb9cd20.webp`,
    `${B}64b5a2edbb0ba.webp`,
    `${B}64b5a498c8f68.webp`,
    `${B}64b59fdea0e98.webp`,
  ],
  "kartal-kanyonu-turu": [
    `${B}64b5a24eb45eb.webp`,
    `${B}64b5a24ecceee.webp`,
    `${B}64b5a2503b2dc.webp`,
    `${B}64b6a43c7a26b.webp`,
  ],
  "jeep-rafting-kombo": [
    `${B}64b5a24eb45eb.webp`,
    `${B}64b59fdb9cd20.webp`,
    `${B}64b5a2503b2dc.webp`,
  ],
  "manavgat-tekne-turu": [
    `${B}64b5a53857efb.webp`,
    `${B}64b5a5389d2ba.webp`,
    `${B}64b5a538ed3c2.webp`,
    `${B}64b5a53edfed5.webp`,
    `${B}64b5a54131233.webp`,
  ],
  "side-tekne-turu": [
    `${B}64b5a5389d2ba.webp`,
    `${B}64b5a538ed3c2.webp`,
    `${B}64b5a54131233.webp`,
  ],
  "korsan-teknesi": [
    `${B}64b5a53857efb.webp`,
    `${B}64b5a53edfed5.webp`,
    `${B}64b5a538ed3c2.webp`,
  ],
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
