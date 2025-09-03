import { useQuery, UseMutationResult, useMutation } from '@tanstack/react-query';
import { 
  fetchHeroData, 
  fetchServicesData, 
  fetchPortfolioData, 
  fetchContactData, 
  fetchSiteSettings,
  submitContactForm
} from '@/services/wordpressApi';
import { 
  HeroData, 
  ServicesData, 
  PortfolioData, 
  ContactData, 
  SiteSettings,
  ContactFormData,
  ContactForm7Response
} from '@/types/wordpress';

// Custom hooks for WordPress data fetching
export function useHeroData() {
  return useQuery<HeroData>({
    queryKey: ['heroData'],
    queryFn: fetchHeroData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
}

export function useServicesData() {
  return useQuery<ServicesData>({
    queryKey: ['servicesData'],
    queryFn: fetchServicesData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

export function usePortfolioData() {
  return useQuery<PortfolioData>({
    queryKey: ['portfolioData'],
    queryFn: fetchPortfolioData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

export function useContactData() {
  return useQuery<ContactData>({
    queryKey: ['contactData'],
    queryFn: fetchContactData,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
}

export function useSiteSettings() {
  return useQuery<SiteSettings>({
    queryKey: ['siteSettings'],
    queryFn: fetchSiteSettings,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 30 * 60 * 1000, // 30 minutes
  });
}

// Contact form submission hook
export function useContactForm(): UseMutationResult<ContactForm7Response, Error, ContactFormData> {
  return useMutation<ContactForm7Response, Error, ContactFormData>({
    mutationFn: (formData: ContactFormData) => submitContactForm(formData),
  });
}

// Utility hook for checking if any WordPress data is loading
export function useWordPressLoading() {
  const heroQuery = useHeroData();
  const servicesQuery = useServicesData();
  const portfolioQuery = usePortfolioData();
  const contactQuery = useContactData();
  const siteQuery = useSiteSettings();
  
  return (
    heroQuery.isLoading ||
    servicesQuery.isLoading ||
    portfolioQuery.isLoading ||
    contactQuery.isLoading ||
    siteQuery.isLoading
  );
}

// Utility hook for checking if any WordPress data has errors
export function useWordPressErrors() {
  const heroQuery = useHeroData();
  const servicesQuery = useServicesData();
  const portfolioQuery = usePortfolioData();
  const contactQuery = useContactData();
  const siteQuery = useSiteSettings();
  
  const errors = [
    heroQuery.error,
    servicesQuery.error,
    portfolioQuery.error,
    contactQuery.error,
    siteQuery.error,
  ].filter(Boolean);
  
  return errors.length > 0 ? errors : null;
}