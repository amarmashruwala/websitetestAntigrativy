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
                <div className="aspect-[16/10] relative bg-foreground/5 dark:bg-foreground/10 rounded-2xl overflow-hidden">
                  {/* Placeholder for case study image */}
                  <div className="absolute inset-0 flex items-center justify-center text-foreground-muted dark:text-foreground-muted-dark">
                    <div className="text-center p-8">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-xl bg-foreground/10 dark:bg-foreground/20 flex items-center justify-center">
                        <span className="text-2xl font-mono">{study.tags[0]}</span>
                      </div>
                      <p className="text-sm">Project Diagram Placeholder</p>
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
