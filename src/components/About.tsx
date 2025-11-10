import { Card } from "./ui/card";
import { Code2, Lightbulb, Rocket } from "lucide-react";
import TextReveal from "./TextReveal";
import AnimatedBeam from "./AnimatedBeam";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and scalable code with best practices"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex challenges into elegant solutions"
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Constantly exploring new technologies and frameworks"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextReveal 
            text="About Me"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A dedicated student pursuing BTech in Computer Science, passionate about creating 
            intuitive and responsive web applications
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className="animated-border p-6 hover:scale-105 transition-transform duration-300 bg-card/80 backdrop-blur-sm"
            >
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <Card className="animated-border p-8 bg-card/80 backdrop-blur-sm">
          <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed">
            As a Computer Science student, I'm on an exciting journey of learning and building. 
            I have a solid foundation in JavaScript, Python, React, MongoDB, Ionic, and Vue. 
            While I consider myself at the basics level, I'm constantly pushing boundaries and 
            working on real-world projects to hone my skills. My recent project, FrndZone, 
            showcases my ability to build complete applications from concept to deployment.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default About;
