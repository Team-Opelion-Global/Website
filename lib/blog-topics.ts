import type { BlogPost } from "@/lib/blogs";

const topicAliases: Record<string, string[]> = {
  "market insights": ["market insights", "market trends"],
  "market trends": ["market insights", "market trends"],
  "quality control": ["quality control"],
  sustainability: ["sustainability"],
  trade: ["trade"],
  exports: ["exports", "export"],
  export: ["exports", "export"],
  sourcing: ["sourcing"],
};

export function normalizeTopic(value: string) {
  return value.trim().toLowerCase();
}

export function matchesTopic(blog: BlogPost, topic: string) {
  const normalizedTopic = normalizeTopic(topic);
  const normalizedCategory = normalizeTopic(blog.category);
  const acceptedCategories = topicAliases[normalizedTopic] ?? [normalizedTopic];

  return acceptedCategories.includes(normalizedCategory);
}

export function filterBlogsByTopic(blogs: BlogPost[], topic?: string) {
  if (!topic) return blogs;
  return blogs.filter((blog) => matchesTopic(blog, topic));
}
