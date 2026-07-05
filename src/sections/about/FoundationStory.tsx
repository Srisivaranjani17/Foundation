import React from 'react';
import { foundationStory } from '../../content/about';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function FoundationStory() {
  return (
    <section className="py-20 bg-white" aria-label="Foundation Story">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Story */}
          <AnimatedSection direction="left" className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-50 border border-forest-100 w-fit">
              <span className="text-xs font-semibold text-forest-750 uppercase tracking-wider font-heading">
                {foundationStory.badge}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800 leading-tight">
              {foundationStory.title}
              <span className="block text-lg font-normal text-gray-500 mt-2 font-body">
                {foundationStory.subtitle}
              </span>
            </h2>

            <div className="flex flex-col gap-4 text-gray-600 font-body leading-relaxed text-sm md:text-base">
              {foundationStory.story.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </AnimatedSection>

          {/* Right: Story Image */}
          <AnimatedSection direction="right" className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-earth-100">
              <img
                src={foundationStory.image}
                alt="MIASei foundation story activity"
                className="w-full h-[450px] object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = '/assets/images/gallery-4.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Visual highlight box */}
              <div className="absolute bottom-4 left-4 hidden max-w-[240px] rounded-2xl bg-forest-900/95 p-4 text-white shadow-lg backdrop-blur-sm md:block">
                <p className="font-heading text-lg font-bold text-amber-400">Govt. Registered NGO</p>
                <p className="mt-1 text-xs font-body leading-relaxed text-forest-100">
                  Operating officially under Reg No: IV/35/2025 with certified transparency.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
