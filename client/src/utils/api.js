import axios from "axios";
const api = axios.create({
  baseURL: "https://chronic-kidney-disease-prediction-backend.vercel.app/api",
});

export default api;
