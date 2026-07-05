import React from 'react';
import { SEOHead } from '../components/Layout/SEOHead';
import { AboutHero } from '../sections/about/AboutHero';
import { FoundationStory } from '../sections/about/FoundationStory';
import { MissionVision } from '../sections/about/MissionVision';
import { CoreValues } from '../sections/about/CoreValues';
import { Timeline } from '../sections/about/Timeline';
import { ImpactStats } from '../sections/about/ImpactStats';

export default function AboutPage() {
  return (
    <>
      <SEOHead page="about" />
      <AboutHero />
      <FoundationStory />
      <MissionVision />
      <CoreValues />
      <Timeline />
      <ImpactStats />
    </>
  );
}
export { AboutPage };
