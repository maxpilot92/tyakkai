import api from "./api";

export async function getServices() {
  try {
    const response = await api.get("/service");
    return response.data;
  } catch (error) {
    console.log("Error fetching services:", error);
    return [];
  }
}
