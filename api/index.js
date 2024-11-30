import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import diseaseRoute from "./routes/diseaseRoute.js";

dotenv.config();
const app = express();

// Proper CORS Configuration
const corsOptions = {
  origin: true, // Allow only your frontend's URL
  credentials: true, // Enable credentials for secure cookies or authorization headers
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS", // Allow specific methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow specific headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Middleware
app.use(express.json());
app.use(cookieParser());

// Test route for debugging CORS headers
app.get("/test-cors", (req, res) => {
  res.json({ message: "CORS is working!" });
});

// Health check route
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
