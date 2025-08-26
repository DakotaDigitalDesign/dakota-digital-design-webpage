import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight } from "lucide-react";
import portfolioMockup from "@/assets/portfolio-mockup.jpg";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Valley City Restaurant",
      category: "Restaurant Website",
      description: "Modern website with online ordering system that increased takeout orders by 40%",
      image: portfolioMockup,
      results: "+40% Online Orders"
    },
    {
      title: "ND Auto Repair Shop",
      category: "Service Business",
      description: "Lead-generating website that brings in 15+ new customers per month",
      image: portfolioMockup,
      results: "15+ New Customers/Month"
    },
    {
      title: "Local Law Firm",
      category: "Professional Services",
      description: "Professional website that establishes trust and generates quality leads",
      image: portfolioMockup,
      results: "3x More Inquiries"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Real Results for <span className="text-success">Real Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See how we've helped North Dakota businesses grow their customer base 
            with professional, conversion-focused websites.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="gradient-card shadow-card border-0 overflow-hidden group hover:shadow-hero transition-all duration-300 hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2">
                    <Button variant="outline-white" size="sm">
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="text-success font-semibold text-sm">
                    {project.results}
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-16">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h3 className="text-2xl font-bold text-foreground">What Our Clients Say</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-accent">⭐</div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">
                  "Our new website has brought in so many new customers. The design is beautiful and it actually works!"
                </blockquote>
                <cite className="text-sm font-medium text-foreground">- Sarah M., Valley City Restaurant</cite>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-accent">⭐</div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">
                  "Dakota Digital Design understood our local market and created exactly what we needed."
                </blockquote>
                <cite className="text-sm font-medium text-foreground">- Mike T., Auto Repair Shop</cite>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-center">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-accent">⭐</div>
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic">
                  "Professional, fast, and the results speak for themselves. Highly recommend!"
                </blockquote>
                <cite className="text-sm font-medium text-foreground">- Jennifer L., Law Firm</cite>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="gradient-hero text-white border-0 p-12 max-w-3xl mx-auto shadow-hero">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Let's create a website that brings your North Dakota business the customers and growth you deserve.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button variant="outline-white" size="lg" className="shadow-button">
                  Get Your Free Quote Today
                </Button>
                <Button variant="outline-white" size="lg">
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

export default PortfolioSection;