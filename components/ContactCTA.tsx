"use client";

import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-32 px-6 relative">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="max-w-2xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 leading-tight">
          I&apos;d rather show you what I can do
          <br />
          <span className="text-text-secondary">than describe it.</span>
        </p>

        <p className="text-text-secondary mb-10 max-w-lg mx-auto">
          20 minutes. I&apos;ll walk you through how I&apos;d approach the first
          90 days in territory — and share the full 202-lead prospecting table.
        </p>

        <div className="space-y-4 mb-12">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:ethan@entagency.co"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-bold text-sm hover:bg-accent/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              ethan@entagency.co
            </a>
            <a
              href="tel:+19314310089"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border bg-surface font-bold text-sm hover:border-accent/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (931) 431-0089
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-6 gap-y-1 text-xs text-text-muted font-mono">
          <span>Clarksville, TN</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>20 min from Fort Campbell</span>
          <span className="hidden sm:inline text-border">|</span>
          <span>20 min from Lexington</span>
        </div>

        <p className="text-[10px] text-text-muted/50 mt-16 font-mono">
          Built as a territory intelligence brief &mdash; not a resume.
        </p>
      </motion.div>
    </section>
  );
}
