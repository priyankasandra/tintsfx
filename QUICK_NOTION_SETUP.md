# ⚡ Quick Notion Setup (5 Minutes)

Your blog is already working with fallback content! Follow these steps to connect your real Notion page:

## 🎯 **Current Status:**
- ✅ Blog system is working: http://localhost:3000/learn/blog
- ✅ Your post shows up with fallback content
- ⚠️ Need to connect to your actual Notion page

## 🔧 **Setup Steps:**

### **Step 1: Create Integration (2 min)**
1. Go to: https://www.notion.so/my-integrations
2. Click **"New integration"**
3. Name: `TINTSFX Blog`
4. Submit and **copy the token** (starts with `secret_`)

### **Step 2: Share Your Page (1 min)**
1. Open: https://www.notion.so/My-Journey-as-a-Prosthetic-Makeup-Artist-in-the-South-Indian-Film-Industry-269466fb3413806782b7d63329b0bcb2
2. Click **"Share"** → **"Invite"**
3. Search for **"TINTSFX Blog"** → Invite

### **Step 3: Update Environment (1 min)**
Replace this line in your `.env.local` file:
```
NOTION_TOKEN=your_notion_integration_token_here
```

With your actual token:
```
NOTION_TOKEN=secret_your_actual_token_here
```

### **Step 4: Restart Server (1 min)**
```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ **After Setup:**
- Your Notion content will load automatically
- Rich formatting, images, and structure preserved
- "View in Notion" button links to original
- Easy to add more blog posts

## 🚨 **Troubleshooting:**

**"API token is invalid"**
- Double-check the token starts with `secret_`
- Make sure you copied the entire token
- Restart the development server

**Page not loading**
- Ensure you shared the page with your integration
- Check the page URL is correct
- Wait a few seconds for Notion API to sync

## 🎉 **You're Almost Done!**
Your blog infrastructure is complete. Once you complete these 4 steps, you'll have a fully functional Notion-powered blog! 

Visit http://localhost:3000/learn/blog to see your work!
