# TINTSFX - Prosthetic Makeup Artist Portfolio

A modern, professional portfolio website for Priyanka Puvvada, a prosthetic makeup artist specializing in film and entertainment industry work.

## 🌟 Features

### Core Functionality
- **Portfolio Showcase** - Six categories of work with fullscreen lightbox
- **Workshop System** - Detailed workshop pages with booking integration
- **Learn Hub** - Resources, tutorials, and blog content
- **Contact System** - Multiple contact methods and community signup
- **About Page** - Professional background and services

### Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **Razorpay Integration** for workshop bookings
- **Notion CMS** for blog content
- **Supabase** for community signups
- **Responsive Design** - Mobile-first approach

## 🚀 Live Demo

Visit the live site: [Your Vercel URL will go here]

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Database**: Supabase
- **CMS**: Notion
- **Payments**: Razorpay
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/tintsfx.git
   cd tintsfx
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with the following variables:
   ```env
   # Razorpay
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_secret

   # Notion
   NOTION_TOKEN=your_notion_token
   NOTION_DATABASE_ID=your_notion_database_id

   # Supabase
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## 🔧 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_RAZORPAY_KEY_ID` | Razorpay public key for payments | Yes |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | Yes |
| `NOTION_TOKEN` | Notion integration token | Yes |
| `NOTION_DATABASE_ID` | Notion database ID for blog posts | Yes |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key | Yes |

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── learn/             # Learn hub with subpages
│   ├── portfolio/         # Portfolio showcase
│   ├── services/          # Services page
│   ├── thanks/            # Thank you page
│   └── workshops/         # Workshop pages
├── components/            # Reusable React components
├── lib/                   # Utility functions and data
├── public/               # Static assets
└── content/              # Content files
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect GitHub repository to Vercel**
2. **Add environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 🎨 Key Pages

- **Homepage** - Hero section with navigation
- **Portfolio** - Six category showcase with lightbox
- **Workshops** - Detailed workshop information and booking
- **Learn** - Resources, tutorials, and blog
- **About** - Professional background and services
- **Contact** - Multiple contact methods

## 📱 Features

### Workshop System
- Three workshop types: Beginner, Pro-Intensive, Live Zoom
- Integrated booking with Razorpay
- Calendar view and FAQ system

### Portfolio Categories
- Prosthetics
- Beauty
- Injuries
- Aging
- Fantasy
- Behind the Scenes

### Learn Hub
- Downloadable resources
- Tutorial guides
- Blog powered by Notion CMS

## 🤝 Contributing

This is a personal portfolio project. For suggestions or issues, please contact the repository owner.

## 📄 License

This project is proprietary and confidential. All rights reserved.

## 📧 Contact

- **Website**: [Your domain]
- **Email**: [Your email]
- **Instagram**: [@your_instagram]
- **WhatsApp**: [Your WhatsApp]

---

Built with ❤️ using Next.js and deployed on Vercel.