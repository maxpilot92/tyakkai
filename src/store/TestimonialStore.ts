import { Testimonial } from "@/types/Testimonial";
import { create } from "zustand";

interface TestimonialStore {
  testimonial: Testimonial[]; // Change from 'service' to 'testimonial' for the array
  setTestimonial: (testimonial: Testimonial[]) => void; // Function to set the entire array
}

const useTestimonialStore = create<TestimonialStore>((set) => ({
  testimonial: [], // Initialize with an empty array
  setTestimonial: (testimonial) => set({ testimonial }), // Set the array of testimonial
}));

export default useTestimonialStore;
