import express from "express";
import cors from "cors";
import morgan from "morgan";
import { getRandomQuote } from "./quotes.js";

// TODO 1: Create express app
const app = express();

// TODO 1: Define server port
const PORT = 3000;

// TODO 4: Apply CORS middleware
app.use(cors());

// TODO 5: Apply Morgan middleware
app.use(morgan("dev"));

// TODO 6.1: Root route
app.get("/", (req, res) => {
  res.send("Backend server is running");
});

// TODO 6.2: Quote route
app.get("/api/quote", (req, res) => {
  const quote = getRandomQuote();
  res.json({ quote });
});

// TODO 7: Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
