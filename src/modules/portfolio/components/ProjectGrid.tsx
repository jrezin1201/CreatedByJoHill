"use client";

import { useState, useMemo } from "react";
import { ProjectCard } from "./ProjectCard";
import { Filter, Grid3x3 } from "lucide-react";
import type { ProjectGridProps } from "../lib/types";
import { PROJECT_CATEGORIES } from "../lib/types";

export function ProjectGrid({
  projects,
  filterCategory = "All",
  sortBy = "dayNumber",
}: ProjectGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(filterCategory);
  const [selectedSort, setSelectedSort] = useState(sortBy);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered =
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory);

    // Sort
    if (selectedSort === "dayNumber") {
      filtered = [...filtered].sort((a, b) => a.dayNumber - b.dayNumber);
    } else if (selectedSort === "featured") {
      filtered = [...filtered].sort((a, b) =>
        a.featured === b.featured ? 0 : a.featured ? -1 : 1
      );
    } else if (selectedSort === "recent") {
      filtered = [...filtered].sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return filtered;
  }, [projects, selectedCategory, selectedSort]);

  const categories = ["All", ...PROJECT_CATEGORIES];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with Filters */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-2">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">
              {selectedCategory === "All" ? "All projects" : selectedCategory} (
              {filteredProjects.length})
            </p>
          </div>

          {/* Filter & Sort Controls */}
          <div className="flex gap-3">
            {/* Sort Dropdown */}
            <select
              value={selectedSort}
              onChange={(e) => setSelectedSort(e.target.value as "dayNumber" | "featured" | "recent")}
              className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium hover:border-gray-300 dark:hover:border-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="dayNumber">Day Number</option>
              <option value="featured">Featured</option>
              <option value="recent">Recent</option>
            </select>

            {/* Filter Button */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            >
              <Filter className="w-4 h-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {isFilterOpen && (
          <div className="mb-8 p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50">
            <h3 className="text-sm font-semibold mb-3 uppercase tracking-wide">
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/50"
                      : "bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Grid3x3 className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-700" />
            <p className="text-lg text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
