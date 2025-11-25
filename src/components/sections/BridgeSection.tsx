// Section D - What We Help Families Do section
import React from 'react'
import { Section } from '../Section'
import { TextContainer } from '../TextContainer'
import { Button } from '../Button'

export const BridgeSection: React.FC<{ onCTAClick: () => void }> = ({ onCTAClick }) => {
  return (
    <Section id="bridge" className="relative py-16 md:py-20 flex items-center bg-lightGray">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">
        <TextContainer>
          <div className="mb-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">
              What We Help Families Do
            </span>
          </div>

          <p className="font-serif text-2xl md:text-3xl text-navy mb-8 md:mb-10 leading-relaxed">
            Here's exactly how we guide you:
          </p>

          <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-navy text-base md:text-lg leading-snug mb-1">
                  What actually matters vs what's noise
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  So you stop guessing.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-navy text-base md:text-lg leading-snug mb-1">
                  What to do in each grade (8–12)
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Know exactly what matters each year — with no confusion.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-navy text-base md:text-lg leading-snug mb-1">
                  How interests become real pathways
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  From "they like many things" → "this direction makes sense."
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-navy text-base md:text-lg leading-snug mb-1">
                  How admissions teams think at every stage
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  So your child's choices align with what colleges actually value.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-navy text-base md:text-lg leading-snug mb-1">
                  What to ignore completely
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  So your child isn't pulled into unnecessary pressure.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-navy text-base md:text-lg leading-snug mb-1">
                  How to build direction with busy schedules
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Sports, school load, multiple interests — balanced.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-gold mr-3 text-xl mt-1 flex-shrink-0">•</span>
              <div>
                <p className="font-semibold text-navy text-base md:text-lg leading-snug mb-1">
                  How strengths turn into depth + impact
                </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  The base of a strong college story.
                </p>
              </div>
            </li>
          </ul>

          <p className="text-xl md:text-2xl font-semibold text-navy mb-6 md:mb-8">
            This is where clarity begins.
          </p>

          <Button onClick={onCTAClick} variant="secondary">
            Understand Our Approach
          </Button>
        </TextContainer>

        <div className="relative h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg">
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
