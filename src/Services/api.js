import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000",
});

api.interceptors.request.use((config) => {
  const raw = localStorage.getItem("user");
  if (raw) {
    const token = JSON.parse(raw)?.token;
    if (token) config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
