import { Navigate } from "react-router-dom";

function AdProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default AdProtectedRoute;
