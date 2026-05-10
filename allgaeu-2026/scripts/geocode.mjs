// One-shot Geocoding-Skript: alle mapsQuery aus den 3 Daten-Files via Nominatim → coordinates.json
// Aufruf: node scripts/geocode.mjs
// Nominatim: 1 Request/Sek (Usage-Policy)

import fs from 'fs';
import { activities }  from '../src/data/activities.js';
import { events }      from '../src/data/events.js';
import { restaurants } from '../src/data/restaurants.js';

const UA = 'HolidayPlanner/1.0 (https://github.com/mazl-io/holiday-planner; marcel.nellesen+claude@tangany.com)';

const items = [
  ...activities.map(a => ({ id: a.id, q: a.mapsQuery, kind: 'act' })),
  ...events.map(e => ({ id: e.id, q: e.mapsQuery, kind: 'event' })),
  ...restaurants.map(r => ({ id: r.id, q: r.mapsQuery, kind: 'restaurant' }))
];

// Existing coords laden, damit re-runs nur neue Items abrufen
const OUT = new URL('../src/data/coordinates.json', import.meta.url);
let cache = {};
try { cache = JSON.parse(fs.readFileSync(OUT, 'utf8')); } catch {}

let n = 0;
for (const { id, q, kind } of items) {
  if (cache[id]) {
    console.log(`✓ ${id}: cached`);
    continue;
  }
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=1&addressdetails=0`;
  try {
    const r = await fetch(url, { headers: { 'User-Agent': UA, 'Accept': 'application/json' } });
    const text = await r.text();
    let data;
    try { data = JSON.parse(text); }
    catch { console.log(`✗ ${id}: rate-limited or non-JSON response`); data = []; }
    if (Array.isArray(data) && data.length > 0) {
      cache[id] = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        kind
      };
      console.log(`+ ${id}: ${cache[id].lat.toFixed(4)}, ${cache[id].lng.toFixed(4)} [${kind}]`);
    } else if (Array.isArray(data) && data.length === 0) {
      console.log(`✗ ${id}: NOT FOUND for "${q}"`);
    }
  } catch (e) {
    console.log(`✗ ${id}: ERROR ${e.message}`);
  }
  // Save incrementally
  try { fs.writeFileSync(OUT, JSON.stringify(cache, null, 2)); }
  catch (e) { console.log(`! save failed: ${e.message}`); }
  n++;
  // Nominatim usage policy: max 1 req/sec — etwas Puffer dazu
  await new Promise(r => setTimeout(r, 1500));
}

console.log(`Done. ${Object.keys(cache).length} entries in coordinates.json (${n} new this run).`);
