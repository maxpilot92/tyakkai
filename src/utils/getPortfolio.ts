import api from "./api";

export async function getPortfolio(categoryId?: string) {
  try {
    const url = categoryId
      ? `/portfolio?categoryId=${categoryId}`
      : "/portfolio";
    const response = await api.get(url);
    console.log("Portfolio data:", response);
    return response.data;
  } catch (error) {
    console.log("Error fetching services:", error);
    return [];
  }
}
