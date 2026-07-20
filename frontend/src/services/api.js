import axios from "axios";

import { getAccessToken, clearTokens } from "../utils/token";
import { refreshAccessToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Attach Access Token
 */
api.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

/**
 * Automatically Refresh Expired Token
 */
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const newAccessToken =
          await refreshAccessToken();

        originalRequest.headers.Authorization =
          `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        clearTokens();

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;