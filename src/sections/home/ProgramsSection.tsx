import React from 'react';
import { FaUtensils, FaUsers, FaBookOpen, FaLifeRing, FaArrowRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { Card } from '../../components/UI/Card';
import { programs } from '../../content/home';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  utensils: <FaUtensils size={28} />,
  users: <FaUsers size={28} />,
  'book-open': <FaBookOpen size={28} />,
  'life-buoy': <FaLifeRing size={28} />,
};

export function ProgramsSection() {
  return (
    <section className="py-20 bg-earth-50" id="programs" aria-label="Our Programs">
      <div className="container-custom">
        <SectionHeading
          title="Our Key Programs"
          subtitle="Empowering communities, addressing hunger, and supporting education through dedicated initiatives."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {programs.map((program, idx) => (
            <AnimatedSection key={program.id} delay={idx * 0.1} className="h-full">
              <Card
                hoverable
                className="flex flex-col h-full items-start justify-between relative group overflow-hidden border-earth-100"
              >
                <div>
                  {/* Icon container */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundColor: program.bgColor,
                      color: program.color,
                    }}
                  >
                    {iconMap[program.icon] || <FaLifeRing size={28} />}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-bold text-gray-800 mb-3 group-hover:text-forest-600 transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                    {program.description}
                  </p>
                </div>

                <Link
                  to={
                    program.id === 'food'
                      ? '/donate'
                      : program.id === 'community' || program.id === 'education'
                      ? '/volunteer'
                      : '/contact'
                  }
                  className="inline-flex items-center gap-2 text-sm font-semibold font-heading group-hover:underline mt-auto"
                  style={{ color: program.color }}
                >
                  Learn More
                  <FaArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
