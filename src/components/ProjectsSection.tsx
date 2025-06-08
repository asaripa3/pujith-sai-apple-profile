
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "CFD Analysis of Complex Geometries",
      description: "Advanced computational fluid dynamics analysis for complex mechanical systems, optimizing flow patterns and thermal performance using ANSYS Fluent and COMSOL.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["ANSYS Fluent", "COMSOL", "CFD", "Thermal Analysis"],
      category: "Analysis"
    },
    {
      title: "Design and Development of Tensile Testing Machine",
      description: "Complete design and manufacturing of a custom tensile testing machine for material characterization, incorporating force calibration and automated data collection systems.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      technologies: ["SolidWorks", "Mechanical Design", "Force Calibration", "Testing"],
      category: "Design"
    },
    {
      title: "Thermal Analysis of Additive Manufacturing",
      description: "Comprehensive thermal and structural analysis of additive manufacturing processes using ANSYS, optimizing print parameters for enhanced quality and reduced warpage.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      technologies: ["ANSYS", "Thermal Analysis", "Structural Analysis", "3D Printing"],
      category: "Manufacturing"
    },
    {
      title: "Robotics Integration for Automated Assembly",
      description: "Development of automated assembly systems integrating robotics and control systems for enhanced manufacturing efficiency and precision.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      technologies: ["Arduino", "Automation", "Assembly", "Control Systems"],
      category: "Automation"
    },
    {
      title: "Energy Efficiency Analysis of HVAC Systems",
      description: "Optimization of HVAC systems through comprehensive energy analysis and thermal modeling, achieving significant energy savings in industrial applications.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["COMSOL", "Energy Analysis", "HVAC", "Optimization"],
      category: "Energy"
    },
    {
      title: "Smart Monitoring System for Industrial Machines",
      description: "Development of IoT-based monitoring systems for predictive maintenance and real-time performance optimization of industrial machinery.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["Python", "IoT", "Monitoring", "Predictive Maintenance"],
      category: "Technology"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Innovation Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge projects showcasing advanced engineering solutions and technical innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/20 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
