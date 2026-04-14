"use client";

import { motion } from "framer-motion";

const sectors = [
  {
    name: "Fire Departments + EMS",
    urgency: "CRITICAL",
    urgencyColor: "bg-red-dim text-red",
    useCase:
      "Structure fire thermal mapping, hazmat response, search & rescue, Narcan delivery pilots. Cities are deploying shared police + fire drone programs for unified 911 response.",
    example:
      "Nashville, Fort Lauderdale, Austin, Phoenix — all running joint police/fire drone ops",
    signal: "Same DJI replacement pressure + federal compliance mandate",
  },
  {
    name: "Emergency Management (OEM)",
    urgency: "CRITICAL",
    urgencyColor: "bg-red-dim text-red",
    useCase:
      "Natural disaster response (floods, tornadoes, hurricanes), mass casualty events, multi-agency coordination. OEM offices control federal grant flow — FEMA, DHS — and buy for multiple agencies at once.",
    example:
      "Miami-Dade OEM, Harris County (Houston), Los Angeles County — all expanding drone response",
    signal: "These are platform buyers, not department buyers. Biggest budgets.",
  },
  {
    name: "911 Dispatch / RTCC Operations",
    urgency: "CRITICAL",
    urgencyColor: "bg-red-dim text-red",
    useCase:
      "Drone launches triggered directly from 911 calls. Pre-arrival intelligence for ALL responders — fire, EMS, police. Some cities shifting drone ops into dispatch centers instead of individual departments.",
    example:
      "Atlanta (Police Foundation model), Chicago OEMC, NYC multi-agency expansion",
    signal:
      "This becomes a horizontal platform sale — not a single department deal",
  },
  {
    name: "Transportation (State DOTs)",
    urgency: "HIGH",
    urgencyColor: "bg-amber-dim text-amber",
    useCase:
      "Real-time crash detection, congestion mapping, incident verification faster than fixed cameras. Smart corridor initiatives driving adoption.",
    example:
      "TxDOT, FDOT, Caltrans, Georgia DOT — all evaluating drone monitoring pilots",
    signal: "Infrastructure funding (federal $$$) + smart city initiatives",
  },
  {
    name: "Utilities (Power, Gas, Water)",
    urgency: "HIGH",
    urgencyColor: "bg-amber-dim text-amber",
    useCase:
      "Power line inspection, storm damage assessment, wildfire monitoring, gas leak detection. Utilities operate like private emergency response units with billion-dollar budgets.",
    example:
      "Duke Energy, FPL, PG&E, Southern Company — all moving to NDAA-compliant systems",
    signal:
      "Critical infrastructure = national security. Strong push toward Blue UAS compliance.",
  },
  {
    name: "Schools + Large Venues",
    urgency: "EMERGING",
    urgencyColor: "bg-surface text-text-muted",
    useCase:
      "Active threat response, campus monitoring, event security. Stadiums and districts building private RTCC-style command centers using the same tech stack.",
    example:
      "LA Unified, Miami-Dade Schools, NFL stadium districts — faster procurement than government",
    signal: "Any major incident = immediate funding spike. Watch for triggers.",
  },
];

const earlySignals = [
  {
    signal: "Job postings",
    detail: '"UAS Program Manager", "RTCC Analyst", "Drone Coordinator"',
    timing: "30–90 days before procurement",
  },
  {
    signal: "Council workshop agendas",
    detail:
      '"Exploring drone program", "technology assessment", "pilot evaluation"',
    timing: "2–6 weeks before vote",
  },
  {
    signal: "Grant intent filings",
    detail: "Notice of intent to apply — FEMA, DHS, DOJ JAG pre-award",
    timing: "60–120 days before award",
  },
  {
    signal: "Incident spikes",
    detail:
      "Officer-involved shooting, fire response failure, traffic fatalities",
    timing: "Triggers internal conversations immediately",
  },
  {
    signal: "Pilot program language",
    detail: '"Proof of concept", "trial period", "evaluation phase"',
    timing: "Budget already mentally allocated",
  },
  {
    signal: "RFI / Sources Sought",
    detail: "Pre-RFP market research on SAM.gov and state procurement sites",
    timing: "Vendors being explored — window open",
  },
];

export default function MarketExpansion() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-mono text-text-muted tracking-[0.2em] uppercase mb-3">
            Market Expansion Thesis
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            DFR isn&apos;t a police product anymore.
          </p>
          <p className="text-text-secondary max-w-3xl mb-16">
            RTCC + DFR is becoming a real-time operations layer for any
            organization responsible for safety, infrastructure, or rapid
            response. The addressable market is 5x larger than law enforcement
            alone. Here&apos;s where the expansion plays are — and how to detect
            buying signals before competitors.
          </p>
        </motion.div>

        {/* Sector cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20">
          {sectors.map((sector, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg border border-border bg-surface hover:border-accent/20 transition-colors"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-bold">{sector.name}</h3>
                <span
                  className={`px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider flex-shrink-0 ${sector.urgencyColor}`}
                >
                  {sector.urgency}
                </span>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {sector.useCase}
              </p>
              <div className="space-y-2 pt-3 border-t border-border">
                <p className="text-xs text-text-muted">
                  <span className="text-accent font-mono font-bold">
                    Signal:{" "}
                  </span>
                  {sector.signal}
                </p>
                <p className="text-xs text-text-muted">
                  <span className="text-amber font-mono font-bold">
                    Example:{" "}
                  </span>
                  {sector.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Early signal detection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-xs font-mono text-text-muted tracking-[0.2em] uppercase mb-3">
            Signal Detection Framework
          </h3>
          <p className="text-xl sm:text-2xl font-bold mb-3">
            Detect intent before procurement starts.
          </p>
          <p className="text-sm text-text-secondary max-w-2xl mb-8">
            Most AEs enter at the RFP stage. That&apos;s too late. These signals
            appear 30–120 days before formal procurement — when the internal
            conversation is still &ldquo;should we do this?&rdquo; not &ldquo;who
            do we buy from?&rdquo;
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
          {earlySignals.map((sig, i) => (
            <motion.div
              key={i}
              className="p-4 rounded-lg border border-border bg-bg"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.06 }}
            >
              <p className="font-bold text-sm mb-2">{sig.signal}</p>
              <p className="text-xs text-text-secondary mb-2">{sig.detail}</p>
              <p className="text-[10px] font-mono text-accent">
                {sig.timing}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Strategic insight */}
        <motion.div
          className="p-6 rounded-lg border border-accent/30 bg-accent/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-sm font-bold mb-2">
            The earliest signal is not &ldquo;they are buying drones.&rdquo;
          </p>
          <p className="text-lg font-bold text-accent">
            It&apos;s &ldquo;they are experiencing a problem drones
            solve.&rdquo;
          </p>
          <p className="text-xs text-text-muted mt-3">
            Most competitors enter at vendor evaluation. This framework enters at
            intent formation — a 30–90 day head start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
