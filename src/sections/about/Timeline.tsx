import React from 'react';
import { FaUtensils, FaUsers, FaBookOpen, FaArrowTrendUp, FaGlobe, FaAward } from 'react-icons/fa6';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { timeline } from '../../content/about';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  utensils: <FaUtensils size={20} />,
  users: <FaUsers size={20} />,
  'book-open': <FaBookOpen size={20} />,
  'trending-up': <FaArrowTrendUp size={20} />,
  globe: <FaGlobe size={20} />,
  award: <FaAward size={20} />,
};

export function Timeline() {
  return (
    <section className="py-20 bg-earth-50" aria-label="Our Timeline">
      <div className="container-custom">
        <SectionHeading
          title="Milestones of Service"
          subtitle="Our progress over the years, starting from single drives to a registered voluntary organisation."
          centered
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical central line (desktop only) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-forest-200 hidden md:block" />

          <div className="flex flex-col gap-12 md:gap-8">
            {timeline.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`flex flex-col md:flex-row items-center w-full relative ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Content Box */}
                  <div className="w-full md:w-1/2 flex justify-start md:justify-center px-4 md:px-8">
                    <AnimatedSection
                      direction={isEven ? 'right' : 'left'}
                      className="bg-white p-6 rounded-2xl border border-earth-150 shadow-sm w-full max-w-md hover:shadow-md transition-shadow"
                    >
                      <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-heading mb-2">
                        {event.year}
                      </span>
                      <h3 className="text-lg font-heading font-bold text-gray-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 font-body text-sm leading-relaxed">
                        {event.description}
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Icon Node (Center on desktop) */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-forest-600 text-white shadow-md z-10 top-0 md:top-auto">
                    {iconMap[event.icon] || <FaAward size={20} />}
                  </div>

                  {/* Empty Spacer side */}
                  <div className="w-full md:w-1/2 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
