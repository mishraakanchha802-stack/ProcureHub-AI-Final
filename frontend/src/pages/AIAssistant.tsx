
import { useState } from "react";
import Navbar from "../components/layout/Navbar";

export default function AIAssistant() {
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

const [messages, setMessages] = useState<any[]>([]);

const sendMessage = async () => {
if (!message.trim()) return;

const userMessage = message;

setMessages((prev) => [
  ...prev,
  { role: "user", text: userMessage },
]);

setMessage("");
setLoading(true);

try {
  const res = await fetch(
    "https://procurehub-ai-backend.onrender.com/api/chat",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
      }),
    }
  );

  const data = await res.json();

  setMessages((prev) => [
    ...prev,
    {
      role: "ai",
      text: data.reply,
    },
  ]);
} catch (error) {
  setMessages((prev) => [
    ...prev,
    {
      role: "ai",
      text: "❌ Error connecting to AI",
    },
  ]);
}

setLoading(false);

};

return (
<>
<Navbar />

  <div
    style={{
      padding: "40px",
      minHeight: "100vh",
      background: "#0f172a",
      color: "white",
    }}
  >
    <h1>
      🤖 ProcureHub AI Assistant
    </h1>

    <button
      onClick={() =>
        setMessages([])
      }
      style={{
        marginTop: "15px",
        marginBottom: "15px",
        padding: "10px 15px",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
      }}
    >
      Clear Chat
    </button>

    <div
      style={{
        marginTop: "10px",
        border:
          "1px solid #334155",
        borderRadius: "12px",
        padding: "20px",
        minHeight: "400px",
        background: "#1e293b",
      }}
    >
      {messages.length === 0 && (
        <p>
          👋 Ask anything about
          procurement, vendors,
          RFQs, auctions or
          supply chain.
        </p>
      )}

      {messages.map(
        (msg, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent:
                msg.role ===
                "user"
                  ? "flex-end"
                  : "flex-start",
              marginBottom:
                "15px",
            }}
          >
            <div
              style={{
                background:
                  msg.role ===
                  "user"
                    ? "#2563eb"
                    : "#334155",
                padding:
                  "12px",
                borderRadius:
                  "12px",
                maxWidth:
                  "70%",
              }}
            >
              {msg.text}
            </div>
          </div>
        )
      )}

      {loading && (
        <p>
          🤖 Thinking...
        </p>
      )}
    </div>

    <div
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "10px",
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }
        onKeyDown={(e) => {
          if (
            e.key === "Enter"
          ) {
            sendMessage();
          }
        }}
        placeholder="Ask AI..."
        style={{
          flex: 1,
          padding: "12px",
          borderRadius:
            "8px",
          border: "none",
        }}
      />

      <button
        onClick={
          sendMessage
        }
        style={{
          padding:
            "12px 20px",
          background:
            "#2563eb",
          color: "white",
          border: "none",
          borderRadius:
            "8px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  </div>
</>

);
}