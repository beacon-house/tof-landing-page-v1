// Sticky header with dynamic CTA appearing after first scroll and enhanced navigation
import React, { useState, useEffect } from 'react'

interface HeaderProps {
  onCTAClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showHeaderCTA, setShowHeaderCTA] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 20)
      // Show CTA after scrolling past one viewport height
      setShowHeaderCTA(scrollPosition > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-content mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0 max-w-[60%] md:max-w-none">
            <img
              src="/bh-ig-logo.png"
              alt="Beacon House"
              className="h-8 md:h-12 w-auto"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('bridge')}
              className="text-navy hover:text-gold transition-colors font-medium text-sm"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-navy hover:text-gold transition-colors font-medium text-sm"
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="text-navy hover:text-gold transition-colors font-medium text-sm"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-navy hover:text-gold transition-colors font-medium text-sm"
            >
              Results
            </button>
            <button
              onClick={onCTAClick}
              className={`bg-gold text-navy px-5 py-2 rounded-lg font-semibold hover:bg-gold/90 transition-all text-sm ${
                showHeaderCTA ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
              style={{ transition: 'all 0.3s ease-in-out' }}
            >
              Talk to Founders
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40">
          <nav className="px-6 py-8 space-y-6 h-full">
            <button
              onClick={() => scrollToSection('bridge')}
              className="block w-full text-left py-4 text-navy text-xl font-medium hover:text-gold transition-colors"
            >
              Our Approach
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-4 text-navy text-xl font-medium hover:text-gold transition-colors"
            >
              Who We Are
            </button>
            <button
              onClick={() => scrollToSection('process')}
              className="block w-full text-left py-4 text-navy text-xl font-medium hover:text-gold transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="block w-full text-left py-4 text-navy text-xl font-medium hover:text-gold transition-colors"
            >
              Results
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
