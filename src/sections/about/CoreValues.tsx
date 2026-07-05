import React from 'react';
import { FaHeart, FaHandsHolding, FaShieldHalved, FaEye, FaUsers } from 'react-icons/fa6';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { Card } from '../../components/UI/Card';
import { coreValues } from '../../content/about';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  heart: <FaHeart size={28} />,
  'hand-helping': <FaHandsHolding size={28} />,
  'shield-check': <FaShieldHalved size={28} />,
  eye: <FaEye size={28} />,
  users: <FaUsers size={28} />,
};

export function CoreValues() {
  return (
    <section className="py-20 bg-white" aria-label="Core Values">
      <div className="container-custom">
        <SectionHeading
          title="Our Core Values"
          subtitle="The moral foundation that guides our decisions, actions, and daily service to humanity."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {coreValues.map((value, idx) => (
            <AnimatedSection key={value.id} delay={idx * 0.08} className="h-full">
              <Card className="flex flex-col h-full items-center text-center p-6 border-earth-100 hover:shadow-md transition-shadow">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: value.bgColor,
                    color: value.color,
                  }}
                >
                  {iconMap[value.icon] || <FaHeart size={28} />}
                </div>

                <h3 className="text-lg font-heading font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-body text-xs leading-relaxed">
                  {value.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
