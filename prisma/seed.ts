import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing projects
  await prisma.project.deleteMany();
  console.log("✅ Cleared existing projects");

  // Seed portfolio projects with your actual live projects
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "DealQuary",
        slug: "dealquary",
        description: "Multi-Deal SaaS Subscription Calculator",
        longDescription:
          "A financial intelligence platform that empowers SaaS sales teams to model complex subscription deals with precision. DealQuary calculates MRR, ARR, contract terms, discounts, CAC/LTV ratios, and generates professional statements of work—all in a modern, intuitive interface.",
        dayNumber: 1,
        imageUrl: "/projects/dealquary.png",
        technologies: ["Next.js", "TypeScript", "Prisma", "Stripe", "PostgreSQL", "Tailwind CSS"],
        githubUrl: null, // Set to your GitHub URL when ready
        liveUrl: "https://dealquary.app",
        category: "SaaS",
        impact: "Transforms complex B2B pricing into clear financial intelligence, eliminating spreadsheet chaos for sales teams",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "Macro Finance Dashboard",
        slug: "macro-finance-dashboard",
        description: "Investment Intelligence Platform",
        longDescription:
          "An advanced financial analytics dashboard that transforms Federal Reserve economic data into actionable investment insights. The platform synthesizes macro indicators, equity breadth, credit stress, Bitcoin analysis, and market correlations into a unified risk framework for portfolio management.",
        dayNumber: 2,
        imageUrl: "/projects/finance-dashboard.png",
        technologies: ["Next.js", "TypeScript", "FRED API", "Recharts", "Chart.js", "Tailwind CSS"],
        githubUrl: null,
        liveUrl: "https://clever-cocada-634d6f.netlify.app/guide",
        category: "FinTech",
        impact: "Democratizes institutional-grade macro analysis by consolidating 50+ economic indicators into simple, visual dashboards for retail investors",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "Dot Fulfillment",
        slug: "dot-fulfillment",
        description: "Kit Manufacturing Management System",
        longDescription:
          "A full-featured operations management system designed for kit-based manufacturing businesses. Dot Fulfillment manages component libraries, bill of materials (BOM) configurations, project quoting, and generates professional SOWs with detailed pricing breakdowns—streamlining the entire quote-to-fulfillment workflow.",
        dayNumber: 3,
        imageUrl: "/projects/dot-fulfillment.png",
        technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "PDF Generation", "Tailwind CSS"],
        githubUrl: null,
        liveUrl: "https://fulfillment-app-proj.netlify.app/",
        category: "Enterprise",
        impact: "Reduces quote turnaround time from days to minutes by replacing fragmented spreadsheets with an integrated system",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "RetireRight",
        slug: "retireright",
        description: "Retirement Planning Calculator",
        longDescription:
          "A sophisticated retirement calculator that answers the critical question: 'When can I retire?' RetireRight uses compound growth modeling, inflation adjustments, the 4% safe withdrawal rule, and tax calculations to provide accurate, personalized retirement projections with visual portfolio growth charts.",
        dayNumber: 4,
        imageUrl: "/projects/retireright.png",
        technologies: ["Next.js", "TypeScript", "Recharts", "Financial Modeling", "Tailwind CSS"],
        githubUrl: null,
        liveUrl: "https://retire-cf-planner.vercel.app/",
        category: "FinTech",
        impact: "Makes complex retirement planning accessible to everyone without requiring expensive financial advisor consultations",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "Football Stats Pro",
        slug: "football-stats-pro",
        description: "Live Sports Analytics Platform",
        longDescription:
          "A live sports analytics platform that aggregates real-time NFL and NCAA football scores, generates AI-powered win probability predictions, and provides comprehensive team analytics. The dashboard auto-refreshes every 60 seconds during live games and integrates weather data for enhanced predictions.",
        dayNumber: 5,
        imageUrl: "/projects/football-stats.png",
        technologies: ["Next.js", "TypeScript", "ESPN API", "AI Algorithms", "Open-Meteo", "Tailwind CSS"],
        githubUrl: null,
        liveUrl: "https://gambleandgrumble.netlify.app/",
        category: "Sports",
        impact: "Consolidates fragmented sports data into a single, real-time dashboard with predictive analytics",
        featured: true,
      },
    }),
  ]);

  console.log(`✅ Created ${projects.length} portfolio projects`);
  console.log("🎉 Seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
