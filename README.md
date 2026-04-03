# Mass Barber Shop — Website

A production-ready, modern barber shop website built with **Next.js 14 (App Router)** and **Tailwind CSS**.

---

## Quick Start (Run Locally)

### Prerequisites
- Node.js 18.17 or later → https://nodejs.org
- npm (comes with Node.js)

### Steps

```bash
# 1. Extract the zip and enter the folder
cd mass-barber-shop

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# → http://localhost:3000
```

---

## File Structure

```
mass-barber-shop/
├── public/
│   ├── hero-bg.jpg          ← REPLACE: main hero background image
│   ├── about-bg.jpg         ← REPLACE: about section image
│   ├── og-image.jpg         ← REPLACE: social sharing preview (1200×630)
│   ├── favicon.ico          ← REPLACE: your favicon
│   ├── apple-touch-icon.png ← REPLACE: iOS icon
│   └── gallery/
│       ├── g1.jpg           ← REPLACE: gallery photo 1
│       ├── g2.jpg           ← REPLACE: gallery photo 2
│       ├── g3.jpg           ← REPLACE: gallery photo 3
│       ├── g4.jpg           ← REPLACE: gallery photo 4 (wide)
│       ├── g5.jpg           ← REPLACE: gallery photo 5
│       ├── g6.jpg           ← REPLACE: gallery photo 6
│       ├── g7.jpg           ← REPLACE: gallery photo 7
│       └── g8.jpg           ← REPLACE: gallery photo 8
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       ← SEO metadata (title, description, og tags)
│   │   ├── page.tsx         ← Page assembly (section order)
│   │   └── globals.css      ← Global styles, fonts, animations
│   │
│   └── components/
│       ├── Navbar.tsx       ← Sticky nav + mobile menu
│       ├── Hero.tsx         ← Full-screen hero section
│       ├── Services.tsx     ← Service cards + pricing
│       ├── About.tsx        ← About story + stats
│       ├── Reviews.tsx      ← Testimonial cards
│       ├── Gallery.tsx      ← Photo grid
│       ├── Booking.tsx      ← CTA booking section
│       ├── Location.tsx     ← Map + hours + contact
│       ├── Footer.tsx       ← Footer with links
│       └── ScrollReveal.tsx ← Scroll animation engine
│
├── package.json
├── tailwind.config.ts
├── next.config.js
└── vercel.json
```

---

## Customisation Checklist

Every item that needs your real content is marked with a comment
`// ← ` inside the code. Here's a quick checklist:

### 1. Business Info (search & replace across all files)
- [ ] Phone number: `+44 131 000 0000`
- [ ] Email: `hello@massbarbershop.co.uk`
- [ ] Domain: `https://massbarbershop.co.uk`
- [ ] Booking URL: `https://massbarber.appointedd.com`
- [ ] Google review link in `Reviews.tsx`
- [ ] Instagram handle in `Gallery.tsx` and `Footer.tsx`
- [ ] Facebook URL in `Footer.tsx`
- [ ] Google Maps page URL in `Footer.tsx`

### 2. Google Maps Embed (`src/components/Location.tsx`)
1. Go to **maps.google.com**
2. Search **182A Ferry Rd, Edinburgh**
3. Click **Share → Embed a map**
4. Copy the `src="..."` value from the `<iframe>` code
5. Paste it into `MAP_EMBED_URL` at the top of `Location.tsx`

### 3. Images (`/public/`)
Replace every placeholder with a real photo. Recommended sizes:
| File | Size | Content |
|------|------|---------|
| `hero-bg.jpg` | 1920×1080px | Dark barber shop interior or action shot |
| `about-bg.jpg` | 600×750px | Barber working or shop interior |
| `og-image.jpg` | 1200×630px | Brand/logo image for social sharing |
| `gallery/g1–g8.jpg` | Mixed | Portfolio haircut photos |

> **Tip for gallery:** Mix portrait (600×800) and landscape (800×600) shots.
> `g4.jpg` is a wide card — use a landscape shop interior for it.

After adding real images, open `Gallery.tsx` and uncomment the `<Image>` block
(remove the placeholder `<div>` above it).

### 4. Services & Pricing (`src/components/Services.tsx`)
Edit the `SERVICES` array at the top of the file. Each object:
```js
{
  title: "Haircut",
  price: "£20",       // your real price
  duration: "30–45 min",
  description: "...", // your description
  featured: true,     // adds "Popular" badge (set on one service max)
}
```

### 5. Opening Hours (`src/components/Location.tsx`)
Edit the `OPENING_HOURS` array. Format: `"9:00am – 6:00pm"` or `"Closed"`.

### 6. Reviews (`src/components/Reviews.tsx`)
Replace the `REVIEWS` array with real Google / Facebook reviews.

### 7. SEO Metadata (`src/app/layout.tsx`)
- Update `title`, `description`, `keywords`
- Update `metadataBase` to your real domain
- Replace `og-image.jpg` with a branded 1200×630 image

---

## Deploy to Vercel (Recommended — Free)

### Option A: GitHub → Vercel (Best)

1. Push this folder to a GitHub repository
2. Go to **https://vercel.com** → Sign up / Log in
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **Deploy**
6. Your site is live in ~60 seconds

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy from the project folder
cd mass-barber-shop
vercel

# Follow the prompts — it will give you a live URL instantly
# For production:
vercel --prod
```

### Custom Domain on Vercel
1. Go to your project on vercel.com
2. Settings → Domains
3. Add your domain (e.g. `massbarbershop.co.uk`)
4. Update your domain's DNS records as shown

---

## Build for Production (Self-hosted)

```bash
# Build
npm run build

# Start production server
npm start
# Runs on http://localhost:3000
```

For self-hosting on a VPS (Ubuntu + Nginx + PM2):
```bash
# On your server
npm install
npm run build
pm2 start npm --name "mass-barbers" -- start
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Fonts | Google Fonts (Cormorant Garamond + DM Sans) |
| Images | Next.js `<Image>` (auto-optimised) |
| Deployment | Vercel (recommended) |
| Animations | CSS + Intersection Observer API |

---

## Performance Notes

- Images use `next/image` — auto WebP/AVIF conversion, lazy loading
- Fonts load via Google Fonts with `display=swap`
- No heavy JS libraries — animations are pure CSS + a tiny Observer script
- Static site generation (SSG) — ultra-fast load times
- Tailwind purges unused CSS — minimal bundle size

---

## Support

All editable content is marked with `// ← ` comments directly in the code.
Search for `← ` across the project to find every item that needs updating.
