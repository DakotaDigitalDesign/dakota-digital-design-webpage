import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";
import { useContactData, useContactForm } from "@/hooks/useWordPress";
import LoadingSpinner from "./LoadingSpinner";
import ErrorFallback from "./ErrorBoundary";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";
import type { ContactFormData } from "@/types/wordpress";

const ContactSection = () => {
  const { data: contactData, isLoading, error, refetch } = useContactData();
  const contactFormMutation = useContactForm();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    project: '',
    timeline: ''
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-96">
            <div className="flex flex-col items-center gap-4">
              <LoadingSpinner size="lg" />
              <p className="text-muted-foreground">Loading contact information...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <ErrorFallback error={error} onRetry={() => refetch()} />;
  }

  if (!contactData) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await contactFormMutation.mutateAsync(formData);
      
      if (result.status === 'success') {
        toast({
          title: "Message Sent!",
          description: "Thank you for your inquiry. We'll get back to you within 2 hours.",
          variant: "default"
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          business: '',
          website: '',
          project: '',
          timeline: ''
        });
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 
                className="text-3xl md:text-4xl font-bold text-foreground"
                dangerouslySetInnerHTML={{ __html: contactData.section_title }}
              />
              <p className="text-xl text-muted-foreground leading-relaxed">
                {contactData.section_description}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Call Us</h3>
                  <p className="text-muted-foreground">{contactData.contact_info.phone}</p>
                  <p className="text-sm text-muted-foreground">{contactData.contact_info.phone_description}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">{contactData.contact_info.email}</p>
                  <p className="text-sm text-muted-foreground">{contactData.contact_info.email_description}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">{contactData.contact_info.location}</p>
                  <p className="text-sm text-muted-foreground">{contactData.contact_info.location_description}</p>
                </div>
              </div>

            </div>

            {/* Trust Indicators */}
            <Card className="gradient-card shadow-card border-0 p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-card-foreground">Why Choose Dakota Digital Design?</h3>
                <div className="space-y-3">
                  {contactData.trust_indicators.map((indicator, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card shadow-hero border-0 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">{contactData.form_title}</h3>
                <p className="text-muted-foreground">{contactData.form_description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="John Smith" 
                    required 
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@business.com" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input 
                    id="phone" 
                    placeholder="(701) 840-9830"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input 
                    id="business" 
                    placeholder="Your Business Name"
                    value={formData.business}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Current Website (if any)</Label>
                <Input 
                  id="website" 
                  placeholder="https://yourwebsite.com"
                  value={formData.website}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project">Tell us about your project *</Label>
                <Textarea 
                  id="project" 
                  placeholder="Describe what you need: new website, redesign, more customers, better online presence, etc."
                  className="min-h-32"
                  required
                  value={formData.project}
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">When do you need this completed?</Label>
                <select 
                  id="timeline"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={formData.timeline}
                  onChange={handleInputChange}
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP (Rush job)">ASAP (Rush job)</option>
                  <option value="Within 2 weeks">Within 2 weeks</option>
                  <option value="Within a month">Within a month</option>
                  <option value="No specific deadline">No specific deadline</option>
                </select>
              </div>

              <Button 
                type="submit" 
                variant="cta" 
                size="lg" 
                className="w-full shadow-button"
                disabled={contactFormMutation.isPending}
              >
                {contactFormMutation.isPending ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    Sending...
                  </>
                ) : (
                  'Get My Free Website & Consultation'
                )}
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                📞 Prefer to talk? Call us at <a href={`tel:${contactData.contact_info.phone.replace(/\D/g, '')}`} className="text-primary hover:underline">{contactData.contact_info.phone}</a>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;