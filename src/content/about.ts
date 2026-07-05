import type { CoreValue, TimelineEvent, StatItem } from '../types';

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const aboutHero = {
  badge: 'Our Story',
  headline: 'Who We Are',
  title: 'A Community Built on\nCompassion & Service',
  description:
    'MIASei Foundation is a Government-registered voluntary organisation, born from the belief that no one should go to bed hungry. We are a family of dedicated volunteers united by a single purpose — to serve humanity.',
};

// ─── Foundation Story ─────────────────────────────────────────────────────────
export const foundationStory = {
  badge: 'Our Journey',
  title: 'The Story Behind MIASei',
  subtitle: 'From a Simple Idea to a Movement',
  story: [
    'MIASei Foundation was born out of a deeply personal recognition — that hunger is not a distant problem, but one that exists in our very neighbourhoods. Our founders witnessed elderly men and women going without food at government hospitals, waiting for help that never came.',
    'What started as a small group of volunteers distributing home-cooked meals from the back of a motorcycle grew into a structured, government-registered organisation with a mission that extends beyond food — to restore dignity, build community, and create lasting social change.',
    'Registered under the Tamil Nadu Societies Act (Govt Reg No: IV/35/2025), MIASei Foundation operates with complete transparency and accountability, ensuring that every rupee donated reaches those who need it most.',
    'Today, we serve thousands of meals, run community programs, and mobilise hundreds of volunteers across Chennai and beyond. But our heart remains the same — simple, compassionate service to humanity.',
  ],
  image: '/assets/images/gallery-4.jpg',
};

// ─── Mission & Vision ─────────────────────────────────────────────────────────
export const missionVision = {
  mission: {
    badge: 'Our Mission',
    title: 'What We Do',
    content:
      'To eliminate hunger and poverty by providing nutritious food, community support, and educational resources to underprivileged individuals and families — ensuring that every person has access to basic dignity and opportunity, regardless of their background.',
    icon: 'target',
    color: '#3FA34D',
  },
  vision: {
    badge: 'Our Vision',
    title: 'Where We Are Going',
    content:
      'A hunger-free, compassionate society where every individual — regardless of age, gender, or economic status — lives with dignity, has access to nutritious food, quality education, and the support of a caring community. We envision a future where no child sleeps hungry and no elder is left alone.',
    icon: 'eye',
    color: '#F59E2A',
  },
};

// ─── Core Values ──────────────────────────────────────────────────────────────
export const coreValues: CoreValue[] = [
  {
    id: 'compassion',
    title: 'Compassion',
    description:
      'We lead with empathy and love, treating every individual we serve with the dignity and respect they deserve.',
    icon: 'heart',
    color: '#3FA34D',
    bgColor: '#e8f5ea',
  },
  {
    id: 'service',
    title: 'Service',
    description:
      'Selfless service is at the core of everything we do. We serve without expectation, driven by a genuine desire to uplift.',
    icon: 'hand-helping',
    color: '#F59E2A',
    bgColor: '#fef3e2',
  },
  {
    id: 'integrity',
    title: 'Integrity',
    description:
      'We operate with complete honesty and moral clarity. Our actions, finances, and communications are always transparent.',
    icon: 'shield-check',
    color: '#C8A2E8',
    bgColor: '#f5f0fb',
  },
  {
    id: 'transparency',
    title: 'Transparency',
    description:
      'Every donation is accounted for and every action reported. We believe our supporters deserve full visibility.',
    icon: 'eye',
    color: '#7DD3FC',
    bgColor: '#e0f4fe',
  },
  {
    id: 'community',
    title: 'Community',
    description:
      'We grow together. Our strength lies in the collective power of our volunteers, donors, and the communities we serve.',
    icon: 'users',
    color: '#3FA34D',
    bgColor: '#e8f5ea',
  },
];

// ─── Timeline ─────────────────────────────────────────────────────────────────
export const timeline: TimelineEvent[] = [
  {
    id: 'tl-1',
    year: 'Early 2025',
    title: 'The First Meal',
    description:
      'A small group of friends began distributing home-cooked meals to elderly patients outside government hospitals in Chennai — one meal, one heart at a time.',
    icon: 'utensils',
  },
  {
    id: 'tl-2',
    year: 'Mid 2025',
    title: 'Community Expansion',
    description:
      'Grew to 50 regular volunteers and expanded distribution to multiple hospitals and public areas. Served over 1,000 meals as the movement gained momentum.',
    icon: 'users',
  },
  {
    id: 'tl-3',
    year: 'Mid 2025',
    title: 'Formalizing the Vision',
    description:
      'Began structured operations, established volunteer onboarding processes, and launched educational support programs for underprivileged children.',
    icon: 'book-open',
  },
  {
    id: 'tl-4',
    year: 'Late 2025',
    title: 'Growing Impact',
    description:
      'Expanded emergency assistance programs, conducted 25+ community events, and built partnerships with local businesses and government bodies.',
    icon: 'trending-up',
  },
  {
    id: 'tl-5',
    year: 'Late 2025',
    title: 'Digital Transformation',
    description:
      'Launched online volunteer registration and donation platforms. Reached 400+ active volunteers and distributed 7,000+ meals.',
    icon: 'globe',
  },
  {
    id: 'tl-6',
    year: '2025',
    title: 'Government Registration',
    description:
      'Officially registered as MIASei Voluntary Organisation under the Tamil Nadu Societies Act (Reg No: IV/35/2025), cementing our commitment to accountability.',
    icon: 'award',
  },
  {
    id: 'tl-7',
    year: '2026',
    title: 'Scaling the Mission',
    description:
      'Expanding our outreach, strengthening volunteer systems, and preparing larger community programs to serve more families with consistency and care.',
    icon: 'trending-up',
  },
];

// ─── About Stats ──────────────────────────────────────────────────────────────
export const aboutStats: StatItem[] = [
  {
    id: 'meals-about',
    value: '10,000',
    label: 'Meals Distributed',
    suffix: '+',
    icon: 'utensils',
    color: '#3FA34D',
  },
  {
    id: 'volunteers-about',
    value: '500',
    label: 'Active Volunteers',
    suffix: '+',
    icon: 'users',
    color: '#F59E2A',
  },
  {
    id: 'families-about',
    value: '1,200',
    label: 'Families Supported',
    suffix: '+',
    icon: 'home',
    color: '#C8A2E8',
  },
  {
    id: 'events-about',
    value: '50',
    label: 'Events Conducted',
    suffix: '+',
    icon: 'calendar',
    color: '#7DD3FC',
  },
];

