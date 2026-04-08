"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    year: "Childhood",
    title: "Second through the door",
    body: "My father was a SWAT team member in Euclid, Ohio. We held our breath on callout nights knowing he was second through the door. The gap between the technology that existed and the equipment he carried into those rooms — that stayed with me.",
    accent: false,
  },
  {
    year: "2017",
    title: "First commercial drone operator",
    body: "One of the first in the country flying commercially before Part 107 was finalized. Built the workflow from scratch, no manual, learned by doing. Started on a high school football field because I needed an edge.",
    accent: true,
  },
  {
    year: "2018",
    title: "Youngest head coach in Kentucky",
    body: "Same instinct as Blake Resnick at 18 following SWAT teams — I saw a gap where technology could change outcomes. Practice film from a drone gave my players something no other program in the state had at that level.",
    accent: false,
  },
  {
    year: "2019",
    title: "Teaching anyone to fly",
    body: "Put the controller in the hands of teenage girls and my 6-year-old daughter. If I can get a first-grader operational on a football field, I can get a patrol officer operational on a DFR station.",
    accent: true,
  },
  {
    year: "2022–Now",
    title: "ENT Agency — $6M+ managed",
    body: "Built an influencer marketing agency managing 132 brand partnerships across 3 legal entities. Consultative sales, multi-stakeholder deals, renewal engine, signal-based outreach. Same motion as enterprise — different vertical.",
    accent: false,
  },
  {
    year: "2026",
    title: "202 leads before applying",
    body: "Pulled FAA registry data across 7 states, cross-referenced procurement records and press coverage, scored every lead by DFR fit and grant eligibility. The pipeline is built.",
    accent: true,
  },
];

export default function OperatorStory() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-xs font-mono text-text-muted tracking-[0.2em] uppercase mb-3">
            Operator Background
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Mission credibility isn&apos;t a resume line.
          </p>
          <p className="text-text-secondary max-w-2xl">
            I&apos;m not selling technology to first responders. I&apos;m making
            the case that their people deserve better tools — and I mean it.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Dot */}
                <div className="hidden sm:flex flex-col items-center flex-shrink-0">
                  <div
                    className={`w-[10px] h-[10px] rounded-full mt-2 ${
                      item.accent ? "bg-accent" : "bg-border-light"
                    }`}
                  />
                </div>

                <div
                  className={`flex-1 p-5 rounded-lg border transition-colors ${
                    item.accent
                      ? "border-accent/30 bg-accent/5"
                      : "border-border bg-surface/50"
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-accent font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-base font-bold">{item.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
