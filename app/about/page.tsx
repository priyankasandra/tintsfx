import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'

export default function AboutPage() {
  const stats = [
    { label: '20+ films', icon: '🎬' },
    { label: 'LA-trained', icon: '🎓' },
    { label: 'Based in India • Available worldwide', icon: '🌍' }
  ]

  const services = [
    {
      title: 'Character Prosthetics',
      description: 'Full-face transformations, aging, fantasy creatures, and detailed character work for film and television.',
      icon: '🎭'
    },
    {
      title: 'On-Set Application & Blending',
      description: 'Professional application, touch-ups, and maintenance throughout production days.',
      icon: '🎨'
    },
    {
      title: 'Pros-Aide Transfers & Silicone',
      description: 'Custom transfers, silicone appliances, and specialized materials for different production needs.',
      icon: '🔬'
    },
    {
      title: 'Pre-Production Services',
      description: 'Lifecasting, mold making, tests, and complete pre-production prosthetic development.',
      icon: '⚙️'
    }
  ]

  // Sample portfolio images - diverse selection from different categories
  const selectedWork = [
    { src: '/portfolio/prosthetics/1.jpg', alt: 'Character prosthetic work' },
    { src: '/portfolio/aging/2.jpg', alt: 'Aging makeup application' },
    { src: '/portfolio/beauty/34.jpg', alt: 'Beauty prosthetic work' },
    { src: '/portfolio/injuries/10.jpg', alt: 'Injury simulation work' },
    { src: '/portfolio/fantasy/31.jpg', alt: 'Fantasy character makeup' },
    { src: '/portfolio/behind/60.jpg', alt: 'Behind the scenes process' }
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white">
        {/* Hero Section with Background Image */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/portrait.jpg"
              alt="Priyanka Puvvada Portrait"
              fill
              className="object-cover object-center"
              priority
              quality={100}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-white font-space-grotesk mb-6">
              About Priyanka Puvvada
            </h1>
            {/* Orange accent line */}
            <div className="w-24 h-1 bg-brand-orange mx-auto mb-8" />
            <p className="text-xl md:text-2xl lg:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-light">
              Prosthetic & SFX artist trained in Los Angeles, working across South Indian cinema and Hollywood—translating a director's vision into skin-real illusions.
            </p>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="py-16 px-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-black border border-gray-800 rounded-full px-6 py-3 hover:border-brand-orange/50 transition-colors duration-300"
                >
                  <span className="text-2xl mr-3">{stat.icon}</span>
                  <span className="font-medium text-gray-300">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Training */}
        <section className="py-20 px-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Philosophy */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-orange font-space-grotesk mb-6">
                  Philosophy
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Great prosthetic work disappears on camera. The audience should never notice the makeup—only the character. This philosophy drives every piece I create, from subtle aging to full creature transformations.
                  </p>
                  <p>
                    Clean edges, believable texture, and perfect color matching aren't just technical goals—they're the foundation of storytelling. When prosthetics are invisible, actors can fully embody their characters without distraction.
                  </p>
                  <p>
                    Every project teaches something new. Whether it's adapting techniques for India's challenging climate or collaborating with international productions, I approach each film as an opportunity to push creative boundaries while maintaining professional standards.
                  </p>
                </div>
              </div>

              {/* Training & Background */}
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-brand-orange font-space-grotesk mb-6">
                  Training & Background
                </h2>
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    Trained at Cinema Makeup School in Los Angeles, I learned from industry veterans who worked on major Hollywood productions. This foundation in professional techniques and materials gives me the technical precision needed for film work.
                  </p>
                  <p>
                    Returning to India, I've adapted these international standards to work within South Indian cinema's unique demands—extreme heat, long shooting days, and diverse storytelling traditions. This cross-cultural experience lets me bridge Hollywood techniques with local production realities.
                  </p>
                  <p>
                    Working across Telugu, Tamil, and Malayalam films has expanded my understanding of character design and cultural nuances. Each regional industry brings different aesthetic approaches and technical challenges that continue to shape my artistic growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What I Do */}
        <section className="py-20 px-6 bg-gray-900/20 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-space-grotesk mb-6">
                What I Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive prosthetic solutions from concept to final shot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-black border border-gray-800 rounded-lg p-8 hover:border-brand-orange/50 transition-all duration-300 group"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white font-space-grotesk mb-4 group-hover:text-brand-orange transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section className="py-20 px-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white font-space-grotesk mb-6">
                Selected Work
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A glimpse of prosthetic work across different projects and techniques
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {selectedWork.map((work, index) => (
                <div 
                  key={index}
                  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer"
                >
                  <Image
                    src={work.src}
                    alt={work.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/portfolio"
                className="inline-flex items-center text-brand-orange hover:text-white transition-colors duration-200 font-medium"
              >
                View Full Portfolio
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Panel */}
        <section className="py-20 px-6 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black border-2 border-brand-orange/30 rounded-lg p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk mb-4">
                  Let's Create Something Amazing
                </h2>
                <p className="text-xl text-gray-300">
                  Ready to bring your characters to life? Let's discuss your project.
                </p>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="text-center md:text-left">
                  <h3 className="text-lg font-bold text-brand-orange mb-2">Instagram</h3>
                  <a 
                    href="https://instagram.com/tintsfx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-brand-orange transition-colors duration-200 text-lg flex items-center justify-center md:justify-start"
                    aria-label="Follow TINTSFX on Instagram"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @tintsfx
                  </a>
                </div>
                <div className="text-center md:text-right">
                  <h3 className="text-lg font-bold text-brand-orange mb-2">Phone / WhatsApp</h3>
                  <a 
                    href="tel:+919100333800"
                    className="text-white hover:text-brand-orange transition-colors duration-200 text-lg flex items-center justify-center md:justify-end"
                    aria-label="Call or WhatsApp Priyanka"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                    +91 9100333800
                  </a>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services#film-department-hire"
                  className="inline-block bg-brand-orange text-brand-black font-bold py-4 px-8 rounded hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200 text-center"
                  aria-label="Hire for film productions"
                >
                  Hire for Productions
                </Link>
                <Link
                  href="/workshops/calendar"
                  className="inline-block border border-brand-orange text-brand-orange font-bold py-4 px-8 rounded hover:bg-brand-orange hover:text-brand-black transition-all duration-200 text-center"
                  aria-label="Join a prosthetic makeup workshop"
                >
                  Join a Workshop
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
