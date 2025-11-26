// Section F - Results section with correct narrative flow and one-fold optimization
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
      {/* Label */}
      <div className="text-center mb-5">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          Proven Results
        </span>
      </div>

      {/* Main Heading - Using proper serif font like other sections */}
      <p className="font-serif text-2xl md:text-3xl text-navy mb-5 md:mb-6 leading-relaxed text-center">
        When clarity and effort come together, great outcomes follow naturally.
      </p>

      {/* Stats Section - Right after heading */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-7">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-2xl md:text-3xl font-sans font-bold text-gold mb-2">
              {stat.number}
            </div>
            <p className="text-xs md:text-sm font-sans font-light text-charcoal leading-snug">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Comparison Cards - After stats */}
      <div className="mb-6 md:mb-7">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {comparisonData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow"
            >
              {/* University Name */}
              <h3 className="text-sm md:text-base font-sans font-bold text-navy mb-2 md:mb-3">
                {item.university}
              </h3>

              {/* Other Students */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-sans font-light text-charcoal">Other Students</span>
                  <span className="text-xs font-sans font-semibold text-charcoal">
                    {item.otherStudents} out of 100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-gray-400 h-1.5 md:h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.otherStudents}%` }}
                  ></div>
                </div>
              </div>

              {/* Our Students */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-sans font-light text-charcoal">Our Students</span>
                  <span className="text-xs font-sans font-semibold text-navy">
                    {item.ourStudents} out of 100
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 md:h-2">
                  <div
                    className="bg-gold h-1.5 md:h-2 rounded-full transition-all duration-500"
                    style={{ width: `${item.ourStudents}%` }}
                  ></div>
                </div>
              </div>

              {/* Success Rate Badge */}
              <div className="flex justify-center mt-2">
                <span className="inline-block bg-navy/5 text-navy text-xs font-sans font-semibold px-2 py-1 rounded-full">
                  {item.multiplier} Higher
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cursive Closing Line */}
      <div className="text-center mb-5">
        <p className="text-2xl md:text-3xl font-sans text-navy">
          <span className="cursive-keyword">Clarity → Direction → Outcomes.</span>
        </p>
      </div>

      {/* Universities Label - Before logos */}
      <div className="text-center mb-4">
        <span className="text-xs font-semibold tracking-widest uppercase text-gold">
          Universities Our Students Got Into
        </span>
      </div>

      {/* University Logos - Marquee at the bottom */}
      <div className="overflow-hidden relative">
        <div
          className="flex space-x-4 md:space-x-6"
          style={{
            animation: 'marquee 60s linear infinite',
            width: 'max-content'
          }}
        >
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
    </Section>
  )
}
