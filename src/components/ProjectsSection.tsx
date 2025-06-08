
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated Assembly Line Optimization",
      description: "Designed and implemented an automated assembly line system that increased production efficiency by 35% while reducing manufacturing costs.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["SolidWorks", "ANSYS", "PLCs", "Lean Manufacturing"],
      category: "Manufacturing"
    },
    {
      title: "Sustainable Energy Storage System",
      description: "Developed a novel mechanical energy storage system for renewable energy applications with improved efficiency and reduced environmental impact.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      technologies: ["MATLAB", "Finite Element Analysis", "Thermodynamics", "Materials Science"],
      category: "Research"
    },
    {
      title: "Smart Manufacturing IoT Integration",
      description: "Integrated IoT sensors and data analytics into manufacturing processes, enabling predictive maintenance and real-time optimization.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["Python", "IoT", "Data Analytics", "Machine Learning"],
      category: "Technology"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions that showcase engineering excellence and technical expertise
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
