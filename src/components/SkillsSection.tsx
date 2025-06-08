
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Design & Modeling",
      skills: ["AutoCAD", "SolidWorks", "Fusion360", "Tinkercad", "Mechanical Design", "GD&T"],
      color: "bg-blue-500"
    },
    {
      title: "Analysis Tools",
      skills: ["ANSYS Fluent", "ANSYS Structural", "ANSYS Thermal", "Ls Dyna", "COMSOL Multiphysics", "FEA", "CFD"],
      color: "bg-green-500"
    },
    {
      title: "Programming & Data",
      skills: ["Python", "MATLAB", "Arduino", "Microsoft Excel", "Microsoft PowerPoint", "Data Handling"],
      color: "bg-purple-500"
    },
    {
      title: "Manufacturing & Testing",
      skills: ["Lean Manufacturing", "SPC", "Tensile Testing", "Fatigue Testing", "Root Cause Analysis", "Assembly"],
      color: "bg-orange-500"
    },
    {
      title: "Technical Skills",
      skills: ["Semiconductor Manufacturing", "Closed-Loop Control", "Force Calibration", "Testing & Validation"],
      color: "bg-red-500"
    },
    {
      title: "Soft Skills",
      skills: ["Project Management", "Technical Leadership", "Problem Solving", "Team Collaboration", "Task Delegation"],
      color: "bg-cyan-500"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive toolkit for advanced mechanical engineering and manufacturing excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-background"
            >
              <CardContent className="p-0">
                <div className={`w-12 h-12 rounded-xl ${category.color} mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{category.title[0]}</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="mr-2 mb-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
