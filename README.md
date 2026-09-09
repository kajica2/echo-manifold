# ECHO · Harmonic Manifold 5.0

A standalone generative audio engine. WebAudio only — no media library, no
audio file, no microphone. The browser generates everything in real time.

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

The repo is wired for Vercel. Push to `main` and Vercel builds + deploys
automatically (assuming the GitHub integration is connected).

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
inlined as static CSS with system fonts, per the no-runtime-CDN constraint
of the parent project (Sainted Word Records / SWR engine).

## License

The audio synthesis, visualizer code, and visual design are released under
the MIT license. The conceptual framing (e.g. "432Hz alignment", "Tesla
3-6-9 vortex") is the original author's creative writing and ships
unchanged.

## Related

- Parent project: [kajica2/sainted-word-records](https://github.com/kajica2/sainted-word-records)
- The ECHO engine also lives in that repo as a variant at
  `/versions/echo-manifold.html`.
