// import { Card, CardContent } from "@/components/ui/card";
// import { Calendar, ChevronRight } from "lucide-react";
// import Link from "next/link";
// import Image from "next/image";
// import { getBlogs } from "@/lib/blog-store";
// import Footer from "@/components/Footer";
// import { filterBlogsByTopic, normalizeTopic } from "@/lib/blog-topics";

// export default async function BlogPage({
//   searchParams,
// }: {
//   searchParams?: Promise<{ topic?: string }>;
// }) {
//   const blogs = await getBlogs();
//   const resolvedSearchParams = searchParams ? await searchParams : undefined;
//   const topic = resolvedSearchParams?.topic?.trim();
//   const filteredBlogs = filterBlogsByTopic(blogs, topic);
//   const visibleBlogs = filteredBlogs.length > 0 ? filteredBlogs : blogs;
//   const normalizedTopic = topic ? normalizeTopic(topic) : "";

//   return (
//     <div className="min-h-screen bg-[#f5f3ef]">

//       {/* HEADER */}
//       <section className="py-20">
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

//           {/* LEFT */}
//           <div>
//             <p className="text-sm font-semibold tracking-widest text-[#F2B632] mb-3">
//               {topic ? "FILTERED ARTICLES" : "MARKET INSIGHTS"}
//             </p>

//             <h1 className="text-4xl font-extrabold text-[#1F7A8C]">
//               {topic ? `Blogs on ${topic}` : "Latest News & Blogs"}
//             </h1>
//             {topic ? (
//               <div className="mt-4 flex items-center gap-3">
//                 <p className="text-sm text-gray-600">
//                   Showing blogs related to <span className="font-medium text-[#124b5a]">{topic}</span>
//                 </p>
//                 <Link
//                   href="/blog"
//                   className="rounded-full border border-[#d9c7a1] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#8c5c38] transition hover:border-[#c79a2b] hover:text-[#124b5a]"
//                 >
//                   Clear Filter
//                 </Link>
//               </div>
//             ) : null}
//           </div>

//           {/* RIGHT BUTTON */}
//           <Link
//             href="/#blog"
//             className="border border-[#1F7A8C] text-[#1F7A8C] px-6 py-2 rounded-md font-medium hover:bg-[#1F7A8C] hover:text-white transition"
//           >
//             Back to Home →
//           </Link>

//         </div>
//       </section>

//       {/* BLOG GRID */}
//       <section className="pb-24">
//         <div className="max-w-7xl mx-auto px-6">

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {visibleBlogs.map((blog) => (
//               <Card
//                 key={blog.id}
//                 className="group relative rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition bg-white"
//               >
//                 <Link
//                   href={`/blog/${blog.slug}`}
//                   aria-label={blog.title}
//                   className="absolute inset-0 z-20"
//                 />

//                 {/* IMAGE */}
//                 <div className="relative h-[220px] w-full overflow-hidden">
//                   <Image
//                     src={blog.img}
//                     alt={blog.title}
//                     fill
//                     className="object-cover transition duration-500 group-hover:scale-105"
//                   />

//                   <Link
//                     href={`/blog?topic=${encodeURIComponent(blog.category)}`}
//                     className="absolute top-4 left-4 z-30 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1F7A8C] shadow-sm transition hover:text-[#c79a2b]"
//                   >
//                     {blog.category}
//                   </Link>
//                 </div>

//                 {/* CONTENT */}
//                 <CardContent className="relative z-10 p-5">

//                   {/* DATE */}
//                   <div className="flex items-center text-[13px] text-gray-500 mt-3 mb-2">
//                     <Calendar className="h-4 w-4 mr-2" />
//                     {blog.date}
//                   </div>

//                   {/* TITLE */}
//                   <h3 className="font-semibold text-[16px] text-[#1A1A1A] mb-2 leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#F2B632]">
//                     {blog.title}
//                   </h3>

//                   {/* DESCRIPTION */}
//                   <p className="text-gray-600 text-[14px] mb-3 leading-relaxed line-clamp-2">
//                     {blog.desc}
//                   </p>

//                   {/* CTA */}
//                   <div className="inline-flex items-center text-[#1F7A8C] text-[14px] font-medium transition group-hover:text-[#F2B632]">
//                     Read Article
//                     <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </div>

//                 </CardContent>

//               </Card>
//             ))}

//           </div>

//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// }

import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getBlogs } from "@/lib/blog-store";
import Footer from "@/components/Footer";
import { filterBlogsByTopic, normalizeTopic } from "@/lib/blog-topics";

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{ topic?: string }>;
}) {
  const blogs = await getBlogs();
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const topic = resolvedSearchParams?.topic?.trim();
  const filteredBlogs = filterBlogsByTopic(blogs, topic);
  const visibleBlogs = filteredBlogs.length > 0 ? filteredBlogs : blogs;
  const normalizedTopic = topic ? normalizeTopic(topic) : "";

  return (
    <div className="min-h-screen bg-[#f5f3ef]">

      {/* HEADER */}
      <section className="py-7 md:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 md:flex-row md:items-center md:justify-between md:gap-5">

          {/* LEFT */}
          <div>
            <p className="mt-2 mb-1.5 text-sm font-semibold tracking-widest text-[#F2B632] md:mt-0 md:mb-3">
              {topic ? "FILTERED ARTICLES" : "MARKET INSIGHTS"}
            </p>

            {/* <h1 className="text-4xl font-extrabold text-[#1F7A8C]">
              {topic ? `Blogs on ${topic}` : "Latest News & Blogs"}
            </h1> */}
                  <h1 className={`${playfair.className} text-[2rem] md:text-5xl font-semibold tracking-[0.02em] text-[#1F7A8C]`}>{topic ? `Blogs on ${topic}` : "Latest News & Blogs" }</h1>
            {topic ? (
              <div className="mt-4 flex items-center gap-3">
                <p className="text-sm text-gray-600">
                  Showing blogs related to <span className="font-medium text-[#124b5a]">{topic}</span>
                </p>
                <Link
                  href="/blog"
                  className="rounded-full border border-[#d9c7a1] bg-white px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-[#8c5c38] transition hover:border-[#c79a2b] hover:text-[#124b5a]"
                >
                  Clear Filter
                </Link>
              </div>
            ) : null}
          </div>

          {/* RIGHT BUTTON */}
          <Link
            href="/#blog"
            className="order-first w-fit rounded-md border border-[#1F7A8C] px-2.5 py-1 text-[13px] font-medium text-[#1F7A8C] transition hover:bg-[#1F7A8C] hover:text-white md:order-none lg:px-6 lg:py-2 lg:text-base"
          >
            Back to Home →
          </Link>

        </div>
      </section>

      {/* BLOG GRID */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {visibleBlogs.map((blog) => (
              <Card
                key={blog.id}
                className="group relative rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition bg-white"
              >
                <Link
                  href={`/blog/${blog.slug}`}
                  aria-label={blog.title}
                  className="absolute inset-0 z-20"
                />

                {/* IMAGE */}
                <div className="relative h-[220px] w-full overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <Link
                    href={`/blog?topic=${encodeURIComponent(blog.category)}`}
                    className="absolute top-4 left-4 z-30 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1F7A8C] shadow-sm transition hover:text-[#c79a2b]"
                  >
                    {blog.category}
                  </Link>
                </div>

                {/* CONTENT */}
                <CardContent className="relative z-10 p-5">

                  {/* DATE */}
                  <div className="flex items-center text-[13px] text-gray-500 mt-3 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {blog.date}
                  </div>

                  {/* TITLE */}
                  <h3 className="font-semibold text-[16px] text-[#1A1A1A] mb-2 leading-snug line-clamp-2 transition-colors duration-300 group-hover:text-[#F2B632]">
                    {blog.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-gray-600 text-[14px] mb-3 leading-relaxed line-clamp-2">
                    {blog.desc}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center text-[#1F7A8C] text-[14px] font-medium transition group-hover:text-[#F2B632]">
                    Read Article
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>

                </CardContent>

              </Card>
            ))}

          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
