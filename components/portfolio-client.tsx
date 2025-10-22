"use client";

import { useState } from "react";
import { ProjectCard } from "./project-card";
import { Hero } from "./hero";
import { ContactForm } from "./contact-form";
import { Filter, Moon, Sun, Code2 } from "lucide-react";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string;
  github: string | null;
  demo: string | null;
  category: string;
};

const categories = [
  "All",
  "AI/ML",
  "Full Stack",
  "Web3",
  "DevOps",
  "Tools",
  "Backend",
  "Frontend",
  "Cloud",
  "IoT",
  "Data",
  "Mobile",
];

export function PortfolioClient({ projects }: { projects: Project[] }) {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const parsedProjects = projects.map((p) => ({
    ...p,
    tags: JSON.parse(p.tags),
  }));

  const filtered =
    selectedCategory === "All"
      ? parsedProjects
      : parsedProjects.filter((p) => p.category === selectedCategory);

  return (
    <div
      className={`min-h-screen transition-colors ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <header
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b"
        style={{
          backgroundColor: darkMode
            ? "rgba(3, 7, 18, 0.8)"
            : "rgba(249, 250, 251, 0.8)",
          borderColor: darkMode
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between">
          <div className="flex items-center gap-2">
            <Code2 className="w-6 h-6 text-blue-500" />
            <span className="font-bold text-xl">DevPortfolio</span>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
              }`}
            >
              <Filter className="w-5 h-5" />
            </button>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                darkMode ? "hover:bg-gray-800" : "hover:bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isFilterOpen && (
        <div
          className="fixed top-20 right-4 z-50 p-4 rounded-xl shadow-2xl backdrop-blur-xl border"
          style={{
            backgroundColor: darkMode
              ? "rgba(17, 24, 39, 0.95)"
              : "rgba(255, 255, 255, 0.95)",
            borderColor: darkMode
              ? "rgba(255, 255, 255, 0.1)"
              : "rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="flex flex-wrap gap-2 max-w-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsFilterOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                    : darkMode
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      <Hero darkMode={darkMode} />

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
              <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                {selectedCategory === "All" ? "All projects" : selectedCategory}{" "}
                ({filtered.length})
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                darkMode={darkMode}
                index={idx}
              />
            ))}
          </div>
        </div>
      </section>

      <ContactForm darkMode={darkMode} />

      <footer
        className={`py-8 px-4 border-t ${
          darkMode ? "border-gray-800" : "border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            © 2025 DevPortfolio. Built with Next.js 15, TypeScript, and Tailwind
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
