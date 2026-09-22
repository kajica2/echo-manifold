# ECHO · Harmonic Manifold 5.0

A standalone generative audio engine. WebAudio only — no media library, no
audio file, no microphone. The browser generates everything in real time.

Designed **mobile-first**: the control deck is a floating glass island, the
macro field (all 5 sliders + global tune) lives in a collapsible bottom dock
on phones, and the layout stacks cleanly from 320px up to desktop.

## What it does

- **30 formulas** across 9 sections (Spacetime, Cosmic Scale, Genesis,
  Quantum Field, Tesla Manifold, Vortex Ecology, Fundamental Flux, Harmonic
  Laws, The Omega)
- **5 generative modes** layered on top of any active formula:
  - **∞ Ambient (Eno)** — asynchronous drifting cloud layers
  - **◴ Euclidean** — geometric polyrhythms (Bjorklund algorithm)
  - **@ Chaos** — fluid melodies driven by the Lorenz attractor
  - **Φ Phi** — recursive timing based on the golden ratio
  - **▦ Cellular** — evolving arpeggios using Rule 30 automata
- **Per-frame visualizer** that maps the active formula to a Canvas 2D
  shape (black hole, DNA helix, torus, cymatics, chaos attractor, etc.)

## Design system

- **Self-hosted type** — Geist Variable + Geist Mono (OFL) served from
  `public/fonts/`, no runtime CDN (per the no-runtime-CDN constraint).
- **Ethereal glass** language: OLED blacks, hairline borders, double-bezel
  (nested shell + core) cards, ambient orb field + film grain.
- **Motion** — custom cubic-bezier springs, staggered entry reveals,
  magnetic button physics; `prefers-reduced-motion` disables drift and
  freezes the visualizer.
- **Mobile-first layout** — floating island header (detached, not
  edge-to-edge), mobile-only **Studio dock** (macro sliders + tune,
  collapsible, safe-area aware), horizontal section chips, `100dvh` shell.
- **Light / dark themes** — `data-theme` token system; toggle in the island
  header (sun/moon), persisted to `localStorage`, honors system preference
  when unset, no theme-flash (inline head bootstrap). The visualizer stage
  and waveform strip stay dark in both themes — glow synthesis doesn't
  survive on white — framed as a deliberate "dark portal."
- **Accessibility** — real `<label>`s on all sliders, keyboard-operable
  formula cards, labeled icon buttons, focus-managed dialog, live regions
  for title/description, contrast-checked tokens in both themes.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5174
```

## Build for production

```bash
npm run build    # outputs dist/
npm run preview  # http://localhost:4173
```

## Deploy

Deployed to **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`).
Push to `main` and the site rebuilds + publishes automatically:

<https://kajica2.github.io/echo-manifold/>

## Controls

| Key | Action |
|---|---|
| `←` / `→` | Previous / next formula |
| `↑` / `↓` | Global tune (semitones) |
| `Space` / `Enter` | Engage / Null |

| Slider | Effect |
|---|---|
| Thermal | Chaos & jitter |
| Polarity | Stereo width & hue shift |
| Resonance | Filter Q & bloom |
| Density | Harmonics & particle count |
| Master | Output gain |
| Gen mode (top-right pill) | Cycles through Off → Eno → Euclid → Chaos → Phi → Cell |

## Credits

Verbatim port of a Gemini Canvas artifact titled "Harmonic Manifold 5.0
(Definitive)" / "ECHO: Aetheric Manifold — Quantum Resonance Engine v5.0".

Math + audio synthesis + visualizer branches ported as-is. The CDN
dependencies in the original (Tailwind script + Google Fonts) were
inlined as static CSS with self-hosted fonts (Geist / Geist Mono), per the
no-runtime-CDN constraint of the parent project (Sainted Word Records / SWR
engine).

## License

The audio synthesis, visualizer code, and visual design are released under
the MIT license. The conceptual framing (e.g. "432Hz alignment", "Tesla
3-6-9 vortex") is the original author's creative writing and ships
unchanged.

## Related

- Parent project: [kajica2/sainted-word-records](https://github.com/kajica2/sainted-word-records)
- The ECHO engine also lives in that repo as a variant at
  `/versions/echo-manifold.html`.
