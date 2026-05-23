# Neural Vector Systems — Website

Enterprise-grade Next.js website for Neural Vector Systems LLC. Built with Next.js 14 App Router, TailwindCSS, and custom canvas animations.

---

## Quick Start

### Prerequisites
- Node.js 18.17+ 
- npm or yarn

### Install & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (Hero, Capabilities, Case Studies, CTA)
│   ├── services/page.tsx     # Services & deliverables breakdown
│   ├── solutions/page.tsx    # Industry vertical solutions
│   ├── case-studies/page.tsx # Full case study documents
│   ├── technologies/page.tsx # Technology stack grid
│   ├── about/page.tsx        # NVS philosophy & founder background
│   ├── insights/page.tsx     # Technical blog article listing
│   ├── contact/page.tsx      # Inquiry form
│   ├── layout.tsx            # Root layout (Navbar, Footer)
│   ├── globals.css           # Global styles, CSS variables, utilities
│   └── not-found.tsx         # 404 page
│
└── components/
    ├── layout/
    │   ├── Navbar.tsx         # Fixed nav with scroll-aware background
    │   └── Footer.tsx         # Multi-column footer
    └── animations/
        ├── ParticleField.tsx  # Interactive canvas particle network (Hero bg)
        └── useScrollReveal.ts # IntersectionObserver scroll reveal hook
```

---

## Customization Checklist

### 1. Brand & Contact
Update the following in `src/components/layout/Footer.tsx`:
- Replace `hello@neuralvectorsystems.com` with your actual email
- Update LinkedIn and GitHub hrefs

### 2. Contact Form Submission
The form in `src/app/contact/page.tsx` logs to console by default. Replace the `handleSubmit` function with your preferred submission method:

**Option A — Resend (recommended)**
```bash
npm install resend
```
Create `src/app/api/contact/route.ts` and call it from the form.

**Option B — Formspree**
Replace `handleSubmit` with a standard `fetch` POST to your Formspree endpoint.

**Option C — Next.js Server Action**
Convert the component and use a `<form action={serverAction}>` pattern.

### 3. Add Your Logo Image
Place your logo file at `public/images/branding/logo.png` and update the SVG logo in `src/components/layout/Navbar.tsx` (around line 40) to use `<Image>` instead.

### 4. Insights Articles
Each insight card links to `/insights/[slug]`. Create `src/app/insights/[slug]/page.tsx` with MDX or markdown-based rendering, or use a CMS like Contentlayer or Sanity.

### 5. SEO Metadata
Update `src/app/layout.tsx` metadata with your final domain and Open Graph image once live.

---

## Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo directly at vercel.com — zero-config Next.js deployment.

### Cloudflare Pages
```bash
npm run build
# Deploy the `.next` output via Cloudflare Pages with Next.js preset
```

### Self-hosted
```bash
npm run build
npm run start  # Runs on port 3000
```
Use nginx or Caddy as a reverse proxy.

---

## Design System

### Colors (CSS Variables)
| Variable | Value | Use |
|---|---|---|
| `--c-obsidian` | `#050A14` | Page background |
| `--c-navy-mid` | `#0A1628` | Card backgrounds |
| `--c-cyan-glow` | `#00D4FF` | Primary accent, CTAs |
| `--c-violet-glow` | `#7B5CF0` | Secondary accent |
| `--c-text` | `#E2E8F0` | Body text |
| `--c-muted` | `#64748B` | Muted/label text |

### Typography
| Role | Font | Import |
|---|---|---|
| Headlines | Syne (800, 700) | Google Fonts |
| Body | Outfit (300–600) | Google Fonts |
| Monospace / Data | IBM Plex Mono | Google Fonts |

### Key CSS Utilities
- `.glass-card` — Glassmorphism card with hover border glow
- `.gradient-text` — Cyan→Violet gradient text
- `.gradient-text-reverse` — Violet→Cyan gradient text
- `.section-label` — IBM Plex Mono uppercase label
- `.btn-primary` — Primary cyan-border CTA button
- `.btn-secondary` — Secondary ghost CTA button
- `.bg-grid` — Subtle dot-grid background overlay
- `.glow-line` — Horizontal gradient separator line

---

## Performance Notes

- The `ParticleField` canvas component is dynamically imported with `ssr: false` to prevent hydration issues
- All pages use Next.js App Router with server components by default
- Fonts are loaded via Google Fonts `@import` in `globals.css` — consider switching to `next/font` for production to eliminate render-blocking

---

## License
Proprietary — Neural Vector Systems LLC. All rights reserved.
