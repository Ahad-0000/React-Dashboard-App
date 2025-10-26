import { useEffect, useState } from "react";
import api from "../../services/api";

export default function AdminPanel() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get("/users")
      .then(res => setUsers(res.data))
      .catch(console.error);
  }, []);

  const handleApprove = (id) => {
    api.patch(`/users/${id}`, { status: "approved" })
      .then(res => {
        setUsers(users.map(u => (u.id === id ? res.data : u)));
      });
  };

  const handleReject = (id) => {
    api.patch(`/users/${id}`, { status: "rejected" })
      .then(res => {
        setUsers(users.map(u => (u.id === id ? res.data : u)));
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} className="text-center">
              <td className="border p-2">{u.name}</td>
              <td className="border p-2">{u.email}</td>
              <td className="border p-2">{u.role}</td>
              <td className="border p-2">{u.status}</td>
              <td className="border p-2 space-x-2">
                {u.status === "pending" && (
                  <>
                    <button onClick={() => handleApprove(u.id)}
                      className="bg-green-500 text-white px-2 py-1 rounded">Approve</button>
                    <button onClick={() => handleReject(u.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
