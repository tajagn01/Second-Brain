import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import userRouter from "./routes/user";
import contentRouter from "./routes/content";
import tagRouter from "./routes/tags";
import brainRouter from "./routes/brain";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Allowed web origins (comma separated). Can be set via env var ALLOWED_WEB_ORIGINS.
// Default includes the Netlify frontend URL.
const allowedWebOrigins = (process.env.ALLOWED_WEB_ORIGINS || "https://secondbrain001.netlify.app")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
// During local development, allow the Vite dev origin so frontend hosted at localhost:5173 can call the API
const isProduction = process.env.NODE_ENV === "production";

if (!isProduction) {
  if (!allowedWebOrigins.includes("http://localhost:5173")) {
    allowedWebOrigins.push("http://localhost:5173");
  }
}

// Also allow a quick override to accept all origins (useful for debugging)
if (process.env.ALLOW_ALL_ORIGINS === "true") {
  // wildcard flag; keep the array empty to later interpret as allow-all
  // but we won't mutate to '*', the origin check will detect this flag.
}

// CORS configuration using a function to validate origin.
interface ICorsOriginCallback {
    (err: Error | null, allow?: boolean): void;
}

interface ICorsOptions {
    origin: (origin: string | undefined, callback: ICorsOriginCallback) => void;
    methods: string[];
    allowedHeaders: string[];
    credentials: boolean;
}

const corsOptions: ICorsOptions = {
  origin: (origin, callback) => {
    // Log incoming origin for debugging CORS issues (preflight requests)
    console.log('CORS preflight origin:', origin);
    console.log('Allowed origins:', allowedWebOrigins);

    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);

    // Allow requests from any origin listed in ALLOWED_WEB_ORIGINS env var.
    if (allowedWebOrigins.includes(origin)) {
      console.log('✅ Origin allowed:', origin);
      return callback(null, true);
    }

    // Allow all locally loaded Chrome extensions
    if (origin.startsWith("chrome-extension://")) {
      return callback(null, true);
    }

    console.log('❌ Origin blocked:', origin);
    callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/check", (req, res) => {
  res.json({
    message: "I am good",
  });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/content", contentRouter);
app.use("/api/v1/tag", tagRouter);
app.use("/api/v1/brain", brainRouter);


async function connect() {
  const skipDb = process.env.SKIP_DB === "true" || false;

  if (!skipDb) {
    try {
      await connectDB();
    } catch (err) {
      console.error("Database connection failed:", err);
      process.exit(1);
    }
  } else {
    console.log("SKIP_DB is true — skipping database connection.");
  }

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} at http://localhost:${PORT}`);
  });
}
connect();

export default app;