import React from 'react';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { TestimonialCard } from '../../components/UI/TestimonialCard';
import { volunteerStories } from '../../content/volunteer';

export function VolunteerStories() {
  return (
    <section className="py-20 bg-earth-50" aria-label="Volunteer Testimonials">
      <div className="container-custom">
        <SectionHeading
          title="Volunteer Stories"
          subtitle="Real experiences shared by our volunteers, recounting their journey of service with MIASei."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {volunteerStories.map((story, idx) => (
            <TestimonialCard
              key={story.id}
              testimonial={story}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
