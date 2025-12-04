import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Briefcase, Award } from "lucide-react";
import avatarImage from "@assets/img_1764843736644.jpeg";

export function AboutSection() {
  const stats = [
    { icon: Briefcase, label: "Projects Built", value: "5+" },
    { icon: Award, label: "Certifications", value: "4+" },
    { icon: MapPin, label: "Location", value: "Ludhiana" },
  ];

  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-background"
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative" data-testid="about-avatar-container">
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl transform rotate-3" />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-purple-500/10 rounded-2xl transform -rotate-3" />
              <div className="relative bg-card rounded-2xl overflow-hidden border border-card-border shadow-xl h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <div
                    className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl"
                    data-testid="avatar-image"
                  >
                    <img
                      src={avatarImage}
                      alt="Sandeep Vyas"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3
                    className="text-2xl font-bold mb-2"
                    data-testid="text-avatar-name"
                  >
                    Sandeep Vyas
                  </h3>
                  <p
                    className="text-muted-foreground"
                    data-testid="text-avatar-title"
                  >
                    Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <span
                className="text-primary font-semibold tracking-wide uppercase text-sm"
                data-testid="text-about-label"
              >
                About Me
              </span>
              <h2
                className="text-4xl lg:text-5xl font-bold mt-3 tracking-tight font-serif"
                data-testid="text-about-heading"
              >
                Crafting Digital Experiences
              </h2>
            </div>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p data-testid="text-about-intro">
                I'm an enthusiastic and detail-oriented BCA 3rd-year student with a
                strong foundation in web development and cybersecurity. My journey in
                tech started with curiosity about how websites work, and has evolved
                into a passion for building secure, user-friendly applications.
              </p>
              <p data-testid="text-about-skills">
                With practical experience in HTML, CSS, JavaScript, Python, and Flask,
                I've built full-stack applications that solve real-world problems. My
                project ScamShield demonstrates my commitment to combining web
                development with cybersecurity principles.
              </p>
              <p data-testid="text-about-goals">
                Currently seeking opportunities to apply and expand my skills in a
                collaborative, growth-oriented environment where I can contribute to
                meaningful projects while continuing to learn and grow.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat) => (
                <Card
                  key={stat.label}
                  className="text-center p-4"
                  data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <CardContent className="p-0">
                    <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                    <div
                      className="text-2xl font-bold"
                      data-testid={`text-stat-value-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs text-muted-foreground mt-1"
                      data-testid={`text-stat-label-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
