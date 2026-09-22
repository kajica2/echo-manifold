// One-shot icon generator: rasterizes favicon.svg into PWA icon sizes.
// Run with: node scripts/build-icons.mjs
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const svgPath = resolve(root, 'public/favicon.svg');
const outDir = resolve(root, 'public');
mkdirSync(outDir, { recursive: true });

const svg = readFileSync(svgPath);
const sizes = [
    { file: 'icon-192.png', size: 192, purpose: 'Standard 192×192 PWA icon' },
    { file: 'icon-512.png', size: 512, purpose: 'Standard 512×512 PWA icon' },
    { file: 'icon-maskable-512.png', size: 512, padding: true, purpose: 'Maskable 512×512 (safe zone)' },
    { file: 'apple-touch-icon.png', size: 180, purpose: 'iOS home screen' }
];

for (const s of sizes) {
    const out = resolve(outDir, s.file);
    let pipeline = sharp(svg, { density: 384 });
    if (s.padding) {
        // Pad 12.5% on each side and place the icon centered inside a solid #05050a background
        const inner = Math.round(s.size * 0.75);
        const pad = Math.round((s.size - inner) / 2);
        const rendered = await sharp(svg, { density: 384 }).resize(inner, inner).png().toBuffer();
        await sharp({
            create: { width: s.size, height: s.size, channels: 4, background: { r: 5, g: 5, b: 10, alpha: 1 } }
        }).composite([{ input: rendered, gravity: 'center' }]).png().toFile(out);
    } else {
        await pipeline.resize(s.size, s.size).png().toFile(out);
    }
    console.log('  wrote', s.file, `(${s.size}×${s.size})`, '—', s.purpose);
}
console.log('icons built.');
