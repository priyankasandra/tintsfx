# TINTSFX - Netlify Deployment Guide

## Prerequisites
1. GitHub account (to connect your repository)
2. Netlify account (free at netlify.com)
3. Your environment variables ready

## Step 1: Prepare Your Repository

### 1.1 Push to GitHub
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - TINTSFX website"

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/yourusername/tintsfx.git

# Push to GitHub
git push -u origin main
```

## Step 2: Environment Variables for Netlify

You'll need to add these environment variables in Netlify dashboard:

### Required Environment Variables:
```
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RFKptwbhFRrJJx
RAZORPAY_KEY_SECRET=xU6qBHFq8lMDdLc62oOzvMjA
NOTION_TOKEN=secret_189076080834jCMR6ZPTz5gqXysl4zDrWDvOtslFyyWbln
NOTION_DATABASE_ID=269466fb3413818c9f52c5b93845ac8d
NEXT_PUBLIC_SUPABASE_URL=https://kabfefgdwyxwjqodkulbl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here
```

## Step 3: Netlify Deployment Steps

### 3.1 Connect Repository
1. Go to [netlify.com](https://netlify.com) and sign up/login
2. Click "New site from Git"
3. Choose "GitHub" and authorize Netlify to access your repositories
4. Select your TINTSFX repository

### 3.2 Configure Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Node version**: `18` (will be set automatically via netlify.toml)

### 3.3 Add Environment Variables
1. In your Netlify site dashboard, go to "Site settings"
2. Click on "Environment variables" in the sidebar
3. Add each environment variable listed above:
   - Click "Add variable"
   - Enter Key and Value
   - Click "Create variable"

### 3.4 Deploy
1. Click "Deploy site"
2. Netlify will automatically build and deploy your site
3. You'll get a random subdomain like `amazing-site-12345.netlify.app`

## Step 4: Custom Domain (Optional)

### 4.1 Add Custom Domain
1. In site settings, go to "Domain management"
2. Click "Add custom domain"
3. Enter your domain name (e.g., `tintsfx.com`)
4. Follow DNS configuration instructions

### 4.2 Enable HTTPS
- Netlify automatically provides free SSL certificates
- Your site will be available at both HTTP and HTTPS

## Step 5: Post-Deployment Checklist

### Test These Features:
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Workshop pages display properly
- [ ] Portfolio images load
- [ ] Services page works
- [ ] Blog page loads (with fallback content)
- [ ] About page displays
- [ ] Contact page works
- [ ] "JOIN US" community signup works
- [ ] Razorpay payment integration works
- [ ] All images display correctly

### Verify Environment Variables:
- [ ] Supabase community signup works
- [ ] Razorpay payments process correctly
- [ ] Notion blog integration works (if configured)

## Step 6: Ongoing Deployment

### Automatic Deployments
- Any push to your main branch will automatically trigger a new deployment
- Build logs are available in the Netlify dashboard
- Deployment usually takes 2-3 minutes

### Build Troubleshooting
If build fails:
1. Check build logs in Netlify dashboard
2. Verify all environment variables are set
3. Test build locally with `npm run build`
4. Check for any missing dependencies

## Important Notes

1. **Domain**: Your site will initially be available at a Netlify subdomain
2. **HTTPS**: Automatically enabled and required for modern web features
3. **Environment Variables**: Keep these secure and never commit them to git
4. **Build Time**: Initial deployment may take 3-5 minutes
5. **Caching**: Netlify provides global CDN caching automatically

## Support

If you encounter issues:
1. Check Netlify build logs first
2. Verify environment variables match your local `.env.local`
3. Test locally with `npm run build` to catch build errors
4. Contact Netlify support for deployment-specific issues

## Success!

Once deployed, your TINTSFX website will be live and accessible worldwide! 🎉
