import React from 'react';
import { FaPhone, FaEnvelope, FaLocationDot, FaRegClock } from 'react-icons/fa6';
import { Card } from '../../components/UI/Card';
import { contactInfo } from '../../content/contact';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function ContactInfo() {
  const cards = [
    {
      id: 'phone',
      label: 'Call Us',
      value: contactInfo.phone,
      icon: <FaPhone size={24} />,
      color: '#3FA34D',
      bgColor: '#e8f5ea',
      href: `tel:${contactInfo.phone.replace(/\s+/g, '')}`,
    },
    {
      id: 'email',
      label: 'Email Us',
      value: contactInfo.email,
      icon: <FaEnvelope size={24} />,
      color: '#F59E2A',
      bgColor: '#fef3e2',
      href: `mailto:${contactInfo.email}`,
    },
    {
      id: 'address',
      label: 'Visit Us',
      value: contactInfo.address,
      icon: <FaLocationDot size={24} />,
      color: '#C8A2E8',
      bgColor: '#f5f0fb',
      href: '#map',
    },
    {
      id: 'hours',
      label: 'Office Hours',
      value: contactInfo.officeHours,
      icon: <FaRegClock size={24} />,
      color: '#7DD3FC',
      bgColor: '#e0f4fe',
    },
  ];

  return (
    <section className="py-12 bg-white" aria-label="Contact Details">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <AnimatedSection key={card.id} delay={idx * 0.08} className="h-full">
              <Card
                hoverable
                className="flex flex-col h-full items-center text-center p-6 border-earth-100"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: card.bgColor,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>

                <h3 className="text-xs font-semibold text-gray-400 uppercase font-heading tracking-wider mb-2">
                  {card.label}
                </h3>

                {card.href ? (
                  <a
                    href={card.href}
                    className="text-base font-body font-semibold text-gray-800 hover:text-forest-600 transition-colors break-words max-w-full"
                  >
                    {card.value}
                  </a>
                ) : (
                  <p className="text-base font-body font-semibold text-gray-800 break-words max-w-full">
                    {card.value}
                  </p>
                )}
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
