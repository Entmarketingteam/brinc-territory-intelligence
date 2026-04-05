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

const targetAbbrs = new Set(targetStates.map((s) => s.abbr));

const urgencyColor: Record<string, string> = {
  immediate: "text-red bg-red-dim",
  active: "text-accent bg-accent-dim",
  pending: "text-amber bg-amber-dim",
  partial: "text-amber bg-amber-dim",
};

// Simplified US state SVG paths (viewBox 0 0 960 600)
const statePaths: Record<string, string> = {
  AL: "M628,427 L628,466 620,489 621,497 636,497 637,468 643,446 643,427Z",
  AK: "M161,485 L129,485 119,489 113,499 106,499 101,501 96,509 86,513 76,509 68,509 57,515 53,519 42,519 38,517 28,519 23,527 24,532 17,540 10,537 5,543 5,549 10,553 20,553 24,547 32,543 38,541 47,543 55,541 62,537 72,534 79,530 88,530 94,523 101,519 107,515 120,509 128,503 138,497 148,491 155,487Z",
  AZ: "M205,412 L205,469 210,499 258,489 265,416 248,409 226,412Z",
  AR: "M555,413 L555,456 592,456 597,452 597,413 592,408 558,408Z",
  CA: "M120,290 L110,299 107,320 105,340 107,358 112,381 120,404 132,429 140,449 152,467 160,470 163,452 171,433 178,417 185,409 191,402 193,385 193,367 186,340 180,320 176,305 165,292 150,287 135,288Z",
  CO: "M305,310 L305,370 380,370 380,310Z",
  CT: "M852,210 L852,225 870,218 873,210Z",
  DE: "M810,295 L808,310 815,317 820,308Z",
  FL: "M660,467 L667,460 683,453 706,449 725,449 735,453 740,460 740,470 732,485 720,500 710,515 703,525 698,530 690,530 685,522 680,510 675,500 668,495 660,495 655,500 650,505 647,499 648,489 660,475Z",
  GA: "M644,397 L644,444 660,467 660,475 670,462 683,453 690,445 680,430 670,420 665,410 655,400Z",
  HI: "M310,530 L300,535 303,542 310,542 316,538 325,538 332,534 330,528 322,525 315,528Z",
  ID: "M230,175 L225,220 220,252 222,268 237,280 245,270 250,248 252,220 258,195 250,178Z",
  IL: "M580,270 L575,310 572,340 574,355 580,370 590,375 595,358 598,330 600,300 596,275Z",
  IN: "M610,275 L606,320 605,355 612,370 618,358 620,320 618,280Z",
  IA: "M520,250 L515,285 540,290 570,285 575,250 548,245Z",
  KS: "M385,345 L385,395 470,395 475,390 475,345Z",
  KY: "M595,365 L628,350 650,345 670,350 675,358 660,368 640,375 620,382 600,387 590,380Z",
  LA: "M555,460 L555,500 570,510 585,510 595,500 600,490 595,478 595,460Z",
  ME: "M870,120 L862,150 858,175 868,180 878,170 882,145 880,125Z",
  MD: "M780,290 L790,295 810,295 820,308 815,317 800,315 785,310 775,305Z",
  MA: "M852,195 L852,210 873,210 880,205 878,195Z",
  MI: "M600,185 L610,200 620,210 630,215 632,230 625,248 614,255 608,245 600,240 592,248 585,235 588,215 595,195Z",
  MN: "M500,140 L498,195 510,210 530,215 540,205 545,180 540,155 520,140Z",
  MS: "M592,420 L592,460 600,490 610,495 618,490 620,460 620,420Z",
  MO: "M520,330 L520,400 555,408 570,390 580,370 572,340 545,330Z",
  MT: "M265,145 L265,200 345,200 345,145Z",
  NE: "M380,270 L380,310 465,310 470,275 430,268 395,268Z",
  NV: "M180,255 L185,310 193,367 193,385 205,380 205,310 202,270Z",
  NH: "M862,150 L858,175 852,195 858,195 865,175 868,150Z",
  NJ: "M820,250 L815,275 810,295 820,280 825,260Z",
  NM: "M260,400 L260,470 330,470 330,400Z",
  NY: "M780,180 L770,210 785,230 808,230 825,220 835,210 840,195 830,188 810,190 790,185Z",
  NC: "M660,370 L690,360 730,355 760,360 770,368 755,378 730,385 700,388 672,385Z",
  ND: "M385,145 L385,195 460,195 460,145Z",
  OH: "M640,270 L635,310 638,340 650,345 658,328 660,300 655,275Z",
  OK: "M385,395 L430,395 475,395 475,430 440,438 400,440 385,430Z",
  OR: "M130,175 L130,240 185,255 180,215 168,190 150,178Z",
  PA: "M730,240 L730,275 780,290 810,275 810,245 790,235Z",
  RI: "M865,210 L862,218 870,218 870,210Z",
  SC: "M680,385 L700,388 720,395 735,400 728,410 710,415 695,412 680,400Z",
  SD: "M385,195 L385,255 460,255 465,240 462,198Z",
  TN: "M590,380 L595,387 630,390 660,387 680,385 680,400 660,397 630,400 600,400 590,395Z",
  TX: "M340,430 L355,430 385,430 400,440 440,438 475,430 490,445 500,468 505,495 498,520 480,538 460,548 440,550 420,542 400,530 385,520 370,510 358,498 348,480 342,458Z",
  UT: "M245,270 L245,355 305,355 305,310 290,285 270,270Z",
  VT: "M847,160 L845,190 852,195 858,195 862,175 858,162Z",
  VA: "M680,330 L710,325 755,315 775,305 785,310 770,330 755,345 730,355 700,358 680,355Z",
  WA: "M145,115 L135,155 130,175 168,190 175,170 185,145 178,120Z",
  WV: "M695,310 L700,325 710,340 720,345 718,360 700,358 690,350 680,340 680,320Z",
  WI: "M545,175 L540,205 548,225 565,240 580,235 585,215 578,195 565,180Z",
  WY: "M285,210 L285,275 355,275 355,210Z",
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

        {/* SVG Map */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full overflow-hidden rounded-xl border border-border bg-surface/30 p-4 sm:p-8">
            <svg
              viewBox="0 50 960 550"
              className="w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Object.entries(statePaths).map(([abbr, path]) => {
                const isTarget = targetAbbrs.has(abbr);
                const stateData = targetStates.find((s) => s.abbr === abbr);
                const isSelected = selected?.abbr === abbr;

                let fillClass = "#1f2937"; // default dark gray
                if (isTarget && stateData) {
                  if (stateData.urgency === "immediate") fillClass = isSelected ? "#059669" : "#10B981";
                  else if (stateData.urgency === "active") fillClass = isSelected ? "#059669" : "#10B981";
                  else fillClass = isSelected ? "#D97706" : "#F59E0B";
                }

                return (
                  <path
                    key={abbr}
                    d={path}
                    fill={isTarget ? fillClass : "#1a2332"}
                    stroke={isTarget ? (isSelected ? "#ffffff" : "#0B0F14") : "#0B0F14"}
                    strokeWidth={isTarget ? (isSelected ? 2 : 1) : 0.5}
                    className={`transition-all duration-200 ${
                      isTarget ? "cursor-pointer hover:opacity-80" : ""
                    }`}
                    onMouseEnter={() => stateData && setSelected(stateData)}
                    onMouseLeave={() => setSelected(null)}
                    onClick={() => stateData && setSelected(stateData)}
                  />
                );
              })}

              {/* State labels for target states */}
              {targetStates.map((state) => {
                const labelPositions: Record<string, [number, number]> = {
                  FL: [695, 480],
                  TX: [430, 490],
                  TN: [635, 392],
                  GA: [660, 430],
                  AR: [575, 435],
                  MS: [608, 455],
                  NV: [195, 330],
                };
                const pos = labelPositions[state.abbr];
                if (!pos) return null;
                return (
                  <text
                    key={state.abbr}
                    x={pos[0]}
                    y={pos[1]}
                    fill="#ffffff"
                    fontSize="12"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                  >
                    {state.abbr}
                  </text>
                );
              })}
            </svg>
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
