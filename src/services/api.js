import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "https://www.postman.com/collections/e6afe4028c2a1e56e577"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;