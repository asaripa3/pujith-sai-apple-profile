
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

const CertificationsSection = () => {
  const certifications = [
    {
      title: "Professional Engineer (PE) License",
      issuer: "National Society of Professional Engineers",
      date: "2023",
      category: "Professional"
    },
    {
      title: "Certified SolidWorks Professional (CSWP)",
      issuer: "Dassault Systèmes",
      date: "2023",
      category: "Technical"
    },
    {
      title: "Lean Six Sigma Green Belt",
      issuer: "ASQ - American Society for Quality",
      date: "2022",
      category: "Process"
    },
    {
      title: "Project Management Professional (PMP)",
      issuer: "Project Management Institute",
      date: "2022",
      category: "Management"
    },
    {
      title: "ANSYS Mechanical Certification",
      issuer: "ANSYS Inc.",
      date: "2021",
      category: "Technical"
    },
    {
      title: "ISO 9001:2015 Quality Management",
      issuer: "International Organization for Standardization",
      date: "2021",
      category: "Quality"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Professional: "bg-blue-500",
      Technical: "bg-green-500",
      Process: "bg-purple-500",
      Management: "bg-orange-500",
      Quality: "bg-red-500"
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Continuous learning and professional development in engineering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-card to-muted/20"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${getCategoryColor(cert.category)} flex items-center justify-center`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
                
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-3">
                  {cert.issuer}
                </p>
                
                <Badge 
                  variant="secondary" 
                  className="text-xs"
                >
                  {cert.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
