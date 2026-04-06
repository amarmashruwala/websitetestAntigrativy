'use client'

import Link from 'next/link'
import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'framer-motion'
import SignalFlowDiagram from '@/components/diagrams/SignalFlowDiagram'

export default function Hero() {
  return (
    <section id="work" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-light dark:bg-grid-dark opacity-50" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background dark:via-background-dark/50 dark:to-background-dark" />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="font-display font-semibold text-display-md md:text-display-lg lg:text-display-xl leading-tight mb-6">
              Architecting the future of{' '}
              <span className="text-accent">media systems</span>
            </h1>
            
            <p className="text-lg md:text-xl text-foreground-muted dark:text-foreground-muted-dark mb-8 max-w-xl">
              From edge hardware to AI-powered workflows—designing resilient broadcast 
              infrastructure across AV, cloud, and automation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-background dark:text-background-dark font-medium rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-accent/20"
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-foreground/20 dark:border-foreground/10 hover:border-accent dark:hover:border-accent font-medium rounded-lg transition-all duration-200"
              >
                Get In Touch
              </Link>
              
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 text-foreground-muted dark:text-foreground-muted-dark hover:text-accent dark:hover:text-accent font-medium transition-colors"
              >
                <Download className="w-5 h-5" />
                Resume
              </a>
            </div>
          </motion.div>
          
          {/* Right: Signal Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <SignalFlowDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
