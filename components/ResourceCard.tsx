import Tag from './Tag'
import type { Resource } from '@/lib/learn'

interface ResourceCardProps extends Resource {
  className?: string
}

export default function ResourceCard({ 
  title, 
  desc, 
  type, 
  size, 
  href, 
  tags, 
  className = "" 
}: ResourceCardProps) {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return (
          <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        )
      case 'ZIP':
        return (
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,17H12V15H14M14,13H12V11H14M12,9H14V7H12M12,5H14V3H12V5M10,7H8V9H10V7M8,11H10V13H8V11M10,15H8V17H10V15M12,19H14V17H12V19M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        )
      default:
        return (
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
          </svg>
        )
    }
  }

  return (
    <div className={`bg-black border border-gray-800 rounded-lg p-6 hover:border-brand-orange/50 transition-all duration-300 group ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          {getTypeIcon(type)}
          <div>
            <span className="text-sm font-medium text-gray-400">{type}</span>
            <span className="text-sm text-gray-500 ml-2">{size}</span>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white font-space-grotesk mb-3 group-hover:text-brand-orange transition-colors duration-200">
        {title}
      </h3>

      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <Tag key={tag} label={tag} variant="default" />
        ))}
      </div>

      <a
        href={href}
        download
        className="inline-flex items-center justify-center w-full bg-brand-orange text-brand-black font-medium py-3 px-4 rounded hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200"
        aria-label={`Download ${title}`}
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        Download
      </a>
    </div>
  )
}
