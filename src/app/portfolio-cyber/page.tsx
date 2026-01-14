import { ProjectGrid } from "@/modules/portfolio";
import { CyberpunkPortfolioHero } from "@/modules/portfolio/components/CyberpunkPortfolioHero";
import { getMockProjects } from "@/modules/portfolio/lib/mockProjects";
import "@/styles/cyberpunk-portfolio.css";

export const metadata = {
  title: "Cyberpunk Portfolio - Jordan Hill",
  description:
    "Electric neon cyberpunk portfolio showcasing production-ready web applications with high-energy aesthetics.",
};

async function getProjects() {
  const projects = await getMockProjects();
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.dayNumber - b.dayNumber;
  });
}

export default async function CyberpunkPortfolioPage() {
  const projects = await getProjects();

  // Calculate stats
  const totalProjects = projects.length;
  const completedDays = projects.length > 0
    ? Math.max(...projects.map((p) => p.dayNumber))
    : 0;
  const targetDays = 30;

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text">
      <CyberpunkPortfolioHero
        totalProjects={totalProjects}
        completedDays={completedDays}
        targetDays={targetDays}
      />

      <div id="projects" className="relative z-10">
        <ProjectGrid projects={projects} />
      </div>

      {/* Cyberpunk Footer */}
      <footer className="relative z-10 py-16 px-4 border-t border-cyber-cyan/20 bg-cyber-bg/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          {/* Terminal-style footer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyber-cyan mb-3 text-shadow-glow-cyan">
                System Info
              </h4>
              <p className="text-xs font-mono text-cyber-textMuted">
                <span className="text-cyber-cyan">&gt;</span> Portfolio v2.0.26<br />
                <span className="text-cyber-cyan">&gt;</span> Built with Next.js 15<br />
                <span className="text-cyber-cyan">&gt;</span> TypeScript + Tailwind<br />
                <span className="text-cyber-cyan">&gt;</span> Framer Motion
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyber-magenta mb-3 text-shadow-glow-magenta">
                Status
              </h4>
              <p className="text-xs font-mono text-cyber-textMuted">
                <span className="text-cyber-magenta">&gt;</span> Projects: <span className="text-cyber-lime">{totalProjects} ACTIVE</span><br />
                <span className="text-cyber-magenta">&gt;</span> Days: <span className="text-cyber-lime">{completedDays}/{targetDays}</span><br />
                <span className="text-cyber-magenta">&gt;</span> System: <span className="text-cyber-lime">OPERATIONAL</span><br />
                <span className="text-cyber-magenta">&gt;</span> Mode: <span className="text-cyber-cyan">CYBERPUNK</span>
              </p>
            </div>

            <div>
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyber-lime mb-3 text-shadow-glow-lime">
                Connect
              </h4>
              <div className="flex gap-3">
                {[
                  { label: 'GitHub', href: 'https://github.com' },
                  { label: 'LinkedIn', href: 'https://linkedin.com' },
                  { label: 'Twitter', href: 'https://twitter.com' },
                ].map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-cyber-cyan hover:text-cyber-magenta border border-cyber-cyan/30 hover:border-cyber-magenta px-3 py-1.5 rounded neon-glow-cyan hover:shadow-neon-magenta transition-all"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-cyber-cyan/20 pt-6 text-center">
            <p className="text-xs font-mono text-cyber-textMuted mb-2">
              <span className="text-cyber-cyan">&lt;/&gt;</span> © {new Date().getFullYear()} Jordan Hill
              <span className="text-cyber-magenta"> | </span>
              Production-ready applications solving real business problems
              <span className="text-cyber-lime animate-pulse"> █</span>
            </p>
            <p className="text-xs font-mono text-cyber-textMuted/50">
              [ELECTRIC CYBERPUNK NEON THEME ACTIVE]
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
