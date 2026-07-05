import React from 'react';
import { motion } from 'framer-motion';
import { aboutHero } from '../../content/about';

export function AboutHero() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32"
      style={{
        background: 'linear-gradient(135deg, #FFF8E8 0%, #ffffff 40%, #e8f5ea 100%)',
      }}
      aria-label="About Hero"
    >
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #3FA34D, transparent)' }} />

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit mx-auto"
          style={{ background: '#e8f5ea', border: '1px solid #3FA34D30' }}
        >
          <span className="w-2 h-2 rounded-full bg-[#3FA34D] animate-pulse" />
          <span className="text-xs font-semibold text-[#3FA34D] font-heading">
            {aboutHero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-[#1F2937] leading-[1.15]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          {aboutHero.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {i === 1 ? (
                <span className="text-[#3FA34D]">{line}</span>
              ) : (
                line
              )}
              {i < aboutHero.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#4B5563] font-body leading-relaxed text-lg"
        >
          {aboutHero.description}
        </motion.p>
      </div>
    </section>
  );
}
