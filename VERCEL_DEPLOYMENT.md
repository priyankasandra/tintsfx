# TINTSFX - Vercel Deployment Guide

## 🚀 Why Vercel for Next.js?

Vercel is **made by the Next.js team** and provides the best deployment experience for Next.js applications with:
- ✅ **Zero configuration** - Auto-detects Next.js
- ✅ **Serverless functions** - API routes work perfectly
- ✅ **Global CDN** - Fast worldwide performance
- ✅ **Automatic HTTPS** - SSL certificates included
- ✅ **Git integration** - Deploy on every push

## 📋 Deployment Methods

### Method 1: GitHub Integration (Recommended)

#### Step 1: Upload Code to GitHub
1. **Go to [github.com](https://github.com)**
2. **Create new repository:**
   - Name: `tintsfx`
   - Description: `Professional portfolio website for prosthetic makeup artist`
   - Set to **Public** (for free Vercel deployment)
3. **Upload your project files** using GitHub's web interface:
   - Click "uploading an existing file"
   - Drag your entire project folder or ZIP the contents
   - Commit the files

#### Step 2: Connect Vercel to GitHub
1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import** your `tintsfx` repository
5. **Vercel auto-detects** Next.js configuration
6. **Click "Deploy"**

#### Step 3: Add Environment Variables
In your Vercel project dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add these variables:

```env
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_live_RFKptwbhFRrJJx
RAZORPAY_KEY_SECRET=xU6qBHFq8lMDdLc62oOzvMjA
NOTION_TOKEN=secret_189076080834jCMR6ZPTz5gqXysl4zDrWDvOtslFyyWbln
NOTION_DATABASE_ID=269466fb3413818c9f52c5b93845ac8d
NEXT_PUBLIC_SUPABASE_URL=https://kabfefgdwywjqodkulbl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYmZlZmdkd3l3anFvZGt1bGJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MTQ3MTYsImV4cCI6MjA3Mjk5MDcxNn0.8dV_dI-T5RxSaTBQ0i3nmlQ_gp4Sd8YWqLbDq2chSpQ
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImthYmZlZmdkd3l3anFvZGt1bGJsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NzQxNDcxNiwiZXhwIjoyMDcyOTkwNzE2fQ.0kJDpCvG7xU0gm_EOW_NtPs5lQ64zyjmCh3k6Rp40Tw
```

#### Step 4: Redeploy
After adding environment variables:
1. Go to **Deployments** tab
2. Click **"Redeploy"** or push a new commit
3. Your site will be live in 2-3 minutes!

---

### Method 2: Direct Upload (Alternative)

If you prefer not to use GitHub:

#### Step 1: Prepare Project
1. **Download the ZIP:** `tintsfx-auto-detect.zip`
2. **Extract** the files
3. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

#### Step 2: Deploy with CLI
1. **Open terminal** in your project folder
2. **Login to Vercel:**
   ```bash
   vercel login
   ```
3. **Deploy:**
   ```bash
   vercel
   ```
4. **Follow the prompts:**
   - Project name: `tintsfx`
   - Deploy to production: `Y`

#### Step 3: Add Environment Variables
```bash
vercel env add NEXT_PUBLIC_RAZORPAY_KEY_ID
vercel env add RAZORPAY_KEY_SECRET
vercel env add NOTION_TOKEN
vercel env add NOTION_DATABASE_ID
vercel env add NEXT_PUBLIC_SUPABASE_URL
vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
```

---

## 🔧 What Works on Vercel

### ✅ **Fully Functional:**
- **All pages** load perfectly
- **API routes** (`/api/razorpay/*`) work for payments
- **Server-side functions** for Notion blog
- **Database integration** with Supabase
- **Payment processing** with Razorpay
- **Image optimization** with Next.js
- **Dynamic routing** and redirects
- **Form submissions** and community signup

### 🚀 **Performance Features:**
- **Edge functions** for API routes
- **Global CDN** for static assets
- **Image optimization** and WebP conversion
- **Automatic code splitting**
- **Perfect Lighthouse scores**

---

## 📱 Features That Will Work

### Core Functionality
- ✅ **Portfolio showcase** with lightbox
- ✅ **Workshop booking** with Razorpay payments
- ✅ **Community signup** with Supabase
- ✅ **Blog integration** with Notion CMS
- ✅ **Contact forms** and WhatsApp integration
- ✅ **Resource downloads** (PDFs)
- ✅ **Calendar system** for workshops
- ✅ **Mobile-responsive** design

### Advanced Features
- ✅ **Payment verification** server-side
- ✅ **Database operations** with Supabase
- ✅ **Content management** via Notion
- ✅ **Email notifications** (if configured)
- ✅ **Analytics integration** (if added)

---

## 🔄 Future Updates

### Automatic Deployments (GitHub Method)
- **Push to GitHub** → **Auto-deploy** to Vercel
- **Preview deployments** for branches
- **Rollback** to previous versions easily

### Manual Updates (CLI Method)
```bash
# Make changes to your code
vercel --prod
```

---

## 🌐 Your Live Site

After deployment, you'll get URLs like:
- **Production:** `https://tintsfx.vercel.app`
- **Custom domain:** `https://tintsfx.com` (if configured)

---

## ⚙️ Configuration

### Custom Domain Setup
1. **Vercel Dashboard** → **Settings** → **Domains**
2. **Add your domain**
3. **Configure DNS** as instructed
4. **SSL certificate** added automatically

### Performance Monitoring
- **Analytics** built-in with Vercel
- **Core Web Vitals** tracking
- **Function logs** for debugging

---

## 🚧 Troubleshooting

### Build Errors
```bash
# Clear local cache
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Not Working
1. **Check spelling** of variable names
2. **Redeploy** after adding variables
3. **Verify values** don't have extra spaces

### Images Not Loading
- Ensure images are in `public/` folder
- Check file paths and extensions
- Verify image optimization settings

---

## 📋 Quick Deployment Checklist

### For GitHub Integration:
- [ ] Create GitHub repository
- [ ] Upload project files
- [ ] Connect Vercel to GitHub
- [ ] Import repository to Vercel
- [ ] Add environment variables
- [ ] Test live site

### For Direct Upload:
- [ ] Install Vercel CLI
- [ ] Run `vercel` command
- [ ] Add environment variables via CLI
- [ ] Test deployment

---

## 🎉 Success!

Your TINTSFX website will be live on Vercel's global CDN with:
- **Lightning-fast performance**
- **Automatic HTTPS**
- **Global edge functions**
- **Zero downtime deployments**
- **Professional domain ready**

**Need help?** Vercel's documentation is excellent at [vercel.com/docs](https://vercel.com/docs)

---

## 📞 Support

For deployment issues:
- **Vercel Discord:** [vercel.com/discord](https://vercel.com/discord)
- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **GitHub Issues:** Create issues in your repository
