import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting seed...");

  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || "admin123",
    10
  );

  const admin = await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@example.com" },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || "admin@example.com",
      name: "Admin",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.log("✅ Admin user created:", admin.email);

  const projectsData = [
    {
      title: "AI Code Review Assistant",
      description:
        "ML-powered code review tool that provides intelligent suggestions and catches bugs before they reach production.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
      tags: JSON.stringify(["Python", "TensorFlow", "FastAPI", "React"]),
      github: "https://github.com/yourusername/ai-code-review",
      demo: "https://demo.example.com",
      category: "AI/ML",
      featured: true,
      order: 1,
    },
    {
      title: "Real-time Collaboration Platform",
      description:
        "WebSocket-based collaborative workspace with live cursors, presence indicators, and conflict resolution.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      tags: JSON.stringify(["Next.js", "WebSocket", "Redis", "PostgreSQL"]),
      github: "https://github.com/yourusername/collab-platform",
      demo: "https://demo.example.com",
      category: "Full Stack",
      featured: true,
      order: 2,
    },
    {
      title: "Blockchain Analytics Dashboard",
      description:
        "Comprehensive analytics platform for tracking on-chain transactions and DeFi protocol metrics.",
      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
      tags: JSON.stringify(["React", "Web3.js", "D3.js", "Node.js"]),
      github: "https://github.com/yourusername/blockchain-analytics",
      demo: null,
      category: "Web3",
      featured: false,
      order: 3,
    },
  ];

  for (const projectData of projectsData) {
    const existing = await prisma.project.findFirst({
      where: { title: projectData.title },
    });

    if (!existing) {
      const project = await prisma.project.create({
        data: projectData,
      });
      console.log("✅ Project created:", project.title);
    } else {
      console.log("⏭️  Project already exists:", projectData.title);
    }
  }

  console.log("🎉 Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
