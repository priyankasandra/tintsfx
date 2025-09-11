import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  author: string
  coverImage: string
  tags: string[]
  featured: boolean
  content: string
}

const blogDirectory = path.join(process.cwd(), 'content/blog')

export function getAllBlogPosts(): BlogPost[] {
  try {
    const fileNames = fs.readdirSync(blogDirectory)
    const posts = fileNames
      .filter(name => name.endsWith('.md') && name !== 'README.md')
      .map(name => {
        const slug = name.replace(/\.md$/, '')
        return getBlogPostBySlug(slug)
      })
      .filter(post => post !== null) as BlogPost[]
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  } catch (error) {
    console.error('Error reading blog posts:', error)
    return []
  }
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`)
    
    if (!fs.existsSync(fullPath)) {
      return null
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || 'TINTSFX',
      coverImage: data.coverImage || '/learn/blog/default.jpg',
      tags: data.tags || [],
      featured: data.featured || false,
      content
    }
  } catch (error) {
    console.error(`Error reading blog post ${slug}:`, error)
    return null
  }
}

export function getFeaturedBlogPosts(): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => post.featured)
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  return allPosts.filter(post => 
    post.tags.some(postTag => postTag.toLowerCase() === tag.toLowerCase())
  )
}

export function getAllBlogTags(): string[] {
  const allPosts = getAllBlogPosts()
  const tags = new Set<string>()
  
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag))
  })
  
  return Array.from(tags).sort()
}

export function searchBlogPosts(query: string): BlogPost[] {
  const allPosts = getAllBlogPosts()
  const lowercaseQuery = query.toLowerCase()
  
  return allPosts.filter(post =>
    post.title.toLowerCase().includes(lowercaseQuery) ||
    post.excerpt.toLowerCase().includes(lowercaseQuery) ||
    post.content.toLowerCase().includes(lowercaseQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}
