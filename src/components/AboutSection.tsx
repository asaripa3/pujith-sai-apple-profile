
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving innovation through mechanical engineering excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Engineering Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  My expertise lies in product design, rapid prototyping, and solving complex mechanical 
                  challenges, consistently enhancing performance in dynamic manufacturing environments. 
                  I specialize in optimizing production workflows, CAD modeling, and industrial safety 
                  protocols to deliver exceptional results.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-border bg-card">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Advanced Technical Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I leverage cutting-edge tools including ANSYS (Fluent, Structural, Thermal), 
                  SolidWorks, MATLAB, and COMSOL to drive efficiency and innovation. My approach 
                  combines analytical thinking with creative problem-solving, specializing in 
                  FEA, CFD, and Lean Manufacturing principles.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-muted/20 to-muted/10 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=600&fit=crop"
                alt="Engineering workspace"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
