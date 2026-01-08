# MPH NFT Marketplace - JSON Server Backend

REST API backend for the MPH NFT Marketplace.

## Deploy to Render (Free)

1. Push this repo to GitHub
2. Go to [render.com](https://render.com)
3. Click **New** → **Web Service**
4. Connect your GitHub repo
5. Settings:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Click **Create Web Service**

You'll get a URL like: `https://mph-json-server.onrender.com`

## Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/listings` | Get all KARRAT listings |
| POST | `/listings` | Create new listing |
| GET | `/listings/:id` | Get single listing |
| PUT | `/listings/:id` | Update listing |
| DELETE | `/listings/:id` | Delete listing |
| GET | `/studiochain_listings` | Get all StudioChain listings |
| POST | `/studiochain_listings` | Create new StudioChain listing |
| PUT | `/studiochain_listings/:id` | Update StudioChain listing |
| DELETE | `/studiochain_listings/:id` | Delete StudioChain listing |

## Local Development

```bash
npm install
npm start
# Server runs on http://localhost:3001
```

## Environment

Add to your frontend `.env`:
```
VITE_API_URL=https://your-app.onrender.com
```

## Note

Render free tier spins down after 15 minutes of inactivity. First request after sleep takes ~30 seconds.
