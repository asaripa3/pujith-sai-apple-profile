
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="container mx-auto text-center">
        <div className="animate-fade-in">
          <h1 
            className="text-5xl md:text-7xl apple-name-glow mb-6"
            data-text="Pujith Sai Eswar Allam"
          >
            Pujith Sai Eswar Allam
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            Innovative Mechanical Engineer Driving Efficiency
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            A passionate Mechanical Engineering graduate specialized in optimizing production workflows, CAD modeling, and industrial safety. I thrive on leveraging advanced tools like ANSYS, SolidWorks, and MATLAB to drive efficiency and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              onClick={() => scrollToSection("projects")}
              size="lg" 
              className="group bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              variant="outline" 
              size="lg"
              className="hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "mailto:pujith@example.com", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 group"
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
