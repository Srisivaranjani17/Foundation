import React from 'react';
import { FaUtensils, FaUsers, FaHouse, FaHeart } from 'react-icons/fa6';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { Card } from '../../components/UI/Card';
import { donationImpactCards } from '../../content/donate';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  utensils: <FaUtensils size={28} />,
  users: <FaUsers size={28} />,
  home: <FaHouse size={28} />,
  heart: <FaHeart size={28} />,
};

export function ImpactCards() {
  return (
    <section className="py-20 bg-earth-50" aria-label="Donation Impact Levels">
      <div className="container-custom">
        <SectionHeading
          title="See the Impact of Your Donation"
          subtitle="No contribution is too small. Here is exactly how your support translates into direct, life-saving aid."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {donationImpactCards.map((card, idx) => (
            <AnimatedSection key={card.id} delay={idx * 0.1} className="h-full">
              <Card
                hoverable
                className={`flex flex-col h-full items-center text-center p-8 border-earth-150 relative ${
                  card.popular ? 'border-amber-400 ring-2 ring-amber-400 ring-opacity-20 shadow-md scale-102' : ''
                }`}
              >
                {card.popular && (
                  <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-amber-400 text-earth-950 text-xs font-bold font-heading rounded-full shadow-sm">
                    Most Popular
                  </span>
                )}

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundColor: card.bgColor,
                    color: card.color,
                  }}
                >
                  {iconMap[card.icon] || <FaHeart size={28} />}
                </div>

                <div className="text-3xl font-heading font-extrabold text-gray-800 mb-3">
                  ₹{card.amount}
                </div>

                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {card.impact}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
