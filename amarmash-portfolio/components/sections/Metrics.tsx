'use client'

import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface MetricProps {
  value: string
  label: string
  delay?: number
}

function Metric({ value, label, delay = 0 }: MetricProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('')

  useEffect(() => {
    if (isInView && value.match(/^\d+\+?$/)) {
      const numericValue = parseInt(value.replace(/\D/g, ''))
      const hasPlus = value.includes('+')
      
      animate(0, numericValue, {
        duration: 2,
        ease: 'easeOut',
        onUpdate: (current) => {
          setDisplayValue(Math.floor(current) + (hasPlus ? '+' : ''))
        },
      })
    } else {
      setDisplayValue(value)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="text-center p-6"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-accent mb-2">
        {displayValue || value}
      </div>
      <div className="text-sm md:text-base text-foreground-muted dark:text-foreground-muted-dark">
        {label}
      </div>
    </motion.div>
  )
}

export default function Metrics() {
  return (
    <section className="py-24 md:py-32 bg-foreground/5 dark:bg-foreground/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Primary Metrics - Asymmetric Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2 md:col-span-1">
            <Metric value="15+" label="Years Experience" delay={0.1} />
          </div>
          <div className="col-span-2 md:col-span-1">
            <Metric value="5,000" label="Annual Broadcasts" delay={0.2} />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Metric value="5" label="APAC Countries" delay={0.3} />
          </div>
          <div className="col-span-1 md:col-span-1">
            <Metric value="99%" label="Platform Availability" delay={0.4} />
          </div>
        </div>
        
        {/* Secondary Metrics */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-8 border-t border-foreground/10 dark:border-foreground/5">
          <Metric value="30%" label="Reduced Manual Intervention" delay={0.5} />
          <Metric value="50%" label="Infrastructure Savings" delay={0.6} />
          <Metric value="$1M+" label="Cost Savings Generated" delay={0.7} />
        </div>
      </div>
    </section>
  )
}
