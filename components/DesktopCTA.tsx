import { CONTACT } from "@/data/tours";

/** Masaüstünde sağ altta sabit duran Ara + WhatsApp butonları */
export default function DesktopCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-50 hidden flex-col gap-3 md:flex">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp ile yazın"
        className="group flex items-center gap-3 rounded-full bg-[#25d366] px-5 py-3.5 font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#1da851]"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.7-1.3 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1-3.4-1.1-5.6-4.5-5.8-4.7-.2-.2-1.4-1.9-1.4-3.6S7.5 6.6 7.7 6.4c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.7.9-.5 1.2.7 1.2 1.6 2.1 2.8 2.7.3.2.5.1.7-.1l.9-1c.2-.2.4-.2.6-.1s1.5.7 1.7.8c.2.1.4.2.5.3 0 .2 0 .8-.5 1.3z" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100">
          WhatsApp&apos;tan yaz
        </span>
      </a>
      <a
        href={`tel:${CONTACT.phoneIntl}`}
        aria-label="Telefonla arayın"
        className="group flex items-center gap-3 rounded-full bg-navy px-5 py-3.5 font-bold text-white shadow-xl shadow-black/20 transition hover:-translate-y-0.5 hover:bg-deep"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z" />
        </svg>
        <span className="max-w-0 overflow-hidden whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-[160px] group-hover:opacity-100">
          {CONTACT.phoneDisplay}
        </span>
      </a>
    </div>
  );
}
