import React from 'react';
import { FaAward, FaUsers, FaArrowTrendUp, FaHandshake } from 'react-icons/fa6';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { Card } from '../../components/UI/Card';
import { whyVolunteerCards } from '../../content/volunteer';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  'heart-handshake': <FaHandshake size={28} />,
  award: <FaAward size={28} />,
  'trending-up': <FaArrowTrendUp size={28} />,
  users: <FaUsers size={28} />,
};

export function WhyVolunteer() {
  return (
    <section className="py-20 bg-white" id="why-volunteer" aria-label="Why Volunteer">
      <div className="container-custom">
        <SectionHeading
          title="Why Volunteer with MIASei?"
          subtitle="Discover how giving back can enrich your life, build skills, and strengthen our collective community."
          centered
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {whyVolunteerCards.map((card, idx) => (
            <AnimatedSection key={card.id} delay={idx * 0.1} className="h-full">
              <Card hoverable className="flex flex-col h-full items-start p-7 border-earth-100">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 hover:scale-110"
                  style={{
                    backgroundColor: '#e8f5ea',
                    color: card.color,
                  }}
                >
                  {iconMap[card.icon] || <FaHandshake size={28} />}
                </div>

                <h3 className="text-xl font-heading font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 font-body text-sm leading-relaxed">
                  {card.description}
                </p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
