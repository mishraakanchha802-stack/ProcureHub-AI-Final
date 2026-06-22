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
export default function VendorDashboard() {
    const { darkMode } = useTheme();
    const bidData = [
  { month: "Jan", bids: 8 },
  { month: "Feb", bids: 15 },
  { month: "Mar", bids: 20 },
  { month: "Apr", bids: 17 },
  { month: "May", bids: 25 },
];
  return (
    <div
  style={{
    padding: "40px",
    background: darkMode ? "#0f172a" : "#f8fafc",
    minHeight: "100vh",
    color: darkMode ? "white" : "#111827",
  }}
>
    
      <h1>Vendor Dashboard</h1>

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
          <h3>Submitted Quotes</h3>
          <h1>15</h1>
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
          <h3>Won Auctions</h3>
          <h1>4</h1>
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
          <h3>Pending RFQs</h3>
          <h1>12</h1>
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
        <h2>Recent Bids</h2>

        <ul>
          <li>📦 IT Equipment Supply</li>
          <li>🪑 Office Furniture Contract</li>
          <li>☁️ Cloud Migration Project</li>
        </ul>
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
  <h2>Bid Performance</h2>

  <ResponsiveContainer width="100%" height={300}>
    <LineChart data={bidData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line
        type="monotone"
        dataKey="bids"
        stroke="#10b981"
        strokeWidth={3}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}