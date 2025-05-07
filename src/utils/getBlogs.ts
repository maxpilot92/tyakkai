import api from "./api";

export async function getBlogs(categoryId?: string) {
  const url = categoryId ? `/blog?categoryId=${categoryId}` : "/blog";
  try {
    const res = await api.get(url);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}
