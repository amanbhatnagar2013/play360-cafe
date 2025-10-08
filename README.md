# Play 360 Esports Café — Starter (No‑Code Friendly)

This repo gives you a running website with your branding, placeholder pages, pricing, and dummy data.

## One‑Click Setup (Recommended)
1. Create an empty GitHub repo named `play360-cafe`.
2. Upload these files (drag & drop on GitHub's "Add file → Upload files").
3. Go to **Vercel → Import Project from GitHub**.
4. Add env vars later when payments/storage are added.
5. Click **Deploy**. You're live!

## Run Locally (optional)
```
npm install
npm run dev
```
Visit http://localhost:3000

## Where to edit content
- `app/(site)/page.tsx` → homepage highlights
- `data/games.json`, `data/menu.json`, `data/pricing.json` → simple lists
- `components/*` → Navbar, Footer, Cards
- `app/(site)/platforms/*` → PlayStation, Xbox, PC pages
- `app/(site)/store` → merch placeholder
- `app/(site)/booking` → seat booking (mock UI)
- `app/admin` → locked placeholder for admin (no auth yet)
