# Portfolio Module

## Overview

The **Portfolio Module** is designed for developers documenting their "Project a Day" challenge. It provides a professional showcase with day counter badges, category filtering, and responsive project cards.

## Features

### Components

#### 1. **PortfolioHero**
- Challenge progress tracker (X/30 days complete)
- Animated stats cards (Days Complete, Total Projects, Progress %)
- Gradient progress bar with animation
- Social media links
- CTA buttons

#### 2. **ProjectCard**
- Prominent "Day X" badge (top-right, gradient purple-to-blue)
- Category badge (top-left)
- Tech stack tags (show first 3, "+N" for overflow)
- Hover effects with scale animation
- Click to expand modal with full details
- GitHub + Live Demo buttons
- Framer Motion animations (fade-in-up, staggered)

#### 3. **ProjectGrid**
- Responsive grid (1 col mobile, 2 tablet, 3 desktop)
- Category filtering with pills
- Sort by: Day Number, Featured, Recent
- Filter panel toggle
- Empty state design

## Usage

```tsx
import { PortfolioHero, ProjectGrid } from "@/modules/portfolio";

export default function PortfolioPage() {
  const projects = await getProjects(); // Fetch from DB

  return (
    <>
      <PortfolioHero
        totalProjects={projects.length}
        completedDays={15}
        targetDays={30}
      />
      <ProjectGrid projects={projects} />
    </>
  );
}
```

## Data Structure

Projects are stored in the database with this schema:

```prisma
model Project {
  id          String   @id @default(cuid())
  title       String
  description String   @db.Text
  dayNumber   Int      // Day 1-30 of challenge
  image       String
  tags        String[] // ["Next.js", "Stripe", "Tailwind"]
  githubUrl   String?
  liveUrl     String?
  category    String   // "AI/ML", "Full Stack", etc.
  featured    Boolean
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Adding a New Project

Simply insert a new record in the database (via admin panel or Prisma Studio):

```typescript
await prisma.project.create({
  data: {
    title: "SaaS Starter Kit",
    description: "Full-stack SaaS boilerplate with auth, billing, and admin panel",
    dayNumber: 15,
    image: "/projects/saas-starter.png",
    tags: ["Next.js", "Stripe", "NextAuth", "Prisma"],
    githubUrl: "https://github.com/username/saas-starter",
    liveUrl: "https://saas-starter.demo",
    category: "Full Stack",
    featured: true,
  },
});
```

## Categories

Available categories (defined in `lib/types.ts`):
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

## Customization

### Change Target Days
Edit `targetDays` prop in `PortfolioHero`:
```tsx
<PortfolioHero targetDays={100} />
```

### Modify Badge Colors
Edit gradient classes in `ProjectCard.tsx`:
```tsx
className="bg-gradient-to-r from-purple-500 to-blue-500"
// Change to:
className="bg-gradient-to-r from-green-500 to-blue-500"
```

### Add More Categories
Edit `PROJECT_CATEGORIES` in `lib/types.ts`:
```typescript
export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI/ML",
  "Full Stack",
  "Your New Category", // Add here
];
```

## Tech Stack

- **Next.js 15** - App Router, Server Components
- **Framer Motion** - Animations (card entrance, modal, progress bar)
- **Tailwind CSS** - Styling with dark mode support
- **Lucide React** - Icons
- **Prisma** - Database ORM
- **TypeScript** - Type safety

## Routes

- `/portfolio` - Main showcase page
- Individual project modals (click card to expand)

## Feature Flags

Enable/disable in `src/config/site-config.ts`:

```typescript
activeFeatures: [
  "portfolio", // Add this to enable
]
```

## Demo Data

See `prisma/seed.ts` for example seed data with 5 sample projects.

---

**Module Type:** Marketing & Showcase
**Category:** Portfolio
**Status:** ✅ Production Ready
