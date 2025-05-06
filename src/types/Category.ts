export interface Category {
  id: string;
  name: string;
  createdAt: string; // Or `Date` if you're parsing it
  updatedAt: string; // Or `Date`
  categoryFor: "service" | "portfolio" | string; // Adjust if you have fixed values
}
