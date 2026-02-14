import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAdmin = localStorage.getItem("admin") === "true";

  // if not logged in → redirect to login
  if (!isAdmin) {
    return <Navigate to="/admin" />;
  }

  // if logged in → show page
  return children;
}
