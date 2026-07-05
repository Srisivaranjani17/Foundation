import React from 'react';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { VolunteerForm } from '../../components/Forms/VolunteerForm';
import { Card } from '../../components/UI/Card';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function VolunteerRegistration() {
  return (
    <section className="py-20 bg-white" id="register" aria-label="Volunteer Registration Form">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="Join the Movement"
            subtitle="Fill out the registration form below. Our team will review your application and get in touch with you shortly to schedule an onboarding call."
            centered
          />

          <AnimatedSection className="mt-12">
            <Card className="shadow-lg border-earth-100 p-6 sm:p-10">
              <VolunteerForm />
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
