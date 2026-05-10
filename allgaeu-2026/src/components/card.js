// Card-Renderer fuer Aktivitaeten und Events.
// Liefert HTML-Strings, die direkt via innerHTML gemountet werden.

function escapeAttr(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]
  ));
}

function renderPills(pills = [], mapsQuery = null) {
  const mapsUrl = mapsQuery
    ? `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery)}`
    : null;
  return pills.map(p => {
    if (p.kind === 'dist' && mapsUrl) {
      return `<a class="pill dist maps-link" href="${escapeAttr(mapsUrl)}" target="_blank" rel="noopener">${p.text}</a>`;
    }
    return `<span class="pill ${p.kind || ''}">${p.text}</span>`;
  }).join('');
}

function renderRatingPill(rating) {
  if (rating == null) {
    return `<span class="pill rating-none" title="Keine Google-Bewertung verfügbar">★ –</span>`;
  }
  return `<span class="pill rating" title="Google-Bewertung">★ ${rating.toFixed(1)}</span>`;
}

function renderInfo(info = []) {
  return info.map(i =>
    `<div class="row"><span class="k">${i.k}</span><span class="v ${i.state || ''}">${i.v}</span></div>`
  ).join('');
}

function heroOpenTag(item) {
  if (item.image) {
    return `<div class="hero real" style="background-image:url('${escapeAttr(item.image)}')">`;
  }
  return `<div class="hero stylized cat-${item.cat}">`;
}

function heroBody(item) {
  if (item.image) return '';
  return `
    <span class="emoji" aria-hidden="true">${item.emoji}</span>
    <span class="label">${item.heroLabel}</span>
  `;
}

// Hilfsfunktionen fuer Sortier-Daten — werden als data-Attribute in jede slide geschrieben.
function distMinFrom(item) {
  const p = (item.pills || []).find(p => p.kind === 'dist');
  if (!p) return 9999;
  const m = String(p.text).match(/(\d+)\s*min/);
  return m ? parseInt(m[1], 10) : 9999;
}
function priceLevelFrom(item) {
  const p = (item.pills || []).find(p => p.kind === 'price');
  if (!p) return 9;
  const m = String(p.text).match(/€+/);
  return m ? m[0].length : 9;
}

function renderFavBtn(id) {
  return `<button class="fav-btn" type="button" data-fav-toggle="${id}" aria-label="Als Favorit markieren" aria-pressed="false">
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>
  </button>`;
}

export function renderActivityCard(act) {
  const matchClass = act.lo ? 'lo' : '';
  const sortAttrs = `data-sort-match="${act.match || 0}" data-sort-rating="${act.googleRating ?? 0}" data-sort-dist="${distMinFrom(act)}"`;
  return `
    <article class="slide" data-id="${act.id}" ${sortAttrs}>
      <div class="slide-card">
        ${heroOpenTag(act)}
          <span class="cat-pill">${act.catLabel}</span>
          <span class="match-badge ${matchClass}">
            <span class="num">${act.match}</span>
            <span class="label">Match</span>
          </span>
          ${renderFavBtn(act.id)}
          ${heroBody(act)}
        </div>
        <div class="body-pad">
          <div>
            <div class="title">${act.title}</div>
            <div class="subtitle">${act.subtitle}</div>
          </div>
          <div class="pills">${renderRatingPill(act.googleRating)}${renderPills(act.pills, act.mapsQuery)}</div>
          <div class="info">${renderInfo(act.info)}</div>
          <p class="desc">${act.desc}</p>
          <a class="link-btn" href="${escapeAttr(act.url)}" target="_blank" rel="noopener">${act.urlLabel}</a>
        </div>
      </div>
    </article>
  `;
}

export function renderRestaurantCard(r) {
  // Restaurants nutzen statt Match-Score eine Rating-Badge mit den Sternen.
  const ratingNum = r.googleRating != null ? r.googleRating.toFixed(1) : '–';
  const sortAttrs = `data-sort-rating="${r.googleRating ?? 0}" data-sort-dist="${distMinFrom(r)}" data-sort-price="${priceLevelFrom(r)}"`;
  return `
    <article class="slide" data-id="${r.id}" ${sortAttrs}>
      <div class="slide-card">
        ${heroOpenTag(r)}
          <span class="cat-pill">${r.catLabel}</span>
          <span class="match-badge rating-badge">
            <span class="num">${ratingNum}</span>
            <span class="label">Google</span>
          </span>
          ${renderFavBtn(r.id)}
          ${heroBody(r)}
        </div>
        <div class="body-pad">
          <div>
            <div class="title">${r.title}</div>
            <div class="subtitle">${r.subtitle}</div>
          </div>
          <div class="pills">${renderPills(r.pills, r.mapsQuery)}</div>
          <div class="info">${renderInfo(r.info)}</div>
          <p class="desc">${r.desc}</p>
          ${r.url ? `<a class="link-btn" href="${escapeAttr(r.url)}" target="_blank" rel="noopener">${r.urlLabel || 'Website'}</a>` : ''}
        </div>
      </div>
    </article>
  `;
}

export function renderEventCard(ev) {
  const dl = ev.dateLabel || {};
  const sortAttrs = `data-sort-date="${ev.date}" data-sort-rating="${ev.googleRating ?? 0}" data-sort-dist="${distMinFrom(ev)}"`;
  const dataAttrs = `data-id="${ev.id}" data-date="${ev.date}"${ev.dateEnd ? ` data-date-end="${ev.dateEnd}"` : ''} ${sortAttrs}`;
  return `
    <article class="slide" ${dataAttrs}>
      <div class="slide-card">
        ${heroOpenTag(ev)}
          <span class="cat-pill">${ev.catLabel}</span>
          <span class="date-stamp">
            <span class="month">${dl.month || ''}</span>
            <span class="day">${dl.day != null ? dl.day : ''}</span>
            <span class="dow">${dl.dow || ''}</span>
          </span>
          ${renderFavBtn(ev.id)}
          ${heroBody(ev)}
        </div>
        <div class="body-pad">
          <div>
            <div class="title">${ev.title}</div>
            <div class="subtitle">${ev.subtitle}</div>
          </div>
          ${ev.time ? `<div class="time-line"><span class="lbl">Zeit</span> ${ev.time}</div>` : ''}
          <div class="pills">${renderRatingPill(ev.googleRating)}${renderPills(ev.pills, ev.mapsQuery)}</div>
          <div class="info">${renderInfo(ev.info)}</div>
          <p class="desc">${ev.desc}</p>
          <a class="link-btn" href="${escapeAttr(ev.url)}" target="_blank" rel="noopener">${ev.urlLabel}</a>
        </div>
      </div>
    </article>
  `;
}
