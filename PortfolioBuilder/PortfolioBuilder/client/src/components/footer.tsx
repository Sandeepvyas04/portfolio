import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8 border-t border-border bg-background"
      data-testid="footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className="flex items-center gap-2 text-muted-foreground"
            data-testid="text-footer-credit"
          >
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>by Sandeep Vyas</span>
          </div>

          <p
            className="text-sm text-muted-foreground"
            data-testid="text-footer-copyright"
          >
            {currentYear} All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-github"
            >
              <i className="fab fa-github mr-1" /> GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-footer-linkedin"
            >
              <i className="fab fa-linkedin mr-1" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
