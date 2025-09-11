'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import BookSeatButton from '@/components/BookSeatButton'

export default function ProIntensiveWorkshop() {
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const syllabusModules = [
    {
      id: 'module1',
      title: 'MODULE 1 – Lifecasting & Safety',
      content: 'Professional lifecasting techniques including safety protocols, material handling, and creating accurate facial casts for appliance production.'
    },
    {
      id: 'module2', 
      title: 'MODULE 2 – Sculpture for Silicone Appliances',
      content: 'Advanced sculpting techniques specifically for silicone appliance creation, including anatomical accuracy and production considerations.'
    },
    {
      id: 'module3',
      title: 'MODULE 3 – Molding & Encapsulation',
      content: 'Professional molding techniques and encapsulation methods for creating durable, reusable molds for appliance production.'
    },
    {
      id: 'module4',
      title: 'MODULE 4 – Casting & Edges',
      content: 'Silicone casting techniques with focus on creating invisible edges and seamless integration with skin.'
    },
    {
      id: 'module5',
      title: 'MODULE 5 – Application & Blending',
      content: 'Professional application techniques for flawless blending and edge work, optimized for Indian climate conditions.'
    },
    {
      id: 'module6',
      title: 'MODULE 6 – Coloration & Finishing',
      content: 'Advanced coloration techniques for realistic skin matching and finishing touches for camera-ready results.'
    },
    {
      id: 'module7',
      title: 'MODULE 7 – Pros-Aide Transfers (Build & Use)',
      content: 'Complete workflow for creating and deploying Pros-Aide transfers, from design to final application.'
    },
    {
      id: 'module8',
      title: 'MODULE 8 – On-Set Workflow',
      content: 'Professional on-set procedures, time management, touch-ups, and working within production schedules.'
    }
  ]

  const faqs = [
    {
      id: 'faq1',
      question: 'Do I need to bring a model?',
      answer: 'No, models will be provided for the workshop. However, you\'re welcome to bring a practice partner if you prefer working with someone familiar.'
    },
    {
      id: 'faq2',
      question: 'Will sessions be recorded?',
      answer: 'Yes, key demonstration segments will be recorded and shared with participants for review. Personal work sessions are not recorded for privacy.'
    },
    {
      id: 'faq3',
      question: 'What\'s the refund/reschedule policy?',
      answer: 'Full refund available up to 30 days before workshop. Rescheduling allowed up to 14 days prior with no additional fee. See our policies page for complete details.'
    }
  ]

  const studentGallery = [
    '/gallery/pro1.jpg',
    '/gallery/pro2.jpg',
    '/gallery/pro3.jpg',
    '/gallery/pro4.jpg',
    '/gallery/pro5.jpg',
    '/gallery/pro6.jpg',
    '/gallery/pro7.jpg',
    '/gallery/pro8.jpg'
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
                    PRO-INTENSIVE WORKSHOP
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
                      'Face lifecast to silicone appliance in a production-ready flow',
                      'Edge-invisible applications built for Indian heat/humidity', 
                      'Pros-Aide transfer creation & deployment',
                      'Fast, realistic coloration for close-ups'
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
                      'Cap plastic, silicone trial packs, pigments, deadener',
                      'Lifecast consumables (alginate, plaster bandage – demo qty)',
                      'Adhesives & removers (sample sizes)',
                      'Brushes, sponges, sculpting tools'
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
                  <p className="text-gray-300">Comfortable with basic sculpting OR completion of Beginner Workshop (recommended)</p>
                </section>

                {/* Who it's for */}
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 font-space-grotesk">Who it's for</h3>
                  <p className="text-gray-300">Working MUAs, prosthetic juniors, advanced enthusiasts preparing for set work</p>
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
                    <div key={index} className="aspect-square bg-gray-800 rounded-lg overflow-hidden hover:scale-105 hover:ring-2 hover:ring-brand-orange transition-all duration-200">
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <span className="text-gray-500 text-sm">Pro Work {index + 1}</span>
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
