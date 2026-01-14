import { PortfolioHero, ProjectGrid } from "@/modules/portfolio";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Portfolio - Project a Day Challenge",
  description:
    "Building 30 production-ready projects in 30 days. Each project showcases different technologies and problem-solving approaches.",
};

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { dayNumber: "asc" }],
    });

    // Convert to plain objects for client components
    return projects.map((project) => ({
      ...project,
      createdAt: project.createdAt,
      updatedAt: project.updatedAt,
    }));
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
}

export default async function HomePage() {
  const projects = await getProjects();

  // Calculate stats
  const totalProjects = projects.length;
  const completedDays = projects.length > 0
    ? Math.max(...projects.map((p) => p.dayNumber))
    : 0;
  const targetDays = 30;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <PortfolioHero
        totalProjects={totalProjects}
        completedDays={completedDays}
        targetDays={targetDays}
      />
      <div id="projects">
        <ProjectGrid projects={projects} />
      </div>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Portfolio. Built with Next.js 15,
            TypeScript, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Part of the "Project a Day" challenge
          </p>
        </div>
      </footer>
    </div>
  );
}
