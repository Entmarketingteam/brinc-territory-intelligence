"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "$1.8M+", label: "Revenue Managed" },
  { value: "132", label: "Brand Partners" },
  { value: "47", label: "Renewals (Top Account)" },
  { value: "60%+", label: "Repeat Rate" },
  { value: "83", label: "Brands in Peak Year" },
  { value: "4+ yrs", label: "Longest Relationship" },
];

const translation = [
  {
    brinc: "Account retention & renewal",
    ent: "47 renewals, $560K, 4 years — same account",
  },
  {
    brinc: "Multi-stakeholder selling",
    ent: "Same brands across 4+ creators — horizontal account expansion",
  },
  {
    brinc: "Signal-based prospecting",
    ent: "Holiday campaigns, competitor activity, product launches — timed outreach",
  },
  {
    brinc: "Grant / funding navigation",
    ent: "Usage rights, whitelisting, Spark Ads — educating buyers on revenue they didn't know existed",
  },
  {
    brinc: "Land and expand",
    ent: "Abercrombie: $1K → $41K over 11 deals. 41x account growth.",
  },
  {
    brinc: "Speed to lead",
    ent: "Sub-hour reply time in a space where creators get 50+ brand emails/day",
  },
  {
    brinc: "Pipeline management",
    ent: "132 brands tracked, renewal calendar, 5-touch re-outreach cadence",
  },
];

const brands = [
  { name: "Target", domain: "target.com" },
  { name: "Nike", domain: "nike.com" },
  { name: "Adidas", domain: "adidas.com" },
  { name: "NIVEA", domain: "nivea.com" },
  { name: "Walmart", domain: "walmart.com" },
  { name: "Nordstrom", domain: "nordstrom.com" },
  { name: "Sephora", domain: "sephora.com" },
  { name: "Lululemon", domain: "lululemon.com" },
  { name: "Abercrombie", domain: "abercrombie.com" },
  { name: "Peloton", domain: "onepeloton.com" },
  { name: "Ulta", domain: "ulta.com" },
  { name: "Athleta", domain: "athleta.gap.com" },
  { name: "Fabletics", domain: "fabletics.com" },
  { name: "AG1", domain: "drinkag1.com" },
  { name: "Stanley", domain: "stanley1913.com" },
  { name: "HelloFresh", domain: "hellofresh.com" },
  { name: "Spanx", domain: "spanx.com" },
  { name: "QVC", domain: "qvc.com" },
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
            I&apos;ve managed $1.8M in recurring revenue.
          </p>
          <p className="text-text-secondary max-w-2xl mb-4">
            As co-founder of ENT Agency, I built and managed a portfolio of 132
            brand partnerships across Fortune 500 retailers and top DTC brands.
            Different vertical. Identical sales discipline.
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
          <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 gap-3">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-3 rounded-lg border border-border/50 bg-surface/50 hover:border-border-light transition-colors"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://logo.clearbit.com/${brand.domain}?size=128`}
                  alt={brand.name}
                  className="w-8 h-8 object-contain brightness-0 invert opacity-70"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="text-[9px] text-text-muted mt-1.5 text-center leading-tight">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
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
