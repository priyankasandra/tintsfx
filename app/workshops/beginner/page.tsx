'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import BookSeatButton from '@/components/BookSeatButton'

export default function BeginnerWorkshop() {
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const syllabusModules = [
    {
      id: 'module1',
      title: 'MODULE 1 – Introduction to Prosthetics',
      content: 'Learn the fundamentals of prosthetic makeup, including materials, tools, and basic techniques used in the industry.'
    },
    {
      id: 'module2', 
      title: 'MODULE 2 – Sculpting basics',
      content: 'Hands-on sculpting techniques using clay and other materials to create realistic facial features and textures.'
    },
    {
      id: 'module3',
      title: 'MODULE 3 – Character Makeup',
      content: 'Advanced character creation techniques including Pros-aide transfers and realistic aging effects.'
    }
  ]

  const faqs = [
    {
      id: 'faq1',
      question: 'How can I contact the instructor if I have questions?',
      answer: 'You can reach out to Priyanka Puvvada directly through our contact form or email. We typically respond within 24 hours.'
    },
    {
      id: 'faq2',
      question: 'What should I bring to the workshop?',
      answer: 'All materials and tools are included in the kit. Just bring yourself and comfortable clothes that you don\'t mind getting a bit messy!'
    },
    {
      id: 'faq3',
      question: 'Is there a certificate provided?',
      answer: 'Yes! Upon successful completion of the workshop, you\'ll receive a certificate of completion from TINTSFX.'
    }
  ]

  const studentGallery = [
    '/placeholder-face-1.jpg',
    '/placeholder-face-2.jpg', 
    '/placeholder-face-3.jpg',
    '/placeholder-face-4.jpg',
    '/placeholder-face-5.jpg',
    '/placeholder-face-6.jpg',
    '/placeholder-face-7.jpg',
    '/placeholder-face-8.jpg'
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <div className="mb-12">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-5xl lg:text-6xl font-bold text-white font-space-grotesk">
                    BEGINNER WORKSHOP
                  </h1>
                  <span className="border-2 border-brand-orange text-brand-orange px-3 py-1 text-sm font-medium">
                    CERTIFICATE
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk mb-4">
                  (Hyderabad)
                </h2>
                <p className="text-xl text-brand-orange font-medium">
                  Coming Soon
                </p>
              </div>
              
              {/* Mobile Booking Card */}
              <div className="lg:hidden bg-black border border-gray-800 p-6 rounded-lg">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-brand-orange">Coming Soon</div>
                  <div className="text-gray-300 mt-2">Stay tuned for updates</div>
                </div>
                <button
                  disabled
                  className="w-full bg-gray-800 text-gray-500 font-bold py-3 px-6 rounded cursor-not-allowed"
                >
                  NOTIFY ME
                </button>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Syllabus and Details */}
            <div className="lg:col-span-2 space-y-12">
              {/* Syllabus */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 font-space-grotesk flex items-center">
                  SYLLABUS
                  <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </h3>
                <div className="space-y-4">
                  {syllabusModules.map((module) => (
                    <div key={module.id} className="border-b border-gray-800">
                      <button
                        className="w-full text-left py-4 flex items-center justify-between hover:text-brand-orange transition-colors duration-200"
                        onClick={() => setExpandedSyllabus(expandedSyllabus === module.id ? null : module.id)}
                      >
                        <span className="text-lg font-medium">{module.title}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 ${
                            expandedSyllabus === module.id ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedSyllabus === module.id && (
                        <div className="pb-4 text-gray-300">
                          {module.content}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* You'll Learn */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">You'll learn</h3>
                  <ul className="space-y-3">
                    {[
                      'Fundamentals of prosthetic makeup',
                      'Hands-on sculpting basics', 
                      'Pros-aide transfers'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Kit Included */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Kit included</h3>
                  <ul className="space-y-3">
                    {[
                      'Sculpting tools',
                      'Brushes & paints'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Requirements */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Requirements</h3>
                  <p className="text-gray-300">No prior experience required</p>
                </section>

                {/* Who it's for */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Who it's for</h3>
                  <p className="text-gray-300">Aspiring SFX artists and makeup enthusiasts</p>
                </section>
              </div>

              {/* FAQs */}
              <section>
                <h3 className="text-2xl font-bold text-white mb-6 font-space-grotesk">FAQs</h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border-b border-gray-800">
                      <button
                        className="w-full text-left py-4 flex items-start justify-between hover:text-brand-orange transition-colors duration-200"
                        onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                      >
                        <span className="text-lg font-medium pr-4">{faq.question}</span>
                        <svg 
                          className={`w-5 h-5 transition-transform duration-200 flex-shrink-0 mt-0.5 ${
                            expandedFAQ === faq.id ? 'rotate-180' : ''
                          }`}
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {expandedFAQ === faq.id && (
                        <div className="pb-4 text-gray-300">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column - Booking and Gallery */}
            <div className="space-y-8">
              {/* Desktop Booking Card */}
              <div className="hidden lg:block bg-black border border-gray-800 p-6 rounded-lg sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-brand-orange">Coming Soon</div>
                  <div className="text-gray-300 mt-2">Stay tuned for updates</div>
                </div>
                <button
                  disabled
                  className="w-full bg-gray-800 text-gray-500 font-bold py-3 px-6 rounded cursor-not-allowed"
                >
                  NOTIFY ME
                </button>
              </div>

              {/* Student Gallery */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Student gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {studentGallery.map((image, index) => (
                    <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-200">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Student {index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Contact</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-white">Priyanka Puvvada</p>
                    <p className="text-gray-300 text-sm">Instructor</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-orange rounded flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">View location</span>
                  </div>
                </div>
              </section>

              {/* Policies */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Policies</h3>
                <button className="text-brand-orange hover:underline">
                  View cancellation & refund policies
                </button>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
