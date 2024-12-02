import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true, // Set credentials to true globally for all requests
});

export default api;
