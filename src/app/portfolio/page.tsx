import { PortfolioHero, ProjectGrid } from "@/modules/portfolio";
import { getMockProjects } from "@/modules/portfolio/lib/mockProjects";

export const metadata = {
  title: "Featured Projects - Jordan Hill",
  description:
    "Production-ready web applications spanning fintech, SaaS, and data analytics. All projects are live and fully functional.",
};

async function getProjects() {
  // Using mock data - no database required!
  // To switch to database later, replace getMockProjects() with prisma.project.findMany()
  const projects = await getMockProjects();
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.dayNumber - b.dayNumber;
  });
}

export default async function PortfolioPage() {
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
            © {new Date().getFullYear()} Jordan Hill. Built with Next.js 15,
            TypeScript, Tailwind CSS, and Framer Motion.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            Production-ready applications solving real business problems
          </p>
        </div>
      </footer>
    </div>
  );
}
