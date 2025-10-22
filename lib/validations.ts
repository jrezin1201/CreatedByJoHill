import { z } from "zod";

export const projectSchema = z.object({
  title: z.string().min(1, "Title is required").max(100),
  description: z.string().min(1, "Description is required").max(200),
  longDesc: z.string().optional(),
  image: z.string().url("Must be a valid URL"),
  tags: z.array(z.string()).min(1, "At least one tag required"),
  github: z.string().url().optional().or(z.literal("")),
  demo: z.string().url().optional().or(z.literal("")),
  category: z.string().min(1, "Category is required"),
  featured: z.boolean().default(false),
  order: z.number().int().default(0),
});

export const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000),
});

export type ProjectInput = z.infer<typeof projectSchema>;
export type ContactInput = z.infer<typeof contactSchema>;
