# 📝 Notion Blog Integration Setup

This guide will help you connect your Notion pages to your TINTSFX website so that your blog posts written in Notion automatically appear on your site.

## 🔧 Step 1: Create a Notion Integration

1. **Go to Notion Integrations**: https://www.notion.so/my-integrations
2. **Click "New integration"**
3. **Fill in the details**:
   - Name: `TINTSFX Blog`
   - Logo: Upload your TINTSFX logo
   - Associated workspace: Select your workspace
4. **Click "Submit"**
5. **Copy the "Internal Integration Token"** - you'll need this!

## 🔑 Step 2: Update Your Environment Variables

1. **Open your `.env.local` file**
2. **Replace the placeholder values**:
```
NOTION_TOKEN=your_actual_integration_token_here
```

## 📄 Step 3: Share Your Blog Pages with the Integration

For each blog post you want to display on your website:

1. **Open your Notion page** (like your "My Journey..." post)
2. **Click "Share" in the top right**
3. **Click "Invite"**
4. **Search for "TINTSFX Blog"** (your integration name)
5. **Select it and click "Invite"**

## 📋 Step 4: Add New Blog Posts to the Website

When you create new blog posts in Notion:

1. **Share the page** with your TINTSFX Blog integration (Step 3)
2. **Get the page ID** from the URL:
   - URL: `https://notion.so/My-Post-Title-abc123def456`
   - Page ID: `abc123def456`
3. **Add it to your website code**:
   - Open `/lib/notion-blog.ts`
   - Add a new entry to the `BLOG_PAGES` array:
   ```javascript
   {
     id: 'abc123def456',
     url: 'https://notion.so/your-full-url',
     title: 'Your Post Title'
   }
   ```

## ✅ Step 5: Test the Integration

1. **Restart your development server**: `npm run dev`
2. **Visit**: http://localhost:3000/learn/blog
3. **You should see your Notion posts!**

## 🎨 Notion Writing Tips

### Use These Features in Notion:
- **Headings** (H1, H2, H3) - for structure
- **Bold** and *italic* text
- **Bullet points** and numbered lists
- **Images** - they'll appear on your website
- **Code blocks** - for technical content
- **Quotes** - for highlighting important points

### Cover Images:
- Add a **cover image** to your Notion page
- This will automatically become the blog post thumbnail
- Use high-quality images (at least 1200x600px)

### Page Properties (Optional):
You can add these properties to your Notion pages for better organization:
- **Tags** (Multi-select): Will show as tags on your website
- **Featured** (Checkbox): Mark important posts
- **Published** (Checkbox): Control which posts are visible

## 🚀 Current Blog Posts

Your current blog post is already configured:
- ✅ [My Journey as a Prosthetic Makeup Artist in the South Indian Film Industry](https://www.notion.so/My-Journey-as-a-Prosthetic-Makeup-Artist-in-the-South-Indian-Film-Industry-269466fb3413806782b7d63329b0bcb2)

## 🔄 How It Works

1. **You write** in Notion (easy, beautiful editor)
2. **Share the page** with your integration
3. **Add the page ID** to your website code
4. **Your website automatically** converts the Notion content to web format
5. **Visitors see** your blog posts with your website's design

## 📞 Need Help?

If you encounter any issues:
1. Check that the Notion integration token is correct
2. Ensure the page is shared with your integration
3. Verify the page ID is correct in the code
4. Restart your development server after making changes

Happy blogging! 🎉
