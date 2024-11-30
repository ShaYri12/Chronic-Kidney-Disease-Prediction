import axios from "axios";

const api = axios.create({
  baseURL: "https://chronic-kidney-disease-prediction-backend.vercel.app/api",
  withCredentials: true, // Set credentials to true globally for all requests
});

export default api;
