// Section C - What Actually Matters Now section
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const AuthoritySection: React.FC = () => {
  return (
    <Section id="authority" className="relative min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Students engaged in meaningful learning"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <TextContainer className="order-1 lg:order-2">
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
            Admissions teams reward <span className="cursive-keyword">clarity</span>.
          </p>
        </TextContainer>
      </div>
    </Section>
  )
}
