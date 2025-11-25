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
    <Section id="contact" className="relative py-16 md:py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Educational success"
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/95 to-white"></div>
      </div>

      <TextContainer center className="relative z-10">
        <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed mb-12">
          Let's start with <span className="cursive-keyword">clarity</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
