import type { NavItem } from '../types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
];

export const logoConfig = {
  src: '/logo.png',
  alt: 'MIASei Foundation Logo',
  name: 'MIASei Foundation',
  tagline: 'Feeding the Hungry, Serving Humanity',
};
