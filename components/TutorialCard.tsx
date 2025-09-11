import Image from 'next/image'
import Link from 'next/link'
import Tag from './Tag'
import type { Tutorial } from '@/lib/learn'

interface TutorialCardProps extends Tutorial {
  className?: string
}

export default function TutorialCard({ 
  slug, 
  title, 
  runtime, 
  thumb, 
  tags, 
  level, 
  excerpt,
  className = "" 
}: TutorialCardProps) {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'text-green-400'
      case 'Intermediate':
        return 'text-yellow-400'
      case 'Pro':
        return 'text-red-400'
      default:
        return 'text-gray-400'
    }
  }

  return (
    <Link href={`/learn/tutorials/${slug}`} className={`block group ${className}`}>
      <div className="bg-black border border-gray-800 rounded-lg overflow-hidden hover:border-brand-orange/50 transition-all duration-300">
        {/* Thumbnail */}
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={thumb}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          
          {/* Runtime overlay */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-sm px-2 py-1 rounded">
            {runtime}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-sm font-medium ${getLevelColor(level)}`}>
              {level}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {runtime}
            </div>
          </div>

          <h3 className="text-xl font-bold text-white font-space-grotesk mb-3 group-hover:text-brand-orange transition-colors duration-200">
            {title}
          </h3>

          {excerpt && (
            <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
              {excerpt}
            </p>
          )}

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} label={tag} variant="default" />
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
