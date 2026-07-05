import React from 'react';
import { motion } from 'framer-motion';
import { scaleIn } from '../../hooks/useScrollAnimation';
import { getInitials, getAvatarColor, getStarArray } from '../../utils/formatters';
import type { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  delay?: number;
}

export function TestimonialCard({ testimonial, delay = 0 }: TestimonialCardProps) {
  const stars = getStarArray(testimonial.rating);

  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay }}
      className="h-full"
    >
      <div className="h-full bg-white rounded-2xl p-7 shadow-card border border-gray-100 flex flex-col gap-5 card-hover relative overflow-hidden">
        {/* Quote decoration */}
        <div className="absolute top-4 right-5 text-6xl font-serif text-[#3FA34D] opacity-10 leading-none select-none">
          "
        </div>

        {/* Stars */}
        <div className="flex gap-1">
          {stars.map((filled, i) => (
            <svg
              key={i}
              className="w-4 h-4"
              fill={filled ? '#F59E2A' : '#E5E7EB'}
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-[#4B5563] leading-relaxed italic flex-1 text-[0.95rem]">
          "{testimonial.quote}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
          <div
            className="w-11 h-11 rounded-full flex items-center justify-center text-white font-heading font-bold text-sm flex-shrink-0"
            style={{ background: getAvatarColor(testimonial.name) }}
          >
            {testimonial.photo ? (
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-full h-full rounded-full object-cover"
                loading="lazy"
              />
            ) : (
              getInitials(testimonial.name)
            )}
          </div>
          <div>
            <p className="font-heading font-semibold text-[#1F2937] text-sm">
              {testimonial.name}
            </p>
            <p className="text-xs text-[#9CA3AF]">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
