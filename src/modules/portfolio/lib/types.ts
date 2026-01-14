/**
 * Portfolio Module - Type Definitions
 *
 * TypeScript interfaces for the "Project a Day" challenge
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  dayNumber: number;        // Day 1-30 of challenge
  image: string;            // Project screenshot URL
  tags: string[];           // Tech stack: ["Next.js", "Stripe", "Tailwind"]
  githubUrl: string | null;
  liveUrl: string | null;
  category: string;         // "AI/ML", "Full Stack", "SaaS", etc.
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectCardProps {
  project: Project;
  index?: number;           // For staggered animations
}

export interface ProjectGridProps {
  projects: Project[];
  filterCategory?: string;
  sortBy?: 'dayNumber' | 'featured' | 'recent';
}

export interface PortfolioHeroProps {
  totalProjects: number;
  completedDays: number;
  targetDays?: number;      // Default: 30
}

export type ProjectCategory =
  | "AI/ML"
  | "Full Stack"
  | "SaaS"
  | "Mobile"
  | "DevOps"
  | "Web3"
  | "Data"
  | "Tools"
  | "Frontend"
  | "Backend";

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  "AI/ML",
  "Full Stack",
  "SaaS",
  "Mobile",
  "DevOps",
  "Web3",
  "Data",
  "Tools",
  "Frontend",
  "Backend"
];
