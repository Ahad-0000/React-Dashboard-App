import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl">InsightBot</h1>
        <div className="flex flex-wrap items-center gap-4">
          {user ? (
            <>
              <Link
                to="/articles"
                className="hover:bg-blue-500 px-3 py-1 rounded transition-colors"
              >
                Articles
              </Link>
              <Link
                to="/dashboard"
                className="hover:bg-blue-500 px-3 py-1 rounded transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="hover:bg-blue-500 px-3 py-1 rounded transition-colors"
              >
                Profile
              </Link>
              {user.role === "admin" && (
                <Link
                  to="/admin"
                  className="hover:bg-blue-500 px-3 py-1 rounded transition-colors"
                >
                  Admin
                </Link>
              )}
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:bg-blue-500 px-3 py-1 rounded transition-colors"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:bg-blue-500 px-3 py-1 rounded transition-colors"
              >
                Register
              </Link>
              <Link
                to="/profile"
                className="hover:bg-blue-500 px-3 py-1 rounded transition-colors"
              >
                Profile
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
