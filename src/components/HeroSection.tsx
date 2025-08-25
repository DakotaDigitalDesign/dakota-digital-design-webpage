import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="text-white space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-white">
                🌾 Serving North Dakota Businesses
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Get More Local <span className="text-accent">Customers</span> with a 
                <span className="text-accent"> Professional Website</span>
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Dakota Digital Design builds websites that convert visitors into customers for North Dakota businesses. 
                No tech headaches, just results that grow your business.
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Valley City Based</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Local Expertise</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Fast Results</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group shadow-button">
                Get Your Free Website Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-white" size="lg">
                See Our Work
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="pt-4">
              <p className="text-white/80 text-sm mb-3">Trusted by 50+ North Dakota businesses</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-accent">⭐</div>
                ))}
                <span className="ml-2 text-white/90 font-medium">4.9/5 Client Rating</span>
              </div>
            </div>
          </div>
          
          {/* Hero Card */}
          <div className="lg:flex justify-center hidden">
            <Card className="gradient-card shadow-hero border-0 p-8 max-w-md animate-float">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-2">
                    Ready to Launch?
                  </h3>
                  <p className="text-muted-foreground">
                    Get your professional website designed and launched in just 7 days.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Mobile-Optimized Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>SEO Ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-success" />
                    <span>Lead Generation Focus</span>
                  </div>
                </div>
                <Button variant="primary" className="w-full">
                  Start Your Project
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;