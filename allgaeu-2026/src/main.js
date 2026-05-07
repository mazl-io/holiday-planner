// Bootstrap: lade Daten, render Cards, starte Slideshow.
import { activities }  from './data/activities.js?v=20260506b';
import { events }      from './data/events.js?v=20260506b';
import { restaurants } from './data/restaurants.js?v=20260506b';
import { renderActivityCard, renderEventCard, renderRestaurantCard } from './components/card.js?v=20260506b';
import { initSlideshow } from './components/slideshow.js?v=20260506b';

// Aktivitaeten: nach Match desc sortieren (defensiv — Daten sind eh schon sortiert)
const sortedActs = [...activities].sort((a, b) => b.match - a.match);

// Events: chronologisch aufsteigend
const sortedEvents = [...events].sort((a, b) => a.date.localeCompare(b.date));

// Restaurants: nach Google-Bewertung absteigend
const sortedRestaurants = [...restaurants].sort((a, b) => (b.googleRating || 0) - (a.googleRating || 0));

// Render
document.getElementById('slidesActs').innerHTML        = sortedActs.map(renderActivityCard).join('');
document.getElementById('slidesEvents').innerHTML      = sortedEvents.map(renderEventCard).join('');
document.getElementById('slidesRestaurants').innerHTML = sortedRestaurants.map(renderRestaurantCard).join('');

// Initial-Badges (slideshow.js korrigiert sie nochmal nach Past-Filter)
document.getElementById('badgeActs').textContent        = sortedActs.length;
document.getElementById('badgeEvents').textContent      = sortedEvents.length;
document.getElementById('badgeRestaurants').textContent = sortedRestaurants.length;

initSlideshow();
