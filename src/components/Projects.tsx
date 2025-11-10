import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import CardTilt from "./CardTilt";
import MovingBorder from "./MovingBorder";
import TextReveal from "./TextReveal";

const Projects = () => {
  const projects = [
    {
      title: "FrndZone",
      description: "A social platform connecting friends with modern features and intuitive UI. Built with React and focused on user experience.",
      tech: ["React", "JavaScript", "Modern UI"],
      github: "https://github.com/NE1LN47H/FrndZone",
      gradient: "from-primary to-accent"
    },
    {
      title: "ChainTraderAI",
      description: "AI-powered trading platform leveraging blockchain technology for secure and intelligent trading decisions.",
      tech: ["AI", "Blockchain", "React"],
      github: "https://github.com/NE1LN47H/chaintraderai",
      gradient: "from-accent to-primary"
    },
    {
      title: "Complaint Register Portal",
      description: "Streamlined complaint management system with user-friendly interface for efficient issue tracking and resolution.",
      tech: ["React", "MongoDB", "Node.js"],
      github: "https://github.com/NE1LN47H/complaint-registert-portal",
      gradient: "from-primary via-accent to-primary"
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <TextReveal 
            text="Featured Projects"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <CardTilt key={index}>
              <MovingBorder>
                <Card 
                  className="group bg-card/80 backdrop-blur-sm overflow-hidden border-0 animate-glow-pulse"
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
              </MovingBorder>
            </CardTilt>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/NE1LN47H" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
