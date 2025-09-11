'use client'

import { useState } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section className="relative h-screen w-full overflow-hidden bg-brand-black">
      {/* Portrait Image */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div 
          className={`relative w-full h-full transition-opacity duration-500 ease-out ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src="/hero-illustration.png"
              alt="Prosthetic portrait"
              fill
              className="relative z-10 object-cover object-center"
              priority
              quality={100}
              onLoad={() => setImageLoaded(true)}
            />
            
            {/* Gradient fade at bottom */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20"
              style={{
                background: 'linear-gradient(to bottom, transparent 0%, #0A0A0A 100%)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
