import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-2">Hari G</h3>
            <p className="text-muted-foreground">
              Embedded Systems & Firmware Developer
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Building the future, one circuit at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex justify-center space-x-6">
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:bg-primary/20 hover:text-primary"
                asChild
              >
                <a href="https://github.com/Harilp" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:bg-primary/20 hover:text-primary"
                asChild
              >
                <a href="https://linkedin.com/in/hari-g-2273aa288" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              
              <Button 
                variant="ghost" 
                size="sm"
                className="hover:bg-primary/20 hover:text-primary"
                asChild
              >
                <a href="mailto:harilp427@srmist.edu.in">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Hari G. Made with <Heart className="h-4 w-4 text-red-500" /> and lots of embedded systems passion.
          </p>
        </div>
      </div>
    </footer>
  );
};