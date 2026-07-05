// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
}

// ─── Stats / KPI ──────────────────────────────────────────────────────────────
export interface StatItem {
  id: string;
  value: string;
  label: string;
  suffix?: string;
  icon: string;
  color: string;
}

// ─── Programs ─────────────────────────────────────────────────────────────────
export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  photo: string;
  quote: string;
  rating: number;
}

// ─── Gallery ──────────────────────────────────────────────────────────────────
export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: 'food' | 'community' | 'events' | 'volunteers';
}

// ─── About ────────────────────────────────────────────────────────────────────
export interface CoreValue {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  bgColor: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Volunteer ────────────────────────────────────────────────────────────────
export interface WhyVolunteerCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface VolunteerOpportunity {
  id: string;
  title: string;
  description: string;
  commitment: string;
  skills: string[];
  icon: string;
  color: string;
  bgColor: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  occupation: string;
  areaOfInterest: string;
  availability: string;
  message: string;
}

// ─── Donation ─────────────────────────────────────────────────────────────────
export interface DonationImpactCard {
  id: string;
  amount: number;
  impact: string;
  icon: string;
  color: string;
  bgColor: string;
  popular?: boolean;
}

export interface DonationFormData {
  name: string;
  email: string;
  phone: string;
  amount: number | string;
  message?: string;
}

export interface WhyDonatePoint {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Contact ──────────────────────────────────────────────────────────────────
export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  officeHours: string;
  whatsappNumber: string;
  mapEmbedUrl: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
  color: string;
  hoverColor: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export interface FooterData {
  tagline: string;
  description: string;
  copyright: string;
  privacyUrl: string;
  termsUrl: string;
}

// ─── SEO ──────────────────────────────────────────────────────────────────────
export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
}

// ─── Supabase DB ──────────────────────────────────────────────────────────────
export interface VolunteerRecord extends VolunteerFormData {
  id?: string;
  created_at?: string;
  status?: 'pending' | 'approved' | 'rejected';
}

export interface DonationRecord {
  id?: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  message?: string;
  razorpay_payment_id?: string;
  razorpay_order_id?: string;
  status: 'pending' | 'success' | 'failed';
  created_at?: string;
}

export interface ContactRecord extends ContactFormData {
  id?: string;
  created_at?: string;
  status?: 'new' | 'read' | 'replied';
}
