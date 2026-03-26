import BlogAdminForm from "@/components/BlogAdminForm";
import { getBlogs } from "@/lib/blog-store";

export default async function AdminBlogsPage() {
  const blogs = await getBlogs();

  return (
    <main className="min-h-screen bg-[#f7f2e8] py-14">
      <div className="max-w-6xl mx-auto px-6 space-y-8">
        <section className="bg-white rounded-[24px] border border-[#d9c7a1] shadow-sm p-6 md:p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-[#c79a2b] mb-3">
            Admin
          </p>
          <h1 className="text-4xl font-serif text-[#124b5a] mb-3">
            Blog Publisher
          </h1>
          <p className="text-gray-600 max-w-3xl leading-relaxed">
            Publish blog posts from a form instead of editing code manually. Set
            `BLOG_ADMIN_TOKEN` in your environment for proper protection before
            using this in production.
          </p>
        </section>

        <BlogAdminForm />

        <section className="bg-white rounded-[24px] border border-[#d9c7a1] shadow-sm p-6 md:p-8">
          <h2 className="text-2xl font-serif text-[#124b5a] mb-5">
            Existing Posts
          </h2>
          <div className="space-y-4">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="rounded-[18px] border border-[#e7d7b8] bg-[#fffaf1] p-4"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-[#c79a2b] mb-2">
                  {blog.category}
                </p>
                <h3 className="text-xl font-serif text-[#124b5a] mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  /blog/{blog.slug}
                </p>
                <p className="text-gray-600">{blog.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
