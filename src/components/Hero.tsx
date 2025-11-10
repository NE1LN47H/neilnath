import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import AnimatedGrid from "./AnimatedGrid";
import Spotlight from "./Spotlight";
import Sparkles from "./Sparkles";
import AuroraBackground from "./AuroraBackground";
import TypewriterEffect from "./TypewriterEffect";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Sparkles />
      <AuroraBackground />
      <AnimatedGrid />
      <Spotlight />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Neilnath</span>
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground mb-4 min-h-[2em]">
            <TypewriterEffect 
              words={["Frontend Developer", "React Enthusiast", "UI/UX Designer", "Tech Explorer"]}
              className="gradient-text font-semibold"
            />
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            BTech Computer Science Student crafting beautiful web experiences with modern technologies
          </p>
        </div>
        
        <div className="flex gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 glow-primary transition-all hover:scale-105"
            onClick={scrollToProjects}
          >
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 transition-all hover:scale-105"
            asChild
          >
            <a href="https://github.com/NE1LN47H" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a 
            href="https://github.com/NE1LN47H" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="mailto:neilnath@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
