"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

interface StateData {
  abbr: string;
  name: string;
  leads: number;
  p1: number;
  banStatus: string;
  urgency: "immediate" | "active" | "pending" | "partial";
  topAccount: string;
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
  },
  {
    abbr: "TX",
    name: "Texas",
    leads: 38,
    p1: 4,
    banStatus: "Partial — State procurement restricted",
    urgency: "partial",
    topAccount: "Pearland PD — Nation's first BVLOS DFR program",
  },
  {
    abbr: "TN",
    name: "Tennessee",
    leads: 31,
    p1: 1,
    banStatus: "New purchases banned July 2023",
    urgency: "active",
    topAccount: "Knoxville PD — $9.4M Skydio transition approved",
  },
  {
    abbr: "GA",
    name: "Georgia",
    leads: 24,
    p1: 1,
    banStatus: "Pending — HB 205 in legislature",
    urgency: "pending",
    topAccount: "Forsyth County SO — DJI Dock pilot (1 of 5 globally)",
  },
  {
    abbr: "AR",
    name: "Arkansas",
    leads: 18,
    p1: 0,
    banStatus: "Phase-out — Deadline May 2027",
    urgency: "active",
    topAccount: "N. Little Rock PD — 8 pilots, Autel fleet per patrol car",
  },
  {
    abbr: "MS",
    name: "Mississippi",
    leads: 12,
    p1: 0,
    banStatus: "Active — Full enforcement Jan 2025",
    urgency: "immediate",
    topAccount: "Camgian Corp — $7M federal C-UAS contracts",
  },
  {
    abbr: "NV",
    name: "Nevada",
    leads: 8,
    p1: 0,
    banStatus: "Active ban in effect",
    urgency: "immediate",
    topAccount: "Las Vegas Metro — Major fleet transition underway",
  },
];

// Map full state names to our data
const stateNameMap: Record<string, string> = {
  Florida: "FL",
  Texas: "TX",
  Tennessee: "TN",
  Georgia: "GA",
  Arkansas: "AR",
  Mississippi: "MS",
  Nevada: "NV",
};

const targetAbbrs = new Set(targetStates.map((s) => s.abbr));

const urgencyColor: Record<string, string> = {
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

        {/* Real SVG Map */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full overflow-hidden rounded-xl border border-border bg-surface/30 p-2 sm:p-6">
            <ComposableMap
              projection="geoAlbersUsa"
              projectionConfig={{ scale: 1000 }}
              style={{ width: "100%", height: "auto" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateName = geo.properties.name;
                    const abbr = stateNameMap[stateName];
                    const isTarget = abbr && targetAbbrs.has(abbr);
                    const stateData = isTarget
                      ? targetStates.find((s) => s.abbr === abbr)
                      : null;
                    const isSelected = selected?.abbr === abbr;

                    let fill = "#1a2332";
                    let stroke = "#0B0F14";
                    let strokeWidth = 0.5;

                    if (isTarget && stateData) {
                      if (
                        stateData.urgency === "immediate" ||
                        stateData.urgency === "active"
                      ) {
                        fill = isSelected ? "#059669" : "#10B981";
                      } else {
                        fill = isSelected ? "#D97706" : "#F59E0B";
                      }
                      stroke = isSelected ? "#ffffff" : "#0B0F14";
                      strokeWidth = isSelected ? 2 : 1;
                    }

                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={fill}
                        stroke={stroke}
                        strokeWidth={strokeWidth}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            outline: "none",
                            fill: isTarget ? (fill === "#F59E0B" ? "#D97706" : "#059669") : "#1f2937",
                          },
                          pressed: { outline: "none" },
                        }}
                        onMouseEnter={() => {
                          if (stateData) setSelected(stateData);
                        }}
                        onMouseLeave={() => setSelected(null)}
                        onClick={() => {
                          if (stateData) setSelected(stateData);
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ComposableMap>
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
              className="p-4 rounded-lg border border-border bg-surface hover:border-accent/30 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onMouseEnter={() => setSelected(state)}
              onMouseLeave={() => setSelected(null)}
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
