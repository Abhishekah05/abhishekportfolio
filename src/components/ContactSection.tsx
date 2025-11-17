import { Card } from "@/components/ui/card";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
        
        <Card className="bg-card shadow-card border-border p-8">
          <div className="text-center mb-8">
            <p className="text-lg text-muted-foreground">
              I'm currently looking for new opportunities and collaborations. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <Mail className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:abhishek@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                  abhishek@example.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-secondary rounded-lg">
              <MapPin className="h-6 w-6 text-primary mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-muted-foreground">Mysore, Karnataka, India</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              <a href="mailto:abhishek@example.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>
            
            <Button variant="outline" asChild>
              <a href="https://github.com/Abhishekah05" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" />
                GitHub
              </a>
            </Button>

            <Button variant="outline" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
