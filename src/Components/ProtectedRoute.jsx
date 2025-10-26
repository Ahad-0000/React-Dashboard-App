// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, role }) {
  const { user } = useAuth();

  // User login nahi hai
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Agar role required hai aur user ka role match nahi karta
  if (role && user.role !== role) {
    return <Navigate to="/" replace />;
  }

  // Otherwise page render karo
  return children;
}
