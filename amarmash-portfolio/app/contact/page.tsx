'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Youtube, MapPin, Phone } from 'lucide-react'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="font-display font-semibold text-display-md mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark max-w-2xl mx-auto">
              Available for consulting, partnerships, and technical strategy conversations. 
              Let's discuss how I can help with your media infrastructure challenges.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="font-display font-semibold text-xl">Contact Information</h2>
              
              <div className="space-y-4">
                <a
                  href="mailto:amar.mashruwala@gmail.com"
                  className="flex items-center gap-4 p-4 bg-foreground/5 dark:bg-foreground/10 rounded-xl hover:bg-foreground/10 dark:hover:bg-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark">Email</p>
                    <p className="font-medium">amar.mashruwala@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+61401533665"
                  className="flex items-center gap-4 p-4 bg-foreground/5 dark:bg-foreground/10 rounded-xl hover:bg-foreground/10 dark:hover:bg-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark">Phone</p>
                    <p className="font-medium">+61 401 533 665</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-foreground/5 dark:bg-foreground/10 rounded-xl">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark">Location</p>
                    <p className="font-medium">Sydney, Australia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="font-display font-semibold text-xl">Connect Online</h2>
              
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/amarmash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-foreground/5 dark:bg-foreground/10 rounded-xl hover:bg-foreground/10 dark:hover:bg-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Linkedin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/amarmash</p>
                  </div>
                </a>

                <a
                  href="https://github.com/amarmashruwala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-foreground/5 dark:bg-foreground/10 rounded-xl hover:bg-foreground/10 dark:hover:bg-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Github className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark">GitHub</p>
                    <p className="font-medium">github.com/amarmashruwala</p>
                  </div>
                </a>

                <a
                  href="https://youtube.com/@MediaTechTube"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-foreground/5 dark:bg-foreground/10 rounded-xl hover:bg-foreground/10 dark:hover:bg-foreground/20 transition-colors"
                >
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Youtube className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark">YouTube</p>
                    <p className="font-medium">@MediaTechTube</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center p-12 bg-foreground/5 dark:bg-foreground/10 rounded-2xl"
          >
            <h3 className="font-display font-semibold text-xl mb-4">
              Ready to build something great?
            </h3>
            <p className="text-foreground-muted dark:text-foreground-muted-dark mb-6">
              Whether you need a complete media infrastructure overhaul or just want to chat about 
              streaming architecture, I'm here to help.
            </p>
            <a
              href="mailto:amar.mashruwala@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-background dark:text-background-dark font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </a>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  )
}
