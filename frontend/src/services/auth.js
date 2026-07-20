import api from "./api";
import {
  saveTokens,
  clearTokens,
  getRefreshToken,
} from "../utils/token";

/**
 * Login
 */
export const login = async (credentials) => {
  const { data } = await api.post("/auth/login/", credentials);

  saveTokens(data.access, data.refresh);

  return data;
};

/**
 * Refresh Access Token
 */
export const refreshAccessToken = async () => {
  const refresh = getRefreshToken();

  const { data } = await api.post("/auth/refresh/", {
    refresh,
  });

  saveTokens(data.access, data.refresh ?? refresh);

  return data.access;
};

/**
 * Logout
 */
export const logout = async () => {
  try {
    await api.post("/auth/logout/", {
      refresh: getRefreshToken(),
    });
  } catch (error) {
    // Ignore logout errors
  }

  clearTokens();
};