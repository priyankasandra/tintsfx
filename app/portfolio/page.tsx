'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import SectionGrid from '@/components/SectionGrid'
import Lightbox from '@/components/Lightbox'

// Portfolio image data
const portfolioData = {
  beauty: [
    "/portfolio/beauty/2.jpg",
    "/portfolio/beauty/34.jpg",
    "/portfolio/beauty/35.jpg",
    "/portfolio/beauty/36.jpg",
    "/portfolio/beauty/37.jpg",
    "/portfolio/beauty/38.jpg",
    "/portfolio/beauty/39.jpg",
    "/portfolio/beauty/43ae325b-41e2-4c22-8a64-7fc908c2b0a8.jpg",
    "/portfolio/beauty/59.jpg",
    "/portfolio/beauty/68.jpg",
    "/portfolio/beauty/76.jpg",
  ],
  injuries: [
    "/portfolio/injuries/10.jpg",
    "/portfolio/injuries/23.jpg",
    "/portfolio/injuries/24.jpg",
    "/portfolio/injuries/25.jpg",
    "/portfolio/injuries/26.jpg",
    "/portfolio/injuries/27.jpg",
    "/portfolio/injuries/46.jpg",
    "/portfolio/injuries/47.jpg",
    "/portfolio/injuries/50.jpg",
    "/portfolio/injuries/51.jpg",
    "/portfolio/injuries/52.jpg",
  ],
  aging: [
    "/portfolio/aging/2.jpg",
    "/portfolio/aging/19.jpg",
    "/portfolio/aging/22.jpg",
    "/portfolio/aging/70.jpg",
    "/portfolio/aging/71.jpg",
  ],
  fantasy: [
    "/portfolio/fantasy/9.jpg",
    "/portfolio/fantasy/31.jpg",
    "/portfolio/fantasy/33.jpg",
    "/portfolio/fantasy/72.jpg",
    "/portfolio/fantasy/73.jpg",
    "/portfolio/fantasy/74.jpg",
    "/portfolio/fantasy/75.jpg",
    "/portfolio/fantasy/77.jpg",
    "/portfolio/fantasy/79.jpg",
  ],
  prosthetics: [
    "/portfolio/prosthetics/1.jpg",
    "/portfolio/prosthetics/3.jpg",
    "/portfolio/prosthetics/4.jpg",
    "/portfolio/prosthetics/5.jpg",
    "/portfolio/prosthetics/6.jpg",
    "/portfolio/prosthetics/7.jpg",
    "/portfolio/prosthetics/8.jpg",
    "/portfolio/prosthetics/11.jpg",
    "/portfolio/prosthetics/12.jpg",
    "/portfolio/prosthetics/13.jpg",
    "/portfolio/prosthetics/14.jpg",
    "/portfolio/prosthetics/15.jpg",
    "/portfolio/prosthetics/16.jpg",
    "/portfolio/prosthetics/17.jpg",
    "/portfolio/prosthetics/18.jpg",
    "/portfolio/prosthetics/20.jpg",
    "/portfolio/prosthetics/21.jpg",
    "/portfolio/prosthetics/28.jpg",
    "/portfolio/prosthetics/29.jpg",
    "/portfolio/prosthetics/30.jpg",
    "/portfolio/prosthetics/32.jpg",
    "/portfolio/prosthetics/40.jpg",
    "/portfolio/prosthetics/41.jpg",
    "/portfolio/prosthetics/42.jpg",
    "/portfolio/prosthetics/43.jpg",
    "/portfolio/prosthetics/44.jpg",
    "/portfolio/prosthetics/45.jpg",
    "/portfolio/prosthetics/48.jpg",
    "/portfolio/prosthetics/49.jpg",
    "/portfolio/prosthetics/53.jpg",
    "/portfolio/prosthetics/54.jpg",
    "/portfolio/prosthetics/55.jpg",
    "/portfolio/prosthetics/56.jpg",
    "/portfolio/prosthetics/57.jpg",
    "/portfolio/prosthetics/58.jpg",
    "/portfolio/prosthetics/69.jpg",
    "/portfolio/prosthetics/78.jpg",
  ],
  behind: [
    "/portfolio/behind/IMG_6113.jpg",
    "/portfolio/behind/60.jpg",
    "/portfolio/behind/61.jpg",
    "/portfolio/behind/62.jpg",
    "/portfolio/behind/63.jpg",
    "/portfolio/behind/64.jpg",
    "/portfolio/behind/65.jpg",
    "/portfolio/behind/66.jpg",
    "/portfolio/behind/67.jpg",
  ]
}

const categories = [
  { id: 'prosthetics', title: 'Prosthetics', images: portfolioData.prosthetics },
  { id: 'injuries', title: 'Injuries', images: portfolioData.injuries },
  { id: 'aging', title: 'Aging', images: portfolioData.aging },
  { id: 'fantasy', title: 'Fantasy', images: portfolioData.fantasy },
  { id: 'beauty', title: 'Beauty', images: portfolioData.beauty },
  { id: 'behind', title: 'Behind the scenes', images: portfolioData.behind },
]

export default function Portfolio() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState<string[]>([])
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (categoryImages: string[], imageIndex: number) => {
    setLightboxImages(categoryImages)
    setLightboxIndex(imageIndex)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrev = () => {
    setLightboxIndex((prev) => 
      prev > 0 ? prev - 1 : lightboxImages.length - 1
    )
  }

  const goToNext = () => {
    setLightboxIndex((prev) => 
      prev < lightboxImages.length - 1 ? prev + 1 : 0
    )
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 120 // Account for sticky header
      const elementPosition = element.offsetTop - headerOffset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero Header */}
          <div className="py-16 text-center">
            <h1 className="text-6xl lg:text-8xl font-bold text-white font-space-grotesk mb-8">
              PORTFOLIO
            </h1>
          </div>

          {/* Sticky Category Navigation */}
          <div className="sticky top-20 z-40 bg-brand-black bg-opacity-95 backdrop-blur-sm border-b border-gray-800 py-4 mb-8">
            <nav className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className="text-brand-orange hover:text-white transition-colors duration-200 font-medium text-lg"
                >
                  {category.title}
                </button>
              ))}
            </nav>
          </div>

          {/* Portfolio Sections */}
          <div className="space-y-24 pb-24">
            {categories.map((category) => (
              <SectionGrid
                key={category.id}
                id={category.id}
                title={category.title}
                images={category.images}
                onImageClick={(index) => openLightbox(category.images, index)}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <Lightbox
            images={lightboxImages}
            currentIndex={lightboxIndex}
            onClose={closeLightbox}
            onPrev={goToPrev}
            onNext={goToNext}
          />
        )}
      </main>
    </>
  )
}
