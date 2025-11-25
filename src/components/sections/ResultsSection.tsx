// Section F - Results section with university logos and stats - compact single fold design
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

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
    { name: 'UC Berkeley', file: 'uc-berkeley.png' }
  ]

  const stats = [
    { number: '150+', description: 'Former Ivy League Admissions Officers as Counsellors' },
    { number: '$4 Mn+', description: 'Scholarships Secured' },
    { number: '100%', description: 'Guaranteed Research & Internship Placements' },
    { number: '99%', description: 'Family Satisfaction Rate' }
  ]

  return (
    <Section id="results" className="relative py-12 md:py-16">
      <TextContainer center>
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Our Results
          </span>
        </div>

        <p className="font-serif text-xl md:text-2xl text-navy mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto">
          When clarity and effort come together, great outcomes follow naturally.
        </p>

        {/* University Logos Grid - Compact 2 Rows */}
        <div className="grid grid-cols-5 gap-3 md:gap-4 mb-8 md:mb-10 max-w-3xl mx-auto">
          {universities.map((university) => (
            <div
              key={university.name}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center p-2 md:p-3 transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
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
                    parent.innerHTML = `<span class="text-[10px] md:text-xs font-semibold text-gray-400 text-center leading-tight">${university.name}</span>`
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mb-4 md:mb-6">
          <h2 className="text-xl md:text-2xl font-semibold text-navy text-center">
            Why The Most Ambitious Families Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-2 md:p-3">
              <div className="text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.number}
              </div>
              <p className="text-xs md:text-sm text-gray-700 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </TextContainer>
    </Section>
  )
}
