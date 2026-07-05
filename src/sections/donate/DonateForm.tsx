import React from 'react';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { DonationForm } from '../../components/Forms/DonationForm';
import { Card } from '../../components/UI/Card';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function DonateFormSection() {
  return (
    <section className="py-20 bg-white" id="donate-form" aria-label="Donation Submission Form">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <SectionHeading
            title="Make a Secure Donation"
            subtitle="Choose a preset amount or enter a custom sum. All payments are securely processed through Razorpay."
            centered
          />

          <AnimatedSection className="mt-12">
            <Card className="shadow-lg border-earth-100 p-6 sm:p-10">
              <DonationForm />
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
export { DonateFormSection as DonateForm };
