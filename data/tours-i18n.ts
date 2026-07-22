import type { Locale } from "./i18n";

type TourText = { name: string; tagline: string; desc?: string };

/** Tur adı + tanıtım cümlesi çevirileri. TR kaynak dosyada (data/tours.ts) durur. */
export const TOUR_I18N: Record<string, Partial<Record<Locale, TourText>>> = {
  "koprulu-kanyon-rafting": {
    en: { name: "Köprülü Canyon Rafting", tagline: "15 km of whitewater fun, lunch included", desc: "A full day of rafting on the icy waters of Köprülü Canyon National Park. Professional guides, plenty of swim stops and all equipment provided — you just enjoy the ride." },
    de: { name: "Köprülü-Canyon Rafting", tagline: "15 km Wildwasser-Spaß, Mittagessen inklusive", desc: "Ein ganzer Tag Rafting im eiskalten Wasser des Köprülü-Canyon-Nationalparks. Professionelle Guides, viele Badepausen und komplette Ausrüstung inklusive." },
  },
  "super-kombo": {
    en: { name: "Super Combo: Rafting + Jeep + Quad + Zipline", tagline: "Four adventures in one day — Antalya's fullest tour", desc: "Rafting, jeep safari, quad and zipline in a single package. Dusty trails in the Taurus foothills, whitewater in the canyon and a zipline finish above the trees." },
    de: { name: "Super Combo: Rafting + Jeep + Quad + Zipline", tagline: "Vier Abenteuer an einem Tag", desc: "Rafting, Jeep-Safari, Quad und Zipline in einem Paket. Staubige Pisten im Taurusgebirge, Wildwasser im Canyon und zum Abschluss eine Zipline über den Baumwipfeln." },
  },
  "yesil-kanyon-tekne-turu": {
    en: { name: "Green Canyon Boat Tour", tagline: "3 hours on Turkey's largest canyon reservoir", desc: "Three hours of cruising on the emerald waters of Oymapınar Dam between towering Taurus cliffs. Swim stop, lunch and soft drinks included." },
    de: { name: "Green Canyon Bootstour", tagline: "3 Stunden auf dem größten Canyon-Stausee der Türkei", desc: "Drei Stunden auf dem smaragdgrünen Wasser des Oymapınar-Stausees zwischen steilen Taurusfelsen. Badepause, Mittagessen und Softdrinks inklusive." },
  },
  "korsan-teknesi": {
    en: { name: "Pirate Boat Trip", tagline: "Half a day the kids will never forget", desc: "A pirate-themed boat trip from the Manavgat River to the river mouth. Children's animation, treasure hunt, swim stop and lunch included." },
    de: { name: "Piratenboot-Tour", tagline: "Ein halber Tag, den die Kinder nie vergessen", desc: "Eine Bootsfahrt im Piraten-Stil vom Manavgat-Fluss zur Flussmündung. Kinderanimation, Schatzsuche, Badepause und Mittagessen inklusive." },
  },
  "manavgat-tekne-turu": {
    en: { name: "Manavgat River & Waterfall Tour", tagline: "River cruise, waterfall and the famous bazaar", desc: "A boat cruise along the Manavgat River with a swim stop, a visit to the waterfall and free time at the famous Manavgat bazaar." },
    de: { name: "Manavgat Fluss & Wasserfall Tour", tagline: "Flussfahrt, Wasserfall und der berühmte Basar", desc: "Bootsfahrt auf dem Manavgat-Fluss mit Badepause, Besuch des Wasserfalls und Freizeit auf dem berühmten Basar von Manavgat." },
  },
  "dolphin-island-tekne-turu": {
    en: { name: "Dolphin Island Boat Tour", tagline: "Dolphin sighting chance, foam party and blue sea", desc: "From the Manavgat River out to the open sea: swim stop at Jesus Island, lunch on board and a chance to spot dolphins. Foam party on the way back." },
    de: { name: "Delphin-Insel Bootstour", tagline: "Delphin-Chance, Schaumparty und blaues Meer", desc: "Vom Manavgat-Fluss aufs offene Meer: Badepause an der Jesus-Insel, Mittagessen an Bord und die Chance, Delphine zu sehen. Schaumparty auf dem Rückweg." },
  },
  "kapadokya-turu": {
    en: { name: "Cappadocia Tour (2 Days)", tagline: "Fairy chimneys, underground city, Mevlana — all inclusive", desc: "Two days from Antalya: Mevlana Museum in Konya, Sultanhanı Caravanserai, Uçhisar Castle, cave churches and an underground city. All meals and entrance fees included." },
    de: { name: "Kappadokien Tour (2 Tage)", tagline: "Feenkamine, Untergrundstadt, Mevlana — alles inklusive", desc: "Zwei Tage ab Antalya: Mevlana-Museum in Konya, Sultanhanı-Karawanserei, Uçhisar-Burg, Höhlenkirchen und eine Untergrundstadt. Alle Mahlzeiten und Eintritte inklusive." },
  },
  "pamukkale-salda-turu": {
    en: { name: "Pamukkale & Salda Lake Tour", tagline: "The Turkish Maldives and white travertines in one day", desc: "Morning at the white shores of Salda Lake, afternoon at the Pamukkale travertines and Hierapolis Ancient City. Breakfast, lunch and Pamukkale entry included." },
    de: { name: "Pamukkale & Salda-See Tour", tagline: "Die Malediven der Türkei und weiße Kalkterrassen", desc: "Vormittags am weißen Ufer des Salda-Sees, nachmittags an den Kalkterrassen von Pamukkale und in Hierapolis. Frühstück, Mittagessen und Eintritt inklusive." },
  },
  "kartal-kanyonu-turu": {
    en: { name: "Eagle Canyon (Adler Canyon) Tour", tagline: "Selge Ancient City, Roman bridge and eagle views", desc: "The lesser-known side of Köprülü Canyon: the Roman-era Paulus Bridge, Selge Ancient City, underground springs and canyon views where eagles soar. No shopping stops." },
    de: { name: "Adler Canyon Tour", tagline: "Antike Stadt Selge, Römerbrücke und Adlerblick", desc: "Die unbekannte Seite des Köprülü-Canyons: die römische Paulus-Brücke, die antike Stadt Selge, Grundwasserquellen und Canyon-Blicke. Ohne Shopping-Stopps." },
  },
  "suluada-tekne-turu": {
    en: { name: "Suluada Island Boat Tour", tagline: "The Turkish Maldives: 4 bays, 4 swim stops", desc: "A boat trip from Adrasan to turquoise bays. Four swim stops, free time on the island, lunch and a fruit plate included." },
    de: { name: "Suluada Bootstour", tagline: "Die Malediven der Türkei: 4 Buchten, 4 Badepausen", desc: "Bootstour ab Adrasan zu türkisfarbenen Buchten. Vier Badepausen, Aufenthalt auf der Insel, Mittagessen und Früchteteller inklusive." },
  },
  "antalya-sehir-turu": {
    en: { name: "Antalya City Tour", tagline: "Kaleiçi, Düden Waterfall and cable car views", desc: "Antalya in a day: the historic streets of Kaleiçi, Düden Waterfall, cable car views over Tünektepe and free time in the old town." },
    de: { name: "Antalya Stadtrundfahrt", tagline: "Kaleiçi, Düden-Wasserfall und Seilbahn", desc: "Antalya an einem Tag: die Altstadt Kaleiçi, der Düden-Wasserfall, Seilbahnblick vom Tünektepe und Freizeit in der Altstadt." },
  },
  "demre-myra-kekova-turu": {
    en: { name: "Demre – Myra – Kekova Tour", tagline: "Sunken city, rock tombs and St. Nicholas Church", desc: "The rock-cut tombs of Myra, the Church of St. Nicholas (Santa Claus) in Demre and a boat trip over the sunken city of Kekova. Boat tour and lunch included." },
    de: { name: "Demre – Myra – Kekova Tour", tagline: "Versunkene Stadt, Felsengräber und Nikolauskirche", desc: "Die Felsengräber von Myra, die Nikolauskirche in Demre und eine Bootsfahrt über die versunkene Stadt Kekova. Bootstour und Mittagessen inklusive." },
  },
  "land-of-legends-turu": {
    en: { name: "Land of Legends Tour", tagline: "6 hours in Turkey's biggest theme park", desc: "A full family day at the Land of Legends theme and water park in Belek. Return transfer and park entry included, six hours of free time inside." },
    de: { name: "Land of Legends Tour", tagline: "6 Stunden im größten Themenpark der Türkei", desc: "Ein ganzer Familientag im Land of Legends Themen- und Wasserpark in Belek. Hin- und Rücktransfer sowie Eintritt inklusive, sechs Stunden Freizeit im Park." },
  },
  "yamac-parasutu-alanya": {
    en: { name: "Tandem Paragliding (Alanya)", tagline: "25-30 min flight from 1000 m to Cleopatra Beach", desc: "Take off from Yassı Mountain in Alanya (about 1000 m) and land on Cleopatra Beach. A 25-30 minute tandem flight with licensed pilots." },
    de: { name: "Tandem-Paragliding (Alanya)", tagline: "25-30 Min. Flug aus 1000 m zum Kleopatra-Strand", desc: "Start vom Yassı-Berg in Alanya (ca. 1000 m) und Landung am Kleopatra-Strand. Ein 25-30-minütiger Tandemflug mit lizenzierten Piloten." },
  },
  "at-safari": { en: { name: "Horse Safari", tagline: "Riding along the beach and through pine forest" }, de: { name: "Pferde-Safari", tagline: "Ausritt am Strand und durch den Pinienwald" } },
  "turk-hamami": {
    en: { name: "Turkish Bath & Spa", tagline: "Sauna, scrub, foam, 20-min massage and face mask", desc: "Shake off the travel fatigue: sauna, steam room, salt room, body scrub, foam massage, a 20-minute oil massage and a face mask. Transfer included." },
    de: { name: "Türkisches Bad & Spa", tagline: "Sauna, Peeling, Schaum, 20 Min. Massage, Gesichtsmaske", desc: "Erholung pur: Sauna, Dampfbad, Salzraum, Peeling, Schaummassage, 20 Minuten Ölmassage und Gesichtsmaske. Transfer inklusive." },
  },
  "ozel-tekne-turu": {
    en: { name: "Private Boat Charter", tagline: "The whole boat is yours: family, celebration or fishing", desc: "For those who prefer no crowds: the boat is only for your group. Route, duration and catering planned around you — birthdays, proposals, family days or fishing." },
    de: { name: "Privates Boot (Charter)", tagline: "Das ganze Boot für Sie: Familie, Feier oder Angeln", desc: "Für alle, die keine Menschenmassen mögen: das Boot gehört nur Ihrer Gruppe. Route, Dauer und Verpflegung ganz nach Wunsch." },
  },
  "yunus-gosterisi-ve-yuzme": { en: { name: "Dolphin Show + Swim with Dolphins", tagline: "Watch the show, then swim with the dolphins" }, de: { name: "Delphinshow + Schwimmen mit Delphinen", tagline: "Show ansehen und mit Delphinen schwimmen" } },
  "tuplu-dalis": {
    en: { name: "Scuba Diving", tagline: "2 dives at Europe's first underwater museum, lunch included" },
    de: { name: "Tauchen (Scuba Diving)", tagline: "2 Tauchgänge im ersten Unterwassermuseum Europas" },
  },
  "tekneden-balik-avi": { en: { name: "Fishing Trip", tagline: "All gear provided, the catch is yours" }, de: { name: "Angeltour", tagline: "Ausrüstung inklusive, der Fang gehört Ihnen" } },
  "alanya-turu": { en: { name: "Alanya City Tour", tagline: "Castle, Damlataş cave, Dim river and a 1-hour boat trip" }, de: { name: "Alanya Stadtrundfahrt", tagline: "Burg, Damlataş-Höhle, Dim-Fluss und 1 Std. Bootsfahrt" } },
  "aquapark": { en: { name: "Aquapark Tour", tagline: "Slides and pools — 6 hours of family fun" }, de: { name: "Aquapark Tour", tagline: "Rutschen und Pools — 6 Stunden Familienspaß" } },
  "antalya-akvaryum": { en: { name: "Antalya Aquarium Tour", tagline: "The world's biggest tunnel aquarium + free time" }, de: { name: "Antalya Aquarium Tour", tagline: "Das größte Tunnelaquarium der Welt + Freizeit" } },
  "legends-gece-gosterisi": { en: { name: "Legends Night Light Show", tagline: "An evening of light and water at Land of Legends" }, de: { name: "Legends Nacht-Lichtshow", tagline: "Ein Abend voller Licht und Wasser im Land of Legends" } },
  "ormana-altinbesik": { en: { name: "Ormana & Altınbeşik Cave Tour", tagline: "Boat ride inside Turkey's largest cave" }, de: { name: "Ormana & Altınbeşik-Höhle", tagline: "Bootsfahrt in der größten Höhle der Türkei" } },
  "vip-havalimani-transfer": {
    en: { name: "VIP Airport Transfer", tagline: "Private car from Antalya Airport to your hotel, 24/7", desc: "Whenever your flight lands: name-board welcome and a comfortable private transfer to your hotel. Child seats and welcome refreshments on request." },
    de: { name: "VIP Flughafentransfer", tagline: "Privatwagen vom Flughafen Antalya zum Hotel, 24/7", desc: "Egal wann Ihr Flug landet: Empfang mit Namensschild und bequemer Privattransfer zum Hotel. Kindersitze und Willkommensgetränke auf Anfrage." },
  },
  "rafting-kombo": {
    en: { name: "Rafting Combo: Rafting + Zipline + Buggy + Quad + Canyon", tagline: "Five adventures in one package, lunch included", desc: "The fullest day we offer: 15 km of rafting in Köprülü Canyon, zipline above the trees, buggy and quad trails, plus a canyon tour. Lunch by the river included." },
    de: { name: "Rafting Combo: Rafting + Zipline + Buggy + Quad + Canyon", tagline: "Fünf Abenteuer in einem Paket, Mittagessen inklusive", desc: "Unser vollster Tag: 15 km Rafting im Köprülü-Canyon, Zipline über den Bäumen, Buggy- und Quad-Parcours sowie eine Canyon-Tour. Mittagessen am Fluss inklusive." },
  },
  "jeep-safari": {
    en: { name: "Jeep Safari", tagline: "Dam, waterfall, mountain village and a 1-hour boat trip", desc: "Open-top jeeps into the Taurus villages: dam and waterfall views, mosque and old bridge stops, a mountain village break and a one-hour boat trip. No shopping stops, lunch included." },
    de: { name: "Jeep Safari", tagline: "Staudamm, Wasserfall, Bergdorf und 1 Std. Bootsfahrt", desc: "Mit offenen Jeeps in die Taurusdörfer: Staudamm- und Wasserfallblicke, Moschee und alte Brücke, Pause im Bergdorf und eine einstündige Bootsfahrt. Ohne Shopping, Mittagessen inklusive." },
  },
  "quad-buggy-safari": { en: { name: "Quad & Buggy Safari", tagline: "2.5 hours of dust and adrenaline in the Taurus hills" }, de: { name: "Quad & Buggy Safari", tagline: "2,5 Stunden Staub und Adrenalin im Taurus" } },
  "quad-buggy-rafting": { en: { name: "Quad/Buggy + Rafting Combo", tagline: "15 km rafting plus 2 hours of quad or buggy" }, de: { name: "Quad/Buggy + Rafting Combo", tagline: "15 km Rafting plus 2 Std. Quad oder Buggy" } },
  "mix-tur-7-1": { en: { name: "Mix Tour 7+1", tagline: "Taurus, dam, waterfall, village + boat on the green lake" }, de: { name: "Mix Tour 7+1", tagline: "Taurus, Staudamm, Wasserfall, Dorf + Bootsfahrt" } },
  "akvaryum-legends-kombo": { en: { name: "Aquarium + Legends Night Show", tagline: "Tunnel aquarium by day, light show by night" }, de: { name: "Aquarium + Legends Nachtshow", tagline: "Tunnelaquarium am Tag, Lichtshow am Abend" } },
  "arac-kiralama": { en: { name: "Rent a Car", tagline: "From economy cars to VIP vans — delivered to your hotel" }, de: { name: "Mietwagen", tagline: "Vom Kleinwagen bis zum VIP-Van — Lieferung ans Hotel" } },
  "quad-safari": {
    en: { name: "Quad Safari", tagline: "2 hours of dusty ATV trails — every day", desc: "A two-hour quad (ATV) trail in the Taurus foothills: dirt roads, stream crossings and hilltop views. No licence needed, helmet and gear provided." },
    de: { name: "Quad Safari", tagline: "2 Stunden staubige ATV-Pisten — täglich", desc: "Zweistündiger Quad-Parcours (ATV) im Taurus: Feldwege, Bachdurchfahrten und Panoramablicke. Kein Führerschein nötig, Helm und Ausrüstung inklusive." },
  },
  "buggy-safari": {
    en: { name: "Buggy Safari", tagline: "2 hours of mud and adrenaline in a caged buggy", desc: "Two-seater caged buggies on the Taurus trail for two hours. Safer and more comfortable than a quad — ideal for couples and groups of friends. Getting dirty is guaranteed." },
    de: { name: "Buggy Safari", tagline: "2 Stunden Schlamm und Adrenalin im Käfig-Buggy", desc: "Zweisitzige Käfig-Buggys auf dem Taurus-Parcours, zwei Stunden lang. Sicherer und komfortabler als ein Quad — ideal für Paare und Freundesgruppen." },
  },
  "aile-buggy-safari": {
    en: { name: "Family Buggy Safari (4-Seater)", tagline: "The whole family in one buggy — price per vehicle", desc: "Spacious four-seater buggies for families: parents and children in the same safe caged vehicle. The price is per vehicle, covering the whole family." },
    de: { name: "Familien-Buggy-Safari (4-Sitzer)", tagline: "Die ganze Familie in einem Buggy — Preis pro Fahrzeug", desc: "Geräumige Vier-Sitzer-Buggys für Familien: Eltern und Kinder im selben sicheren Käfigfahrzeug. Der Preis gilt pro Fahrzeug für die ganze Familie." },
  },
  "mega-mix-jeep-tekne-quad": {
    en: { name: "Mega Mix: Jeep Safari + Boat + Quad", tagline: "Three adventures in one day — land, water and dust", desc: "The fullest package of the day: open-top jeep safari through Taurus villages, a boat tour on the green lake and a quad trail. Lunch included." },
    de: { name: "Mega Mix: Jeep-Safari + Boot + Quad", tagline: "Drei Abenteuer an einem Tag — Land, Wasser und Staub", desc: "Das vollste Paket des Tages: Jeep-Safari durch Taurusdörfer, Bootstour auf dem grünen See und Quad-Parcours. Mittagessen inklusive." },
  },
  "sapadere-kanyonu": {
    en: { name: "Sapadere Canyon Tour", tagline: "Icy canyon pools, wooden walkway and a waterfall", desc: "Sapadere Canyon carved into the Taurus mountains behind Alanya. A 750-metre walk on wooden platforms, a swim stop in the ice-cold natural pool, lunch in a mountain village and a huge stalactite cave." },
    de: { name: "Sapadere-Canyon Tour", tagline: "Eiskalte Canyon-Pools, Holzsteg und Wasserfall", desc: "Der Sapadere-Canyon im Taurusgebirge hinter Alanya. 750 Meter Spaziergang auf Holzstegen, Badepause im eiskalten Naturpool, Mittagessen im Bergdorf und eine große Tropfsteinhöhle." },
  },
  "fire-of-anatolia-gosterisi": {
    en: { name: "Fire of Anatolia Dance Show", tagline: "The world-famous dance show at Aspendos", desc: "The Guinness record-holding Fire of Anatolia dance company in a spectacular 1.5-hour performance blending dances from every corner of Anatolia." },
    de: { name: "Fire of Anatolia Tanzshow", tagline: "Die weltberühmte Tanzshow in Aspendos", desc: "Die Guinness-Rekord-Tanzgruppe Fire of Anatolia in einer spektakulären 1,5-stündigen Show mit Tänzen aus ganz Anatolien." },
  },
  "gun-batimi-tekne-turu": {
    en: { name: "Sunset Boat Tour", tagline: "Sunset over the Mediterranean, music and a swim", desc: "We set sail at the best hour of the day: a swim stop, music on board, refreshments and the sun setting on the horizon. Perfect for couples and photographers." },
    de: { name: "Sonnenuntergangs-Bootstour", tagline: "Sonnenuntergang, Musik und ein Bad im Meer", desc: "Wir stechen zur schönsten Stunde des Tages in See: Badepause, Musik an Bord, Snacks und der Sonnenuntergang am Horizont. Perfekt für Paare und Fotografen." },
  },
  "balon-pamukkale-turu": {
    en: { name: "Hot Air Balloon + Pamukkale Tour", tagline: "Balloon flight at dawn and the white travertines", desc: "A hot air balloon flight over Pamukkale at sunrise, followed by the white travertines and Hierapolis Ancient City. Breakfast and lunch included." },
    de: { name: "Heißluftballon + Pamukkale Tour", tagline: "Ballonflug im Morgengrauen und die Kalkterrassen", desc: "Heißluftballonfahrt über Pamukkale bei Sonnenaufgang, danach die weißen Kalkterrassen und die antike Stadt Hierapolis. Frühstück und Mittagessen inklusive." },
  },
  "rafting-zipline": { en: { name: "Rafting + Zipline Combo", tagline: "15 km rafting and a zipline over the canyon" }, de: { name: "Rafting + Zipline Combo", tagline: "15 km Rafting und Zipline über dem Canyon" } },
  "jeep-rafting-kombo": { en: { name: "Jeep Safari + Rafting Combo", tagline: "Safari in the Taurus and rafting on the river" }, de: { name: "Jeep-Safari + Rafting Combo", tagline: "Safari im Taurus und Rafting auf dem Fluss" } },
  "karacaoren-kanyon-tekne": { en: { name: "Karacaören Canyon Boat Tour", tagline: "Quiet canyon cruising on the Adrasan reservoir" }, de: { name: "Karacaören-Canyon Bootstour", tagline: "Ruhige Canyonfahrt auf dem Adrasan-Stausee" } },
  "istanbul-gunubirlik": {
    en: { name: "Istanbul Day Trip (by Plane)", tagline: "Fly out in the morning, back at night — Hagia Sophia, Bosphorus", desc: "Morning flight from Antalya to Istanbul: Hagia Sophia, the Blue Mosque, the Grand Bazaar area and a Bosphorus cruise, returning by evening flight." },
    de: { name: "Istanbul Tagesausflug (mit Flug)", tagline: "Morgens hin, abends zurück — Hagia Sophia, Bosporus", desc: "Morgenflug von Antalya nach Istanbul: Hagia Sophia, Blaue Moschee, Großer Basar und eine Bosporus-Rundfahrt, Rückflug am Abend." },
  },
  "side-tekne-turu": {
    en: { name: "Side Boat Tour", tagline: "Sea, music and swimming — our best value boat trip", desc: "A full day on the Mediterranean from Side harbour. Plenty of swim stops, music and animation on board, lunch included — the best value way to enjoy the sea." },
    de: { name: "Side Bootstour", tagline: "Meer, Musik und Baden — bestes Preis-Leistungs-Verhältnis", desc: "Ein ganzer Tag auf dem Mittelmeer ab dem Hafen von Side. Viele Badepausen, Musik und Animation an Bord, Mittagessen inklusive." },
  },
};

/** Sık tekrar eden "fiyata dahil" ifadelerinin çevirileri */
const PHRASES: Record<string, Partial<Record<Locale, string>>> = {
  "Otelden alma-bırakma": { en: "Hotel pick-up and drop-off", de: "Hotelabholung und -rückfahrt" },
  "Gidiş-dönüş transfer": { en: "Return transfer", de: "Hin- und Rücktransfer" },
  "Ulaşım": { en: "Transport", de: "Transport" },
  "Ulaşım (klimalı araç)": { en: "Transport (air-conditioned vehicle)", de: "Transport (klimatisiertes Fahrzeug)" },
  "Öğle yemeği": { en: "Lunch", de: "Mittagessen" },
  "Kahvaltı ve öğle yemeği": { en: "Breakfast and lunch", de: "Frühstück und Mittagessen" },
  "Tüm öğünler": { en: "All meals", de: "Alle Mahlzeiten" },
  "Sigorta": { en: "Insurance", de: "Versicherung" },
  "Rehberlik": { en: "Guiding", de: "Reiseleitung" },
  "Profesyonel rehber": { en: "Professional guide", de: "Professioneller Guide" },
  "Profesyonel rehberler": { en: "Professional guides", de: "Professionelle Guides" },
  "Tekne turu": { en: "Boat tour", de: "Bootstour" },
  "Tüm rafting ekipmanı": { en: "All rafting equipment", de: "Komplette Rafting-Ausrüstung" },
  "Tüm aktivite ekipmanları": { en: "All activity equipment", de: "Komplette Ausrüstung" },
  "Tüm dalış ekipmanı": { en: "All diving equipment", de: "Komplette Tauchausrüstung" },
  "Park giriş bileti": { en: "Park entrance ticket", de: "Parkeintritt" },
  "Akvaryum giriş bileti": { en: "Aquarium entrance ticket", de: "Aquarium-Eintritt" },
  "Gösteri bileti": { en: "Show ticket", de: "Showticket" },
  "Gösteri alanı girişi": { en: "Show venue entry", de: "Eintritt zum Showgelände" },
  "Müze girişleri": { en: "Museum entrance fees", de: "Museumseintritte" },
  "Meşrubatlar": { en: "Soft drinks", de: "Softdrinks" },
  "İkramlar": { en: "Refreshments", de: "Snacks und Getränke" },
  "Eğitmen": { en: "Instructor", de: "Trainer" },
  "Animasyon ekibi": { en: "Animation team", de: "Animationsteam" },
  "Animasyon": { en: "Animation", de: "Animation" },
  "1 gece konaklama": { en: "1 night accommodation", de: "1 Übernachtung" },
  "Tandem uçuş": { en: "Tandem flight", de: "Tandemflug" },
  "Tüm ekipman": { en: "All equipment", de: "Komplette Ausrüstung" },
  "Tüm hamam programı": { en: "Full hammam programme", de: "Komplettes Hamam-Programm" },
  "Havlu ve peştemal": { en: "Towel and peştemal", de: "Handtuch und Peştemal" },
  "Tekne ve kaptan": { en: "Boat and captain", de: "Boot und Kapitän" },
  "Yakıt": { en: "Fuel", de: "Kraftstoff" },
  "Özel araç ve şoför": { en: "Private car and driver", de: "Privatwagen und Fahrer" },
  "Karşılama hizmeti": { en: "Meet & greet service", de: "Empfangsservice" },
  "Quad ve kask": { en: "Quad and helmet", de: "Quad und Helm" },
  "Buggy ve kask": { en: "Buggy and helmet", de: "Buggy und Helm" },
  "4 kişilik buggy": { en: "4-seater buggy", de: "4-Sitzer-Buggy" },
  "Kasklar": { en: "Helmets", de: "Helme" },
  "Kanyon girişi": { en: "Canyon entrance", de: "Canyon-Eintritt" },
  "Pamukkale giriş ücreti": { en: "Pamukkale entrance fee", de: "Pamukkale-Eintritt" },
  "Pamukkale girişi": { en: "Pamukkale entrance", de: "Pamukkale-Eintritt" },
  "Balon uçuşu": { en: "Balloon flight", de: "Ballonfahrt" },
  "Mağara tekne turu": { en: "Cave boat ride", de: "Bootsfahrt in der Höhle" },
  "Olta ve yem": { en: "Rods and bait", de: "Angeln und Köder" },
  "At ve ekipman": { en: "Horse and equipment", de: "Pferd und Ausrüstung" },
  "Rafting ve zipline ekipmanı": { en: "Rafting and zipline equipment", de: "Rafting- und Zipline-Ausrüstung" },
  "Rafting ve safari ekipmanları": { en: "Rafting and safari equipment", de: "Rafting- und Safari-Ausrüstung" },
  "Rafting ekipmanı": { en: "Rafting equipment", de: "Rafting-Ausrüstung" },
  "Jeep safari": { en: "Jeep safari", de: "Jeep-Safari" },
  "Gidiş-dönüş uçak bileti": { en: "Return flight ticket", de: "Hin- und Rückflug" },
  "Havalimanı transferleri": { en: "Airport transfers", de: "Flughafentransfers" },
  "Şehir içi ulaşım": { en: "City transport", de: "Transport in der Stadt" },
  "Araç teslim ve alım": { en: "Vehicle delivery and pick-up", de: "Fahrzeuglieferung und -abholung" },
  "Standart sigorta": { en: "Standard insurance", de: "Standardversicherung" },
  "7/24 destek hattı": { en: "24/7 support line", de: "24/7-Hotline" },
  "Öğle yemeği ve meyve tabağı": { en: "Lunch and fruit plate", de: "Mittagessen und Früchteteller" },
  "3 saat tekne turu": { en: "3-hour boat tour", de: "3-stündige Bootstour" },
  "1 saat tekne turu": { en: "1-hour boat tour", de: "1-stündige Bootstour" },
};

export function translateTour(slug: string, locale: Locale) {
  return TOUR_I18N[slug]?.[locale];
}

export function translatePhrase(text: string, locale: Locale) {
  if (locale === "tr") return text;
  return PHRASES[text]?.[locale] ?? text;
}
