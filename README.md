# Next.js 14 Portfolio + Blog (CRUD) — Design‑AG Style

**Features**
- Super modern 2025 design: gradient mesh, glass cards, motion.
- Dark mode with `next-themes`.
- Blog CRUD with Prisma (SQLite).
- Pages:
  - `/` Portfolio landing
  - `/blog` list + create
  - `/blog/[slug]` detail
  - `/blog/[slug]/edit` edit
  - API: `/api/posts`, `/api/posts/[id]`

**Run locally**
```bash
npm install
npx prisma migrate dev --name init
npm run dev
```

**Deploy**
- Vercel ready. For production DB, use a hosted DB (Neon/Turso/PlanetScale).
