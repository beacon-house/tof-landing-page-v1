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
    <Section id="results">
      <TextContainer center>
        <p className="font-serif text-2xl md:text-3xl text-navy mb-6 leading-relaxed">
          When clarity and effort come together,<br className="hidden sm:inline" />
          <span className="font-bold">great outcomes follow naturally.</span>
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-12">
          Our students have earned admits to leading universities:
        </p>

        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 text-base md:text-lg text-navy">
          {universities.map((university, index) => (
            <React.Fragment key={university}>
              <span className="font-medium">{university}</span>
              {index < universities.length - 1 && (
                <span className="text-gold">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </TextContainer>
    </Section>
  )
}
