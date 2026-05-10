// Bootstrap: lade Daten, render Cards, starte Slideshow.
import { activities }  from './data/activities.js?v=20260510';
import { events }      from './data/events.js?v=20260510';
import { restaurants } from './data/restaurants.js?v=20260510';
import { renderActivityCard, renderEventCard, renderRestaurantCard } from './components/card.js?v=20260510';
import { initSlideshow } from './components/slideshow.js?v=20260510';

// Aktivitaeten: initial nach Match desc (Sort-Select aendert spaeter via slideshow.js)
const sortedActs = [...activities].sort((a, b) => b.match - a.match);
const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));
const sortedRestaurants = [...restaurants].sort((a, b) => (b.googleRating || 0) - (a.googleRating || 0));

// Render
document.getElementById('slidesActs').innerHTML        = sortedActs.map(renderActivityCard).join('');
document.getElementById('slidesEvents').innerHTML      = sortedEvents.map(renderEventCard).join('');
document.getElementById('slidesRestaurants').innerHTML = sortedRestaurants.map(renderRestaurantCard).join('');

document.getElementById('badgeActs').textContent        = sortedActs.length;
document.getElementById('badgeEvents').textContent      = sortedEvents.length;
document.getElementById('badgeRestaurants').textContent = sortedRestaurants.length;

// Item-Lookup-Map (id → originaler Datensatz) — wird vom Map-Modul fuer Popups gebraucht.
const itemsById = {};
for (const a of activities)   itemsById[a.id] = { ...a, kind: 'act' };
for (const e of events)       itemsById[e.id] = { ...e, kind: 'event' };
for (const r of restaurants)  itemsById[r.id] = { ...r, kind: 'restaurant' };

initSlideshow({ itemsById });
