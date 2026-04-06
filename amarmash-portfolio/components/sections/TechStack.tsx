'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const techStack = {
  cloud: {
    label: 'Cloud Infrastructure',
    color: '#2D5BFF',
    items: ['AWS MediaLive', 'MediaConnect', 'ECS', 'Fargate', 'CloudFormation', 'S3', 'CloudFront', 'EventBridge', 'EC2', 'Lambda'],
  },
  streaming: {
    label: 'Streaming Protocols',
    color: '#00D4AA',
    items: ['SRT', 'RTMP', 'WebRTC', 'HLS', 'LL-HLS', 'DASH', 'CMAF', 'OBS', 'FFmpeg', 'VDO.ninja'],
  },
  ai: {
    label: 'AI & Automation',
    color: '#FF6B35',
    items: ['AWS Bedrock', 'Claude', 'Gemini', 'Ollama', 'n8n', 'ActivePieces', 'Transcribe', 'Polly'],
  },
  edge: {
    label: 'Edge & Self-Hosted',
    color: '#8B5CF6',
    items: ['Docker', 'Orange Pi', 'Tailscale', 'RustDesk', 'Azuracast', 'Owncast', 'Castopod', 'Kubernetes'],
  },
  av: {
    label: 'AV & Broadcast',
    color: '#F59E0B',
    items: ['Dante', 'NDI', 'Crestron', 'Biamp', 'Q-SYS', 'Zoom', 'Teams', 'Webex', 'vMix', 'Ross'],
  },
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display font-semibold text-display-sm mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark max-w-2xl">
            A curated toolkit spanning cloud, streaming, AI, and edge infrastructure
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {Object.entries(techStack).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(activeCategory === key ? null : key)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                activeCategory === key
                  ? 'text-background dark:text-background-dark'
                  : 'bg-background dark:bg-background-dark-2 hover:bg-foreground/10 dark:hover:bg-foreground/20'
              }`}
              style={{
                backgroundColor: activeCategory === key ? category.color : undefined,
              }}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {Object.entries(techStack)
            .filter(([key]) => !activeCategory || activeCategory === key)
            .map(([key, category]) => (
              <motion.div
                key={key}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="p-4 bg-background dark:bg-background-dark-2 border border-foreground/10 dark:border-foreground/10 rounded-xl"
              >
                <h3
                  className="text-sm font-semibold mb-3"
                  style={{ color: category.color }}
                >
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-2 py-1 text-xs font-mono bg-foreground/5 dark:bg-foreground/10 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 bg-foreground/5 dark:bg-foreground/10 rounded-2xl"
        >
          <h3 className="font-display font-semibold text-lg mb-4">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'AWS Elemental Live (Advanced)',
              'Dante Levels 1, 2, 3',
              'NDI Certification',
              'Crestron DMC-D-4K',
              'ITIL v3 Foundation',
              'Prince2 Practitioner',
              'AMX ACE Design Expert',
              'AVIXA Certified Technologist',
            ].map((cert) => (
              <div key={cert} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm text-foreground-muted dark:text-foreground-muted-dark">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
