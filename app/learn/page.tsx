import Header from '@/components/Header'
import SectionHeader from '@/components/SectionHeader'
import CardGrid from '@/components/CardGrid'
import ResourceCard from '@/components/ResourceCard'
import TutorialCard from '@/components/TutorialCard'
import BlogCard from '@/components/BlogCard'
import Link from 'next/link'
import { resources, tutorials } from '@/lib/learn'
import { getAllNotionBlogPosts } from '@/lib/notion-blog'

export default async function LearnHub() {
  // Show max 3 items in each preview section
  const featuredResources = resources.slice(0, 3)
  const featuredTutorials = tutorials.slice(0, 3)
  
  let allPosts: any[] = []
  try {
    if (process.env.NOTION_TOKEN) {
      allPosts = await getAllNotionBlogPosts()
    }
  } catch (error) {
    console.log('Notion not configured')
  }
  
  // Fallback content
  if (allPosts.length === 0) {
    allPosts = [
      {
        id: '1',
        slug: 'my-journey-prosthetic-makeup-south-indian-film',
        title: 'My Journey as a Prosthetic Makeup Artist in the South Indian Film Industry',
        excerpt: 'From LA training to working across Telugu, Tamil, and Malayalam cinema - the challenges, learnings, and breakthroughs.',
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
  
  const featuredPosts = allPosts.slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <SectionHeader 
              title="LEARN"
              subtitle="Resources, tutorials, and articles from TINTSFX. Master prosthetic makeup with professional techniques and insights."
            />
          </div>
        </section>

        {/* Resources Preview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk">
                Resources
              </h2>
              <Link 
                href="/learn/resources"
                className="text-brand-orange hover:text-white transition-colors duration-200 font-medium flex items-center"
              >
                View all
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <CardGrid columns={3}>
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} {...resource} />
              ))}
            </CardGrid>
          </div>
        </section>

        {/* Tutorials Preview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk">
                Tutorials
              </h2>
              <Link 
                href="/learn/tutorials"
                className="text-brand-orange hover:text-white transition-colors duration-200 font-medium flex items-center"
              >
                View all
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <CardGrid columns={3}>
              {featuredTutorials.map((tutorial) => (
                <TutorialCard key={tutorial.slug} {...tutorial} />
              ))}
            </CardGrid>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk">
                Blog
              </h2>
              <Link 
                href="/learn/blog"
                className="text-brand-orange hover:text-white transition-colors duration-200 font-medium flex items-center"
              >
                View all
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            <CardGrid columns={3}>
              {featuredPosts.map((post) => (
                <BlogCard key={post.slug} {...post} />
              ))}
            </CardGrid>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-brand-orange/10 to-brand-orange/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white font-space-grotesk mb-8">
              Ready to level up your skills?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our workshops for hands-on learning with professional techniques
            </p>
            <Link
              href="/workshops/beginner"
              className="inline-block bg-brand-orange text-brand-black font-bold py-4 px-8 rounded hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200"
              aria-label="Book a workshop seat"
            >
              Book a Workshop
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
