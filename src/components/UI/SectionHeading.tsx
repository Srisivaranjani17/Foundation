import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  centered?: boolean;
  titleColor?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  centered,
  titleColor = '#1F2937',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const finalAlign = centered ? 'center' : align;
  const alignClass = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  }[finalAlign];


  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold font-heading"
          style={{
            background: light ? 'rgba(255,255,255,0.15)' : '#e8f5ea',
            color: light ? '#fff' : '#3FA34D',
            border: light ? '1px solid rgba(255,255,255,0.3)' : 'none',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading font-bold leading-tight"
        style={{
          fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
          color: light ? '#fff' : titleColor,
        }}
        dangerouslySetInnerHTML={{
          __html: title.replace(/\n/g, '<br/>'),
        }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl leading-relaxed"
          style={{
            color: light ? 'rgba(255,255,255,0.85)' : '#4B5563',
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
