import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Palette,
  Send,
  MapPin
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "harilp427@srmist.edu.in",
    href: "mailto:harilp427@srmist.edu.in",
    color: "text-blue-400"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8667402229",
    href: "tel:+918667402229",
    color: "text-green-400"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/hari-g-2273aa288",
    href: "https://linkedin.com/in/hari-g-2273aa288",
    color: "text-blue-500"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Harilp",
    href: "https://github.com/Harilp",
    color: "text-purple-400"
  },
  {
    icon: Palette,
    label: "Portfolio (Canva)",
    value: "View Creative Portfolio",
    href: "#",
    color: "text-pink-400"
  }
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on embedded systems projects or discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss embedded systems, collaborate on innovative projects, 
                or explore opportunities in firmware development. Whether you have a project idea, 
                want to connect professionally, or just want to chat about electronics, feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <Card 
                    key={contact.label}
                    className="card-elevated bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4">
                      <a 
                        href={contact.href}
                        target={contact.href.startsWith('http') ? '_blank' : undefined}
                        rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center group"
                      >
                        <div className="p-3 bg-primary/20 rounded-lg mr-4">
                          <IconComponent className={`h-5 w-5 ${contact.color}`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {contact.label}
                          </p>
                          <p className="text-muted-foreground text-sm">
                            {contact.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Location */}
            <Card className="bg-muted/30 border-dashed border-2 border-muted-foreground/30">
              <CardContent className="p-6">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-muted-foreground mr-3" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-elevated bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Send a Message</CardTitle>
              <p className="text-muted-foreground">
                Drop me a line and I'll get back to you as soon as possible
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="Your first name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Your last name"
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="What would you like to discuss?"
                  className="bg-background/50 border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  className="bg-background/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button 
                className="w-full gradient-tech hover:shadow-tech transition-all duration-300 group"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};