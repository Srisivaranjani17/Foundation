import type { ContactInfo, SocialLink } from '../types';

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const contactHero = {
  badge: "We're Here for You",
  headline: "Let's Connect",
  title: 'Reach Out to\nMIASei Foundation',
  description:
    'Whether you have questions about volunteering, donations, or our programs — we are here to help. Reach out and our team will respond within 24 hours.',
};

// ─── Contact Information ──────────────────────────────────────────────────────
export const contactInfo: ContactInfo = {
  phone: '+91 91768 76781',
  email: 'moondruirukkaaindhusei@gmail.com',
  address: '103,2nd Floor,Padavattamman Industrial Estate,Ambattur,Chennai-600098, Tamil Nadu, India',
  officeHours: 'Mon - Sat: 9:00 AM - 6:00 PM',
  whatsappNumber: '9191768 76781',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.1234!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU4LjAiTiA4MMKwMTYnMTQuNSJF!5e0!3m2!1sen!2sin!4v1234567890',
};

// ─── Social Links ─────────────────────────────────────────────────────────────
export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    url: 'https://instagram.com/moondruirukkaaindhusei',
    icon: 'instagram',
    color: '#E1306C',
    hoverColor: '#c0255c',
  },
  {
    id: 'whatsapp',
    platform: 'WhatsApp',
    url: 'https://wa.me/919176876781',
    icon: 'message-circle',
    color: '#25D366',
    hoverColor: '#1db954',
  },
];

// ─── WhatsApp Message ─────────────────────────────────────────────────────────
export const whatsappConfig = {
  number: '919176876781',
  message: encodeURIComponent(
    'Hello MIASei Foundation,\n\nI would like to know more about your programs and volunteer opportunities.\n\nThank you.'
  ),
};
