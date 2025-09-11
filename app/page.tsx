import Header from '@/components/Header'
import Hero from '@/components/Hero'

export default function Home() {
  // Updated header with services anchor links
  return (
    <main className="min-h-screen bg-brand-black">
      <Header />
      <Hero />
    </main>
  )
}
