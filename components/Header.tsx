'use client'
// Updated services dropdown with anchor links
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CommunitySignupModal from './CommunitySignupModal'

interface DropdownItem {
  label: string
  href: string
}

interface NavItem {
  label: string
  href?: string
  dropdown?: DropdownItem[]
}

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const navItems: NavItem[] = [
    {
      label: 'Workshops',
      dropdown: [
        { label: 'Beginner Workshop', href: '/workshops/beginner' },
        { label: 'Pro Intensive Workshop', href: '/workshops/pro-intensive' },
        { label: 'Live Zoom Workshop', href: '/workshops/live-zoom' },
        { label: 'Calendar', href: '/workshops/calendar' },
        { label: 'FAQs', href: '/workshops/faqs' },
      ]
    },
    {
      label: 'Portfolio',
      href: '/portfolio'
    },
    {
      label: 'Services',
      href: '/services'
    },
    {
      label: 'Learn',
      dropdown: [
        { label: 'Resources', href: '/learn/resources' },
        { label: 'Tutorials', href: '/learn/tutorials' },
        { label: 'Blog', href: '/learn/blog' },
      ]
    },
    {
      label: 'About',
      href: '/about'
    }
  ]

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  const handleClick = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <Image
              src="/logo.png"
              alt="TINTSFX Logo"
              width={140}
              height={45}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <button
                    className="flex items-center space-x-1 text-white hover:text-brand-orange transition-colors duration-200"
                    onClick={() => handleClick(item.label)}
                    aria-expanded={activeDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="text-white hover:text-brand-orange transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div
                    className={`absolute top-full left-0 mt-2 w-48 bg-brand-black border border-gray-800 rounded-md shadow-xl transition-all duration-200 ${
                      activeDropdown === item.label
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible'
                    }`}
                  >
                    <div className="py-2">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-white hover:text-brand-orange hover:bg-gray-900 transition-colors duration-150"
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Join Us Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-brand-orange text-brand-black font-medium px-6 py-2 rounded-sm hover:bg-brand-black hover:text-brand-orange hover:border hover:border-brand-orange transition-all duration-200"
            aria-label="Join our community"
          >
            JOIN US
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Community Signup Modal */}
      <CommunitySignupModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  )
}

export default Header
