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
            If you're a parent, this will feel familiar:
          </p>

          <ul className="space-y-6 text-lg md:text-xl text-gray-700 mb-12">
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Too many opinions</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>No clear starting point</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>No way to know what actually matters</span>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-4 text-2xl">•</span>
              <span>Constant pressure, zero clarity</span>
            </li>
          </ul>

          <div className="space-y-3 text-xl md:text-2xl font-semibold text-navy">
            <p>This isn't a <span className="font-bold">marks</span> problem.</p>
            <p>This is a <span className="font-cursive text-[1.4em] relative inline-block" style={{borderBottom: '2px solid rgba(253, 183, 26, 0.5)', paddingBottom: '2px'}}>direction</span> problem.</p>
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
