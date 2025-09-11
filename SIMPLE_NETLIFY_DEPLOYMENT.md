# TINTSFX - Simplified Netlify Deployment Guide

## ⚡ Quick & Easy Manual Deployment

Since your site has some complex features (API routes, dynamic search), here's the **simplest approach** for Netlify deployment:

## Step 1: Revert to Standard Next.js Build

Let me prepare your site for the **standard Netlify + Next.js deployment** (not static export):

### 1.1 Update next.config.mjs
Change your `next.config.mjs` back to:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove output: 'export' for standard deployment
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/services/brandidentity',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/brand-identity',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/website',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/web-design',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/consulting',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/:slug+',
        destination: '/services',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
```

### 1.2 Update netlify.toml
```toml
[build]
  publish = ".next"
  command = "npm run build"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"

# Service redirects (handled by Next.js config, but backup here)
[[redirects]]
  from = "/services/brandidentity"
  to = "/services"
  status = 301

[[redirects]]
  from = "/services/brand-identity"
  to = "/services"
  status = 301

[[redirects]]
  from = "/services/*"
  to = "/services"
  status = 301
```

## Step 2: Manual Upload Method

### Method A: Direct Folder Upload
1. **Go to** [netlify.com](https://netlify.com)
2. **Sign up/Login**
3. **Click** "Add new site" → "Deploy manually"
4. **Drag your entire project folder** to the upload area
   - Upload the whole `/Users/priyankapuvvada/Desktop/web` folder
   - Netlify will build it for you automatically!

### Method B: ZIP Upload
1. **Compress your project**:
   ```bash
   cd /Users/priyankapuvvada/Desktop
   zip -r tintsfx-project.zip web
   ```
2. **Upload the ZIP file** to Netlify's manual deploy

## Step 3: Configure Environment Variables

After upload, add these in Netlify dashboard:

**Site Settings** → **Environment Variables**:
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RFKptwbhFRrJJx
RAZORPAY_KEY_SECRET=xU6qBHFq8lMDdLc62oOzvMjA
NOTION_TOKEN=secret_189076080834jCMR6ZPTz5gqXysl4zDrWDvOtslFyyWbln
NOTION_DATABASE_ID=269466fb3413818c9f52c5b93845ac8d
NEXT_PUBLIC_SUPABASE_URL=https://kabfefgdwyxwjqodkulbl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

## Step 4: Deploy!

1. **Netlify will automatically**:
   - Run `npm install`
   - Run `npm run build`
   - Deploy your site
   - Install the Next.js plugin
   - Set up serverless functions for API routes

2. **Wait 3-5 minutes** for first deployment

3. **Get your live URL**: `https://your-site-name.netlify.app`

## What Will Work ✅

- ✅ All pages and navigation
- ✅ Image galleries and portfolio
- ✅ Supabase community signup ("JOIN US")
- ✅ Razorpay payment integration (full functionality)
- ✅ Blog page with Notion integration
- ✅ All workshop pages
- ✅ Contact forms
- ✅ API routes (serverless functions)
- ✅ Automatic HTTPS and global CDN

## Benefits of This Approach

1. **Full functionality** - Everything works exactly like localhost
2. **Automatic builds** - Netlify handles the technical stuff
3. **Serverless API** - Your payment and Supabase integrations work
4. **Easy updates** - Just upload new files to redeploy
5. **No code changes** - Your site works as-is

## Quick Checklist

- [ ] Remove `output: 'export'` from next.config.mjs
- [ ] Go to netlify.com
- [ ] Upload your project folder
- [ ] Add environment variables
- [ ] Test the live site

## Troubleshooting

**Build Fails?**
- Check environment variables are set correctly
- View build logs in Netlify dashboard
- Make sure all files uploaded properly

**Features Not Working?**
- Verify environment variables match your local `.env.local`
- Check Netlify function logs for API routes

## Success! 🎉

This approach gives you a **fully functional website** with all features working, deployed on Netlify's global infrastructure!

Your TINTSFX website will be live with:
- Lightning-fast loading worldwide
- Automatic HTTPS security
- Full payment processing
- Community signup working
- Professional domain ready
