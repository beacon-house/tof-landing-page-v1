// Section C - What Actually Matters Now section
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const AuthoritySection: React.FC = () => {
  return (
    <Section id="authority">
      <TextContainer center>
        <p className="text-xl md:text-2xl text-navy mb-12 leading-relaxed">
          In today's admissions world, what matters is:
        </p>

        <ul className="space-y-6 text-lg md:text-xl text-gray-700 mb-16">
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>real strengths</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>curiosity and initiative</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>depth over activity-collecting</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>clarity of direction</span>
          </li>
          <li className="flex items-start">
            <span className="text-gold mr-4 text-2xl">•</span>
            <span>a story that makes sense</span>
          </li>
        </ul>

        <p className="text-2xl md:text-3xl font-bold text-navy">
          Admissions teams reward clarity.
        </p>
      </TextContainer>
    </Section>
  )
}
