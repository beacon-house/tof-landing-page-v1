// Section I - Final Close section with dual CTAs
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'
import { Button } from '../Button'

export const FinalCloseSection: React.FC<{
  onPrimaryCTA: () => void
  onSecondaryCTA: () => void
}> = ({ onPrimaryCTA, onSecondaryCTA }) => {
  return (
    <Section id="contact">
      <TextContainer center>
        <div className="space-y-4 mb-12">
          <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed">
            Admissions doesn't have to feel chaotic.
          </p>
          <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed">
            Clarity is possible.
          </p>
          <p className="text-2xl md:text-3xl font-serif font-bold text-navy leading-relaxed">
            And it changes everything.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
          <Button onClick={onPrimaryCTA} variant="primary" className="w-full sm:w-auto min-w-[280px]">
            Book a Founder Strategy Call
          </Button>
          <Button onClick={onSecondaryCTA} variant="secondary" className="w-full sm:w-auto min-w-[240px]">
            Request Evaluation
          </Button>
        </div>
      </TextContainer>
    </Section>
  )
}
