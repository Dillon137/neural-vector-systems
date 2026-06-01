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

### 2. Contact Form (Resend)
The form posts to `src/app/api/contact/route.ts`. Copy `.env.example` to `.env` locally and set:

- `RESEND_API_KEY`
- `INQUIRY_TO`
- `RESEND_FROM_EMAIL` (optional; defaults to Resend test sender)

### 3. Add Your Logo Image
Place your logo file at `public/images/branding/logo.png` and update the SVG logo in `src/components/layout/Navbar.tsx` (around line 40) to use `<Image>` instead.

### 4. SEO Metadata
Update `src/app/layout.tsx` metadata with your final domain and Open Graph image once live.

---

## Deployment

### AWS Amplify Hosting (recommended)
This app uses Next.js API routes (`/api/contact`) and must be deployed with SSR, not static export.

1. In [AWS Amplify Console](https://console.aws.amazon.com/amplify/), connect this repository and branch.
2. Amplify detects Next.js; `amplify.yml` in the repo runs `npm ci` and `npm run build`.
3. Under **Environment variables**, add the same keys as `.env.example` (`RESEND_API_KEY`, `INQUIRY_TO`, `RESEND_FROM_EMAIL`).
4. Deploy, then test the contact form on the Amplify URL before switching DNS from S3/CloudFront.

### Vercel
Connect the repo at [vercel.com](https://vercel.com) or run `vercel` — set the same Resend env vars in the project settings.

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
