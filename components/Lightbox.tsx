'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

interface LightboxProps {
  images: string[]
  currentIndex: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  
  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          e.preventDefault()
          onPrev()
          break
        case 'ArrowRight':
          e.preventDefault()
          onNext()
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, onPrev, onNext])

  // Focus management
  useEffect(() => {
    const focusableElements = overlayRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements?.[0] as HTMLElement
    firstElement?.focus()

    // Prevent background scroll
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Touch handling for swipe
  useEffect(() => {
    let startX = 0
    let startY = 0
    
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      startY = e.touches[0].clientY
    }
    
    const handleTouchEnd = (e: TouchEvent) => {
      if (!startX || !startY) return
      
      const endX = e.changedTouches[0].clientX
      const endY = e.changedTouches[0].clientY
      const diffX = startX - endX
      const diffY = startY - endY
      
      // Only respond to horizontal swipes (ignore vertical scrolling)
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) {
          onNext() // Swipe left -> next
        } else {
          onPrev() // Swipe right -> prev
        }
      }
      
      startX = 0
      startY = 0
    }

    const imageElement = imageRef.current
    if (imageElement) {
      imageElement.addEventListener('touchstart', handleTouchStart)
      imageElement.addEventListener('touchend', handleTouchEnd)
      
      return () => {
        imageElement.removeEventListener('touchstart', handleTouchStart)
        imageElement.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [onNext, onPrev])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const currentImage = images[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  return (
    <div 
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
      onClick={handleOverlayClick}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-60 w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
        aria-label="Close lightbox"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Previous Button */}
      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Next Button */}
      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-60 w-12 h-12 flex items-center justify-center bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Image */}
      <div className="relative max-h-[90vh] max-w-[90vw] flex items-center justify-center">
        <Image
          ref={imageRef}
          src={currentImage}
          alt=""
          width={1200}
          height={800}
          className="max-h-[90vh] max-w-[90vw] object-contain"
          priority
        />
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  )
}

