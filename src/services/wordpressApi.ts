import { 
  HeroData, 
  ServicesData, 
  PortfolioData, 
  ContactData, 
  SiteSettings,
  ContactForm7Response,
  ContactFormData
} from '@/types/wordpress';

// WordPress API Configuration
const WORDPRESS_BASE_URL = process.env.VITE_WORDPRESS_URL || 'https://your-wordpress-site.com';
const WP_API_BASE = `${WORDPRESS_BASE_URL}/wp-json/wp/v2`;
const ACF_API_BASE = `${WORDPRESS_BASE_URL}/wp-json/acf/v3`;

// Generic API fetch function with error handling
async function fetchWordPressData<T>(endpoint: string): Promise<T> {
  try {
    const response = await fetch(endpoint);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching WordPress data from ${endpoint}:`, error);
    throw error;
  }
}

// Site Settings API
export async function fetchSiteSettings(): Promise<SiteSettings> {
  return fetchWordPressData<SiteSettings>(`${ACF_API_BASE}/options`);
}

// Hero Section API
export async function fetchHeroData(): Promise<HeroData> {
  // Assuming you have a page with slug 'home' that contains ACF fields
  const pages = await fetchWordPressData<any[]>(`${WP_API_BASE}/pages?slug=home&_embed`);
  
  if (pages.length === 0) {
    throw new Error('Home page not found');
  }
  
  const homePage = pages[0];
  
  // Map WordPress ACF fields to our HeroData interface
  const heroData: HeroData = {
    headline: homePage.acf?.hero_headline || 'Get More Local Customers with a Professional Website',
    subheadline: homePage.acf?.hero_subheadline || 'Serving North Dakota Businesses',
    description: homePage.acf?.hero_description || 'Dakota Digital Design builds websites that convert visitors into customers for North Dakota businesses.',
    hero_image: {
      id: homePage.acf?.hero_image?.id || 0,
      url: homePage.acf?.hero_image?.url || '/src/assets/hero-image.jpg',
      alt: homePage.acf?.hero_image?.alt || 'Hero background',
      title: homePage.acf?.hero_image?.title || 'Hero image'
    },
    cta_primary_text: homePage.acf?.cta_primary_text || 'Get Your Free Website',
    cta_secondary_text: homePage.acf?.cta_secondary_text || 'See Our Work',
    trust_indicator_1: homePage.acf?.trust_indicator_1 || 'Valley City Based',
    trust_indicator_2: homePage.acf?.trust_indicator_2 || 'Local Expertise',
    trust_indicator_3: homePage.acf?.trust_indicator_3 || 'Fast Results',
    social_proof_text: homePage.acf?.social_proof_text || 'Trusted by 50+ North Dakota businesses',
    client_rating: homePage.acf?.client_rating || 4.9,
    businesses_served: homePage.acf?.businesses_served || 50,
    hero_card_title: homePage.acf?.hero_card_title || 'Ready to Launch?',
    hero_card_description: homePage.acf?.hero_card_description || 'Get your professional website designed and launched in just 7 days.',
    hero_card_features: homePage.acf?.hero_card_features || ['Mobile-Optimized Design', 'SEO Ready', 'Lead Generation Focus']
  };
  
  return heroData;
}

// Services Section API
export async function fetchServicesData(): Promise<ServicesData> {
  // Fetch services from a custom post type or ACF fields
  const pages = await fetchWordPressData<any[]>(`${WP_API_BASE}/pages?slug=home&_embed`);
  const homePage = pages[0];
  
  // Default services data with fallback
  const servicesData: ServicesData = {
    section_title: homePage.acf?.services_title || 'Website Solutions for North Dakota Businesses',
    section_description: homePage.acf?.services_description || 'We specialize in creating websites that help local businesses attract more customers.',
    services: homePage.acf?.services || [
      {
        id: 1,
        title: 'Professional Website Design',
        description: 'Custom websites that represent your North Dakota business professionally and convert visitors into customers.',
        icon: 'Globe',
        features: ['Mobile-Responsive', 'Fast Loading', 'Professional Design']
      },
      {
        id: 2,
        title: 'Local SEO Optimization',
        description: 'Get found by customers searching for your services in Valley City, Fargo, and across North Dakota.',
        icon: 'Search',
        features: ['Google My Business', 'Local Keywords', 'Map Rankings']
      },
      // Add more default services as needed
    ],
    cta_title: homePage.acf?.services_cta_title || 'Ready to Get More Customers?',
    cta_description: homePage.acf?.services_cta_description || 'Let\'s discuss how a professional website can grow your North Dakota business.',
    cta_primary_text: homePage.acf?.services_cta_primary || 'Get Your Free Website',
    cta_secondary_text: homePage.acf?.services_cta_secondary || 'Call Now',
    cta_phone: homePage.acf?.services_cta_phone || '(701) 840-9830'
  };
  
  return servicesData;
}

// Portfolio Section API
export async function fetchPortfolioData(): Promise<PortfolioData> {
  // Fetch portfolio items from a custom post type
  const portfolioItems = await fetchWordPressData<any[]>(`${WP_API_BASE}/portfolio?_embed`);
  const testimonials = await fetchWordPressData<any[]>(`${WP_API_BASE}/testimonials?_embed`);
  const pages = await fetchWordPressData<any[]>(`${WP_API_BASE}/pages?slug=home&_embed`);
  const homePage = pages[0];
  
  const portfolioData: PortfolioData = {
    section_title: homePage.acf?.portfolio_title || 'Real Results for Real Businesses',
    section_description: homePage.acf?.portfolio_description || 'See how we\'ve helped North Dakota businesses grow their customer base.',
    projects: portfolioItems?.map((item: any) => ({
      id: item.id,
      title: item.title?.rendered || item.acf?.title,
      category: item.acf?.category || 'Website',
      description: item.acf?.description || '',
      image: {
        id: item.acf?.featured_image?.id || 0,
        url: item.acf?.featured_image?.url || '/src/assets/portfolio-mockup.jpg',
        alt: item.acf?.featured_image?.alt || item.title?.rendered,
        title: item.acf?.featured_image?.title || item.title?.rendered
      },
      results: item.acf?.results || '',
      live_url: item.acf?.live_url || ''
    })) || [],
    testimonials: testimonials?.map((testimonial: any) => ({
      id: testimonial.id,
      content: testimonial.content?.rendered || testimonial.acf?.content,
      author: testimonial.acf?.author || 'Anonymous',
      rating: testimonial.acf?.rating || 5
    })) || [],
    cta_title: homePage.acf?.portfolio_cta_title || 'Ready to Join Our Success Stories?',
    cta_description: homePage.acf?.portfolio_cta_description || 'Let\'s create a website that brings your North Dakota business the customers and growth you deserve.',
    cta_primary_text: homePage.acf?.portfolio_cta_primary || 'Get Your Free Website Today',
    cta_secondary_text: homePage.acf?.portfolio_cta_secondary || 'Call Now',
    cta_phone: homePage.acf?.portfolio_cta_phone || '(701) 840-9830'
  };
  
  return portfolioData;
}

// Contact Section API
export async function fetchContactData(): Promise<ContactData> {
  const pages = await fetchWordPressData<any[]>(`${WP_API_BASE}/pages?slug=home&_embed`);
  const homePage = pages[0];
  
  const contactData: ContactData = {
    section_title: homePage.acf?.contact_title || 'Let\'s Grow Your North Dakota Business',
    section_description: homePage.acf?.contact_description || 'Ready to get more customers with a professional website?',
    contact_info: {
      phone: homePage.acf?.contact_phone || '(701) 840-9830',
      email: homePage.acf?.contact_email || 'dakotadesigndigital@gmail.com',
      location: homePage.acf?.contact_location || 'Valley City, North Dakota',
      phone_description: homePage.acf?.phone_description || 'Free consultation available',
      email_description: homePage.acf?.email_description || 'We respond within 2 hours',
      location_description: homePage.acf?.location_description || 'Serving all of ND remotely'
    },
    trust_indicators: homePage.acf?.trust_indicators || [
      'Local North Dakota expertise',
      '7-day website launch guarantee',
      '50+ satisfied ND businesses',
      'Free consultation & website',
      'Domain & hosting included',
      'Security & updates handled'
    ],
    form_title: homePage.acf?.form_title || 'Get Your Free Website',
    form_description: homePage.acf?.form_description || 'Tell us about your project and we\'ll build your website for free.'
  };
  
  return contactData;
}

// Contact Form 7 Submission
export async function submitContactForm(formData: ContactFormData, formId: number = 1): Promise<ContactForm7Response> {
  try {
    const formDataObj = new FormData();
    
    // Map form fields to Contact Form 7 field names
    formDataObj.append('your-name', formData.name);
    formDataObj.append('your-email', formData.email);
    formDataObj.append('your-phone', formData.phone || '');
    formDataObj.append('business-name', formData.business || '');
    formDataObj.append('current-website', formData.website || '');
    formDataObj.append('project-description', formData.project);
    formDataObj.append('timeline', formData.timeline || '');
    formDataObj.append('_wpcf7_unit_tag', `contact-form-7-${formId}`);
    
    const response = await fetch(`${WORDPRESS_BASE_URL}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`, {
      method: 'POST',
      body: formDataObj
    });
    
    const result = await response.json();
    
    return {
      status: result.status === 'mail_sent' ? 'success' : 'error',
      message: result.message,
      invalid_fields: result.invalid_fields
    };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return {
      status: 'error',
      message: 'An error occurred while submitting the form. Please try again.'
    };
  }
}

// Utility function to get icon component name from string
export function getIconComponent(iconName: string) {
  const iconMap: { [key: string]: string } = {
    'Globe': 'Globe',
    'Search': 'Search',
    'TrendingUp': 'TrendingUp',
    'Smartphone': 'Smartphone',
    'Users': 'Users',
    'Zap': 'Zap'
  };
  
  return iconMap[iconName] || 'Globe';
}