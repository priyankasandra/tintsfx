import Image from 'next/image'
import Link from 'next/link'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  href: string
  imgSrc?: string
  ctaText: string
}

export default function ServiceCard({ id, title, description, href, imgSrc, ctaText }: ServiceCardProps) {
  return (
    <div 
      id={id}
      className="bg-black border border-white/10 rounded-lg p-6 hover:shadow-lg hover:shadow-brand-orange/5 transition-all duration-300 text-center h-full flex flex-col"
    >
      <h3 className="text-xl lg:text-2xl font-bold text-brand-orange font-space-grotesk mb-4">
        {title}
      </h3>
      
      <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <Link
        href={href}
        className="inline-block bg-brand-orange text-brand-black font-medium py-3 px-6 rounded hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200 text-sm lg:text-base"
        aria-label={`${ctaText} for ${title}`}
      >
        {ctaText}
      </Link>
    </div>
  )
}
