import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useHeroData } from "@/hooks/useWordPress";
import LoadingSpinner from "./LoadingSpinner";
import ErrorFallback from "./ErrorBoundary";
import heroImageFallback from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const { data: heroData, isLoading, error, refetch } = useHeroData();

  if (isLoading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"></div>
        <div className="relative z-10 flex flex-col items-center gap-4">
          <LoadingSpinner size="lg" />
          <p className="text-muted-foreground">Loading content...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return <ErrorFallback error={error} onRetry={() => refetch()} />;
  }

  if (!heroData) return null;

  const backgroundImage = heroData.hero_image?.url || heroImageFallback;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
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
                🌾 {heroData.subheadline}
              </div>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                dangerouslySetInnerHTML={{ __html: heroData.headline }}
              />
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                {heroData.description}
              </p>
            </div>
            
            {/* Trust Indicators */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{heroData.trust_indicator_1}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{heroData.trust_indicator_2}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>{heroData.trust_indicator_3}</span>
                </div>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="group shadow-button">
                {heroData.cta_primary_text}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-white" size="lg">
                {heroData.cta_secondary_text}
              </Button>
            </div>
            
            {/* Social Proof */}
            <div className="pt-4">
              <p className="text-white/80 text-sm mb-3">{heroData.social_proof_text}</p>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 text-accent">⭐</div>
                ))}
                <span className="ml-2 text-white/90 font-medium">{heroData.client_rating}/5 Client Rating</span>
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
                    {heroData.hero_card_title}
                  </h3>
                  <p className="text-muted-foreground">
                    {heroData.hero_card_description}
                  </p>
                </div>
                <div className="space-y-3">
                  {heroData.hero_card_features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{feature}</span>
                    </div>
                  ))}
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