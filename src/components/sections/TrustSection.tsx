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
    <Section id="trust" className="relative min-h-screen flex items-center bg-lightGray">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-16 text-center">
          Why Families Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold flex items-center justify-center mr-4 mt-1">
                <svg
                  className="w-5 h-5 text-navy"
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
              <p className="text-lg md:text-xl text-gray-700 font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
