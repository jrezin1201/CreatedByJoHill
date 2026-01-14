import { CyberpunkHero } from "@/components/cyberpunk/CyberpunkHero";
import { CyberpunkLayout } from "@/components/cyberpunk/CyberpunkLayout";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Cyberpunk Portfolio - Electric Neon Theme",
  description:
    "High-energy cyberpunk portfolio showcasing 30 production-ready projects built in 30 days.",
};

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: [{ featured: "desc" }, { dayNumber: "asc" }],
    });

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

export default async function CyberpunkPage() {
  const projects = await getProjects();

  // Calculate stats
  const totalProjects = projects.length;
  const completedDays = projects.length > 0
    ? Math.max(...projects.map((p) => p.dayNumber))
    : 0;
  const targetDays = 30;

  return (
    <CyberpunkLayout>
      <div className="min-h-screen bg-cyber-bg">
        <CyberpunkHero
          totalProjects={totalProjects}
          completedDays={completedDays}
          targetDays={targetDays}
        />

        {/* Projects Section (you can add your ProjectGrid here) */}
        <section id="projects" className="relative z-10 px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <h2
              className="text-4xl font-black text-cyber-cyan glitch mb-4"
              data-text="Projects Database"
            >
              Projects Database
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent mb-12"></div>

            {/* Add your ProjectGrid component here */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Example cyberpunk project card */}
              <div className="hud-card rounded-lg p-6 group cursor-pointer">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-cyber-cyan">DAY 01</span>
                    <span className="text-xs font-mono text-cyber-magenta">FEATURED</span>
                  </div>
                  <h3 className="text-xl font-bold text-cyber-text mb-2">
                    Project Name
                  </h3>
                  <p className="text-sm text-cyber-textMuted">
                    Project description goes here. Built with Next.js, TypeScript, and more.
                  </p>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <span className="px-2 py-1 text-xs font-mono bg-cyber-cyan/10 border border-cyber-cyan/30 rounded text-cyber-cyan">
                    Next.js
                  </span>
                  <span className="px-2 py-1 text-xs font-mono bg-cyber-magenta/10 border border-cyber-magenta/30 rounded text-cyber-magenta">
                    TypeScript
                  </span>
                </div>
              </div>

              {/* Add more project cards or use your ProjectGrid */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative z-10 px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-4xl font-black text-cyber-magenta glitch mb-4 text-center"
              data-text="Initialize Contact"
            >
              Initialize Contact
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-magenta to-transparent mb-12"></div>

            <div className="hud-card rounded-lg p-8 text-center">
              <p className="text-lg text-cyber-textMuted mb-6 font-mono">
                <span className="text-cyber-cyan">&gt;_</span> Ready to collaborate on your next project?
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:your@email.com"
                  className="cyber-btn rounded-lg"
                >
                  <span className="relative z-10">Send Message</span>
                </a>

                <a
                  href="/projects"
                  className="cyber-btn rounded-lg"
                  style={{
                    borderColor: "var(--cyber-magenta)",
                    color: "var(--cyber-magenta)",
                    boxShadow: "0 0 10px var(--glow-magenta)",
                  }}
                >
                  <span className="relative z-10">View Portfolio</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative z-10 py-12 px-4 border-t border-cyber-cyan/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-sm font-mono text-cyber-textMuted">
              <span className="text-cyber-cyan">&lt;/&gt;</span> Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion{" "}
              <span className="text-cyber-lime">█</span>
            </p>
            <p className="text-xs font-mono text-cyber-textMuted/60 mt-2">
              &copy; {new Date().getFullYear()} Electric Cyberpunk Portfolio - Part of the &quot;Project a Day&quot; challenge
            </p>
          </div>
        </footer>
      </div>
    </CyberpunkLayout>
  );
}
