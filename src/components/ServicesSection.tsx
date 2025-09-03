import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Smartphone, TrendingUp, Search, Users, Zap, LucideIcon } from "lucide-react";
import { useServicesData } from "@/hooks/useWordPress";
import LoadingSpinner from "./LoadingSpinner";
import ErrorFallback from "./ErrorBoundary";

const ServicesSection = () => {
  const { data: servicesData, isLoading, error, refetch } = useServicesData();

  // Icon mapping function
  const getIconComponent = (iconName: string): LucideIcon => {
    const iconMap: { [key: string]: LucideIcon } = {
      'Globe': Globe,
      'Search': Search,
      'TrendingUp': TrendingUp,
      'Smartphone': Smartphone,
      'Users': Users,
      'Zap': Zap
    };
    return iconMap[iconName] || Globe;
  };

  if (isLoading) {
    return (
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-center items-center min-h-96">
            <div className="flex flex-col items-center gap-4">
              <LoadingSpinner size="lg" />
              <p className="text-muted-foreground">Loading services...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return <ErrorFallback error={error} onRetry={() => refetch()} />;
  }

  if (!servicesData) return null;

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 
            className="text-3xl md:text-4xl font-bold text-foreground"
            dangerouslySetInnerHTML={{ __html: servicesData.section_title }}
          />
          <p className="text-xl text-muted-foreground leading-relaxed">
            {servicesData.section_description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
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
                {servicesData.cta_title}
              </h3>
              <p className="text-muted-foreground">
                {servicesData.cta_description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" className="shadow-button">
                  {servicesData.cta_primary_text}
                </Button>
                <Button variant="outline" size="lg">
                  {servicesData.cta_secondary_text}
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