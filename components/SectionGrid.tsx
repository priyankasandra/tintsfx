'use client'

import Image from 'next/image'

interface SectionGridProps {
  id: string
  title: string
  images: string[]
  onImageClick: (index: number) => void
}

export default function SectionGrid({ id, title, images, onImageClick }: SectionGridProps) {
  if (images.length === 0) {
    return (
      <section id={id} className="py-16">
        <h2 className="text-3xl font-bold text-brand-orange font-space-grotesk mb-8 uppercase tracking-wider">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[3/4] bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Image {i}</span>
            </div>
          ))}
        </div>
      </section>
    )
  }

  return (
    <section id={id} className="py-16">
      <h2 className="text-3xl font-bold text-brand-orange font-space-grotesk mb-8 uppercase tracking-wider">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => onImageClick(index)}
            className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={image}
              alt=""
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        ))}
      </div>
    </section>
  )
}

