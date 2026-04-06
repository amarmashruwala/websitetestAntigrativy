'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import projectsData from '@/content/projects/projects.json'

const categories = ['All', 'AI Media Workflows', 'Self-Hosted Broadcast', 'Cloud Streaming', 'Audio DSP Tools', 'Open-Source Infrastructure', 'Remote Studio Systems']

export default function ProjectGrid() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory)

  return (
    <section className="py-24 md:py-32 bg-foreground/5 dark:bg-foreground/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display font-semibold text-display-sm mb-4">
            Project Archive
          </h2>
          <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark max-w-2xl">
            A collection of experiments, systems, and tools across media infrastructure, AI, and open-source broadcasting
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-accent text-background dark:text-background-dark'
                  : 'bg-background dark:bg-background-dark-2 hover:bg-foreground/10 dark:hover:bg-foreground/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group p-6 bg-background dark:bg-background-dark-2 border border-foreground/10 dark:border-foreground/10 rounded-xl hover:border-accent/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`inline-block px-2 py-1 text-xs font-mono rounded ${
                      project.status === 'Production'
                        ? 'bg-accent/10 text-accent'
                        : 'bg-foreground/10 text-foreground-muted dark:text-foreground-muted-dark'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-foreground/10 dark:hover:bg-foreground/20 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-foreground-muted dark:text-foreground-muted-dark" />
                    </a>
                  )}
                </div>

                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono bg-foreground/5 dark:bg-foreground/10 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="text-xs text-foreground-muted dark:text-foreground-muted-dark">
                  {project.year}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
