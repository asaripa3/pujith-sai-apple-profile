
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Mechanical Design Engineer",
      company: "Innovation Tech Solutions",
      period: "2023 - Present",
      description: "Leading design optimization projects and implementing sustainable manufacturing processes. Collaborated with cross-functional teams to deliver innovative engineering solutions.",
      achievements: [
        "Reduced production costs by 25% through process optimization",
        "Led team of 5 engineers on major product development project",
        "Implemented new quality control procedures"
      ]
    },
    {
      title: "Research Assistant",
      company: "University Engineering Department",
      period: "2022 - 2023",
      description: "Conducted research on advanced materials and manufacturing techniques. Published findings in peer-reviewed journals and presented at international conferences.",
      achievements: [
        "Published 3 research papers in top-tier journals",
        "Developed novel testing methodologies",
        "Mentored undergraduate students"
      ]
    },
    {
      title: "Engineering Intern",
      company: "Manufacturing Excellence Corp",
      period: "2021 - 2022",
      description: "Supported senior engineers in design projects and gained hands-on experience with industrial manufacturing processes and quality assurance.",
      achievements: [
        "Completed 5+ design projects successfully",
        "Improved testing efficiency by 20%",
        "Received outstanding intern performance rating"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through diverse engineering challenges and leadership opportunities
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <div key={experience.title} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 bottom-0 w-px bg-border" />
              )}
              
              <div className="relative flex items-start mb-12">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mr-8 shadow-lg">
                  {index + 1}
                </div>
                
                <Card className="flex-1 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-background">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{experience.title}</h3>
                        <p className="text-lg text-primary font-medium">{experience.company}</p>
                      </div>
                      <Badge variant="outline" className="mt-2 md:mt-0">
                        {experience.period}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
