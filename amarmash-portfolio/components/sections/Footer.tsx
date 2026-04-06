import { Linkedin, Github, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-foreground/10 dark:border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="font-display font-semibold">AM</span>
            <span className="text-sm text-foreground-muted dark:text-foreground-muted-dark">
              MediaTech Solutions · Sydney, Australia
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/amarmash"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted dark:text-foreground-muted-dark hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            
            <a
              href="https://github.com/amarmashruwala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted dark:text-foreground-muted-dark hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            
            <a
              href="https://youtube.com/@MediaTechTube"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted dark:text-foreground-muted-dark hover:text-accent transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
            
            <a
              href="mailto:amar.mashruwala@gmail.com"
              className="text-foreground-muted dark:text-foreground-muted-dark hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark">
            © 2026 Amar Mashruwala. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
