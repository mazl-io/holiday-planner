// Aktivitäten — sortiert nach Match desc.
// Aenderungen werden nach dem naechsten Reload sichtbar (kein Build nötig).
//
// Schema:
//   id          eindeutiger Slug (für Deep-Links)
//   title       Hauptüberschrift
//   subtitle    kleine Zeile darunter
//   match       0–100 (siehe Schema in ausfluege-db.md)
//   cat         'stadt' | 'natur' | 'kultur' | 'indoor' | 'highlight'
//   catLabel    Pill-Beschriftung links auf Hero
//   emoji       Hero-Emoji (nur für stylized covers)
//   heroLabel   Hero-Untertitel (nur für stylized covers)
//   image       URL zu echtem Bild oder null (dann stylized cover)
//   pills       [{ kind, text }]  kind ∈ 'dist' | 'mixed' | 'outdoor' | 'indoor' | 'free' | 'warn' | ''
//   info        [{ k, v, state }] state ∈ 'ok' | 'no' | 'maybe' | undefined
//   desc        Beschreibungstext (Inline-HTML erlaubt — z.B. <em>...</em>)
//   url         Webseite
//   urlLabel    Button-Text

export const activities = [
  {
    id: 'wangen-altstadt',
    mapsQuery: 'Wangen im Allgäu',
    title: 'Wangen Altstadt',
    subtitle: 'Wangen i. Allgäu · Spielplatz Argenwiese',
    match: 95,
    cat: 'stadt', catLabel: 'Stadt',
    emoji: '🏘️', heroLabel: 'Stadt & Spielplatz',
    image: 'images/wangen-altstadt.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 15–18 km · 20 min' },
      { kind: 'mixed', text: 'Outdoor (Cafes-Backup)' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Kinderwagen ok', state: 'ok' },
      { k: 'Saison Mai 26', v: 'geöffnet', state: 'ok' },
      { k: 'Markt', v: 'Mi + Sa VM' }
    ],
    desc: '"Mediterranes Flair" mit Fachwerk + Stadttoren + vielen Cafes. ~20 Spielplätze in der Stadt; Wasserspielplatz Argenwiese als Bonus (Wasser ab Mai).',
    url: 'https://www.wangen-tourismus.de/',
    urlLabel: 'wangen-tourismus.de'
  },
  {
    id: 'isny-altstadt',
    mapsQuery: 'Isny im Allgäu',
    title: 'Isny Altstadt + Kurpark',
    subtitle: 'Isny i. Allgäu · Stadtmauer + Türme',
    match: 92,
    cat: 'stadt', catLabel: 'Stadt',
    emoji: '🏛️', heroLabel: 'Stadt & Park',
    image: 'images/isny-altstadt.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 12–15 km · 18 min' },
      { kind: 'mixed', text: 'Outdoor (Cafes)' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'ja, ebene Wege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'geöffnet', state: 'ok' },
      { k: 'Bonus', v: 'Ritterspielplatz' }
    ],
    desc: 'Sehr hübsche Altstadt mit Stadtmauer + Türmen, gepflegter Kurpark mit Wassertretbecken (ab Mai), Ritterspielplatz nahe Innenstadt.',
    url: 'https://www.isny.de/',
    urlLabel: 'isny.de'
  },
  {
    id: 'bauernhausmuseum-wolfegg',
    mapsQuery: 'Bauernhausmuseum Wolfegg',
    title: 'Bauernhausmuseum Wolfegg',
    subtitle: 'Wolfegg · Tiere + 28 historische Höfe',
    match: 87,
    cat: 'kultur', catLabel: 'Kultur',
    emoji: '🐄', heroLabel: 'Freilichtmuseum',
    image: 'images/bauernhausmuseum-wolfegg.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 22–25 km · 28 min' },
      { kind: 'mixed', text: 'Mixed (drinnen + draußen)' },
      { kind: '', text: '~70 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'außen ja, innen prüfen', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'Kinderwagen + Wickel-WC', state: 'ok' },
      { k: 'Saison Mai 26', v: '19.03.–11.11. tägl. 10–18', state: 'ok' },
      { k: 'Highlight', v: 'Kinder <6 frei' }
    ],
    desc: 'Lebendiges Freilichtmuseum mit echten Tieren (Schweine, Kühe, Hühner) und 28 begehbaren historischen Bauernhäusern. Perfekter Schlechtwetter-Mix.',
    url: 'https://www.bauernhaus-museum.de/',
    urlLabel: 'bauernhaus-museum.de'
  },
  {
    id: 'kisslegger-schlosspark',
    mapsQuery: 'Schlosspark Kisslegg',
    title: 'Kisslegger Schlosspark',
    subtitle: 'Kisslegg · Englischer Landschaftspark',
    match: 87,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🌳', heroLabel: 'Park & Spielplatz',
    image: 'images/kisslegg-schlosspark.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 12–15 km · 18 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'gepflegte Wege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig', state: 'ok' },
      { k: 'Dauer', v: '1–2 h' }
    ],
    desc: 'Englischer Landschaftspark mit altem Baumbestand, Schloss als Kulisse, schöner Spielplatz mit Picknick-Infrastruktur, Entenweiher.',
    url: 'https://www.kisslegg.de/gaeste/erleben-entdecken/wandern/wandertipps',
    urlLabel: 'kisslegg.de'
  },
  {
    id: 'wildgehege-wolfegg',
    mapsQuery: 'Wildgehege Wolfegg',
    title: 'Wildgehege Wolfegg',
    subtitle: 'Wolfegg · Sikawild im Wald',
    match: 87,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🦌', heroLabel: 'Tiergehege gratis',
    image: 'images/wildgehege-wolfegg.jpg',
    googleRating: 4.4,
    pills: [
      { kind: 'dist', text: '📍 22–25 km · 28 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'flache Waldwege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig', state: 'ok' },
      { k: 'Dauer', v: '1–1,5 h' }
    ],
    desc: 'Sikawild als Besonderheit, kostenloses Gehege mit Wanderwegen drumherum. Perfekt kombinierbar mit Bauernhausmuseum Wolfegg.',
    url: 'https://www.wolfegg.de/leben-freizeit-1/freizeit/wandern',
    urlLabel: 'wolfegg.de'
  },
  {
    id: 'schloss-zeil',
    mapsQuery: 'Schloss Zeil, Leutkirch im Allgäu',
    title: 'Schloss Zeil',
    subtitle: 'Leutkirch · Aussichtsterrasse + Park',
    match: 87,
    cat: 'kultur', catLabel: 'Kultur',
    emoji: '🏰', heroLabel: 'Aussicht & Park',
    image: 'images/schloss-zeil.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 5–8 km · 12 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Kinderwagen ok', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig', state: 'ok' },
      { k: 'Dauer', v: '0,5–1 h' }
    ],
    desc: 'Sehr naher Aussichts-Stop mit schönem Blick übers Leutkircher Land. Innen NICHT zu besichtigen (privat) — nur Park + Terrasse. Eher 1-Stunden-Abstecher.',
    url: 'https://www.leutkirch.de/de/Urlaub/Kulturerlebnis/Schloss-Zeil',
    urlLabel: 'leutkirch.de Schloss Zeil'
  },
  {
    id: 'memmingen-altstadt',
    mapsQuery: 'Memmingen Altstadt',
    title: 'Memmingen Altstadt',
    subtitle: 'Memmingen · Marktplatz + Spielplätze',
    match: 87,
    cat: 'stadt', catLabel: 'Stadt',
    emoji: '🏘️', heroLabel: 'Stadt & Markt',
    image: 'images/memmingen-altstadt.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 30–35 km · 30 min' },
      { kind: 'mixed', text: 'Outdoor (Cafes)' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'flach + Bollerwagen-Verleih', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig', state: 'ok' },
      { k: 'Markt', v: 'Di + Sa 7–12:30' }
    ],
    desc: 'Schöne Altstadt mit großem Marktplatz; Bollerwagen-Verleih in Tourist-Info; ~30 Spielplätze in der Stadt; Kleinkind-Spielplatz Hohe Wacht 10 min entfernt.',
    url: 'https://www.tourismus-memmingen.de/',
    urlLabel: 'tourismus-memmingen.de'
  },
  {
    id: 'burg-waldburg',
    mapsQuery: 'Burg Waldburg, Waldburg',
    title: 'Burg Waldburg',
    subtitle: 'Waldburg · Hund darf in die Burg!',
    match: 86,
    cat: 'kultur', catLabel: 'Kultur',
    emoji: '🏰', heroLabel: 'Mittelalterliche Burg',
    image: 'images/burg-waldburg.jpg',
    googleRating: 4.4,
    pills: [
      { kind: 'dist', text: '📍 18–22 km · 25 min' },
      { kind: 'mixed', text: 'Mixed (innen + aussen)' },
      { kind: 'warn', text: 'Mo geschlossen!' }
    ],
    info: [
      { k: 'Hund', v: 'ja — sogar drinnen!', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Weg ok, innen eng', state: 'ok' },
      { k: 'Saison Mai 26', v: '14.03.–01.11., Di–So', state: 'ok' },
      { k: 'Eintritt', v: '~14,50 € Erw.' }
    ],
    desc: 'Eine der höchstgelegenen mittelalterlichen Burgen Süddeutschlands mit Panoramablick. <em>Hund darf in die Burg!</em> Außenbereich/Burgweg jederzeit gratis.',
    url: 'https://www.schlosswaldburg.de/',
    urlLabel: 'schlosswaldburg.de'
  },
  {
    id: 'tannenbuehl-bad-waldsee',
    mapsQuery: 'Naherholungsgebiet Tannenbühl, Bad Waldsee',
    title: 'Tannenbühl Bad Waldsee',
    subtitle: 'Bad Waldsee · Naturspielplatz mit Seilbahn',
    match: 85,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🦌', heroLabel: 'Tiere & Spielen & Wandern',
    image: 'images/tannenbuehl-bad-waldsee.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 28–32 km · 33 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'gut ausgebaute Wege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig', state: 'ok' },
      { k: 'Highlight', v: 'all-in-one' }
    ],
    desc: 'Rotwild, Steinböcke, Mufflons, Wildschweine im natürlichen Lebensraum + Naturspielplatz mit Kletterturm + Seilbahn + Lehrpfade. Die "all-in-one"-Wahl.',
    url: 'https://www.bad-waldsee.de/gaeste/de/natur-bewegung/natur-umgebung/naherholungsgebiet-tannenbuehl',
    urlLabel: 'bad-waldsee.de Tannenbühl'
  },
  {
    id: 'wurzacher-ried',
    mapsQuery: 'Wurzacher Ried, Bad Wurzach',
    title: 'Wurzacher Ried',
    subtitle: 'Bad Wurzach · Größtes Hochmoor Mitteleuropas',
    match: 82,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🌾', heroLabel: 'Moor-Wanderung',
    image: 'images/wurzacher-ried.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 18–22 km · 23 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, strenge Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Bohlen rutschig bei Nässe', state: 'maybe' },
      { k: 'Saison Mai 26', v: 'Mai = ideal', state: 'ok' },
      { k: 'Dauer', v: '1,5–3 h flexibel' }
    ],
    desc: 'Naturlehrpfad ~4,4 km kinderwagen-tauglich; 2024 neuer Moorfrosch-Lehrpfad mit QR-Codes. <em>Bei Regen Bohlen rutschig — vor Ort im Naturschutzzentrum den besten Weg erfragen.</em>',
    url: 'https://wurzacher-ried.de/wandern',
    urlLabel: 'wurzacher-ried.de'
  },
  {
    id: 'wildpark-sonnenhalde',
    mapsQuery: 'Wildpark Sonnenhalde, Neukirch',
    title: 'Wildpark Sonnenhalde',
    subtitle: 'Neukirch · 15 ha Wildpark',
    match: 82,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🐗', heroLabel: 'Tierpark gratis',
    image: 'images/wildpark-sonnenhalde.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 30–35 km · 38 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ausdrücklich erlaubt', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Naturwege für KW', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig (kein Tor)', state: 'ok' },
      { k: 'Bonus', v: 'Tierfutter vor Ort' }
    ],
    desc: '15 ha Wildpark mit Wildschweinen, Damm-/Rotwild, Mufflons, Lamas, Kamerunschafen — gratis. Klassischer Familien-Spot, hundefreundlich.',
    url: 'https://www.wildpark-sonnenhalde.de/',
    urlLabel: 'wildpark-sonnenhalde.de'
  },
  {
    id: 'skywalk-allgaeu',
    mapsQuery: 'Skywalk Allgäu, Scheidegg',
    title: 'Skywalk Allgäu',
    subtitle: 'Scheidegg · 540 m Baumwipfelpfad in 17–40 m Höhe',
    match: 71,
    cat: 'highlight', catLabel: 'Highlight',
    emoji: '🌉', heroLabel: 'Baumwipfelpfad',
    image: 'images/skywalk-allgaeu.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 32–35 km · 38 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: '', text: '~77 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'Leine + Hundewartebereich', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'barrierefrei + Aufzug', state: 'ok' },
      { k: 'Saison Mai 26', v: '20.03.–Nov, tägl. 10–18', state: 'ok' },
      { k: 'Bonus', v: 'unter 1 m Größe frei' }
    ],
    desc: '540-m-Baumwipfelpfad mit Blick bis Bodensee + Allgäuer Alpen. <em>Bei Regen Holzboden rutschig — Wetter beachten.</em> Familienkarte 49 €. Hund auf Plattform erlaubt.',
    url: 'https://www.skywalk-allgaeu.de/',
    urlLabel: 'skywalk-allgaeu.de'
  },
  {
    id: 'kiddiko-memmingen',
    mapsQuery: 'Kiddiko Kinderland, Memmingen',
    title: 'Kiddiko Kinderland',
    subtitle: 'Memmingen · Schlechtwetter-Backup',
    match: 61, lo: true,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🎈', heroLabel: 'Indoor-Spielpark',
    image: 'images/kiddiko.jpg',
    googleRating: 4.2,
    pills: [
      { kind: 'dist', text: '📍 30–35 km · 30 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Mo–Mi geschlossen' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Indoor)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'eigener Bereich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Do/Fr 14–18:30, Sa/So 10–18:30', state: 'maybe' },
      { k: 'Eintritt', v: 'selber prüfen' }
    ],
    desc: 'Klassischer Indoor-Spielplatz für Schlechtwettertage mit Kleinkind-Bereich. <em>Im Center Parcs ist BALUBA gleichwertig + gratis</em> — daher nur als Plan B.',
    url: 'https://kiddiko.de/',
    urlLabel: 'kiddiko.de'
  },
  {
    id: 'schwaben-therme',
    mapsQuery: 'Schwaben-Therme, Aulendorf',
    title: 'Schwaben-Therme',
    subtitle: 'Aulendorf · Erlebnisbad mit Kleinkindbecken',
    match: 61, lo: true,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '♨️', heroLabel: 'Therme',
    image: 'images/schwaben-therme.jpg',
    googleRating: 4.2,
    pills: [
      { kind: 'dist', text: '📍 35–40 km · 38 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Hund nein' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Therme)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'Kleinkindbecken ~34 °C', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig', state: 'ok' },
      { k: 'Eintritt', v: 'selber prüfen' }
    ],
    desc: 'Echte Therme mit Thermalwasser, eigenem Kleinkindbecken mit Wasser-Spielelementen. <em>Im CP ist Aquamundo enthalten</em> — daher nur Plan B falls "anderes" Bad gewünscht.',
    url: 'https://www.schwaben-therme.de/',
    urlLabel: 'schwaben-therme.de'
  },
  {
    id: 'reptilienzoo-scheidegg',
    mapsQuery: 'Reptilienzoo Scheidegg',
    title: 'Reptilienzoo Scheidegg',
    subtitle: 'Scheidegg · 50+ Terrarien',
    match: 59, lo: true,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🦎', heroLabel: 'Tropenhaus',
    image: 'images/reptilienzoo.jpg',
    googleRating: 4.4,
    pills: [
      { kind: 'dist', text: '📍 32–35 km · 38 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Hund draußen + Fr Ruhetag' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Tropenhaus)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'KW-tauglich, enge Gänge', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Apr–Sep, Fr Ruhetag', state: 'maybe' },
      { k: 'Eintritt', v: '~42 € / 5 Erw' }
    ],
    desc: '50+ Terrarien mit Schlangen, Echsen, Schildkröten, Spinnen — bestes Indoor-Tier-Erlebnis. <em>Hund muss draußen → Sub-Group ohne Hund nötig.</em> Kombinierbar mit Skywalk.',
    url: 'https://www.reptilienzoo-scheidegg.com/',
    urlLabel: 'reptilienzoo-scheidegg.com'
  }
];
