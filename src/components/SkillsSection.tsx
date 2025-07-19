import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Cpu, 
  Settings, 
  Zap, 
  CircuitBoard, 
  Monitor,
  Wrench,
  Microchip
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Embedded C", "Arduino IDE", "GNU Compiler"],
    color: "text-blue-400"
  },
  {
    title: "Microcontrollers",
    icon: Cpu,
    skills: ["8051", "Arduino", "ESP32", "Raspberry Pi Pico", "NodeMCU"],
    color: "text-green-400"
  },
  {
    title: "Tools & Software",
    icon: Settings,
    skills: ["VS Code", "Wokwi Simulator", "OrCAD PCB Design"],
    color: "text-purple-400"
  },
  {
    title: "Embedded Systems",
    icon: CircuitBoard,
    skills: ["RTOS (basics)", "PCB Design", "Hardware Integration"],
    color: "text-cyan-400"
  },
  {
    title: "Electronics",
    icon: Zap,
    skills: ["Digital Electronics", "Basics of VLSI", "Circuit Analysis"],
    color: "text-yellow-400"
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My expertise in embedded systems, programming, and electronics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="card-elevated bg-card/50 backdrop-blur-sm hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-primary/20 rounded-lg mr-4">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="bg-secondary/50 hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Future Skills Section */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-muted/30 border-dashed border-2 border-muted-foreground/30">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Wrench className="h-6 w-6 text-muted-foreground mr-2" />
                <h3 className="text-lg font-semibold text-muted-foreground">Continuous Learning</h3>
              </div>
              <p className="text-muted-foreground">
                Always expanding my skillset - ready to learn new technologies, 
                programming languages, and embedded systems concepts as projects demand.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};