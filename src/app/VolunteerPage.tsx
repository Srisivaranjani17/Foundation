import React from 'react';
import { SEOHead } from '../components/Layout/SEOHead';
import { VolunteerHero } from '../sections/volunteer/VolunteerHero';
import { WhyVolunteer } from '../sections/volunteer/WhyVolunteer';
import { OpportunitiesSection } from '../sections/volunteer/OpportunitiesSection';
import { ImpactMetrics } from '../sections/volunteer/ImpactMetrics';
import { VolunteerRegistration } from '../sections/volunteer/VolunteerRegistration';
import { VolunteerStories } from '../sections/volunteer/VolunteerStories';

export default function VolunteerPage() {
  return (
    <>
      <SEOHead page="volunteer" />
      <VolunteerHero />
      <WhyVolunteer />
      <OpportunitiesSection />
      <ImpactMetrics />
      <VolunteerRegistration />
      <VolunteerStories />
    </>
  );
}
export { VolunteerPage };
