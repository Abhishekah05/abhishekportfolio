import { Card } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <Card className="bg-card shadow-card border-border p-8">
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              I'm a motivated Frontend Developer with over a year of experience in creating responsive and 
              user-friendly web applications using React.js. My skill set includes integrating RESTful APIs 
              and managing application state with React Hooks and Redux Toolkit.
            </p>
            
            <p>
              I always strive to deliver clean, maintainable code, putting much attention into scalable 
              solutions that improve the overall user experience. My journey in web development has been 
              driven by a passion for creating intuitive interfaces and solving complex problems with elegant solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-4 bg-secondary rounded-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">1.9+</h3>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">5+</h3>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div className="text-center p-4 bg-secondary rounded-lg">
                <h3 className="text-3xl font-bold text-primary mb-2">15%</h3>
                <p className="text-sm">UI Improvement</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="bg-card shadow-card border-border p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Bachelor of Computer Applications</h4>
                <p className="text-sm text-muted-foreground">Basaveshwar Science College, Bagalkot</p>
                <p className="text-sm text-muted-foreground">2019 - 2021</p>
              </div>
              <div>
                <h4 className="font-semibold">Pre-University Education</h4>
                <p className="text-sm text-muted-foreground">Shri GMK PU College, Badami</p>
                <p className="text-sm text-muted-foreground">2017 - 2018</p>
              </div>
            </div>
          </Card>

          <Card className="bg-card shadow-card border-border p-6">
            <h3 className="text-xl font-bold mb-4 text-primary">Location</h3>
            <p className="text-muted-foreground mb-4">Currently based in Mysore, Karnataka, India</p>
            <h3 className="text-xl font-bold mb-4 text-primary mt-6">Availability</h3>
            <p className="text-muted-foreground">Open to new opportunities and collaborations</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
