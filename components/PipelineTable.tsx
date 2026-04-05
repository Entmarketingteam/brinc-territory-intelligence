"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Lead {
  agency: string;
  city: string;
  state: string;
  score: number;
  dfrFit: string;
  banStatus: string;
  tier: string;
  notes: string;
}

const leads: Lead[] = [
  { agency: "Collier County Sheriff's Office", city: "Naples", state: "FL", score: 8, dfrFit: "Active DFR", banStatus: "Active", tier: "Tier 1", notes: "31 drones, 9,048+ flights" },
  { agency: "Pearland Police Department", city: "Pearland", state: "TX", score: 8, dfrFit: "Active DFR", banStatus: "Partial", tier: "Tier 2", notes: "Nation's first BVLOS DFR" },
  { agency: "Montgomery County SO", city: "Conroe", state: "TX", score: 8, dfrFit: "Active DFR", banStatus: "Partial", tier: "Tier 2", notes: "16 FAA-certified pilots" },
  { agency: "Knoxville Police Department", city: "Knoxville", state: "TN", score: 8, dfrFit: "Active DFR", banStatus: "Banned", tier: "Tier 2", notes: "$9.4M Skydio transition" },
  { agency: "Forsyth County SO", city: "Cumming", state: "GA", score: 8, dfrFit: "Active DFR", banStatus: "Pending", tier: "Tier 2", notes: "DJI Dock pilot — 1 of 5 globally" },
  { agency: "Clay County SO", city: "Green Cove Springs", state: "FL", score: 8, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "Replaced pre-ban fleet" },
  { agency: "St. Johns County SO", city: "St. Augustine", state: "FL", score: 8, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "Transitioning to compliant" },
  { agency: "Polk County SO", city: "Bartow", state: "FL", score: 8, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "" },
  { agency: "Nassau County SO", city: "Yulee", state: "FL", score: 8, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "Mixed fleet, partially compliant" },
  { agency: "Broward Sheriff's Office", city: "Fort Lauderdale", state: "FL", score: 7, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "63 drones, ~$300K fleet" },
  { agency: "El Paso Police Department", city: "El Paso", state: "TX", score: 7, dfrFit: "Active DFR", banStatus: "Partial", tier: "Tier 2", notes: "22 DJI Dock stations city-wide" },
  { agency: "Lee County SO", city: "Fort Myers", state: "FL", score: 6, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "38 of 41 drones grounded" },
  { agency: "Harris County SO", city: "Houston", state: "TX", score: 7, dfrFit: "Active DFR", banStatus: "Partial", tier: "Tier 2", notes: "All-DJI fleet; DroneSense app" },
  { agency: "Orange County SO", city: "Orlando", state: "FL", score: 7, dfrFit: "Active DFR", banStatus: "Active", tier: "Tier 1", notes: "19 of 25 drones grounded" },
  { agency: "Miami-Dade Fire Rescue", city: "Miami", state: "FL", score: 7, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "41 drones, ~$200K fleet" },
  { agency: "Shelby County SO", city: "Memphis", state: "TN", score: 7, dfrFit: "DFR Candidate", banStatus: "Banned", tier: "Tier 2", notes: "Drone program since 2015" },
  { agency: "Hillsborough County SO", city: "Tampa", state: "FL", score: 6, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "15 of 16 drones grounded" },
  { agency: "Palm Beach County SO", city: "West Palm Beach", state: "FL", score: 6, dfrFit: "DFR Candidate", banStatus: "Active", tier: "Tier 1", notes: "100+ missions/mo pre-ban" },
  { agency: "TX Dept of Public Safety", city: "Austin", state: "TX", score: 5, dfrFit: "Non-public safety", banStatus: "Partial", tier: "Tier 2", notes: "450+ drones, 97% Chinese, ~$3.7M" },
  { agency: "N. Little Rock PD", city: "N. Little Rock", state: "AR", score: 7, dfrFit: "DFR Candidate", banStatus: "Phase-out", tier: "Tier 2", notes: "8 pilots, Autel per patrol car" },
];

const states = ["All", "FL", "TX", "TN", "GA", "AR", "MS", "NV"];

export default function PipelineTable() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? leads : leads.filter((l) => l.state === filter);

  return (
    <section className="py-24 px-6 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-mono text-text-muted tracking-[0.2em] uppercase mb-3">
            Pipeline Status
          </h2>
          <p className="text-3xl sm:text-4xl font-bold mb-4">
            Top accounts, scored and enriched.
          </p>
          <p className="text-text-secondary max-w-2xl mb-8">
            Cross-referenced FAA registry, state procurement records, press
            coverage, and USASpending.gov federal contracts. Scored by DFR
            program fit, ban urgency, Starlink relevance, and FlightDeck ARR
            potential.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {states.map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-3 py-1.5 rounded text-xs font-mono font-bold transition-colors ${
                filter === s
                  ? "bg-accent text-bg"
                  : "bg-surface border border-border text-text-muted hover:text-text hover:border-border-light"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-surface">
                <th className="text-left px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wider">
                  Agency
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wider hidden sm:table-cell">
                  Location
                </th>
                <th className="text-center px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wider">
                  Score
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wider hidden md:table-cell">
                  DFR Fit
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wider hidden md:table-cell">
                  Ban
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wider">
                  Tier
                </th>
                <th className="text-left px-4 py-3 font-mono text-xs text-text-muted uppercase tracking-wider hidden lg:table-cell">
                  Intel
                </th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead, i) => (
                <tr
                  key={i}
                  className="border-b border-border/50 hover:bg-surface-light/50 transition-colors"
                >
                  <td className="px-4 py-3 font-medium">{lead.agency}</td>
                  <td className="px-4 py-3 text-text-secondary hidden sm:table-cell">
                    {lead.city}, {lead.state}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded font-mono font-bold text-xs ${
                        lead.score >= 8
                          ? "bg-accent-dim text-accent"
                          : lead.score >= 7
                          ? "bg-amber-dim text-amber"
                          : "bg-surface text-text-muted"
                      }`}
                    >
                      {lead.score}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-text-secondary text-xs hidden md:table-cell">
                    {lead.dfrFit}
                  </td>
                  <td className="px-4 py-3 hidden md:table-cell">
                    <span
                      className={`text-xs font-mono px-2 py-0.5 rounded ${
                        lead.banStatus === "Active"
                          ? "bg-red-dim text-red"
                          : lead.banStatus === "Banned"
                          ? "bg-red-dim text-red"
                          : lead.banStatus === "Partial"
                          ? "bg-amber-dim text-amber"
                          : lead.banStatus === "Pending"
                          ? "bg-amber-dim text-amber"
                          : "bg-accent-dim text-accent"
                      }`}
                    >
                      {lead.banStatus}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-mono font-bold ${
                        lead.tier === "Tier 1"
                          ? "text-accent"
                          : "text-text-muted"
                      }`}
                    >
                      {lead.tier}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-xs text-text-muted max-w-[200px] truncate hidden lg:table-cell">
                    {lead.notes}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-text-muted mt-4 font-mono">
          Showing {filtered.length} of 202 total leads &mdash; full dataset
          available on request
        </p>
      </div>
    </section>
  );
}
