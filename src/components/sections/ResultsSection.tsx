// Section F - Results section optimized for single-fold display with comparison metrics
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

  const comparisonData = [
    {
      university: 'Harvard',
      otherStudents: 3,
      ourStudents: 15,
      multiplier: '4.3X'
    },
    {
      university: 'Oxford',
      otherStudents: 9,
      ourStudents: 29,
      multiplier: '3.2X'
    },
    {
      university: 'Cambridge',
      otherStudents: 11,
      ourStudents: 36,
      multiplier: '3.3X'
    },
    {
      university: 'MIT',
      otherStudents: 4,
      ourStudents: 21,
      multiplier: '5.4X'
    }
  ]

  const stats = [
    { number: '150+', description: 'Former Ivy League Admissions Officers' },
    { number: '$4 Mn+', description: 'Scholarships Secured' },
    { number: '100%', description: 'Research & Internship Placements' },
    { number: '99%', description: 'Family Satisfaction Rate' }
  ]

  return (
    <Section id="results" className="relative">
      {/* Header - Centered */}
      <div className="text-center mb-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          Proven Results
        </span>
      </div>

      {/* Main Heading - Compressed */}
      <p className="font-serif text-lg md:text-2xl text-navy mb-6 md:mb-8 leading-tight text-center max-w-3xl mx-auto">
        When clarity and effort come together, great outcomes follow naturally.
      </p>

      {/* University Logos - Single Row Marquee (Mobile & Desktop) */}
      <div className="mb-6 md:mb-8 overflow-hidden">
        <div className="flex animate-marquee-slow space-x-4 md:space-x-6">
          {[...universities, ...universities, ...universities].map((university, index) => (
            <div
              key={`${university.name}-${index}`}
              className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center p-2 transition-all duration-300 grayscale hover:grayscale-0"
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

      {/* Stats Heading */}
      <div className="mb-5 md:mb-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-navy">
          Why The Most Ambitious Families Choose Us
        </h2>
      </div>

      {/* Comparison Section - Your Odds of Admission Multiplied */}
      <div className="mb-6 md:mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow"
            >
              {/* University Name */}
              <h3 className="text-sm md:text-base font-bold text-navy mb-3 md:mb-4">
                {item.university}
              </h3>

              {/* Other Students */}
              <div className="mb-2 md:mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">Other Students</span>
                  <span className="text-xs font-semibold text-gray-700">
                    {item.otherStudents} out of 100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-gray-400 h-1.5 md:h-2 rounded-full"
                    style={{ width: `${item.otherStudents}%` }}
                  ></div>
                </div>
              </div>

              {/* Our Students */}
              <div className="mb-2 md:mb-3">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-gray-600">Our Students</span>
                  <span className="text-xs font-semibold text-navy">
                    {item.ourStudents} out of 100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-gold h-1.5 md:h-2 rounded-full"
                    style={{ width: `${item.ourStudents}%` }}
                  ></div>
                </div>
              </div>

              {/* Success Rate Badge */}
              <div className="flex justify-center mt-2 md:mt-3">
                <span className="inline-block bg-navy/5 text-navy text-xs font-semibold px-3 py-1 rounded-full">
                  {item.multiplier} Higher
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section - Compressed */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gold mb-2">
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
