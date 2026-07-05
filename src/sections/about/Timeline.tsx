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

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Mobile rail */}
          <div className="absolute bottom-0 left-6 top-0 w-[4px] rounded-full bg-brand-green shadow-[0_0_0_1px_rgba(63,163,77,0.15)] md:hidden" />
          {/* Center spine */}
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-[4px] -translate-x-1/2 transform rounded-full bg-brand-green shadow-[0_0_0_1px_rgba(63,163,77,0.15)] md:block" />

          <div className="flex flex-col gap-10 md:gap-12">
            {timeline.map((event, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={event.id}
                  className="relative md:grid md:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] md:items-start md:gap-x-6"
                >
                  {/* Mobile node */}
                  <div className="absolute left-3 top-6 z-10 flex h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-brand-green text-white shadow-md md:hidden">
                    {iconMap[event.icon] || <FaAward size={20} />}
                  </div>

                  {/* Mobile card */}
                  <div className="pl-14 md:hidden">
                    <AnimatedSection
                      direction="left"
                      className="w-full rounded-2xl border border-earth-150 bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span className="mb-2 inline-block rounded-full bg-amber-100 px-2.5 py-1 font-heading text-xs font-semibold text-amber-800">
                        {event.year}
                      </span>
                      <h3 className="mb-2 text-lg font-heading font-bold text-gray-800">
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 font-body">
                        {event.description}
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Desktop / tablet left card */}
                  <div
                    className={`hidden md:flex ${
                      isEven ? 'md:col-start-3 md:justify-self-start' : 'md:col-start-1 md:justify-self-end'
                    }`}
                  >
                    <AnimatedSection
                      direction={isEven ? 'right' : 'left'}
                      className="w-full max-w-md rounded-2xl border border-earth-150 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                    >
                      <span className="mb-2 inline-block rounded-full bg-amber-100 px-2.5 py-1 font-heading text-xs font-semibold text-amber-800">
                        {event.year}
                      </span>
                      <h3 className="mb-2 text-lg font-heading font-bold text-gray-800">
                        {event.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-600 font-body">
                        {event.description}
                      </p>
                    </AnimatedSection>
                  </div>

                  {/* Center node on tablet/desktop */}
                  <div className="absolute left-1/2 top-6 z-10 hidden h-10 w-10 -translate-x-1/2 transform items-center justify-center rounded-full border-4 border-white bg-brand-green text-white shadow-md md:flex">
                    {iconMap[event.icon] || <FaAward size={20} />}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
