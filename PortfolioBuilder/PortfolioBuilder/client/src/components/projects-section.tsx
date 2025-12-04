import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, Utensils, Globe } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ScamShield",
    subtitle: "Scam & Phishing Detection Interface",
    description:
      "A Flask-based web application to detect scam and phishing content using VirusTotal API. Features real-time threat analysis for URLs, files, and email content with an interactive user interface.",
    tags: ["Python", "Flask", "JavaScript", "VirusTotal API", "HTML/CSS"],
    icon: Shield,
    gradient: "from-red-500 to-orange-500",
    featured: true,
    date: "June 2025 - July 2025",
    githubUrl: "https://github.com/sandeepvyas",
    hasDemo: false,
  },
  {
    id: 2,
    title: "Recipe Manager",
    subtitle: "Cooking Recipe Web Application",
    description:
      "A Flask-based web app for managing cooking recipes with full CRUD operations. Features a clean, intuitive UI for creating, viewing, updating, and deleting recipes.",
    tags: ["Python", "Flask", "HTML", "CSS", "SQLite"],
    icon: Utensils,
    gradient: "from-green-500 to-emerald-500",
    featured: false,
    date: "2024",
    githubUrl: "https://github.com/sandeepvyas",
    hasDemo: false,
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "Personal Developer Portfolio",
    description:
      "A modern, responsive portfolio website showcasing my projects, skills, and professional journey. Built with React, TypeScript, and Tailwind CSS with smooth animations.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    icon: Globe,
    gradient: "from-blue-500 to-purple-500",
    featured: false,
    date: "2025",
    githubUrl: "https://github.com/sandeepvyas",
    hasDemo: true,
    demoUrl: "/",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-primary font-semibold tracking-wide uppercase text-sm"
            data-testid="text-projects-label"
          >
            My Work
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mt-3 tracking-tight font-serif"
            data-testid="text-projects-heading"
          >
            Featured Projects
          </h2>
          <p
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            data-testid="text-projects-description"
          >
            Showcasing my journey through real-world applications that solve
            meaningful problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className={`group overflow-hidden ${
                project.featured ? "md:col-span-2" : ""
              }`}
              data-testid={`card-project-${project.id}`}
            >
              <CardContent className="p-0">
                <div
                  className={`${
                    project.featured
                      ? "lg:grid lg:grid-cols-2"
                      : "flex flex-col"
                  }`}
                >
                  <div
                    className={`aspect-video lg:aspect-auto bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                    data-testid={`project-image-${project.id}`}
                  >
                    <div className="absolute inset-0 bg-black/20" />
                    <project.icon className="w-20 h-20 text-white/90 relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    {project.featured && (
                      <Badge
                        className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border-white/30 text-white"
                        data-testid="badge-featured"
                      >
                        Featured Project
                      </Badge>
                    )}
                  </div>

                  <div className="p-6 lg:p-8 flex flex-col">
                    <div className="flex-1">
                      <div
                        className="text-xs text-muted-foreground mb-2"
                        data-testid={`text-project-date-${project.id}`}
                      >
                        {project.date}
                      </div>
                      <h3
                        className="text-2xl font-bold mb-1"
                        data-testid={`text-project-title-${project.id}`}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-muted-foreground text-sm mb-4"
                        data-testid={`text-project-subtitle-${project.id}`}
                      >
                        {project.subtitle}
                      </p>
                      <p
                        className="text-muted-foreground leading-relaxed mb-6"
                        data-testid={`text-project-description-${project.id}`}
                      >
                        {project.description}
                      </p>
                      <div
                        className="flex flex-wrap gap-2 mb-6"
                        data-testid={`project-tags-${project.id}`}
                      >
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="text-xs"
                            data-testid={`badge-tag-${project.id}-${tag.toLowerCase().replace(/[\s/]+/g, "-")}`}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.hasDemo && project.demoUrl && (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          data-testid={`button-project-demo-${project.id}`}
                        >
                          <a
                            href={project.demoUrl}
                            target={project.demoUrl.startsWith("/") ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            View Demo
                          </a>
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        asChild
                        data-testid={`button-project-github-${project.id}`}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
