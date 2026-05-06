// Events — sortiert chronologisch (data-date asc).
// Aenderungen werden nach dem naechsten Reload sichtbar (kein Build nötig).
//
// Schema:
//   id          eindeutiger Slug
//   title       Hauptüberschrift
//   subtitle    kleine Zeile darunter
//   date        ISO-Datum (YYYY-MM-DD) — relevanter Tag für Sortierung
//   dateEnd     optional — für mehrtaegige Events (Ausstellungen). Wird zur Past-Filterung verwendet.
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
    mapsQuery: 'Marktstraße, Leutkirch im Allgäu',
    title: 'Wochenmarkt Leutkirch',
    subtitle: 'Leutkirch Innenstadt · Marktstraße',
    date: '2026-05-11',
    dateLabel: { month: 'Mai', day: 11, dow: 'Mo' },
    time: '07:00–13:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🥕', heroLabel: 'Wochenmarkt',
    image: 'images/markt-leutkirch.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~3 km · 8 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kinderwagen ok', state: 'ok' }
    ],
    desc: 'Gemütlicher kleiner Wochenmarkt: Obst, Gemüse, Blumen, Fisch, Käse, Wurst, Eier von Selbsterzeugern und regionalen Anbietern. <em>Mo = Anreisetag — eher knapp.</em>',
    url: 'https://www.leutkirch.de/de/Urlaub/Kulturerlebnis/Veranstaltungen/Veranstaltungskalender',
    urlLabel: 'leutkirch.de Veranstaltungen'
  },
  {
    id: 'wm-memmingen-di',
    mapsQuery: 'Marktplatz Memmingen',
    title: 'Wochenmarkt Memmingen',
    subtitle: 'Marktplatz Memmingen (auch Sa 16.05.)',
    date: '2026-05-12',
    dateLabel: { month: 'Mai', day: 12, dow: 'Di' },
    time: '07:00–12:30 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🍅', heroLabel: 'Wochenmarkt',
    image: 'images/memmingen-altstadt.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~30 km · 30 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'großer Marktplatz', state: 'ok' }
    ],
    desc: 'Frisches Obst & Gemüse, Geflügel/Fisch, Backwaren, Eier, Pasta, Wurst & Käse, Kräuter, Honig. <em>Di-Slot bei uns nur Nachmittag — daher nur Sa praktikabel.</em>',
    url: 'https://www.tourismus-memmingen.de/detail/mmaddresstourismus/memminger-wochenmarkt.html',
    urlLabel: 'tourismus-memmingen.de'
  },
  {
    id: 'wm-wangen-mi',
    mapsQuery: 'Marktplatz Wangen im Allgäu',
    title: 'Wochenmarkt Wangen',
    subtitle: 'Marktplatz Altstadt · 70+ Händler',
    date: '2026-05-13',
    dateLabel: { month: 'Mai', day: 13, dow: 'Mi' },
    time: '08:00–13:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🧀', heroLabel: 'Großer Wochenmarkt',
    image: 'images/wangen-altstadt.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~22 km · 25 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kopfsteinpflaster', state: 'maybe' }
    ],
    desc: 'Über 70 Händler in der historischen Altstadt — regionale + überregionale Spezialitäten. Einer der großen Wochenmärkte der Region. Kombinierbar mit Altstadt-Spaziergang.',
    url: 'https://www.wangen-tourismus.de/entdecken-erleben/genuss-kulinarik/maerkte-in-wangen-im-allgaeu',
    urlLabel: 'wangen-tourismus.de Maerkte'
  },
  {
    id: 'wm-bad-wurzach-do',
    mapsQuery: 'Breiteweg, Bad Wurzach',
    title: 'Wochenmarkt Bad Wurzach',
    subtitle: 'Breiteweg · Christi Himmelfahrt',
    date: '2026-05-14',
    dateLabel: { month: 'Mai', day: 14, dow: 'Do' },
    time: '07:30–13:00 Uhr (verifizieren!)',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🌸', heroLabel: 'Wochenmarkt',
    image: 'images/markt-bad-wurzach.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~17 km · 22 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'warn', text: 'Feiertag — prüfen' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kinderwagen ok', state: 'ok' }
    ],
    desc: 'Regionale, teils Bio-Produkte: Obst, Gemüse, Kräuter, Blumen, Käse, Eier, Milchprodukte, Backwaren, Fleisch. <em>14.05. = Christi Himmelfahrt — unklar ob Markt am Feiertag stattfindet, evtl. auf Mi 13.05. vorgezogen.</em>',
    url: 'https://www.bad-wurzach.de/wirtschaft/de/standort/marktplatz/wochenmarkt',
    urlLabel: 'bad-wurzach.de Wochenmarkt'
  },
  {
    id: 'bauernhausmuseum-fuehrung',
    mapsQuery: 'Bauernhausmuseum Wolfegg',
    title: 'Bauernhausmuseum — Führung',
    subtitle: 'Wolfegg · Christi Himmelfahrt 1 h kostenlos',
    date: '2026-05-14',
    dateLabel: { month: 'Mai', day: 14, dow: 'Do' },
    time: '11:30–12:30 Uhr',
    cat: 'event', catLabel: 'Führung',
    emoji: '🎓', heroLabel: 'Museums-Führung',
    image: 'images/bauernhausmuseum-wolfegg.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 ~25 km · 30 min' },
      { kind: 'mixed', text: 'Mixed' },
      { kind: '', text: '~9 € Erw, Kinder <6 frei' }
    ],
    info: [
      { k: 'Hund', v: 'außen ja, innen prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'Kinderwagen + Wickel-WC', state: 'ok' }
    ],
    desc: 'Öffentliche Allgemeine Museumsführung 1 Stunde — Kulturlandschaft + Geschichten zu den 28 historischen Gebäuden. Führung gratis (regulärer Eintritt). Passt vor dem Mittagsschlaf.',
    url: 'https://www.bauernhaus-museum.de/programm/',
    urlLabel: 'bauernhaus-museum.de Programm'
  },
  {
    id: 'blaeserjugend-leutkirch',
    mapsQuery: 'Festhalle Leutkirch im Allgäu',
    title: 'Tag der Bläserjugend',
    subtitle: 'Festhalle Leutkirch · 200-Jahr-Jubiläum',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: 'ab 08:00 Uhr',
    cat: 'event', catLabel: 'Event',
    emoji: '🎺', heroLabel: 'Musikveranstaltung',
    image: 'images/blaeserjugend.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~3 km · 8 min' },
      { kind: 'indoor', text: 'Indoor (Halle)' },
      { kind: '', text: 'vermutlich frei' }
    ],
    info: [
      { k: 'Hund', v: 'vermutlich nein', state: 'no' },
      { k: 'Kleinkind', v: 'laute Musik — kurz', state: 'maybe' }
    ],
    desc: 'Junge Musiker aus der Region treten in Solo-, Ensemble- und Orchesterwertungen an. Teil des 200-jährigen Stadtkapellen-Jubiläums. Überschaubar für kurze Stippvisite. Eintritt + Hund noch zu prüfen.',
    url: 'https://www.leutkirch.de/de/Urlaub/Kulturerlebnis/Veranstaltungen/Veranstaltungskalender',
    urlLabel: 'leutkirch.de Kalender'
  },
  {
    id: 'flohmarkt-leutkirch-festplatz',
    mapsQuery: 'Ölmühlestraße, Leutkirch im Allgäu',
    title: 'Flohmarkt Leutkirch',
    subtitle: 'Festplatz Leutkirch · Ölmühlestraße',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: '08:00–16:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🛍️', heroLabel: 'Flohmarkt',
    image: 'images/flohmarkt.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~3 km · 8 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'üblich ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Open-Air, KW ok', state: 'ok' }
    ],
    desc: 'Klassischer Floh-/Trödelmarkt am Festplatz. Aufbau ab 7:00, ab 8:00 für Besucher. Kurzer Stop direkt vor der Haustür.',
    url: 'https://www.nmv-marktagentur.de/flohmaerkte/leutkirch-festplatz/',
    urlLabel: 'nmv-marktagentur.de'
  },
  {
    id: 'samstagsmarkt-saumarkt-wangen',
    mapsQuery: 'Saumarktplatz, Wangen im Allgäu',
    title: 'Samstagsmarkt Saumarkt Wangen',
    subtitle: 'Saumarkt-Platz · Bio & Regional',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: '09:00–13:00 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🥬', heroLabel: 'Bio- & Regional-Markt',
    image: 'images/wangen-altstadt.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~22 km · 25 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'Kinderwagen ok', state: 'ok' }
    ],
    desc: 'Kleinerer Bio- & Regional-Markt: Obst, Gemüse, Wurstwaren, Fisch, Bio-Produkte. Charmante Atmosphäre am historischen Saumarkt-Platz. Gut kombinierbar mit Wangen-Altstadt.',
    url: 'https://www.oberschwaben-tourismus.de/veranstaltungen/samstagsmarkt-in-wangen-im-allgaeu-9b1b4b8ff3',
    urlLabel: 'oberschwaben-tourismus.de'
  },
  {
    id: 'wm-memmingen-sa',
    mapsQuery: 'Marktplatz Memmingen',
    title: 'Wochenmarkt Memmingen (Sa)',
    subtitle: 'Marktplatz Memmingen',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: '07:00–12:30 Uhr',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🍞', heroLabel: 'Wochenmarkt Sa',
    image: 'images/memmingen-altstadt.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~30 km · 30 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'Eintritt frei' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind', v: 'großer Marktplatz', state: 'ok' }
    ],
    desc: 'Wie Di-Markt: Obst & Gemüse, Geflügel/Fisch, Backwaren, Eier, Pasta, Wurst & Käse, Kräuter, Honig. Sa-Termin gut kombinierbar mit Memmingen-Altstadt-Bummel.',
    url: 'https://www.tourismus-memmingen.de/detail/mmaddresstourismus/memminger-wochenmarkt.html',
    urlLabel: 'tourismus-memmingen.de'
  },
  {
    id: 'wm-kisslegg-sa',
    mapsQuery: 'Rathausplatz, Kisslegg',
    title: 'Wochenmarkt Kisslegg',
    subtitle: 'Rathausplatz · klein & charmant',
    date: '2026-05-16',
    dateLabel: { month: 'Mai', day: 16, dow: 'Sa' },
    time: 'ab 08:00 Uhr (verifizieren)',
    cat: 'markt', catLabel: 'Markt',
    emoji: '🥖', heroLabel: 'Wochenmarkt',
    image: 'images/kisslegg-schlosspark.jpg',
    googleRating: null,
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
    mapsQuery: 'Bauernhausmuseum Wolfegg',
    title: 'Internat. Museumstag',
    subtitle: 'Bauernhausmuseum Wolfegg · Führung + Wollprojekt',
    date: '2026-05-17',
    dateLabel: { month: 'Mai', day: 17, dow: 'So' },
    time: '11:30 Führung · 13:00 Wollprojekt',
    cat: 'event', catLabel: 'Museum',
    emoji: '🏛️', heroLabel: 'Internat. Museumstag',
    image: 'images/bauernhausmuseum-wolfegg.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 ~25 km · 30 min' },
      { kind: 'mixed', text: 'Mixed' },
      { kind: '', text: 'Eintritt ggf. reduziert' }
    ],
    info: [
      { k: 'Hund', v: 'außen ja, innen prüfen', state: 'maybe' },
      { k: 'Kleinkind', v: 'Freilichtmuseum, Tiere', state: 'ok' }
    ],
    desc: 'Generelle Museumsführung 11:30–12:30 + Wollprojekt am Nachmittag. Am Internat. Museumstag oft reduzierter/freier Eintritt. <em>So = unser VM-Slot, passt gut vor Mittagsschlaf.</em>',
    url: 'https://www.bauernhaus-museum.de/programm/',
    urlLabel: 'bauernhaus-museum.de Programm'
  },
  {
    id: 'schloss-achberg-karl-hofer',
    mapsQuery: 'Schloss Achberg, Achberg',
    title: 'Schloss Achberg — Karl Hofer',
    subtitle: 'Achberg · "Zwischen Schönheit und Wahrheit"',
    date: '2026-05-11',
    dateEnd: '2026-10-18',
    dateLabel: { month: 'offen', day: '∞', dow: 'Apr–Okt' },
    time: 'Fr 14–18 · Sa/So/Feiertage 11–18',
    cat: 'event', catLabel: 'Ausstellung',
    emoji: '🎨', heroLabel: 'Karl-Hofer-Ausstellung',
    image: 'images/schloss-achberg.jpg',
    googleRating: 4.4,
    pills: [
      { kind: 'dist', text: '📍 ~38 km · 40 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Hund + Kleinkind suboptimal' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Ausstellung)', state: 'no' },
      { k: 'Kleinkind', v: 'enge Räume, ruhig nötig', state: 'maybe' },
      { k: 'Eintritt', v: '8 € / Familie 15 €' },
      { k: 'Hinweis', v: 'eher Erwachsene' }
    ],
    desc: 'Karl Hofer "Zwischen Schönheit und Wahrheit" 11.04.–18.10.2026. Barockes Schloss-Ensemble. <em>Eher für Erwachsenen-Sub-Group — für 1,5-Jährige uninteressant.</em> Anfahrt am oberen Limit.',
    url: 'https://www.schloss-achberg.de/ausstellung/',
    urlLabel: 'schloss-achberg.de'
  }
];
