import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Keyboard, 
  Cpu, 
  Droplets, 
  CircuitBoard, 
  Gamepad2,
  ExternalLink,
  Github,
  Award
} from "lucide-react";

const projects = [
  {
    title: "Smart Keyboard",
    description: "An innovative multi-functional keyboard with integrated touchpad, speakers, Bluetooth earphones, and graphic pad.",
    technologies: ["Embedded C", "ESP32", "Bluetooth", "Audio Processing"],
    icon: Keyboard,
    status: "Patent in Progress",
    color: "text-blue-400",
    highlight: true
  },
  {
    title: "Custom 8051 Development Board",
    description: "Designed a custom board for learning and prototyping with the 8051 microcontroller, featuring multiple I/O interfaces.",
    technologies: ["8051", "PCB Design", "OrCAD", "Hardware Design"],
    icon: Cpu,
    color: "text-green-400"
  },
  {
    title: "Water Monitoring System",
    description: "Created a microcontroller-based sensor system for water level and quality monitoring with real-time data logging.",
    technologies: ["Arduino", "Sensors", "Data Logging", "IoT"],
    icon: Droplets,
    color: "text-cyan-400"
  },
  {
    title: "PCB Design Projects",
    description: "Designed multiple PCBs using OrCAD for various embedded projects, focusing on signal integrity and component placement.",
    technologies: ["OrCAD", "PCB Layout", "Signal Integrity", "Component Selection"],
    icon: CircuitBoard,
    color: "text-purple-400"
  },
  {
    title: "Rock-Paper-Scissors Game",
    description: "Mini interactive game using LEDs and push buttons on Arduino for real-time multiplayer gaming experience.",
    technologies: ["Arduino", "LED Control", "Button Interface", "Game Logic"],
    icon: Gamepad2,
    color: "text-yellow-400"
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my hands-on experience in embedded systems and firmware development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={project.title}
                className={`card-elevated bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300 ${
                  project.highlight ? 'ring-2 ring-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <IconComponent className={`h-6 w-6 ${project.color}`} />
                    </div>
                    {project.status && (
                      <Badge variant="secondary" className="bg-primary/20 text-primary">
                        <Award className="h-3 w-3 mr-1" />
                        {project.status}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-primary/80"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="hover:bg-primary/10 hover:text-primary"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work or collaborate on embedded systems projects?
          </p>
          <Button 
            size="lg"
            className="gradient-tech hover:shadow-tech transition-all duration-300"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};