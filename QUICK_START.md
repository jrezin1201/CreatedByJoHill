# 🚀 Quick Start - Portfolio Site

## Get Running in 5 Minutes

```bash
# 1. Navigate to the project directory
cd portfolio-site

# 2. Install dependencies (lucide-react added)
npm install

# 3. Setup your database URL in .env
echo 'DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"' > .env

# 4. Run migrations
npm run db:generate
npm run db:migrate

# 5. Seed example projects
npm run db:seed

# 6. Start the dev server
npm run dev
```

## 🎯 Your Portfolio is Live at:

- **Main Portfolio:** http://localhost:3000/portfolio
- **Landing Page:** http://localhost:3000/
- **Module Catalog:** http://localhost:3000/showcase

---

## ✅ What's Included

### Portfolio Module (`/portfolio`)
- **PortfolioHero** - Challenge stats (15/30 days, progress bar)
- **ProjectGrid** - Responsive grid with filtering & sorting
- **ProjectCard** - Day counter badge, tech tags, modal view
- **8 Example Projects** - Pre-seeded data ready to customize

### Database Schema
- `Project` model with dayNumber, tags[], category, featured

### Feature Flags
- Toggle portfolio on/off in `src/config/site-config.ts`
- Registered in module registry (shows in catalog sidebar)

---

## 📝 Next Steps

1. **Add Your Projects:**
   ```bash
   npm run db:studio
   # Opens GUI at http://localhost:5555
   ```

2. **Add Project Images:**
   - Place in `public/projects/`
   - Reference: `image: "/projects/my-screenshot.png"`

3. **Customize:**
   - Edit hero in `src/modules/portfolio/components/PortfolioHero.tsx`
   - Change colors in `ProjectCard.tsx` (line 33)
   - Update social links

4. **Deploy:**
   - Push to GitHub
   - Import to Vercel
   - Add DATABASE_URL env var
   - Deploy!

---

## 📚 Full Documentation

- **Setup Guide:** `PORTFOLIO_SETUP.md`
- **Module Docs:** `src/modules/portfolio/README.md`
- **Architecture:** `NEXUS.md`

---

**Built with Next.js 15 + TypeScript + Tailwind CSS + Framer Motion**

**Challenge:** 30 Projects in 30 Days 🎯
