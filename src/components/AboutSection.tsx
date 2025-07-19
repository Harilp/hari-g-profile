import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about embedded systems and dedicated to continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm <span className="text-primary font-semibold">Hari G</span>, a third-year Electronics and 
              Communication Engineering student at SRM IST, Kattankulathur, with a strong interest in 
              embedded systems — especially microcontrollers and RTOS.
            </p>
            
            <p className="text-lg leading-relaxed text-foreground/90">
              I aim to grow into a firmware developer, combining hardware and software to build useful 
              embedded solutions. I'm open to learning, collaborating, and contributing to projects 
              in the field of electronics.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90">
              My journey involves hands-on experience with various microcontrollers, PCB design, 
              and developing innovative solutions that bridge the gap between hardware and software.
            </p>
          </div>

          {/* Education Card */}
          <div>
            <Card className="card-elevated bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/20 rounded-lg mr-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Education</h3>
                    <p className="text-muted-foreground">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-2 border-primary/30 pl-6 pb-6">
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      B.Tech in Electronics and Communication Engineering
                    </h4>
                    
                    <div className="space-y-2 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>SRM Institute of Science and Technology, Kattankulathur</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2023 - 2027</span>
                      </div>
                    </div>

                    <p className="text-foreground/80 mt-3">
                      Currently in third year, focusing on embedded systems, 
                      microprocessors, and digital electronics with hands-on project experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};