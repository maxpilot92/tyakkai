"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, CalendarIcon, User2Icon } from "lucide-react";

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

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/blogs?blogId=${params.id}`
        );
        const data = await response.json();
        if (data.status === "success") {
          setBlog(data.data);
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      fetchBlog();
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <Skeleton className="h-8 w-3/4 mb-4" />
        <div className="flex items-center gap-4 mb-6">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-32" />
        </div>
        <Skeleton className="h-64 w-full mb-8" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-muted-foreground">Blog post not found.</p>
        <Button className="mt-4" onClick={() => router.push("/")}>
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Button variant="ghost" className="mb-6" onClick={() => router.back()}>
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>

      <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
        {blog.User && (
          <div className="flex items-center gap-1">
            <User2Icon size={16} />
            <span>{blog.User.name}</span>
          </div>
        )}
        <div className="flex items-center gap-1">
          <CalendarIcon size={16} />
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {blog.tags.map((tag, index) => (
            <Badge key={index} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {blog.url && (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={blog.url || "/placeholder.svg"}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div
        className="prose prose-lg max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
