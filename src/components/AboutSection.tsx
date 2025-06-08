
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Driven by curiosity and innovation in mechanical engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Engineering Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  As a Masters graduate in Mechanical Engineering, I bring a unique blend of 
                  theoretical knowledge and practical problem-solving skills. My passion lies 
                  in creating innovative solutions that bridge the gap between complex engineering 
                  challenges and real-world applications.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-all duration-300 border-0 bg-gradient-to-br from-card to-muted/20">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-4">Innovation Focus</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in design optimization, manufacturing processes, and sustainable 
                  engineering practices. My approach combines analytical thinking with creative 
                  problem-solving to deliver efficient and elegant engineering solutions.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-muted/30 flex items-center justify-center">
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
