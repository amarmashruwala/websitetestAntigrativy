'use client'

import { motion } from 'framer-motion'

const nodes = [
  { id: 'edge', label: 'Edge', x: 10, y: 50 },
  { id: 'cloud', label: 'Cloud', x: 40, y: 30 },
  { id: 'ai', label: 'AI', x: 70, y: 50 },
  { id: 'delivery', label: 'Delivery', x: 90, y: 50 },
]

const connections = [
  { from: 'edge', to: 'cloud' },
  { from: 'cloud', to: 'ai' },
  { from: 'ai', to: 'delivery' },
  { from: 'edge', to: 'delivery' },
]

export default function SignalFlowDiagram() {
  return (
    <div className="relative w-full aspect-[4/3]">
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4AA" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#00D4AA" stopOpacity="1" />
            <stop offset="100%" stopColor="#00D4AA" stopOpacity="0.2" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Connection Lines */}
        <g>
          {connections.map((conn, i) => {
            const fromNode = nodes.find((n) => n.id === conn.from)
            const toNode = nodes.find((n) => n.id === conn.to)
            
            return (
              <motion.line
                key={`${conn.from}-${conn.to}`}
                x1={fromNode!.x}
                y1={fromNode!.y}
                x2={toNode!.x}
                y2={toNode!.y}
                stroke="url(#lineGradient)"
                strokeWidth="0.5"
                strokeDasharray="2,1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{
                  duration: 1.5,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            )
          })}
        </g>

        {/* Animated Data Packets */}
        <g>
          {[0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              r="0.8"
              fill="#00D4AA"
              filter="url(#glow)"
              initial={{ cx: 10, cy: 50, opacity: 0 }}
              animate={{
                cx: [10, 40, 70, 90],
                cy: [50, 30, 50, 50],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 1,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          ))}
        </g>

        {/* Nodes */}
        {nodes.map((node, i) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="transparent"
              stroke="#00D4AA"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.2,
                ease: 'backOut',
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="#00D4AA"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: 1,
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.text
              x={node.x}
              y={node.y + 12}
              textAnchor="middle"
              className="fill-foreground dark:fill-foreground-dark text-[3px] font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
            >
              {node.label}
            </motion.text>
          </g>
        ))}

        {/* Decorative Grid */}
        <g opacity="0.1">
          {[20, 40, 60, 80].map((x) => (
            <line
              key={`v-${x}`}
              x1={x}
              y1="0"
              x2={x}
              y2="100"
              stroke="#00D4AA"
              strokeWidth="0.1"
            />
          ))}
          {[20, 40, 60, 80].map((y) => (
            <line
              key={`h-${y}`}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              stroke="#00D4AA"
              strokeWidth="0.1"
            />
          ))}
        </g>
      </svg>
    </div>
  )
}
