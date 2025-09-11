'use client'

import { useState } from 'react'
import { supabase, type CommunitySignup } from '@/lib/supabase'

interface CommunitySignupModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CommunitySignupModal({ isOpen, onClose }: CommunitySignupModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    experience_level: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      console.log('Attempting to insert data:', {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        experience_level: formData.experience_level || null,
        status: 'pending'
      })

      const { error, data } = await supabase
        .from('community_signups')
        .insert([
          {
            name: formData.name.trim(),
            phone: formData.phone.trim(),
            experience_level: formData.experience_level || null,
            status: 'pending'
          }
        ])

      console.log('Supabase response:', { error, data })

      if (error) {
        console.error('Supabase error:', error)
        throw error
      }

      setSubmitted(true)
      setFormData({ name: '', phone: '', experience_level: '' })
    } catch (err: any) {
      console.error('Full error:', err)
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setSubmitted(false)
    setError('')
    setFormData({ name: '', phone: '', experience_level: '' })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-brand-black border border-gray-800 rounded-lg max-w-md w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white font-space-grotesk mb-2">
                Join Our Community
              </h2>
              <p className="text-gray-300 text-sm">
                Stay updated with exclusive workshop announcements, behind-the-scenes content, and special offers.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* Experience Level Field */}
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-white mb-2">
                  Experience Level (Optional)
                </label>
                <select
                  id="experience"
                  value={formData.experience_level}
                  onChange={(e) => setFormData({ ...formData, experience_level: e.target.value })}
                  className="w-full px-3 py-2 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                >
                  <option value="">Select your level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Professional">Professional</option>
                </select>
              </div>

              {/* Error Message */}
              {error && (
                <div className="text-red-400 text-sm">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded transition-colors duration-200"
              >
                {isSubmitting ? 'Joining...' : 'Join Community'}
              </button>
            </form>
          </>
        ) : (
          /* Success State */
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white font-space-grotesk mb-2">
              Welcome to the Community!
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Thank you for joining! We'll review your request and add you to our WhatsApp community soon. 
              You'll receive updates about upcoming workshops and exclusive content.
            </p>
            <button
              onClick={handleClose}
              className="bg-brand-orange hover:bg-orange-600 text-white font-bold py-2 px-6 rounded transition-colors duration-200"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
