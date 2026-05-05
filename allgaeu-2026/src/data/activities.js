// Aktivitaeten — sortiert nach Match desc.
// Aenderungen werden nach dem naechsten Reload sichtbar (kein Build noetig).
//
// Schema:
//   id          eindeutiger Slug (fuer Deep-Links)
//   title       Hauptueberschrift
//   subtitle    kleine Zeile darunter
//   match       0–100 (siehe Schema in ausfluege-db.md)
//   cat         'stadt' | 'natur' | 'kultur' | 'indoor' | 'highlight'
//   catLabel    Pill-Beschriftung links auf Hero
//   emoji       Hero-Emoji (nur fuer stylized covers)
//   heroLabel   Hero-Untertitel (nur fuer stylized covers)
//   image       URL zu echtem Bild oder null (dann stylized cover)
//   pills       [{ kind, text }]  kind ∈ 'dist' | 'mixed' | 'outdoor' | 'indoor' | 'free' | 'warn' | ''
//   info        [{ k, v, state }] state ∈ 'ok' | 'no' | 'maybe' | undefined
//   desc        Beschreibungstext (Inline-HTML erlaubt — z.B. <em>...</em>)
//   url         Webseite
//   urlLabel    Button-Text

export const activities = [
  {
    id: 'wangen-altstadt',
    title: 'Wangen Altstadt',
    subtitle: 'Wangen i. Allgaeu · Spielplatz Argenwiese',
    match: 95,
    cat: 'stadt', catLabel: 'Stadt',
    emoji: '🏘️', heroLabel: 'Stadt & Spielplatz',
    image: 'images/wangen-altstadt.jpg',
    pills: [
      { kind: 'dist', text: '📍 15–18 km · 20 min' },
      { kind: 'mixed', text: 'Outdoor (Cafes-Backup)' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Kinderwagen ok', state: 'ok' },
      { k: 'Saison Mai 26', v: 'geoeffnet', state: 'ok' },
      { k: 'Markt', v: 'Mi + Sa VM' }
    ],
    desc: '"Mediterranes Flair" mit Fachwerk + Stadttoren + vielen Cafes. ~20 Spielplaetze in der Stadt; Wasserspielplatz Argenwiese als Bonus (Wasser ab Mai).',
    url: 'https://www.wangen-tourismus.de/',
    urlLabel: 'wangen-tourismus.de'
  },
  {
    id: 'isny-altstadt',
    title: 'Isny Altstadt + Kurpark',
    subtitle: 'Isny i. Allgaeu · Stadtmauer + Tuerme',
    match: 92,
    cat: 'stadt', catLabel: 'Stadt',
    emoji: '🏛️', heroLabel: 'Stadt & Park',
    image: 'images/isny-altstadt.jpg',
    pills: [
      { kind: 'dist', text: '📍 12–15 km · 18 min' },
      { kind: 'mixed', text: 'Outdoor (Cafes)' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'ja, ebene Wege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'geoeffnet', state: 'ok' },
      { k: 'Bonus', v: 'Ritterspielplatz' }
    ],
    desc: 'Sehr huebsche Altstadt mit Stadtmauer + Tuermen, gepflegter Kurpark mit Wassertretbecken (ab Mai), Ritterspielplatz nahe Innenstadt.',
    url: 'https://www.isny.de/',
    urlLabel: 'isny.de'
  },
  {
    id: 'bauernhausmuseum-wolfegg',
    title: 'Bauernhausmuseum Wolfegg',
    subtitle: 'Wolfegg · Tiere + 28 historische Hoefe',
    match: 87,
    cat: 'kultur', catLabel: 'Kultur',
    emoji: '🐄', heroLabel: 'Freilichtmuseum',
    image: 'images/bauernhausmuseum-wolfegg.jpg',
    pills: [
      { kind: 'dist', text: '📍 22–25 km · 28 min' },
      { kind: 'mixed', text: 'Mixed (drinnen + draussen)' },
      { kind: '', text: '~70 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'aussen ja, innen pruefen', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'Kinderwagen + Wickel-WC', state: 'ok' },
      { k: 'Saison Mai 26', v: '19.03.–11.11. taegl. 10–18', state: 'ok' },
      { k: 'Highlight', v: 'Kinder <6 frei' }
    ],
    desc: 'Lebendiges Freilichtmuseum mit echten Tieren (Schweine, Kuehe, Huehner) und 28 begehbaren historischen Bauernhaeusern. Perfekter Schlechtwetter-Mix.',
    url: 'https://www.bauernhaus-museum.de/',
    urlLabel: 'bauernhaus-museum.de'
  },
  {
    id: 'kisslegger-schlosspark',
    title: 'Kisslegger Schlosspark',
    subtitle: 'Kisslegg · Englischer Landschaftspark',
    match: 87,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🌳', heroLabel: 'Park & Spielplatz',
    image: 'images/kisslegg-schlosspark.jpg',
    pills: [
      { kind: 'dist', text: '📍 12–15 km · 18 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'gepflegte Wege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjaehrig', state: 'ok' },
      { k: 'Dauer', v: '1–2 h' }
    ],
    desc: 'Englischer Landschaftspark mit altem Baumbestand, Schloss als Kulisse, schoener Spielplatz mit Picknick-Infrastruktur, Entenweiher.',
    url: 'https://www.kisslegg.de/gaeste/erleben-entdecken/wandern/wandertipps',
    urlLabel: 'kisslegg.de'
  },
  {
    id: 'wildgehege-wolfegg',
    title: 'Wildgehege Wolfegg',
    subtitle: 'Wolfegg · Sikawild im Wald',
    match: 87,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🦌', heroLabel: 'Tiergehege gratis',
    image: 'images/wildgehege-wolfegg.jpg',
    pills: [
      { kind: 'dist', text: '📍 22–25 km · 28 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'flache Waldwege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjaehrig', state: 'ok' },
      { k: 'Dauer', v: '1–1,5 h' }
    ],
    desc: 'Sikawild als Besonderheit, kostenloses Gehege mit Wanderwegen drumherum. Perfekt kombinierbar mit Bauernhausmuseum Wolfegg.',
    url: 'https://www.wolfegg.de/leben-freizeit-1/freizeit/wandern',
    urlLabel: 'wolfegg.de'
  },
  {
    id: 'schloss-zeil',
    title: 'Schloss Zeil',
    subtitle: 'Leutkirch · Aussichtsterrasse + Park',
    match: 87,
    cat: 'kultur', catLabel: 'Kultur',
    emoji: '🏰', heroLabel: 'Aussicht & Park',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Schloss_Zeil_%282%29.jpg/800px-Schloss_Zeil_%282%29.jpg',
    pills: [
      { kind: 'dist', text: '📍 5–8 km · 12 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Kinderwagen ok', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjaehrig', state: 'ok' },
      { k: 'Dauer', v: '0,5–1 h' }
    ],
    desc: 'Sehr naher Aussichts-Stop mit schoenem Blick uebers Leutkircher Land. Innen NICHT zu besichtigen (privat) — nur Park + Terrasse. Eher 1-Stunden-Abstecher.',
    url: 'https://www.leutkirch.de/de/Urlaub/Kulturerlebnis/Schloss-Zeil',
    urlLabel: 'leutkirch.de Schloss Zeil'
  },
  {
    id: 'memmingen-altstadt',
    title: 'Memmingen Altstadt',
    subtitle: 'Memmingen · Marktplatz + Spielplaetze',
    match: 87,
    cat: 'stadt', catLabel: 'Stadt',
    emoji: '🏘️', heroLabel: 'Stadt & Markt',
    image: 'images/memmingen-altstadt.jpg',
    pills: [
      { kind: 'dist', text: '📍 30–35 km · 30 min' },
      { kind: 'mixed', text: 'Outdoor (Cafes)' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'flach + Bollerwagen-Verleih', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjaehrig', state: 'ok' },
      { k: 'Markt', v: 'Di + Sa 7–12:30' }
    ],
    desc: 'Schoene Altstadt mit grossem Marktplatz; Bollerwagen-Verleih in Tourist-Info; ~30 Spielplaetze in der Stadt; Kleinkind-Spielplatz Hohe Wacht 10 min entfernt.',
    url: 'https://www.tourismus-memmingen.de/',
    urlLabel: 'tourismus-memmingen.de'
  },
  {
    id: 'burg-waldburg',
    title: 'Burg Waldburg',
    subtitle: 'Waldburg · Hund darf in die Burg!',
    match: 86,
    cat: 'kultur', catLabel: 'Kultur',
    emoji: '🏰', heroLabel: 'Mittelalterliche Burg',
    image: 'images/burg-waldburg.jpg',
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
    desc: 'Eine der hoechstgelegenen mittelalterlichen Burgen Sueddeutschlands mit Panoramablick. <em>Hund darf in die Burg!</em> Aussenbereich/Burgweg jederzeit gratis.',
    url: 'https://www.schlosswaldburg.de/',
    urlLabel: 'schlosswaldburg.de'
  },
  {
    id: 'tannenbuehl-bad-waldsee',
    title: 'Tannenbuehl Bad Waldsee',
    subtitle: 'Bad Waldsee · Naturspielplatz mit Seilbahn',
    match: 85,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🦌', heroLabel: 'Tiere & Spielen & Wandern',
    image: 'images/tannenbuehl-bad-waldsee.jpg',
    pills: [
      { kind: 'dist', text: '📍 28–32 km · 33 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'gut ausgebaute Wege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjaehrig', state: 'ok' },
      { k: 'Highlight', v: 'all-in-one' }
    ],
    desc: 'Rotwild, Steinboecke, Mufflons, Wildschweine im natuerlichen Lebensraum + Naturspielplatz mit Kletterturm + Seilbahn + Lehrpfade. Die "all-in-one"-Wahl.',
    url: 'https://www.bad-waldsee.de/gaeste/de/natur-bewegung/natur-umgebung/naherholungsgebiet-tannenbuehl',
    urlLabel: 'bad-waldsee.de Tannenbuehl'
  },
  {
    id: 'wurzacher-ried',
    title: 'Wurzacher Ried',
    subtitle: 'Bad Wurzach · Groesstes Hochmoor Mitteleuropas',
    match: 82,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🌾', heroLabel: 'Moor-Wanderung',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Wollgraswiese_im_Wurzacher_Ried.jpg/800px-Wollgraswiese_im_Wurzacher_Ried.jpg',
    pills: [
      { kind: 'dist', text: '📍 18–22 km · 23 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, strenge Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Bohlen rutschig bei Naesse', state: 'maybe' },
      { k: 'Saison Mai 26', v: 'Mai = ideal', state: 'ok' },
      { k: 'Dauer', v: '1,5–3 h flexibel' }
    ],
    desc: 'Naturlehrpfad ~4,4 km kinderwagen-tauglich; 2024 neuer Moorfrosch-Lehrpfad mit QR-Codes. <em>Bei Regen Bohlen rutschig — vor Ort im Naturschutzzentrum den besten Weg erfragen.</em>',
    url: 'https://wurzacher-ried.de/wandern',
    urlLabel: 'wurzacher-ried.de'
  },
  {
    id: 'wildpark-sonnenhalde',
    title: 'Wildpark Sonnenhalde',
    subtitle: 'Neukirch · 15 ha Wildpark',
    match: 82,
    cat: 'natur', catLabel: 'Natur',
    emoji: '🐗', heroLabel: 'Tierpark gratis',
    image: 'images/wildpark-sonnenhalde.jpg',
    pills: [
      { kind: 'dist', text: '📍 30–35 km · 38 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ausdruecklich erlaubt', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Naturwege fuer KW', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjaehrig (kein Tor)', state: 'ok' },
      { k: 'Bonus', v: 'Tierfutter vor Ort' }
    ],
    desc: '15 ha Wildpark mit Wildschweinen, Damm-/Rotwild, Mufflons, Lamas, Kamerunschafen — gratis. Klassischer Familien-Spot, hundefreundlich.',
    url: 'https://www.wildpark-sonnenhalde.de/',
    urlLabel: 'wildpark-sonnenhalde.de'
  },
  {
    id: 'skywalk-allgaeu',
    title: 'Skywalk Allgaeu',
    subtitle: 'Scheidegg · 540 m Baumwipfelpfad in 17–40 m Hoehe',
    match: 71,
    cat: 'highlight', catLabel: 'Highlight',
    emoji: '🌉', heroLabel: 'Baumwipfelpfad',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Baumwipfelpfad_mit_Alpenblick.JPG/800px-Baumwipfelpfad_mit_Alpenblick.JPG',
    pills: [
      { kind: 'dist', text: '📍 32–35 km · 38 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: '', text: '~77 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'Leine + Hundewartebereich', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'barrierefrei + Aufzug', state: 'ok' },
      { k: 'Saison Mai 26', v: '20.03.–Nov, taegl. 10–18', state: 'ok' },
      { k: 'Bonus', v: 'unter 1 m Groesse frei' }
    ],
    desc: '540-m-Baumwipfelpfad mit Blick bis Bodensee + Allgaeuer Alpen. <em>Bei Regen Holzboden rutschig — Wetter beachten.</em> Familienkarte 49 €. Hund auf Plattform erlaubt.',
    url: 'https://www.skywalk-allgaeu.de/',
    urlLabel: 'skywalk-allgaeu.de'
  },
  {
    id: 'kiddiko-memmingen',
    title: 'Kiddiko Kinderland',
    subtitle: 'Memmingen · Schlechtwetter-Backup',
    match: 61, lo: true,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🎈', heroLabel: 'Indoor-Spielpark',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 30–35 km · 30 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Mo–Mi geschlossen' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Indoor)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'eigener Bereich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Do/Fr 14–18:30, Sa/So 10–18:30', state: 'maybe' },
      { k: 'Eintritt', v: 'selber pruefen' }
    ],
    desc: 'Klassischer Indoor-Spielplatz fuer Schlechtwettertage mit Kleinkind-Bereich. <em>Im Center Parcs ist BALUBA gleichwertig + gratis</em> — daher nur als Plan B.',
    url: 'https://kiddiko.de/',
    urlLabel: 'kiddiko.de'
  },
  {
    id: 'schwaben-therme',
    title: 'Schwaben-Therme',
    subtitle: 'Aulendorf · Erlebnisbad mit Kleinkindbecken',
    match: 61, lo: true,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '♨️', heroLabel: 'Therme',
    image: null,
    pills: [
      { kind: 'dist', text: '📍 35–40 km · 38 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Hund nein' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Therme)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'Kleinkindbecken ~34 °C', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjaehrig', state: 'ok' },
      { k: 'Eintritt', v: 'selber pruefen' }
    ],
    desc: 'Echte Therme mit Thermalwasser, eigenem Kleinkindbecken mit Wasser-Spielelementen. <em>Im CP ist Aquamundo enthalten</em> — daher nur Plan B falls "anderes" Bad gewuenscht.',
    url: 'https://www.schwaben-therme.de/',
    urlLabel: 'schwaben-therme.de'
  },
  {
    id: 'reptilienzoo-scheidegg',
    title: 'Reptilienzoo Scheidegg',
    subtitle: 'Scheidegg · 50+ Terrarien',
    match: 59, lo: true,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🦎', heroLabel: 'Tropenhaus',
    image: 'images/reptilienzoo.jpg',
    pills: [
      { kind: 'dist', text: '📍 32–35 km · 38 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: 'Hund draussen + Fr Ruhetag' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Tropenhaus)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'KW-tauglich, enge Gaenge', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Apr–Sep, Fr Ruhetag', state: 'maybe' },
      { k: 'Eintritt', v: '~42 € / 5 Erw' }
    ],
    desc: '50+ Terrarien mit Schlangen, Echsen, Schildkroeten, Spinnen — bestes Indoor-Tier-Erlebnis. <em>Hund muss draussen → Sub-Group ohne Hund noetig.</em> Kombinierbar mit Skywalk.',
    url: 'https://www.reptilienzoo-scheidegg.com/',
    urlLabel: 'reptilienzoo-scheidegg.com'
  }
];
