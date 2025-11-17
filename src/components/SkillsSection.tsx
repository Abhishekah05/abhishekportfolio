import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React.js", "JSX", "React Hooks", "Context API", "Redux Toolkit", "Component-Based Architecture", "Responsive Design", "Performance Optimization"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML5", "CSS3", "JavaScript", "Material UI", "Cross-Browser Compatibility"],
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Visual Studio Code", "Postman", "Chrome DevTools", "Odoo"],
  },
  {
    title: "Core Competencies",
    skills: ["RESTful API Integration", "State Management", "UI/UX Implementation", "Code Optimization", "Debugging"],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="bg-card shadow-card border-border p-6 hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary" 
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
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
}
