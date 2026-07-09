// One-shot: rasterize public/icon.svg into the PNG sizes PWAs need.
// Run with: node scripts/make-icons.mjs
import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const svg = await readFile(new URL('../public/icon.svg', import.meta.url));

const targets = [
  ['icon-192.png', 192],
  ['icon-512.png', 512],
  ['apple-touch-icon.png', 180],
];

for (const [name, size] of targets) {
  const out = fileURLToPath(new URL(`../public/${name}`, import.meta.url));
  await sharp(svg, { density: 300 }).resize(size, size).png().toFile(out);
  console.log(`${name} (${size}x${size})`);
}

// Maskable: same art shrunk into the 80% safe zone over the sea gradient
const inner = await sharp(svg, { density: 300 }).resize(410, 410).png().toBuffer();
await sharp({
  create: { width: 512, height: 512, channels: 4, background: '#071232' },
})
  .composite([{ input: inner, gravity: 'centre' }])
  .png()
  .toFile(fileURLToPath(new URL('../public/icon-512-maskable.png', import.meta.url)));
console.log('icon-512-maskable.png (512x512)');
