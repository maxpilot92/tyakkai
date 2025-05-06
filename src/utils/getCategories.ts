import api from "./api";

export async function getCategories(categoryFor: string) {
  try {
    const res = await api.get(`/category?for=${categoryFor}`);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
