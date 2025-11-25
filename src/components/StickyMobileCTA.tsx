// Sticky mobile CTA button that appears after first scroll - thumb-friendly position at bottom
import React, { useState, useEffect } from 'react'

interface StickyMobileCTAProps {
  onClick: () => void
}

export const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onClick }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling down 100vh (one full screen)
      setIsVisible(window.scrollY > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 pointer-events-none">
      <div className="px-4 pb-4 pointer-events-auto">
        <button
          onClick={onClick}
          className="w-full bg-gold text-navy py-3.5 px-6 rounded-lg font-semibold shadow-lg hover:bg-gold/90 transition-all active:scale-95"
        >
          Talk to Founders
        </button>
      </div>
    </div>
  )
}
