import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // Clear existing projects
  await prisma.project.deleteMany();
  console.log("✅ Cleared existing projects");

  // Seed portfolio projects
  const projects = await Promise.all([
    prisma.project.create({
      data: {
        title: "SaaS Starter Kit",
        description:
          "Full-stack SaaS boilerplate with authentication, billing, and admin panel. Features NextAuth.js for OAuth, Stripe for payments, and Prisma for database management.",
        dayNumber: 1,
        image: "/projects/saas-starter.png",
        tags: ["Next.js", "Stripe", "NextAuth", "Prisma", "TypeScript"],
        githubUrl: "https://github.com/yourusername/saas-starter",
        liveUrl: "https://saas-starter.demo",
        category: "Full Stack",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "AI Chat Interface",
        description:
          "Streaming chat application with Anthropic Claude integration. Real-time message streaming, conversation history, and prompt library with 50+ templates.",
        dayNumber: 2,
        image: "/projects/ai-chat.png",
        tags: ["Next.js", "AI", "Anthropic", "Streaming", "React"],
        githubUrl: "https://github.com/yourusername/ai-chat",
        liveUrl: "https://ai-chat.demo",
        category: "AI/ML",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "Task Management Dashboard",
        description:
          "Kanban-style project management tool with drag-and-drop functionality, team collaboration features, and real-time updates using WebSockets.",
        dayNumber: 3,
        image: "/projects/task-dashboard.png",
        tags: ["React", "TypeScript", "Tailwind", "DnD Kit", "WebSockets"],
        githubUrl: "https://github.com/yourusername/task-dashboard",
        liveUrl: "https://task-dashboard.demo",
        category: "SaaS",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "E-commerce Storefront",
        description:
          "Modern e-commerce platform with product catalog, shopping cart, Stripe checkout, and order management. Includes admin dashboard for inventory tracking.",
        dayNumber: 4,
        image: "/projects/ecommerce.png",
        tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind", "Vercel"],
        githubUrl: "https://github.com/yourusername/ecommerce",
        liveUrl: "https://ecommerce.demo",
        category: "Full Stack",
        featured: false,
      },
    }),

    prisma.project.create({
      data: {
        title: "Analytics Dashboard",
        description:
          "Real-time analytics dashboard with customizable widgets, chart visualizations, and data export capabilities. Built with Chart.js and D3.js.",
        dayNumber: 5,
        image: "/projects/analytics.png",
        tags: ["React", "Chart.js", "D3.js", "TypeScript", "Tailwind"],
        githubUrl: "https://github.com/yourusername/analytics",
        liveUrl: "https://analytics.demo",
        category: "Data",
        featured: true,
      },
    }),

    prisma.project.create({
      data: {
        title: "API Documentation Generator",
        description:
          "Automatic API documentation tool that reads OpenAPI/Swagger specs and generates beautiful, interactive documentation with code examples.",
        dayNumber: 6,
        image: "/projects/api-docs.png",
        tags: ["TypeScript", "OpenAPI", "Swagger", "MDX", "Next.js"],
        githubUrl: "https://github.com/yourusername/api-docs",
        liveUrl: "https://api-docs.demo",
        category: "Tools",
        featured: false,
      },
    }),

    prisma.project.create({
      data: {
        title: "Social Media Scheduler",
        description:
          "Multi-platform social media scheduling tool supporting Twitter, LinkedIn, and Instagram. Features content calendar, auto-posting, and analytics.",
        dayNumber: 7,
        image: "/projects/social-scheduler.png",
        tags: ["Next.js", "OAuth", "Cron", "PostgreSQL", "Redis"],
        githubUrl: "https://github.com/yourusername/social-scheduler",
        liveUrl: "https://social-scheduler.demo",
        category: "SaaS",
        featured: false,
      },
    }),

    prisma.project.create({
      data: {
        title: "Markdown Blog Engine",
        description:
          "Lightning-fast blog platform powered by MDX. Features syntax highlighting, SEO optimization, RSS feeds, and static site generation.",
        dayNumber: 8,
        image: "/projects/blog-engine.png",
        tags: ["Next.js", "MDX", "Tailwind", "SEO", "Static Generation"],
        githubUrl: "https://github.com/yourusername/blog-engine",
        liveUrl: "https://blog-engine.demo",
        category: "Frontend",
        featured: false,
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
