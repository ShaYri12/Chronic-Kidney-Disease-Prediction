import axios from "axios";

const api = axios.create({
  baseURL:
    "https://chronic-kidney-disease-p-git-21d56e-sharjeels-projects-c1e8a39b.vercel.app/api",
  withCredentials: true, // Set credentials to true globally for all requests
});

export default api;
