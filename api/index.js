import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import diseaseRoute from "./routes/diseaseRoute.js";

dotenv.config();
const app = express();

// Allow all origins for testing (not recommended for production)
const corsOptions = {
  origin: true, // Allow all origins for testing
  credentials: true, // Enable credentials if needed
};

// Apply CORS middleware globally
app.use(cors(corsOptions)); // Make sure it's applied before any other routes

app.use(express.json());
app.use(cookieParser());

// Test route for debugging CORS headers
app.get("/test-cors", (req, res) => {
  res.json({ message: "CORS is working!" });
});

// Testing
app.get("/", (req, res) => {
  res.send("API is working");
});

// Routes
app.use("/api/predict", diseaseRoute);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
