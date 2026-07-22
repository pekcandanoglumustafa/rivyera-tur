import Image from "next/image";

/** Tur sayfası üst galerisi — büyük ana kare + yan küçük kareler */
export default function Gallery({ images, alt }: { images: string[]; alt: string }) {
  if (!images.length) return null;
  const [first, ...rest] = images;
  return (
    <div className="mx-auto max-w-6xl px-4 pt-6">
      <div className="grid gap-2 overflow-hidden rounded-3xl md:grid-cols-4 md:grid-rows-2">
        <div className="relative aspect-[4/3] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[380px]">
          <Image src={first} alt={alt} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover" priority />
        </div>
        {rest.slice(0, 4).map((src, i) => (
          <div key={src + i} className="relative hidden aspect-[4/3] md:block">
            <Image src={src} alt={`${alt} ${i + 2}`} fill sizes="25vw" className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
