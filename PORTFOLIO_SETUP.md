# Portfolio Setup Guide - "Project a Day" Challenge

## 🎉 Setup Complete!

Your portfolio module has been successfully integrated into The Nexus template. Here's everything you need to know.

---

## 📁 What Was Created

### New Module: `src/modules/portfolio/`

```
src/modules/portfolio/
├── components/
│   ├── ProjectCard.tsx       ✅ Card with "Day X" badge
│   ├── ProjectGrid.tsx       ✅ Responsive grid with filtering
│   └── PortfolioHero.tsx     ✅ Challenge stats & progress tracker
├── lib/
│   └── types.ts              ✅ TypeScript interfaces
├── index.ts                  ✅ Module exports
└── README.md                 ✅ Documentation
```

### Database Schema

Added `Project` model to `prisma/schema.prisma`:
- `dayNumber` - Day 1-30 of challenge
- `title`, `description`, `image`
- `tags[]` - Tech stack array
- `githubUrl`, `liveUrl`
- `category`, `featured`

### Routes

- **`/portfolio`** - Main showcase page with hero + project grid
- **`/`** - Updated landing page emphasizing portfolio challenge

### Seed Data

Created `prisma/seed.ts` with 8 example projects

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
cd template-of-nextojs
npm install
```

### 2. Setup Environment Variables

Create `.env` file:

```bash
# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio"

# NextAuth (generate with: openssl rand -base64 32)
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Optional: OAuth providers
# GITHUB_ID="..."
# GITHUB_SECRET="..."
```

### 3. Run Database Migrations

```bash
npm run db:generate
npm run db:migrate
```

### 4. Seed Example Projects

```bash
npx tsx prisma/seed.ts
```

Expected output:
```
🌱 Seeding database...
✅ Cleared existing projects
✅ Created 8 portfolio projects
🎉 Seeding completed!
```

### 5. Start Development Server

```bash
npm run dev
```

Visit: http://localhost:3000/portfolio

---

## 🎨 Features

### ProjectCard Component
- ✅ **"Day X of 30" badge** (top-right, purple gradient)
- ✅ Category badge (top-left)
- ✅ Tech stack tags (first 3 + overflow counter)
- ✅ GitHub + Live Demo buttons
- ✅ Click to expand modal with full details
- ✅ Framer Motion animations (fade-in-up, staggered)

### ProjectGrid Component
- ✅ Responsive grid (1/2/3 columns)
- ✅ Filter by category
- ✅ Sort by: Day Number, Featured, Recent
- ✅ Empty state design

### PortfolioHero Component
- ✅ Challenge progress (X/30 days)
- ✅ Total projects counter
- ✅ Progress percentage
- ✅ Animated progress bar
- ✅ Social media links
- ✅ CTA buttons

---

## ➕ Adding a New Project

### Option 1: Via Code

```typescript
import { prisma } from "@/lib/prisma";

await prisma.project.create({
  data: {
    title: "Your Project Name",
    description: "Detailed description of what it does...",
    dayNumber: 9,
    image: "/projects/your-image.png",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    githubUrl: "https://github.com/you/project",
    liveUrl: "https://project.demo",
    category: "Full Stack",
    featured: true,
  },
});
```

### Option 2: Via Prisma Studio

```bash
npm run db:studio
```

Opens a GUI at http://localhost:5555 to manage data visually.

---

## 🎯 Categories

Choose from these predefined categories (or add your own in `lib/types.ts`):

- AI/ML
- Full Stack
- SaaS
- Mobile
- DevOps
- Web3
- Data
- Tools
- Frontend
- Backend

---

## 🎨 Customization

### Change Target Days

Edit `src/app/portfolio/page.tsx`:

```typescript
const targetDays = 100; // Default: 30
```

### Modify Badge Colors

Edit `src/modules/portfolio/components/ProjectCard.tsx`:

```tsx
// Line 33: Day counter badge
className="bg-gradient-to-r from-purple-500 to-blue-500"
// Change to any gradient you prefer
```

### Add More Categories

Edit `src/modules/portfolio/lib/types.ts`:

```typescript
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI/ML",
  "Full Stack",
  "Your New Category", // Add here
];
```

---

## 🔄 Feature Flags

The portfolio module is controlled by `src/config/site-config.ts`:

```typescript
activeFeatures: [
  "portfolio",    // ← Toggle on/off
  "landing",
  // ... other features
]
```

**To disable catalog mode** (show only portfolio):

```typescript
isCatalog: false,  // Hides the module sidebar
activeFeatures: ["landing", "portfolio"],  // Only show these
```

---

## 📸 Adding Project Images

### Option 1: Public Folder

1. Add images to `public/projects/`
2. Reference: `image: "/projects/my-project.png"`

### Option 2: External URLs

```typescript
image: "https://your-cdn.com/project-screenshot.png"
```

### Recommended Image Specs

- **Dimensions:** 1200x630px (16:9 ratio)
- **Format:** PNG or JPG
- **Size:** < 500KB (optimized)

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import to Vercel
3. Add environment variables
4. Deploy

### Database: Neon PostgreSQL (Free)

1. Sign up at https://neon.tech
2. Create database
3. Copy connection string to `DATABASE_URL`

---

## 📊 Module Registry

Your portfolio is registered in `src/config/registry.ts`:

```typescript
portfolio: {
  id: "portfolio",
  name: "Project a Day Portfolio",
  description: "Professional portfolio showcase...",
  icon: "🎯",
  category: "Portfolio & Showcase",
  route: "/portfolio",
  tags: ["portfolio", "projects", "showcase", "challenge"],
  isNew: true,
}
```

This makes it appear in the **catalog sidebar** (if `isCatalog: true`).

---

## 🎁 Bonus: Keep All Modules

The Nexus template includes **14 production-ready modules**:

- **AI Intelligence** - Streaming chat with Claude/GPT
- **CRM** - Kanban board + client portal
- **Marketing Tools** - ROI calculator, countdown banners
- **Admin Panel** - User management, analytics
- **Fintech** - P&L statements, cap table visualizer
- **And 9 more...**

Toggle any module on/off in `site-config.ts` → `activeFeatures[]`.

---

## 📚 Documentation

- **Portfolio Module:** `src/modules/portfolio/README.md`
- **Architecture:** `NEXUS.md`
- **Module Catalog:** `MODULE_CATALOG.md`
- **Setup Guide:** `SETUP.md`

---

## 🆘 Troubleshooting

### "Module not found" errors

```bash
npm run db:generate
```

### Database connection errors

Check `.env` file has correct `DATABASE_URL`

### "Portfolio page not loading"

Ensure `"portfolio"` is in `activeFeatures[]` in `site-config.ts`

---

## 🎉 Next Steps

1. ✅ Add your own projects to the database
2. ✅ Replace example images with your screenshots
3. ✅ Update social links in `PortfolioHero.tsx`
4. ✅ Customize colors/branding to match your style
5. ✅ Deploy to Vercel
6. ✅ Share your challenge on Twitter/LinkedIn!

---

**Built with:**
- Next.js 15
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma
- PostgreSQL

**Module Status:** ✅ Production Ready

**Challenge:** 30 projects in 30 days

**Let's build! 🚀**
