// Events — sortiert chronologisch (data-date asc).
// Aenderungen werden nach dem naechsten Reload sichtbar (kein Build noetig).
//
// Schema:
//   id          eindeutiger Slug
//   title       Hauptueberschrift
//   subtitle    kleine Zeile darunter
//   date        ISO-Datum (YYYY-MM-DD) — relevanter Tag fuer Sortierung
//   dateEnd     optional — fuer mehrtaegige Events (Ausstellungen). Wird zur Past-Filterung verwendet.
//   dateLabel   { month, day, dow }  Fuer Date-Stamp-Visual
//   time        Beschreibung des Zeitfensters
//   cat         'markt' | 'event' (steuert Hero-Gradient)
//   catLabel    Pill-Beschriftung links auf Hero
//   emoji       Hero-Emoji
//   heroLabel   Hero-Untertitel
//   image       URL zu echtem Bild oder null
//   pills, info, desc, url, urlLabel — wie bei activities

export const events = [
  {
    id: 'wm-leutkirch-mo',
    title: 'Wochenmarkt Leutkirch',
    subtitle: 'Leutkirch Innenstadt · Marktstrasse',
    date: '2026-05-11',
    dateLabel: { month: 'Mai', day: 11, dow: 'Mo' },
    time: '07:00–13:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🥕', heroLabel: 'Wochenmarkt',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~3 km · 8 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kinderwagen ok', state: 'ok' }
    ],
    desc: 'Gemuetlicher kleiner Wochenmarkt: Obst, Gemuese, Blumen, Fisch, Kaese, Wurst, Eier von Selbsterzeugern und regionalen Anbietern. <em>Mo = Anreisetag — eher knapp.</em>',
    url: 'https://www.leutkirch.de/de/Urlaub/Kulturerlebnis/Veranstaltungen/Veranstaltungskalender',
    urlLabel: 'leutkirch.de Veranstaltungen'
  },
  {
    id: 'wm-memmingen-di',
    title: 'Wochenmarkt Memmingen',
    subtitle: 'Marktplatz Memmingen (auch Sa 16.05.)',
    date: '2026-05-12',
    dateLabel: { month: 'Mai', day: 12, dow: 'Di' },
    time: '07:00–12:30 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🍅', heroLabel: 'Wochenmarkt',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~30 km · 30 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'grosser Marktplatz', state: 'ok' }
    ],
    desc: 'Frisches Obst & Gemuese, Gefluegel/Fisch, Backwaren, Eier, Pasta, Wurst & Kaese, Kraeuter, Honig. <em>Di-Slot bei uns nur Nachmittag — daher nur Sa praktikabel.</em>',
    url: 'https://www.tourismus-memmingen.de/detail/mmaddresstourismus/memminger-wochenmarkt.html',
    urlLabel: 'tourismus-memmingen.de'
  },
  {
    id: 'wm-wangen-mi',
    title: 'Wochenmarkt Wangen',
    subtitle: 'Marktplatz Altstadt · 70+ Haendler',
    date: '2026-05-13',
    dateLabel: { month: 'Mai', day: 13, dow: 'Mi' },
    time: '08:00–13:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🧀', heroLabel: 'Grosser Wochenmarkt',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~22 km · 25 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kopfsteinpflaster', state: 'maybe' }
    ],
    desc: 'Ueber 70 Haendler in der historischen Altstadt — regionale + ueberregionale Spezialitaeten. Einer der grossen Wochenmaerkte der Region. Kombinierbar mit Altstadt-Spaziergang.',
    url: 'https://www.wangen-tourismus.de/entdecken-erleben/genuss-kulinarik/maerkte-in-wangen-im-allgaeu',
    urlLabel: 'wangen-tourismus.de Maerkte'
  },
  {
    id: 'wm-bad-wurzach-do',
    title: 'Wochenmarkt Bad Wurzach',
    subtitle: 'Breiteweg · Christi Himmelfahrt',
    date: '2026-05-14',
    dateLabel: { month: 'Mai', day: 14, dow: 'Do' },
    time: '07:30–13:00 Uhr (verifizieren!)',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🌸', heroLabel: 'Wochenmarkt',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~17 km · 22 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'warn', text: 'Feiertag — pruefen' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kinderwagen ok', state: 'ok' }
    ],
    desc: 'Regionale, teils Bio-Produkte: Obst, Gemuese, Kraeuter, Blumen, Kaese, Eier, Milchprodukte, Backwaren, Fleisch. <em>14.05. = Christi Himmelfahrt — unklar ob Markt am Feiertag stattfindet, evtl. auf Mi 13.05. vorgezogen.</em>',
    url: 'https://www.bad-wurzach.de/wirtschaft/de/standort/marktplatz/wochenmarkt',
    urlLabel: 'bad-wurzach.de Wochenmarkt'
  },
  {
    id: 'bauernhausmuseum-fuehrung',
    title: 'Bauernhausmuseum — Fuehrung',
    subtitle: 'Wolfegg · Christi Himmelfahrt 1 h kostenlos',
    date: '2026-05-14',
    dateLabel: { month: 'Mai', day: 14, dow: 'Do' },
    time: '11:30–12:30 Uhr',
    cat: 'event', catLabel: 'Fuehrung',
    emoji: '🎓', heroLabel: 'Museums-Fuehrung',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~25 km · 30 min' },
      { kind: 'mixed', text: 'Mixed' },
      { kind: '', text: '~9 € Erw, Kinder <6 frei' }
    ],
    info: [
      { k: 'Hund', v: 'aussen ja, innen pruefen', state: 'maybe' },
      { k: 'Kleinkind', v: 'Kinderwagen + Wickel-WC', state: 'ok' }
    ],
    desc: 'Oeffentliche Allgemeine Museumsfuehrung 1 Stunde — Kulturlandschaft + Geschichten zu den 28 historischen Gebaeuden. Fuehrung gratis (regulaerer Eintritt). Passt vor dem Mittagsschlaf.',
    url: 'https://www.bauernhaus-museum.de/programm/',
    urlLabel: 'bauernhaus-museum.de Programm'
  },
  {
    id: 'blaeserjugend-leutkirch',
    title: 'Tag der Blaeserjugend',
    subtitle: 'Festhalle Leutkirch · 200-Jahr-Jubilaeum',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: 'ab 08:00 Uhr',
    cat: 'event', catLabel: 'Event',
    emoji: '🎺', heroLabel: 'Musikveranstaltung',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~3 km · 8 min' },
      { kind: 'indoor', text: 'Indoor (Halle)' },
      { kind: '', text: 'vermutlich frei' }
    ],
    info: [
      { k: 'Hund', v: 'vermutlich nein', state: 'no' },
      { k: 'Kleinkind', v: 'laute Musik — kurz', state: 'maybe' }
    ],
    desc: 'Junge Musiker aus der Region treten in Solo-, Ensemble- und Orchesterwertungen an. Teil des 200-jaehrigen Stadtkapellen-Jubilaeums. Ueberschaubar fuer kurze Stippvisite. Eintritt + Hund noch zu pruefen.',
    url: 'https://www.leutkirch.de/de/Urlaub/Kulturerlebnis/Veranstaltungen/Veranstaltungskalender',
    urlLabel: 'leutkirch.de Kalender'
  },
  {
    id: 'flohmarkt-leutkirch-festplatz',
    title: 'Flohmarkt Leutkirch',
    subtitle: 'Festplatz Leutkirch · Oelmuehlestrasse',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: '08:00–16:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🛍️', heroLabel: 'Flohmarkt',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~3 km · 8 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ueblich ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Open-Air, KW ok', state: 'ok' }
    ],
    desc: 'Klassischer Floh-/Troedelmarkt am Festplatz. Aufbau ab 7:00, ab 8:00 fuer Besucher. Kurzer Stop direkt vor der Haustuer.',
    url: 'https://www.nmv-marktagentur.de/flohmaerkte/leutkirch-festplatz/',
    urlLabel: 'nmv-marktagentur.de'
  },
  {
    id: 'samstagsmarkt-saumarkt-wangen',
    title: 'Samstagsmarkt Saumarkt Wangen',
    subtitle: 'Saumarkt-Platz · Bio & Regional',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: '09:00–13:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🥬', heroLabel: 'Bio- & Regional-Markt',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~22 km · 25 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kinderwagen ok', state: 'ok' }
    ],
    desc: 'Kleinerer Bio- & Regional-Markt: Obst, Gemuese, Wurstwaren, Fisch, Bio-Produkte. Charmante Atmosphaere am historischen Saumarkt-Platz. Gut kombinierbar mit Wangen-Altstadt.',
    url: 'https://www.oberschwaben-tourismus.de/veranstaltungen/samstagsmarkt-in-wangen-im-allgaeu-9b1b4b8ff3',
    urlLabel: 'oberschwaben-tourismus.de'
  },
  {
    id: 'wm-memmingen-sa',
    title: 'Wochenmarkt Memmingen (Sa)',
    subtitle: 'Marktplatz Memmingen',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: '07:00–12:30 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🍞', heroLabel: 'Wochenmarkt Sa',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~30 km · 30 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'grosser Marktplatz', state: 'ok' }
    ],
    desc: 'Wie Di-Markt: Obst & Gemuese, Gefluegel/Fisch, Backwaren, Eier, Pasta, Wurst & Kaese, Kraeuter, Honig. Sa-Termin gut kombinierbar mit Memmingen-Altstadt-Bummel.',
    url: 'https://www.tourismus-memmingen.de/detail/mmaddresstourismus/memminger-wochenmarkt.html',
    urlLabel: 'tourismus-memmingen.de'
  },
  {
    id: 'wm-kisslegg-sa',
    title: 'Wochenmarkt Kisslegg',
    subtitle: 'Rathausplatz · klein & charmant',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: 'ab 08:00 Uhr (verifizieren)',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🥖', heroLabel: 'Wochenmarkt',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~13 km · 18 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kinderwagen ok', state: 'ok' }
    ],
    desc: 'Kleinerer Wochenmarkt am Rathausplatz. Charmant kombinierbar mit Schloss-Park-Spaziergang. Kurzer Anfahrtsweg.',
    url: 'https://www.kisslegg.de/buerger/freizeit-kultur/veranstaltungen/seite-1/suche-none',
    urlLabel: 'kisslegg.de Veranstaltungen'
  },
  {
    id: 'museumstag-wolfegg',
    title: 'Internat. Museumstag',
    subtitle: 'Bauernhausmuseum Wolfegg · Fuehrung + Wollprojekt',
    date: '2026-05-17',
    dateLabel: { month: 'Mai', day: 17, dow: 'So' },
    time: '11:30 Fuehrung · 13:00 Wollprojekt',
    cat: 'event', catLabel: 'Museum',
    emoji: '🏛️', heroLabel: 'Internat. Museumstag',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 ~25 km · 30 min' },
      { kind: 'mixed', text: 'Mixed' },
      { kind: '', text: 'Eintritt ggf. reduziert' }
    ],
    info: [
      { k: 'Hund', v: 'aussen ja, innen pruefen', state: 'maybe' },
      { k: 'Kleinkind', v: 'Freilichtmuseum, Tiere', state: 'ok' }
    ],
    desc: 'Generelle Museumsfuehrung 11:30–12:30 + Wollprojekt am Nachmittag. Am Internat. Museumstag oft reduzierter/freier Eintritt. <em>So = unser VM-Slot, passt gut vor Mittagsschlaf.</em>',
    url: 'https://www.bauernhaus-museum.de/programm/',
    urlLabel: 'bauernhaus-museum.de Programm'
  },
  {
    id: 'schloss-achberg-karl-hofer',
    title: 'Schloss Achberg — Karl Hofer',
    subtitle: 'Achberg · "Zwischen Schoenheit und Wahrheit"',
    date: '2026-05-11',
    dateEnd: '2026-10-18',
    dateLabel: { month: 'offen', day: '∞', dow: 'Apr–Okt' },
    time: 'Fr 14–18 · Sa/So/Feiertage 11–18',
    cat: 'event', catLabel: 'Ausstellung',
    emoji: '🎨', heroLabel: 'Karl-Hofer-Ausstellung',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Schloss_Achberg_header.jpg/800px-Schloss_Achberg_header.jpg',
    pills: [
      { kind: 'dist', text: '📍 ~38 km · 40 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Hund + Kleinkind suboptimal' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Ausstellung)', state: 'no' },
      { k: 'Kleinkind', v: 'enge Raeume, ruhig noetig', state: 'maybe' },
      { k: 'Eintritt', v: '8 € / Familie 15 €' },
      { k: 'Hinweis', v: 'eher Erwachsene' }
    ],
    desc: 'Karl Hofer "Zwischen Schoenheit und Wahrheit" 11.04.–18.10.2026. Barockes Schloss-Ensemble. <em>Eher fuer Erwachsenen-Sub-Group — fuer 1,5-Jaehrige uninteressant.</em> Anfahrt am oberen Limit.',
    url: 'https://www.schloss-achberg.de/ausstellung/',
    urlLabel: 'schloss-achberg.de'
  }
];
