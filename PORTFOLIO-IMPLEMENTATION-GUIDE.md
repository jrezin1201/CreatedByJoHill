# Portfolio Copy - Implementation Guide

This guide shows exactly how to integrate the portfolio copy into your existing Next.js portfolio site.

---

## 1. Update Your Database (Prisma Schema)

Add these projects to your `prisma/seed.ts` or database:

```typescript
const projects = [
  {
    title: "DealQuary",
    slug: "dealquary",
    description: "Multi-Deal SaaS Subscription Calculator",
    longDescription: "Eliminates spreadsheet chaos for SaaS sales teams with precise MRR/ARR calculations, deal modeling, and automated SOW generation.",
    technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "https://dealquary.app",
    githubUrl: "https://github.com/yourusername/dealquary", // Update with actual
    imageUrl: "/projects/dealquary-screenshot.png",
    featured: true,
    category: "SaaS",
    dayNumber: 1,
    impact: "Transforms complex B2B pricing into clear financial intelligence",
  },
  {
    title: "Macro Finance Dashboard",
    slug: "macro-finance-dashboard",
    description: "Investment Intelligence Platform",
    longDescription: "Synthesizes Federal Reserve economic data into actionable investment insights with macro regime detection, equity analysis, and Bitcoin correlations.",
    technologies: ["Next.js", "TypeScript", "FRED API", "Recharts", "Tailwind CSS"],
    liveUrl: "https://clever-cocada-634d6f.netlify.app/guide",
    githubUrl: "https://github.com/yourusername/finance-dashboard",
    imageUrl: "/projects/finance-dashboard-screenshot.png",
    featured: true,
    category: "FinTech",
    dayNumber: 2,
    impact: "Democratizes institutional-grade macro analysis for retail investors",
  },
  {
    title: "Dot Fulfillment",
    slug: "dot-fulfillment",
    description: "Kit Manufacturing Management System",
    longDescription: "End-to-end operations platform managing components, BOMs, project quotes, and SOW generation for kit-based manufacturing businesses.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PDF Export", "PostgreSQL"],
    liveUrl: "https://fulfillment-app-proj.netlify.app/",
    githubUrl: "https://github.com/yourusername/dot-fulfillment",
    imageUrl: "/projects/dot-fulfillment-screenshot.png",
    featured: true,
    category: "Enterprise",
    dayNumber: 3,
    impact: "Reduces quote turnaround from days to minutes",
  },
  {
    title: "RetireRight",
    slug: "retireright",
    description: "Retirement Planning Calculator",
    longDescription: "Calculates when you can retire using compound growth, inflation adjustments, and the 4% withdrawal rule—with beautiful visualizations.",
    technologies: ["Next.js", "TypeScript", "Recharts", "Financial Modeling", "Tailwind CSS"],
    liveUrl: "https://retire-cf-planner.vercel.app/",
    githubUrl: "https://github.com/yourusername/retireright",
    imageUrl: "/projects/retireright-screenshot.png",
    featured: true,
    category: "FinTech",
    dayNumber: 4,
    impact: "Makes complex retirement planning accessible without expensive advisors",
  },
  {
    title: "Football Stats Pro",
    slug: "football-stats-pro",
    description: "Live Sports Analytics Platform",
    longDescription: "Real-time NFL & NCAA scores with AI-powered win predictions, weather impact analysis, and comprehensive team stats—auto-refreshing every 60 seconds.",
    technologies: ["Next.js", "TypeScript", "ESPN API", "AI Algorithms", "Open-Meteo"],
    liveUrl: "https://gambleandgrumble.netlify.app/",
    githubUrl: "https://github.com/yourusername/football-stats-pro",
    imageUrl: "/projects/football-stats-screenshot.png",
    featured: true,
    category: "Sports",
    dayNumber: 5,
    impact: "Consolidates fragmented sports data into predictive intelligence",
  },
];
```

---

## 2. Update Portfolio Hero Section

Update `src/modules/portfolio/components/PortfolioHero.tsx`:

```typescript
export function PortfolioHero({ totalProjects, completedDays, targetDays }: Props) {
  return (
    <section className="relative py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Featured Projects
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          I build production-ready web applications that solve real business problems.
          From financial analytics to enterprise operations, each project combines modern
          tech stacks, clean architecture, and exceptional UX. All projects below are
          live and fully functional.
        </p>

        {/* Stats section */}
        <div className="flex justify-center gap-8 mt-12">
          <GlassCard>
            <AnimatedCounter end={totalProjects} />
            <p className="text-sm text-muted-foreground">Live Projects</p>
          </GlassCard>
          <GlassCard>
            <AnimatedCounter end={completedDays} />
            <p className="text-sm text-muted-foreground">Days Building</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
```

---

## 3. Enhanced Project Card Component

Create `src/modules/portfolio/components/EnhancedProjectCard.tsx`:

```typescript
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/effects";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string;
  imageUrl: string;
  featured: boolean;
  impact: string;
  category: string;
}

export function EnhancedProjectCard({
  title,
  description,
  longDescription,
  technologies,
  liveUrl,
  githubUrl,
  imageUrl,
  featured,
  impact,
  category,
}: ProjectCardProps) {
  return (
    <GlassCard hover glowColor="purple" className="p-6 h-full flex flex-col">
      {/* Category Badge */}
      {featured && (
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
            FEATURED
          </span>
          <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
            {category}
          </span>
        </div>
      )}

      {/* Project Image */}
      <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10">
        {/* Placeholder - replace with actual screenshot */}
        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
          Screenshot
        </div>
      </div>

      {/* Title & Subtitle */}
      <div className="mb-3">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-purple-300 font-medium">{description}</p>
      </div>

      {/* Long Description */}
      <p className="text-muted-foreground mb-4 flex-grow">
        {longDescription}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-muted-foreground mb-2">TECH STACK</p>
        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-white/5 text-xs rounded border border-white/10"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="px-2 py-1 bg-white/5 text-xs rounded border border-white/10">
              +{technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Impact */}
      <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg mb-4">
        <p className="text-sm text-green-300 flex items-start gap-2">
          <span className="text-green-400 mt-0.5">✓</span>
          <span><strong>Impact:</strong> {impact}</span>
        </p>
      </div>

      {/* CTAs */}
      <div className="flex gap-3">
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            aria-label="View source code"
          >
            <Github className="w-5 h-5" />
          </a>
        )}
      </div>

      {/* Learn More Link */}
      <Link
        href={`/projects/${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="mt-3 text-sm text-purple-300 hover:text-purple-200 flex items-center gap-1 group"
      >
        Learn more about this project
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </GlassCard>
  );
}
```

---

## 4. Update Portfolio Page

Update `src/app/portfolio/page.tsx`:

```typescript
import { EnhancedProjectCard } from "@/modules/portfolio/components/EnhancedProjectCard";
import { PortfolioHero } from "@/modules/portfolio/components/PortfolioHero";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Featured Projects - Jordan Hill",
  description: "Production-ready web applications spanning fintech, SaaS, and data analytics",
};

async function getProjects() {
  const projects = await prisma.project.findMany({
    where: { featured: true },
    orderBy: { dayNumber: "asc" },
  });
  return projects;
}

export default async function PortfolioPage() {
  const projects = await getProjects();
  const totalProjects = projects.length;
  const completedDays = Math.max(...projects.map(p => p.dayNumber));

  return (
    <div className="min-h-screen">
      <PortfolioHero
        totalProjects={totalProjects}
        completedDays={completedDays}
        targetDays={30}
      />

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <EnhancedProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              longDescription={project.longDescription || ""}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl || undefined}
              imageUrl={project.imageUrl}
              featured={project.featured}
              impact={project.impact || ""}
              category={project.category || "Web App"}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to bring this same approach to your next project?
        </h2>
        <p className="text-muted-foreground mb-8">
          Each project represents a complete solution—from concept and architecture
          to design, development, and deployment. Let's build something great together.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="mailto:your@email.com"
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
          >
            Schedule a Call
          </a>
          <a
            href="/resume.pdf"
            className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
          >
            View Full Resume
          </a>
        </div>
      </section>
    </div>
  );
}
```

---

## 5. Add Individual Project Detail Pages

Create `src/app/projects/[slug]/page.tsx`:

```typescript
import { notFound } from "next/navigation";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { prisma } from "@/lib/prisma";

interface Props {
  params: {
    slug: string;
  };
}

async function getProject(slug: string) {
  const project = await prisma.project.findUnique({
    where: { slug },
  });
  return project;
}

export async function generateMetadata({ params }: Props) {
  const project = await getProject(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Jordan Hill`,
    description: project.longDescription || project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const project = await getProject(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-2 text-purple-300 hover:text-purple-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-semibold rounded-full">
                FEATURED
              </span>
            )}
          </div>

          <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-xl text-purple-300 mb-4">{project.description}</p>

          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Live Demo
            </a>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Screenshot */}
        <div className="aspect-video w-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-lg mb-8">
          {/* Add actual screenshot here */}
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2>About This Project</h2>
          <p className="text-lg">{project.longDescription}</p>

          <h2>Problem Solved</h2>
          <p>{project.impact}</p>

          <h2>Technologies Used</h2>
          <div className="flex flex-wrap gap-2 not-prose">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/10 rounded border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <h2>Key Features</h2>
          <ul>
            {/* Add specific features per project */}
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
```

---

## 6. Update Prisma Schema

Add new fields to `prisma/schema.prisma`:

```prisma
model Project {
  id              String   @id @default(cuid())
  title           String
  slug            String   @unique
  description     String   // Short description
  longDescription String?  @db.Text // Longer description for detail pages
  technologies    String[]
  liveUrl         String
  githubUrl       String?
  imageUrl        String
  featured        Boolean  @default(false)
  category        String   @default("Web App")
  dayNumber       Int
  impact          String?  @db.Text // New field for "Problem Solved"
  createdAt       DateTime @default(now())
  updatedAt       DateTime @updatedAt

  @@index([featured])
  @@index([dayNumber])
}
```

Run migration:
```bash
npx prisma migrate dev --name add_project_fields
```

---

## 7. Quick Start Checklist

- [ ] Copy project data from step 1 into your seed file
- [ ] Run `npx prisma migrate dev` to add new fields
- [ ] Run `npx prisma db seed` to populate database
- [ ] Update PortfolioHero component with new intro copy
- [ ] Create EnhancedProjectCard component
- [ ] Update portfolio page to use new components
- [ ] Add project detail pages (optional but recommended)
- [ ] Take screenshots of each live project
- [ ] Add screenshots to `/public/projects/` folder
- [ ] Update GitHub URLs when repos are public
- [ ] Test all links and CTAs
- [ ] Deploy to Vercel/Netlify

---

## 8. Pro Tips

### Screenshots
Take high-quality screenshots of each project:
- Use https://screely.com or https://shots.so for beautiful browser mockups
- Capture the hero/dashboard section
- Use consistent dimensions (1200x800px recommended)
- Save as WebP for performance

### GitHub Repos
If repos are private, you can:
- Make them public after code review
- Create a separate "portfolio-demos" repo with sanitized code
- Link to a Gist with code snippets
- Or omit the GitHub link entirely

### Analytics
Add event tracking to CTAs:
```typescript
onClick={() => {
  // Track with your analytics tool
  analytics.track('project_cta_clicked', {
    project: title,
    cta_type: 'live_demo'
  });
}}
```

---

## Next Steps

1. Review both copy files (PORTFOLIO-COPY.md and PORTFOLIO-COPY-SHORT.md)
2. Choose the version that fits your portfolio best
3. Follow this implementation guide to integrate into your codebase
4. Take screenshots of all projects
5. Test thoroughly on mobile and desktop
6. Deploy and share!

**Need help?** Let me know if you want me to implement any of these components directly into your codebase.
