'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { projectSchema, type ProjectInput } from '@/lib/validations'
import { X } from 'lucide-react'

export function ProjectForm({ 
  project, 
  onClose 
}: { 
  project: any | null
  onClose: () => void 
}) {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ProjectInput>({
    resolver: zodResolver(projectSchema),
    defaultValues: project ? {
      ...project,
      tags: JSON.parse(project.tags)
    } : {
      tags: [],
      featured: false,
      order: 0
    }
  })

  const onSubmit = async (data: ProjectInput) => {
    try {
      const url = project ? `/api/projects/${project.id}` : '/api/projects'
      const method = project ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error('Failed to save')

      window.location.reload()
    } catch (error) {
      alert('Failed to save project')
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <div className="max-w-2xl w-full bg-gray-900 rounded-xl p-8 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{project ? 'Edit' : 'Add'} Project</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-800 rounded-lg">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
              {...register('title')}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Description (200 chars max)</label>
            <textarea
              {...register('description')}
              rows={3}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              {...register('image')}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="https://images.unsplash.com/..."
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
            <input
              {...register('tags', {
                setValueAs: (v) => v.split(',').map((t: string) => t.trim()).filter(Boolean)
              })}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="React, TypeScript, Next.js"
            />
            {errors.tags && <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              {...register('category')}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="AI/ML">AI/ML</option>
              <option value="Full Stack">Full Stack</option>
              <option value="Web3">Web3</option>
              <option value="DevOps">DevOps</option>
              <option value="Tools">Tools</option>
              <option value="Backend">Backend</option>
              <option value="Frontend">Frontend</option>
              <option value="Cloud">Cloud</option>
              <option value="IoT">IoT</option>
              <option value="Data">Data</option>
              <option value="Mobile">Mobile</option>
            </select>
            {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">GitHub URL (optional)</label>
              <input
                {...register('github')}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.github && <p className="text-red-500 text-sm mt-1">{errors.github.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Demo URL (optional)</label>
              <input
                {...register('demo')}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.demo && <p className="text-red-500 text-sm mt-1">{errors.demo.message}</p>}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register('featured')}
                className="w-5 h-5 rounded bg-gray-800 border-gray-700"
              />
              <span className="text-sm font-medium">Featured</span>
            </label>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2">Display Order</label>
              <input
                type="number"
                {...register('order', { valueAsNumber: true })}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-wh