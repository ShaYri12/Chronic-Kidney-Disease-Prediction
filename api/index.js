import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import diseaseRoute from "./routes/diseaseRoute.js";

dotenv.config();
const app = express();

// Define allowed origins (your frontend domain)
const allowedOrigins = [
  "https://chronic-kidney-disease-prediction-frontend.vercel.app",
  "https://chronic-kidney-disease-prediction-backend.vercel.app",
  "http://localhost:5173",
];

// Define CORS options
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true, // Set this only if your requests are using cookies or authentication headers.
};

// Apply CORS middleware globally (before other routes and middleware)
app.use(cors(corsOptions)); // Make sure CORS middleware is applied first
app.use(express.json());
app.use(cookieParser());

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
