"use client";

import { motion } from "framer-motion";

const points = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
      </svg>
    ),
    title: "Starlink eliminates the rural objection",
    body: "8-mile radius. 62-minute flight time. A single Guardian station can now cover terrain that used to require a helicopter or three ground units. The connectivity problem that ended conversations with rural sheriff's offices — that's gone.",
    stat: "600+",
    statLabel: "agencies in addressable market",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Federal grants cover 60–80% of transition cost",
    body: "COPS Office, BSIR, FEMA BRIC, Byrne JAG — most agencies don't know the DOJ ban on drone purchases was reversed by executive order. Walking a procurement team through grant eligibility is a deal accelerant, not paperwork.",
    stat: "$500M+",
    statLabel: "in available federal funding",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "The regulatory window is now",
    body: "Seven states have active or pending Chinese drone bans. Agencies are grounded — some with 80%+ of their fleet offline. Every month without a replacement program is a month without aerial capability. The urgency isn't manufactured. It's legislated.",
    stat: "7",
    statLabel: "states with active/pending bans",
  },
];

export default function Thesis() {
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
            Market Thesis
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Why now. Why BRINC. Why this territory.
          </p>
          <p className="text-text-secondary max-w-2xl mb-16">
            The Motorola partnership puts 10,000+ agency relationships in
            BRINC&apos;s pipeline. Guardian + Starlink opens the rural market.
            Chinese drone bans create urgency. This is a consultative sale with
            a regulatory forcing function.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-lg border border-border bg-surface hover:border-accent/30 transition-colors group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="text-accent mb-4 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{point.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                {point.body}
              </p>
              <div className="pt-4 border-t border-border">
                <div className="text-2xl font-mono font-bold text-accent">
                  {point.stat}
                </div>
                <div className="text-xs text-text-muted">{point.statLabel}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
