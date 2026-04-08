"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "$5.3M+", label: "Total Creator Revenue" },
  { value: "$1.9M+", label: "Brand Deal Revenue" },
  { value: "132", label: "Brand Partners" },
  { value: "47", label: "Renewals (Top Account)" },
  { value: "$4.5M+", label: "Amazon GMV Driven" },
  { value: "83", label: "Brands in Peak Year" },
];

const translation = [
  {
    brinc: "Account retention & renewal",
    ent: "LMNT: 47 renewals, $560K over 4 years — same account, never re-pitched. Hiya: 43 payments, $117K in usage rights alone. Lumineux: 27 payments across 3 years, still signing new contracts in 2026.",
  },
  {
    brinc: "Land and expand",
    ent: "Abercrombie: converted affiliate-only to paid campaigns after months of follow-up. $41K over 11 deals. Fabletics: $49K across 8 payments — now in 5-touch re-pitch sequence after contract concluded.",
  },
  {
    brinc: "Uncovering hidden revenue",
    ent: "Usage rights & whitelisting: Hiya runs Nicki's content as paid ads and pays for every renewal window. Most creators leave this money entirely on the table. ENT tracks, invoices, and renegotiates every cycle.",
  },
  {
    brinc: "Platform diversification",
    ent: "Q4 2024: $30K on 2 platforms (72% LTK). Q4 2025: $91K on 4 platforms (+202%). Amazon became the primary engine — $861K GMV in Q4 2025 alone (+202% YoY), $56K commission (+560% YoY). LTK dependency collapsed from 72% → 11%.",
  },
  {
    brinc: "Signal-based prospecting",
    ent: "Tracked DTC funding rounds, Expo West launches, competitor activity to time outreach. 132 brands managed proactively — not waiting for inbound.",
  },
  {
    brinc: "Multi-stakeholder selling",
    ent: "Brand deals involve procurement, marketing, legal, and finance. ENT managed contract execution (Docusign/PandaDoc), invoicing (Lumanu/PayPal), and re-negotiation across 132 brands in parallel.",
  },
  {
    brinc: "Pipeline management at scale",
    ent: "$5.3M+ in tax-verified creator revenue across 3 entities. 2025 alone: ~$2M (ENT Agency $636K + Entenmann Enterprise $934K + FWTFL $412K). ENT Agency doubled YoY: $299K → $636K (+113%). Peak year: FWTFL hit $1.06M in 2022. Entenmann Enterprise 2024: $799K.",
  },
];

// Brands with local logo files
const brandsWithLogos = [
  { name: "Target", src: "/images/logos/target.png" },
  { name: "Walmart", src: "/images/logos/walmart.png" },
  { name: "Nike", src: "/images/logos/nike.png" },
  { name: "Nordstrom", src: "/images/logos/nordstrom.png" },
  { name: "Sephora", src: "/images/logos/sephora.jpg" },
  { name: "Abercrombie & Fitch", src: "/images/logos/abercrombie.png" },
  { name: "Lululemon", src: "/images/logos/lululemon.png" },
  { name: "Adidas", src: "/images/logos/adidas.svg" },
  { name: "Athleta", src: "/images/logos/athleta.png" },
  { name: "Fabletics", src: "/images/logos/fabletics.png" },
  { name: "Vuori", src: "/images/logos/vuori.png" },
  { name: "LMNT", src: "/images/logos/lmnt.jpg" },
  { name: "HelloFresh", src: "/images/logos/hellofresh.png" },
  { name: "Hiya", src: "/images/logos/hiya.jpg" },
  { name: "Spanx", src: "/images/logos/spanx.png" },
  { name: "Ulta", src: "/images/logos/ulta.png" },
  { name: "Gruns", src: "/images/logos/gruns.png" },
  { name: "Ka'Chava", src: "/images/logos/kachava.png" },
  { name: "Merit Beauty", src: "/images/logos/merit.jpg" },
  { name: "Thrive Market", src: "/images/logos/thrivemarket.png" },
  { name: "Thorne", src: "/images/logos/thorne.svg" },
  { name: "Caraway", src: "/images/logos/caraway.png" },
  { name: "Olipop", src: "/images/logos/olipop.png" },
  { name: "Divi", src: "/images/logos/divi.jpg" },
];

export default function SalesProof() {
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
            Enterprise Sales Proof
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            $5.3M+ in documented creator revenue. 132 brand partners. One creator.
          </p>
          <p className="text-text-secondary max-w-2xl mb-4">
            As co-founder of ENT Agency, I built and managed a full-stack revenue operation across 3 legal entities — tax-verified P&amp;Ls across ENT Agency, Entenmann Enterprise, and FWTFL. ENT Agency doubled revenue YoY ($299K → $636K). 2025 combined: ~$2M across all entities. $4.5M+ in Amazon GMV driven. 132 brand partners. 4+ years of renewals. Different vertical. Identical sales discipline.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-lg border border-border bg-surface text-center"
            >
              <div className="text-xl sm:text-2xl font-mono font-bold text-accent">
                {stat.value}
              </div>
              <div className="text-[10px] text-text-muted mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Brand logos */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xs font-mono text-text-muted tracking-[0.15em] uppercase mb-6 text-center">
            Brands in Our Portfolio
          </h3>

          {/* Logos row — white cards on dark bg */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-3">
            {brandsWithLogos.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-4 rounded-xl bg-white hover:scale-[1.03] transition-transform min-h-[80px]"
              >
                <Image
                  src={brand.src}
                  alt={brand.name}
                  width={120}
                  height={48}
                  className="max-w-[80px] max-h-[36px] w-auto h-auto object-contain"
                  loading="lazy"
                />
                <span className="text-[9px] text-gray-400 mt-2 text-center leading-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>

          {/* Total count */}
          <p className="text-center text-sm text-text-muted mt-6 font-mono">
            Showing 24 of <span className="text-accent font-bold">132</span> total brand partners managed
          </p>
        </motion.div>

        {/* Translation table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xs font-mono text-text-muted tracking-[0.15em] uppercase mb-6">
            The Motion is the Same
          </h3>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-sm min-w-[500px]">
              <thead>
                <tr className="border-b border-border bg-surface">
                  <th className="text-left px-5 py-3 font-mono text-xs text-accent uppercase tracking-wider w-[35%]">
                    What BRINC Needs
                  </th>
                  <th className="text-left px-5 py-3 font-mono text-xs text-text-muted uppercase tracking-wider">
                    What I&apos;ve Already Done
                  </th>
                </tr>
              </thead>
              <tbody>
                {translation.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border/50 hover:bg-surface-light/50 transition-colors"
                  >
                    <td className="px-5 py-3 font-medium text-sm">
                      {row.brinc}
                    </td>
                    <td className="px-5 py-3 text-text-secondary text-sm">
                      {row.ent}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
