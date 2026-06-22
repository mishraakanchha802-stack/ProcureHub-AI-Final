const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
process.env.GEMINI_API_KEY
);

app.post("/api/chat", async (req, res) => {
try {
const { message } = req.body;

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const result = await model.generateContent(message);

res.json({
  reply: result.response.text(),
});

} catch (error) {
console.error(error);

res.status(500).json({
  error: "AI Error",
});

}
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});