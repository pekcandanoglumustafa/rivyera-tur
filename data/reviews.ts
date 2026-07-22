export type Review = { name: string; rating: number; text: string; lang: string; tour?: string };

/** Kendi sitemizdeki gerçek misafir yorumları */
export const REVIEWS: Review[] = [
  { name: "Rita & Jörgen", rating: 5, lang: "en", tour: "Quad Safari",
    text: "First of all the organization was perfect. Smiling staff and amazing trip. It was a full adventure trip — there are many surprises waiting for you. We recommend everybody." },
  { name: "Frank Kelner", rating: 5, lang: "de", tour: "Quad Safari",
    text: "Es war eine ausgezeichnete Tour. Das Abenteuer ist immer auf dem Höhepunkt. Ich kann es auf jeden Fall empfehlen. Sicher und unterhaltsam." },
  { name: "Junas Olsson", rating: 5, lang: "en", tour: "Quad Safari",
    text: "It was a fully adventure tour. We were seven persons and we all loved it. We plan to go one more time before we go home. Lovely atmosphere and friendly staff." },
  { name: "Yılmaz Ali", rating: 5, lang: "en", tour: "Quad Safari",
    text: "We went to the quad safari with my little son. We really loved it. My son wants to go once again before we go home. The staff are professional and friendly — and it is the cheapest tour around Side." },
  { name: "Angelika", rating: 5, lang: "de", tour: "Quad Safari",
    text: "Ich habe die Quad Safari schon zum 2. Mal mitgemacht. Es ist die beste Quad Safari, die ich je gemacht habe. Die Quads sind in gutem Zustand und das Personal ist sehr freundlich. Preis-Leistung ist top." },
  { name: "Ramona", rating: 5, lang: "de", tour: "Quad Safari",
    text: "Das Personal ist super und sehr freundlich. Der Ausflug war auch mega, hat alles super geklappt. Pünktliche Abholung und guter Service. So macht es Spaß, die Türkei neu zu entdecken." },
  { name: "София", rating: 5, lang: "ru", tour: "Quad Safari",
    text: "Спасибо ребята за квадрики! Было весело. Самые шикарные цены! Я долго искала конкретно туры от хозяина. И вот, наконец-то нашла!" },
  { name: "BABUR", rating: 5, lang: "ru", tour: "Quad Safari",
    text: "Экскурсию заказывали заранее, по интернету — дешевле обходится. Все детали уточняли без проблем. Квадсафари прошёл на УРА! Всё чётко, вовремя и профессионально. Рекомендуем!" },
];
