import { Navigate } from "react-router-dom";

function AdProtectedRoute({ user, child }) {
  if (!user) {
    return <Navigate to="/" replace />;
  }
  return child;
}

export default AdProtectedRoute;
