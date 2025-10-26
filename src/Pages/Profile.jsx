import { useAuth } from "../context/AuthContext";
import { useState } from "react";

export default function Profile() {
  const { user, setUser } = useAuth();
  const [passwords, setPasswords] = useState({ current: "", newPass: "" });

  const handleChangePassword = (e) => {
    e.preventDefault();
    // 🚨 Yahan backend API call hoga (PUT /users/:id/password)
    alert("Password change request sent (demo only)");
    setPasswords({ current: "", newPass: "" });
  };

  if (!user) return <p className="p-6">Please login first.</p>;

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="space-y-2 mb-6">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Status:</strong> {user.status || "N/A"}</p>
      </div>

      <form onSubmit={handleChangePassword} className="space-y-3">
        <h3 className="font-semibold">Change Password</h3>
        <input
          type="password"
          placeholder="Current Password"
          value={passwords.current}
          onChange={e => setPasswords({ ...passwords, current: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="New Password"
          value={passwords.newPass}
          onChange={e => setPasswords({ ...passwords, newPass: e.target.value })}
          className="w-full p-2 border rounded"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded w-full">Update Password</button>
      </form>
    </div>
  );
}
