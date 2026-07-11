// Deep Sea Quiz — questions generated from the creature dataset so they're
// always accurate. Five question types plus a set of hand-written "signature
// fact" questions. buildQuestions() returns a fresh, shuffled set each run.

import { CREATURES } from './data/creatures.js';
import { ZONES, zoneAt } from './ocean.js';

const BEST_KEY = 'itd-quiz-best';

// ——— helpers ———
const rnd = (n) => Math.floor(Math.random() * n);
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = rnd(i + 1);
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
const sample = (arr, n) => shuffle(arr).slice(0, n);
const norm = (s) => s.toLowerCase().replace(/[^a-z]/g, '');

// distractor creatures whose `key` (name/sci) is clearly different from answer
function distractors(pool, answer, n, key) {
  const ans = norm(answer[key]);
  const cands = pool.filter((c) => {
    if (c.id === answer.id) return false;
    const k = norm(c[key]);
    if (k === ans) return false;
    // avoid near-identical names (e.g. two "Deep-sea Cusk…")
    if (k.slice(0, 9) === ans.slice(0, 9)) return false;
    return true;
  });
  return sample(cands, n);
}

// ——— signature-fact questions (clue → the one creature it describes) ———
const SIGNATURE = [
  ['Which animal has the largest eyes of any creature on Earth — each the size of a dinner plate?', 'colossal-squid'],
  ['Which is the deepest-living fish ever filmed?', 'mariana-snailfish'],
  ['Which was the first fish discovered to be fully warm-blooded?', 'opah'],
  ['Which is the longest bony fish, likely behind old "sea serpent" legends?', 'oarfish'],
  ['Which is the biggest fish alive, yet feeds on tiny plankton?', 'whale-shark'],
  ['Which is the heaviest bony fish, shaped like a giant swimming head?', 'ocean-sunfish'],
  ['Which fist-sized deep-sea creature is a single giant cell?', 'xenophyophore'],
  ['Which worm has no mouth or gut and bores into whale bones to feed?', 'zombie-worm'],
  ['Which pale, blind crab farms bacteria on its hairy claws near hot vents?', 'yeti-crab'],
  ['Which fish has a see-through head with glowing green tube-eyes inside?', 'barreleye'],
  ['Which shark shoots its jaws forward like a slingshot to grab prey?', 'goblin-shark'],
  ['Which small shark bites round, cookie-shaped plugs out of whales?', 'cookiecutter-shark'],
  ['Which see-through swimming sea cucumber is nicknamed the "headless chicken monster"?', 'enypniastes'],
  ['Which fish has the largest teeth, for its body size, of any fish in the ocean?', 'fangtooth'],
  ['Which deep-diving whale hunts squid using the loudest clicks of any animal?', 'sperm-whale'],
  ['Which glass sponge is given as a wedding gift in Japan because shrimp pairs live inside it for life?', 'venus-flower-basket'],
  ['Which jelly flashes a spinning "burglar alarm" of blue light when attacked?', 'atolla-jelly'],
  ['Which deep octopus flaps ear-like fins to swim and is the deepest-living octopus known?', 'dumbo-octopus'],
];

const byId = (id) => CREATURES.find((c) => c.id === id);
const zoneName = (c) => zoneAt(c.depth).name;

// ——— question builders ———
function pictureQ(c) {
  const opts = shuffle([c, ...distractors(CREATURES, c, 3, 'name')]);
  return {
    kind: 'picture',
    prompt: 'Which creature is this?',
    sprite: c.svg,
    options: opts.map((o) => o.name),
    correct: opts.findIndex((o) => o.id === c.id),
    explain: c.fact,
  };
}

function zoneQ(c) {
  const zn = zoneName(c);
  const others = ZONES.map((z) => z.name).filter((n) => n !== zn);
  const opts = shuffle([zn, ...sample(others, 3)]);
  return {
    kind: 'zone',
    prompt: `Which ocean zone is home to the ${c.name}?`,
    sprite: null,
    options: opts,
    correct: opts.indexOf(zn),
    explain: `The ${c.name} lives at about ${Math.round(c.depth).toLocaleString('en-US')} m — in the ${zn} zone.`,
  };
}

function sciQ(c) {
  const opts = shuffle([c, ...distractors(CREATURES, c, 3, 'sci')]);
  return {
    kind: 'sci',
    prompt: `What is the scientific name of the ${c.name}?`,
    sprite: null,
    italic: true,
    options: opts.map((o) => o.sci),
    correct: opts.findIndex((o) => o.id === c.id),
    explain: `The ${c.name}’s scientific name is ${c.sci}.`,
  };
}

function depthQ() {
  let pick;
  for (let tries = 0; tries < 30; tries++) {
    pick = sample(CREATURES, 4);
    const ds = pick.map((c) => c.depth).sort((a, b) => a - b);
    if (ds.every((d, i) => i === 0 || d - ds[i - 1] > 350)) break; // well-separated
  }
  const deepest = Math.random() < 0.5;
  const target = pick.reduce((a, b) => (deepest ? (b.depth > a.depth ? b : a) : b.depth < a.depth ? b : a));
  const opts = shuffle(pick);
  return {
    kind: 'depth',
    prompt: `Which of these lives the ${deepest ? 'deepest' : 'shallowest'}?`,
    sprite: null,
    options: opts.map((o) => o.name),
    correct: opts.findIndex((o) => o.id === target.id),
    explain: `The ${target.name} lives at about ${Math.round(target.depth).toLocaleString('en-US')} m — the ${deepest ? 'deepest' : 'shallowest'} of the four.`,
  };
}

function triviaQ([clue, answerId]) {
  const ans = byId(answerId);
  if (!ans) return null;
  const mates = CREATURES.filter((c) => zoneName(c) === zoneName(ans));
  let dis = distractors(mates, ans, 3, 'name');
  if (dis.length < 3) dis = dis.concat(distractors(CREATURES, ans, 3 - dis.length, 'name'));
  const opts = shuffle([ans, ...dis]);
  return {
    kind: 'trivia',
    prompt: clue,
    sprite: null,
    options: opts.map((o) => o.name),
    correct: opts.findIndex((o) => o.id === ans.id),
    explain: ans.fact,
  };
}

// ——— assemble a mixed set ———
export function buildQuestions(count = 50) {
  const creatures = shuffle(CREATURES);
  const targets = { picture: 14, zone: 10, sci: 8, depth: 6, trivia: 12 };

  const picture = creatures.slice(0, targets.picture).map(pictureQ);
  const zone = creatures.slice(14, 14 + targets.zone).map(zoneQ);
  const sci = creatures.slice(30, 30 + targets.sci).map(sciQ);
  const depth = Array.from({ length: targets.depth }, depthQ);
  const trivia = sample(SIGNATURE, targets.trivia).map(triviaQ).filter(Boolean);

  const all = shuffle([...picture, ...zone, ...sci, ...depth, ...trivia]);
  // avoid two same-kind questions back to back where possible
  for (let i = 1; i < all.length; i++) {
    if (all[i].kind === all[i - 1].kind) {
      const j = all.findIndex((q, k) => k > i && q.kind !== all[i - 1].kind);
      if (j > -1) [all[i], all[j]] = [all[j], all[i]];
    }
  }
  return all.slice(0, count);
}

export const getBest = () => Number(localStorage.getItem(BEST_KEY) || 0);
export function saveBest(score) {
  const prev = getBest();
  if (score > prev) {
    localStorage.setItem(BEST_KEY, String(score));
    return true;
  }
  return false;
}

// ——— rank titles by score fraction ———
function rank(frac) {
  if (frac >= 0.92) return { title: 'Abyssal Master', note: 'The deep holds no secrets from you.' };
  if (frac >= 0.78) return { title: 'Deep Diver', note: 'Serious pressure, serious knowledge.' };
  if (frac >= 0.6) return { title: 'Twilight Explorer', note: 'You know your way down there.' };
  if (frac >= 0.4) return { title: 'Snorkeler', note: 'A good start — keep exploring!' };
  return { title: 'Beachcomber', note: 'Scroll the ocean and try again!' };
}

// ——— UI ———
export function initQuiz() {
  const total = 50;

  const toggle = document.createElement('button');
  toggle.id = 'quiz-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-label', 'Take the creature quiz');
  toggle.innerHTML = `
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <path d="M9 9a3 3 0 1 1 4 2.8c-.9.4-1 1-1 1.7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="12" cy="17.5" r="1.4" fill="currentColor"/>
    </svg>
    <span>QUIZ</span>`;
  document.body.appendChild(toggle);

  const overlay = document.createElement('div');
  overlay.id = 'quiz';
  overlay.hidden = true;
  overlay.innerHTML = `
    <div class="quiz-panel" role="dialog" aria-modal="true" aria-label="Creature quiz">
      <button class="quiz-close" type="button" aria-label="Close quiz">&times;</button>
      <div class="quiz-body"></div>
    </div>`;
  document.body.appendChild(overlay);

  const body = overlay.querySelector('.quiz-body');
  let questions = [];
  let index = 0;
  let score = 0;
  let answered = false;
  let lastFocused = null;

  function open() {
    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => overlay.classList.add('open'));
    renderIntro();
  }
  function close() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    const done = () => {
      overlay.hidden = true;
      overlay.removeEventListener('transitionend', done);
    };
    overlay.addEventListener('transitionend', done);
    if (lastFocused) lastFocused.focus();
  }

  function renderIntro() {
    const best = getBest();
    body.className = 'quiz-body quiz-view-intro';
    body.innerHTML = `
      <div class="quiz-intro">
        <div class="quiz-badge">
          <svg viewBox="0 0 48 48" width="56" height="56" aria-hidden="true">
            <circle cx="24" cy="24" r="21" fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.4"/>
            <path d="M18 19a6 6 0 1 1 8 5.6c-1.8.8-2 2-2 3.4" fill="none" stroke="currentColor" stroke-width="3.4" stroke-linecap="round"/>
            <circle cx="24" cy="34" r="2.6" fill="currentColor"/>
          </svg>
        </div>
        <span class="quiz-kicker">Deep Sea Challenge</span>
        <h2>Creature Quiz</h2>
        <p class="quiz-lead">${total} questions drawn from all 100 creatures — pictures, depths, zones and jaw-dropping facts. How deep does your knowledge go?</p>
        ${best ? `<p class="quiz-best">Your best: <strong>${best} / ${total}</strong></p>` : ''}
        <button class="quiz-start" type="button">Start the dive</button>
      </div>`;
    body.querySelector('.quiz-start').addEventListener('click', start);
  }

  function start() {
    questions = buildQuestions(total);
    index = 0;
    score = 0;
    renderQuestion();
  }

  function renderQuestion() {
    answered = false;
    const q = questions[index];
    const pct = Math.round((index / questions.length) * 100);
    body.className = 'quiz-body quiz-view-question';
    body.innerHTML = `
      <div class="quiz-top">
        <div class="quiz-bar"><span style="width:${pct}%"></span></div>
        <div class="quiz-meta">
          <span>Question ${index + 1} / ${questions.length}</span>
          <span class="quiz-score">Score ${score}</span>
        </div>
      </div>
      ${q.sprite ? `<div class="quiz-stage"><div class="quiz-sprite">${q.sprite}</div></div>` : ''}
      <h3 class="quiz-prompt">${q.prompt}</h3>
      <div class="quiz-options ${q.italic ? 'is-sci' : ''}">
        ${q.options.map((o, i) => `<button class="quiz-opt" type="button" data-i="${i}">${o}</button>`).join('')}
      </div>
      <div class="quiz-feedback" hidden></div>`;
    body.querySelectorAll('.quiz-opt').forEach((btn) =>
      btn.addEventListener('click', () => choose(Number(btn.dataset.i)))
    );
  }

  function choose(i) {
    if (answered) return;
    answered = true;
    const q = questions[index];
    const opts = body.querySelectorAll('.quiz-opt');
    const correct = i === q.correct;
    if (correct) score++;
    opts.forEach((btn, k) => {
      btn.disabled = true;
      if (k === q.correct) btn.classList.add('is-correct');
      else if (k === i) btn.classList.add('is-wrong');
    });
    const fb = body.querySelector('.quiz-feedback');
    const last = index === questions.length - 1;
    fb.hidden = false;
    fb.innerHTML = `
      <p class="quiz-verdict ${correct ? 'ok' : 'no'}">${correct ? 'Correct!' : 'Not quite'}</p>
      <p class="quiz-explain">${q.explain}</p>
      <button class="quiz-next" type="button">${last ? 'See results' : 'Next question'}</button>`;
    body.querySelector('.quiz-score').textContent = `Score ${score}`;
    fb.querySelector('.quiz-next').addEventListener('click', next);
    fb.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  function next() {
    index++;
    if (index >= questions.length) renderResult();
    else renderQuestion();
  }

  function renderResult() {
    const frac = score / questions.length;
    const r = rank(frac);
    const isBest = saveBest(score);
    const pct = Math.round(frac * 100);
    body.className = 'quiz-body quiz-view-result';
    body.innerHTML = `
      <div class="quiz-result">
        <div class="quiz-ring" style="--pct:${pct}">
          <div class="quiz-ring-inner"><strong>${score}</strong><span>/ ${questions.length}</span></div>
        </div>
        <span class="quiz-kicker">${isBest ? 'New personal best!' : `Best: ${getBest()} / ${questions.length}`}</span>
        <h2>${r.title}</h2>
        <p class="quiz-lead">${r.note}</p>
        <div class="quiz-actions">
          <button class="quiz-restart" type="button">Play again</button>
          <button class="quiz-exit" type="button">Back to the ocean</button>
        </div>
      </div>`;
    body.querySelector('.quiz-restart').addEventListener('click', start);
    body.querySelector('.quiz-exit').addEventListener('click', close);
  }

  toggle.addEventListener('click', open);
  overlay.querySelector('.quiz-close').addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) close();
  });
}
