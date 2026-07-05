import type { DonationImpactCard, WhyDonatePoint } from '../types';

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const donateHero = {
  badge: 'Every Rupee Matters',
  headline: 'Your Generosity Saves Lives',
  title: 'Feed a Family.\nChange a Life.',
  description:
    'Your donation goes directly to feeding the hungry, supporting underprivileged families, and creating lasting community change. 100% transparent. 100% impactful.',
  cta: { label: 'Donate Now', href: '#donate-form' },
};

// ─── Impact Cards ─────────────────────────────────────────────────────────────
export const donationImpactCards: DonationImpactCard[] = [
  {
    id: 'impact-1',
    amount: 100,
    impact: 'Feeds 2 People with a hot, nutritious meal',
    icon: 'utensils',
    color: '#3FA34D',
    bgColor: '#e8f5ea',
  },
  {
    id: 'impact-2',
    amount: 500,
    impact: 'Feeds 10 People for an entire day',
    icon: 'users',
    color: '#F59E2A',
    bgColor: '#fef3e2',
    popular: true,
  },
  {
    id: 'impact-3',
    amount: 1000,
    impact: 'Supports a family for a week with essentials',
    icon: 'home',
    color: '#C8A2E8',
    bgColor: '#f5f0fb',
  },
  {
    id: 'impact-4',
    amount: 5000,
    impact: 'Supports Community Programs for a month',
    icon: 'heart',
    color: '#7DD3FC',
    bgColor: '#e0f4fe',
  },
];

// ─── Preset Amounts ───────────────────────────────────────────────────────────
export const presetAmounts = [100, 250, 500, 1000, 2500, 5000];

// ─── Why Donate ───────────────────────────────────────────────────────────────
export const whyDonatePoints: WhyDonatePoint[] = [
  {
    id: 'wd-1',
    title: 'Transparent Usage',
    description:
      'Every donation is tracked and reported. We publish detailed impact reports so you always know where your money goes.',
    icon: 'eye',
  },
  {
    id: 'wd-2',
    title: 'Verified NGO',
    description:
      'Government-registered under the Tamil Nadu Societies Act (Reg No: IV/35/2025). Fully compliant and accountable.',
    icon: 'shield-check',
  },
  {
    id: 'wd-3',
    title: 'Direct UPI Transfers',
    description:
      'Donations are received directly into the foundation\'s bank account via secure UPI with zero intermediary fees.',
    icon: 'lock',
  },
  {
    id: 'wd-4',
    title: 'Direct Community Impact',
    description:
      'No administrative bloat. Your donation goes directly to meals, programs, and the people who need it most.',
    icon: 'trending-up',
  },
];

// ─── Payment Methods ──────────────────────────────────────────────────────────
export const paymentMethods = [
  { id: 'upi', label: 'UPI', icon: '📱' },
  { id: 'gpay', label: 'Google Pay', icon: '💳' },
  { id: 'phonepe', label: 'PhonePe', icon: '📲' },
  { id: 'paytm', label: 'Paytm', icon: '💰' },
  { id: 'debit', label: 'Debit Card', icon: '🏦' },
  { id: 'credit', label: 'Credit Card', icon: '💎' },
  { id: 'netbanking', label: 'Net Banking', icon: '🏛️' },
];
