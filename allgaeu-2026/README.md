# Allgäu CenterParcs 2026 — Ausflüge & Events

Mobile-first Slideshow für die Urlaubswoche. Zwei Tabs: Aktivitäten (nach Match-Score) und Events (chronologisch).

## Lokale Entwicklung

```bash
npm install
npm run dev
```

Öffne http://localhost:3000 im Browser. Da ES Modules verwendet werden, muss die Seite über einen HTTP-Server geöffnet werden — direktes Öffnen der `index.html` als `file://` funktioniert nicht.

## Coolify Deployment

Das Projekt enthält ein `Dockerfile` für nginx:alpine. In Coolify:

1. Neues Projekt anlegen → **Static Site** oder **Dockerfile**
2. Git-Repository verbinden (oder Zip-Upload falls kein Git)
3. Dockerfile: `./Dockerfile` (liegt im Root des `web/`-Ordners)
4. Port: `80`
5. Deploy

### Ohne Git (direkter Upload)

Falls kein Git-Repo vorhanden: Coolify unterstützt auch Docker Image Deployment oder direkten Build aus einem Zip. Alternativ `docker build` lokal + Push in eine Registry:

```bash
docker build -t allgaeu2026 .
docker tag allgaeu2026 your-registry/allgaeu2026:latest
docker push your-registry/allgaeu2026:latest
```

## Projektstruktur

```
web/
├── index.html              # Shell — nur Mount-Points, kein Inhalt
├── styles/
│   └── style.css           # Alle Styles, Design-Tokens als CSS-Vars
├── src/
│   ├── main.js             # Bootstrap: Daten laden, Cards rendern, Slideshow starten
│   ├── data/
│   │   ├── activities.js   # 15 Aktivitäten als JS-Objekte
│   │   └── events.js       # 12 Events als JS-Objekte
│   └── components/
│       ├── card.js         # renderActivityCard / renderEventCard → HTML-Strings
│       └── slideshow.js    # Tabs, Swipe, Counter, Past-Filter, Keyboard, Deep-Link
├── Dockerfile
├── nginx.conf
└── package.json
```

## Inhalte aktualisieren

- **Aktivität hinzufügen/ändern:** `src/data/activities.js` editieren
- **Event hinzufügen/ändern:** `src/data/events.js` editieren
- **Design ändern:** `styles/style.css` (CSS Custom Properties am Anfang)
- **Card-Layout ändern:** `src/components/card.js`

Kein Build-Schritt nötig — Änderungen sind sofort nach Reload sichtbar.
