// Section F - Results section with university names
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const ResultsSection: React.FC = () => {
  const universities = [
    'Harvard', 'Yale', 'Brown', 'UPenn', 'Columbia', 'Duke',
    'UC Berkeley', 'UCLA', 'UChicago', 'NYU', 'Georgia Tech',
    'Imperial', 'Cambridge', 'NUS', 'NTU'
  ]

  return (
    <Section id="results" className="relative min-h-screen flex items-center">
      <TextContainer center>
        <p className="font-serif text-2xl md:text-3xl text-navy mb-6 leading-relaxed">
          When clarity and effort come together,<br className="hidden sm:inline" />
          <span className="font-bold">great outcomes follow <span className="cursive-keyword">naturally</span>.</span>
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-16">
          Our students have earned admits to leading universities:
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-5 text-base md:text-lg text-navy mb-12">
          {universities.map((university, index) => (
            <React.Fragment key={university}>
              <span className="font-semibold">{university}</span>
              {index < universities.length - 1 && (
                <span className="text-gold text-xl">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          University logos will be displayed here
        </div>
      </TextContainer>
    </Section>
  )
}
