// Section B - The Real Pain Point section
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const PainPointSection: React.FC = () => {
  return (
    <Section id="pain-point" className="relative min-h-screen flex items-center">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <TextContainer>
          <p className="font-serif text-2xl md:text-3xl text-navy mb-12 leading-relaxed">
            If this feels familiar, you're not alone:
          </p>

          <ul className="space-y-6 text-lg md:text-xl text-gray-700 mb-12">
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Many activities, no clear direction</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Unsure what matters in Grades 8–12</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Don't know when to do what (subjects/tests/majors)</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Hardworking child, scattered interests</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Conflicting advice everywhere</span>
            </li>
          </ul>

          <div className="space-y-3 text-xl md:text-2xl font-semibold text-navy">
            <p>This isn't a <span className="font-bold">marks</span> problem.</p>
            <p>This is a <span className="cursive-keyword">clarity</span> problem.</p>
          </div>
        </TextContainer>

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop"
            alt="Parent contemplating education choices"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </Section>
  )
}
