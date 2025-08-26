import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, TrendingUp, Search, Users, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Professional Website Design",
      description: "Custom websites that represent your North Dakota business professionally and convert visitors into customers.",
      features: ["Mobile-Responsive", "Fast Loading", "Professional Design"]
    },
    {
      icon: Search,
      title: "Local SEO Optimization",
      description: "Get found by customers searching for your services in Valley City, Fargo, and across North Dakota.",
      features: ["Google My Business", "Local Keywords", "Map Rankings"]
    },
    {
      icon: TrendingUp,
      title: "Lead Generation Focus",
      description: "Every website we build is designed to turn visitors into paying customers for your local business.",
      features: ["Contact Forms", "Call Tracking", "Conversion Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Your customers are on their phones. We make sure your website looks perfect on every device.",
      features: ["Touch-Friendly", "Fast Mobile", "App-Like Experience"]
    },
    {
      icon: Users,
      title: "Small Business Focused",
      description: "We understand North Dakota businesses. Our solutions are built for local companies that want to grow.",
      features: ["Local Understanding", "Affordable Pricing", "Ongoing Support"]
    },
    {
      icon: Zap,
      title: "Fast Turnaround",
      description: "Get your professional website launched quickly so you can start attracting customers right away.",
      features: ["7-Day Launch", "Quick Updates", "Rapid Response"]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Website Solutions for <span className="text-primary">North Dakota</span> Businesses
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We specialize in creating websites that help local businesses attract more customers, 
            increase sales, and grow their presence in the North Dakota market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="gradient-card shadow-card border-0 p-8 group hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="gradient-card shadow-hero border-0 p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-card-foreground">
                Ready to Get More Customers?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss how a professional website can grow your North Dakota business. 
                Free consultation, no obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="shadow-button">
                  Get Your Free Quote
                </Button>
                <Button variant="outline" size="lg">
                  Call (701) 555-0123
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;