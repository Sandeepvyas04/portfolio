import { Card, CardContent } from "@/components/ui/card";
import { Award, Shield, Code, Link } from "lucide-react";

const certifications = [
  {
    id: 1,
    title: "Professional in Python Programming",
    issuer: "Certified Training Program",
    date: "May 2025",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    description: "Comprehensive Python programming certification covering advanced concepts and best practices.",
  },
  {
    id: 2,
    title: "Cyber Security Training",
    issuer: "6-Week Achievement Certificate",
    date: "2024",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
    description: "Intensive training in cybersecurity fundamentals, threat detection, and security protocols.",
  },
  {
    id: 3,
    title: "Hacking Workshop",
    issuer: "Participation Certificate",
    date: "2024",
    icon: Award,
    color: "from-purple-500 to-pink-500",
    description: "Hands-on workshop covering ethical hacking techniques and penetration testing basics.",
  },
  {
    id: 4,
    title: "Blockchain Development",
    issuer: "Participation Certificate",
    date: "2024",
    icon: Link,
    color: "from-orange-500 to-red-500",
    description: "Introduction to blockchain technology, smart contracts, and decentralized applications.",
  },
];

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-24 lg:py-32 bg-muted/30"
      data-testid="section-certifications"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span
            className="text-primary font-semibold tracking-wide uppercase text-sm"
            data-testid="text-certifications-label"
          >
            Achievements
          </span>
          <h2
            className="text-4xl lg:text-5xl font-bold mt-3 tracking-tight font-serif"
            data-testid="text-certifications-heading"
          >
            Certifications & Training
          </h2>
          <p
            className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto"
            data-testid="text-certifications-description"
          >
            Continuous learning through professional certifications and workshops in
            programming and cybersecurity.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="group overflow-visible"
              data-testid={`card-cert-${cert.id}`}
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}
                  data-testid={`icon-cert-${cert.id}`}
                >
                  <cert.icon className="h-8 w-8 text-white" />
                </div>
                <h3
                  className="font-bold text-base mb-1 line-clamp-2"
                  data-testid={`text-cert-title-${cert.id}`}
                >
                  {cert.title}
                </h3>
                <p
                  className="text-muted-foreground text-sm mb-2"
                  data-testid={`text-cert-issuer-${cert.id}`}
                >
                  {cert.issuer}
                </p>
                <p
                  className="text-xs text-muted-foreground"
                  data-testid={`text-cert-date-${cert.id}`}
                >
                  {cert.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
