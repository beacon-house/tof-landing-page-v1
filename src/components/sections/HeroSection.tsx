// Section A - Hero section with Learn More CTA
import React from 'react'
import { Button } from '../Button'

export const HeroSection: React.FC<{ onLearnMore: () => void }> = ({ onLearnMore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop"
          alt="Student and parent collaboration"
          className="w-full h-full object-cover opacity-10"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white"></div>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-text mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-8">
            The Hardest Part of Admissions Is Knowing What Actually Matters.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            For most students, the real challenge isn't marks —<br className="hidden sm:inline" />
            it's not having clarity on the path.
          </p>

          <p className="text-base md:text-lg text-gray-600 mb-12">
            Founder-led guidance for ambitious IB + IGCSE families.
          </p>

          <Button onClick={onLearnMore} variant="primary" className="min-w-[200px]">
            Learn More
          </Button>

          <div className="mt-16 flex justify-center">
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gold"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
