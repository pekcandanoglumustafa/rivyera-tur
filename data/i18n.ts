export const LOCALES = ["tr", "en", "de", "ru", "pl"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_META: Record<Locale, { label: string; flag: string; htmlLang: string }> = {
  tr: { label: "Türkçe", flag: "🇹🇷", htmlLang: "tr" },
  en: { label: "English", flag: "🇬🇧", htmlLang: "en" },
  de: { label: "Deutsch", flag: "🇩🇪", htmlLang: "de" },
  ru: { label: "Русский", flag: "🇷🇺", htmlLang: "ru" },
  pl: { label: "Polski", flag: "🇵🇱", htmlLang: "pl" },
};

type Dict = {
  navTours: string;
  navPopular: string;
  navFaq: string;
  navContact: string;
  book: string;
  heroBadge: string;
  heroTitle1: string;
  heroTitle2: string;
  heroText: string;
  ctaBook: string;
  ctaWhats: string;
  trust1: string;
  trust2: string;
  trust3: string;
  trust4: string;
  strip1Title: string;
  strip1Text: string;
  strip2Title: string;
  strip2Text: string;
  strip3Title: string;
  strip3Text: string;
  bestSellers: string;
  popularTours: string;
  seeAll: string;
  allTours: string;
  allToursText: string;
  whyTitle: string;
  why1Title: string;
  why1Text: string;
  why2Title: string;
  why2Text: string;
  why3Title: string;
  why3Text: string;
  faqTitle: string;
  finalTitle: string;
  finalText: string;
  callNow: string;
  perPerson: string;
  askPrice: string;
  view: string;
  popular: string;
  highlights: string;
  included: string;
  program: string;
  bookWhats: string;
  noPrepay: string;
  duration: string;
  days: string;
  footerText: string;
  footerPopular: string;
  footerBooking: string;
  contactTitle: string;
  contactText: string;
  faq: { q: string; a: string }[];
};

export const T: Record<Locale, Dict> = {
  tr: {
    navTours: "Turlar", navPopular: "Popüler", navFaq: "S.S.S.", navContact: "İletişim",
    book: "Rezervasyon",
    heroBadge: "Anında Onay · Antalya · Side · Manavgat · Belek · Alanya",
    heroTitle1: "Hayalinizdeki turu bugün ayırtın —",
    heroTitle2: "macera burada başlıyor.",
    heroText: "En iyi turlar, en iyi fiyatlar, unutulmaz anılar. Ödeme yapmadan güvenle rezervasyon: tur günü ücretsiz karşılama ve ödeme.",
    ctaBook: "Hemen Rezervasyon Yap", ctaWhats: "WhatsApp'tan Sor",
    trust1: "Gizli ücret yok", trust2: "Ücretsiz iptal", trust3: "Kredi kartı gerekmez", trust4: "5000+ mutlu misafir",
    strip1Title: "Ödeme Yapmadan Güvenli Rezervasyon", strip1Text: "Yerini ayırt, kredi kartı verme. Ödeme tur günü, otelden karşılamayla.",
    strip2Title: "Anında Onay", strip2Text: "WhatsApp'tan yaz, dakikalar içinde yerin kesinleşsin.",
    strip3Title: "Bir Turdan Fazlası", strip3Text: "46 farklı tur, tek adres. Macera, tekne, kültür ve keyif.",
    bestSellers: "En çok satanlar", popularTours: "Popüler Turlar", seeAll: "Tümünü gör",
    allTours: "Tüm Turlar", allToursText: "Otelden alma-bırakma dahil, ödemesi tur günü yapılan günlük geziler.",
    whyTitle: "Neden Sonnenklar Reisen?",
    why1Title: "Aracısız, komisyonsuz", why1Text: "Otel rehberi komisyonu yok, turist fiyatı yok. Gördüğün fiyat, ödediğin fiyat.",
    why2Title: "WhatsApp'tan iki dakikada", why2Text: "Form doldurmak yok. Yaz, saatini seç, yerini ayırt.",
    why3Title: "Bölgeyi ezbere biliyoruz", why3Text: "Side ve Manavgat bizim mahallemiz. Programlar buna göre kurgulanmış.",
    faqTitle: "Sık Sorulan Sorular",
    finalTitle: "Tatil planı iki dakika sürer.", finalText: "Hangi güne, kaç kişi, hangi tur — yaz yeter.",
    callNow: "Hemen Ara", perPerson: "Kişi başı", askPrice: "Fiyat Sor", view: "İncele",
    popular: "Popüler", highlights: "Öne Çıkanlar", included: "Fiyata Dahil", program: "Tur Programı",
    bookWhats: "WhatsApp'tan Rezervasyon", noPrepay: "Ön ödeme yok · Ödeme tur günü · Ücretsiz otel transferi",
    duration: "Süre", days: "Günler",
    footerText: "Antalya, Side ve Manavgat merkezli günlük gezi turları. Otelden alınış, sigorta ve rehberlik hizmetiyle.",
    footerPopular: "Popüler Turlar", footerBooking: "Rezervasyon",
    contactTitle: "Rezervasyon & İletişim",
    contactText: "Form yok, üyelik yok. Tur adını, tarihi ve kişi sayısını yazın — dakikalar içinde dönüş yapalım.",
    faq: [
      { q: "Rezervasyon için ön ödeme gerekiyor mu?", a: "Hayır. WhatsApp veya telefonla yerinizi ayırtırsınız, ödemeyi tur günü yaparsınız." },
      { q: "Otelden alma-bırakma her turda var mı?", a: "Evet, aksi belirtilmedikçe Side, Manavgat, Kumköy, Çolaklı, Evrenseki ve Kızılağaç bölgelerinden ücretsiz transfer dahildir." },
      { q: "Tur iptal olursa ne oluyor?", a: "Hava koşulları nedeniyle iptal olan turlarda ücret tam iade edilir veya başka bir güne alınır." },
      { q: "Çocuklar için indirim var mı?", a: "0-6 yaş çoğu turda ücretsiz, 7-12 yaş indirimlidir." },
    ],
  },
  en: {
    navTours: "Tours", navPopular: "Popular", navFaq: "FAQ", navContact: "Contact",
    book: "Book Now",
    heroBadge: "Instant Confirmation · Antalya · Side · Manavgat · Belek · Alanya",
    heroTitle1: "Book your dream tour today —",
    heroTitle2: "the adventure starts here.",
    heroText: "Best tours, best prices, unforgettable memories. Reserve safely with no payment: free hotel pick-up and payment on the tour day.",
    ctaBook: "Book Now", ctaWhats: "Ask on WhatsApp",
    trust1: "No hidden fees", trust2: "Free cancellation", trust3: "No credit card needed", trust4: "5000+ happy guests",
    strip1Title: "Reserve Safely Without Paying", strip1Text: "Reserve your spot, no card required. Pay on the tour day at hotel pick-up.",
    strip2Title: "Instant Confirmation", strip2Text: "Message us on WhatsApp and your spot is confirmed within minutes.",
    strip3Title: "More Than a Tour", strip3Text: "46 different tours in one place. Adventure, boats, culture and relaxation.",
    bestSellers: "Best sellers", popularTours: "Popular Tours", seeAll: "See all",
    allTours: "All Tours", allToursText: "Daily excursions with free hotel transfer and payment on the tour day.",
    whyTitle: "Why Sonnenklar Reisen?",
    why1Title: "No middlemen, no commission", why1Text: "No hotel guide commission, no tourist pricing. The price you see is the price you pay.",
    why2Title: "Two minutes on WhatsApp", why2Text: "No forms to fill. Message us, pick your time, reserve your spot.",
    why3Title: "We know the region by heart", why3Text: "Side and Manavgat are our home. Every itinerary is planned accordingly.",
    faqTitle: "Frequently Asked Questions",
    finalTitle: "Planning your day takes two minutes.", finalText: "Which day, how many people, which tour — just write.",
    callNow: "Call Now", perPerson: "Per person", askPrice: "Ask Price", view: "View",
    popular: "Popular", highlights: "Highlights", included: "What's Included", program: "Itinerary",
    bookWhats: "Book on WhatsApp", noPrepay: "No prepayment · Pay on tour day · Free hotel transfer",
    duration: "Duration", days: "Days",
    footerText: "Daily excursions from Antalya, Side and Manavgat. Hotel pick-up, insurance and guiding included.",
    footerPopular: "Popular Tours", footerBooking: "Booking",
    contactTitle: "Booking & Contact",
    contactText: "No forms, no sign-up. Send the tour name, date and number of people — we reply within minutes.",
    faq: [
      { q: "Do I need to pay in advance?", a: "No. Reserve via WhatsApp or phone and pay on the day of the tour." },
      { q: "Is hotel pick-up included?", a: "Yes, free transfer is included from Side, Manavgat, Kumköy, Çolaklı, Evrenseki and Kızılağaç unless stated otherwise." },
      { q: "What if the tour is cancelled?", a: "If a tour is cancelled due to weather, you get a full refund or a free reschedule." },
      { q: "Is there a discount for children?", a: "Ages 0-6 are free on most tours, ages 7-12 get a discount." },
    ],
  },
  de: {
    navTours: "Touren", navPopular: "Beliebt", navFaq: "FAQ", navContact: "Kontakt",
    book: "Buchen",
    heroBadge: "Sofortige Bestätigung · Antalya · Side · Manavgat · Belek · Alanya",
    heroTitle1: "Buchen Sie heute Ihre Traumtour —",
    heroTitle2: "das Abenteuer beginnt hier.",
    heroText: "Beste Touren, beste Preise, unvergessliche Erinnerungen. Sicher reservieren ohne Anzahlung: kostenlose Abholung und Zahlung am Tourtag.",
    ctaBook: "Jetzt buchen", ctaWhats: "Per WhatsApp fragen",
    trust1: "Keine versteckten Kosten", trust2: "Kostenlose Stornierung", trust3: "Keine Kreditkarte nötig", trust4: "5000+ zufriedene Gäste",
    strip1Title: "Sicher reservieren ohne Zahlung", strip1Text: "Platz sichern ohne Karte. Zahlung am Tourtag bei der Abholung.",
    strip2Title: "Sofortige Bestätigung", strip2Text: "Schreiben Sie uns auf WhatsApp — Ihr Platz ist in Minuten bestätigt.",
    strip3Title: "Mehr als eine Tour", strip3Text: "46 verschiedene Touren an einem Ort. Abenteuer, Boote, Kultur und Erholung.",
    bestSellers: "Bestseller", popularTours: "Beliebte Touren", seeAll: "Alle ansehen",
    allTours: "Alle Touren", allToursText: "Tagesausflüge inkl. kostenlosem Hoteltransfer, Zahlung am Tourtag.",
    whyTitle: "Warum Sonnenklar Reisen?",
    why1Title: "Ohne Zwischenhändler", why1Text: "Keine Hotelguide-Provision, keine Touristenpreise. Was Sie sehen, zahlen Sie.",
    why2Title: "Zwei Minuten per WhatsApp", why2Text: "Keine Formulare. Schreiben, Zeit wählen, Platz sichern.",
    why3Title: "Wir kennen die Region", why3Text: "Side und Manavgat sind unsere Heimat. Die Programme sind entsprechend geplant.",
    faqTitle: "Häufige Fragen",
    finalTitle: "Ihre Tagesplanung dauert zwei Minuten.", finalText: "Welcher Tag, wie viele Personen, welche Tour — einfach schreiben.",
    callNow: "Jetzt anrufen", perPerson: "Pro Person", askPrice: "Preis anfragen", view: "Ansehen",
    popular: "Beliebt", highlights: "Highlights", included: "Inklusive", program: "Ablauf",
    bookWhats: "Per WhatsApp buchen", noPrepay: "Keine Anzahlung · Zahlung am Tourtag · Kostenloser Transfer",
    duration: "Dauer", days: "Tage",
    footerText: "Tagesausflüge ab Antalya, Side und Manavgat. Inklusive Abholung, Versicherung und Reiseleitung.",
    footerPopular: "Beliebte Touren", footerBooking: "Buchung",
    contactTitle: "Buchung & Kontakt",
    contactText: "Keine Formulare, keine Anmeldung. Senden Sie Tourname, Datum und Personenzahl — wir antworten in Minuten.",
    faq: [
      { q: "Muss ich im Voraus zahlen?", a: "Nein. Reservieren Sie per WhatsApp oder Telefon und zahlen Sie am Tourtag." },
      { q: "Ist die Hotelabholung inklusive?", a: "Ja, kostenloser Transfer aus Side, Manavgat, Kumköy, Çolaklı, Evrenseki und Kızılağaç ist inklusive." },
      { q: "Was passiert bei einer Absage?", a: "Bei wetterbedingter Absage erhalten Sie eine volle Rückerstattung oder einen neuen Termin." },
      { q: "Gibt es Kinderermäßigung?", a: "0-6 Jahre bei den meisten Touren kostenlos, 7-12 Jahre ermäßigt." },
    ],
  },
  ru: {
    navTours: "Туры", navPopular: "Популярные", navFaq: "Вопросы", navContact: "Контакты",
    book: "Бронировать",
    heroBadge: "Мгновенное подтверждение · Анталья · Сиде · Манавгат · Белек · Аланья",
    heroTitle1: "Забронируйте тур мечты сегодня —",
    heroTitle2: "приключение начинается здесь.",
    heroText: "Лучшие туры, лучшие цены, незабываемые впечатления. Бронирование без предоплаты: бесплатный трансфер и оплата в день тура.",
    ctaBook: "Забронировать", ctaWhats: "Спросить в WhatsApp",
    trust1: "Без скрытых доплат", trust2: "Бесплатная отмена", trust3: "Карта не нужна", trust4: "5000+ довольных гостей",
    strip1Title: "Бронирование без оплаты", strip1Text: "Забронируйте место без карты. Оплата в день тура при встрече.",
    strip2Title: "Мгновенное подтверждение", strip2Text: "Напишите в WhatsApp — место подтвердим за пару минут.",
    strip3Title: "Больше, чем тур", strip3Text: "46 разных туров в одном месте. Приключения, лодки, культура и отдых.",
    bestSellers: "Хиты продаж", popularTours: "Популярные туры", seeAll: "Все туры",
    allTours: "Все туры", allToursText: "Однодневные экскурсии с бесплатным трансфером и оплатой в день тура.",
    whyTitle: "Почему Sonnenklar Reisen?",
    why1Title: "Без посредников", why1Text: "Без комиссии отельных гидов и туристических наценок. Цена на сайте — итоговая.",
    why2Title: "Две минуты в WhatsApp", why2Text: "Никаких форм. Напишите, выберите время, забронируйте.",
    why3Title: "Мы знаем регион наизусть", why3Text: "Сиде и Манавгат — наш дом. Программы составлены с учётом этого.",
    faqTitle: "Частые вопросы",
    finalTitle: "Планирование займёт две минуты.", finalText: "Какой день, сколько человек, какой тур — просто напишите.",
    callNow: "Позвонить", perPerson: "С человека", askPrice: "Узнать цену", view: "Подробнее",
    popular: "Популярный", highlights: "Главное", included: "Включено", program: "Программа",
    bookWhats: "Бронь в WhatsApp", noPrepay: "Без предоплаты · Оплата в день тура · Бесплатный трансфер",
    duration: "Длительность", days: "Дни",
    footerText: "Однодневные экскурсии из Антальи, Сиде и Манавгата. Трансфер, страховка и гид включены.",
    footerPopular: "Популярные туры", footerBooking: "Бронирование",
    contactTitle: "Бронирование и контакты",
    contactText: "Без форм и регистрации. Напишите название тура, дату и количество человек — ответим за минуты.",
    faq: [
      { q: "Нужна ли предоплата?", a: "Нет. Забронируйте через WhatsApp или по телефону и оплатите в день тура." },
      { q: "Трансфер из отеля включён?", a: "Да, бесплатный трансфер из Сиде, Манавгата, Кумкёй, Чолаклы, Эвренсеки и Кызылагач включён." },
      { q: "Что если тур отменят?", a: "При отмене из-за погоды — полный возврат или перенос на другой день." },
      { q: "Есть ли скидки для детей?", a: "Дети 0-6 лет бесплатно на большинстве туров, 7-12 лет со скидкой." },
    ],
  },
  pl: {
    navTours: "Wycieczki", navPopular: "Popularne", navFaq: "FAQ", navContact: "Kontakt",
    book: "Rezerwuj",
    heroBadge: "Natychmiastowe potwierdzenie · Antalya · Side · Manavgat · Belek · Alanya",
    heroTitle1: "Zarezerwuj wymarzoną wycieczkę —",
    heroTitle2: "przygoda zaczyna się tutaj.",
    heroText: "Najlepsze wycieczki, najlepsze ceny, niezapomniane wspomnienia. Rezerwacja bez zaliczki: darmowy odbiór z hotelu i płatność w dniu wycieczki.",
    ctaBook: "Rezerwuj teraz", ctaWhats: "Zapytaj na WhatsApp",
    trust1: "Bez ukrytych opłat", trust2: "Darmowe anulowanie", trust3: "Karta niepotrzebna", trust4: "5000+ zadowolonych gości",
    strip1Title: "Rezerwacja bez płatności", strip1Text: "Zarezerwuj miejsce bez karty. Płatność w dniu wycieczki przy odbiorze.",
    strip2Title: "Natychmiastowe potwierdzenie", strip2Text: "Napisz na WhatsApp — potwierdzimy miejsce w kilka minut.",
    strip3Title: "Więcej niż wycieczka", strip3Text: "46 różnych wycieczek w jednym miejscu. Przygoda, rejsy, kultura i relaks.",
    bestSellers: "Bestsellery", popularTours: "Popularne wycieczki", seeAll: "Zobacz wszystkie",
    allTours: "Wszystkie wycieczki", allToursText: "Wycieczki jednodniowe z darmowym transferem i płatnością w dniu wyjazdu.",
    whyTitle: "Dlaczego Sonnenklar Reisen?",
    why1Title: "Bez pośredników", why1Text: "Bez prowizji hotelowych przewodników i cen dla turystów. Cena, którą widzisz, to cena, którą płacisz.",
    why2Title: "Dwie minuty na WhatsApp", why2Text: "Żadnych formularzy. Napisz, wybierz godzinę, zarezerwuj miejsce.",
    why3Title: "Znamy region na pamięć", why3Text: "Side i Manavgat to nasz dom. Programy są tak zaplanowane.",
    faqTitle: "Często zadawane pytania",
    finalTitle: "Planowanie zajmuje dwie minuty.", finalText: "Który dzień, ile osób, która wycieczka — po prostu napisz.",
    callNow: "Zadzwoń", perPerson: "Za osobę", askPrice: "Zapytaj o cenę", view: "Zobacz",
    popular: "Popularne", highlights: "Najważniejsze", included: "W cenie", program: "Program",
    bookWhats: "Rezerwuj na WhatsApp", noPrepay: "Bez zaliczki · Płatność w dniu wycieczki · Darmowy transfer",
    duration: "Czas trwania", days: "Dni",
    footerText: "Wycieczki jednodniowe z Antalyi, Side i Manavgat. Odbiór z hotelu, ubezpieczenie i przewodnik w cenie.",
    footerPopular: "Popularne wycieczki", footerBooking: "Rezerwacja",
    contactTitle: "Rezerwacja i kontakt",
    contactText: "Bez formularzy i rejestracji. Wyślij nazwę wycieczki, datę i liczbę osób — odpowiemy w kilka minut.",
    faq: [
      { q: "Czy trzeba płacić z góry?", a: "Nie. Rezerwuj przez WhatsApp lub telefon i zapłać w dniu wycieczki." },
      { q: "Czy odbiór z hotelu jest w cenie?", a: "Tak, darmowy transfer z Side, Manavgat, Kumköy, Çolaklı, Evrenseki i Kızılağaç jest wliczony." },
      { q: "Co jeśli wycieczka zostanie odwołana?", a: "Przy odwołaniu z powodu pogody otrzymasz pełny zwrot lub nowy termin." },
      { q: "Czy są zniżki dla dzieci?", a: "Dzieci 0-6 lat bezpłatnie na większości wycieczek, 7-12 lat ze zniżką." },
    ],
  },
};
