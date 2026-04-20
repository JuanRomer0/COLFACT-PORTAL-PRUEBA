import axios from "axios";

export const api = axios.create({
  baseURL: "/api",
});

// 👉 REQUEST INTERCEPTOR
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token){
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 👉 RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response)=> response,
  (error) => {
    if (error.response?.status === 401) {
      //cuando hay un token expirado o invalido
      localStorage.clear();
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);