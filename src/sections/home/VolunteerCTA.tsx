import React from 'react';
import { FaArrowRight, FaRegCircleCheck } from 'react-icons/fa6';
import { Button } from '../../components/UI/Button';
import { volunteerCTA } from '../../content/home';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function VolunteerCTA() {
  return (
    <section className="overflow-hidden bg-white py-20" aria-label="Volunteer Call to Action">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <AnimatedSection className="relative" direction="left">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src={volunteerCTA.image}
                alt="Volunteers serving the community"
                className="h-[400px] w-full object-cover"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = '/assets/images/gallery-2.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-4 right-4 hidden max-w-[200px] rounded-2xl bg-earth-900/95 p-4 text-white shadow-lg backdrop-blur-sm md:block">
              <p className="font-heading text-3xl font-bold text-amber-400">500+</p>
              <p className="mt-1 text-xs font-body text-earth-200">
                Active volunteers making a daily impact.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="flex flex-col gap-6">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-forest-100 bg-forest-50 px-3 py-1">
              <span className="font-heading text-xs font-semibold uppercase tracking-wider text-forest-700">
                {volunteerCTA.badge}
              </span>
            </div>

            <h2 className="font-heading text-3xl font-bold leading-tight text-[#1F2937] md:text-4xl">
              {volunteerCTA.headline}
            </h2>

            <p className="font-body text-base leading-relaxed text-gray-600">
              {volunteerCTA.description}
            </p>

            <div className="my-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {volunteerCTA.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaRegCircleCheck className="flex-shrink-0 text-forest-600" size={20} />
                  <span className="font-body text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <Button
                as="a"
                href={volunteerCTA.cta.href}
                variant="primary"
                size="lg"
                icon={<FaArrowRight size={18} />}
                iconPosition="right"
              >
                {volunteerCTA.cta.label}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
