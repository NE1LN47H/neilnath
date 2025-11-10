import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Github, Linkedin, MessageSquare } from "lucide-react";
import TextReveal from "./TextReveal";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "neilnath@example.com",
      link: "mailto:neilnath@example.com"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "@NE1LN47H",
      link: "https://github.com/NE1LN47H"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://linkedin.com"
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <TextReveal 
            text="Get In Touch"
            className="text-4xl md:text-5xl font-bold mb-4"
          />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="animated-border p-6 text-center hover:scale-105 transition-transform duration-300 bg-card/80 backdrop-blur-sm"
              >
                <method.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{method.title}</h3>
                <a 
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {method.value}
                </a>
              </Card>
            ))}
          </div>

          <Card className="animated-border p-8 bg-gradient-to-br from-card/80 to-secondary/30 backdrop-blur-sm text-center">
            <MessageSquare className="h-16 w-16 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you have a project in mind or just want to chat about tech, 
              feel free to reach out. I'm always excited to collaborate on interesting projects!
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90"
              asChild
            >
              <a href="mailto:neilnath@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
