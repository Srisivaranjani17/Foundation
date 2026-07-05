import React from 'react';
import { SEOHead } from '../components/Layout/SEOHead';
import { HeroSection } from '../sections/home/HeroSection';
import { ImpactStats } from '../sections/home/ImpactStats';
import { ProgramsSection } from '../sections/home/ProgramsSection';
import { VolunteerCTA } from '../sections/home/VolunteerCTA';
import { DonationCTA } from '../sections/home/DonationCTA';
import { TestimonialsSection } from '../sections/home/TestimonialsSection';
import { GalleryPreview } from '../sections/home/GalleryPreview';

export default function HomePage() {
  return (
    <>
      <SEOHead page="home" />
      <HeroSection />
      <ImpactStats />
      <ProgramsSection />
      <VolunteerCTA />
      <DonationCTA />
      <TestimonialsSection />
      <GalleryPreview />
    </>
  );
}
export { HomePage };
