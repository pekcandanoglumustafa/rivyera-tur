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
  "yesil-kanyon-tekne-turu": [
    `${B}64b5a6a5657f2.webp`,
    `${B}64b5a6a5cdfdd.webp`,
    `${B}64b5a6a602ee4.webp`,
    `${B}64b5a6a6883ef.webp`,
    `${B}64b5a6a738d0a.webp`,
  ],
  "mix-tur-7-1": [
    `${B}64b5a6a5cdfdd.webp`,
    `${B}64b5a6a602ee4.webp`,
    `${B}64b5a6a738d0a.webp`,
  ],
  "karacaoren-kanyon-tekne": [
    `${B}64b5a6a5657f2.webp`,
    `${B}64b5a6a6883ef.webp`,
    `${B}64b5a6a602ee4.webp`,
  ],
  "legends-gece-gosterisi": [
    `${B}64b5a2914cb97.webp`,
    `${B}64b5a2916afab.webp`,
    `${B}64b5a291d5156.webp`,
    `${B}64b5a292ceccf.webp`,
    `${B}64b5a292e720a.webp`,
    `${B}64b5a293c72a4.webp`,
  ],
  "land-of-legends-turu": [
    `${B}66a4fcfd95430.webp`,
    `${B}66a4fcfe725a8.webp`,
    `${B}66a4fd05b45d0.webp`,
    `${B}66a4fd06156b8.webp`,
    `${B}66a4fd0e3fa15.webp`,
  ],
  "akvaryum-legends-kombo": [
    `${B}64b5a29409627.webp`,
    `${B}64b5a292ceccf.webp`,
    `${B}66a4fd0e3fa15.webp`,
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
