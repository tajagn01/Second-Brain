# SecondBrain - Deployment Configuration

## 🚀 Production URLs

- **Frontend (Netlify)**: https://secondbrain001.netlify.app
- **Backend (Render)**: https://second-brain-vw8e.onrender.com

---

## 📦 Deployment Setup

### **Backend Deployment (Render)**

**Configuration:**
```
Branch: main
Root Directory: backend
Build Command: npm install && npm run build
Start Command: npm start
```

**Environment Variables (Set in Render Dashboard):**
```
PORT=10000
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
USER_JWT_SECRET=your_strong_secret_key
SHARABLE_LINK_HOST=https://secondbrain001.netlify.app
ALLOWED_WEB_ORIGINS=https://secondbrain001.netlify.app
NODE_ENV=production
GEMINI_API_KEY=your_gemini_api_key
```

---

### **Frontend Deployment (Netlify)**

**Configuration:**
```
Branch: main
Base directory: frontend
Build command: npm run build
Publish directory: frontend/dist
```

**Environment Variables:**
The `netlify.toml` file already includes the backend URL:
- `VITE_API_HOST=https://second-brain-vw8e.onrender.com`

Alternatively, you can set this in Netlify Dashboard under **Site settings → Environment variables**.

---

## 🔧 Local Development

1. **Backend:**
   ```bash
   cd backend
   npm install
   npm run dev
   ```
   Make sure your local `.env` file has proper MongoDB connection

2. **Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

---

## ✅ Deployment Checklist

- [x] Backend deployed to Render
- [x] Frontend deployed to Netlify
- [x] CORS configured with Netlify URL
- [x] Environment variables set in Render
- [x] Backend URL configured in Netlify
- [ ] MongoDB Atlas database connected
- [ ] Gemini API key added (for YouTube summarization)

---

## 🔗 Architecture

```
Frontend (Netlify)          Backend (Render)          Database
https://secondbrain001      https://second-brain      MongoDB Atlas
.netlify.app           →    -vw8e.onrender.com    →   Cloud Database
```

---

## 🐛 Troubleshooting

### CORS Errors:
- Check `ALLOWED_WEB_ORIGINS` in Render includes your Netlify URL
- Verify backend logs for CORS preflight requests

### API Connection Issues:
- Verify `VITE_API_HOST` is set correctly in Netlify
- Check Render service is running (free tier may spin down after inactivity)

### Database Connection:
- Ensure `MONGO_URI` points to MongoDB Atlas (not localhost)
- Verify IP whitelist in MongoDB Atlas (allow 0.0.0.0/0 for Render)
