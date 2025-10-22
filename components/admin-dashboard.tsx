"use client";

import { useState } from "react";
import { signOut } from "next-auth/react";
import { Plus, Edit, Trash2, LogOut, Mail } from "lucide-react";
import { ProjectForm } from "./project-form";

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string;
  category: string;
};

type Contact = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
  status: string;
};

export function AdminDashboard({
  projects,
  contacts,
}: {
  projects: Project[];
  contacts: Contact[];
}) {
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState<"projects" | "contacts">(
    "projects"
  );

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      window.location.reload();
    } catch (error) {
      alert("Failed to delete project");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 border-b border-gray-800">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "projects"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Projects ({projects.length})
          </button>
          <button
            onClick={() => setActiveTab("contacts")}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === "contacts"
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Contacts ({contacts.filter((c) => c.status === "new").length})
            </div>
          </button>
        </div>

        {activeTab === "projects" && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Manage Projects</h2>
              <button
                onClick={() => {
                  setShowForm(true);
                  setEditingProject(null);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors"
              >
                <Plus className="w-5 h-5" />
                Add Project
              </button>
            </div>

            {showForm && (
              <ProjectForm
                project={editingProject}
                onClose={() => {
                  setShowForm(false);
                  setEditingProject(null);
                }}
              />
            )}

            <div className="grid gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-6 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {project.description}
                    </p>
                    <div className="flex gap-2">
                      {JSON.parse(project.tags)
                        .slice(0, 3)
                        .map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-800 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setEditingProject(project);
                        setShowForm(true);
                      }}
                      className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "contacts" && (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className={`bg-gray-900 border rounded-lg p-6 ${
                  contact.status === "new"
                    ? "border-blue-500"
                    : "border-gray-800"
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold">{contact.name}</h3>
                    <p className="text-gray-400 text-sm">{contact.email}</p>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date(contact.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-300">{contact.message}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
