'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'

interface FAQ {
  id: string
  question: string
  answer: string
}

interface FAQCategory {
  id: string
  title: string
  faqs: FAQ[]
}

export default function WorkshopsFAQs() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const faqCategories: FAQCategory[] = [
    {
      id: 'general',
      title: 'General',
      faqs: [
        {
          id: 'instructor',
          question: 'Who teaches these workshops?',
          answer: 'Priyanka Puvvada (TINTSFX), Cinema Makeup School alum with experience on 10+ films. She brings professional industry knowledge and hands-on expertise to every workshop.'
        },
        {
          id: 'certificate',
          question: 'Do I get a certificate?',
          answer: 'Yes, a digital certificate is issued after completion of any workshop. This serves as proof of your training and can be added to your professional portfolio.'
        }
      ]
    },
    {
      id: 'payments',
      title: 'Payments & Refunds',
      faqs: [
        {
          id: 'payment-methods',
          question: 'What payment methods do you accept?',
          answer: 'We accept UPI, credit/debit cards, and international cards via Razorpay. All transactions are secure and processed instantly.'
        },
        {
          id: 'refund-policy',
          question: 'What is the refund policy?',
          answer: 'Full refund up to 7 days before class; within 7 days you can reschedule once; no refunds after the class has started. Emergency rescheduling may be considered on a case-by-case basis.'
        },
        {
          id: 'invoices',
          question: 'Do you offer invoices?',
          answer: 'Yes, invoices are emailed automatically after payment. They include all necessary details for business expense claims or tax purposes.'
        }
      ]
    },
    {
      id: 'in-person',
      title: 'In-Person Logistics',
      faqs: [
        {
          id: 'venue',
          question: 'Where is the Hyderabad venue?',
          answer: 'The exact address is shared via email after booking for security purposes. The venue has ample parking available and is easily accessible by public transport.'
        },
        {
          id: 'what-to-bring',
          question: 'What should I bring?',
          answer: 'Bring a notebook for notes, optionally bring a practice model (friend/family), wear dark clothing you don\'t mind getting makeup on, and tie back long hair. We provide all materials and tools.'
        },
        {
          id: 'kit-included',
          question: 'Is the kit included?',
          answer: 'Beginner: Demo kit items are provided for use during class. Pro-Intensive: Demo kit plus some take-home items included. Specific details are listed on each workshop page.'
        }
      ]
    },
    {
      id: 'online',
      title: 'Online (Live Zoom)',
      faqs: [
        {
          id: 'camera-requirements',
          question: 'Do I need a special camera?',
          answer: 'Any 1080p webcam or smartphone camera is fine. Most important is ensuring good lighting - a desk lamp or ring light works well. We\'ll send setup tips after booking.'
        },
        {
          id: 'recording',
          question: 'Will the session be recorded?',
          answer: 'Yes! You\'ll receive a replay link valid for 30 days after the live session. This allows you to review techniques and practice at your own pace.'
        },
        {
          id: 'internet-issues',
          question: 'What if my internet drops?',
          answer: 'Don\'t worry - you\'ll still receive the replay recording and comprehensive notes. We also provide a WhatsApp group for asking questions if you miss anything during the live session.'
        }
      ]
    },
    {
      id: 'health-safety',
      title: 'Health & Safety',
      faqs: [
        {
          id: 'skin-safe',
          question: 'Are products skin-safe?',
          answer: 'We use professional SFX materials that are industry-standard and skin-safe. However, we recommend doing a patch test 24 hours before the workshop if you have sensitive skin.'
        },
        {
          id: 'allergies',
          question: 'Allergies & sensitivities',
          answer: 'Please inform us of any known allergies in advance. We can suggest alternatives or modifications to techniques based on your specific sensitivities.'
        },
        {
          id: 'removal',
          question: 'Removal & aftercare',
          answer: 'Proper removal techniques are demonstrated at the end of each class. We provide a detailed aftercare guide and recommend gentle, oil-based removers for best results.'
        }
      ]
    }
  ]

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
    setExpandedFAQ(null) // Close any open FAQ when switching categories
  }

  const toggleFAQ = (faqId: string) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId)
  }

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      action()
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Page Header */}
              <div className="mb-8">
                <h1 className="text-5xl lg:text-6xl font-bold text-white font-space-grotesk mb-4">
                  WORKSHOPS — FAQs
                </h1>
                <p className="text-xl text-gray-300">
                  Find answers to the most common questions about our prosthetic makeup workshops.
                </p>
              </div>

              {/* FAQ Categories */}
              <div className="space-y-6">
                {faqCategories.map((category) => (
                  <div key={category.id} className="border border-gray-800 rounded-lg overflow-hidden">
                    {/* Category Header */}
                    <button
                      className="w-full px-6 py-4 text-left bg-gray-900 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                      onClick={() => toggleCategory(category.id)}
                      onKeyDown={(e) => handleKeyDown(e, () => toggleCategory(category.id))}
                      aria-expanded={expandedCategory === category.id}
                      aria-controls={`category-${category.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white font-space-grotesk">
                          {category.title}
                        </h2>
                        <svg
                          className={`w-5 h-5 text-brand-orange transition-transform duration-200 ${
                            expandedCategory === category.id ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>

                    {/* Category Content */}
                    {expandedCategory === category.id && (
                      <div id={`category-${category.id}`} className="bg-black">
                        {category.faqs.map((faq) => (
                          <div key={faq.id} className="border-t border-gray-800">
                            <button
                              className="w-full px-6 py-4 text-left hover:bg-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange"
                              onClick={() => toggleFAQ(faq.id)}
                              onKeyDown={(e) => handleKeyDown(e, () => toggleFAQ(faq.id))}
                              aria-expanded={expandedFAQ === faq.id}
                              aria-controls={`faq-${faq.id}`}
                            >
                              <div className="flex items-start justify-between">
                                <h3 className="text-lg font-medium text-white pr-4">
                                  {faq.question}
                                </h3>
                                <svg
                                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 flex-shrink-0 mt-1 ${
                                    expandedFAQ === faq.id ? 'rotate-180' : ''
                                  }`}
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                              </div>
                            </button>
                            {expandedFAQ === faq.id && (
                              <div id={`faq-${faq.id}`} className="px-6 pb-4">
                                <p className="text-gray-300 leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quick Navigation */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white font-space-grotesk mb-4">
                    Quick Navigation
                  </h3>
                  <ul className="space-y-2">
                    {faqCategories.map((category) => (
                      <li key={category.id}>
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="text-left w-full text-gray-300 hover:text-brand-orange transition-colors"
                        >
                          {category.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-white font-space-grotesk mb-4">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:hello@tintsfx.com"
                      className="block text-brand-orange hover:underline"
                      rel="noopener"
                    >
                      Email Us
                    </a>
                    <a
                      href="https://wa.me/+919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-brand-orange hover:underline"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/workshops/calendar"
                    className="block w-full bg-gray-900 border border-gray-700 text-white font-medium py-3 px-4 rounded text-center hover:border-brand-orange transition-colors"
                  >
                    View Calendar
                  </Link>
                  <Link
                    href="/workshops/beginner"
                    className="block w-full bg-brand-orange text-brand-black font-bold py-3 px-4 rounded text-center hover:bg-orange-400 transition-colors"
                  >
                    Book a Seat
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="mt-16 bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-white font-space-grotesk mb-4">
              Still have a question?
            </h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Get in touch and we'll help you out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@tintsfx.com"
                className="bg-brand-orange text-brand-black font-bold py-3 px-6 rounded hover:bg-orange-400 transition-colors"
                rel="noopener"
              >
                Contact Us
              </a>
              <a
                href="https://wa.me/+919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 border border-gray-700 text-white font-medium py-3 px-6 rounded hover:border-brand-orange transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
