interface MDXContentProps {
  content: string
  className?: string
}

export default function MDXContent({ content, className = "" }: MDXContentProps) {
  // For now, we'll render plain text/basic markdown
  // Later this can be replaced with proper MDX rendering
  
  const formatContent = (text: string) => {
    // Simple markdown-like formatting
    return text
      .split('\n\n')
      .map((paragraph, index) => {
        // Handle headers
        if (paragraph.startsWith('# ')) {
          return (
            <h1 key={index} className="text-3xl font-bold text-brand-orange font-space-grotesk mb-6 mt-8">
              {paragraph.slice(2)}
            </h1>
          )
        }
        if (paragraph.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-white font-space-grotesk mb-4 mt-6">
              {paragraph.slice(3)}
            </h2>
          )
        }
        if (paragraph.startsWith('### ')) {
          return (
            <h3 key={index} className="text-xl font-bold text-white font-space-grotesk mb-3 mt-5">
              {paragraph.slice(4)}
            </h3>
          )
        }
        
        // Handle lists
        if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
          const items = paragraph.split('\n- ').map(item => item.replace(/^- /, ''))
          return (
            <ul key={index} className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              {items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          )
        }
        
        // Regular paragraphs
        return (
          <p key={index} className="text-gray-300 leading-relaxed mb-6">
            {paragraph}
          </p>
        )
      })
  }

  return (
    <div className={`prose prose-invert prose-orange max-w-none ${className}`}>
      {formatContent(content)}
    </div>
  )
}
