import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";
export default function AdminDashboard() {
    const { darkMode } = useTheme();
    const revenueData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 6500 },
  { month: "Mar", revenue: 5000 },
  { month: "Apr", revenue: 9000 },
  { month: "May", revenue: 12500 },
];
  return (
    <div
      style={{
        padding: "40px",
        background: darkMode ? "#0f172a" : "#f8fafc",
        color: darkMode ? "white" : "#111827",
        minHeight: "100vh",
      }}
    >
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            background: "#2563eb",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
          }}
        >
          <h3>Total Users</h3>
          <h1>450</h1>
        </div>

        <div
          style={{
            background: "#10b981",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
          }}
        >
          <h3>Total Vendors</h3>
          <h1>120</h1>
        </div>

        <div
          style={{
            background: "#f59e0b",
            color: "white",
            padding: "20px",
            borderRadius: "12px",
            width: "220px",
          }}
        >
          <h3>Revenue</h3>
          <h1>$12.5K</h1>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
background: darkMode ? "#1e293b" : "white",
color: darkMode ? "white" : "#111827",
padding: "25px",
borderRadius: "12px",
        }}
      >
        <h2>Platform Overview</h2>

        <ul>
          <li>👥 Active Buyers: 120</li>
          <li>🏢 Active Vendors: 450</li>
          <li>📢 Running Auctions: 34</li>
          <li>💰 Monthly Revenue: $12,500</li>
        </ul>
      </div>
      <div
  style={{
    marginTop: "40px",
    background: darkMode ? "#1e293b" : "white",
    padding: "25px",
    borderRadius: "12px",
  }}
>
  <h2>Revenue Analytics</h2>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={revenueData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="revenue"
        stroke="#2563eb"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}