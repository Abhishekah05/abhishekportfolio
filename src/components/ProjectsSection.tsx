import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "TowDepo",
    type: "Office Project",
    description: "Feature-rich e-commerce platform with product categories, wishlist, and account management. Implemented guest-to-authorized user shopping flow, leading to an 18% increase in conversions.",
    tech: ["React.js", "Material-UI", "Redux", "Razorpay"],
    highlights: [
      "Location-based inventory system",
      "Admin interface for store management",
      "Integrated payment gateway",
    ],
  },
  {
    title: "Traction",
    type: "Office Project",
    description: "Custom web application for towing service providers in USA. Streamlined towing operations with notification modules, feedback forms, and SMS capabilities.",
    tech: ["React.js", "Material-UI", "RESTful APIs"],
    highlights: [
      "50% increase in response collection efficiency",
      "40% reduction in communication time",
      "Role-based user management system",
    ],
  },
  {
    title: "Loan Calculator",
    type: "Personal Project",
    description: "Modern loan calculator with EMI calculation, amortization schedule, and live currency conversion using ExchangeRate API.",
    tech: ["React.js", "Material-UI", "Context API", "ExchangeRate API"],
    links: {
      live: "https://loan-calculator-five-gamma.vercel.app/",
      github: "https://github.com/Abhishekah05/Loan-Calculator.git",
    },
    highlights: [
      "Real-time currency conversion",
      "Light/Dark mode toggle",
      "Responsive design",
    ],
  },
  {
    title: "SpaceX Dashboard",
    type: "Personal Project",
    description: "Single-page application displaying SpaceX launch data with filtering capabilities and detailed launch information modals.",
    tech: ["React.js", "Material-UI", "SpaceX API", "Axios"],
    links: {
      live: "https://space-x-dashboard-gold.vercel.app/",
      github: "https://github.com/Abhishekah05",
    },
    highlights: [
      "Filter by launch status",
      "Detailed launch modals",
      "Mobile-responsive design",
    ],
  },
  {
    title: "Towing Forward AI",
    type: "Personal Project",
    description: "Responsive landing page showcasing AI-powered missed call conversion for towing businesses with interactive voice demo.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    links: {
      live: "https://towingforward-com.vercel.app/",
    },
    highlights: [
      "Clean, modern design",
      "Interactive audio demo",
      "Performance metrics display",
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-card shadow-card border-border p-6 flex flex-col hover:shadow-glow transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <Badge variant="secondary" className="mb-3">
                  {project.type}
                </Badge>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-2 text-primary">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {project.links && (
                <div className="flex gap-2 mt-auto">
                  {project.links.live && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild className="flex-1">
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
