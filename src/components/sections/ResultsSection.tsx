// Section F - Results section with university logos and stats - single fold compact design
import React from 'react'
import { Section } from '../Section'

export const ResultsSection: React.FC = () => {
  const universities = [
    { name: 'Harvard', file: 'harvard.png' },
    { name: 'Yale', file: 'yale.png' },
    { name: 'Stanford', file: 'stanford.png' },
    { name: 'MIT', file: 'mit.png' },
    { name: 'Princeton', file: 'princeton.png' },
    { name: 'Columbia', file: 'columbia.png' },
    { name: 'Oxford', file: 'oxford.png' },
    { name: 'Cambridge', file: 'cambridge.png' },
    { name: 'Imperial', file: 'imperial.png' },
    { name: 'UC Berkeley', file: 'uc-berkeley.png' },
    { name: 'Brown', file: 'brown.png' },
    { name: 'Duke', file: 'duke.png' },
    { name: 'UChicago', file: 'uchicago.png' },
    { name: 'NYU', file: 'nyu.png' },
    { name: 'UCLA', file: 'ucla.png' }
  ]

  const stats = [
    { number: '150+', description: 'Former Ivy League Admissions Officers as Counsellors' },
    { number: '$4 Mn+', description: 'Scholarships Secured' },
    { number: '100%', description: 'Guaranteed Research & Internship Placements' },
    { number: '99%', description: 'Family Satisfaction Rate' }
  ]

  return (
    <Section id="results" className="relative py-8 md:py-10">
      {/* Header - Centered */}
      <div className="text-center mb-2">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          Our Results
        </span>
      </div>

      <p className="font-serif text-lg md:text-xl text-navy mb-5 md:mb-6 leading-relaxed text-center">
        When clarity and effort come together, great outcomes follow naturally.
      </p>

      {/* University Logos - Marquee on Mobile, Grid on Desktop */}
      <div className="mb-6 md:mb-8 overflow-hidden">
        {/* Mobile: Slow Marquee */}
        <div className="md:hidden">
          <div className="flex animate-marquee space-x-6">
            {[...universities, ...universities].map((university, index) => (
              <div
                key={`${university.name}-${index}`}
                className="flex-shrink-0 w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2 grayscale"
              >
                <img
                  src={`/uni-logos/${university.file}`}
                  alt={`${university.name} logo`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Compact Grid - 2 Rows */}
        <div className="hidden md:grid grid-cols-5 gap-4 max-w-4xl mx-auto">
          {universities.slice(0, 10).map((university) => (
            <div
              key={university.name}
              className="h-16 bg-gray-100 rounded-lg flex items-center justify-center p-2 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
              title={university.name}
            >
              <img
                src={`/uni-logos/${university.file}`}
                alt={`${university.name} logo`}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-4 text-center">
        <h2 className="text-lg md:text-xl font-semibold text-navy">
          Why The Most Ambitious Families Choose Us
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-gold mb-2 whitespace-nowrap">
              {stat.number}
            </div>
            <p className="text-xs md:text-sm text-gray-700 leading-snug">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
