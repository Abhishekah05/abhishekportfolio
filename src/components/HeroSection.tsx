import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10 animate-fade-in">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
            Abhishek Hiremath
          </h1>
          <h2 className="text-2xl md:text-4xl text-foreground mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Frontend Developer
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Crafting responsive and user-friendly web applications with React.js and Material UI. 
            With over 1.9 years of experience, I specialize in building scalable solutions that enhance user experience.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              className="border-border hover:bg-secondary"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="/Abhishek's_Frontend_Resume.pdf" download="Abhishek_Resume.pdf">
                <Download className="h-4 w-4 mr-2" />
                Download Resume
              </a>
            </Button>
          </div>

          <div className="flex gap-4 animate-slide-up" style={{ animationDelay: "0.8s" }}>
            <a href="https://github.com/Abhishekah05" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/abhishek-hiremath-8a8661212" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:abhishekah510@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
