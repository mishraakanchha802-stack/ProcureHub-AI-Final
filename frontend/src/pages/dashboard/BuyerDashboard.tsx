import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "../../context/ThemeContext";
export default function BuyerDashboard() {
    const { darkMode } = useTheme();
    const rfqData = [
  { month: "Jan", rfqs: 12 },
  { month: "Feb", rfqs: 18 },
  { month: "Mar", rfqs: 22 },
  { month: "Apr", rfqs: 30 },
  { month: "May", rfqs: 24 },
];
  return (
    <div
      style={{
        padding: "40px",
        background: darkMode ? "#0f172a" : "#f8fafc",
        minHeight: "100vh",
      }}
    >
      <h1>Buyer Dashboard</h1>

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
          <h3>Total RFQs</h3>
          <h1>24</h1>
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
          <h3>Active Auctions</h3>
          <h1>8</h1>
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
          <h3>Approved Vendors</h3>
          <h1>56</h1>
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
        <h2>Recent RFQs</h2>

        <ul>
          <li>💻 Laptop Procurement</li>
          <li>🪑 Office Furniture</li>
          <li>☁️ Cloud Services</li>
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
  <h2>RFQ Analytics</h2>

  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={rfqData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="rfqs" fill="#2563eb" />
    </BarChart>
  </ResponsiveContainer>
</div>
    </div>
  );
}