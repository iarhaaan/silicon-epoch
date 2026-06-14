# Brand Guidelines — Silicon Epoch

Derived from the live site so the kit's assets match the existing theme.

---

## Palette

### Light theme (paper)

| Token      | Name                 | Hex       | OKLCH                   |
| ---------- | -------------------- | --------- | ----------------------- |
| `--paper`  | Paper / background   | `#faf9f6` | `oklch(0.985 0.005 85)` |
| `--cream`  | Cream / surface      | `#f3efe6` | `oklch(0.948 0.012 85)` |
| `--ink`    | Ink / foreground     | `#1c1b19` | `oklch(0.21 0.005 60)`  |
| `--ember`  | Ember / accent       | `#f04e23` | `oklch(0.66 0.205 35)`  |
| `--moss`   | Moss / muted accent  | `#4f6b3e` | `oklch(0.51 0.07 130)`  |
| `--cobalt` | Cobalt / link accent | `#2b4dad` | `oklch(0.42 0.16 265)`  |
| `--border` | Hairline             | `#dcd7c8` | `oklch(0.88 0.018 85)`  |

### Dark theme (ink)

| Token      | Name         | Hex       | OKLCH                  |
| ---------- | ------------ | --------- | ---------------------- |
| `--paper`  | Background   | `#13110f` | `oklch(0.17 0.006 60)` |
| `--cream`  | Surface      | `#1f1c19` | `oklch(0.23 0.008 60)` |
| `--ink`    | Foreground   | `#f5f0e5` | `oklch(0.95 0.012 85)` |
| `--ember`  | Accent       | `#ff6a3d` | `oklch(0.73 0.195 35)` |
| `--moss`   | Muted accent | `#8ea76b` | `oklch(0.7 0.09 130)`  |
| `--cobalt` | Link accent  | `#7a9bff` | `oklch(0.72 0.13 265)` |
| `--border` | Hairline     | `#33302b` | `oklch(0.3 0.01 80)`   |

---

## Typography

| Role             | Family               | Weight   | Style                                                                                     |
| ---------------- | -------------------- | -------- | ----------------------------------------------------------------------------------------- |
| Display headline | **Instrument Serif** | 400      | Roman + italic; italic is the brand voice (the orange "_technology_" on the homepage).    |
| UI / body        | **Inter Tight**      | 300–800  | Tight tracking; 400 body, 600 nav, 800 stat numbers.                                      |
| Eyebrow / mono   | **JetBrains Mono**   | 400, 500 | Uppercase, letter-spacing 0.18em for kicker labels ("A FIELD GUIDE · UPDATED JUNE 2026"). |

Tailwind utilities to use (already in the project):

- Display: `font-display` (Instrument Serif)
- Body: `font-sans` (Inter Tight)
- Mono: `font-mono` (JetBrains Mono)

Never put the display serif at body sizes. Never set Inter Tight italic — use the serif's italic for emphasis instead.

---

## Logo system

Six SVG variants, all in `assets/`:

| File                        | Use case                                                          |
| --------------------------- | ----------------------------------------------------------------- |
| `logo-icon-light.svg`       | Square mark for light backgrounds — favicon, app icon, avatar.    |
| `logo-icon-dark.svg`        | Same, dark theme.                                                 |
| `logo-wordmark-light.svg`   | Type-only mark for light backgrounds (header on a paper surface). |
| `logo-wordmark-dark.svg`    | Same, dark.                                                       |
| `logo-horizontal-light.svg` | Icon + wordmark in a row — the primary nav lockup.                |
| `logo-horizontal-dark.svg`  | Same, dark.                                                       |

Theme-aware usage (Tailwind):

```tsx
<img src={LogoHorizontalLight} alt="Silicon Epoch" className="h-8 block dark:hidden" />
<img src={LogoHorizontalDark}  alt="Silicon Epoch" className="h-8 hidden dark:block" />
```

Clear-space rule: leave one cap-height of empty space around any logo.
Minimum size: icon 24px, horizontal lockup 96px wide.

Never recolor the logo. Never apply drop shadows. The serif "E" with the ember dot is the most recognizable element — don't crop it out.

---

## Iconography

`assets/section-icons/` ships six SVG icons keyed to chapter themes:

| File                 | Chapter                     |
| -------------------- | --------------------------- |
| `icon-compute.svg`   | Compute Core, How AI Works  |
| `icon-labs.svg`      | Frontier Labs (Companies)   |
| `icon-grid.svg`      | Infrastructure & Energy     |
| `icon-timeline.svg`  | History Timeline            |
| `icon-alignment.svg` | Safety, Alignment, Humanity |
| `icon-horizon.svg`   | Next Decade, AGI/ASI        |

All icons are single-color (use `currentColor`), 1.5px stroke, 24×24 viewBox.
Render at 20–28px in nav, 40–56px in section headers.

---

## Imagery / Open Graph

Two raster variants for social shares:

| File                                      | Use                                                                                                        |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `og-image-1200x630-light.png`             | Default OG for routes whose hero is light-themed.                                                          |
| `og-image-1200x630-dark.png`              | Default OG for the homepage and dark-themed routes. Also reused as the GitHub social preview after resize. |
| `github-social-preview-1280x640-dark.png` | GitHub Settings → Social preview.                                                                          |

Replacement images should:

- Use the brand serif italic for the headline.
- Show one of the brand colors as the accent.
- Reserve the bottom-right corner for the wordmark.
- Keep the central 1080×420 area free of important text (some platforms crop).

---

## Voice

- Restrained. The site lets serif type and citation footnotes do the work.
- Quantified. Always a number, a date, or a benchmark.
- Present-tense. "Anthropic ships Fable 5" not "Anthropic has shipped Fable 5".
- Never marketing-speak. Never exclamation marks.

If you generate copy for a new page, match that voice. The SEO copy in
`fixes/_meta-snippets.md` and `fixes/README.md` already does.
