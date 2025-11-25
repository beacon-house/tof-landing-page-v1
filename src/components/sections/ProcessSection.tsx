// Section G - How We Work section with 5-step process
import React from 'react'
import { Section } from '../Section'
import { Button } from '../Button'

interface ProcessStep {
  number: string
  title: string
  description: string
}

const processSteps: ProcessStep[] = [
  {
    number: '1',
    title: 'Discovery & Clarity',
    description: 'Understand your child profile, strengths, interests and direction.'
  },
  {
    number: '2',
    title: 'Strategy & Planning',
    description: 'FAOs and Graduate Coaches build a clear plan and admissions strategy.'
  },
  {
    number: '3',
    title: 'Profile Building & Direction',
    description: 'Guided development of depth, initiative, curiosity, impact and narrative.'
  },
  {
    number: '4',
    title: 'Application Execution',
    description: 'Essays, recommendations, interviews, portfolios - all done with structure and clarity.'
  },
  {
    number: '5',
    title: 'Decisions & Guidance',
    description: 'Support through the entire admissions cycle.'
  }
]

export const ProcessSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <Section id="process" className="relative min-h-screen flex items-center bg-lightGray">
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Our Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center mb-6">
                <span className="text-3xl font-bold text-navy">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button onClick={onCTAClick} variant="secondary">
            See How This Works
          </Button>
        </div>
      </div>
    </Section>
  )
}
