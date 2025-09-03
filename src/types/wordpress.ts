// WordPress API Types
export interface WordPressImage {
  id: number;
  url: string;
  alt: string;
  title: string;
}

export interface HeroData {
  headline: string;
  subheadline: string;
  description: string;
  hero_image: WordPressImage;
  cta_primary_text: string;
  cta_secondary_text: string;
  trust_indicator_1: string;
  trust_indicator_2: string;
  trust_indicator_3: string;
  social_proof_text: string;
  client_rating: number;
  businesses_served: number;
  hero_card_title: string;
  hero_card_description: string;
  hero_card_features: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
  features: string[];
}

export interface ServicesData {
  section_title: string;
  section_description: string;
  services: Service[];
  cta_title: string;
  cta_description: string;
  cta_primary_text: string;
  cta_secondary_text: string;
  cta_phone: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: WordPressImage;
  results: string;
  live_url?: string;
}

export interface Testimonial {
  id: number;
  content: string;
  author: string;
  rating: number;
}

export interface PortfolioData {
  section_title: string;
  section_description: string;
  projects: Project[];
  testimonials: Testimonial[];
  cta_title: string;
  cta_description: string;
  cta_primary_text: string;
  cta_secondary_text: string;
  cta_phone: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  phone_description: string;
  email_description: string;
  location_description: string;
}

export interface ContactData {
  section_title: string;
  section_description: string;
  contact_info: ContactInfo;
  trust_indicators: string[];
  form_title: string;
  form_description: string;
}

export interface SiteSettings {
  site_title: string;
  site_description: string;
  logo: WordPressImage;
  contact_phone: string;
  contact_email: string;
}

// Contact Form 7 Types
export interface ContactForm7Response {
  status: 'success' | 'error';
  message: string;
  invalid_fields?: Array<{
    field: string;
    message: string;
  }>;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  business?: string;
  website?: string;
  project: string;
  timeline?: string;
}