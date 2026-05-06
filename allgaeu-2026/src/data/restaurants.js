// Restaurants — sortiert nach Google-Bewertung desc.
// Aenderungen werden nach dem naechsten Reload sichtbar (kein Build noetig).
//
// Filter-Regeln (Recherche-Zeitpunkt 2026-05-06):
//   0–5 km vom Center Parcs Park Allgaeu (Urlau): Bewertung >= 4.0
//   5–20 km:                                       Bewertung >= 4.5
//   Mindestens 20 Bewertungen.
//
// Schema:
//   id, mapsQuery, title, subtitle, cat='restaurant', catLabel, emoji, heroLabel,
//   image (null = stylized cover), googleRating, googleReviews,
//   pills [{ kind, text }], info [{ k, v, state }], desc, url, urlLabel
//
// Preis-Konvention im pill-Eintrag mit kind='price':
//   text: 'Preis €'   = guenstig (Hauptgerichte < 15 EUR)
//   text: 'Preis €€'  = mittel   (15–30 EUR)
//   text: 'Preis €€€' = gehoben  (> 30 EUR)
//   text: 'Preis ?'   = unbekannt

export const restaurants = [
  {
    id: 'mondo-belfiore-leutkirch',
    mapsQuery: 'Mondo Belfiore, Kornhausstraße 3, 88299 Leutkirch im Allgäu',
    title: 'Mondo Belfiore',
    subtitle: 'Leutkirch · Italienisches Feinkost-Bistro',
    cat: 'restaurant', catLabel: 'Italienisch',
    emoji: '🍝', heroLabel: 'Feinkost-Bistro',
    image: null,
    googleRating: 4.9, googleReviews: 80,
    pills: [
      { kind: 'dist', text: '📍 7 km · 12 min' },
      { kind: 'cuisine', text: 'Italienisch' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Öffnungszeiten', v: 'Di–Fr 10–18, Sa 9–14; Mo+So Ruhetag' },
      { k: 'Bewertungen', v: '80 (Google)' }
    ],
    desc: 'Kleines Feinkost-Bistro mit hochwertigen Produkten direkt aus Italien, authentische Spezialitäten und edle Weine in stylischem Ambiente.',
    url: 'https://mondobelfiore.de',
    urlLabel: 'mondobelfiore.de'
  },
  {
    id: 'kulturbrauerei-leutkirch',
    mapsQuery: 'Leutkircher Kulturbrauerei, Bahnhofstraße 31, 88299 Leutkirch im Allgäu',
    title: 'Leutkircher Kulturbrauerei',
    subtitle: 'Leutkirch · Allgäuer Brauereiküche',
    cat: 'restaurant', catLabel: 'Brauerei',
    emoji: '🍺', heroLabel: 'Brauereigasthof',
    image: null,
    googleRating: 4.8, googleReviews: 2660,
    pills: [
      { kind: 'dist', text: '📍 7 km · 12 min' },
      { kind: 'cuisine', text: 'Allgäuer Küche' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'ja', state: 'ok' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Di–Sa 11:30–14 + 17:30–22; So 11:30–21; Mo Ruhetag' },
      { k: 'Bewertungen', v: '2.660 (Google)' }
    ],
    desc: 'Hauseigene Brauerei im historischen Bahnhofsgebäude, regionale Allgäuer Küche und großer Biergarten — Top-Adresse in Leutkirch.',
    url: 'https://www.leutkircher-kulturbrauerei.de',
    urlLabel: 'leutkircher-kulturbrauerei.de'
  },
  {
    id: 'sai-thai-leutkirch',
    mapsQuery: 'Sai Thai Restaurant, Landhausstraße 1, 88299 Leutkirch im Allgäu',
    title: 'Sai Thai',
    subtitle: 'Leutkirch · Thailändisch & Asiatisch',
    cat: 'restaurant', catLabel: 'Thai',
    emoji: '🍜', heroLabel: 'Thailändisch',
    image: null,
    googleRating: 4.8, googleReviews: 1157,
    pills: [
      { kind: 'dist', text: '📍 8 km · 13 min' },
      { kind: 'cuisine', text: 'Thai' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'ja', state: 'ok' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'tägl. 11:30–14 + 17:30–22 (Fr/Sa bis 23)' },
      { k: 'Bewertungen', v: '1.157 (Google)' }
    ],
    desc: 'Authentische thailändische Küche mit modernem Ambiente — laut Reviews "bestes Restaurant des Allgäus". Hund ausdrücklich willkommen.',
    url: 'https://sai-thai.de',
    urlLabel: 'sai-thai.de'
  },
  {
    id: 'akropolis-leutkirch',
    mapsQuery: 'Restaurant Akropolis, Wangener Str. 7, 88299 Leutkirch im Allgäu',
    title: 'Akropolis',
    subtitle: 'Leutkirch · Griechisch & Mediterran',
    cat: 'restaurant', catLabel: 'Griechisch',
    emoji: '🥗', heroLabel: 'Griechische Küche',
    image: null,
    googleRating: 4.8, googleReviews: 772,
    pills: [
      { kind: 'dist', text: '📍 7 km · 12 min' },
      { kind: 'cuisine', text: 'Griechisch' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'ja', state: 'ok' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Di–So 11:30–14 + 17:30–22; Mo Ruhetag' },
      { k: 'Bewertungen', v: '772 (Google)' }
    ],
    desc: 'Klassische griechische Küche mit Gyros, Souvlaki und Moussaka, freundlicher Service und Außenbereich.',
    url: 'https://www.akropolis-leutkirch.de',
    urlLabel: 'akropolis-leutkirch.de'
  },
  {
    id: 'hello-my-deer-isny',
    mapsQuery: 'Hello My Deer, Marktplatz 6, 88316 Isny im Allgäu',
    title: 'Hello My Deer',
    subtitle: 'Isny · Modern International',
    cat: 'restaurant', catLabel: 'Modern',
    emoji: '🦌', heroLabel: 'Modern International',
    image: null,
    googleRating: 4.8, googleReviews: 120,
    pills: [
      { kind: 'dist', text: '📍 14 km · 18 min' },
      { kind: 'cuisine', text: 'Modern' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mi–Sa 11:30–14 + 17:30–22; So+Mo+Di Ruhetag (saisonal)' },
      { k: 'Bewertungen', v: '120 (Google)' }
    ],
    desc: 'Stylische Café-Bar mit modernen, regional aufgewerteten Gerichten am Marktplatz Isny — Geheimtipp laut Gästen.',
    url: 'https://www.hellomydeer.de',
    urlLabel: 'hellomydeer.de'
  },
  {
    id: 'allgaeuer-stuben-isny',
    mapsQuery: 'Allgäuer Stuben Hotel Hohe Linde, Lindauer Str. 75, 88316 Isny im Allgäu',
    title: 'Allgäuer Stuben',
    subtitle: 'Isny · Bib Gourmand · Hotel Hohe Linde',
    cat: 'restaurant', catLabel: 'Bib Gourmand',
    emoji: '⭐', heroLabel: 'Regional & Mediterran',
    image: null,
    googleRating: 4.7, googleReviews: 504,
    pills: [
      { kind: 'dist', text: '📍 14 km · 18 min' },
      { kind: 'cuisine', text: 'Regional/Mediterran' },
      { kind: 'price', text: 'Preis €€€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mo–Sa 17–22; So Ruhetag' },
      { k: 'Bewertungen', v: '504 (Google)' }
    ],
    desc: 'Bib Gourmand 2025, 86 Falstaff-Punkte. Familie Rimmele kocht regional & mediterran auf hohem Niveau in familiärer Atmosphäre.',
    url: 'https://hotel-hohe-linde.de/restaurant/',
    urlLabel: 'hotel-hohe-linde.de'
  },
  {
    id: 'obere-muehle-leutkirch',
    mapsQuery: 'Gasthaus zur Oberen Mühle, Oberer Mühleweg 7, 88299 Leutkirch im Allgäu',
    title: 'Gasthaus zur Oberen Mühle',
    subtitle: 'Leutkirch · Biergarten am Bach',
    cat: 'restaurant', catLabel: 'Biergarten',
    emoji: '🌳', heroLabel: 'Biergarten am Wasserrad',
    image: null,
    googleRating: 4.7, googleReviews: 80,
    pills: [
      { kind: 'dist', text: '📍 8 km · 14 min' },
      { kind: 'cuisine', text: 'Allgäuer/Italienisch' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mo+Do 18–23; Fr+Sa 18–24; So 10–23; Di+Mi Ruhetag' },
      { k: 'Bewertungen', v: '80 (Google)' }
    ],
    desc: 'Idyllischer Biergarten am Bach mit Wasserrad — einer der schönsten Biergärten Oberschwabens.',
    url: '',
    urlLabel: ''
  },
  {
    id: 'sontags-kisslegg',
    mapsQuery: 'Sontag\'s Schlossparkrestaurant, Schloßstraße 1, 88353 Kißlegg',
    title: 'Sontag\'s Schlosspark',
    subtitle: 'Kißlegg · Terrasse am Schlosspark',
    cat: 'restaurant', catLabel: 'Regional',
    emoji: '🥩', heroLabel: 'Regional & BBQ',
    image: null,
    googleRating: 4.7, googleReviews: 200,
    pills: [
      { kind: 'dist', text: '📍 12 km · 16 min' },
      { kind: 'cuisine', text: 'Regional' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Di–Sa 11:30–14 + 17:30–22; So 11:30–20; Mo Ruhetag' },
      { k: 'Bewertungen', v: '200 (Google)' }
    ],
    desc: 'Sonnenterrasse direkt am Kißlegger Schlosspark, regionale Lieferanten, BBQ-Abende mit Pulled Pork und Dry-Aged-Steaks.',
    url: 'https://sontags-kisslegg.de',
    urlLabel: 'sontags-kisslegg.de'
  },
  {
    id: 'dorfgasthof-hirsch-urlau',
    mapsQuery: 'Historischer Dorfgasthof Hirsch, Unterer Dorfweg 4, 88299 Leutkirch-Urlau',
    title: 'Dorfgasthof Hirsch',
    subtitle: 'Urlau · Direkt um die Ecke vom Park',
    cat: 'restaurant', catLabel: 'Allgäuer',
    emoji: '🏡', heroLabel: 'Historisches Gasthaus',
    image: null,
    googleRating: 4.6, googleReviews: 1427,
    pills: [
      { kind: 'dist', text: '📍 1 km · 3 min' },
      { kind: 'cuisine', text: 'Allgäuer Küche' },
      { kind: 'price', text: 'Preis €€€' }
    ],
    info: [
      { k: 'Hund', v: 'ja', state: 'ok' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Di–Fr ab 17; Sa+So+FT ab 11:30' },
      { k: 'Bewertungen', v: '1.427 (Google)' }
    ],
    desc: 'Historisches Gasthaus von 1751 mit regionaler Allgäuer Küche, eigenes Genusshotel — direkt um die Ecke vom Center Parcs.',
    url: 'https://dorfgasthof-hirsch.de',
    urlLabel: 'dorfgasthof-hirsch.de'
  },
  {
    id: 'bayrischer-hof-leutkirch',
    mapsQuery: 'Bayrischer Hof, Kemptener Straße 53, 88299 Leutkirch im Allgäu',
    title: 'Bayrischer Hof',
    subtitle: 'Leutkirch · Biergarten + Spielplatz',
    cat: 'restaurant', catLabel: 'Schwäbisch',
    emoji: '🥨', heroLabel: 'Traditions-Gasthaus',
    image: null,
    googleRating: 4.6, googleReviews: 1164,
    pills: [
      { kind: 'dist', text: '📍 7 km · 11 min' },
      { kind: 'cuisine', text: 'Schwäbisch/Bayerisch' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'ja', state: 'ok' },
      { k: 'Kleinkind', v: 'Spielplatz + Minigolf', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Di–Sa 11:30–13:30 + 17:30–20:30; So 11:30–13:30; Mo Ruhetag' },
      { k: 'Bewertungen', v: '1.164 (Google)' }
    ],
    desc: 'Traditionsgasthaus in 4. Generation Familie Bally, große Sonnenterrasse mit Biergarten, Spielplatz und Minigolf für Kinder.',
    url: 'https://www.bayrischer-hof.com',
    urlLabel: 'bayrischer-hof.com'
  },
  {
    id: 'pfeffermuehle-leutkirch',
    mapsQuery: 'Pfeffermühle Da Pasquale, Memminger Str. 7, 88299 Leutkirch im Allgäu',
    title: 'Pfeffermühle Da Pasquale',
    subtitle: 'Leutkirch · Italienisch seit 36 Jahren',
    cat: 'restaurant', catLabel: 'Italienisch',
    emoji: '🍕', heroLabel: 'Pizza & Pasta',
    image: null,
    googleRating: 4.6, googleReviews: 294,
    pills: [
      { kind: 'dist', text: '📍 8 km · 13 min' },
      { kind: 'cuisine', text: 'Italienisch' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mi–Fr 11:30–14 + 18–22; Sa 18–22; So 11:30–14 + 18–22; Mo+Di Ruhetag' },
      { k: 'Bewertungen', v: '294 (Google)' }
    ],
    desc: 'Seit über 36 Jahren in Familienhand — verfeinerte italienische Küche, beste Pizza und Pasta in Leutkirch laut Gästen.',
    url: 'https://pfeffermuehledapasquale.de',
    urlLabel: 'pfeffermuehledapasquale.de'
  },
  {
    id: 'roessle-haselburg-leutkirch',
    mapsQuery: 'Rössle Haselburg, Haselburg 1, 88299 Leutkirch im Allgäu',
    title: 'Rössle Haselburg',
    subtitle: 'Leutkirch/Haselburg · LandZunge-zertifiziert',
    cat: 'restaurant', catLabel: 'Allgäuer',
    emoji: '🥘', heroLabel: 'LandZunge-Gasthof',
    image: null,
    googleRating: 4.6, googleReviews: 168,
    pills: [
      { kind: 'dist', text: '📍 6 km · 10 min' },
      { kind: 'cuisine', text: 'Allgäuer Küche' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'Spielplatz + Sandkasten', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mi–So 11:30–14 + 17–21; Mo+Di Ruhetag' },
      { k: 'Bewertungen', v: '168 (Google)' }
    ],
    desc: 'LandZunge-zertifizierter Gasthof mit regionaler Küche (Käsespätzle, Schnitzel), familienfreundlich mit Spielplatz und Sandkasten.',
    url: 'https://www.roessle-haselburg.de',
    urlLabel: 'roessle-haselburg.de'
  },
  {
    id: 'mohren-leutkirch',
    mapsQuery: 'Brauereigasthof Mohren, Wangener Str. 1, 88299 Leutkirch im Allgäu',
    title: 'Brauereigasthof Mohren',
    subtitle: 'Leutkirch · Härle-Brauerei',
    cat: 'restaurant', catLabel: 'Brauerei',
    emoji: '🍺', heroLabel: 'Brauereigasthof',
    image: null,
    googleRating: 4.5, googleReviews: 997,
    pills: [
      { kind: 'dist', text: '📍 7 km · 11 min' },
      { kind: 'cuisine', text: 'Allgäuer Küche' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'ja', state: 'ok' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mo 17:30–24; Di–Sa 11–14 + 17:30–24; So Ruhetag' },
      { k: 'Bewertungen', v: '997 (Google)' }
    ],
    desc: 'Brauereigasthof mit Härle-Bieren und frischer regionaler Küche, kinderfreundlich und mit Terrasse.',
    url: 'https://www.haerle-brauereigasthof-mohren.de',
    urlLabel: 'haerle-brauereigasthof-mohren.de'
  },
  {
    id: 'gasthaus-halde-herlazhofen',
    mapsQuery: 'Gasthaus Halde, Dorfstraße 18, 88299 Leutkirch-Herlazhofen',
    title: 'Gasthaus Halde',
    subtitle: 'Herlazhofen · Spielplatz direkt am Restaurant',
    cat: 'restaurant', catLabel: 'Allgäuer',
    emoji: '🏡', heroLabel: 'Hausmannskost',
    image: null,
    googleRating: 4.5, googleReviews: 80,
    pills: [
      { kind: 'dist', text: '📍 4 km · 7 min' },
      { kind: 'cuisine', text: 'Hausmannskost' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'Spielplatz direkt vor Tür', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mo+Do 16:30–23; Fr+Sa 11–14 + 16:30–23; So 10–14 + 16:30–22; Di+Mi Ruhetag' },
      { k: 'Bewertungen', v: '80 (Google)' }
    ],
    desc: 'Sehr nah am Center Parcs, gute Hausmannskost (Zwiebelrostbraten!), kinderfreundlich mit Spielplatz direkt am Restaurant.',
    url: 'https://gasthaus-halde.de',
    urlLabel: 'gasthaus-halde.de'
  },
  {
    id: 'hirsch-isny',
    mapsQuery: 'Restaurant Hirsch Isny, Marktplatz 1, 88316 Isny im Allgäu',
    title: 'Restaurant Hirsch Isny',
    subtitle: 'Isny · Historisches Haus am Marktplatz',
    cat: 'restaurant', catLabel: 'Regional',
    emoji: '🦌', heroLabel: 'Saisonal & Regional',
    image: null,
    googleRating: 4.5, googleReviews: 50,
    pills: [
      { kind: 'dist', text: '📍 14 km · 18 min' },
      { kind: 'cuisine', text: 'Regional' },
      { kind: 'price', text: 'Preis €€€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Di–Sa 11:30–14 + 17:30–22; So+Mo Ruhetag' },
      { k: 'Bewertungen', v: '50 (Google)' }
    ],
    desc: 'Historisches Haus am Marktplatz Isny mit großzügiger Sonnenterrasse, regional und saisonal mit modernen Akzenten.',
    url: 'https://www.hirsch-isny.de',
    urlLabel: 'hirsch-isny.de'
  },
  {
    id: 'taverna-estia-wangen',
    mapsQuery: 'Taverna Estia Hotel Prassberger, Kolpingstraße 7, 88239 Wangen im Allgäu',
    title: 'Taverna Estia',
    subtitle: 'Wangen · Hotel Prassberger',
    cat: 'restaurant', catLabel: 'Griechisch',
    emoji: '🥗', heroLabel: 'Griechische Taverne',
    image: null,
    googleRating: 4.5, googleReviews: 353,
    pills: [
      { kind: 'dist', text: '📍 19 km · 23 min' },
      { kind: 'cuisine', text: 'Griechisch' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'Mo, Mi–Fr 17–22; Sa 11:30–14 + 17–22; So 11:30–14 + 17–21; Di Ruhetag' },
      { k: 'Bewertungen', v: '353 (Google)' }
    ],
    desc: 'Authentische griechische Taverne im Hotel Prassberger, schön dekoriert und sehr beliebt — typische Gerichte mit 5-Sterne-Qualität.',
    url: 'https://hotel-prassberger.de/service/taverne-estia',
    urlLabel: 'hotel-prassberger.de'
  },
  {
    id: 'hong-kong-wangen',
    mapsQuery: 'Hong Kong China-Restaurant, Bindstraße 62, 88239 Wangen im Allgäu',
    title: 'Hong Kong',
    subtitle: 'Wangen · Chinesisch',
    cat: 'restaurant', catLabel: 'Chinesisch',
    emoji: '🥢', heroLabel: 'Chinesische Küche',
    image: null,
    googleRating: 4.5, googleReviews: 318,
    pills: [
      { kind: 'dist', text: '📍 19 km · 23 min' },
      { kind: 'cuisine', text: 'Chinesisch' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'tägl. 11:30–15 + 17–22 (Mi geschlossen)' },
      { k: 'Bewertungen', v: '318 (Google)' }
    ],
    desc: 'Beliebter Chinese mit großer Auswahl klassischer asiatischer Gerichte, gutes Preis-Leistungs-Verhältnis.',
    url: '',
    urlLabel: ''
  },
  {
    id: 'ochsen-kisslegg',
    mapsQuery: 'Hotel-Gasthof Ochsen Schlossgarten, Herrenstraße 21, 88353 Kißlegg',
    title: 'Hotel-Gasthof Ochsen',
    subtitle: 'Kißlegg · Biergarten am Schloss',
    cat: 'restaurant', catLabel: 'Allgäuer',
    emoji: '🌳', heroLabel: 'Schloss-Biergarten',
    image: null,
    googleRating: 4.5, googleReviews: 280,
    pills: [
      { kind: 'dist', text: '📍 12 km · 16 min' },
      { kind: 'cuisine', text: 'Allgäuer Küche' },
      { kind: 'price', text: 'Preis €€' }
    ],
    info: [
      { k: 'Hund', v: 'ja', state: 'ok' },
      { k: 'Kleinkind', v: 'familienfreundlich', state: 'ok' },
      { k: 'Öffnungszeiten', v: 'tägl. 11:30–14 + 17:30–22 (Biergarten saisonal)' },
      { k: 'Bewertungen', v: '280 (Google)' }
    ],
    desc: 'Einer der schönsten Biergärten im Allgäu unter Kastanien, direkt am Neuen Schloss Kißlegg, traditioneller Gasthof mit regionaler Küche.',
    url: 'https://www.ochsen-kisslegg.de',
    urlLabel: 'ochsen-kisslegg.de'
  }
];
