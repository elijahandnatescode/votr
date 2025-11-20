# VOTR Deployment Guide for Vercel

This guide explains how to deploy both the frontend and backend of VOTR to Vercel.

## Prerequisites

1. A [Vercel account](https://vercel.com/signup)
2. A [Google Cloud Console](https://console.cloud.google.com/) project with OAuth 2.0 credentials
3. A PostgreSQL database (recommended: [Vercel Postgres](https://vercel.com/storage/postgres), [Supabase](https://supabase.com/), or [Railway](https://railway.app/))

---

## Step 1: Set Up Your Database

### Using Vercel Postgres (Recommended)
1. Go to your Vercel dashboard
2. Click "Storage" > "Create Database" > "Postgres"
3. Copy the `DATABASE_URL` connection string

### Using Supabase
1. Create a new project at supabase.com
2. Go to Settings > Database
3. Copy the connection string (use "Connection pooling" URL for serverless)

---

## Step 2: Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the "Google+ API" or "Google Identity" API
4. Go to "Credentials" > "Create Credentials" > "OAuth 2.0 Client ID"
5. Set Application type to "Web application"
6. Add authorized redirect URIs:
   - `https://your-backend-domain.vercel.app/api/auth/google/callback`
   - `http://localhost:3001/api/auth/google/callback` (for local dev)
7. Copy the Client ID and Client Secret

---

## Step 3: Deploy Backend

### Option A: Deploy via Vercel CLI

```bash
cd backend
vercel
```

### Option B: Deploy via GitHub Integration

1. Push your code to GitHub
2. Go to Vercel Dashboard > "New Project"
3. Import your repository
4. Set the root directory to `backend`
5. Vercel will auto-detect the configuration

### Backend Environment Variables

Set these in your Vercel project settings (Settings > Environment Variables):

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db?sslmode=require` |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | `123456789.apps.googleusercontent.com` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | `GOCSPX-xxxxx` |
| `GOOGLE_CALLBACK_URL` | OAuth callback URL | `https://your-backend.vercel.app/api/auth/google/callback` |
| `SESSION_SECRET` | Random string for sessions | `your-super-secret-key-here` |
| `FRONTEND_URL` | Your frontend URL | `https://your-frontend.vercel.app` |
| `NODE_ENV` | Environment | `production` |

### Run Database Migrations

After deploying, run Prisma migrations:

```bash
# Using Vercel CLI
vercel env pull .env.local
npx prisma migrate deploy
```

Or use the Prisma Data Platform for production migrations.

---

## Step 4: Deploy Frontend

### Option A: Deploy via Vercel CLI

```bash
cd frontend
vercel
```

### Option B: Deploy via GitHub Integration

1. Go to Vercel Dashboard > "New Project"
2. Import your repository
3. Set the root directory to `frontend`
4. Vercel will auto-detect Vite configuration

### Frontend Environment Variables

Set these in your Vercel project settings:

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `https://your-backend.vercel.app/api` |
| `VITE_GOOGLE_CLIENT_ID` | Google OAuth Client ID | `123456789.apps.googleusercontent.com` |

---

## Step 5: Update CORS and OAuth Settings

After deploying both services:

1. **Update Google OAuth Redirect URIs**
   - Add your production backend URL to authorized redirect URIs

2. **Verify CORS Configuration**
   - The backend automatically uses `FRONTEND_URL` for CORS
   - Ensure this matches your actual frontend domain

---

## Project Structure for Vercel

```
votr/
├── backend/
│   ├── api/
│   │   └── index.ts          # Vercel serverless entry point
│   ├── src/
│   │   └── index.ts          # Express app (exports default)
│   ├── prisma/
│   │   └── schema.prisma     # Database schema
│   ├── vercel.json           # Vercel configuration
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── vercel.json           # Vercel configuration
│   └── package.json
```

---

## Vercel Configuration Files

### Backend (`backend/vercel.json`)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/index.ts"
    }
  ]
}
```

### Frontend (`frontend/vercel.json`)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

---

## Troubleshooting

### Common Issues

1. **"Cannot find module '@prisma/client'"**
   - Ensure `@prisma/client` is in dependencies (not devDependencies)
   - Run `prisma generate` during build

2. **CORS Errors**
   - Verify `FRONTEND_URL` environment variable is set correctly
   - Check that the URL doesn't have a trailing slash

3. **OAuth Callback Errors**
   - Ensure `GOOGLE_CALLBACK_URL` matches exactly what's in Google Console
   - Include the full path: `/api/auth/google/callback`

4. **Database Connection Issues**
   - For serverless, use connection pooling URLs
   - Add `?sslmode=require` to your DATABASE_URL

5. **Session Issues**
   - In production, set `SESSION_SECRET` to a strong random string
   - Cookies may require `sameSite: 'none'` for cross-domain auth

---

## Local Development

### Backend
```bash
cd backend
cp .env.example .env
# Edit .env with your values
npm install
npx prisma migrate dev
npm run dev
```

### Frontend
```bash
cd frontend
cp .env.example .env
# Edit .env with your values
npm install
npm run dev
```

---

## Environment Variable Examples

### Backend `.env`
```env
DATABASE_URL="postgresql://user:password@localhost:5432/votr?schema=public"
GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="GOCSPX-your-secret"
GOOGLE_CALLBACK_URL="http://localhost:3001/api/auth/google/callback"
SESSION_SECRET="your-secret-key-for-sessions"
FRONTEND_URL="http://localhost:5173"
PORT=3001
```

### Frontend `.env`
```env
VITE_API_URL="http://localhost:3001/api"
VITE_GOOGLE_CLIENT_ID="your-client-id.apps.googleusercontent.com"
```

---

## Production Checklist

- [ ] Database migrations run successfully
- [ ] All environment variables set in Vercel
- [ ] Google OAuth redirect URIs updated
- [ ] CORS configured with correct frontend URL
- [ ] SSL/HTTPS enabled (automatic with Vercel)
- [ ] Test authentication flow end-to-end
- [ ] Test voting flow end-to-end
- [ ] Test admin functionality

---

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Verify environment variables are set
3. Test locally with production environment variables
4. Check browser console for frontend errors
5. Check Vercel function logs for backend errors
