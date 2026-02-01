import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "@/assets/profile-hero.jpg";

export const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 tech-glow animate-float">
                <img 
                  src={profileImage} 
                  alt="Hari G - Profile" 
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
              </div>
              {/* Decorative tech elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Hari G</span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground mb-4">
              Aspiring Embedded Systems &
            </h2>
            <h2 className="text-2xl lg:text-3xl font-semibold text-primary mb-6">
              Firmware Developer
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              "Bridging hardware and software to build smarter embedded solutions."
            </p>

            <p className="text-foreground/80 mb-8 max-w-xl">
              Third-year ECE student at SRM IST, passionate about microcontrollers, 
              RTOS, and creating innovative embedded systems that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={scrollToProjects}
                className="gradient-tech hover:shadow-tech transition-all duration-300 group"
              >
                View My Work 
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};