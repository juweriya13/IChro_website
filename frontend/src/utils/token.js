const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

/**
 * Save JWT Tokens
 */
export const saveTokens = (access, refresh) => {
  sessionStorage.setItem(ACCESS_TOKEN, access);
  localStorage.setItem(REFRESH_TOKEN, refresh);
};

/**
 * Get Access Token
 */
export const getAccessToken = () => {
  return sessionStorage.getItem(ACCESS_TOKEN);
};

/**
 * Get Refresh Token
 */
export const getRefreshToken = () => {
  return localStorage.getItem(REFRESH_TOKEN);
};

/**
 * Check if user has Access Token
 */
export const hasAccessToken = () => {
  return !!getAccessToken();
};

/**
 * Check if user has Refresh Token
 */
export const hasRefreshToken = () => {
  return !!getRefreshToken();
};

/**
 * Clear all tokens
 */
export const clearTokens = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
  localStorage.removeItem(REFRESH_TOKEN);
};