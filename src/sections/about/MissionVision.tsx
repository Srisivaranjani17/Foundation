import React from 'react';
import { FaBullseye, FaEye } from 'react-icons/fa6';
import { missionVision } from '../../content/about';
import { Card } from '../../components/UI/Card';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function MissionVision() {
  return (
    <section className="py-20 bg-earth-50" aria-label="Mission and Vision">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Mission */}
          <AnimatedSection direction="left" className="h-full">
            <Card className="flex flex-col h-full items-start justify-between border-earth-100 p-8">
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: '#e8f5ea',
                    color: missionVision.mission.color,
                  }}
                >
                  <FaBullseye size={28} />
                </div>

                <div className="text-xs font-semibold text-forest-700 uppercase tracking-wider font-heading mb-2">
                  {missionVision.mission.badge}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                  {missionVision.mission.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-base">
                  {missionVision.mission.content}
                </p>
              </div>
            </Card>
          </AnimatedSection>

          {/* Vision */}
          <AnimatedSection direction="right" className="h-full">
            <Card className="flex flex-col h-full items-start justify-between border-earth-100 p-8">
              <div>
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: '#fef3e2',
                    color: missionVision.vision.color,
                  }}
                >
                  <FaEye size={28} />
                </div>

                <div className="text-xs font-semibold text-amber-600 uppercase tracking-wider font-heading mb-2">
                  {missionVision.vision.badge}
                </div>
                <h3 className="text-2xl font-heading font-bold text-gray-800 mb-4">
                  {missionVision.vision.title}
                </h3>
                <p className="text-gray-600 font-body leading-relaxed text-base">
                  {missionVision.vision.content}
                </p>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
