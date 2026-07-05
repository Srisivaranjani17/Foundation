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

        <div className="relative mt-16 mx-auto max-w-4xl">
          {/* Mobile line */}
          <div className="absolute left-6 top-0 bottom-0 w-[3px] rounded-full bg-forest-400/80 shadow-sm md:hidden" />
          {/* Vertical central line (desktop only) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-[3px] -translate-x-1/2 transform rounded-full bg-forest-400/80 shadow-sm md:block" />

          <div className="flex flex-col gap-10 md:gap-8">
            {timeline.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className={`relative flex w-full flex-col items-start md:flex-row md:items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Left / Right Content Box */}
                  <div className="w-full pl-14 md:w-1/2 md:pl-0 md:px-8 md:flex md:justify-center">
                    <AnimatedSection
                      direction={isEven ? 'right' : 'left'}
                      className="w-full max-w-md rounded-2xl border border-earth-150 bg-white p-5 shadow-sm transition-shadow hover:shadow-md md:p-6"
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
                  <div className="absolute left-3 top-6 z-10 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full bg-forest-600 text-white shadow-md md:left-1/2 md:top-auto">
                    {iconMap[event.icon] || <FaAward size={20} />}
                  </div>

                  {/* Empty Spacer side */}
                  <div className="hidden w-full md:block md:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
