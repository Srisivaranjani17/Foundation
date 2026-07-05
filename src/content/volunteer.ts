import type { WhyVolunteerCard, VolunteerOpportunity, StatItem, Testimonial } from '../types';

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const volunteerHero = {
  badge: 'Make a Difference',
  headline: 'Become the Change',
  title: 'Join Our Volunteer\nNetwork Today',
  description:
    'Your time and skills have the power to transform lives. Join 500+ compassionate individuals who are actively serving humanity through MIASei Foundation.',
  cta: { label: 'Register as Volunteer', href: '#register' },
  secondaryCta: { label: 'Learn More', href: '#why-volunteer' },
  image: '/assets/images/gallery-1.jpg',
};

// ─── Why Volunteer ────────────────────────────────────────────────────────────
export const whyVolunteerCards: WhyVolunteerCard[] = [
  {
    id: 'wv-1',
    title: 'Community Service',
    description:
      'Directly contribute to your community by serving meals, organising events, and providing support to those who need it most.',
    icon: 'heart-handshake',
    color: '#3FA34D',
  },
  {
    id: 'wv-2',
    title: 'Leadership Development',
    description:
      'Take on team leadership roles, organise events, and develop project management skills that extend far beyond volunteering.',
    icon: 'award',
    color: '#F59E2A',
  },
  {
    id: 'wv-3',
    title: 'Social Impact',
    description:
      'Create real, measurable impact. See firsthand how your actions transform lives and strengthen communities every day.',
    icon: 'trending-up',
    color: '#C8A2E8',
  },
  {
    id: 'wv-4',
    title: 'Build Your Network',
    description:
      'Connect with like-minded individuals, social workers, professionals, and community leaders who share your values.',
    icon: 'users',
    color: '#7DD3FC',
  },
];

// ─── Volunteer Opportunities ──────────────────────────────────────────────────
export const volunteerOpportunities: VolunteerOpportunity[] = [
  {
    id: 'opp-1',
    title: 'Food Distribution',
    description:
      'Help us prepare, package, and distribute nutritious meals to the elderly, hospital patients, and underprivileged families.',
    commitment: '4–6 hours/week',
    skills: ['No special skills needed', 'Physical stamina', 'Team spirit'],
    icon: 'utensils',
    color: '#3FA34D',
    bgColor: '#e8f5ea',
  },
  {
    id: 'opp-2',
    title: 'Event Support',
    description:
      'Assist in organising and executing community events, cultural programs, and awareness drives across Chennai.',
    commitment: 'Weekend availability',
    skills: ['Event coordination', 'Communication', 'Enthusiasm'],
    icon: 'calendar-check',
    color: '#F59E2A',
    bgColor: '#fef3e2',
  },
  {
    id: 'opp-3',
    title: 'Fundraising',
    description:
      'Help us raise funds through campaigns, donor outreach, corporate partnerships, and creative fundraising initiatives.',
    commitment: 'Flexible hours',
    skills: ['Networking', 'Communication', 'Creativity'],
    icon: 'indian-rupee',
    color: '#C8A2E8',
    bgColor: '#f5f0fb',
  },
  {
    id: 'opp-4',
    title: 'Community Awareness',
    description:
      'Spread awareness about hunger, nutrition, and our programs through social media, community outreach, and public campaigns.',
    commitment: '2–3 hours/week',
    skills: ['Social media', 'Public speaking', 'Content creation'],
    icon: 'megaphone',
    color: '#7DD3FC',
    bgColor: '#e0f4fe',
  },
];

// ─── Volunteer Metrics ────────────────────────────────────────────────────────
export const volunteerMetrics: StatItem[] = [
  {
    id: 'active-vols',
    value: '100',
    label: 'Active Volunteers',
    suffix: '+',
    icon: 'users',
    color: '#3FA34D',
  },
  {
    id: 'vol-hours',
    value: '12,000',
    label: 'Volunteer Hours',
    suffix: '+',
    icon: 'clock',
    color: '#F59E2A',
  },
  {
    id: 'events-org',
    value: '50',
    label: 'Events Organised',
    suffix: '+',
    icon: 'calendar',
    color: '#C8A2E8',
  },
];

// ─── Volunteer Interests & Availability Options ───────────────────────────────
export const areasOfInterest = [
  'Food Distribution',
  'Event Support',
  'Fundraising',
  'Community Awareness',
  'Educational Support',
  'Emergency Response',
  'Administrative Support',
  'Social Media & Content',
];

export const availabilityOptions = [
  'Weekdays (Morning)',
  'Weekdays (Afternoon)',
  'Weekdays (Evening)',
  'Weekends',
  'Flexible',
  'On-call (Emergency)',
];

// ─── Volunteer Testimonials ───────────────────────────────────────────────────
export const volunteerStories: Testimonial[] = [
  {
    id: 'vs-1',
    name: 'Mukund pandyan',
    role: 'Food Distribution Volunteer & Organizer',
    photo: '',
    quote:
      'Every Sunday when I help distribute meals, I am reminded of why I joined MIASei. The gratitude in the eyes of those we serve is worth every moment of effort.',
    rating: 5,
  },
  {
    id: 'vs-2',
    name: 'Venkateswaran chinnaiah',
    role: 'Organizer & Donor',
    photo: '',
    quote:
      'MIASei gave me a sense of purpose I never knew I was missing. The team here is incredible — passionate, committed, and genuinely caring about the mission.',
    rating: 5,
  },
  {
    id: 'vs-3',
    name: 'Manoanmani',
    role: 'Organizer & Donor',
    photo: '',
    quote:
      'As a college student, I was looking for a way to contribute meaningfully. MIASei gave me the opportunity to make a real difference while learning so much about community and leadership.',
    rating: 5,
  },
  {
    id: 'vs-4',
    name: 'Saravanan Raj',
    role: 'Community Outreach Volunteer',
    photo: '',
    quote:
      'Volunteering here has connected me with people from all walks of life. Every event reminds me that small acts of service can create a very big impact.',
    rating: 5,
  },
  {
    id: 'vs-5',
    name: ' Geetha Mohan ',
    role: 'Organizer & Donor',
    photo: '',
    quote:
      'From planning drives to helping on the ground, every experience with MIASei has been inspiring. The team makes every volunteer feel valued and empowered.',
    rating: 5,
  },
  {
    id: 'vs-6',
    name: 'Aravind narayana perumal',
    role: 'Organizer & Donor',
    photo: '',
    quote:
      'The joy of serving meals and speaking with the people we help has changed my perspective on life. MIASei gives service a true human meaning.',
    rating: 5,
  },
  {
    id: 'vs-7',
    name: 'Chandraprakash',
    role: 'Organizer & Donor',
    photo: '',
    quote:
      'What I love most about MIASei is the spirit of unity. Everyone shows up with compassion, and together we are able to serve with consistency and care.',
    rating: 5,
  },
   {
    id: 'vs-7',
    name: 'Selvi shanmughasundaramnp',
    role: 'Organizer & Donor',
    photo: '',
    quote:
      'What I love most about MIASei is the spirit of unity. Everyone shows up with compassion, and together we are able to serve with consistency and care.',
    rating: 5,
  }
];
