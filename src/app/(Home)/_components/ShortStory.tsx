"use client";
import { Asterisk } from "lucide-react";

export default function ShortStory() {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-2">
          <Asterisk className="h-6 w-6 text-orange-500" />
          <span className="text-lg font-medium">Our short story</span>
        </div>
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-medium leading-tight">
            <span className="text-black">
              Our work speaks for itself. Browse our portfolio to see how{" "}
            </span>
            <span className="text-gray-400">we&apos;ve helped </span>
            <span className="text-black">businesses like yours </span>
            <span className="text-gray-400">with branding, </span>
            <span className="text-black">web design, </span>
            <span className="text-gray-400">and more...</span>
          </h2>
        </div>
      </div>
      ;
    </div>
  );
}
