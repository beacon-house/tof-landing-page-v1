// Section D - What We Help Families Do section
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'
import { Button } from '../Button'

export const BridgeSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <Section id="bridge" className="relative min-h-screen flex items-center bg-lightGray">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <TextContainer>
          <p className="text-xl md:text-2xl text-navy mb-12 leading-relaxed">
            We help families understand:
          </p>

          <ul className="space-y-6 text-lg md:text-xl text-gray-700 mb-12">
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>what choices actually <span className="cursive-keyword">matter</span></span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>what to do in each grade (8–12)</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>how admissions teams think</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>what to ignore completely</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>how to build direction calmly</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>how strengths turn into opportunities</span>
            </li>
          </ul>

          <p className="text-2xl md:text-3xl font-semibold text-navy mb-12">
            This is where clarity begins.
          </p>

          <Button onClick={onCTAClick} variant="secondary">
            Understand Our Approach
          </Button>
        </TextContainer>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop"
            alt="Mentorship and guidance"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
