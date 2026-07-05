import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  once?: boolean;
  threshold?: number;
}

export function AnimatedSection({
  children,
  className = '',
  variants,
  direction = 'up',
  delay = 0,
  once = true,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold });

  const getDirectionVariants = (): Variants => {
    const offset = 40;
    const isHorizontal = direction === 'left' || direction === 'right';
    const axis = isHorizontal ? 'x' : 'y';
    let val = 0;
    if (direction === 'up') val = offset;
    else if (direction === 'down') val = -offset;
    else if (direction === 'left') val = offset;
    else if (direction === 'right') val = -offset;

    return {
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      hidden: { opacity: 0, [axis]: val } as any,
      visible: {
        opacity: 1,
        [axis]: 0,
        transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const },
      } as any, /* eslint-disable-line @typescript-eslint/no-explicit-any */
    };
  };

  const activeVariants = variants || getDirectionVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={activeVariants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
