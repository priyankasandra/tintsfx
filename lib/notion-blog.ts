import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

export interface NotionBlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  coverImage: string
  tags: string[]
  featured: boolean
  content: string
  published: boolean
  notionUrl: string
}

// Initialize Notion client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

// Initialize markdown converter
const n2m = new NotionToMarkdown({ notionClient: notion })

// For now, we'll use the direct page approach since you have individual pages
// Later we can set up a database if you want to organize multiple blog posts

export async function getNotionPage(pageId: string): Promise<NotionBlogPost | null> {
  try {
    // Extract page ID from URL if provided
    const cleanPageId = pageId.replace(/.*\/([a-zA-Z0-9]+)(\?.*)?$/, '$1')
    
    // Get page metadata
    const page: any = await notion.pages.retrieve({ page_id: cleanPageId })
    
    // Get page content as markdown
    const mdBlocks = await n2m.pageToMarkdown(cleanPageId)
    const mdString = n2m.toMarkdownString(mdBlocks)
    
    // Extract title from page properties
    const title = extractTitle(page)
    
    // Generate slug from title
    const slug = generateSlug(title)
    
    return {
      id: cleanPageId,
      slug,
      title,
      excerpt: generateExcerpt(mdString.parent),
      date: new Date(page.created_time).toISOString().split('T')[0],
      author: 'Priyanka Puvvada',
      coverImage: extractCoverImage(page) || '/learn/blog/default.jpg',
      tags: extractTags(page),
      featured: false,
      content: mdString.parent,
      published: true,
      notionUrl: `https://notion.so/${cleanPageId.replace(/-/g, '')}`
    }
  } catch (error) {
    console.error('Error fetching Notion page:', error)
    return null
  }
}

// Hardcoded list of your blog posts (you can add more here)
export const BLOG_PAGES = [
  {
    id: '269466fb3413806782b7d63329b0bcb2',
    url: 'https://www.notion.so/My-Journey-as-a-Prosthetic-Makeup-Artist-in-the-South-Indian-Film-Industry-269466fb3413806782b7d63329b0bcb2',
    title: 'My Journey as a Prosthetic Makeup Artist in the South Indian Film Industry'
  },
  {
    id: '269466fb341380d59f1bf94b2df68d6b',
    url: 'https://www.notion.so/From-Script-to-Screen-How-Prosthetic-Makeup-Brings-Characters-Alive-269466fb341380d59f1bf94b2df68d6b',
    title: 'From Script to Screen: How Prosthetic Makeup Brings Characters Alive'
  }
  // Add more blog posts here as you create them
]

export async function getAllNotionBlogPosts(): Promise<NotionBlogPost[]> {
  // During build time, return empty array to avoid build failures
  if (process.env.NODE_ENV === 'production' && !process.env.NETLIFY) {
    return []
  }
  
  // Fetch all blog posts in parallel for better performance
  const postPromises = BLOG_PAGES.map(pageInfo => getNotionPage(pageInfo.id))
  
  try {
    const results = await Promise.allSettled(postPromises)
    const posts: NotionBlogPost[] = []
    
    results.forEach((result) => {
      if (result.status === 'fulfilled' && result.value) {
        posts.push(result.value)
      }
    })
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error fetching all Notion blog posts:', error)
    return []
  }
}

export async function getNotionBlogPostBySlug(slug: string): Promise<NotionBlogPost | null> {
  const allPosts = await getAllNotionBlogPosts()
  return allPosts.find(post => post.slug === slug) || null
}

// Helper functions
function extractTitle(page: any): string {
  try {
    // Try different property types for title
    const properties = page.properties
    
    // Look for title property
    for (const [key, value] of Object.entries(properties)) {
      if ((value as any).type === 'title' && (value as any).title?.length > 0) {
        return (value as any).title[0].plain_text
      }
    }
    
    // Fallback to page title if no title property
    if (page.title && page.title.length > 0) {
      return page.title[0].plain_text
    }
    
    return 'Untitled Post'
  } catch (error) {
    return 'Untitled Post'
  }
}

function extractCoverImage(page: any): string | null {
  try {
    if (page.cover) {
      if (page.cover.type === 'external') {
        return page.cover.external.url
      } else if (page.cover.type === 'file') {
        return page.cover.file.url
      }
    }
    return null
  } catch (error) {
    return null
  }
}

function extractTags(page: any): string[] {
  try {
    const properties = page.properties
    
    // Look for multi_select or select properties that could be tags
    for (const [key, value] of Object.entries(properties)) {
      if ((value as any).type === 'multi_select') {
        return (value as any).multi_select.map((tag: any) => tag.name)
      }
    }
    
    return ['Prosthetics', 'Behind the Scenes'] // Default tags
  } catch (error) {
    return ['Prosthetics', 'Behind the Scenes']
  }
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function generateExcerpt(content: string): string {
  // Remove markdown formatting and get first 150 characters
  const plainText = content
    .replace(/#{1,6}\s/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .trim()
  
  if (plainText.length <= 150) {
    return plainText
  }
  
  return plainText.substring(0, 150).trim() + '...'
}
