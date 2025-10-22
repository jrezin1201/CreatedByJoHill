import { prisma } from "@/lib/prisma";
import { PortfolioClient } from "@/components/portfolio-client";

export const revalidate = 60;

async function getProjects() {
  return await prisma.project.findMany({
    orderBy: [{ featured: "desc" }, { order: "asc" }, { createdAt: "desc" }],
  });
}

export default async function HomePage() {
  const projects = await getProjects();

  return <PortfolioClient projects={projects} />;
}
