"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface StateData {
  abbr: string;
  name: string;
  leads: number;
  p1: number;
  banStatus: string;
  urgency: "immediate" | "active" | "pending" | "partial";
  topAccount: string;
  color: string;
}

const targetStates: StateData[] = [
  {
    abbr: "FL",
    name: "Florida",
    leads: 52,
    p1: 8,
    banStatus: "Active — Effective April 2023",
    urgency: "immediate",
    topAccount: "Collier County SO — 31 drones, 9,048+ flights",
    color: "bg-accent",
  },
  {
    abbr: "TX",
    name: "Texas",
    leads: 38,
    p1: 4,
    banStatus: "Partial — State procurement restricted",
    urgency: "partial",
    topAccount: "Pearland PD — Nation's first BVLOS DFR program",
    color: "bg-amber",
  },
  {
    abbr: "TN",
    name: "Tennessee",
    leads: 31,
    p1: 1,
    banStatus: "New purchases banned July 2023",
    urgency: "active",
    topAccount: "Knoxville PD — $9.4M Skydio transition approved",
    color: "bg-accent",
  },
  {
    abbr: "GA",
    name: "Georgia",
    leads: 24,
    p1: 1,
    banStatus: "Pending — HB 205 in legislature",
    urgency: "pending",
    topAccount: "Forsyth County SO — DJI Dock pilot (1 of 5 globally)",
    color: "bg-amber",
  },
  {
    abbr: "AR",
    name: "Arkansas",
    leads: 18,
    p1: 0,
    banStatus: "Phase-out — Deadline May 2027",
    urgency: "active",
    topAccount: "N. Little Rock PD — 8 pilots, Autel fleet per patrol car",
    color: "bg-accent",
  },
  {
    abbr: "MS",
    name: "Mississippi",
    leads: 12,
    p1: 0,
    banStatus: "Active — Full enforcement Jan 2025",
    urgency: "immediate",
    topAccount: "Camgian Corp — $7M federal C-UAS contracts",
    color: "bg-accent",
  },
  {
    abbr: "NV",
    name: "Nevada",
    leads: 8,
    p1: 0,
    banStatus: "Active ban in effect",
    urgency: "immediate",
    topAccount: "Las Vegas Metro — Major fleet transition underway",
    color: "bg-accent",
  },
];

// US tile grid — simplified hex-style layout
const US_GRID: { abbr: string; row: number; col: number }[] = [
  { abbr: "AK", row: 0, col: 0 },
  { abbr: "ME", row: 0, col: 10 },
  { abbr: "WI", row: 1, col: 5 },
  { abbr: "VT", row: 1, col: 9 },
  { abbr: "NH", row: 1, col: 10 },
  { abbr: "WA", row: 2, col: 0 },
  { abbr: "MT", row: 2, col: 1 },
  { abbr: "ND", row: 2, col: 2 },
  { abbr: "MN", row: 2, col: 3 },
  { abbr: "MI", row: 2, col: 6 },
  { abbr: "NY", row: 2, col: 8 },
  { abbr: "MA", row: 2, col: 9 },
  { abbr: "RI", row: 2, col: 10 },
  { abbr: "OR", row: 3, col: 0 },
  { abbr: "ID", row: 3, col: 1 },
  { abbr: "WY", row: 3, col: 2 },
  { abbr: "SD", row: 3, col: 3 },
  { abbr: "IA", row: 3, col: 4 },
  { abbr: "IL", row: 3, col: 5 },
  { abbr: "IN", row: 3, col: 6 },
  { abbr: "OH", row: 3, col: 7 },
  { abbr: "PA", row: 3, col: 8 },
  { abbr: "NJ", row: 3, col: 9 },
  { abbr: "CT", row: 3, col: 10 },
  { abbr: "NV", row: 4, col: 0 },
  { abbr: "UT", row: 4, col: 1 },
  { abbr: "CO", row: 4, col: 2 },
  { abbr: "NE", row: 4, col: 3 },
  { abbr: "MO", row: 4, col: 4 },
  { abbr: "KY", row: 4, col: 5 },
  { abbr: "WV", row: 4, col: 6 },
  { abbr: "VA", row: 4, col: 7 },
  { abbr: "MD", row: 4, col: 8 },
  { abbr: "DE", row: 4, col: 9 },
  { abbr: "CA", row: 5, col: 0 },
  { abbr: "AZ", row: 5, col: 1 },
  { abbr: "NM", row: 5, col: 2 },
  { abbr: "KS", row: 5, col: 3 },
  { abbr: "AR", row: 5, col: 4 },
  { abbr: "TN", row: 5, col: 5 },
  { abbr: "NC", row: 5, col: 6 },
  { abbr: "SC", row: 5, col: 7 },
  { abbr: "DC", row: 5, col: 8 },
  { abbr: "OK", row: 6, col: 3 },
  { abbr: "LA", row: 6, col: 4 },
  { abbr: "MS", row: 6, col: 5 },
  { abbr: "AL", row: 6, col: 6 },
  { abbr: "GA", row: 6, col: 7 },
  { abbr: "HI", row: 7, col: 0 },
  { abbr: "TX", row: 7, col: 3 },
  { abbr: "FL", row: 7, col: 8 },
];

const targetAbbrs = new Set(targetStates.map((s) => s.abbr));

const urgencyColor = {
  immediate: "text-red bg-red-dim",
  active: "text-accent bg-accent-dim",
  pending: "text-amber bg-amber-dim",
  partial: "text-amber bg-amber-dim",
};

export default function TerritoryMap() {
  const [selected, setSelected] = useState<StateData | null>(null);

  return (
    <section id="territory" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-mono text-text-muted tracking-[0.2em] uppercase mb-3">
            Territory Intelligence
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Seven states. One regulatory window.
          </p>
          <p className="text-text-secondary max-w-2xl mb-12">
            Every state with active or pending Chinese drone bans, mapped
            against FAA registry data, procurement records, and press coverage.
            Green = active ban. Amber = pending or partial.
          </p>
        </motion.div>

        {/* Tile Map */}
        <motion.div
          className="mb-12 overflow-x-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div
            className="grid gap-1 min-w-[500px] mx-auto"
            style={{
              gridTemplateColumns: "repeat(11, 1fr)",
              gridTemplateRows: "repeat(8, 1fr)",
            }}
          >
            {US_GRID.map((tile) => {
              const isTarget = targetAbbrs.has(tile.abbr);
              const stateData = targetStates.find(
                (s) => s.abbr === tile.abbr
              );
              return (
                <div
                  key={tile.abbr}
                  className={`
                    aspect-square flex items-center justify-center rounded text-[10px] sm:text-xs font-mono font-bold cursor-default transition-all duration-200
                    ${
                      isTarget
                        ? stateData?.urgency === "immediate"
                          ? "bg-accent/20 text-accent border border-accent/40 hover:bg-accent/30"
                          : stateData?.urgency === "partial" || stateData?.urgency === "pending"
                          ? "bg-amber/20 text-amber border border-amber/40 hover:bg-amber/30"
                          : "bg-accent/20 text-accent border border-accent/40 hover:bg-accent/30"
                        : "bg-surface text-text-muted/40 border border-transparent"
                    }
                  `}
                  style={{
                    gridRow: tile.row + 1,
                    gridColumn: tile.col + 1,
                  }}
                  onMouseEnter={() => stateData && setSelected(stateData)}
                  onMouseLeave={() => setSelected(null)}
                  onClick={() => stateData && setSelected(stateData)}
                >
                  {tile.abbr}
                  {isTarget && stateData && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-accent hidden sm:block" />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* State detail panel */}
        <div className="min-h-[120px] mb-12">
          {selected ? (
            <motion.div
              key={selected.abbr}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-lg border border-border bg-surface"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-bold">{selected.name}</h3>
                  <p className="text-sm text-text-secondary">
                    {selected.banStatus}
                  </p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                    urgencyColor[selected.urgency]
                  }`}
                >
                  {selected.urgency}
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                <div>
                  <div className="text-2xl font-mono font-bold text-accent">
                    {selected.leads}
                  </div>
                  <div className="text-xs text-text-muted">Total Leads</div>
                </div>
                <div>
                  <div className="text-2xl font-mono font-bold text-amber">
                    {selected.p1}
                  </div>
                  <div className="text-xs text-text-muted">P1 Accounts</div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm font-medium text-text-secondary">
                    {selected.topAccount}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    Top Account
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="p-6 rounded-lg border border-border/50 bg-surface/50 flex items-center justify-center">
              <p className="text-sm text-text-muted font-mono">
                Hover or tap a highlighted state to see intelligence
              </p>
            </div>
          )}
        </div>

        {/* State cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {targetStates.map((state, i) => (
            <motion.div
              key={state.abbr}
              className="p-4 rounded-lg border border-border bg-surface hover:border-accent/30 transition-colors"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-lg font-bold">
                  {state.abbr}
                </span>
                <span className="font-mono text-accent text-sm font-bold">
                  {state.leads} leads
                </span>
              </div>
              <p className="text-xs text-text-muted leading-relaxed">
                {state.banStatus}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
