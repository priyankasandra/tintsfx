import Image from 'next/image'
import type { NotionBlogPost } from '@/lib/notion-blog'

interface BlogCardProps extends NotionBlogPost {
  className?: string
}

export default function BlogCard({ 
  slug, 
  title, 
  excerpt, 
  date, 
  coverImage, 
  author = "Priyanka Puvvada",
  notionUrl,
  className = "" 
}: BlogCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <a 
      href={notionUrl} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={`block group ${className}`}
    >
      <article className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-brand-orange/50 transition-all duration-300">
        {/* Cover Image */}
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center text-gray-400 text-sm mb-3">
            <time dateTime={date}>
              {formatDate(date)}
            </time>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>

          <h3 className="text-xl font-bold text-white font-space-grotesk mb-3 group-hover:text-brand-orange transition-colors duration-200 line-clamp-2">
            {title}
          </h3>

          <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-4 flex items-center text-brand-orange text-sm font-medium group-hover:text-white transition-colors duration-200">
            Read in Notion
            <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </div>
        </div>
      </article>
    </a>
  )
}
