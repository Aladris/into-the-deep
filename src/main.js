import './style.css';
import {
  MAX_DEPTH,
  PX_PER_M,
  ZONES,
  zoneAt,
  waterColorAt,
  lightFractionAt,
  lightLabelAt,
  pressureAt,
} from './ocean.js';
import { CREATURES } from './data/creatures.js';
import { initQuiz } from './quiz.js';

// Order the whole roster by depth and assign strictly alternating sides, so
// the dataset can list species in any order and neighbouring cards never land
// on the same side. Both the scroll world and the Dive Line render from this.
const ROSTER = [...CREATURES].sort((a, b) => a.depth - b.depth);
ROSTER.forEach((c, i) => {
  c.side = i % 2 === 0 ? 'right' : 'left';
});

const ocean = document.getElementById('ocean');
const root = document.documentElement;

const hud = {
  depth: document.getElementById('hud-depth'),
  zone: document.getElementById('hud-zone'),
  zoneSci: document.getElementById('hud-zone-sci'),
  light: document.getElementById('hud-light'),
  pressure: document.getElementById('hud-pressure'),
};

// ——— Build the world ———
// scrollY maps directly to depth: depth = scrollY / PX_PER_M.
// Anything anchored at depth d sits at (d · PX_PER_M + 50vh) in the document,
// so it crosses the centre of the screen exactly when the HUD reads d.

const worldPx = MAX_DEPTH * PX_PER_M;
ocean.style.height = `calc(${worldPx}px + 100svh)`;

function depthToTop(d) {
  return `calc(${Math.round(d * PX_PER_M)}px + 50svh)`;
}

// Depth ruler along the right edge: tick gradient + labels every 500 m
const ruler = document.createElement('div');
ruler.id = 'ruler';
ruler.setAttribute('aria-hidden', 'true');
ruler.style.top = '50svh';
ruler.style.height = `${worldPx}px`;
ocean.appendChild(ruler);

for (let d = 500; d <= MAX_DEPTH; d += 500) {
  const label = document.createElement('span');
  label.className = 'ruler-label';
  label.textContent = `${d.toLocaleString('en-US')} m`;
  label.style.top = depthToTop(d);
  ocean.appendChild(label);
}

// Zone boundary markers
for (const zone of ZONES.slice(1)) {
  const marker = document.createElement('div');
  marker.className = 'zone-marker';
  marker.style.top = depthToTop(zone.from);
  marker.innerHTML = `
    <div class="zone-marker-text">
      ${zone.name} Zone · ${zone.from.toLocaleString('en-US')} m
      <small>${zone.sci}</small>
    </div>`;
  ocean.appendChild(marker);
}

// Creatures
const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { rootMargin: '0px 0px -12% 0px' }
);

for (const c of ROSTER) {
  const el = document.createElement('article');
  el.className = c.depth >= 1000 ? 'creature deep' : 'creature';
  el.dataset.side = c.side;
  el.dataset.id = c.id;
  el.style.top = depthToTop(c.depth);
  el.innerHTML = `
    <button class="creature-tap" type="button" aria-label="Open details for ${c.name}">
      <div class="creature-sprite" style="width:${c.size}px">${c.svg}</div>
    </button>
    <div class="creature-label">
      <h3>${c.name}</h3>
      <em>${c.sci}</em>
      <span class="creature-range">${c.range}</span>
    </div>`;
  el.querySelector('.creature-tap').addEventListener('click', () => openDetail(c));
  ocean.appendChild(el);
  revealObserver.observe(el);
}

// ——— Full-screen detail view ———

const detail = document.createElement('div');
detail.id = 'detail';
detail.hidden = true;
detail.innerHTML = `
  <div class="detail-scrim" data-close></div>
  <div class="detail-card" role="dialog" aria-modal="true" aria-labelledby="detail-name">
    <button class="detail-close" type="button" aria-label="Close" data-close>&times;</button>
    <div class="detail-stage"><div class="detail-sprite"></div></div>
    <div class="detail-body">
      <span class="detail-zone" id="detail-zone"></span>
      <h2 id="detail-name"></h2>
      <em class="detail-sci" id="detail-sci"></em>
      <dl class="detail-stats">
        <div><dt>Depth range</dt><dd id="detail-range"></dd></div>
        <div><dt>Zone</dt><dd id="detail-zonefull"></dd></div>
      </dl>
      <p class="detail-fact" id="detail-fact"></p>
      <p class="detail-hint">Tap anywhere or swipe down to return to the dive</p>
    </div>
  </div>`;
document.body.appendChild(detail);

const detailEls = {
  sprite: detail.querySelector('.detail-sprite'),
  zone: detail.querySelector('#detail-zone'),
  zonefull: detail.querySelector('#detail-zonefull'),
  name: detail.querySelector('#detail-name'),
  sci: detail.querySelector('#detail-sci'),
  range: detail.querySelector('#detail-range'),
  fact: detail.querySelector('#detail-fact'),
  card: detail.querySelector('.detail-card'),
};

let lastFocused = null;

function openDetail(c) {
  const z = zoneAt(c.depth);
  detailEls.sprite.innerHTML = c.svg;
  detailEls.sprite.style.maxWidth = `${Math.min(c.size * 1.7, 260)}px`;
  detailEls.zone.textContent = `${z.name} Zone`;
  detailEls.zonefull.textContent = `${z.name} · ${z.sci}`;
  detailEls.name.textContent = c.name;
  detailEls.sci.textContent = c.sci;
  detailEls.range.textContent = c.range;
  detailEls.fact.textContent = c.fact;
  detail.dataset.zone = z.name.toLowerCase();

  lastFocused = document.activeElement;
  detail.hidden = false;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => detail.classList.add('open'));
  detail.querySelector('.detail-close').focus();
}

function closeDetail() {
  detail.classList.remove('open');
  document.body.style.overflow = '';
  const done = () => {
    detail.hidden = true;
    detail.removeEventListener('transitionend', done);
  };
  detail.addEventListener('transitionend', done);
  if (lastFocused) lastFocused.focus();
}

detail.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-close')) closeDetail();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !detail.hidden) closeDetail();
});

// Swipe-down-to-dismiss on the card
let touchStartY = null;
detailEls.card.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
detailEls.card.addEventListener('touchmove', (e) => {
  if (touchStartY === null) return;
  const dy = e.touches[0].clientY - touchStartY;
  if (dy > 0) detailEls.card.style.transform = `translateY(${Math.min(dy, 200)}px)`;
}, { passive: true });
detailEls.card.addEventListener('touchend', (e) => {
  const dy = e.changedTouches[0].clientY - (touchStartY ?? 0);
  detailEls.card.style.transform = '';
  if (dy > 90) closeDetail();
  touchStartY = null;
}, { passive: true });

// ——— Dive line: a rope of every creature you can tap to jump to ———

const diveToggle = document.createElement('button');
diveToggle.id = 'divemap-toggle';
diveToggle.type = 'button';
diveToggle.setAttribute('aria-label', 'Open the dive line to jump to a creature');
diveToggle.innerHTML = `
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path d="M12 2 V22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    <circle cx="7" cy="6" r="2.4" fill="currentColor"/>
    <circle cx="17" cy="11" r="2.4" fill="currentColor"/>
    <circle cx="7" cy="16" r="2.4" fill="currentColor"/>
  </svg>
  <span>DIVE<br/>LINE</span>`;
document.body.appendChild(diveToggle);

const divemap = document.createElement('div');
divemap.id = 'divemap';
divemap.hidden = true;
divemap.innerHTML = `
  <div class="divemap-scrim" data-close></div>
  <aside class="divemap-panel" role="dialog" aria-modal="true" aria-label="Dive line">
    <header class="divemap-head">
      <div>
        <span class="divemap-kicker">Dive Line</span>
        <h2>Jump to a creature</h2>
      </div>
      <button class="divemap-close" type="button" data-close aria-label="Close">&times;</button>
    </header>
    <div class="divemap-rope"><div class="divemap-track"></div></div>
  </aside>`;
document.body.appendChild(divemap);

const track = divemap.querySelector('.divemap-track');
let mapZone = null;
for (const c of ROSTER) {
  const z = zoneAt(c.depth);
  if (z.name !== mapZone) {
    mapZone = z.name;
    const band = document.createElement('div');
    band.className = 'divemap-zone';
    band.dataset.zone = z.name.toLowerCase();
    const to = z.to >= 11000 ? '10,935' : z.to.toLocaleString('en-US');
    band.innerHTML = `<span>${z.name} · ${z.from.toLocaleString('en-US')}–${to} m</span>`;
    track.appendChild(band);
  }
  const item = document.createElement('button');
  item.type = 'button';
  item.className = 'divemap-item';
  item.dataset.side = c.side;
  item.setAttribute('aria-label', `Jump to ${c.name} at ${Math.round(c.depth)} metres`);
  item.innerHTML = `
    <span class="dm-chip">
      <span class="dm-node">${c.svg}</span>
      <span class="dm-label"><b>${c.name}</b><i>${Math.round(c.depth).toLocaleString('en-US')} m</i></span>
    </span>`;
  item.addEventListener('click', () => jumpTo(c));
  track.appendChild(item);
}

function openMap() {
  divemap.hidden = false;
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => divemap.classList.add('open'));
}
function closeMap() {
  divemap.classList.remove('open');
  document.body.style.overflow = '';
  const done = () => {
    divemap.hidden = true;
    divemap.removeEventListener('transitionend', done);
  };
  divemap.addEventListener('transitionend', done);
}
function jumpTo(c) {
  closeMap();
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: Math.round(c.depth * PX_PER_M), behavior: reduce ? 'auto' : 'smooth' });
}

diveToggle.addEventListener('click', openMap);
divemap.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-close')) closeMap();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !divemap.hidden) closeMap();
});

// Trench floor
const floor = document.createElement('div');
floor.id = 'floor';
floor.innerHTML = `
  <div class="floor-line">Challenger Deep · bottom of the Mariana Trench</div>
  <span class="floor-depth">10,935 m</span>`;
ocean.appendChild(floor);

// ——— Zone transition callout ———

const zoneToast = document.getElementById('zone-toast');
const ztTitle = zoneToast.querySelector('.zt-title');
const ztSub = zoneToast.querySelector('.zt-sub');
let toastTimer = null;

function announceZone(zone) {
  ztTitle.textContent = `The ${zone.name} Zone`;
  ztSub.textContent = `${zone.sci} · ${zone.light}`;
  zoneToast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => zoneToast.classList.remove('show'), 2400);
}

// ——— Scroll-driven state ———
// One rAF-gated handler: no per-frame loop, no layout reads beyond scrollY.

const biolumLayers = [
  { el: document.querySelector('.biolum-a'), speed: 0.05, tile: 360 },
  { el: document.querySelector('.biolum-b'), speed: 0.11, tile: 440 },
  { el: document.querySelector('.biolum-c'), speed: 0.19, tile: 600 },
];

let ticking = false;
let lastZone = null;
let lastDepthShown = -1;

function update() {
  ticking = false;

  const y = Math.max(0, Math.min(window.scrollY, worldPx));
  const depth = y / PX_PER_M;
  const viewportMetres = window.innerHeight / PX_PER_M;

  // Water colour: sample at the top and bottom of what's on screen
  root.style.setProperty('--sea-hi', waterColorAt(depth - viewportMetres / 2));
  root.style.setProperty('--sea-lo', waterColorAt(depth + viewportMetres / 2));
  root.style.setProperty('--sunlight', lightFractionAt(depth).toFixed(4));

  // Bioluminescence fades in between 900 m and 1,300 m
  const biolum = Math.max(0, Math.min(1, (depth - 900) / 400));
  root.style.setProperty('--biolum', biolum.toFixed(3));

  // Specks drift upward at different speeds as you sink (parallax)
  if (biolum > 0) {
    for (const layer of biolumLayers) {
      layer.el.style.transform = `translate3d(0, ${-((y * layer.speed) % layer.tile)}px, 0)`;
    }
  }

  const shown = Math.round(depth);
  if (shown !== lastDepthShown) {
    lastDepthShown = shown;
    hud.depth.textContent = shown.toLocaleString('en-US');
    hud.light.textContent = lightLabelAt(depth);
    hud.pressure.textContent = pressureAt(depth).toLocaleString('en-US');
  }

  const zone = zoneAt(depth);
  if (zone !== lastZone) {
    const isFirst = lastZone === null;
    lastZone = zone;
    hud.zone.textContent = zone.name;
    hud.zoneSci.textContent = zone.sci;
    if (!isFirst) announceZone(zone);
  }
}

window.addEventListener(
  'scroll',
  () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  },
  { passive: true }
);

window.addEventListener('resize', update, { passive: true });

update();

// Gamification: the creature quiz
initQuiz();

// Offline support — only in the built app, so the dev server keeps HMR
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`);
  });
}
