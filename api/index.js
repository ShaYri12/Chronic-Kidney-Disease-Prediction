import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import diseaseRoute from "./routes/diseaseRoute.js";

dotenv.config();
const app = express();

// Define CORS options
const corsOptions = {
  origin: true, // Allow all origins for testing
  credentials: true, // Enable credentials if needed
};

// Apply CORS middleware globally
app.use(cors(corsOptions)); // Make sure it's applied before any other routes

// Middleware to log CORS headers for debugging
app.use((req, res, next) => {
  console.log("Request Origin:", req.headers.origin); // Log incoming request origin

  // Set CORS headers explicitly
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin || "*"); // Allow the request origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allowed methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allowed headers
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Allow credentials

  // Proceed to the next middleware or route handler
  next();
});

// Preflight request handling (for OPTIONS method)
app.options("*", cors(corsOptions));

// Test route for debugging CORS headers
app.get("/test-cors", (req, res) => {
  res.json({ message: "CORS is working!" });
});

// Default route for testing API
app.get("/", (req, res) => {
  res.send("API is working");
});

// Apply routes
app.use("/api/predict", diseaseRoute);

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
