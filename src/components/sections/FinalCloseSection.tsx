// Section I - Final Close section with simple centered closing statement
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const FinalCloseSection: React.FC = () => {
  return (
    <Section id="contact" className="relative py-12 md:py-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop"
          alt="Educational success"
          className="w-full h-full object-cover opacity-5"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/90 via-cream/95 to-cream"></div>
      </div>

      <TextContainer center className="relative z-10">
        <p className="text-2xl md:text-3xl font-serif text-navy leading-relaxed text-center">
          Let's start with <span className="cursive-keyword">clarity</span>.
        </p>
      </TextContainer>
    </Section>
  )
}
