import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Frontend Developer",
    company: "YesMinds Global Solution Pvt Ltd",
    location: "Mysore",
    period: "March 2024 - Present",
    achievements: [
      "Developed responsive web applications using React.js, modern hooks, and JSX to enhance user experience",
      "Integrated RESTful APIs to fetch and display dynamic data, collaborating closely with backend teams",
      "Built modular, reusable components using React Hooks, Context API, and Redux Toolkit for state management",
      "Improved UI consistency by 15% by implementing Material-UI and custom CSS, reducing styling discrepancies",
      "Optimized application state management to improve performance and maintainability",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-card shadow-card border-border p-8 hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">{exp.title}</h3>
                  <p className="text-lg font-semibold text-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.location}</p>
                </div>
                <Badge className="bg-secondary text-foreground mt-2 md:mt-0">
                  {exp.period}
                </Badge>
              </div>
              
              <ul className="space-y-3 mt-6">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">▹</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
