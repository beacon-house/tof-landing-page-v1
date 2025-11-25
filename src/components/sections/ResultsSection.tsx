// Section F - Results section with university logos and stats - full width design
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
    <Section id="results" className="relative py-12 md:py-16">
      {/* Header - Centered */}
      <div className="text-center mb-3">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          Our Results
        </span>
      </div>

      <p className="font-serif text-xl md:text-2xl text-navy mb-8 md:mb-10 leading-relaxed text-center">
        When clarity and effort come together, great outcomes follow naturally.
      </p>

      {/* University Logos Grid - Full Width 3 Rows */}
      <div className="grid grid-cols-5 gap-6 md:gap-8 mb-10 md:mb-12">
        {universities.map((university) => (
          <div
            key={university.name}
            className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center p-4 md:p-5 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
            title={university.name}
          >
            <img
              src={`/uni-logos/${university.file}`}
              alt={`${university.name} logo`}
              className="w-full h-full object-contain"
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = `<span class="text-xs md:text-sm font-semibold text-gray-400 text-center">${university.name}</span>`
                }
              }}
            />
          </div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="mb-6 md:mb-8 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-navy">
          Why The Most Ambitious Families Choose Us
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-3 md:mb-4 whitespace-nowrap">
              {stat.number}
            </div>
            <p className="text-sm md:text-base text-gray-700 leading-snug">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
