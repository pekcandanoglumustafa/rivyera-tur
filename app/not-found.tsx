import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="display text-4xl font-extrabold text-navy">Sayfa bulunamadı</h1>
      <p className="mt-3 text-ink/70">Aradığınız tur taşınmış veya kaldırılmış olabilir.</p>
      <Link href="/turlar" className="mt-6 inline-block rounded-full bg-cta px-7 py-3.5 font-bold text-white">
        Tüm Turlara Dön
      </Link>
    </div>
  );
}
