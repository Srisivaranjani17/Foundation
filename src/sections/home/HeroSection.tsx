import React from 'react';
import { motion } from 'framer-motion';
import {
  FaArrowRight,
  FaEye,
  FaShieldHalved,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa6';
import { Button } from '../../components/UI/Button';
import { homeHero } from '../../content/home';

const trustIconMap: Record<string, React.ReactNode> = {
  'shield-check': <FaShieldHalved size={14} />,
  eye: <FaEye size={14} />,
  users: <FaUsers size={14} />,
};

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF8E8 0%, #ffffff 45%, #e8f5ea 100%)',
        minHeight: 'calc(100vh - 72px)',
      }}
      aria-label="Hero section"
    >
      <div
        className="absolute top-[-100px] right-[-100px] h-[500px] w-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #3FA34D, transparent)' }}
      />
      <div
        className="absolute bottom-[-80px] left-[-80px] h-[350px] w-[350px] rounded-full opacity-8"
        style={{ background: 'radial-gradient(circle, #F59E2A, transparent)' }}
      />

      <div className="container-custom relative z-10 flex min-h-[calc(100vh-72px)] items-start py-10 sm:py-12 md:items-center md:py-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left lg:gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex w-fit items-center gap-2 rounded-full px-4 py-2"
              style={{ background: '#e8f5ea', border: '1px solid #3FA34D30' }}
            >
              <span className="h-2 w-2 rounded-full bg-[#3FA34D] animate-pulse" />
              <span className="font-heading text-xs font-semibold text-[#3FA34D]">
                {homeHero.badge}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="mb-3 text-lg font-body font-medium text-[#4B5563]">
                {homeHero.headline}
              </p>
              <h1
                className="font-heading font-bold leading-[1.15] text-[#1F2937]"
                style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)' }}
              >
                {homeHero.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i === 1 ? <span style={{ color: '#3FA34D' }}>{line}</span> : line}
                    {i < homeHero.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto max-w-xl font-body leading-relaxed text-[#4B5563] md:mx-0"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}
            >
              {homeHero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4"
            >
              <Button
                as="a"
                href={homeHero.primaryCta.href}
                variant="donate"
                size="lg"
                icon={<FaArrowRight size={18} />}
                iconPosition="right"
                className="w-full sm:w-auto"
              >
                {homeHero.primaryCta.label}
              </Button>
              <Button
                as="a"
                href={homeHero.secondaryCta.href}
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                {homeHero.secondaryCta.label}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 md:justify-start"
            >
              {homeHero.trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm"
                >
                  <span className="text-[#3FA34D]">{trustIconMap[badge.icon]}</span>
                  <span className="font-body text-xs font-medium text-[#4B5563]">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative mt-2 w-full max-w-[420px] justify-self-center md:mt-0 md:max-w-none"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_80px_rgba(63,163,77,0.2)]">
              <img
                src={homeHero.heroImage}
                alt="MIASei Foundation volunteers serving food to community"
                className="h-[300px] w-full object-cover sm:h-[360px] md:h-full"
                style={{ maxHeight: '520px' }}
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = '/assets/images/gallery-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Volunteers - Top Left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -8, 0]
              }}
              transition={{ 
                opacity: { delay: 0.8, duration: 0.5 },
                scale: { delay: 0.8, duration: 0.5 },
                y: { repeat: Infinity, duration: 3.5, ease: "easeInOut" }
              }}
              className="absolute left-3 top-3 z-20 hidden rounded-2xl border border-gray-100 bg-white p-3.5 shadow-card-hover md:-left-12 md:-top-6 md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f5ea] text-[#3FA34D]">
                  <FaUsers size={22} />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold leading-none text-[#3FA34D]">
                    500+
                  </p>
                  <p className="mt-0.5 text-xs font-body text-[#9CA3AF]">Volunteers</p>
                </div>
              </div>
            </motion.div>

            {/* Meals Served - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, 8, 0]
              }}
              transition={{ 
                opacity: { delay: 1, duration: 0.5 },
                scale: { delay: 1, duration: 0.5 },
                y: { repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute bottom-3 right-3 z-20 hidden rounded-2xl border border-gray-100 bg-white p-3.5 shadow-card-hover md:-right-12 md:-bottom-6 md:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f5ea] text-[#3FA34D]">
                  <FaUtensils size={22} />
                </div>
                <div>
                  <p className="font-heading text-xl font-bold leading-none text-[#3FA34D]">
                    10,000+
                  </p>
                  <p className="mt-0.5 text-xs font-body text-[#9CA3AF]">Meals Served</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
