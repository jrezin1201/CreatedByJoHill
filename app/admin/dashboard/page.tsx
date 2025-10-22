import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { AdminDashboard } from "@/components/admin-dashboard";

export default async function DashboardPage() {
  const session = await auth();

  if (!session || session.user?.role !== "admin") {
    redirect("/admin/login");
  }

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  });

  const contacts = await prisma.contactSubmission.findMany({
    orderBy: { createdAt: "desc" },
    take: 10,
  });

  return <AdminDashboard projects={projects} contacts={contacts} />;
}
