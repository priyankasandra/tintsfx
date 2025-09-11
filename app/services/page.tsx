import Header from '@/components/Header'
import ServiceCard from '@/components/ServiceCard'
import Workflow from '@/components/Workflow'
import { services } from '@/lib/services'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
  // Updated services page with smooth scrolling
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-6xl lg:text-8xl font-bold text-white font-space-grotesk mb-8">
              SERVICES ✨
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From concept sculpt to on-set application, TINTSFX provides full prosthetic solutions for film & media.
            </p>
          </div>

          {/* Hero BTS Image */}
          <div className="mt-16 max-w-5xl mx-auto">
            <div className="aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src="/IMG_6113.jpg"
                alt="Behind the scenes of TINTSFX prosthetic makeup work"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Service Cards Grid */}
        <section className="py-20 px-6 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white font-space-grotesk mb-4">
                Professional Services
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Comprehensive prosthetic makeup solutions tailored for film production needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  href={service.href}
                  imgSrc={service.imgSrc}
                  ctaText={service.ctaText}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="pt-8 pb-20 px-6 bg-gray-900/30 scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <Workflow />
          </div>
        </section>

        {/* Closing CTA Strip */}
        <section className="py-20 px-6 bg-gradient-to-r from-brand-orange/10 to-brand-orange/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white font-space-grotesk mb-8">
              Ready to bring your characters to life?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create something extraordinary together
            </p>
            <Link
              href="/contact"
              className="inline-block bg-brand-orange text-brand-black font-bold py-4 px-8 rounded hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200"
              aria-label="Request a quote"
            >
              Request a Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
