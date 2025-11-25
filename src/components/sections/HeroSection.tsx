// Section A - Hero section with Learn More CTA
import React from 'react'
import { Button } from '../Button'
import { StatPill } from '../StatPill'

export const HeroSection: React.FC<{ onLearnMore: () => void }> = ({ onLearnMore }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2128&auto=format&fit=crop"
          alt="Educational environment"
          className="w-full h-full object-cover object-center opacity-30"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 800px 600px at center, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 25%, rgba(255, 255, 255, 0.85) 40%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0.3) 80%, rgba(255, 255, 255, 0.1) 100%)'
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-content mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="max-w-text mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-8">
            The Hardest Part of Admissions Is Knowing What Actually Matters.
          </h1>

          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            For most students, the real challenge isn't marks —<br className="hidden sm:inline" />
            it's not having <span className="cursive-keyword">clarity</span> on the path.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 mb-12">
            <p className="text-base md:text-lg text-gray-600">
              Founder-led guidance for ambitious IB + IGCSE families.
            </p>
            <StatPill />
          </div>

          <Button onClick={onLearnMore} variant="primary" className="min-w-[200px]">
            Learn More
          </Button>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm font-medium text-navy/90">
            <span>35+ top IB & IGCSE schools</span>
            <span className="hidden sm:inline">|</span>
            <span>150+ Former Admissions Officers</span>
            <span className="hidden sm:inline">|</span>
            <span>120+ Ivy League admits (2024)</span>
          </div>

          <div className="mt-[60px] flex justify-center">
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
