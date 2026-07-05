import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({ children, className = '', hoverable = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl border border-earth-100 shadow-sm p-6 md:p-8 transition-all duration-300 ${
        hoverable ? 'hover:shadow-md hover:border-earth-200 hover:-translate-y-1' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}
