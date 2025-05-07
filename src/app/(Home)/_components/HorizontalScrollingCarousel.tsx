"use client";

import React, { useEffect, useRef, useState } from "react";
import useBlogStore from "@/store/BlogStore";
import { Blog } from "@/types/Blog";
import { useScroll, useTransform, motion } from "framer-motion";
import { Calendar, Clock, User } from "lucide-react";
import { format, parseISO } from "date-fns";

// Utility: Calculate read time
const calculateReadTime = (content: string): number => {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
};

// BlogCard Component
const BlogCard = ({ blog, index }: { blog: Blog; index: number }) => {
  const formattedDate = format(parseISO(blog.createdAt), "MMM d, yyyy");
  const delay = index * 0.1;
  const readTime = calculateReadTime(blog.content);

  const categoryColors: Record<string, string> = {
    Technology: "bg-blue-100 text-blue-800",
    Design: "bg-purple-100 text-purple-800",
    Productivity: "bg-green-100 text-green-800",
    Marketing: "bg-orange-100 text-orange-800",
    Business: "bg-yellow-100 text-yellow-800",
  };

  const category = blog.Category?.name || "Uncategorized";
  const categoryColor = categoryColors[category] || "bg-gray-100 text-gray-800";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeInOut",
      }}
      className="flex flex-col overflow-hidden rounded-lg shadow-lg bg-white h-[450px] w-[350px] flex-shrink-0"
    >
      <div className="relative overflow-hidden h-[200px]">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="h-full w-full"
        >
          <img
            src={blog.url}
            alt={blog.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="absolute top-4 left-4">
          <span
            className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryColor}`}
          >
            {category}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-grow p-6">
        <motion.h3
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
          className="text-xl font-bold mb-2 h-[56px] line-clamp-2"
        >
          {blog.title}
        </motion.h3>

        <div className="mt-5 pt-4 border-t border-gray-200">
          <div className="flex items-center">
            <img
              src="/default-avatar.png"
              alt="Author"
              className="h-8 w-8 rounded-full mr-2 object-cover"
            />
            <span className="text-sm text-gray-700 flex items-center">
              <User size={14} className="mr-1" />
              Author Name
            </span>
          </div>

          <div className="flex items-center justify-between mt-2 text-sm text-gray-500">
            <span className="flex items-center">
              <Calendar size={14} className="mr-1" />
              {formattedDate}
            </span>
            <span className="flex items-center">
              <Clock size={14} className="mr-1" />
              {readTime} min read
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-40%"]);

  return (
    <section>
      <div ref={targetRef} className="relative h-[300vh]">
        <div className="h-screen sticky top-0 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-10 px-10">
            {blogs.map((item, idx) => (
              <BlogCard key={item.id} blog={item} index={idx} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
