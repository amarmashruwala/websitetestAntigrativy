'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    company: 'Amazon',
    role: 'Technical Program & Operations Manager',
    period: 'July 2021 – January 2026',
    location: 'Sydney, Australia',
    description: 'Led APAC cloud-based media and broadcast infrastructure supporting distributed operations across five countries. Owned end-to-end delivery of large-scale, mission-critical programs with 5,000+ annual broadcasts.',
    achievements: [
      'Achieved 99%+ availability across streaming platforms',
      'Reduced manual intervention by 30% through automation',
      'Delivered 50% infrastructure cost savings',
      'Generated $1M+ in cost savings through automated content studio',
    ],
  },
  {
    company: 'AWS',
    role: 'Video Streaming Systems Engineer',
    period: 'Nov 2020 – June 2021',
    location: 'Sydney, Australia',
    description: 'Regional distributed systems engineer improving reliability and scalability of cloud-based infrastructure across APAC.',
    achievements: [
      'Led regional expansion of live video infrastructure',
      'Designed origin-to-edge streaming pipelines',
      'Implemented low-latency streaming architectures',
    ],
  },
  {
    company: 'Amazon AV',
    role: 'AV Project Engineer',
    period: 'Aug 2019 – Oct 2020',
    location: 'Sydney, Australia',
    description: 'Managed enterprise Audio Visual lifecycle across ANZ offices, working with IT and vendors to improve system reliability.',
    achievements: [
      'Reduced incident resolution time by 30%',
      'Commissioned Cisco, Crestron, and Biamp infrastructure',
      'Led end-to-end AV deployment projects',
    ],
  },
  {
    company: 'Telstra',
    role: 'Unified Communications Engineer',
    period: 'Jan 2010 – Nov 2017',
    location: 'Australia',
    description: 'Led national deployments of enterprise video conferencing and AV platforms for government and corporate customers.',
    achievements: [
      'Maintained 95%+ SLA compliance',
      'Migrated from Cisco VCS to Webex',
      'Coordinated cross-functional teams during major updates',
    ],
  },
]

export default function Timeline() {
  return (
    <section className="py-24 md:py-32 bg-foreground/5 dark:bg-foreground/10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display font-semibold text-display-sm mb-4">
            Experience
          </h2>
          <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark max-w-2xl">
            15+ years building and operating media technology infrastructure across enterprise and cloud environments
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 dark:bg-foreground/5 transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 md:${
                  index % 2 === 0 ? '' : ''
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-accent rounded-full border-4 border-background dark:border-background-dark">
                  <div className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                </div>

                {/* Content - alternating sides */}
                <div className={`pl-10 md:pl-0 md:${
                  index % 2 === 0 ? 'md:pr-16' : 'md:col-start-2 md:pl-16'
                }`}>
                  <div className="p-6 bg-background dark:bg-background-dark-2 border border-foreground/10 dark:border-foreground/10 rounded-xl">
                    <div className="mb-4">
                      <span className="text-xs font-mono text-accent">{exp.period}</span>
                      <h3 className="font-display font-semibold text-xl mt-1">{exp.role}</h3>
                      <p className="text-foreground-muted dark:text-foreground-muted-dark">
                        {exp.company} · {exp.location}
                      </p>
                    </div>

                    <p className="text-sm text-foreground-muted dark:text-foreground-muted-dark mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-foreground-muted dark:text-foreground-muted-dark">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
