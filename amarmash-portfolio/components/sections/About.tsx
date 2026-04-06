'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" ref={ref} className="py-24 md:py-32 border-t border-foreground/10 dark:border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative bg-foreground/5 dark:bg-foreground/10 rounded-2xl overflow-hidden">
              {/* Placeholder for headshot */}
              <div className="absolute inset-0 flex items-center justify-center text-foreground-muted dark:text-foreground-muted-dark">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-foreground/10 dark:bg-foreground/20 flex items-center justify-center">
                    <span className="text-4xl font-display font-semibold">AM</span>
                  </div>
                  <p className="text-sm">Amar Mashruwala</p>
                  <p className="text-xs mt-1">Headshot Placeholder</p>
                </div>
              </div>
              
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent dark:from-background-dark/80" />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-r-2 border-b-2 border-accent/30" />
          </motion.div>
          
          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-display font-semibold text-display-sm mb-6">
              Building at the intersection of technology and media
            </h2>
            
            <div className="space-y-4 text-lg text-foreground-muted dark:text-foreground-muted-dark">
              <p>
                I'm a Technology Solutions Architect and Operations Manager with over 15 years 
                of experience designing next-generation media infrastructure. Based in Sydney, 
                I build systems that serve global audiences.
              </p>
              <p>
                My expertise spans the full stack of modern media: physical AV hardware, 
                broadcast engineering, cloud-native services, and intelligent automation. 
                Through MediaTech Solutions, I help organizations design lean, scalable 
                systems that reduce costs while improving reliability.
              </p>
              <p>
                I'm passionate about digital sovereignty—using open-source tools and 
                self-hosted infrastructure to maintain control over your technology stack 
                while delivering enterprise-grade performance.
              </p>
            </div>
            
            <blockquote className="mt-8 pl-6 border-l-2 border-accent italic text-foreground-muted dark:text-foreground-muted-dark">
              "Digital sovereignty is about more than just cost—it's about the freedom to 
              own your tools and protect your data."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
