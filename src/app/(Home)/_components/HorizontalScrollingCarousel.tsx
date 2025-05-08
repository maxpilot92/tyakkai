"use client";

import React, { useEffect, useRef, useState } from "react";
import useBlogStore from "@/store/BlogStore";
import { Blog } from "@/types/Blog";
import { useScroll, useTransform, motion } from "framer-motion";
import { format, parseISO } from "date-fns";
import Image from "next/image";

function BlogLayout({ blog }: { blog: Blog }) {
  // Extract first paragraph as excerpt
  const excerpt =
    blog.content.split('<p class="blog-paragraph">')[1]?.split("</p>")[0] ||
    "Discover the latest insights in digital marketing and AI tools.";

  return (
    <div
      className="w-3xl h-[412px] p-8 border border-black/10 flex flex-col md:flex-row gap-8 rounded-3xl group bg-[#faf0e6] hover:shadow-lg transition-all duration-300"
      style={{
        boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
        borderColor: "rgba(0,0,0,0.08)",
      }}
    >
      {/* Image Section */}
      <div className="md:w-1/2 h-full rounded-2xl relative overflow-hidden">
        <Image
          src={blog.url || "/placeholder.jpg"}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-112"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="md:w-1/2 h-full flex flex-col justify-between py-2">
        <div>
          {/* Date + Category */}
          <div className="flex gap-3 items-center mb-4">
            <span className="text-xs font-medium text-black/60">
              {format(parseISO(blog.createdAt), "dd MMM, yyyy")}
            </span>
            {blog.Category && (
              <span
                className="text-xs font-medium px-3 py-1 rounded-full"
                style={{
                  backgroundColor: "rgba(255, 199, 0, 0.15)",
                  color: "rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(255, 199, 0, 0.3)",
                }}
              >
                {blog.Category.name.toUpperCase()}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-black/90 mb-3 leading-tight">
            {blog.title}
          </h2>

          {/* Excerpt */}
          <p className="text-black/60 line-clamp-3 mb-4 leading-relaxed">
            {excerpt.replace(/<[^>]*>?/gm, "")}
          </p>
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white overflow-hidden border border-black/10">
              <div
                className="w-full h-full flex items-center justify-center text-xs font-medium"
                style={{
                  color: "rgba(255, 199, 0, 0.9)",
                  backgroundColor: "rgba(0,0,0,0.9)",
                }}
              >
                AI
              </div>
            </div>
            <span className="text-sm text-black/70">AI Tools Guide</span>
          </div>
          <button
            className="flex items-center gap-1 font-medium transition-all hover:underline hover:cursor-pointer"
            style={{ color: "rgba(0,0,0,0.9)" }}
          >
            Read More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              style={{ color: "rgba(255, 199, 0, 0.9)" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
// HorizontalScrollingCarousel Component
export default function HorizontalScrollingCarousel() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const { blog } = useBlogStore();
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useEffect(() => {
    if (blog.length > 0) {
      setBlogs(blog);
    }
  }, [blog]);

  // Adjust the transform to ensure proper scrolling coverage
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section className="relative lg:-mt-10 lg:-mx-6">
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="h-screen sticky top-0 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-8 px-8">
            {blogs.map((item) => (
              <BlogLayout key={item.id} blog={item} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
