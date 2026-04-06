'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/sections/Navigation'
import Footer from '@/components/sections/Footer'
import Link from 'next/link'
import { ArrowLeft, Clock } from 'lucide-react'

export default function SelfHostedMediaArchitectPage() {
  return (
    <>
      <Navigation />
      <main className="pt-24 pb-32">
        <article className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/writing"
              className="inline-flex items-center gap-2 text-foreground-muted dark:text-foreground-muted-dark hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Writing
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex gap-2">
                {['Self-Hosted', 'Digital Sovereignty', 'Media Infrastructure'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-mono bg-foreground/10 dark:bg-foreground/20 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="flex items-center gap-1 text-xs text-foreground-muted dark:text-foreground-muted-dark">
                <Clock className="w-3 h-3" />
                8 min read
              </span>
            </div>

            <h1 className="font-display font-semibold text-display-sm mb-6">
              6 Surprising Lessons from a Self-Hosted Media Architect
            </h1>

            <p className="text-lg text-foreground-muted dark:text-foreground-muted-dark mb-8">
              March 15, 2024
            </p>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                In over 15 years of architecting media technology infrastructure, I've watched the industry shift from hardware-centric builds to a heavy reliance on "everything-as-a-service." While the convenience is undeniable, many creators and businesses have unwittingly walked into a subscription trap—a perpetual cycle of monthly fees for tools they never truly own.
              </p>

              <p className="mb-6">
                I believe high-end tech should be accessible, smart, and future-ready. By embracing digital sovereignty, you can build systems that are lean, scalable, and often more powerful than their "Pro" counterparts. Here are six hard-won lessons from the front lines of self-hosted media architecture.
              </p>

              <h2 className="font-display font-semibold text-2xl mt-12 mb-4">1. The $200 "Windows Pro" Tax is Completely Avoidable</h2>
              
              <p className="mb-4">
                Many professionals default to Windows Remote Desktop (RDP) because it feels like a native, "standard" solution. However, this convenience is built on artificial paywalls. To use RDP effectively across a fleet of machines, every device requires a Windows Pro license—a $200 premium per seat. If you're running Windows Home, you're simply locked out of a feature that should be a standard utility.
              </p>

              <p className="mb-4">
                From an architectural standpoint, native RDP is a cross-platform bottleneck. While you can install an RDP client on a Mac to access a PC, the source is definitive: you are not going to get any audio support. For media professionals who need to monitor sound while working remotely, this makes RDP an infrastructure liability.
              </p>

              <h2 className="font-display font-semibold text-2xl mt-12 mb-4">2. The Security Illusion: Why Your VNC Connection Might Be an Open Book</h2>
              
              <p className="mb-4">
                VNC (Virtual Network Computing) remains a popular legacy choice for home labs because it's cross-platform, but it's often an open door for security threats. Most VNC iterations are not open-source, suffer from high latency, and—most critically—often lack default encryption.
              </p>

              <p className="mb-4">
                In a corporate or high-stakes environment, an unencrypted VNC session is a massive liability. I recall a specific instance where a routine connection triggered an immediate alert from a security team: "I get a message from the security team telling me that hey your connection is not encrypted at all it is completely open for anyone to view."
              </p>

              <h2 className="font-display font-semibold text-2xl mt-12 mb-4">3. RustDesk: The "TeamViewer Killer" for Digital Sovereignty</h2>
              
              <p className="mb-4">
                For those tired of the "45-minute kick" on TeamViewer's free tier or the prohibitive costs of AnyDesk's paid tiers, RustDesk is the superior alternative. It's an open-source, high-performance solution that offers low latency and full GPU acceleration.
              </p>

              <p className="mb-4">
                As an architect, the ultimate move for data privacy is owning the "handshake." By self-hosting a RustDesk relay server using Docker Compose, you ensure that no third-party server ever touches your data.
              </p>

              <h3 className="font-semibold text-xl mt-8 mb-4">Architectural Blueprint</h3>
              
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Containerized Orchestration:</strong> Using Docker, you deploy two lightweight containers: the Handshake (hbbs) and the Relay (hbbr).</li>
                <li><strong>Port Specificity:</strong> For direct IP access and optimal performance, ensure port 21118 is utilized for the connection.</li>
                <li><strong>Security Keys:</strong> Access is secured via an encrypted key found in the ID_ed25519.pub file, which is then mapped to your client's network settings.</li>
                <li><strong>Integration:</strong> This setup integrates seamlessly with Tailscale, allowing for secure, low-latency "unattended access" to your machines from anywhere in the world.</li>
              </ul>

              <h2 className="font-display font-semibold text-2xl mt-12 mb-4">4. The $20 "Tiny Computer" That Runs Your Entire Business</h2>
              
              <p className="mb-4">
                We're conditioned to believe that enterprise-grade hosting requires massive overhead. However, the Orange Pi Zero 3—an ARM-based single-board computer (SBC) costing roughly $25 USD—is capable of running an entire business infrastructure.
              </p>

              <p className="mb-4">
                To understand the scale of the "Subscription Trap," compare these monthly fees to a one-time $25 investment:
              </p>

              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Wix Business Elite:</strong> ~$179/month</li>
                <li><strong>Ghost Pro:</strong> Up to $200/month</li>
                <li><strong>Orange Pi Zero 3:</strong> ~$25 (One-time hardware cost)</li>
              </ul>

              <h2 className="font-display font-semibold text-2xl mt-12 mb-4">5. Bringing AI to the Local Chat: Privacy-First Engagement</h2>
              
              <p className="mb-4">
                Audience engagement is evolving through Generative AI, but cloud APIs can be a resource drain and a privacy risk. Using Social Stream Ninja and Ollama, you can integrate a local AI chatbot directly into your OBS workflow without paying for external tokens.
              </p>

              <h2 className="font-display font-semibold text-2xl mt-12 mb-4">6. The "Zero Trust" Secret to Public Hosting at Home</h2>
              
              <p className="mb-4">
                The greatest challenge of self-hosting is the risk of opening router ports to the public internet. The professional, "Architect-approved" solution is the Cloudflare Tunnel (Zero Trust).
              </p>

              <p className="mb-4">
                By installing a Docker-based Cloudflare connector on your local server, you create a secure outbound connection to Cloudflare's edge. This allows you to host services on clean subdomains with full SSL encryption—all without ever touching your router's firewall. It turns a living-room setup into an enterprise-grade, global-facing infrastructure.
              </p>

              <h2 className="font-display font-semibold text-2xl mt-12 mb-4">Conclusion: Reclaiming Your Digital Infrastructure</h2>
              
              <p className="mb-4">
                The "MediaTech" philosophy is built on three pillars: keep it lean, keep it affordable, and keep it scalable. The modern open-source ecosystem has reached a tipping point where a handful of Docker containers and a $25 computer can effectively replace thousands of dollars in annual software-as-a-service fees.
              </p>

              <p className="mb-4">
                Digital sovereignty is about more than just cost—it's about the freedom to own your tools and protect your data. I encourage you to look at your current monthly overhead and ask: do I truly need these subscriptions, or am I ready to build my own future?
              </p>

              <p className="text-lg font-medium text-accent">
                The technology is ready. The only question is whether you are ready to own it.
              </p>
            </div>
          </motion.div>
        </article>
      </main>
      <Footer />
    </>
  )
}
