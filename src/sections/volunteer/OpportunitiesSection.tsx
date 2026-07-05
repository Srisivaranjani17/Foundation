import React from 'react';
import { FaUtensils, FaRegCalendar, FaIndianRupeeSign, FaBullhorn, FaRegClock, FaCheck } from 'react-icons/fa6';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { Card } from '../../components/UI/Card';
import { volunteerOpportunities } from '../../content/volunteer';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  utensils: <FaUtensils size={28} />,
  'calendar-check': <FaRegCalendar size={28} />,
  'indian-rupee': <FaIndianRupeeSign size={28} />,
  megaphone: <FaBullhorn size={28} />,
};

export function OpportunitiesSection() {
  return (
    <section className="py-20 bg-earth-50" aria-label="Volunteer Opportunities">
      <div className="container-custom">
        <SectionHeading
          title="Ways You Can Serve"
          subtitle="Explore the areas where we need your support the most and find an opportunity that matches your schedule."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {volunteerOpportunities.map((opportunity, idx) => (
            <AnimatedSection key={opportunity.id} delay={idx * 0.1} className="h-full">
              <Card className="flex flex-col h-full justify-between p-8 border-earth-150 relative overflow-hidden">
                <div>
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        backgroundColor: opportunity.bgColor,
                        color: opportunity.color,
                      }}
                    >
                      {iconMap[opportunity.icon] || <FaBullhorn size={28} />}
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 bg-white border border-earth-200 rounded-full text-xs font-heading font-medium text-gray-500 shadow-sm">
                      <FaRegClock size={12} className="text-forest-600" />
                      {opportunity.commitment}
                    </div>
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-gray-800 mb-3">
                    {opportunity.title}
                  </h3>
                  <p className="text-gray-600 font-body text-sm leading-relaxed mb-6">
                    {opportunity.description}
                  </p>

                  {/* Skills Checklist */}
                  <div className="flex flex-col gap-2.5">
                    <p className="text-xs font-semibold text-gray-400 uppercase font-heading tracking-wider">
                      Preferred Skills / Qualities:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {opportunity.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium text-gray-700 bg-white border border-earth-100 shadow-sm"
                        >
                          <FaCheck size={12} className="text-forest-600" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
