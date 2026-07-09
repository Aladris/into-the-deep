// The scientific backbone: zones, water color by depth, light physics.

export const MAX_DEPTH = 10935; // metres — floor of the Mariana Trench (Challenger Deep)
export const PX_PER_M = 5;      // scroll scale: 5 px of page per metre of ocean

export const ZONES = [
  { name: 'Sunlight', sci: 'Epipelagic',    from: 0,    to: 200,   light: 'Full sunlight' },
  { name: 'Twilight', sci: 'Mesopelagic',   from: 200,  to: 1000,  light: 'Dim blue light' },
  { name: 'Midnight', sci: 'Bathypelagic',  from: 1000, to: 4000,  light: 'Bioluminescence only' },
  { name: 'Abyssal',  sci: 'Abyssopelagic', from: 4000, to: 6000,  light: 'Total darkness' },
  { name: 'Hadal',    sci: 'Hadalpelagic',  from: 6000, to: 11000, light: 'Total darkness' },
];

export function zoneAt(depth) {
  return ZONES.find((z) => depth < z.to) ?? ZONES[ZONES.length - 1];
}

// Water colour stops [depth, r, g, b] — interpolated continuously between them.
const WATER_STOPS = [
  [0,     56, 172, 216],
  [80,    24, 126, 184],
  [200,   10,  82, 142],
  [450,    9,  50, 104],
  [700,    9,  33,  76],
  [1000,   7,  18,  50],
  [1600,   5,  11,  34],
  [2500,   4,   7,  24],
  [4000,   2,   4,  14],
  [6000,   1,   2,   8],
  [8500,   0,   1,   4],
  [11000,  0,   0,   1],
];

export function waterColorAt(depth) {
  const d = Math.max(0, Math.min(MAX_DEPTH, depth));
  let i = 1;
  while (i < WATER_STOPS.length - 1 && WATER_STOPS[i][0] < d) i++;
  const [d0, r0, g0, b0] = WATER_STOPS[i - 1];
  const [d1, r1, g1, b1] = WATER_STOPS[i];
  const t = d1 === d0 ? 0 : (d - d0) / (d1 - d0);
  const lerp = (a, b) => Math.round(a + (b - a) * t);
  return `rgb(${lerp(r0, r1)}, ${lerp(g0, g1)}, ${lerp(b0, b1)})`;
}

// Sunlight decays exponentially: ~1% of surface light remains at 200 m.
const K = Math.log(100) / 200;

export function lightFractionAt(depth) {
  return Math.exp(-K * Math.max(0, depth)); // 1 at surface → 0 in the deep
}

export function lightLabelAt(depth) {
  const pct = lightFractionAt(depth) * 100;
  if (depth >= 1000) return '0%';
  if (pct >= 1) return `${Math.round(pct)}%`;
  if (pct >= 0.01) return `${pct.toFixed(2)}%`;
  if (pct >= 0.0001) return `${pct.toFixed(4)}%`;
  return '<0.0001%';
}

// Pressure adds roughly 1 atmosphere every 10 m of seawater.
export function pressureAt(depth) {
  return Math.round(1 + depth / 10);
}
