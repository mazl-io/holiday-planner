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
  },
  {
    id: 'inatura-dornbirn',
    mapsQuery: 'inatura Dornbirn',
    title: 'inatura Erlebnis Naturschau',
    subtitle: 'Dornbirn (AT) · Hands-on Naturmuseum',
    match: 92,
    cat: 'kultur', catLabel: 'Naturmuseum',
    emoji: '🦋', heroLabel: 'Hands-on Naturwelt',
    image: 'images/inatura-dornbirn.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 ~60 km · 50 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: '', text: '~70 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Museum)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'perfekt — alles auf Kinderhöhe', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl. 10–18', state: 'ok' },
      { k: 'Highlight', v: 'Schlechtwetter Plan A' }
    ],
    desc: 'Hands-on Naturmuseum auf 3 Etagen — Tiere, Pflanzen, Erdgeschichte zum Anfassen, Kurbeln, Drücken. <em>Genau das was bei Schlechtwetter mit Kleinkindern fehlt.</em> Kinderwagen-tauglich, Wickelraum.',
    url: 'https://www.inatura.at',
    urlLabel: 'inatura.at'
  },
  {
    id: 'lufti-meckenbeuren',
    mapsQuery: 'Lufti Kinderspielewelt Meckenbeuren',
    title: 'Lufti Kinderspielewelt',
    subtitle: 'Meckenbeuren · Indoor-Spielpark ab 0 J.',
    match: 90,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🎈', heroLabel: 'Indoor-Spielpark',
    image: 'images/lufti-meckenbeuren.jpg',
    googleRating: 4.4,
    pills: [
      { kind: 'dist', text: '📍 ~45 km · 40 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'free', text: '~22 € (U2 frei)' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Indoor)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'ab 0 J., Kleinkindbereich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Di–So, Mo Ruhetag', state: 'ok' },
      { k: 'Bonus', v: 'Bistro für Eltern' }
    ],
    desc: '2.500 m² Indoor-Spielpark explizit ab 0 Jahre, mit Kleinkindbereich. Sehr fair: Erw. nur 4,50 €, Kinder unter 2 frei. <em>Ideale Schlechtwetter-Notlösung.</em> Mo Ruhetag.',
    url: 'https://www.lufti.info',
    urlLabel: 'lufti.info'
  },
  {
    id: 'spielfabrik-dornbirn',
    mapsQuery: 'Spielfabrik Dornbirn',
    title: 'Spielfabrik',
    subtitle: 'Dornbirn (AT) · Kleinkind-Bereich abgegrenzt',
    match: 88,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🎢', heroLabel: 'Indoor-Spielpark',
    image: 'images/spielfabrik-dornbirn.jpg',
    googleRating: 4.3,
    pills: [
      { kind: 'dist', text: '📍 ~60 km · 50 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: '', text: '~30 € / 5 Erw + 2 Kleinkinder' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Indoor)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'eigener abgetrennter Bereich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl. 14–19, WE 10–19', state: 'ok' },
      { k: 'Highlight', v: 'Mit inatura kombinierbar' }
    ],
    desc: 'Vorarlbergs erster Indoor-Spielplatz mit dezidiertem, abgetrenntem Kleinkindbereich (Softplay, Bällebad, Babyrutsche). <em>Geschützt von Großen.</em> Halbtages-Combo mit inatura möglich.',
    url: 'https://www.spielfabrik.at',
    urlLabel: 'spielfabrik.at'
  },
  {
    id: 'bergbauernmuseum-diepolz',
    mapsQuery: 'Allgäuer Bergbauernmuseum Diepolz',
    title: 'Allgäuer Bergbauernmuseum',
    subtitle: 'Diepolz/Immenstadt · Mixed mit Tieren',
    match: 90,
    cat: 'kultur', catLabel: 'Bauernhof',
    emoji: '🐄', heroLabel: 'Bauern-Erlebnismuseum',
    image: 'images/bergbauernmuseum-diepolz.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 ~55 km · 50 min' },
      { kind: 'mixed', text: 'Mixed (regenfest)' },
      { kind: '', text: '~40 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'außen ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Hüpf-Heustock + Kuhmagen', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl. 10–18', state: 'ok' },
      { k: 'Bonus', v: 'Trettraktoren + Wickelraum' }
    ],
    desc: 'Begehbarer Kuhmagen, Hüpf-Heustock, viele Indoor-Stationen, echte Tiere zum Streicheln (Schafe, Kühe, Schweine), Trettraktor-Parcours. <em>Hund darf außen mit, Indoor-Anteil = sehr regenfest.</em>',
    url: 'https://www.bergbauernmuseum.de',
    urlLabel: 'bergbauernmuseum.de'
  },
  {
    id: 'doppelmayr-zoo-wolfurt',
    mapsQuery: 'Doppelmayr Zoo Wolfurt',
    title: 'Doppelmayr Zoo',
    subtitle: 'Wolfurt (AT) · Gratis-Zoo, 400 Tiere',
    match: 82,
    cat: 'natur', catLabel: 'Tierpark',
    emoji: '🦘', heroLabel: 'Gratis-Zoo',
    image: 'images/doppelmayr-zoo-wolfurt.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 ~55 km · 50 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'KW-tauglich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ganzjährig 24/7', state: 'ok' },
      { k: 'Bonus', v: 'Spielplatz gegenüber' }
    ],
    desc: 'Privater Gratis-Zoo mit 400 Tieren / 70 Arten: Mini-Esel, Riesenschildkröten, Kängurus, Alpakas, Nasenbären. <em>24/7 frei zugänglich, Hund willkommen. Achtung: keine Toiletten vor Ort.</em>',
    url: 'https://www.doppelmayr.com/zoo/',
    urlLabel: 'doppelmayr.com/zoo'
  },
  {
    id: 'pfaender-bregenz',
    mapsQuery: 'Pfänderbahn Bregenz',
    title: 'Pfänderbahn + Alpenwildpark',
    subtitle: 'Bregenz (AT) · Bergbahn + Wildpark',
    match: 80,
    cat: 'natur', catLabel: 'Berg',
    emoji: '🚠', heroLabel: 'Bergbahn + Tiere',
    image: 'images/pfaender-bregenz.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 ~50 km · 45 min' },
      { kind: 'outdoor', text: 'Outdoor (Restaurant indoor)' },
      { kind: '', text: '~90 € / 5 Erw Bahn' }
    ],
    info: [
      { k: 'Hund', v: 'Bahn ja gratis, Wildpark NEIN', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'Rundweg flach + Rutsche', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl. 8–19', state: 'ok' },
      { k: 'Highlight', v: 'Bodensee-Panorama' }
    ],
    desc: 'Bergbahn auf den Pfänder mit Bodensee-Panorama. Alpenwildpark gratis (Steinbock, Wildschwein, Rehe). <em>Hund-Logistik: Bahn + Gipfel ja, Wildpark nein → Sub-Group nötig.</em>',
    url: 'https://www.pfaenderbahn.at',
    urlLabel: 'pfaenderbahn.at'
  },
  {
    id: 'linalauneland-waltenhofen',
    mapsQuery: 'Lina Laune Land Waltenhofen',
    title: 'Lina Laune Land',
    subtitle: 'Waltenhofen · 4.000 m² Indoor',
    match: 80,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🎪', heroLabel: 'Indoor-Park',
    image: 'images/linalauneland-waltenhofen.jpg',
    googleRating: 4.3,
    pills: [
      { kind: 'dist', text: '📍 ~55 km · 45 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: '', text: '~34 € / 5 Erw + 2 Kleinkinder' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Indoor)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'Kleinkindbereich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl. 14–19, WE 10–19', state: 'ok' },
      { k: 'Bonus', v: 'Hüpfburg + Bällebad' }
    ],
    desc: '4.000 m² Indoor-Park mit Kleinkindbereich (Bällebad, Rutsche, Hüpfburg). Solide Backup-Option zwischen Center Parcs und Kempten.',
    url: 'https://linalauneland.de',
    urlLabel: 'linalauneland.de'
  },
  {
    id: 'bauernhofmuseum-illerbeuren',
    mapsQuery: 'Schwäbisches Bauernhofmuseum Illerbeuren',
    title: 'Bauernhofmuseum Illerbeuren',
    subtitle: 'Kronburg · 30+ historische Höfe + Tiere',
    match: 78,
    cat: 'kultur', catLabel: 'Bauernhof',
    emoji: '🐐', heroLabel: 'Freilichtmuseum',
    image: 'images/bauernhofmuseum-illerbeuren.jpg',
    googleRating: 4.5,
    pills: [
      { kind: 'dist', text: '📍 ~35 km · 30 min' },
      { kind: 'mixed', text: 'Mixed' },
      { kind: '', text: '~40 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'außen ja, Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'Tiere + KW-tauglich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Di–So 10–18, Mo zu', state: 'ok' },
      { k: 'Bonus', v: 'Biergarten' }
    ],
    desc: '30+ historische Häuser, Tiere (Geißen, Schweine, Schafe), niedriger Seilgarten, Kegelbahn. Sehr nah, authentisch, schöner Biergarten am Ende. <em>Mo Ruhetag.</em>',
    url: 'https://www.bauernhofmuseum.de',
    urlLabel: 'bauernhofmuseum.de'
  },
  {
    id: 'allgaeulino-wertach',
    mapsQuery: 'Allgäulino Wertach',
    title: 'Allgäulino',
    subtitle: 'Wertach · 3.000 m² Hallenspielplatz',
    match: 75,
    cat: 'indoor', catLabel: 'Indoor',
    emoji: '🛝', heroLabel: 'Hallenspielplatz',
    image: 'images/allgaeulino-wertach.jpg',
    googleRating: 4.4,
    pills: [
      { kind: 'dist', text: '📍 ~65 km · 50 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'free', text: '~30 € (U3 nur 3,50)' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Indoor)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: '60 m² Kleinkindbereich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Mi–So (vorab prüfen!)', state: 'maybe' },
      { k: 'Eintritt', v: 'sehr fair' }
    ],
    desc: '3.000 m² Hallenspielplatz mit eigenem 60 m² Kleinkindbereich. Sehr fair: U3 nur 3,50 €. <em>Vor Reise Öffnungstage prüfen — saisonal Mi–So.</em>',
    url: 'https://www.allgaeulino.de',
    urlLabel: 'allgaeulino.de'
  },
  {
    id: 'sea-life-konstanz',
    mapsQuery: 'SEA LIFE Konstanz',
    title: 'SEA LIFE Konstanz',
    subtitle: 'Konstanz · Aquarium + neue Insel 2026',
    match: 70,
    cat: 'highlight', catLabel: 'Aquarium',
    emoji: '🐠', heroLabel: 'Indoor-Aquarium',
    image: 'images/sea-life-konstanz.jpg',
    googleRating: 4.2,
    pills: [
      { kind: 'dist', text: '📍 ~110 km · 80 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'warn', text: '~110 € / 5 Erw' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Indoor)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'Berührungsbecken', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl., Tickets vorab', state: 'ok' },
      { k: 'Hinweis', v: 'eher Tagesausflug' }
    ],
    desc: 'Aquarium komplett indoor mit Berührungsbecken, neue "SEA LIFE Insel" bis 20.05.2026. <em>Etwas weit (~80 min), aber bei Dauerregen perfektes Highlight. Tickets online vorab buchen.</em>',
    url: 'https://www.visitsealife.com/konstanz/',
    urlLabel: 'visitsealife.com'
  },
  {
    id: 'urlauer-modellbahnen',
    mapsQuery: 'Urlauer Modellbahnen Leutkirch',
    title: 'Urlauer Modellbahnen',
    subtitle: 'Urlau · 250 m² Modellbahn · 3 min vom Park',
    match: 92,
    cat: 'indoor', catLabel: 'Modellbahn',
    emoji: '🚂', heroLabel: 'Modellbahn-Ausstellung',
    image: 'images/urlauer-modellbahnen.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~1 km · 3 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'free', text: '~18 € Familie · U3 frei' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'fahrende Züge faszinieren', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Mi/Fr/Sa/So 13–18', state: 'ok' },
      { k: 'Highlight', v: 'Schlechtwetter + Mittagsschlaf' }
    ],
    desc: '250 m² Modellbahn-Ausstellung direkt im Reisedorf Urlau — nur 3 min vom Center Parcs. <em>Echtes Schlechtwetter-Highlight oder als kleine Pause zwischendurch.</em>',
    url: 'https://www.urlauer-modellbahnen.de/',
    urlLabel: 'urlauer-modellbahnen.de'
  },
  {
    id: 'genussmanufaktur-urlau',
    mapsQuery: 'Allgäuer Genussmanufaktur Urlau',
    title: 'Allgäuer Genussmanufaktur',
    subtitle: 'Urlau · Schau-Bäckerei + Brauerei + Café',
    match: 90,
    cat: 'kultur', catLabel: 'Schauhandwerk',
    emoji: '🍞', heroLabel: 'Schaumanufaktur',
    image: 'images/genussmanufaktur-urlau.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~1 km · 3 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'free', text: '3 € Erw · U18 frei' }
    ],
    info: [
      { k: 'Hund', v: 'Café/außen prüfen', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'viel zu schauen', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Mi–So 10–17', state: 'ok' },
      { k: 'Bonus', v: 'Brauerei-Schau Sa 15–16' }
    ],
    desc: '1.000 m² Erlebnisort 3 min vom Park: Schau-Bäckerei, Schau-Brauerei (Mi 13–14, Sa 15–16), Café, Dorfladen, Töpferei, Webstuhl, Bibliothek mit 12.000 Antiqua-Büchern. <em>U18 frei!</em>',
    url: 'https://www.allgaeuer-genussmanufaktur.de/',
    urlLabel: 'allgaeuer-genussmanufaktur.de'
  },
  {
    id: 'ponyhof-scheidegg',
    mapsQuery: 'Erlebnis Ponyhof Scheidegg',
    title: 'Erlebnis Ponyhof',
    subtitle: 'Scheidegg · Streichelzoo + Indoor-Spielscheune',
    match: 88,
    cat: 'natur', catLabel: 'Ponyhof',
    emoji: '🐴', heroLabel: 'Ponyhof + Streichelzoo',
    image: 'images/ponyhof-scheidegg.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~50 km · 55 min' },
      { kind: 'mixed', text: 'Mixed (Spielscheune indoor)' },
      { kind: 'free', text: '2 € + Reiten 3–8 €' }
    ],
    info: [
      { k: 'Hund', v: 'vor Ort prüfen', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'Streichelzoo + KW im Gehege', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl. geöffnet', state: 'ok' },
      { k: 'Bonus', v: 'Indoor-Spielscheune' }
    ],
    desc: 'Reiten ab 2 J. (Eltern führen), Streichelzoo (Llamas, Alpakas, Ziegen) <em>mit Kinderwagen begehbar ohne Zaun</em>, Indoor-Spielscheune mit Heuburg + Karussell + Trampolin als Schlechtwetter-Backup. Zwillinge knapp unter Reitalter — Streichelzoo allein lohnt aber.',
    url: 'https://www.allgaeu-urlauber.de/familien-ausflugsziele/erlebnis-ponyhof-scheidegg/',
    urlLabel: 'allgaeu-urlauber.de'
  },
  {
    id: 'kaeserei-vogler-bad-wurzach',
    mapsQuery: 'Käserei Vogler Bad Wurzach',
    title: 'Käserei Vogler',
    subtitle: 'Bad Wurzach · Museum + Schauproduktion + Spielplatz',
    match: 85,
    cat: 'kultur', catLabel: 'Schaukäserei',
    emoji: '🧀', heroLabel: 'Käserei-Erlebnis',
    image: 'images/kaeserei-vogler-bad-wurzach.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~22 km · 28 min' },
      { kind: 'mixed', text: 'Mixed (Allwetter)' },
      { kind: 'free', text: 'Museum gratis' }
    ],
    info: [
      { k: 'Hund', v: 'außen ja, prüfen', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'Spielplatz + Schauschau', state: 'ok' },
      { k: 'Saison Mai 26', v: 'lang geöffnet', state: 'ok' },
      { k: 'Bonus', v: 'Sennerstüble + Biergarten' }
    ],
    desc: 'Komplett-Erlebnis Allwetter: kostenloses Käsereimuseum + Schauproduktion + Sennerstüble-Restaurant + Kinderspielplatz + sonniger Biergarten. Mi 9–12, sonst lang geöffnet.',
    url: 'https://www.kaeserei-vogler.de/',
    urlLabel: 'kaeserei-vogler.de'
  },
  {
    id: 'kaeserei-zurwies-wangen',
    mapsQuery: 'Käserei Zurwies Wangen',
    title: 'Bio-Käserei Zurwies',
    subtitle: 'Wangen · Schaukäserei live · Mo–Fr 9:30',
    match: 80,
    cat: 'kultur', catLabel: 'Schaukäserei',
    emoji: '🐄', heroLabel: 'Schaukäserei live',
    image: 'images/kaeserei-zurwies-wangen.jpg',
    googleRating: null,
    pills: [
      { kind: 'dist', text: '📍 ~18 km · 22 min' },
      { kind: 'indoor', text: 'Indoor' },
      { kind: 'free', text: 'kostenlos' }
    ],
    info: [
      { k: 'Hund', v: 'außen ja, prüfen', state: 'maybe' },
      { k: 'Kleinkind 1,5 J.', v: 'Glasscheibe = sicher', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Mo–Fr 8:30–13', state: 'ok' },
      { k: 'Highlight', v: 'Live-Käse Mo–Fr 9:30' }
    ],
    desc: 'Käseherstellung live durch Glasscheibe Mo–Fr 9:30 Uhr. Bio-Heumilchkäserei, Slow Food Deutschland. <em>Kostenlos, kompakt, Vormittag-Slot.</em>',
    url: 'https://www.zurwies.com/',
    urlLabel: 'zurwies.com'
  },
  {
    id: 'haustierhof-reutemuehle',
    mapsQuery: 'Haustierhof Reutemühle Überlingen',
    title: 'Haustierhof Reutemühle',
    subtitle: 'Salem · 200+ Tierarten · Hund OK',
    match: 78, lo: true,
    cat: 'natur', catLabel: 'Tierpark',
    emoji: '🐰', heroLabel: 'Haustier-Hof',
    image: 'images/haustierhof-reutemuehle.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 ~75 km · 75 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'warn', text: 'über Radius' }
    ],
    info: [
      { k: 'Hund', v: 'ja, ausdrücklich Leine', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'KW-tauglich', state: 'ok' },
      { k: 'Saison Mai 26', v: 'tägl. 10–19', state: 'ok' },
      { k: 'Bonus', v: 'U3 frei' }
    ],
    desc: '200+ Haustier- und Bauernhof-Tierarten — vom Mini-Esel bis zum Riesenkaninchen. <em>Hund explizit an Leine erlaubt</em>, U3 frei. Über Standard-Radius (~75 min), aber für Bodensee-Tagestrip lohnenswert.',
    url: 'https://www.haustierhof-reutemuehle.de/',
    urlLabel: 'haustierhof-reutemuehle.de'
  },
  {
    id: 'pfahlbauten-unteruhldingen',
    mapsQuery: 'Pfahlbauten Unteruhldingen',
    title: 'Pfahlbauten Unteruhldingen',
    subtitle: 'Uhldingen · UNESCO-Welterbe · Hund auch innen',
    match: 75, lo: true,
    cat: 'kultur', catLabel: 'Freilichtmuseum',
    emoji: '🏚️', heroLabel: 'UNESCO-Pfahlbauten',
    image: 'images/pfahlbauten-unteruhldingen.jpg',
    googleRating: 4.4,
    pills: [
      { kind: 'dist', text: '📍 ~80 km · 80 min' },
      { kind: 'mixed', text: 'Mixed' },
      { kind: 'warn', text: 'über Radius' }
    ],
    info: [
      { k: 'Hund', v: 'ja — sogar in Häusern!', state: 'ok' },
      { k: 'Kleinkind 1,5 J.', v: 'KW-tauglich, Steg-Erlebnis', state: 'ok' },
      { k: 'Saison Mai 26', v: 'ab 1.5. tägl.', state: 'ok' },
      { k: 'Highlight', v: 'UNESCO-Welterbe' }
    ],
    desc: 'UNESCO-Welterbe-Freilichtmuseum mit rekonstruierten Pfahlbauten am Bodensee-Steg. <em>Hund sogar in den Häusern erlaubt — sehr selten!</em> Über Radius (~80 min), bei Bodensee-Tagestrip mit Reutemühle/Affenberg kombinierbar.',
    url: 'https://www.pfahlbauten.de/',
    urlLabel: 'pfahlbauten.de'
  },
  {
    id: 'affenberg-salem',
    mapsQuery: 'Affenberg Salem',
    title: 'Affenberg Salem',
    subtitle: 'Salem · Berberaffen · Mai = Babyaffen',
    match: 70, lo: true,
    cat: 'natur', catLabel: 'Tierpark',
    emoji: '🐒', heroLabel: 'Berberaffen-Park',
    image: 'images/affenberg-salem.jpg',
    googleRating: 4.6,
    pills: [
      { kind: 'dist', text: '📍 ~80 km · 80 min' },
      { kind: 'outdoor', text: 'Outdoor' },
      { kind: 'warn', text: 'Hund nicht erlaubt' }
    ],
    info: [
      { k: 'Hund', v: 'nein (Affen reagieren)', state: 'no' },
      { k: 'Kleinkind 1,5 J.', v: 'Affen aus naher Hand', state: 'ok' },
      { k: 'Saison Mai 26', v: 'Mai = Babyaffen!', state: 'ok' },
      { k: 'Highlight', v: 'einmalig im Mai' }
    ],
    desc: 'Berberaffen direkt an der Hand füttern. <em>Mai = Babyaffen-Geburts-Saison — einmalig im Jahr!</em> Hund nicht erlaubt → einer muss draußen warten. Über Radius (~80 min), nur als Tagesausflug mit z.B. Pfahlbauten kombinieren.',
    url: 'https://www.bodensee.eu/de/was-erleben/uebersichtskarte/affenberg-salem_poi58',
    urlLabel: 'bodensee.eu Affenberg'
  }
];
