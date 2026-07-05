import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp, FaShareNodes } from 'react-icons/fa6';
import { SectionHeading } from '../../components/UI/SectionHeading';
import { Card } from '../../components/UI/Card';
import { socialLinks } from '../../content/contact';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

const iconMap: Record<string, React.ReactNode> = {
  facebook: <FaFacebook size={24} />,
  instagram: <FaInstagram size={24} />,
  linkedin: <FaLinkedin size={24} />,
  youtube: <FaYoutube size={24} />,
  'message-circle': <FaWhatsapp size={24} />,
};

export function SocialLinks() {
  return (
    <section className="py-20 bg-earth-50 border-t border-earth-100" aria-label="Social Media Connections">
      <div className="container-custom">
        <SectionHeading
          title="Connect on Social Media"
          subtitle="Follow our updates, watch our drives live, and join the conversation online across our official channels."
          centered
        />

        <div className="flex flex-wrap justify-center gap-6 mt-12">
          {socialLinks.map((social, idx) => (
            <AnimatedSection key={social.id} delay={idx * 0.08} className="w-full sm:w-auto">
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <Card
                  hoverable
                  className="flex items-center gap-4 px-6 py-4 bg-white border-earth-150 transition-colors duration-300 group-hover:border-forest-200"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: social.color }}
                  >
                    {iconMap[social.icon] || <FaShareNodes size={24} />}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-800 text-sm">
                      {social.platform}
                    </h4>
                    <p className="text-xs text-gray-500 font-body">@miaseifoundation</p>
                  </div>
                </Card>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
