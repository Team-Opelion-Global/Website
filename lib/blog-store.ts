import { promises as fs } from "fs";
import path from "path";
import { unstable_noStore as noStore } from "next/cache";
import type { BlogPost } from "@/lib/blogs";

const blogsFilePath = path.join(process.cwd(), "data", "blogs.json");

export async function getBlogs(): Promise<BlogPost[]> {
  noStore();
  const file = await fs.readFile(blogsFilePath, "utf8");
  const blogs = JSON.parse(file) as BlogPost[];
  return blogs.sort((a, b) => b.id - a.id);
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | undefined> {
  const blogs = await getBlogs();
  return blogs.find((blog) => blog.slug === slug);
}

export async function createBlogPost(
  input: Omit<BlogPost, "id" | "slug"> & { slug?: string }
): Promise<BlogPost> {
  const blogs = await getBlogs();
  const slug = sanitizeSlug(input.slug || input.title);

  if (blogs.some((blog) => blog.slug === slug)) {
    throw new Error("A blog with this slug already exists.");
  }

  const nextId = blogs.length > 0 ? Math.max(...blogs.map((blog) => blog.id)) + 1 : 1;
  const nextPost: BlogPost = {
    id: nextId,
    slug,
    img: input.img,
    date: input.date,
    category: input.category,
    title: input.title,
    desc: input.desc,
    intro: input.intro,
    sections: input.sections,
  };

  const updatedBlogs = [nextPost, ...blogs];
  await fs.writeFile(blogsFilePath, JSON.stringify(updatedBlogs, null, 2), "utf8");
  return nextPost;
}

export function sanitizeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
