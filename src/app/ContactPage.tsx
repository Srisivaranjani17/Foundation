import React from 'react';
import { SEOHead } from '../components/Layout/SEOHead';
import { ContactHero } from '../sections/contact/ContactHero';
import { ContactInfo } from '../sections/contact/ContactInfo';
import { ContactFormSection } from '../sections/contact/ContactFormSection';
import { SocialLinks } from '../sections/contact/SocialLinks';
import { MapSection } from '../sections/contact/MapSection';

export default function ContactPage() {
  return (
    <>
      <SEOHead page="contact" />
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <SocialLinks />
      <MapSection />
    </>
  );
}
export { ContactPage };
