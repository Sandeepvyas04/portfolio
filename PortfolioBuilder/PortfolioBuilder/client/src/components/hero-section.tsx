import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Eye } from "lucide-react";
import heroBackground from "@assets/generated_images/modern_tech_workspace_hero_background.png";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        data-testid="hero-background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-purple-500/10" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div
            className="opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span
              className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 text-sm font-medium mb-6"
              data-testid="badge-availability"
            >
              <i className="fas fa-code mr-2" />
              Available for opportunities
            </span>
          </div>

          <h1
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-white opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
            data-testid="text-hero-name"
          >
            Sandeep{" "}
            <span className="bg-gradient-to-r from-blue-400 via-primary to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              Vyas
            </span>
          </h1>

          <p
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light tracking-wide opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
            data-testid="text-hero-tagline"
          >
            Web Developer{" "}
            <span className="text-white/50 mx-3">|</span> Cybersecurity Enthusiast{" "}
            <span className="text-white/50 mx-3">|</span> BCA Student
          </p>

          <p
            className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
            data-testid="text-hero-description"
          >
            Building secure, scalable web applications with a passion for clean code
            and innovative solutions. Based in Ludhiana, Punjab.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 pt-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="rounded-full px-8 py-6 text-base font-semibold"
              data-testid="button-view-projects"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToContact}
              className="rounded-full px-8 py-6 text-base font-semibold bg-white/5 backdrop-blur-md border-white/30 text-white"
              data-testid="button-get-in-touch"
            >
              <Download className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={() => {
          const element = document.querySelector("#about");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 animate-bounce-slow"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
}
