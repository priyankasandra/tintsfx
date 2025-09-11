# TINTSFX - Manual Netlify Deployment Guide

## Step 1: Build Your Site Locally

### 1.1 Build the Production Version
```bash
npm run build
```

This will create an `out` folder with your static website.

## Step 2: Prepare for Upload

### 2.1 Create a ZIP file
After building, you need to compress the `out` folder:

**On Mac/Linux:**
```bash
cd out
zip -r ../tintsfx-website.zip .
cd ..
```

**On Windows:**
- Right-click the `out` folder
- Select "Send to" > "Compressed (zipped) folder"
- Rename to `tintsfx-website.zip`

### 2.2 Include Configuration Files
Create a new folder called `deploy` and copy these files:
```
deploy/
├── (contents of 'out' folder)
├── netlify.toml
└── _redirects (create this file)
```

Create `_redirects` file in the deploy folder:
```
/services/brandidentity /services 301
/services/brand-identity /services 301
/services/website /services 301
/services/web-design /services 301
/services/consulting /services 301
/services/* /services 301
/* /index.html 200
```

## Step 3: Manual Upload to Netlify

### 3.1 Go to Netlify
1. Visit [netlify.com](https://netlify.com)
2. Sign up or log in
3. On your dashboard, look for "Drag & Drop" section

### 3.2 Drag and Drop Deployment
1. Open your file explorer
2. Find your `tintsfx-website.zip` file (or the `out` folder)
3. Drag the ZIP file or folder directly onto the Netlify "drag & drop" area
4. Netlify will automatically deploy your site!

### 3.3 Alternative: Manual Upload
If drag & drop doesn't work:
1. Click "Deploy manually" on Netlify
2. Choose "Drag & drop your site output folder here"
3. Upload your `out` folder or ZIP file

## Step 4: Configure Environment Variables

### 4.1 Add Environment Variables
Since some features need environment variables:

1. Go to your deployed site dashboard
2. Click "Site settings"
3. Go to "Environment variables"
4. Add these variables:

```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RFKptwbhFRrJJx
NEXT_PUBLIC_SUPABASE_URL=https://kabfefgdwyxwjqodkulbl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Note:** Some features like Razorpay server-side verification won't work in static deployment. The "JOIN US" Supabase integration will work fine.

## Step 5: Features That Work vs Don't Work

### ✅ **Will Work:**
- All pages load correctly
- Navigation and routing
- Image galleries and portfolio
- Blog page (with fallback content)
- Supabase community signup ("JOIN US" form)
- Contact forms
- All static content

### ❌ **Won't Work (Static Deployment):**
- Razorpay server-side payment verification
- API routes (`/api/*`)
- Server-side functions

### 🔧 **Workarounds:**
- **Payments:** Use Razorpay Payment Links or WhatsApp coordination
- **Contact:** Use Netlify Forms or external form services

## Step 6: Update Deployment

### 6.1 For Future Updates:
1. Make changes to your code
2. Run `npm run build` 
3. Drag the new `out` folder to Netlify
4. Your site updates automatically!

### 6.2 Custom Domain (Optional):
1. In site settings → "Domain management"
2. Add your custom domain
3. Configure DNS as instructed

## Quick Deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Create ZIP of `out` folder
- [ ] Go to netlify.com
- [ ] Drag & drop the ZIP file
- [ ] Add environment variables (if needed)
- [ ] Test the live site

## Your Live Site

After deployment, you'll get a URL like:
`https://amazing-tintsfx-123456.netlify.app`

## Troubleshooting

### Build Fails Locally:
```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Images Not Loading:
- Check if all images are in the `public` folder
- Verify image paths don't start with `/`

### 404 Errors:
- Make sure `_redirects` file is in the root of your upload
- Check that `netlify.toml` is included

## Success! 🎉

Your TINTSFX website is now live on Netlify with global CDN, automatic HTTPS, and excellent performance!
