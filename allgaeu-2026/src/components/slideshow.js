// Slideshow-Controller:
// - Tabs (Aktivitaeten / Events / Restaurants)
// - Native Swipe via scroll-snap (siehe CSS)
// - Past-Event-Filter (basiert auf data-date / data-date-end)
// - Favoriten via localStorage (Heart-Overlay auf Cards) + Filter-Toggle
// - Sortierung pro Tab via Select
// - View-Toggle Liste ↔ Karte (Leaflet via map.js)
// - Deep-Link via #acts-3 / #events-5 / #restaurants-2

import { renderMarkers } from './map.js?v=20260510';

const FAVS_KEY = 'holiday_favorites_v1';

// Sort-Optionen pro Mode. Erste = default beim Tab-Wechsel.
const SORT_OPTIONS = {
  acts: [
    { key: 'match',  label: 'Match',     dir: -1 },
    { key: 'rating', label: 'Bewertung', dir: -1 },
    { key: 'dist',   label: 'Distanz',   dir:  1 }
  ],
  events: [
    { key: 'date',   label: 'Datum',     dir:  1 },
    { key: 'dist',   label: 'Distanz',   dir:  1 },
    { key: 'rating', label: 'Bewertung', dir: -1 }
  ],
  restaurants: [
    { key: 'rating', label: 'Bewertung', dir: -1 },
    { key: 'dist',   label: 'Distanz',   dir:  1 },
    { key: 'price',  label: 'Preis',     dir:  1 }
  ]
};

function loadFavs() {
  try {
    return new Set(JSON.parse(localStorage.getItem(FAVS_KEY) || '[]'));
  } catch { return new Set(); }
}
function saveFavs(set) {
  try { localStorage.setItem(FAVS_KEY, JSON.stringify([...set])); }
  catch { /* storage voll oder Privatmodus — ignorieren */ }
}

export function initSlideshow(opts = {}) {
  const itemsById = opts.itemsById || {};
  const tabs = Array.from(document.querySelectorAll('.mode-tab'));
  const containers = {
    acts: document.getElementById('slidesActs'),
    events: document.getElementById('slidesEvents'),
    restaurants: document.getElementById('slidesRestaurants')
  };
  const counter = document.getElementById('counter');     // optional
  const prevBtn = document.getElementById('prevBtn');     // optional
  const nextBtn = document.getElementById('nextBtn');     // optional
  const pastBar = document.getElementById('pastBar');
  const pastBarText = document.getElementById('pastBarText');
  const pastBarBtn = document.getElementById('pastBarBtn');
  const emptyState = document.getElementById('emptyState');
  const swipeHint = document.getElementById('swipeHint');
  const favOnlyBtn = document.getElementById('favOnlyBtn');
  const favCountEl = document.getElementById('favCount');
  const sortSelect = document.getElementById('sortSelect');
  const viewToggleBtn = document.getElementById('viewToggleBtn');
  const mapView = document.getElementById('mapView');

  // Past-event filtering
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const allEventSlides = Array.from(containers.events.querySelectorAll('.slide'));
  let pastShown = false;
  let pastCount = 0;
  let favsOnly = false;
  let viewMode = 'list'; // 'list' | 'map'
  const sortByMode = { acts: 'match', events: 'date', restaurants: 'rating' };
  const favs = loadFavs();

  allEventSlides.forEach(s => {
    const endStr = s.dataset.dateEnd || s.dataset.date;
    if (!endStr) return;
    const end = new Date(endStr + 'T23:59:59');
    if (end < today) {
      s.classList.add('past');
      pastCount++;
    }
  });

  // Mark favorited slides on initial render
  function applyFavMarks() {
    Object.values(containers).forEach(container => {
      Array.from(container.querySelectorAll('.slide')).forEach(slide => {
        const isFav = favs.has(slide.dataset.id);
        slide.classList.toggle('is-fav', isFav);
        const btn = slide.querySelector('.fav-btn');
        if (btn) btn.setAttribute('aria-pressed', isFav ? 'true' : 'false');
      });
    });
  }
  applyFavMarks();

  // Zentral: setzt display:none/'' auf jeder Slide basierend auf allen aktiven Filtern
  function applyFilters() {
    Object.entries(containers).forEach(([k, container]) => {
      Array.from(container.querySelectorAll('.slide')).forEach(slide => {
        const isPast = slide.classList.contains('past');
        const isFav = slide.classList.contains('is-fav');
        let visible = true;
        if (k === 'events' && isPast && !pastShown) visible = false;
        if (favsOnly && !isFav) visible = false;
        slide.style.display = visible ? '' : 'none';
      });
    });
  }

  function activeSlides(m) {
    return Array.from(containers[m].querySelectorAll('.slide'))
      .filter(s => s.style.display !== 'none');
  }

  function refreshFavCount() {
    const n = favs.size;
    if (favCountEl) favCountEl.textContent = n;
    if (favOnlyBtn) favOnlyBtn.classList.toggle('hidden', n === 0);
    // Wenn Filter an war und alle Favs gelöscht: Filter ausschalten
    if (favsOnly && n === 0) {
      favsOnly = false;
      if (favOnlyBtn) {
        favOnlyBtn.setAttribute('aria-pressed', 'false');
      }
      applyFilters();
    }
  }

  const state = { acts: { idx: 0 }, events: { idx: 0 }, restaurants: { idx: 0 } };
  let mode = 'acts';

  // Sortiert die Slides im aktuellen Mode-Container neu (DOM appendChild = re-order).
  function applySort(m, sortKey) {
    const opt = SORT_OPTIONS[m].find(o => o.key === sortKey) || SORT_OPTIONS[m][0];
    const dir = opt.dir;
    const container = containers[m];
    const slides = Array.from(container.querySelectorAll('.slide'));
    slides.sort((a, b) => {
      if (opt.key === 'date') {
        const av = a.dataset.sortDate || '';
        const bv = b.dataset.sortDate || '';
        return dir * av.localeCompare(bv);
      }
      const attr = 'sort' + opt.key.charAt(0).toUpperCase() + opt.key.slice(1);
      const av = parseFloat(a.dataset[attr] || '0');
      const bv = parseFloat(b.dataset[attr] || '0');
      return dir * (av - bv);
    });
    slides.forEach(s => container.appendChild(s));
    sortByMode[m] = opt.key;
  }

  // Befuellt das Sort-Select mit den Optionen fuer den aktuellen Mode + waehlt den gespeicherten Wert.
  function refreshSortOptions() {
    if (!sortSelect) return;
    sortSelect.innerHTML = SORT_OPTIONS[mode]
      .map(o => `<option value="${o.key}">${o.label}</option>`)
      .join('');
    sortSelect.value = sortByMode[mode] || SORT_OPTIONS[mode][0].key;
  }

  async function setViewMode(next) {
    if (next === viewMode) return;
    viewMode = next;
    if (viewToggleBtn) {
      viewToggleBtn.setAttribute('aria-pressed', viewMode === 'map' ? 'true' : 'false');
      const lbl = viewToggleBtn.querySelector('.view-toggle-label');
      if (lbl) lbl.textContent = viewMode === 'map' ? 'Liste' : 'Karte';
    }
    if (viewMode === 'map') {
      // alle slides containers verstecken, map zeigen
      Object.values(containers).forEach(c => c.classList.add('hidden'));
      if (pastBar) pastBar.classList.remove('show');
      if (mapView) mapView.classList.remove('hidden');
      if (sortSelect) sortSelect.disabled = true;
      await renderMarkers(mode, activeSlides(mode), itemsById);
    } else {
      if (mapView) mapView.classList.add('hidden');
      Object.entries(containers).forEach(([k, c]) => c.classList.toggle('hidden', k !== mode));
      if (sortSelect) sortSelect.disabled = false;
      refreshPastBar();
    }
  }

  function refreshBadges() {
    document.getElementById('badgeActs').textContent = activeSlides('acts').length;
    document.getElementById('badgeEvents').textContent = activeSlides('events').length;
    document.getElementById('badgeRestaurants').textContent = activeSlides('restaurants').length;
  }

  function refreshPastBar() {
    if (mode === 'events' && pastCount > 0) {
      pastBar.classList.add('show');
      pastBarText.textContent = pastShown
        ? `${pastCount} vergangene Events sichtbar.`
        : `${pastCount} vergangene Events ausgeblendet.`;
      pastBarBtn.textContent = pastShown ? 'ausblenden' : 'einblenden';
    } else {
      pastBar.classList.remove('show');
    }
  }

  function refreshEmpty() {
    const list = activeSlides(mode);
    if (list.length === 0) {
      emptyState.classList.remove('hidden');
      containers[mode].style.display = 'none';
    } else {
      emptyState.classList.add('hidden');
      if (mode === 'acts') containers.acts.style.display = '';
      if (mode === 'events') containers.events.style.display = '';
    }
  }

  function updateCounter() {
    const list = activeSlides(mode);
    if (list.length === 0) {
      if (counter) counter.innerHTML = '<strong>0</strong> / 0';
      if (prevBtn) prevBtn.disabled = true;
      if (nextBtn) nextBtn.disabled = true;
      return;
    }
    const idx = Math.max(0, Math.min(list.length - 1, state[mode].idx));
    state[mode].idx = idx;
    if (counter) counter.innerHTML = `<strong>${idx + 1}</strong> / ${list.length}`;
    if (prevBtn) prevBtn.disabled = idx === 0;
    if (nextBtn) nextBtn.disabled = idx === list.length - 1;
  }

  // Horizontal-only scroll: bewegt NUR den .slides-Container, nicht das Body.
  // scrollIntoView wuerde sonst auch vertikal scrollen wenn der Slide unter
  // der Falte liegt (z.B. nach Vergroessern des Logo-Headers).
  function scrollContainerToSlide(container, slide, smooth) {
    const sLeft = slide.getBoundingClientRect().left;
    const cLeft = container.getBoundingClientRect().left;
    container.scrollTo({
      left: container.scrollLeft + (sLeft - cLeft),
      behavior: smooth ? 'smooth' : 'auto'
    });
  }

  function goTo(idx, smooth) {
    const list = activeSlides(mode);
    if (list.length === 0) return;
    state[mode].idx = Math.max(0, Math.min(list.length - 1, idx));
    scrollContainerToSlide(containers[mode], list[state[mode].idx], smooth);
    updateCounter();
    if (history.replaceState) {
      history.replaceState(null, '', `#${mode}-${state[mode].idx + 1}`);
    }
  }

  function setMode(newMode) {
    if (newMode === mode) return;
    mode = newMode;
    tabs.forEach(t => {
      const active = t.dataset.mode === mode;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    if (viewMode === 'list') {
      Object.keys(containers).forEach(k => {
        containers[k].classList.toggle('hidden', k !== mode);
      });
    }
    refreshSortOptions();
    refreshPastBar();
    refreshEmpty();
    updateCounter();
    const list = activeSlides(mode);
    if (list.length > 0) {
      scrollContainerToSlide(containers[mode], list[state[mode].idx], false);
    }
    if (viewMode === 'map') {
      renderMarkers(mode, list, itemsById);
    }
    if (history.replaceState) {
      history.replaceState(null, '', `#${mode}-${state[mode].idx + 1}`);
    }
  }

  function togglePast() {
    pastShown = !pastShown;
    applyFilters();
    state.events.idx = 0;
    refreshBadges();
    refreshPastBar();
    refreshEmpty();
    updateCounter();
    const list = activeSlides('events');
    if (mode === 'events' && list.length > 0) {
      scrollContainerToSlide(containers.events, list[0], false);
    }
    if (viewMode === 'map' && mode === 'events') renderMarkers(mode, list, itemsById);
  }

  function toggleFavsOnly() {
    favsOnly = !favsOnly;
    if (favOnlyBtn) favOnlyBtn.setAttribute('aria-pressed', favsOnly ? 'true' : 'false');
    applyFilters();
    state[mode].idx = 0;
    refreshBadges();
    refreshEmpty();
    updateCounter();
    const list = activeSlides(mode);
    if (list.length > 0) {
      scrollContainerToSlide(containers[mode], list[0], false);
    }
    if (viewMode === 'map') renderMarkers(mode, list, itemsById);
  }

  function handleFavClick(id) {
    if (favs.has(id)) favs.delete(id);
    else favs.add(id);
    saveFavs(favs);
    applyFavMarks();
    refreshFavCount();
    refreshBadges();
    if (favsOnly) {
      applyFilters();
      refreshEmpty();
      updateCounter();
      if (viewMode === 'map') renderMarkers(mode, activeSlides(mode), itemsById);
    }
  }

  // Wire-up
  tabs.forEach(t => t.addEventListener('click', () => setMode(t.dataset.mode)));
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(state[mode].idx - 1, true));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(state[mode].idx + 1, true));
  if (pastBarBtn) pastBarBtn.addEventListener('click', togglePast);
  if (favOnlyBtn) favOnlyBtn.addEventListener('click', toggleFavsOnly);
  if (sortSelect) sortSelect.addEventListener('change', (e) => {
    applySort(mode, e.target.value);
    state[mode].idx = 0;
    const list = activeSlides(mode);
    if (list.length > 0) scrollContainerToSlide(containers[mode], list[0], false);
    if (viewMode === 'map') renderMarkers(mode, list, itemsById);
  });
  if (viewToggleBtn) viewToggleBtn.addEventListener('click', () => {
    setViewMode(viewMode === 'list' ? 'map' : 'list');
  });

  // Heart click delegation: ein einziger Listener fuer alle Cards
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.fav-btn');
    if (!btn) return;
    e.preventDefault();
    e.stopPropagation();
    handleFavClick(btn.dataset.favToggle);
  });

  // Mouse drag-to-swipe (desktop): Click+Halten und horizontal ziehen
  Object.values(containers).forEach(root => {
    let isDown = false, startX = 0, startScroll = 0, moved = false;
    root.addEventListener('mousedown', (e) => {
      // Bei Klicks auf Links/Buttons NICHT als Drag interpretieren
      if (e.target.closest('a, button, input, textarea, select')) return;
      isDown = true; moved = false;
      startX = e.pageX;
      startScroll = root.scrollLeft;
      root.style.cursor = 'grabbing';
      root.style.userSelect = 'none';
    });
    root.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      root.scrollLeft = startScroll - dx;
    });
    const end = () => {
      if (!isDown) return;
      isDown = false;
      root.style.cursor = '';
      root.style.userSelect = '';
    };
    root.addEventListener('mouseup', end);
    root.addEventListener('mouseleave', end);
    // Click-Suppression nach Drag (verhindert versehentliches Link-Öffnen am Drag-Ende)
    root.addEventListener('click', (e) => {
      if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; }
    }, true);
  });

  // IntersectionObserver per container — tracks active slide on swipe
  Object.keys(containers).forEach(k => {
    const root = containers[k];
    const obs = new IntersectionObserver((entries) => {
      if (mode !== k) return;
      entries.forEach(e => {
        if (!e.isIntersecting || e.intersectionRatio <= 0.6) return;
        const list = activeSlides(k);
        const idx = list.indexOf(e.target);
        if (idx !== -1 && idx !== state[k].idx) {
          state[k].idx = idx;
          updateCounter();
          if (history.replaceState) {
            history.replaceState(null, '', `#${k}-${idx + 1}`);
          }
        }
      });
    }, { root: root, threshold: [0.6, 0.85] });
    Array.from(root.querySelectorAll('.slide')).forEach(s => obs.observe(s));
  });

  // Keyboard
  document.addEventListener('keydown', (e) => {
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA')) return;
    if (e.key === 'ArrowRight') { goTo(state[mode].idx + 1, true); e.preventDefault(); }
    if (e.key === 'ArrowLeft')  { goTo(state[mode].idx - 1, true); e.preventDefault(); }
    if (e.key === '1') setMode('acts');
    if (e.key === '2') setMode('events');
    if (e.key === '3') setMode('restaurants');
  });

  // Initial — apply all filters (past events + favorites if active) + sort options
  applyFilters();
  refreshFavCount();
  refreshSortOptions();

  // Deep-link via hash
  const hash = window.location.hash.match(/^#(acts|events|restaurants)-(\d+)$/);
  if (hash) {
    setMode(hash[1]);
    setTimeout(() => goTo(parseInt(hash[2], 10) - 1, false), 30);
  } else {
    refreshBadges();
    refreshPastBar();
    refreshEmpty();
    updateCounter();
  }

  // Hide swipe hint after first interaction
  if (swipeHint) {
    ['touchstart', 'scroll', 'click', 'keydown'].forEach(ev => {
      document.addEventListener(ev, () => { swipeHint.style.display = 'none'; }, { once: true, passive: true });
    });
  }
}
