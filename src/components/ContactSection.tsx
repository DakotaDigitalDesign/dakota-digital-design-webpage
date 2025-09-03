import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Let's Grow Your <span className="text-primary">North Dakota</span> Business
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to get more customers with a professional website? 
                Let's discuss your project and see how we can help your business thrive.
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
                  <p className="text-muted-foreground">(701) 840-9830</p>
                  <p className="text-sm text-muted-foreground">Free consultation available</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-success rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-success-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
                  <p className="text-muted-foreground">dakotadesigndigital@gmail.com</p>
                  <p className="text-sm text-muted-foreground">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Valley City, North Dakota</p>
                  <p className="text-sm text-muted-foreground">Serving all of ND remotely</p>
                </div>
              </div>

            </div>

            {/* Trust Indicators */}
            <Card className="gradient-card shadow-card border-0 p-6">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-card-foreground">Why Choose Dakota Digital Design?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Local North Dakota expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">7-day website launch guarantee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">50+ satisfied ND businesses</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Free consultation & website</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Domain & hosting included</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Security & updates handled</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="gradient-card shadow-hero border-0 p-8">
            <form className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">Get Your Free Website</h3>
                <p className="text-muted-foreground">Tell us about your project and we'll build your website for free.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="John Smith" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="john@business.com" required />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="(701) 840-9830" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input id="business" placeholder="Your Business Name" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Current Website (if any)</Label>
                <Input id="website" placeholder="https://yourwebsite.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project">Tell us about your project *</Label>
                <Textarea 
                  id="project" 
                  placeholder="Describe what you need: new website, redesign, more customers, better online presence, etc."
                  className="min-h-32"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeline">When do you need this completed?</Label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option>ASAP (Rush job)</option>
                  <option>Within 2 weeks</option>
                  <option>Within a month</option>
                  <option>No specific deadline</option>
                </select>
              </div>

              <Button type="submit" variant="cta" size="lg" className="w-full shadow-button">
                Get My Free Website & Consultation
              </Button>

              <div className="text-center text-sm text-muted-foreground">
                📞 Prefer to talk? Call us at <a href="tel:7018409830" className="text-primary hover:underline">(701) 840-9830</a>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;