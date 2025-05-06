import api from "./api";

export async function getTestimonials() {
  try {
    const response = await api.get("/testimonial");
    return response.data;
  } catch (error) {
    console.log("Error fetching testimonial:", error);
    return [];
  }
}
