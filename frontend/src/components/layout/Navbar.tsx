import { useState } from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

export default function Navbar() {
const { darkMode, setDarkMode } = useTheme();
const [showProfile, setShowProfile] = useState(false);

return (
<nav
style={{
display: "flex",
justifyContent: "space-between",
alignItems: "center",
padding: "20px 40px",
background: darkMode ? "#0f172a" : "#ffffff",
color: darkMode ? "white" : "#111827",
borderBottom: darkMode
? "1px solid #334155"
: "1px solid #e5e7eb",
}}
>
<h2 style={{ margin: 0 }}>🚀 ProcureHub AI</h2>

  <div
    style={{
      display: "flex",
      gap: "20px",
      alignItems: "center",
    }}
  >
    <a
      href="/"
      style={{
        color: darkMode ? "white" : "#111827",
        textDecoration: "none",
      }}
    >
      Home
    </a>

    <a
      href="/about"
      style={{
        color: darkMode ? "white" : "#111827",
        textDecoration: "none",
      }}
    >
      About
    </a>

    <a
      href="/contact"
      style={{
        color: darkMode ? "white" : "#111827",
        textDecoration: "none",
      }}
    >
      Contact
    </a>

    <a
      href="/pricing"
      style={{
        color: darkMode ? "white" : "#111827",
        textDecoration: "none",
      }}
    >
      Pricing
    </a>

    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        padding: "8px 15px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>

    <div
      style={{
        position: "relative",
        cursor: "pointer",
      }}
    >
      <FaBell
        size={20}
        color={darkMode ? "white" : "#111827"}
      />

      <span
        style={{
          position: "absolute",
          top: "-8px",
          right: "-8px",
          background: "red",
          color: "white",
          borderRadius: "50%",
          width: "18px",
          height: "18px",
          fontSize: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        3
      </span>
    </div>
    <a
  href="/ai"
  style={{
    color: darkMode ? "white" : "#111827",
    textDecoration: "none",
    fontWeight: "bold",
  }}
>
  🤖 AI Assistant
</a>

    <a href="/login">
      <button
        style={{
          padding: "10px 18px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
    </a>

    <a href="/register">
      <button
        style={{
          padding: "10px 18px",
          borderRadius: "8px",
          background: "#2563eb",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Sign Up
      </button>
    </a>

    <div
  onClick={() => alert("🔔 3 New Notifications")}
  style={{
    position: "relative",
    cursor: "pointer",
  }}
>
      <div
        onClick={() => setShowProfile(!showProfile)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          cursor: "pointer",
          color: darkMode ? "white" : "#111827",
        }}
      >
        <FaUserCircle size={28} />
        <span>Profile</span>
      </div>

      {showProfile && (
        <div
          style={{
            position: "absolute",
            top: "40px",
            right: "0",
            background: darkMode ? "#1e293b" : "white",
            color: darkMode ? "white" : "#111827",
            borderRadius: "10px",
            padding: "10px",
            minWidth: "150px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
        >
          <p>👤 My Profile</p>
          <p>⚙️ Settings</p>
          <p>🔔 Notifications</p>
          <p>🚪 Logout</p>
        </div>
      )}
    </div>
  </div>
</nav>

);
}