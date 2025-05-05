import axios from "axios";
export interface Category {
  id: string;
  name: string;
  createdAt: string; // Or `Date` if you're parsing it
  updatedAt: string; // Or `Date`
  categoryFor: "service" | "portfolio" | string; // Adjust if you have fixed values
}

export async function useCategory(categoryFor: string) {
  console.log("Fetching category data for:", categoryFor);
  const domain =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : process.env.NEXT_PUBLIC_API_URL;
  try {
    const response = await axios.get(
      `${domain}/api/category?for=${categoryFor}`
    );
    const data: Category[] = response.data.data;
    return data;
  } catch (error) {
    console.error("Error fetching category data:", error);
    return error;
  }
}
