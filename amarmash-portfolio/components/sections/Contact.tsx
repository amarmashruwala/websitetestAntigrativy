'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Youtube } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-foreground/10 dark:border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-semibold text-display-md md:text-display-lg mb-6">
              Let's build the future of{' '}
              <span className="text-accent">media systems</span>
            </h2>
            
            <p className="text-lg md:text-xl text-foreground-muted dark:text-foreground-muted-dark mb-8">
              Available for consulting, partnerships, and technical strategy conversations. 
              Let's discuss how I can help with your media infrastructure challenges.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:amar.mashruwala@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-background dark:text-background-dark font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              
              <a
                href="tel:+61401533665"
                className="inline-flex items-center gap-2 px-8 py-4 border border-foreground/20 dark:border-foreground/10 hover:border-accent dark:hover:border-accent font-medium rounded-lg transition-all duration-200"
              >
                +61 401 533 665
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/amarmash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-foreground/5 dark:bg-foreground/10 hover:bg-accent/10 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              <a
                href="https://github.com/amarmashruwala"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-foreground/5 dark:bg-foreground/10 hover:bg-accent/10 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              
              <a
                href="https://youtube.com/@MediaTechTube"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-foreground/5 dark:bg-foreground/10 hover:bg-accent/10 hover:text-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              
              <a
                href="mailto:amar.mashruwala@gmail.com"
                className="p-3 rounded-lg bg-foreground/5 dark:bg-foreground/10 hover:bg-accent/10 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
