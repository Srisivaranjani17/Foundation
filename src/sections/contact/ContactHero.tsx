import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope } from 'react-icons/fa6';
import { contactHero } from '../../content/contact';

export function ContactHero() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'linear-gradient(135deg, #FFF8E8 0%, #ffffff 45%, #e8f5ea 100%)',
      }}
      aria-label="Contact Hero"
    >
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #3FA34D, transparent)' }} />

      <div className="container-custom relative z-10 text-center max-w-3xl mx-auto flex flex-col gap-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit mx-auto bg-forest-50 border border-forest-100"
        >
          <FaEnvelope className="text-forest-600" size={14} />
          <span className="text-xs font-semibold text-forest-750 font-heading">
            {contactHero.badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-[#1F2937] leading-[1.15]"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}
        >
          {contactHero.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {i === 1 ? (
                <span className="text-[#3FA34D]">{line}</span>
              ) : (
                line
              )}
              {i < contactHero.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#4B5563] font-body leading-relaxed text-lg"
        >
          {contactHero.description}
        </motion.p>
      </div>
    </section>
  );
}
