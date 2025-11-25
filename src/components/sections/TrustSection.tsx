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
    <Section id="trust" className="relative py-16 md:py-20 flex items-center bg-lightGray">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Marker */}
        <div className="text-center mb-5">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Why Beacon House
          </span>
        </div>

        {/* Three Opening Lines */}
        <div className="text-center mb-8 md:mb-10 space-y-3 md:space-y-4">
          <p className="font-serif text-xl md:text-2xl text-navy leading-relaxed">
            Admissions doesn't have to feel chaotic.
          </p>
          <p className="font-serif text-xl md:text-2xl text-navy leading-relaxed">
            Clarity is possible.
          </p>
          <p className="font-serif text-xl md:text-2xl font-bold text-navy leading-relaxed">
            And it changes <span className="cursive-keyword">everything</span>.
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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
              <p className="text-sm md:text-base text-gray-700 font-medium leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
