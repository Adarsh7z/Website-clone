# BrightSmile Dental Care — Ultra-Clean Healthcare Interface

A pixel-perfect, premium dental healthcare landing page built from scratch with **React**, **TypeScript**, **Tailwind CSS**, and **GSAP 3** following the modern split-hero design specifications.

## Architectural Highlights

### 1. Visual System & The Split Hero Engine
- **Asymmetric Split Hero**: Strict 2-column widescreen grid (~45% Left / ~55% Right).
- **Left Column**: Dark, atmospheric charcoal-teal gradient (`#0E1416` scaling into `#142226`) featuring:
  - Main H1 header: *"Healthy Smile,"* in crisp white and *"Happy Life"* in high-luminance Mint Cyan (`#14B8A6`).
  - Wide-line-height geometric sub-heading.
  - Signature glowing Mint Cyan CTA: *"Book Your Appointment →"* with hover pulse glow.
  - Verified trust badges: 4.9/5 star ratings from 2,500+ patients and 100% Pain-Free Technology.
- **Right Column**: Pristine, high-resolution dental operating theater panorama bathed in warm circular overhead halo lights, sterile medical lighting arms, and turquoise dental suite styling.
- **Overlapping Cut Effect**: Seamless edge gradient blend connecting the illuminated panorama into the dark left container.

### 2. Core Components
- **Sticky Glassmorphic Navigation**: Minimalist single-line tooth logo, bold white *BrightSmile* brand tracking, balanced navigation links with underline fade, and high-contrast *Book Appointment* button.
- **Specialized Clinical Departments**: Cards for Preventive Care, Cosmetic & Laser Whitening, Invisalign Clear Aligners, 3D Guided Implants, Pediatric Care, and 24/7 Emergency Triage.
- **Clinical Excellence & Hardware Innovation**: Live animated statistics and hardware highlights (Low-Dose 3D CBCT, Silent Electric Handpieces, Computer-Guided Implants).
- **Board-Certified Specialists**: Profiles for Harvard, Columbia, and NYU trained lead dental surgeons.
- **Verified Patient Reviews**: Patient transformations and 5-star verified reviews.
- **Location, Hours & Interactive Map**: Dark-teal inverted OpenStreetMap, direct emergency triage line, and address details.
- **Interactive Fast-Track Booking Modal**: Multi-step patient scheduler with department selection, doctor preference, date/time slots, and confirmation workflow.

## Tech Stack
- **React 18** + **TypeScript**
- **Vite** (Build tool & development server)
- **Tailwind CSS** (Custom healthcare palette & glow utilities)
- **GSAP 3** + **@gsap/react** (ScrollTrigger, timelines, staggers, and reduced-motion compliance)
- **Cloudflare Workers & Netlify** ready (`wrangler.toml`, `worker.js`, `netlify.toml`, `public/_redirects`)

## Commands

```bash
# Development
npm run dev

# Production Build
npm run build

# Preview Build
npm run preview
```
