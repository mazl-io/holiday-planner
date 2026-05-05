// Card-Renderer fuer Aktivitaeten und Events.
// Liefert HTML-Strings, die direkt via innerHTML gemountet werden.

function escapeAttr(s) {
  return String(s).replace(/[&<>"']/g, c => (
    { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]
  ));
}

function renderPills(pills = []) {
  return pills.map(p =>
    `<span class="pill ${p.kind || ''}">${p.text}</span>`
  ).join('');
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

export function renderActivityCard(act) {
  const matchClass = act.lo ? 'lo' : '';
  return `
    <article class="slide" data-id="${act.id}">
      <div class="slide-card">
        ${heroOpenTag(act)}
          <span class="cat-pill">${act.catLabel}</span>
          <span class="match-badge ${matchClass}">
            <span class="num">${act.match}</span>
            <span class="label">Match</span>
          </span>
          ${heroBody(act)}
        </div>
        <div class="body-pad">
          <div>
            <div class="title">${act.title}</div>
            <div class="subtitle">${act.subtitle}</div>
          </div>
          <div class="pills">${renderPills(act.pills)}</div>
          <div class="info">${renderInfo(act.info)}</div>
          <p class="desc">${act.desc}</p>
          <a class="link-btn" href="${escapeAttr(act.url)}" target="_blank" rel="noopener">${act.urlLabel}</a>
        </div>
      </div>
    </article>
  `;
}

export function renderEventCard(ev) {
  const dl = ev.dateLabel || {};
  const dataAttrs = `data-id="${ev.id}" data-date="${ev.date}"${ev.dateEnd ? ` data-date-end="${ev.dateEnd}"` : ''}`;
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
          ${heroBody(ev)}
        </div>
        <div class="body-pad">
          <div>
            <div class="title">${ev.title}</div>
            <div class="subtitle">${ev.subtitle}</div>
          </div>
          ${ev.time ? `<div class="time-line"><span class="lbl">Zeit</span> ${ev.time}</div>` : ''}
          <div class="pills">${renderPills(ev.pills)}</div>
          <div class="info">${renderInfo(ev.info)}</div>
          <p class="desc">${ev.desc}</p>
          <a class="link-btn" href="${escapeAttr(ev.url)}" target="_blank" rel="noopener">${ev.urlLabel}</a>
        </div>
      </div>
    </article>
  `;
}
