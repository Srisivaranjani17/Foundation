import React from 'react';
import { FaArrowRight, FaHeart } from 'react-icons/fa6';
import { Button } from '../../components/UI/Button';
import { donationCTA } from '../../content/home';
import { AnimatedSection } from '../../components/UI/AnimatedSection';

export function DonationCTA() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20"
      aria-label="Donation Call to Action"
    >
      <div
        className="pointer-events-none absolute left-[-120px] top-10 h-[280px] w-[280px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(63,163,77,0.16), transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-[-100px] h-[320px] w-[320px] rounded-full opacity-70 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(245,158,42,0.18), transparent 72%)' }}
      />

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] border border-[#E5E7EB] bg-white/85 shadow-[0_20px_80px_rgba(31,41,55,0.08)] backdrop-blur-sm">
            <div className="relative px-6 py-12 text-center sm:px-10 md:px-14">
              <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#F59E2A]/25 bg-[#FFF7ED] px-4 py-2">
                <FaHeart className="text-[#F59E2A] fill-[#F59E2A]" size={14} />
                <span className="font-heading text-xs font-semibold uppercase tracking-[0.16em] text-[#F59E2A]">
                  {donationCTA.badge}
                </span>
              </div>

              <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold leading-tight text-[#1F2937] md:text-5xl">
                {donationCTA.headline}
              </h2>

              <p className="mx-auto mt-5 max-w-2xl font-body text-base leading-relaxed text-[#4B5563] md:text-lg">
                {donationCTA.description}
              </p>

              <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-[#F59E2A]/20 bg-gradient-to-r from-[#FFF7ED] via-white to-[#EEF9F0] px-5 py-4 shadow-[0_10px_30px_rgba(245,158,42,0.08)]">
                <p className="font-heading text-sm font-semibold text-[#D97706] sm:text-base">
                  {donationCTA.highlight}
                </p>
              </div>

              <div className="mt-8 flex justify-center">
                <Button
                  as="a"
                  href={donationCTA.cta.href}
                  variant="donate"
                  size="lg"
                  icon={<FaArrowRight size={18} />}
                  iconPosition="right"
                  className="min-w-[220px] justify-center !bg-[#F59E2A] px-8 hover:!bg-[#d4851f]"
                >
                  {donationCTA.cta.label}
                </Button>
              </div>

              <p className="mt-4 font-body text-sm text-[#6B7280]">
                Safe giving. Direct impact. Transparent use of funds.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
