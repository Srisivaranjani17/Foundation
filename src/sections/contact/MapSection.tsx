import React from 'react';
import { contactInfo } from '../../content/contact';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function MapSection() {
  return (
    <section className="bg-white border-t border-earth-100" id="map" aria-label="Our Location Map">
      <AnimatedSection>
        <div className="w-full h-[450px] relative overflow-hidden">
          <iframe
            title="MIASei Foundation Location Map"
            src={contactInfo.mapEmbedUrl}
            className="w-full h-full border-0 absolute inset-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
