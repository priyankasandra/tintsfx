import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import BlogSearchClient from '@/components/BlogSearchClient'
import { getAllNotionBlogPosts } from '@/lib/notion-blog'

export default async function BlogPage() {
  // In development, we'll show the file-based blogs
  // In production with Notion token, it will fetch from Notion
  let allPosts = []
  
  try {
    if (process.env.NOTION_TOKEN) {
      // Add timeout to prevent long loading times
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Notion API timeout')), 5000)
      )
      
      allPosts = await Promise.race([
        getAllNotionBlogPosts(),
        timeoutPromise
      ]) as any
    }
  } catch (error) {
    console.log('Notion not available, using fallback content:', error instanceof Error ? error.message : 'Unknown error')
  }
  
  // Fallback content if Notion is not configured
  if (allPosts.length === 0) {
    allPosts = [
      {
        id: '1',
        slug: 'my-journey-prosthetic-makeup-south-indian-film',
        title: 'My Journey as a Prosthetic Makeup Artist in the South Indian Film Industry',
        excerpt: 'From LA training to working across Telugu, Tamil, and Malayalam cinema - the challenges, learnings, and breakthroughs in bringing international prosthetic standards to Indian film industry.',
        date: '2025-01-15',
        author: 'Priyanka Puvvada',
        coverImage: '/learn/blog/journey-cover.jpg',
        tags: ['Journey', 'South Indian Cinema', 'Prosthetics'],
        featured: true,
        content: '',
        published: true,
        notionUrl: 'https://www.notion.so/My-Journey-as-a-Prosthetic-Makeup-Artist-in-the-South-Indian-Film-Industry-269466fb3413806782b7d63329b0bcb2'
      },
      {
        id: '2',
        slug: 'from-script-to-screen-how-prosthetic-makeup-brings-characters-alive',
        title: 'From Script to Screen: How Prosthetic Makeup Brings Characters Alive',
        excerpt: 'The complete journey of character creation through prosthetic makeup - from initial concept and design to final on-screen magic.',
        date: '2025-01-10',
        author: 'Priyanka Puvvada',
        coverImage: '/learn/blog/Characters.jpg',
        tags: ['Character Design', 'Film Production', 'Workflow'],
        featured: true,
        content: '',
        published: true,
        notionUrl: 'https://www.notion.so/From-Script-to-Screen-How-Prosthetic-Makeup-Brings-Characters-Alive-269466fb341380d59f1bf94b2df68d6b'
      }
    ]
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Header */}
          <SectionHeader
            title="BLOG"
            subtitle="Insights, tutorials, and behind-the-scenes stories from the world of prosthetic makeup"
          />

          {/* Blog Search and Listing */}
          <BlogSearchClient posts={allPosts} />
          
          {/* Notion Setup Notice */}
          {!process.env.NOTION_TOKEN && (
            <div className="mt-8 p-6 bg-brand-orange/10 border border-brand-orange/30 rounded-lg">
              <h3 className="text-lg font-bold text-brand-orange mb-2">🔧 Notion Integration Setup Required</h3>
              <p className="text-gray-300 text-sm">
                To display your Notion blog posts, you'll need to set up the Notion integration. 
                Check the setup instructions in your admin documentation.
              </p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}