import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import TextReveal from "./TextReveal";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Vue", "Ionic", "HTML/CSS", "Tailwind CSS"]
    },
    {
      category: "Languages",
      items: ["JavaScript", "Python", "TypeScript"]
    },
    {
      category: "Backend & Database",
      items: ["MongoDB", "Node.js", "REST APIs"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Responsive Design"]
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextReveal 
            text="Tech Stack"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <Card 
              key={index}
              className="animated-border p-6 bg-card/50 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold mb-4 text-primary">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <Badge 
                    key={idx}
                    variant="secondary"
                    className="bg-secondary/50 hover:bg-secondary/70 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
