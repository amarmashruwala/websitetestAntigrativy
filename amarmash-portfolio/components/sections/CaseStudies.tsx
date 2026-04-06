'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CaseStudy {
  slug: string
  title: string
  summary: string
  tags: string[]
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-interpretation',
    title: 'Global AI Interpretation Pipeline',
    summary: 'Real-time audio translation replacing traditional interpreters with AWS Bedrock and Amazon Polly',
    tags: ['AWS Bedrock', 'Amazon Transcribe', 'Amazon Polly', 'Claude'],
    image: '/images/case-studies/ai-interpretation.jpg',
  },
  {
    slug: 'live-stream-automation',
    title: 'Live Stream Automation Platform',
    summary: 'Docker-containerized automation with Python, FFmpeg, and AWS ECS/Fargate reducing manual intervention by 30%',
    tags: ['Docker', 'Python', 'FFmpeg', 'AWS ECS', 'Fargate'],
    image: '/images/case-studies/live-stream-automation.jpg',
  },
  {
    slug: 'podcast-ecosystems',
    title: 'Autonomous Podcast Ecosystems',
    summary: 'Turn-key self-hosted podcast/radio architecture using Azuracast, Castopod, Owncast, and VDO.ninja',
    tags: ['Azuracast', 'Castopod', 'Owncast', 'Self-Hosted'],
    image: '/images/case-studies/podcast-ecosystems.jpg',
  },
  {
    slug: 'webrtc-app',
    title: 'WebRTC Video Meeting + Streaming App',
    summary: 'Interactive low-latency video app with AI chatbot integrations and audience engagement tooling',
    tags: ['WebRTC', 'VDO.ninja', 'Ollama', 'Google Gemini'],
    image: '/images/case-studies/webrtc-app.jpg',
  },
  {
    slug: 'voice-agents',
    title: 'Voice Agents & AI Automation',
    summary: 'Voice agents that answer calls, transcribe conversations, and trigger automated reporting with n8n workflows',
    tags: ['Voice AI', 'n8n', 'Automation', 'Transcription'],
    image: '/images/case-studies/voice-agents.jpg',
  },
  {
    slug: 'remote-studio',
    title: 'Remote Studio Infrastructure',
    summary: 'Remote-access podcast/video studio with Tailscale, RustDesk, secure access, and globally distributed operation',
    tags: ['Tailscale', 'RustDesk', 'Remote Access', 'Digital Sovereignty'],
    image: '/images/case-studies/remote-studio.jpg',
  },
]

export default function CaseStudies() {
  return (
    <section className="py-24 md:py-32 border-t border-foreground/10 dark:border-foreground/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display font-semibold text-display-sm mb-4">
            Selected Case Studies
          </h2>
          <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark max-w-2xl">
            Flagship projects demonstrating the intersection of media infrastructure, cloud architecture, and intelligent automation
          </p>
        </motion.div>
        
        <div className="space-y-24">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.slug}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:direction-rtl' : ''
              }`}
            >
              {/* Image - Alternating sides */}
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className={`aspect-[16/10] relative rounded-2xl overflow-hidden ${
                  index === 0 ? 'bg-gradient-to-br from-signal/20 to-accent/20 dark:from-signal/10 dark:to-accent/10' :
                  index === 1 ? 'bg-gradient-to-br from-accent/20 to-accent-secondary/20 dark:from-accent/10 dark:to-accent-secondary/10' :
                  index === 2 ? 'bg-gradient-to-br from-purple-500/20 to-pink-500/20 dark:from-purple-500/10 dark:to-pink-500/10' :
                  index === 3 ? 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20 dark:from-blue-500/10 dark:to-cyan-500/10' :
                  index === 4 ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-500/10' :
                  'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 dark:from-emerald-500/10 dark:to-teal-500/10'
                }`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-2 opacity-30 dark:opacity-20">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className={`w-8 h-8 rounded-lg ${
                          index === 0 ? 'bg-signal' :
                          index === 1 ? 'bg-accent' :
                          index === 2 ? 'bg-purple-500' :
                          index === 3 ? 'bg-blue-500' :
                          index === 4 ? 'bg-amber-500' :
                          'bg-emerald-500'
                        }`} />
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl flex items-center justify-center ${
                        index === 0 ? 'bg-signal/20' :
                        index === 1 ? 'bg-accent/20' :
                        index === 2 ? 'bg-purple-500/20' :
                        index === 3 ? 'bg-blue-500/20' :
                        index === 4 ? 'bg-amber-500/20' :
                        'bg-emerald-500/20'
                      }`}>
                        <span className="text-xl font-mono font-semibold opacity-60">{study.tags[0].split(' ')[0]}</span>
                      </div>
                      <p className="text-xs font-medium opacity-40">{study.title.split(' ')[0]} {study.title.split(' ')[1]}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <h3 className="font-display font-semibold text-2xl md:text-3xl mb-4">
                  {study.title}
                </h3>
                
                <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark mb-6">
                  {study.summary}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-mono bg-foreground/5 dark:bg-foreground/10 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/writing/${study.slug}`}
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-hover font-medium component-link"
                >
                  Read Case Study
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
