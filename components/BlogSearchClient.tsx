'use client'

import { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import CardGrid from '@/components/CardGrid'
import BlogCard from '@/components/BlogCard'
import type { NotionBlogPost } from '@/lib/notion-blog'

interface BlogSearchClientProps {
  posts: NotionBlogPost[]
}

export default function BlogSearchClient({ posts }: BlogSearchClientProps) {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = posts.filter(post => {
    if (!searchQuery) return true
    const lowercaseQuery = searchQuery.toLowerCase()
    return (
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  })

  return (
    <>
      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar
          onSearch={setSearchQuery}
          placeholder="Search blog posts..."
        />
      </div>

      {/* Results */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">
            {searchQuery ? 'No posts found matching your search.' : 'No blog posts available.'}
          </p>
        </div>
      ) : (
        <CardGrid columns={3}>
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} {...post} />
          ))}
        </CardGrid>
      )}
    </>
  )
}
