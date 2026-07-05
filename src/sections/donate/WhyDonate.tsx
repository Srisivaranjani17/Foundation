import React from 'react';
import { FaEye, FaShieldHalved, FaLock, FaArrowTrendUp } from 'react-icons/fa6';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { Card } from '../../components/UI/Card';
import { whyDonatePoints } from '../../content/donate';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  eye: <FaEye size={24} />,
  'shield-check': <FaShieldHalved size={24} />,
  lock: <FaLock size={24} />,
  'trending-up': <FaArrowTrendUp size={24} />,
};

export function WhyDonate() {
  return (
    <section className="py-20 bg-earth-50" aria-label="Why Choose to Donate">
      <div className="container-custom">
        <SectionHeading
          title="Why Support MIASei Foundation?"
          subtitle="Your trust is our priority. We are committed to transparency, compliance, and direct social impact."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyDonatePoints.map((point, idx) => (
            <AnimatedSection key={point.id} delay={idx * 0.1} className="h-full">
              <Card hoverable className="flex flex-col h-full items-start p-7 bg-white border-earth-150">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-forest-50 text-forest-600 mb-5">
                  {iconMap[point.icon] || <FaShieldHalved size={24} />}
                </div>

                <h3 className="text-lg font-heading font-bold text-gray-800 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
