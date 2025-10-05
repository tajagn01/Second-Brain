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
// Render automatically sets PORT, but fallback to 3000 for local dev
const PORT = parseInt(process.env.PORT || '10000', 10);
console.log('🔌 PORT from environment:', process.env.PORT);
console.log('🔌 Using PORT:', PORT);

// Allowed web origins (comma separated). Can be set via env var ALLOWED_WEB_ORIGINS.
// Default includes the Netlify frontend URL - HARDCODED FOR DEPLOYMENT FIX
const DEFAULT_ORIGINS = "https://secondbrain001.netlify.app,http://localhost:5173";
const allowedWebOrigins = (process.env.ALLOWED_WEB_ORIGINS || DEFAULT_ORIGINS)
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
    console.log('🔍 CORS preflight origin:', origin);
    console.log('📋 Allowed origins:', allowedWebOrigins);
    console.log('🌍 NODE_ENV:', process.env.NODE_ENV);
    console.log('🔐 ALLOW_ALL_ORIGINS:', process.env.ALLOW_ALL_ORIGINS);

    // Temporary: Allow all origins if flag is set (for debugging)
    if (process.env.ALLOW_ALL_ORIGINS === "true") {
      console.log('⚠️ ALLOW_ALL_ORIGINS is true - allowing all origins');
      return callback(null, true);
    }

    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      console.log('✅ No origin - allowing request');
      return callback(null, true);
    }

    // Allow requests from any origin listed in ALLOWED_WEB_ORIGINS env var.
    if (allowedWebOrigins.includes(origin)) {
      console.log('✅ Origin allowed:', origin);
      return callback(null, true);
    }

    // Allow all locally loaded Chrome extensions
    if (origin.startsWith("chrome-extension://")) {
      console.log('✅ Chrome extension allowed');
      return callback(null, true);
    }

    console.log('❌ Origin BLOCKED:', origin);
    console.log('❌ Not in allowed list:', allowedWebOrigins);
    callback(new Error("Not allowed by CORS"));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Add explicit CORS headers as backup
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  const origin = req.headers.origin;
  if (origin && allowedWebOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
    return;
  }
  
  next();
});

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
  console.log('🔄 Starting server initialization...');
  console.log('📦 Environment variables loaded');
  console.log('🔢 PORT:', PORT);
  console.log('🌐 NODE_ENV:', process.env.NODE_ENV);
  console.log('🔗 MONGO_URI set:', !!process.env.MONGO_URI);
  console.log('🌍 Allowed origins:', allowedWebOrigins);
  
  const skipDb = process.env.SKIP_DB === "true" || false;

  if (!skipDb) {
    try {
      console.log('🔌 Attempting database connection...');
      await connectDB();
      console.log('✅ Database connection successful');
    } catch (err) {
      console.error("❌ Database connection failed:", err);
      console.log('⚠️ Continuing without database...');
      // Don't exit - continue without DB
    }
  } else {
    console.log("⏭️ SKIP_DB is true — skipping database connection.");
  }

  console.log('🎧 Starting Express server on port', PORT);
  app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════════╗
║  🚀 Server is running on port ${PORT}
║  🌍 Environment: ${process.env.NODE_ENV || 'development'}
║  🔒 Allowed CORS Origins:
${allowedWebOrigins.map(o => `║     • ${o}`).join('\n')}
║  ⚠️  ALLOW_ALL_ORIGINS: ${process.env.ALLOW_ALL_ORIGINS || 'false'}
║  ✅ Server started successfully!
╚════════════════════════════════════════════════════════╝
    `);
    console.log('✅ /check endpoint available at: https://second-brain-vw8e.onrender.com/check');
  });
}

console.log('🏁 Calling connect function...');
connect().catch(err => {
  console.error('💥 Fatal error during startup:', err);
  process.exit(1);
});

export default app;