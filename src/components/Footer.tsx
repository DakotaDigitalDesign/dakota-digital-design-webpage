import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Linkedin, Globe } from "lucide-react";
import { useSiteSettings } from "@/hooks/useWordPress";

const Footer = () => {
  const { data: siteSettings } = useSiteSettings();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                {siteSettings?.site_title || "Dakota Digital Design"}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {siteSettings?.site_description || "Professional websites for North Dakota businesses. We help local companies attract more customers and grow online."}
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/90">Valley City, ND</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/90">{siteSettings?.contact_phone || "(701) 840-9830"}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/90">{siteSettings?.contact_email || "dakotadesigndigital@gmail.com"}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Website Design</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Local SEO</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Lead Generation</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Mobile Optimization</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Website Maintenance</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Resources</h3>
            <div className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Portfolio</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Case Studies</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Blog</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">FAQ</a>
              <a href="#" className="block text-white/80 hover:text-accent transition-colors">Free Resources</a>
            </div>
          </div>

          {/* CTA & Social */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Get Started Today</h3>
            <p className="text-white/80">
              Ready to grow your North Dakota business? Get your free consultation.
            </p>
            <Button variant="cta" size="lg" className="w-full">
              Get Free Quote
            </Button>
            
            <div className="space-y-4">
              <p className="text-sm text-white/80">Follow Us</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                  <Facebook className="w-5 h-5 text-white group-hover:text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                  <Linkedin className="w-5 h-5 text-white group-hover:text-foreground" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors group">
                  <Globe className="w-5 h-5 text-white group-hover:text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/80 text-sm">
              © 2024 Dakota Digital Design. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;