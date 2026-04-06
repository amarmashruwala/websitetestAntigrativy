'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'

const essays = [
  {
    slug: 'self-hosted-media-architect',
    title: '6 Surprising Lessons from a Self-Hosted Media Architect',
    date: 'March 15, 2024',
    readTime: '8 min read',
    excerpt: 'In over 15 years of architecting media technology infrastructure, I\'ve watched the industry shift from hardware-centric builds to a heavy reliance on "everything-as-a-service." Here are six hard-won lessons from the front lines.',
    tags: ['Self-Hosted', 'Digital Sovereignty', 'Media Infrastructure'],
  },
]

export default function Writing() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <h2 className="font-display font-semibold text-display-sm mb-4">
              Writing & Ideas
            </h2>
            <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark max-w-2xl">
              Thoughts on media technology, digital sovereignty, and building resilient systems
            </p>
          </div>
          
          <Link
            href="/writing"
            className="hidden md:inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium component-link"
          >
            View All
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="space-y-8">
          {essays.map((essay, index) => (
            <motion.article
              key={essay.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/writing/${essay.slug}`} className="block">
                <article className="p-8 bg-background dark:bg-background-dark-2 border border-foreground/10 dark:border-foreground/10 rounded-2xl hover:border-accent/50 transition-all duration-300">
                  <div className="flex items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex gap-2">
                          {essay.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 text-xs font-mono bg-foreground/5 dark:bg-foreground/10 rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <span className="flex items-center gap-1 text-xs text-foreground-muted dark:text-foreground-muted-dark">
                          <Clock className="w-3 h-3" />
                          {essay.readTime}
                        </span>
                      </div>

                      <h3 className="font-display font-semibold text-xl md:text-2xl mb-3 group-hover:text-accent transition-colors">
                        {essay.title}
                      </h3>

                      <p className="text-foreground-muted dark:text-foreground-muted-dark mb-4">
                        {essay.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm text-foreground-muted dark:text-foreground-muted-dark">
                          {essay.date}
                        </span>
                        <span className="inline-flex items-center gap-2 text-accent font-medium">
                          Read Essay
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            </motion.article>
          ))}
        </div>

        <Link
          href="/writing"
          className="md:hidden mt-8 inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium"
        >
          View All Essays
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
