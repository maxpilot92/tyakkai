import { Blog } from "@/types/Blog";
import { create } from "zustand";

interface BlogStore {
  blog: Blog[]; // Change from 'service' to 'blog' for the array
  setBlog: (blog: Blog[]) => void; // Function to set the entire array
}

const useBlogStore = create<BlogStore>((set) => ({
  blog: [], // Initialize with an empty array
  setBlog: (blog) => set({ blog }), // Set the array of blog
}));

export default useBlogStore;
