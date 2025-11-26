// Section H - Trust + Proof section
import React from 'react'
import { Section } from '../Section'

const trustPoints = [
  '150+ Former Admissions Officers',
  'Students from 35+ top IB & IGCSE schools',
  'Small cohorts, high involvement',
  'Founder-led relationship oversight',
  'Integrated FAO + GC delivery model',
  'Calm, structured, clarity-first guidance'
]

export const TrustSection: React.FC = () => {
  return (
    <Section id="trust" className="relative py-12 md:py-16 flex items-center bg-sage">
      <div className="w-full">
        {/* Section Marker */}
        <div className="text-center mb-5">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Why Beacon House
          </span>
        </div>

        {/* Opening Lines */}
        <div className="text-center mb-8 md:mb-10">
          <p className="font-serif text-xl md:text-2xl text-navy leading-relaxed mb-3">
            <span className="block md:inline">Admissions doesn't have to feel chaotic.</span>
            <span className="hidden md:inline"> </span>
            <span className="block md:inline">Clarity is possible.</span>
          </p>
          <p className="font-serif text-xl md:text-2xl font-bold text-navy leading-relaxed">
            This is why families <span className="cursive-keyword">choose</span> us.
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start bg-white p-4 md:p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold flex items-center justify-center mr-3 mt-0.5">
                <svg
                  className="w-4 h-4 text-navy"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <p className="text-sm md:text-base font-sans font-medium text-charcoal leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
