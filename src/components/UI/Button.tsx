import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary' | 'donate' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  as?: 'button' | 'a';
  href?: string;
  target?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#3FA34D] hover:bg-[#2d7a38] text-white shadow-[0_4px_20px_rgba(63,163,77,0.35)] hover:shadow-[0_6px_28px_rgba(63,163,77,0.45)]',
  secondary:
    'bg-white border-2 border-[#3FA34D] text-[#3FA34D] hover:bg-[#e8f5ea]',
  donate:
    'bg-[#F59E2A] hover:bg-[#d4851f] text-white shadow-[0_4px_20px_rgba(245,158,42,0.35)] hover:shadow-[0_6px_28px_rgba(245,158,42,0.45)]',
  outline:
    'bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#3FA34D]',
  ghost:
    'bg-transparent text-[#3FA34D] hover:bg-[#e8f5ea]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className = '',
      children,
      disabled,
      as: Tag = 'button',
      href,
      target,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-heading font-semibold rounded-xl
      transition-all duration-300
      focus-visible:outline-2 focus-visible:outline-[#3FA34D] focus-visible:outline-offset-2
      disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none
      ${fullWidth ? 'w-full' : ''}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${className}
    `;

    const content = (
      <>
        {loading && (
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        )}
        {!loading && icon && iconPosition === 'left' && icon}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && icon}
      </>
    );

    if (Tag === 'a' && href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          className={baseStyles}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref}
        disabled={disabled || loading}
        className={baseStyles}
        whileHover={{ scale: disabled || loading ? 1 : 1.03 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.97 }}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';
