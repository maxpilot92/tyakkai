import { Portfolio } from "@/types/Portfolio";
import { create } from "zustand";

interface PortfolioStore {
  portfolio: Portfolio[]; // Change from 'service' to 'portfolio' for the array
  setPortfolio: (portfolio: Portfolio[]) => void; // Function to set the entire array
}

const usePortfolioStore = create<PortfolioStore>((set) => ({
  portfolio: [], // Initialize with an empty array
  setPortfolio: (portfolio) => set({ portfolio }), // Set the array of portfolio
}));

export default usePortfolioStore;
