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
          <div className="mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              What Actually Matters
            </span>
          </div>

          <p className="font-serif text-2xl md:text-3xl text-navy mb-12 leading-relaxed">
            In today's admissions world, what matters is:
          </p>

          <ul className="space-y-6 text-lg md:text-xl text-gray-700 mb-16">
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Real strengths<span className="text-gray-500">; not a long list of activities</span></span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Authentic curiosity & initiative<span className="text-gray-500">; not checkbox achievements</span></span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Depth<span className="text-gray-500">; not activity collecting</span></span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Direction that connects interests to pathways<span className="text-gray-500">; not scattered interests</span></span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>A story that stays consistent across Grades 8–12<span className="text-gray-500">; not last-minute scrambling</span></span>
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
