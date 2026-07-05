import React from 'react';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { ContactForm } from '../../components/Forms/ContactForm';
import { Card } from '../../components/UI/Card';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function ContactFormSection() {
  return (
    <section className="py-20 bg-earth-50" aria-label="Contact Form Inquiry">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            title="Send Us a Message"
            subtitle="Have queries, feedback, or interest in partnership? Drop us a note below and our team will get in touch with you shortly."
            centered
          />

          <AnimatedSection className="mt-12">
            <Card className="shadow-lg border-earth-150 p-6 sm:p-10 bg-white">
              <ContactForm />
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
