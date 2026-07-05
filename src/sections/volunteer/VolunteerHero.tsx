import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { Button } from '../../components/UI/Button';
import { volunteerHero } from '../../content/volunteer';

export function VolunteerHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FFF8E8 0%, #ffffff 45%, #e8f5ea 100%)',
        minHeight: 'calc(80vh - 72px)',
      }}
      aria-label="Volunteer Hero"
    >
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #3FA34D, transparent)' }} />

      <div className="container-custom relative z-10 flex items-center py-16 min-h-[calc(80vh-72px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit"
              style={{ background: '#e8f5ea', border: '1px solid #3FA34D30' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#3FA34D] animate-pulse" />
              <span className="text-xs font-semibold text-[#3FA34D] font-heading">
                {volunteerHero.badge}
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <p className="text-[#4B5563] font-body font-medium text-lg mb-3">
                {volunteerHero.headline}
              </p>
              <h1
                className="font-heading font-bold text-[#1F2937] leading-[1.15]"
                style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}
              >
                {volunteerHero.title.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i === 1 ? (
                      <span className="text-[#3FA34D]">{line}</span>
                    ) : (
                      line
                    )}
                    {i < volunteerHero.title.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4B5563] font-body leading-relaxed max-w-xl"
              style={{ fontSize: 'clamp(0.95rem, 2vw, 1.05rem)' }}
            >
              {volunteerHero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                as="a"
                href={volunteerHero.cta.href}
                variant="primary"
                size="lg"
                icon={<FaArrowRight size={18} />}
                iconPosition="right"
              >
                {volunteerHero.cta.label}
              </Button>
              <Button
                as="a"
                href={volunteerHero.secondaryCta.href}
                variant="secondary"
                size="lg"
              >
                {volunteerHero.secondaryCta.label}
              </Button>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src={volunteerHero.image}
                alt="Volunteers smiling while serving"
                className="w-full h-full object-cover max-h-[450px]"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  t.src = '/assets/images/gallery-1.jpg';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
