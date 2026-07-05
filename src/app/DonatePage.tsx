import React from 'react';
import { SEOHead } from '../components/Layout/SEOHead';
import { DonateHero } from '../sections/donate/DonateHero';
import { ImpactCards } from '../sections/donate/ImpactCards';
import { DonateForm } from '../sections/donate/DonateForm';
import { WhyDonate } from '../sections/donate/WhyDonate';

export default function DonatePage() {
  return (
    <>
      <SEOHead page="donate" />
      <DonateHero />
      <ImpactCards />
      <DonateForm />
      <WhyDonate />
    </>
  );
}
export { DonatePage };
