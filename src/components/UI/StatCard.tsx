import React from 'react';
import { motion } from 'framer-motion';
import {
  FaAward,
  FaCalendarCheck,
  FaClock,
  FaHeart,
  FaHouse,
  FaStar,
  FaUsers,
  FaUtensils,
} from 'react-icons/fa6';
import { useScrollAnimation, fadeInUp } from '../../hooks/useScrollAnimation';
import type { StatItem } from '../../types';

interface StatCardProps {
  stat: StatItem;
  delay?: number;
  className?: string;
}

export function StatCard({ stat, delay = 0, className = '' }: StatCardProps) {
  const { ref, controls } = useScrollAnimation();

  const iconMap: Record<string, React.ReactNode> = {
    utensils: <FaUtensils size={28} />,
    users: <FaUsers size={28} />,
    'calendar-check': <FaCalendarCheck size={28} />,
    calendar: <FaCalendarCheck size={28} />,
    heart: <FaHeart size={28} />,
    home: <FaHouse size={28} />,
    clock: <FaClock size={28} />,
    award: <FaAward size={28} />,
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      transition={{ delay }}
      className="relative group h-full"
    >
      <div
        className={`
          flex flex-col items-center text-center p-8 rounded-2xl
          bg-white shadow-card card-hover
          border border-gray-100 overflow-hidden h-full
          ${className}
        `}
      >
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
          style={{ background: stat.color }}
        />

        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${stat.color}18`, color: stat.color }}
        >
          {iconMap[stat.icon] ?? <FaStar size={28} />}
        </div>

        <div className="flex items-end gap-0.5 mb-1">
          <span
            className="font-heading font-bold leading-none"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: stat.color }}
          >
            {stat.value}
          </span>
          {stat.suffix && (
            <span
              className="font-heading font-bold text-2xl mb-1"
              style={{ color: stat.color }}
            >
              {stat.suffix}
            </span>
          )}
        </div>

        <p className="font-body text-[#4B5563] font-medium text-sm mt-1">
          {stat.label}
        </p>

        <div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
          style={{ background: stat.color }}
        />
      </div>
    </motion.div>
  );
}
