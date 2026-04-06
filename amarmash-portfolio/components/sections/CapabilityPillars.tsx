'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Server, Cloud, Brain, Zap } from 'lucide-react'

interface PillarProps {
  icon: React.ReactNode
  title: string
  description: string
  technologies: string[]
  delay?: number
}

function Pillar({ icon, title, description, technologies, delay = 0 }: PillarProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative p-8 bg-background dark:bg-background-dark-2 border border-foreground/10 dark:border-foreground/10 rounded-2xl hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
    >
      {/* Icon */}
      <div className="w-12 h-12 mb-6 rounded-lg bg-accent/10 dark:bg-accent/20 flex items-center justify-center text-accent">
        {icon}
      </div>
      
      {/* Title */}
      <h3 className="font-display font-semibold text-xl mb-3">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-foreground-muted dark:text-foreground-muted-dark mb-6">
        {description}
      </p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono bg-foreground/5 dark:bg-foreground/10 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-accent/0 group-hover:border-accent/30 rounded-tr-2xl transition-all duration-300" />
    </motion.div>
  )
}

export default function CapabilityPillars() {
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
            Capability Domains
          </h2>
          <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark max-w-2xl">
            Four interconnected pillars that define my approach to media systems architecture
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Pillar
            icon={<Server className="w-6 h-6" />}
            title="Physical Edge + Remote Operations"
            description="On-premise AV infrastructure, remote studio access, and distributed operations with zero-trust networking."
            technologies={['Tailscale', 'RustDesk', 'NDI', 'Dante', 'OBS', 'vMix']}
            delay={0.1}
          />
          
          <Pillar
            icon={<Cloud className="w-6 h-6" />}
            title="Cloud Infrastructure + Live Streaming"
            description="AWS-native media services, multi-region streaming, and scalable cloud architectures for global delivery."
            technologies={['AWS MediaLive', 'ECS', 'CloudFront', 'SRT', 'WebRTC', 'FFmpeg']}
            delay={0.2}
          />
          
          <Pillar
            icon={<Brain className="w-6 h-6" />}
            title="Agentic Workflows + Intelligence"
            description="AI-powered automation, voice agents, and intelligent workflows that reduce manual intervention."
            technologies={['AWS Bedrock', 'Claude', 'n8n', 'Ollama', 'Voice AI', 'Automation']}
            delay={0.3}
          />
          
          <Pillar
            icon={<Zap className="w-6 h-6" />}
            title="Real-Time Delivery + Playback"
            description="Low-latency streaming, audience engagement, and interactive video applications at scale."
            technologies={['LL-HLS', 'DASH', 'CMAF', 'VDO.ninja', 'CDN', 'Adaptive Bitrate']}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}
