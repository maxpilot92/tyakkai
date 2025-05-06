// src/lib/stores/categoryStore.ts
import { Category } from "@/types/Category";
import { create } from "zustand";

interface CategoryStore {
  serviceCategory: Category[]; // Array of Category objects
  setServiceCategory: (serviceCategory: Category[]) => void; // Function to set the entire serviceCategory array
}

const useServiceCategoryStore = create<CategoryStore>((set) => ({
  serviceCategory: [], // Initialize with an empty array
  setServiceCategory: (serviceCategory) => set({ serviceCategory }), // Set the array of serviceCategory
}));

export default useServiceCategoryStore;
