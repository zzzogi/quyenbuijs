# Portfolio Redesign — "Quiet Precision" Design Spec

**Date:** 2026-07-18
**Status:** Approved
**Scope:** Full product-experience redesign of the single-page portfolio (CRA + React 19 + vanilla CSS). No new npm packages. Business logic (bilingual EN/VI, theming, GH Pages deploy) preserved.

## Goals

The primary user is a recruiter/hiring manager spending 30–90 seconds, likely on mobile. The first viewport must answer: who, what, how good, how to reach. Primary actions: contact, view projects, scan experience.

## Key product decisions

1. **Remove the 3s welcome splash.** The hero performs a 600ms staggered entrance instead. Biggest UX + LCP win.
2. **Restore Contact** as a real section: large mailto CTA, phone, SVG social links. The fake simulated form is dropped.
3. **Hero identity first:** display heading is the name "Bùi Viết Quyền", mono eyebrow "Full Stack Developer", one-line value prop, CTAs `View projects` / `Get in touch`. Photo slideshow demoted to a framed 4:5 portrait with slow cross-fade.
4. **Section order:** Hero → About → Experience → Projects → Achievements → Hobbies → Gallery → Contact → Footer.
5. **Nav slims to five:** About, Experience, Projects, Achievements, Contact — one data source (`pageData.navItems`) drives desktop and mobile nav; scroll-spy highlights the active section.

## Design language — Quiet Precision

Dark-first, near-monochrome, one accent. Hierarchy from space and weight; hairline borders; accent spent sparingly.

- **Dark (default):** bg `#0B0C0E`, surface `#121417`, text `#EDEEF0` / `#9BA1A8`, border `rgba(255,255,255,.08)`, accent `#2DD4BF`.
- **Light:** bg `#FAFAF8`, surface `#FFFFFF`, text `#17181A` / `#5C6166`, border `rgba(0,0,0,.08)`, accent `#0D9488`.
- Theme toggle restored; first visit follows `prefers-color-scheme`; persisted in `localStorage`; `data-theme` attribute (the broken `data-color-scheme` split is removed).
- **Typography:** Inter (400/500/600/700) everywhere, −0.02em tracking at display sizes; JetBrains Mono for meta (dates, tags, section indexes "01 — About"). Base 16px, body measure ≤ 68ch, Vietnamese subsets via Google Fonts `<link>`.
- **Icons:** inline SVG components using Lucide path data (no dependency). Emoji retired from UI chrome (kept only as hobby personality icons).

## Design system

- **Type scale (rem):** display clamp(2.25→3.5) / h2 2.0 / h3 1.25 / body 1.0 / small .875 / mono-meta .8125. Line-height 1.1 display, 1.6 body.
- **Spacing:** 4px grid (4…128). Section rhythm 128px desktop / 80px mobile. Container 1080px, 24px gutters.
- **Radius:** 6 (tags/buttons), 10 (cards), 16 (modal/images), 999 (pills).
- **Elevation:** borders-first. Hover = border brightens + translateY(-2px). Modal = `0 16px 48px rgba(0,0,0,.4)` + blurred overlay. No ambient card shadows.
- **Components:** Button (primary/ghost/text-arrow), Tag (mono, accent-subtle bg), Card, Navbar (transparent → blurred + hairline after 8px scroll), full-screen mobile nav, accessible modal (focus trap, Escape, scroll lock, aria-modal), lazy images with explicit dimensions, reduced-motion kill-switch.
- Not built (no use case): tables, charts, sidebar, dropdown, toast, skeletons.

## Section redesigns

- **About:** two-column — trimmed narrative + mono-labeled facts (5+ yrs / React · Node.js / Security / EN+VI). Portrait lives in hero only.
- **Experience:** timeline with hairline rule, accent dots, mono dates in left gutter (desktop) / above title (mobile). Shared fade-in replaces per-item setTimeout observers.
- **Projects:** cards — 16:10 lazy image, title, one-liner, mono tags, arrow links; hover border-brighten + image zoom 1.03. Grid 3→2→1.
- **Achievements:** uniform cards, 40px icon row (fixes inline-style hacks), mono `2022 · Udemy` meta, visible "View certificate ↗"; accessible modal.
- **Hobbies:** palette-consistent cards; three preview photos become an always-visible bottom strip (touch-friendly); per-card rainbow colors dropped.
- **Gallery:** full-bleed marquee, uniform 280px images, pause-on-hover, aria-hidden duplicate track.
- **Contact:** centered — heading "Let's work together / Cùng hợp tác nhé", mailto CTA, mono phone, SVG socials (Twitter dropped, URL is "#").
- **Footer:** hairline-top row — copyright + small nav + socials. "Neon lights" copy retired.

## Architecture changes

- New primitives: `Section` (id + container + mono index + title), `TechTag`, `Icon`.
- Hobbies + achievements data moves to `pageData.js` (components become pure renderers; icons as path strings, not JSX).
- Fixes: `App.js` `const { theme } = ThemeContext` bug; `<html lang>` syncs with language toggle; dead files removed (`WelcomeSection`, `BackgroundElement`, `enhenceScroll.js`, CRA `App.css` leftovers, `logo.svg`).
- `index.css` rewritten from scratch (~900 organized lines: tokens → reset → base → primitives → sections → responsive → reduced-motion).

## Motion (complete list)

One easing `cubic-bezier(0.16,1,0.3,1)`. Nav underline 200ms · card lift 200ms · image zoom 400ms · button press scale .98 · hero stagger 600ms once · section fade-up 500ms once · modal scale-fade 200ms · theme color-fade 300ms · marquee pause-on-hover. `prefers-reduced-motion` disables all of it.

## Performance & SEO

Splash removed; first portrait `fetchpriority="high"`, all other images lazy with dimensions (CLS ≈ 0); `font-display: swap` + preconnect; meta description, Open Graph/Twitter tags, per-theme `theme-color`, title "Bùi Viết Quyền — Full Stack Developer"; GH Pages `/quyenbuijs/` prefix unchanged.

## Migration phases

- **P0 Foundation:** tokens/reset/typography/fonts; theme fix + wiring; splash removal; Header/mobile nav + theme toggle; Hero; Contact.
- **P1 Sections:** About, Experience, Projects, Achievements + modal, Hobbies, Gallery, Footer, BackToTop; nav/data consolidation; image pass; SEO meta.
- **P2 Polish:** reduced-motion audit, dead-file cleanup, `npm run build` gate, live verification in EN/VI × dark/light × mobile.

## Verification

`npm run build` must pass; every section checked in both languages, both themes, and a mobile viewport; modal keyboard behavior verified; no dead nav links.
