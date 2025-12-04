import { GraduationCap, School, Calendar } from "lucide-react";

const educationItems = [
  {
    id: 1,
    title: "Bachelor in Computer Application (BCA)",
    institution: "PCTE Group of Institutes",
    university: "PTU University",
    period: "July 2023 - Present",
    current: true,
    description:
      "Pursuing BCA with focus on web development, programming, and cybersecurity. Actively working on practical projects to apply theoretical knowledge.",
    icon: GraduationCap,
  },
  {
    id: 2,
    title: "Secondary Education",
    institution: "USPC Jain Public School",
    university: null,
    period: "Completed",
    current: false,
    description:
      "Completed secondary education with strong foundation in mathematics and computer science.",
    icon: School,
  },
];

export function EducationSection() {
  return (
    <section
      id="education"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-education"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-primary font-semibold tracking-wide uppercase text-sm"
            data-testid="text-education-label"
          >
            Education
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mt-3 tracking-tight font-serif"
            data-testid="text-education-heading"
          >
            Academic Journey
          </h2>
          <p
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            data-testid="text-education-description"
          >
            Building a strong foundation through formal education and continuous learning.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-12">
            {educationItems.map((item) => (
              <div
                key={item.id}
                className="relative pl-0 md:pl-20"
                data-testid={`education-item-${item.id}`}
              >
                <div
                  className="hidden md:flex absolute left-0 w-16 h-16 rounded-2xl bg-card border border-card-border items-center justify-center shadow-lg"
                  data-testid={`icon-edu-${item.id}`}
                >
                  <item.icon className="h-7 w-7 text-primary" />
                </div>

                <div
                  className="bg-card rounded-2xl border border-card-border p-6 lg:p-8 shadow-sm"
                  data-testid={`card-edu-${item.id}`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3
                          className="text-xl font-bold"
                          data-testid={`text-edu-title-${item.id}`}
                        >
                          {item.title}
                        </h3>
                        {item.current && (
                          <span
                            className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                            data-testid={`badge-current-${item.id}`}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      <p
                        className="text-muted-foreground"
                        data-testid={`text-edu-institution-${item.id}`}
                      >
                        {item.institution}
                      </p>
                      {item.university && (
                        <p
                          className="text-sm text-muted-foreground"
                          data-testid={`text-edu-university-${item.id}`}
                        >
                          {item.university}
                        </p>
                      )}
                    </div>
                    <div
                      className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full"
                      data-testid={`badge-period-${item.id}`}
                    >
                      <Calendar className="h-4 w-4" />
                      {item.period}
                    </div>
                  </div>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    data-testid={`text-edu-description-${item.id}`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
