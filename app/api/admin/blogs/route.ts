import { NextResponse } from "next/server";
import { createBlogPost } from "@/lib/blog-store";

type IncomingSection = {
  heading?: string;
  body?: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const token = request.headers.get("x-admin-token");
    const expectedToken = process.env.BLOG_ADMIN_TOKEN || "opelion-admin";

    if (token !== expectedToken) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sections = Array.isArray(body.sections)
      ? (body.sections as IncomingSection[])
          .map((section) => ({
            heading: section.heading?.trim() || "",
            body: section.body?.trim() || "",
          }))
          .filter((section) => section.heading && section.body)
      : [];

    if (
      !body.title?.trim() ||
      !body.category?.trim() ||
      !body.date?.trim() ||
      !body.img?.trim() ||
      !body.desc?.trim() ||
      !body.intro?.trim() ||
      sections.length === 0
    ) {
      return NextResponse.json(
        { error: "Missing required blog fields." },
        { status: 400 }
      );
    }

    const post = await createBlogPost({
      title: body.title.trim(),
      slug: body.slug?.trim() || "",
      img: body.img.trim(),
      date: body.date.trim(),
      category: body.category.trim(),
      desc: body.desc.trim(),
      intro: body.intro.trim(),
      sections,
    });

    return NextResponse.json({ post }, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create blog post.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
