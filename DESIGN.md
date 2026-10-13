# DESIGN.md — abigaildev.my.id Portfolio Redesign

| | |
|---|---|
| **Owner** | Benedictus Abigail Triwiyatno |
| **Status** | Draft v1.0 |
| **Last updated** | 2026-10-13 |
| **Scope** | Visual + motion redesign of the existing portfolio. **No section or feature is removed.** |
| **References** | Framer portfolio templates (layout/structure), cuberto.com (motion feel) |

---

## 1. Overview

### 1.1 Problem
The current site is functionally complete but visually reads as a generic template ("AI slop"): default-looking cards, uniform spacing, no distinctive typography, and almost no motion identity.

### 1.2 Goal
Give the site a distinctive, editorial identity and a smooth, premium motion language, so a prospective client perceives craft within the first 3 seconds, **while keeping every existing section, feature, and conversion path intact.**

### 1.3 Primary audience & conversion
- **Audience:** SMEs, startups, and agencies in Indonesia looking for a freelance web developer.
- **Primary conversion:** WhatsApp contact ("Free Consultation").
- **Secondary conversions:** Email, project Live Demo / View Code, LinkedIn/GitHub/Instagram.

### 1.4 Non-goals
- Changing the information architecture or removing sections.
- Adding a CMS, blog, or auth.
- Shipping WebGL/3D (may be revisited later).

---

## 2. Design Principles

1. **Preserve, then elevate.** Every existing section/feature maps 1:1 to the new design (see §3).
2. **Typography carries the brand.** Large, tight, confident type; few colors.
3. **Motion has a job.** Animation guides attention, confirms interaction, or reveals hierarchy. It is never decoration.
4. **Smooth over flashy.** Long ease-out curves, no bounce, no overshoot, no more than one hero motion per viewport.
5. **Fast and accessible by default.** Motion is progressive enhancement. Content is readable without it.
6. **Honest content.** No fabricated stats or testimonials. Unverified numbers are placeholders until confirmed.

---

## 3. Information Architecture (preserved)

### 3.1 Sitemap

| # | Section | Anchor | Source (current site) | Redesign treatment |
|---|---|---|---|---|
| 0 | Navbar | — | Logo "Abigail.", About / Services / Projects / Contact, language toggle, "Available for work" | Minimal fixed bar, animated underline links |
| 1 | Hero | `#top` | H1 "Building High-Converting Web Experiences", subtext, **Free Consultation** + **View My Works** CTAs, badges (Mobile Friendly, Fast Loading, Modern Design), Scroll cue | Oversized line-masked headline, kept CTAs and badges |
| 2 | Quote / Intro | `#intro` | "I don't just write code…" + View My Works | Large pull-statement, word-by-word reveal |
| 3 | My Services | `#services` | 01 Custom Landing Pages, 02 Corporate Profiles, 03 Web Applications | **Sticky stacking cards** |
| 4 | My Works | `#projects` | AgriNusa, Aethel, Stockwise SaaS, Leafly Tea + "Interested in a website like this?" CTA | Dark section, large cover cards, hover bubble |
| 5 | My Work Process | `#process` | 01 Discovery & Strategy, 02 Design & Development, 03 Testing & Launch | Horizontal/sticky timeline with progress line |
| 6 | About Me | `#about` | Bio (3 paragraphs), stat counters, Core Expertise chips, closing quote | Two-column editorial layout, counters |
| 7 | Let's Work Together | `#contact` | CTA headline, WhatsApp + Email buttons, Direct Contact list, availability note, location | Full-bleed accent block, big CTA |
| 8 | Footer | — | Brand, tagline, Quick Links, Connect, © line, Privacy, Terms, "Built with" | Quiet footer, same links |

> The Design artifact prototype shows the visual direction. Sections 2, 5, 6 and parts of 4 and 8 are specified here and must be added to the prototype before build.

### 3.2 Feature inventory (must be preserved)

| ID | Feature | Requirement |
|---|---|---|
| F1 | **Bilingual ID / EN switch** | Persist choice (localStorage), set `<html lang>`, all copy via i18n dictionary (§10) |
| F2 | **"Available for work" status badge** | Pulsing dot, controlled by one config flag |
| F3 | **WhatsApp CTA** (`wa.me/6287725223486`) | Appears in hero, projects CTA, contact; opens in new tab with `rel="noopener noreferrer"` |
| F4 | **Email CTA** (`mautidur34@gmail.com`) | `mailto:` link plus compose link |
| F5 | **Project metadata** | Category (Full Stack / Frontend), description with highlighted outcome phrase, tech tags, "View Code", "Live Demo / View Project" |
| F6 | **Animated stat counters** | Count up when in view; values come from config (see §12 open item) |
| F7 | **Anchor navigation** | Smooth scroll, offset for fixed nav, active-link state |
| F8 | **Social links** | GitHub (AbiSulfur), LinkedIn (abigail-dev), Instagram (@bened_tri) |
| F9 | **Legal pages** | `/privacy`, `/terms` |
| F10 | **SEO metadata** | Title, description, keywords, Open Graph, Twitter card, `id_ID` locale (kept from current site) |
| F11 | **Responsive + mobile-friendly** | See breakpoints §5.5 |

---

## 4. Brand & Visual Language

### 4.1 Direction
Editorial, high-contrast, confident. Light canvas for reading sections, one dark section for work, one accent for emphasis. Shapes are geometric and flat. No gradient washes, no left-border cards, no emoji, no stock illustration.

### 4.2 Color tokens

| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAFAF7` | Page background |
| `--ink` | `#0B0B0C` | Primary text, dark sections |
| `--ink-muted` | `#55554F` | Body copy on light (≥ 4.5:1 on `--bg`) |
| `--ink-subtle` | `#77776F` | Meta/captions (verify ≥ 4.5:1 at the used size) |
| `--line` | `#D9D8D2` | Dividers on light |
| `--line-dark` | `#26262C` | Dividers on dark |
| `--accent` | `#C8FF3D` | Fills, highlights, CTA hover. **Never as text on light backgrounds** |
| `--on-accent` | `#0B0B0C` | Text on accent |
| `--surface-dark` | `#111114` | Cards on dark section |
| `--text-on-dark` | `#FAFAF7` | Text on dark |
| `--text-on-dark-muted` | `#B8B8B2` | Secondary text on dark |

Project cover accents (decorative fills only): `#C8FF3D`, `#FF6B4A`, `#5B6BFF`, `#FFC83D`, `#8CE8D0`. Any text over them must be `--ink`.

### 4.3 Typography

| Role | Family | Weights |
|---|---|---|
| Display + body | **Bricolage Grotesque** (Google Fonts, variable opsz) | 400, 700, 800 |
| Mono / labels | **DM Mono** | 400, 500 |

Rules: self-host or preconnect Google Fonts, `font-display: swap`, subset to Latin, fallback `system-ui, sans-serif`.

| Style | Size (clamp) | Line-height | Tracking | Weight |
|---|---|---|---|---|
| Display / H1 | `clamp(52px, 10.5vw, 160px)` | 0.94 | -0.05em | 800 |
| H2 | `clamp(40px, 5.4vw, 96px)` | 1.0 | -0.04em | 800 |
| H3 | `clamp(28px, 3vw, 40px)` | 1.1 | -0.025em | 700 |
| Body L | 21px | 1.55 | 0 | 400 |
| Body | 18px | 1.6 | 0 | 400 |
| Label (mono) | 13–14px | 1.4 | 0 | 400 |

### 4.4 Spacing, radius, elevation
- **Spacing scale (px):** 4, 8, 12, 16, 24, 32, 44, 56, 72, 90, 130.
- **Section padding (desktop):** 130px top / 60–150px bottom. Mobile: 72px / 48px.
- **Radius:** pill `999px`; card `36px`; large block `48–56px`; media `18–36px`.
- **Elevation:** none. Depth comes from contrast, scale, and motion (no drop shadows).

### 4.5 Layout & breakpoints
- Container: `max-width: 1440px`, horizontal padding `56px` (mobile `20px`).
- Grid: 12 columns, 24px gutter (desktop); single column below 768px.
- Breakpoints: `sm 480`, `md 768`, `lg 1024`, `xl 1280`, `2xl 1440`.
- Touch targets ≥ 44×44px.

---

## 5. Components

| Component | Spec |
|---|---|
| **Navbar** | Fixed, transparent over hero, blurs to `--bg` after 80px scroll. Links with underline-sweep hover (scaleX, 500ms). Language toggle (ID / EN) as a segmented control. Mobile: full-screen menu with staggered link reveal |
| **Button / Pill** | Height 56px, radius pill. Hover: accent circle sweeps in from bottom (600ms, `inOutExpo`), text color switches to `--ink`. Focus ring 2px `--ink` + 2px offset |
| **Availability badge** | 8px accent dot with 1.6s opacity pulse, mono label |
| **Chip (tech tag)** | Mono 13px, 1px border, radius pill, 6×14px padding |
| **Service card** | Sticky, min-height 380px, radius 36px, own background (`accent`, `ink`, `#5B6BFF`). Number mono top-left, title H3 |
| **Project card** | 4:3.4 media, radius 36px, overflow hidden. Hover: media scale 1.1 (1.3s ease-out), circular "View" bubble scales in at center |
| **Process step** | Number, H3, paragraph; connected by a progress line that fills on scroll |
| **Stat counter** | Mono label + display number; counts up once when 60% in view |
| **FAQ / accordion** | Not in the current site. Out of scope unless added deliberately |
| **Contact block** | `--accent` background, radius 48px, H2 CTA, two pill buttons |
| **Footer** | `--bg`, mono labels, link underline sweep |

---

## 6. Section Specifications

### 6.1 Hero
- H1 split into **three masked lines** that rise on load (stagger 120ms).
- Sub-paragraph, CTAs, and badges fade up after the headline (delay 700ms).
- CTAs: **Free Consultation** (WhatsApp, primary) and **View My Works** (secondary).
- Badges: Mobile Friendly, Fast Loading, Modern Design (mono chips).
- Scroll cue: small line that animates downward in a loop.
- Marquee strip beneath hero listing the stack (Next.js, React, TypeScript, Laravel, Tailwind CSS, MySQL), 30s linear loop, paused for reduced motion.

### 6.2 Intro quote
Statement text revealed **word by word** tied to scroll progress (opacity 0.2 → 1). Followed by the "View My Works" link.

### 6.3 Services (sticky stack)
Three cards stack with `position: sticky` (top offsets 90 / 112 / 134px). As the next card enters, the previous scales to 0.92 and dims (`brightness(.8)`).

### 6.4 Projects
Dark section (`--ink`, radius 56px). Two-column grid, even items offset 80px down on desktop. Content per project:

| # | Name | Category | Stack | Links |
|---|---|---|---|---|
| 01 | AgriNusa | Full Stack | Laravel 11, Livewire 3, Alpine.js, Tailwind CSS, MySQL | View Code |
| 02 | Aethel | Frontend | HTML5, Vanilla CSS3, Vanilla JS | View Code, Live Demo |
| 03 | Stockwise SaaS | Frontend | HTML5, Tailwind CSS, JavaScript | View Code |
| 04 | Leafly Tea | Full Stack | PHP, MySQL, JavaScript, Bootstrap | View Code, Live Demo |

Cover images: replace with real screenshots (`Porto7/8/5/2.webp` exist today). Descriptions keep the problem → outcome structure with the outcome phrase in bold. Closing CTA: "Interested in a website like this?" → WhatsApp.

### 6.5 Work Process
Three steps, vertical on mobile, horizontal on desktop. A 2px line draws as the section scrolls; each step's number turns accent-filled when reached.

### 6.6 About
Left: three-paragraph bio and closing quote. Right: stat counters, **Core Expertise** chips (Next.js, React, TypeScript, Laravel, Tailwind CSS, MySQL). No personal photo (project decision).

### 6.7 Contact
Accent block with H2, WhatsApp + Email pills, and a Direct Contact list (Email, GitHub, LinkedIn, Instagram). Availability sentence and location (Jakarta, Indonesia).

### 6.8 Footer
Brand + tagline, Quick Links (About, Services, Projects, Contact), Connect (GitHub, LinkedIn, Instagram), © line, Privacy, Terms, and a "Built with" credit.

---

## 7. Motion System

### 7.1 Library & philosophy
Use **Motion (Framer Motion)**, imported from `motion/react`. Smoothness comes from three things: long durations (0.6–1.3s), expo-style easing, and scroll-linked values instead of one-shot triggers where possible.

### 7.2 Tokens

```ts
// motion/tokens.ts
export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  inOutExpo: [0.76, 0, 0.24, 1],
} as const;

export const dur = { fast: 0.3, base: 0.6, slow: 1.0, hero: 1.2 } as const;
export const stagger = { lines: 0.12, items: 0.08 } as const;
export const viewport = { once: true, amount: 0.3 } as const;
```

### 7.3 Patterns

| Pattern | Implementation | Spec |
|---|---|---|
| **Line mask reveal** | Wrapper `overflow:hidden`; inner `motion.span` `y: "112%" → 0` | `dur.hero`, `ease.inOutExpo`, stagger `0.12` |
| **Fade-up** | `initial {opacity:0,y:24}` → `whileInView {opacity:1,y:0}` | `dur.slow`, `ease.outExpo` |
| **Scroll reveal card** | `useScroll({target, offset:["start end","start 0.6"]})` + `useTransform` for `clipPath` inset and `y` | Linked to scroll |
| **Sticky stack** | `useScroll` per card; `scale` 1 → 0.92, `filter` dim | Linked to scroll |
| **Word-by-word text** | Split words; each `opacity` mapped to its slice of scroll progress | Linked to scroll |
| **Hover bubble** | `whileHover` on card; bubble `scale 0 → 1` | `dur.base`, `ease.outExpo` |
| **Magnetic button** (optional) | `useMotionValue` + `useSpring` (`stiffness 150, damping 15`), max 12px shift | Desktop pointer only |
| **Custom cursor** (optional) | `useSpring` follower, grows to 80px over project cards | Desktop pointer only; hide on touch |
| **Counter** | `animate(0, target, {duration: 1.6, ease: ease.outExpo})` on `useInView` | Once |
| **Page transition** | Astro View Transitions (fade, 400ms) | Only for legal pages |
| **Marquee** | CSS keyframes (no JS) | 30s linear |

### 7.4 Smooth scroll
Use **Lenis** (`lerp: 0.1`) for inertial scrolling, synced to Motion's scroll values. Disable when `prefers-reduced-motion` is set. Anchor links call `lenis.scrollTo(target, {offset: -80})`.

### 7.5 Reduced motion
When `prefers-reduced-motion: reduce`:
- Disable Lenis, marquee, parallax, sticky scaling, cursor, magnetic effects.
- Render final states immediately; keep only opacity fades ≤ 150ms.
- Use `useReducedMotion()` as the single source of truth.

### 7.6 Motion rules
- Animate only `transform`, `opacity`, `clip-path`, `filter`. Never `width/height/top/left`.
- Max one scroll-linked hero effect per viewport.
- No animation > 1.3s except marquee and ambient loops.
- All `whileInView` use `once: true` unless scroll-linked.

---

## 8. Accessibility

- Target **WCAG 2.2 AA**.
- Text contrast ≥ 4.5:1 (≥ 3:1 for 24px+). Accent is a fill only.
- Semantic landmarks: `header`, `nav`, `main`, `section[aria-labelledby]`, `footer`.
- Real `<a>` / `<button>`, never clickable `div`s. Icon-only controls have `aria-label`.
- Visible focus ring on every interactive element.
- Language toggle updates `<html lang>` and has `aria-pressed`.
- Split-text headings keep the full text in an `aria-label` on the heading; split spans are `aria-hidden`.
- Skip-to-content link as the first focusable element.
- Decorative SVG/shapes `aria-hidden="true"`.

---

## 9. Performance Budget

| Metric | Target |
|---|---|
| Lighthouse (Performance / Accessibility / Best Practices / SEO) | **≥ 95** each on mobile |
| LCP | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| JS shipped on first load | < 120 KB gzipped |
| Images | WebP/AVIF, explicit `width/height`, `loading="lazy"` below fold, hero asset eager |
| Fonts | ≤ 2 families, Latin subset, preloaded |

Strategy: ship mostly static HTML; hydrate only animated islands (`client:visible`); import from `motion/react` with tree shaking; avoid animating large blurred layers on mobile.

---

## 10. Content & i18n

- Dictionary files: `src/i18n/id.json`, `src/i18n/en.json`. Keys mirror sections (`hero.title`, `services.items[0].title`, …).
- Default locale follows the current site; the toggle persists to `localStorage` and updates `<html lang>`.
- Existing English copy is the source of truth; the ID translation is to be reviewed by the owner.
- Dynamic content (projects, stats, links) lives in `src/data/*.ts`, not in components.

```ts
// src/data/site.ts
export const site = {
  availableForWork: true,
  whatsapp: "https://wa.me/6287725223486",
  email: "mautidur34@gmail.com",
  socials: {
    github: "https://github.com/AbiSulfur",
    linkedin: "https://www.linkedin.com/in/abigail-dev/",
    instagram: "https://www.instagram.com/bened_tri/",
  },
  stats: { projects: null, years: null, satisfaction: null }, // see §12
};
```

---

## 11. Technical Architecture

### 11.1 Stack
- **Astro** + **React islands** for animated components
- **Tailwind CSS v4** (design tokens in `@theme`)
- **Motion** (`motion/react`), **Lenis**
- Deploy: Vercel

> Assumption: the project is on Astro + Tailwind v4 after the planned migration. If it remains on Next.js, the same component and motion specs apply using the App Router with `"use client"` islands.

### 11.2 Structure

```
src/
├─ components/
│  ├─ ui/            Button, Chip, Badge, Pill
│  ├─ motion/        LineReveal, FadeUp, Counter, StickyStack, Marquee, Cursor
│  └─ sections/      Hero, Intro, Services, Projects, Process, About, Contact, Footer
├─ data/             site.ts, projects.ts, services.ts, process.ts
├─ i18n/             id.json, en.json
├─ motion/           tokens.ts, hooks.ts
├─ layouts/          Base.astro
├─ pages/            index.astro, privacy.astro, terms.astro
└─ styles/           global.css  (tokens, base, utilities)
```

### 11.3 Tailwind v4 tokens

```css
@theme {
  --color-bg: #FAFAF7;
  --color-ink: #0B0B0C;
  --color-accent: #C8FF3D;
  --font-display: "Bricolage Grotesque", system-ui, sans-serif;
  --font-mono: "DM Mono", ui-monospace, monospace;
  --radius-card: 36px;
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out-expo: cubic-bezier(0.76, 0, 0.24, 1);
}
```

---

## 12. Open Items & Assumptions

| # | Item | Owner | Note |
|---|---|---|---|
| 1 | **Stat counter values** (Projects Delivered, Years Experience, Client Satisfaction) | Abigail | Live site animates from 0, real values not visible. Keep only numbers you can back up; drop "Client Satisfaction %" if it cannot be verified |
| 2 | Real project screenshots | Abigail | Replace geometric placeholders |
| 3 | Final ID translation review | Abigail | |
| 4 | Privacy and Terms copy | Abigail | Pages exist; confirm content |
| 5 | Stack confirmation (Astro vs Next.js) | Abigail | See §11.1 |
| 6 | Custom cursor / magnetic buttons | Abigail | Optional, desktop only |

---

## 13. Implementation Plan

| Phase | Deliverable | Acceptance criteria |
|---|---|---|
| 1. Foundation | Tokens, fonts, Base layout, i18n scaffold, data files | Lighthouse ≥ 95 on empty shell; toggle works |
| 2. Static sections | All 8 sections without animation | Every item in §3 present; passes keyboard + screen-reader pass |
| 3. Motion | Tokens, line reveal, fade-up, sticky stack, counters, hover bubble, Lenis | Matches §7; no layout shift; 60fps on mid-range mobile |
| 4. Polish | Reduced-motion path, custom cursor (optional), view transitions | §7.5 verified |
| 5. QA & launch | Cross-browser, Lighthouse, SEO, analytics (if any) | §9 budgets met; no regressions in F1–F11 |

### Definition of Done
- All features F1–F11 verified.
- All sections in §3.1 present on desktop and mobile.
- Reduced-motion mode tested.
- Lighthouse mobile ≥ 95 in all four categories.
- No console errors; no fabricated content.

---

## 14. Change Log

| Date | Version | Notes |
|---|---|---|
| 2026-10-13 | 1.0 | Initial draft from live-site audit, Framer + Cuberto references |
