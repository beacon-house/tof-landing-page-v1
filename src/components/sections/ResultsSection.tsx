// Section F - Results section with university logos and stats
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const ResultsSection: React.FC = () => {
  const universities = [
    { name: 'Harvard', file: 'harvard.png' },
    { name: 'Yale', file: 'yale.png' },
    { name: 'Brown', file: 'brown.png' },
    { name: 'UPenn', file: 'upenn.png' },
    { name: 'Columbia', file: 'columbia.png' },
    { name: 'Duke', file: 'duke.png' },
    { name: 'UC Berkeley', file: 'uc-berkeley.png' },
    { name: 'UCLA', file: 'ucla.png' },
    { name: 'UChicago', file: 'uchicago.png' },
    { name: 'NYU', file: 'nyu.png' },
    { name: 'Georgia Tech', file: 'georgia-tech.png' },
    { name: 'Imperial', file: 'imperial.png' },
    { name: 'Cambridge', file: 'cambridge.png' },
    { name: 'NUS', file: 'nus.png' },
    { name: 'NTU', file: 'ntu.png' }
  ]

  const stats = [
    { number: '150+', description: 'Former Ivy League Admissions Officers as Counsellors' },
    { number: '$4 Mn+', description: 'Scholarships Secured' },
    { number: '100%', description: 'Guaranteed Research & Internship Placements' },
    { number: '99%', description: 'Family Satisfaction Rate' }
  ]

  return (
    <Section id="results" className="relative py-16 md:py-20">
      <TextContainer center>
        <div className="mb-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Our Results
          </span>
        </div>

        <p className="font-serif text-2xl md:text-3xl text-navy mb-12 md:mb-16 leading-relaxed max-w-3xl mx-auto">
          When clarity and effort come together, great outcomes follow naturally.
        </p>

        {/* University Logos Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6 mb-16 md:mb-20 max-w-5xl mx-auto">
          {universities.map((university) => (
            <div
              key={university.name}
              className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm hover:shadow-md grayscale hover:grayscale-0"
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
        <div className="mb-8 md:mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-navy text-center">
            Why The Most Ambitious Families Choose Us
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold mb-3 md:mb-4">
                {stat.number}
              </div>
              <p className="text-sm md:text-base text-gray-700 leading-snug">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </TextContainer>
    </Section>
  )
}
