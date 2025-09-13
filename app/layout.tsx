import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TINTSFX',
  description: 'Editorial, cinematic, minimal design studio',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-white font-inter antialiased">
        {children}
      </body>
    </html>
  )
}

