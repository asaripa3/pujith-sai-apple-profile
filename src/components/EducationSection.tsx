
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic foundation in mechanical engineering excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Master's degree, Mechanical Engineering</h3>
                  <p className="text-xl text-primary mb-2">Arizona State University</p>
                  <p className="text-muted-foreground mb-2">Aug 2023 - May 2025</p>
                  <p className="text-muted-foreground">Grade: 3.5/4.0</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card">
            <CardContent className="p-0">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-2">Bachelor of Engineering - BE, Mechanical Engineering</h3>
                  <p className="text-xl text-primary mb-2">Sathyabama Institute of Science & Technology, Chennai</p>
                  <p className="text-muted-foreground mb-2">Jul 2019 - Jul 2023</p>
                  <p className="text-muted-foreground">Grade: 8.25</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
