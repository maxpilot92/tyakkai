import { Service } from "@/app/(Home)/_components/Services";
import { create } from "zustand";

interface ServiceStore {
  services: Service[]; // Change from 'service' to 'services' for the array
  setServices: (services: Service[]) => void; // Function to set the entire array
}

const useServiceStore = create<ServiceStore>((set) => ({
  services: [], // Initialize with an empty array
  setServices: (services) => set({ services }), // Set the array of services
}));

export default useServiceStore;
