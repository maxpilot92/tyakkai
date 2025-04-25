"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CalendarIcon, User2Icon } from "lucide-react";
import axios from "axios";

type Blog = {
  id: string;
  title: string;
  content: string;
  published: boolean;
  tags: string[];
  url?: string;
  createdAt: string;
  User?: {
    id: string;
    name: string;
  };
};

export function BlogGrid() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        console.log(process.env.NEXT_PUBLIC_API_URL);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blog`,
          {
            withCredentials: true,
          }
        );
        const data = response.data;
        console.log("Response:", response);

        if (data.status === "success") {
          setBlogs(data.data.filter((blog: Blog) => blog.published));
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <Skeleton className="h-48 w-full" />
            <CardHeader>
              <Skeleton className="h-6 w-3/4" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-4 w-1/3" />
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <p className="text-center text-muted-foreground">No blog posts found.</p>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <Link
          href={`/blog/${blog.id}`}
          key={blog.id}
          className="transition-transform hover:scale-[1.02]"
        >
          <Card className="h-full overflow-hidden flex flex-col">
            <div className="relative h-48 w-full">
              <Image
                src={blog.url || `/placeholder.svg?height=300&width=500`}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <CardHeader>
              <CardTitle className="line-clamp-2">{blog.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <div
                className="line-clamp-3 text-muted-foreground mb-4"
                dangerouslySetInnerHTML={{
                  __html:
                    stripHtml(blog.content).substring(0, 150) +
                    (blog.content.length > 150 ? "..." : ""),
                }}
              />
              <div className="flex flex-wrap gap-2">
                {blog.tags.slice(0, 3).map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
                {blog.tags.length > 3 && (
                  <Badge variant="outline">+{blog.tags.length - 3}</Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="text-sm text-muted-foreground flex items-center gap-4">
              {blog.User && (
                <div className="flex items-center gap-1">
                  <User2Icon size={14} />
                  <span>{blog.User.name}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <CalendarIcon size={14} />
                <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}

// Helper function to strip HTML for preview
function stripHtml(html: string) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent || "";
}
