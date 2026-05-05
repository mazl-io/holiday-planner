// Bootstrap: lade Daten, render Cards, starte Slideshow.
import { activities } from './data/activities.js';
import { events }     from './data/events.js';
import { renderActivityCard, renderEventCard } from './components/card.js';
import { initSlideshow } from './components/slideshow.js';

// Aktivitaeten: nach Match desc sortieren (defensiv — Daten sind eh schon sortiert)
const sortedActs = [...activities].sort((a, b) => b.match - a.match);

// Events: chronologisch aufsteigend
const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));

// Render
document.getElementById('slidesActs').innerHTML   = sortedActs.map(renderActivityCard).join('');
document.getElementById('slidesEvents').innerHTML = sortedEvents.map(renderEventCard).join('');

// Initial-Badges (slideshow.js korrigiert sie nochmal nach Past-Filter)
document.getElementById('badgeActs').textContent   = sortedActs.length;
document.getElementById('badgeEvents').textContent = sortedEvents.length;

initSlideshow();
