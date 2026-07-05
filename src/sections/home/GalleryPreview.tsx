import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { Button } from '../../components/UI/Button';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { GalleryGrid } from '../../components/UI/GalleryGrid';
import { galleryImages } from '../../content/home';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function GalleryPreview() {
  return (
    <section className="py-20 bg-white" aria-label="Gallery Preview">
      <div className="container-custom flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <SectionHeading
            title="Our Action Gallery"
            subtitle="Take a look at our drives, distribution camps, and community efforts captured in real-time."
            centered
            className="!mb-0"
          />
          <AnimatedSection direction="up" className="flex justify-center">
            <Button
              as="a"
              href="/volunteer"
              variant="secondary"
              icon={<FaArrowRight size={18} />}
              iconPosition="right"
            >
              See Full Gallery
            </Button>
          </AnimatedSection>
        </div>

        <GalleryGrid images={galleryImages} columns={4} />
      </div>
    </section>
  );
}
