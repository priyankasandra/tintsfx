import Header from '@/components/Header'
import Link from 'next/link'

export default function ThankYouPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-brand-black text-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white font-space-grotesk mb-6">
              PAYMENT SUCCESSFUL!
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your seat has been confirmed. Welcome to TINTSFX Workshops!
            </p>
          </div>

          <div className="bg-black border border-brand-orange rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-brand-orange mb-4">What's Next?</h2>
            <div className="text-left space-y-4 text-gray-300">
              <div className="flex items-start">
                <span className="text-brand-orange mr-3">📧</span>
                <span>You'll receive a confirmation email with workshop details within 24 hours.</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-orange mr-3">📍</span>
                <span>Location details and kit information will be shared 3 days before the workshop.</span>
              </div>
              <div className="flex items-start">
                <span className="text-brand-orange mr-3">💬</span>
                <span>Join our WhatsApp group for updates and to connect with other students.</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Link
              href="/workshops"
              className="inline-block bg-brand-orange text-brand-black font-bold py-3 px-8 rounded hover:bg-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200 mr-4"
            >
              View All Workshops
            </Link>
            <Link
              href="/"
              className="inline-block border border-brand-orange text-brand-orange font-bold py-3 px-8 rounded hover:bg-brand-orange hover:text-brand-black transition-all duration-200"
            >
              Back to Home
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4">Questions about your booking?</p>
            <div className="flex justify-center space-x-6">
              <a
                href="mailto:priyanka@tintsfx.com"
                className="text-brand-orange hover:text-white transition-colors duration-200"
              >
                Email Support
              </a>
              <a
                href="https://wa.me/+919100333800"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-orange hover:text-white transition-colors duration-200"
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
