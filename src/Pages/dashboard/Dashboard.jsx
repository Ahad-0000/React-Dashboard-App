import { useEffect, useState } from "react";
import api from "../../services/api";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, LineChart, Line, CartesianGrid, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get("/stats") // mock API se aayega
      .then(res => setStats(res.data))
      .catch(console.error);
  }, []);

  if (!stats) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-6 space-y-10">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Pie Chart - Language Distribution */}
      <div>
        <h3 className="font-semibold mb-2">Articles by Language</h3>
        <PieChart width={400} height={300}>
          <Pie data={stats.byLanguage} dataKey="count" nameKey="language" cx="50%" cy="50%" outerRadius={100}>
            {stats.byLanguage.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Bar Chart - Top Domains */}
      <div>
        <h3 className="font-semibold mb-2">Top Domains</h3>
        <BarChart width={500} height={300} data={stats.byDomain}>
          <XAxis dataKey="domain" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </div>

      {/* Line Chart - Articles per Day */}
      <div>
        <h3 className="font-semibold mb-2">Articles per Day</h3>
        <LineChart width={500} height={300} data={stats.perDay}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}
