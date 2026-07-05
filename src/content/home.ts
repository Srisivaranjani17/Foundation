import type { StatItem, Program, Testimonial, GalleryImage } from '../types';

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const homeHero = {
  badge: 'Government Registered NGO · Reg No: IV/35/2025',
  headline: 'Together We Can Make a Difference',
  title: 'Feeding the Hungry,\nServing Humanity',
  description:
    'MIASei Foundation is a registered voluntary organisation dedicated to eliminating hunger and uplifting underserved communities across India. Through compassion, service, and collective action, we create lasting change — one meal, one life at a time.',
  primaryCta: { label: 'Donate Now', href: '/donate' },
  secondaryCta: { label: 'Become a Volunteer', href: '/volunteer' },
  heroImage: '/assets/images/gallery-1.jpg',
  trustBadges: [
    { label: 'Govt. Registered', icon: 'shield-check' },
    { label: 'Transparent', icon: 'eye' },
    { label: 'Community Driven', icon: 'users' },
  ],
};

// ─── Impact Stats ─────────────────────────────────────────────────────────────
export const impactStats: StatItem[] = [
  {
    id: 'meals',
    value: '60,000',
    label: 'Meals Served',
    suffix: '+',
    icon: 'utensils',
    color: '#3FA34D',
  },
  {
    id: 'volunteers',
    value: '50',
    label: 'Volunteers',
    suffix: '+',
    icon: 'users',
    color: '#F59E2A',
  },
  {
    id: 'events',
    value: '50',
    label: 'Events Conducted',
    suffix: '+',
    icon: 'calendar-check',
    color: '#C8A2E8',
  },
  {
    id: 'lives',
    value: '5,000',
    label: 'Lives Impacted',
    suffix: '+',
    icon: 'heart',
    color: '#7DD3FC',
  },
];

// ─── Programs ─────────────────────────────────────────────────────────────────
export const programs: Program[] = [
  {
    id: 'food',
    title: 'Food Distribution',
    description:
      'Providing nutritious meals to underprivileged communities, elderly individuals, and those in need — every day without exception.',
    icon: 'utensils',
    color: '#3FA34D',
    bgColor: '#e8f5ea',
  },
  {
    id: 'community',
    title: 'Community Outreach',
    description:
      'Engaging with local communities to identify needs, build relationships, and implement targeted support programs for lasting upliftment.',
    icon: 'users',
    color: '#F59E2A',
    bgColor: '#fef3e2',
  },
  {
    id: 'education',
    title: 'Educational Support',
    description:
      'Helping underprivileged children access quality education through scholarships, learning materials, and mentorship programs.',
    icon: 'book-open',
    color: '#7DD3FC',
    bgColor: '#e0f4fe',
  },
  {
    id: 'emergency',
    title: 'Emergency Assistance',
    description:
      'Delivering rapid relief during natural disasters, medical emergencies, and crisis situations to the most vulnerable populations.',
    icon: 'life-buoy',
    color: '#C8A2E8',
    bgColor: '#f5f0fb',
  },
];

// ─── CTA Sections ─────────────────────────────────────────────────────────────
export const volunteerCTA = {
  badge: 'Make an Impact',
  headline: 'Join as a Volunteer',
  description:
    'Be the change you wish to see. Join our growing family of compassionate volunteers and help us serve humanity with love and dedication.',
  cta: { label: 'Register Now', href: '/volunteer' },
  image: '/assets/images/gallery-2.jpg',
  benefits: [
    'Flexible time commitments',
    'Training & skill development',
    'Certificate of recognition',
    'Join a 500+ strong community',
  ],
};

export const donationCTA = {
  badge: 'Every Rupee Counts',
  headline: 'Make a Donation',
  description:
    'Your generous contribution directly funds food distribution, educational support, and emergency relief. 100% of your donation reaches those in need.',
  cta: { label: 'Donate Now', href: '/donate' },
  highlight: '₹100 = 2 hot meals for a hungry family',
};

// ─── Testimonials ─────────────────────────────────────────────────────────────
export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Manjunathan',
    role: 'Founder',
    photo: '',
    quote:
      'MIASei has been a life-changing experience. Seeing the smiles on the faces of those we serve fills my heart with indescribable joy. This foundation truly embodies compassion.',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Benjamin joseph',
    role: 'Managing Trustee',
    photo: '',
    quote:
      'The dedication of the MIASei team is unmatched. In just a few months, I have seen how a small group of committed individuals can create enormous impact in the communities we serve.',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Francis jacob jeyaraj',
    role: 'Organizer',
    photo: '',
    quote:
      'I started donating to MIASei after seeing their transparent reporting. Knowing exactly where my money goes and the impact it creates gives me complete confidence and satisfaction.',
    rating: 5,
  },
  {
    id: 'test-4',
    name: 'Kalaivani',
    role: 'Organizer',
    photo: '',
    quote:
      'As a young professional, MIASei gave me the platform to give back meaningfully. The organisation is professional, transparent, and genuinely passionate about making a difference.',
    rating: 5,
  },
];

// ─── Gallery Preview ──────────────────────────────────────────────────────────
export const galleryImages: GalleryImage[] = [
  {
    id: 'gal-1',
    src: '/assets/images/gallery-1.jpg',
    alt: 'Community members gathering for food distribution',
    caption: 'Community Food Distribution Drive',
    category: 'food',
  },
  {
    id: 'gal-2',
    src: '/assets/images/gallery-2.jpg',
    alt: 'Volunteer distributing food packets to elderly',
    caption: 'Serving with Compassion',
    category: 'volunteers',
  },
  {
    id: 'gal-3',
    src: '/assets/images/gallery-3.jpg',
    alt: 'Food distribution at public area',
    caption: 'Reaching Every Corner',
    category: 'food',
  },
  {
    id: 'gal-4',
    src: '/assets/images/gallery-4.jpg',
    alt: 'Community members receiving food with MIASei banner',
    caption: 'MIASei Community Event',
    category: 'events',
  },
];
