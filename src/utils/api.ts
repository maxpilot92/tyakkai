import axios from "axios";

const api = axios.create({
  baseURL: "http://54.66.132.165/api",
});

export default api;
