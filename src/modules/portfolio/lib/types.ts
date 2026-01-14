/**
 * Portfolio Module - Type Definitions
 *
 * TypeScript interfaces for the "Project a Day" challenge
 */

export interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;           // Short description for cards
  longDescription: string | null; // Longer description for detail pages
  dayNumber: number;              // Day 1-30 of challenge
  imageUrl: string;               // Project screenshot URL
  technologies: string[];         // Tech stack: ["Next.js", "Stripe", "Tailwind"]
  githubUrl: string | null;
  liveUrl: string | null;
  category: string;               // "AI/ML", "Full Stack", "SaaS", "FinTech", etc.
  impact: string | null;          // Problem solved / impact statement
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
  | "FinTech"
  | "Enterprise"
  | "Sports"
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
  "FinTech",
  "Enterprise",
  "Sports",
  "Mobile",
  "DevOps",
  "Web3",
  "Data",
  "Tools",
  "Frontend",
  "Backend"
];
