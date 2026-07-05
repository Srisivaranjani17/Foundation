import React from 'react';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { TestimonialCard } from '../../components/UI/TestimonialCard';
import { testimonials } from '../../content/home';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-earth-50" id="testimonials" aria-label="Volunteer and Donor Testimonials">
      <div className="container-custom">
        <SectionHeading
          title="Stories of Hope & Impact"
          subtitle="Hear from the dedicated volunteers, supporters, and donors who make our mission possible every single day."
          centered
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={idx * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
