# Rivyera Tur — Antalya Gezi Turları

Next.js 15 + Tailwind v4. Tamamen statik (SSG), Vercel'de saniyeler içinde açılır.

## Yayına alma (CV Sepeti ile aynı akış)

1. GitHub'da `rivyera-tur` reposu aç, bu klasörü pushla:
   ```bash
   git init && git add . && git commit -m "ilk sürüm"
   git remote add origin https://github.com/KULLANICI/rivyera-tur.git
   git push -u origin main
   ```
2. Vercel → Add New Project → repoyu seç → Deploy. Ayar gerekmiyor.
3. Domain: Vercel → Settings → Domains → rivyeratur.com ekle.
   Hostinger DNS'te A kaydını `76.76.21.21`, www CNAME'i `cname.vercel-dns.com` yap.

## İçerik güncelleme

- **Fiyatlar ve turlar:** `data/tours.ts` — tek dosya, her şey orada.
  `price: 1500` yazarsan sitede "1.500 ₺", boş bırakırsan "Fiyat Sor" görünür.
- **Fotoğraflar:** `public/turlar/<slug>.jpg` koy, turda `image: "/turlar/<slug>.jpg"` yaz.
- **Telefon/WhatsApp/Instagram:** `data/tours.ts` içindeki `CONTACT`.

## Reklam kurulumu için notlar

- Google Ads dönüşüm takibi: tel: ve wa.me tıklamalarını GTM ile event'e bağla
  (Vercel'e yayından sonra GTM snippet'i `app/layout.tsx`'e eklenir — bana söyle, ekleyeyim).
- Her tur sayfası kendi meta title/description + TouristTrip & FAQ JSON-LD'siyle geliyor;
  Ads landing olarak doğrudan tur sayfalarını kullan (ör. /turlar/koprulu-kanyon-rafting).
- Search Console: domain doğrula, sitemap.xml gönder (otomatik üretiliyor).
