# Meridian Home Care

Marketing and booking site for **Meridian Home Care**, a Chicago residential and commercial cleaning company. Built with Next.js 16 (App Router), React 19 and TypeScript, styled with a hand-rolled "Modernist" design system — no UI framework.

The site is fully static: 30 prerendered routes, no runtime data dependencies.

## What's in it

| Route | Purpose |
| --- | --- |
| `/` | Homepage — hero, live quote calculator, service accordion, before/after slider, plans, testimonials, gallery, team, FAQ |
| `/book` | Instant quote and booking flow |
| `/services` | All twelve services |
| `/services/[slug]` | Per-service detail with a full room-by-room checklist |
| `/pricing` | Three plans, a line-by-line comparison matrix, published per-service rates and add-ons |
| `/gallery` | Masonry work gallery plus the before/after comparison |
| `/about` | Story, twelve-year timeline, team profiles |
| `/areas` | Four service zones across Chicago and the North Shore |
| `/faq` | Searchable FAQ with `FAQPage` structured data |
| `/contact` | Contact details and enquiry form |
| `/careers` | Open roles, benefits, hiring process |
| `/privacy`, `/terms`, `/accessibility` | Legal and accessibility statements |

## Design system

Everything visual is driven by tokens in [`app/globals.css`](app/globals.css). Retune there rather than in components.

- **Type** — Archivo 400/600/800, loaded via `next/font`
- **Palette** — `#f3f2f2` ground, `#201e1d` ink, `#ec3013` accent, plus matched neutral and accent ramps generated on one OKLCH lightness scale
- **Geometry** — zero border radius throughout, 2px dividers at 40% ink, a 1280px measure with a `clamp(20px, 5vw, 72px)` gutter
- **Motion** — scroll reveals via CSS `animation-timeline: view()`, fully disabled under `prefers-reduced-motion`

## Pricing engine

Quote maths lives in [`lib/pricing.ts`](lib/pricing.ts), separate from the UI: property-type rates per square foot, a bathroom surcharge, frequency multipliers (one-time through weekly), and flat-rate add-ons. The booking panel recomputes on every input and shows the saving against a one-time clean.

## Content

All copy, services, plans, FAQs, team and service areas live in [`lib/content.ts`](lib/content.ts); business details and navigation in [`lib/site.ts`](lib/site.ts). Pages stay layout-only, so text changes never touch JSX.

## Photography

Image slots currently render deterministic generated SVG compositions ([`components/Photo.tsx`](components/Photo.tsx)) in four archetypes — room, wide, detail and surface — seeded from the slot id so server and client agree and the page has real composition rather than grey boxes.

To swap in real photography, replace the `<svg>` inside `Photo` with `next/image` and keep the wrapper classes. No other file needs to change.

## Accessibility

Targets WCAG 2.2 AA: keyboard operable throughout, visible 2px focus rings, a skip link, labelled form fields, `aria-pressed` on the option chips, a live region on the running price, and a slider fallback for the drag-based before/after comparison. Known gaps are documented at `/accessibility`.

## SEO

Per-page metadata and Open Graph tags, a generated `sitemap.xml` and `robots.txt`, `HomeAndConstructionBusiness` JSON-LD site-wide, `Service` JSON-LD on each service page, and `FAQPage` JSON-LD on the FAQ.

## Running it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

```bash
npm run build   # production build — 30 static routes
npm run lint    # eslint
```

## Notes

Business details in `lib/site.ts` (phone, address, licence number, review counts) and all site copy are placeholder content for this build, not a live business record. Replace them before any real deployment.
