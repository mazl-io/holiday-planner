// Map-Modul (Leaflet via CDN als window.L).
// Lazy init: erst wenn der User auf "Karte" toggelt, wird Leaflet aufgerufen.

let mapInstance = null;
let markerLayer = null;
let coords = null;
let homeMarker = null;

async function loadCoords() {
  if (coords) return coords;
  const r = await fetch('src/data/coordinates.json');
  coords = await r.json();
  return coords;
}

function pinIcon(kind, emoji) {
  return window.L.divIcon({
    className: '',
    html: `<div class="marker-pin ${kind}"><span>${emoji || ''}</span></div>`,
    iconSize: [28, 36],
    iconAnchor: [14, 32]
  });
}

function popupHTML(item) {
  const ratingHtml = item.googleRating != null
    ? `<span class="map-popup-meta"><span class="star">★</span> ${item.googleRating.toFixed(1)}</span>`
    : '';
  const matchHtml = item.kind === 'act' && item.match != null
    ? `<span class="map-popup-meta"> · Match ${item.match}</span>`
    : '';
  return `
    <span class="map-popup-title">${item.title}</span>
    <span class="map-popup-sub">${item.subtitle || ''}</span>
    ${ratingHtml}${matchHtml}
  `;
}

export async function ensureMap(itemsById) {
  if (!window.L) {
    console.error('Leaflet nicht geladen (CDN blockiert?).');
    return null;
  }
  await loadCoords();
  if (mapInstance) return mapInstance;

  const center = coords._home || { lat: 47.7977, lng: 9.9849 };
  mapInstance = window.L.map('map', {
    center: [center.lat, center.lng],
    zoom: 11,
    scrollWheelZoom: true
  });
  window.L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(mapInstance);

  markerLayer = window.L.layerGroup().addTo(mapInstance);

  // Home-Marker (Center Parcs)
  if (center) {
    homeMarker = window.L.marker([center.lat, center.lng], {
      icon: pinIcon('home', '🏡'),
      zIndexOffset: 1000
    }).addTo(mapInstance);
    homeMarker.bindPopup(`<span class="map-popup-title">${center.label || 'Center Parcs'}</span>`);
  }

  return mapInstance;
}

// Setzt die Marker für den aktuellen Mode + sichtbare Items.
export async function renderMarkers(mode, items, itemsById) {
  await ensureMap(itemsById);
  if (!mapInstance || !markerLayer) return;
  markerLayer.clearLayers();

  const bounds = [];
  if (coords._home) bounds.push([coords._home.lat, coords._home.lng]);

  for (const slide of items) {
    const id = slide.dataset.id;
    const c = coords[id];
    const item = itemsById[id];
    if (!c || !item) continue;
    const m = window.L.marker([c.lat, c.lng], { icon: pinIcon(c.kind || mode, item.emoji) });
    m.bindPopup(popupHTML(item));
    m.addTo(markerLayer);
    bounds.push([c.lat, c.lng]);
  }

  if (bounds.length > 1) {
    mapInstance.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
  }
  // Resize trigger — Leaflet braucht das nach show
  setTimeout(() => mapInstance.invalidateSize(), 50);
}

export function destroyMap() {
  if (mapInstance) { mapInstance.remove(); mapInstance = null; markerLayer = null; homeMarker = null; }
}
