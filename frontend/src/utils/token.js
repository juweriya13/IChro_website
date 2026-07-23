const ACCESS_TOKEN = "accessToken";
const REFRESH_TOKEN = "refreshToken";

/**
 * Save Tokens
 */
export const saveTokens = (access, refresh) => {
  sessionStorage.setItem(
    ACCESS_TOKEN,
    access
  );

  localStorage.setItem(
    REFRESH_TOKEN,
    refresh
  );
};

/**
 * Get Access Token
 */
export const getAccessToken = () => {
  return sessionStorage.getItem(
    ACCESS_TOKEN
  );
};

/**
 * Get Refresh Token
 */
export const getRefreshToken = () => {
  return localStorage.getItem(
    REFRESH_TOKEN
  );
};

/**
 * Authentication Status
 */
export const isAuthenticated = () => {
  return !!(
    getAccessToken() ||
    getRefreshToken()
  );
};

/**
 * Remove Tokens
 */
export const clearTokens = () => {
  sessionStorage.removeItem(
    ACCESS_TOKEN
  );

  localStorage.removeItem(
    REFRESH_TOKEN
  );
};