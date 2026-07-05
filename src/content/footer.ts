import type { NavItem, FooterData } from '../types';

export const footerData: FooterData = {
  tagline: 'Feeding the Hungry, Serving Humanity',
  description:
    'We are committed to creating a hunger-free and better tomorrow for everyone. Join us in our mission to serve humanity with love and compassion.',
  copyright: '© 2025 MIASei Foundation. All Rights Reserved.',
  privacyUrl: '/privacy',
  termsUrl: '/terms',
};

export const footerQuickLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Donate', href: '/donate' },
  { label: 'Contact', href: '/contact' },
];

export const footerContact = {
  phone: '+91 98765 43210',
  email: 'info@miaseifoundation.org',
  address: 'No. 189, 2nd Floor, Pallavan Salai,\nChennai – 600 002, Tamil Nadu',
  hours: 'Mon – Sat: 9:00 AM – 6:00 PM',
};

export const footerRegistration = {
  regNumber: 'Govt Reg No: IV/35/2025',
  registeredUnder: 'Tamil Nadu Societies Act',
};
