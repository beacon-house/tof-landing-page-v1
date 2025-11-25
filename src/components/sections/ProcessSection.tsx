// Section G - How We Work section with 5-step process
import React from 'react'
import { Section } from '../Section'

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

export const ProcessSection: React.FC = () => {
  return (
    <Section id="process" className="relative py-16 md:py-20 flex items-center bg-lightGray">
      <div className="w-full">
        {/* Label */}
        <div className="text-center mb-5">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">
            Our Process
          </span>
        </div>

        {/* Hook */}
        <p className="font-serif text-2xl md:text-3xl text-navy mb-8 md:mb-10 leading-relaxed text-center max-w-3xl mx-auto">
          Every journey is different, but the framework is the same: understand, plan, build, execute.
        </p>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold flex items-center justify-center mb-4">
                <span className="text-xl md:text-2xl font-bold text-navy">{step.number}</span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-navy mb-2 md:mb-3">
                {step.title}
              </h3>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
