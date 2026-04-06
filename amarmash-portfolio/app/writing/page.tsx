'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Clock } from 'lucide-react'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'

const essays = [
  {
    slug: 'self-hosted-media-architect',
    title: '6 Surprising Lessons from a Self-Hosted Media Architect',
    date: 'March 15, 2024',
    readTime: '8 min read',
    excerpt: 'In over 15 years of architecting media technology infrastructure, I\'ve watched the industry shift from hardware-centric builds to a heavy reliance on "everything-as-a-service." Here are six hard-won lessons from the front lines of self-hosted media architecture.',
    tags: ['Self-Hosted', 'Digital Sovereignty', 'Media Infrastructure'],
  },
]

export default function WritingPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-32">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="font-display font-semibold text-display-md mb-4">
              Writing & Ideas
            </h1>
            <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark">
              Thoughts on media technology, digital sovereignty, and building resilient systems
            </p>
          </motion.div>

          <div className="space-y-8">
            {essays.map((essay, index) => (
              <motion.article
                key={essay.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/writing/${essay.slug}`} className="block">
                  <article className="p-8 bg-foreground/5 dark:bg-foreground/10 border border-foreground/10 dark:border-foreground/5 rounded-2xl hover:border-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex gap-2">
                        {essay.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs font-mono bg-background dark:bg-background-dark text-foreground-muted dark:text-foreground-muted-dark rounded"
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
                  </article>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
