import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    icon: "fa-layer-group",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML", level: 5 },
      { name: "CSS", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "Responsive Design", level: 4 },
    ],
  },
  {
    title: "Backend",
    icon: "fa-server",
    color: "from-purple-500 to-pink-400",
    skills: [
      { name: "Python", level: 5 },
      { name: "Flask", level: 4 },
      { name: "C/C++", level: 3 },
      { name: "REST APIs", level: 4 },
    ],
  },
  {
    title: "Tools & Others",
    icon: "fa-tools",
    color: "from-amber-500 to-orange-400",
    skills: [
      { name: "VS Code", level: 5 },
      { name: "PyCharm", level: 4 },
      { name: "Linux", level: 4 },
      { name: "Git", level: 3 },
      { name: "Cisco Packet Tracer", level: 3 },
      { name: "CorelDraw", level: 3 },
    ],
  },
];

function SkillLevel({ level, skillName }: { level: number; skillName: string }) {
  return (
    <div
      className="flex gap-1"
      data-testid={`skill-level-${skillName.toLowerCase().replace(/[\s/+]+/g, "-")}`}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full transition-colors ${
            i <= level ? "bg-primary" : "bg-muted"
          }`}
        />
      ))}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-muted/30"
      data-testid="section-skills"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-primary font-semibold tracking-wide uppercase text-sm"
            data-testid="text-skills-label"
          >
            My Skills
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mt-3 tracking-tight font-serif"
            data-testid="text-skills-heading"
          >
            Technical Expertise
          </h2>
          <p
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            data-testid="text-skills-description"
          >
            A comprehensive toolkit for building modern web applications with a focus
            on security and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card
              key={category.title}
              className="group overflow-visible"
              data-testid={`card-skills-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}
                    data-testid={`icon-${category.title.toLowerCase()}`}
                  >
                    <i className={`fas ${category.icon} text-white text-lg`} />
                  </div>
                  <h3
                    className="text-xl font-bold"
                    data-testid={`text-category-${category.title.toLowerCase()}`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-4"
                      data-testid={`skill-item-${skill.name.toLowerCase().replace(/[\s/+]+/g, "-")}`}
                    >
                      <Badge
                        variant="secondary"
                        className="font-medium"
                        data-testid={`badge-skill-${skill.name.toLowerCase().replace(/[\s/+]+/g, "-")}`}
                      >
                        {skill.name}
                      </Badge>
                      <SkillLevel level={skill.level} skillName={skill.name} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p
            className="text-muted-foreground mb-4"
            data-testid="text-additional-skills-label"
          >
            Additional Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["VirusTotal API", "Cybersecurity", "UI/UX Design", "Problem Solving", "Team Collaboration"].map(
              (skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-2"
                  data-testid={`badge-additional-${skill.toLowerCase().replace(/[\s/]+/g, "-")}`}
                >
                  {skill}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
