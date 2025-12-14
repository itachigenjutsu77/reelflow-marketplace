# ReelFlow Marketplace - Deployment Guide

## Quick Deploy to Vercel

The easiest way to deploy ReelFlow Marketplace is to use [Vercel](https://vercel.com), the creators of Next.js.

### Prerequisites
- GitHub account with the repository
- Vercel account (free tier available)

### Step 1: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" or "Log In"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub repositories

### Step 2: Import Project

1. Click "Add New..." > "Project"
2. Select "Import Git Repository"
3. Paste the repository URL: `https://github.com/itachigenjutsu77/reelflow-marketplace.git`
4. Click "Import"

### Step 3: Configure Project

Vercel will auto-detect Next.js. Default settings are fine:
- **Framework**: Next.js
- **Root Directory**: ./
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install` or `yarn install`

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (2-5 minutes)
3. Your site will be live at: `https://reelflow-marketplace.vercel.app`

## Environment Variables

If you need environment variables (for future API integration):

1. Go to Project Settings > Environment Variables
2. Add variables:

```
NEXT_PUBLIC_API_URL=https://api.example.com
API_SECRET_KEY=your_secret_key
```

## Production Optimizations

### Image Optimization

Use Next.js `Image` component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
  priority
/>
```

### Code Splitting

Next.js automatically code-splits at the route level. For component-level splitting:

```tsx
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
});
```

### API Routes

Create API endpoints in `app/api/`:

```
app/
├── api/
│   ├── editors/
│   │   └── route.ts
│   └── pricing/
│       └── route.ts
```

## Custom Domain

### Add Custom Domain

1. Go to Project Settings > Domains
2. Click "Add Domain"
3. Enter your domain (e.g., `reelflow.dev`)
4. Update DNS records at your domain registrar
5. Vercel will verify and enable HTTPS automatically

## Analytics & Monitoring

### Enable Vercel Analytics

1. Project Settings > Analytics
2. Click "Enable Web Analytics"
3. View real-time metrics in Vercel Dashboard

### Monitor Performance

- **Vercel Insights**: Monitor Core Web Vitals
- **Vercel Speed Insights**: Track page performance
- **Error Tracking**: Automatic error logging

## Continuous Deployment

Vercel automatically deploys on every push to main branch:

1. Push to `main` branch triggers deployment
2. Vercel runs build and tests
3. Live preview URLs generated for each PR
4. Merge to main deploys to production

## Database Setup (Future)

For API backend integration:

### PostgreSQL (Recommended)
```
1. Use Vercel PostgreSQL add-on
2. Or use external provider (Supabase, Railway, etc.)
3. Set DATABASE_URL in environment variables
4. Create schema and seed data
```

### Prisma ORM Setup
```bash
npm install @prisma/client prisma
npx prisma init
```

## Rollback

If deployment breaks:

1. Go to Vercel Deployments tab
2. Find previous stable deployment
3. Click "Promote to Production"
4. Instant rollback completed

## Troubleshooting

### Build Fails
- Check build logs: Deployments > View Logs
- Common issues:
  - Missing environment variables
  - TypeScript errors
  - Missing dependencies

### Slow Performance
- Check Vercel Insights
- Optimize images using Next.js Image
- Enable caching: Set-Cookie headers
- Use CDN for static assets

### 404 Errors
- Ensure `next.config.js` is configured
- Check route naming conventions
- Verify `public/` folder structure

## Local Testing Before Deploy

```bash
# Build production bundle
npm run build

# Start production server
npm run start

# Test at http://localhost:3000
```

## Scaling & Performance

### Serverless Functions
- Automatic with Vercel
- No infrastructure management
- Pay per execution (free tier: 100GB transfer/month)

### Edge Middleware
For request/response manipulation:

```tsx
// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
```

## Security

### HTTPS
- Automatic with Vercel
- Free SSL/TLS certificates
- Automatic renewal

### Environment Secrets
- Never commit `.env.local`
- Add to `.gitignore`
- Use Vercel UI for secrets

### Security Headers
Add to `next.config.js`:
```js
async headers() {
  return [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
      ],
    },
  ];
}
```

## Support

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **GitHub Issues**: Create issue in repo

## Summary

1. Push to GitHub
2. Connect to Vercel
3. Deploy (automatic thereafter)
4. Custom domain (optional)
5. Monitor analytics
6. Scale as needed

That's it! Your ReelFlow Marketplace is now live.
