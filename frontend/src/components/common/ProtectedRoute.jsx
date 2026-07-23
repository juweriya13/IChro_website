import { Navigate } from "react-router-dom";

import {
  getAccessToken,
  getRefreshToken,
} from "../../utils/token";

function ProtectedRoute({ children }) {

  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken();

  if (!accessToken && !refreshToken) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;