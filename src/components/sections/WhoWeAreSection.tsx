// Section E - Who We Are section
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const WhoWeAreSection: React.FC = () => {
  return (
    <Section id="about">
      <TextContainer center>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
          A boutique, founder-led admissions company<br className="hidden sm:inline" />
          in partnership with <span className="font-bold text-navy">InGenius Prep</span> —<br className="hidden sm:inline" />
          one of the world's largest teams of<br className="hidden sm:inline" />
          <span className="font-bold text-navy">150+ Former Admissions Officers</span>.
        </p>

        <p className="text-lg md:text-xl text-gray-700 mb-12">
          We combine:
        </p>

        <ul className="space-y-6 text-lg md:text-xl text-gray-700 mb-16">
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>global admissions expertise</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>India-context intelligence</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>small cohorts</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>Graduate Coaches + FAOs</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>deep founder oversight</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>student-first clarity</span>
          </li>
        </ul>

        <div className="space-y-3 text-xl md:text-2xl font-semibold text-navy">
          <p>This is not mass counselling.</p>
          <p>This is the opposite.</p>
        </div>
      </TextContainer>
    </Section>
  )
}
