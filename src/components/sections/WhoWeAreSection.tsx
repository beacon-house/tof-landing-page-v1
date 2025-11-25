// Section E - What Makes Us Different section
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'

export const WhoWeAreSection: React.FC = () => {
  return (
    <Section id="about" className="relative py-16 md:py-20 flex items-center">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <div className="relative h-[280px] md:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1">
          <img
            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop"
            alt="Collaborative education environment"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <TextContainer className="order-1 lg:order-2">
          <div className="mb-5">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              What Makes Us Different
            </span>
          </div>

          <p className="font-serif text-lg md:text-xl lg:text-2xl text-navy mb-6 md:mb-7 leading-relaxed">
            Beacon House exists to give families personalized, clarity-first guidance that traditional counselling models rarely offer.
          </p>

          <p className="text-base md:text-lg text-gray-700 mb-5 md:mb-6 leading-relaxed">
            Through our partnership with <span className="font-bold text-navy">InGenius Prep</span>, we bring:
          </p>

          <ul className="space-y-3 md:space-y-4 mb-6 md:mb-7">
            <li className="flex items-start">
              <span className="text-gold mr-3 text-lg mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-bold text-navy text-sm md:text-base leading-snug">
                  Former Admissions Officers
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Experts who know how applications are evaluated
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-lg mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-bold text-navy text-sm md:text-base leading-snug">
                  Graduate Coaches from top global schools
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Mentors who help shape direction, depth, and narrative
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-lg mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-bold text-navy text-sm md:text-base leading-snug">
                  India-context guidance
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Teams who understand school realities & pressures
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-lg mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-bold text-navy text-sm md:text-base leading-snug">
                  World-class opportunities
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Research mentorship, signature projects, internships
                </p>
              </div>
            </li>
          </ul>

          <p className="font-serif text-lg md:text-xl lg:text-2xl text-navy leading-relaxed">
            Every student's path is different — <span className="cursive-keyword">so the support must be too</span>.
          </p>
        </TextContainer>
      </div>
    </Section>
  )
}
