export default function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {items.map((f) => (
        <details key={f.q} className="group rounded-xl bg-white p-4 ring-1 ring-black/5">
          <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-navy">
            {f.q}
            <span className="ml-4 text-cta transition group-open:rotate-45" aria-hidden>+</span>
          </summary>
          <p className="mt-2 text-sm leading-relaxed text-ink/75">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
