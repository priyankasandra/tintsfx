'use client'

import { useState } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import BookSeatButton from '@/components/BookSeatButton'

export default function LiveZoomWorkshop() {
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const syllabusModules = [
    {
      id: 'module1',
      title: 'MODULE 1 – Kit & setup',
      content: 'What to prep at home; camera angle, lighting, safety, workspace protection for optimal online learning experience.'
    },
    {
      id: 'module2', 
      title: 'MODULE 2 – Quick wounds',
      content: 'Build a camera-ready wound in ~7 minutes; edges & texture that read on webcam with proper lighting and camera positioning.'
    },
    {
      id: 'module3',
      title: 'MODULE 3 – Pros-aide transfers demo',
      content: 'At-home approach to sculpt → tray → adhesive load → transfer & quick paint using materials available for home workshops.'
    },
    {
      id: 'module4',
      title: 'MODULE 4 – Coloration & finishing on webcam',
      content: 'Alcohol palettes, quick mottling, highlights/shadows for low-bitrate video that translate well through online streaming.'
    },
    {
      id: 'module5',
      title: 'MODULE 5 – Q&A',
      content: 'Live troubleshooting, kit substitutions, aftercare, and personalized feedback during the interactive session.'
    }
  ]

  const faqs = [
    {
      id: 'faq1',
      question: 'What equipment do I need for the Zoom workshop?',
      answer: 'A good webcam or smartphone camera, adequate lighting (desk lamp works), and basic makeup supplies. We\'ll send a detailed kit list after booking.'
    },
    {
      id: 'faq2',
      question: 'Will the session be recorded?',
      answer: 'Yes! You\'ll get access to the recording for 30 days after the live session, so you can review techniques and practice at your own pace.'
    },
    {
      id: 'faq3',
      question: 'What timezone is the workshop in?',
      answer: 'The live session runs on IST (Indian Standard Time). We chose a time that works for most global participants, and you\'ll have replay access.'
    }
  ]

  const studentGallery = [
    '/workshops/live-zoom/gallery/1.jpg',
    '/workshops/live-zoom/gallery/2.jpg',
    '/workshops/live-zoom/gallery/3.jpg',
    '/workshops/live-zoom/gallery/4.jpg'
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
                    LIVE ZOOM WORKSHOP
                  </h1>
                  <span className="border-2 border-brand-orange text-brand-orange px-3 py-1 text-sm font-medium">
                    CERTIFICATE
                  </span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white font-space-grotesk mb-4">
                  (Global)
                </h2>
                <p className="text-xl text-gray-300">
                  Nov 8, 2025 • ₹3,000 ($36)
                </p>
              </div>
              
              {/* Mobile Booking Card */}
              <div className="lg:hidden bg-black border border-gray-800 p-6 rounded-lg">
                <div className="text-right mb-4">
                  <div className="text-3xl font-bold text-white">₹3,000</div>
                  <div className="text-gray-300">Nov 8, 2025</div>
                  <div className="text-brand-orange font-medium mt-2">14 SEATS LEFT</div>
                </div>
                <BookSeatButton 
                  amountINR={3000}
                  label="BOOK SEAT"
                />
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
                        aria-expanded={expandedSyllabus === module.id}
                        aria-controls={`${module.id}-content`}
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
                        <div id={`${module.id}-content`} className="pb-4 text-gray-300">
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
                      'Zoom-specific, camera-ready wound in 7 minutes',
                      'Pros-aide transfers basics (home setup)', 
                      'Edge control and coloration that reads on video',
                      'IST timezone session + 30-day replay'
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

                {/* Kit Requirements */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Kit requirements</h3>
                  <ul className="space-y-3">
                    {[
                      'Basic wound makeup supplies',
                      'Good lighting setup',
                      'Webcam or smartphone camera',
                      'Detailed kit list provided after booking'
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
                  <p className="text-gray-300">Stable internet connection, basic makeup supplies, and enthusiasm to learn online</p>
                </section>

                {/* Who it's for */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Who it's for</h3>
                  <p className="text-gray-300">Global participants, beginners to SFX, remote learners, and those wanting flexible workshop access</p>
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
                        aria-expanded={expandedFAQ === faq.id}
                        aria-controls={`${faq.id}-content`}
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
                        <div id={`${faq.id}-content`} className="pb-4 text-gray-300">
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
                <div className="text-right mb-6">
                  <div className="text-3xl font-bold text-white">₹3,000</div>
                  <div className="text-gray-300">Nov 8, 2025</div>
                  <div className="text-brand-orange font-medium mt-2">14 SEATS LEFT</div>
                </div>
                <BookSeatButton 
                  amountINR={3000}
                  label="BOOK SEAT"
                />
              </div>

              {/* Student Gallery */}
              <section>
                <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Student gallery</h3>
                <div className="grid grid-cols-2 gap-3">
                  {studentGallery.map((image, index) => (
                    <div key={index} className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden hover:scale-105 hover:ring-2 hover:ring-brand-orange transition-all duration-200">
                      <Image
                        src={image}
                        alt={`Live Zoom Workshop Student Result ${index + 1}`}
                        fill
                        className="object-cover"
                        loading="lazy"
                      />
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
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm4 2a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300 text-sm">Online workshop</span>
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