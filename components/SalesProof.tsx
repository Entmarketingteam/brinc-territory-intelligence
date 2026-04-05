"use client";

import Image from "next/image";
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

// Local logo files use invert filter for dark bg visibility
// Clearbit fallback for logos we don't have locally
const brands: { name: string; src: string; local: boolean }[] = [
  { name: "Abercrombie & Fitch", src: "/images/logos/abercrombie.png", local: true },
  { name: "Lululemon", src: "/images/logos/lululemon.png", local: true },
  { name: "Adidas", src: "/images/logos/adidas.svg", local: true },
  { name: "Vuori", src: "/images/logos/vuori.png", local: true },
  { name: "Caraway", src: "/images/logos/caraway.png", local: true },
  { name: "Gruns", src: "/images/logos/gruns.png", local: true },
  { name: "Olipop", src: "/images/logos/olipop.png", local: true },
  { name: "Thorne", src: "/images/logos/thorne.svg", local: true },
  { name: "Target", src: "/images/logos/target.jpg", local: true },
  { name: "Nordstrom", src: "/images/logos/nordstrom.png", local: true },
  { name: "Athleta", src: "/images/logos/athleta.png", local: true },
  { name: "Divi", src: "/images/logos/divi.jpg", local: true },
  { name: "Nike", src: "https://logo.clearbit.com/nike.com?size=200", local: false },
  { name: "NIVEA", src: "https://logo.clearbit.com/nivea.com?size=200", local: false },
  { name: "Walmart", src: "https://logo.clearbit.com/walmart.com?size=200", local: false },
  { name: "Sephora", src: "https://logo.clearbit.com/sephora.com?size=200", local: false },
  { name: "Ulta", src: "https://logo.clearbit.com/ulta.com?size=200", local: false },
  { name: "Peloton", src: "https://logo.clearbit.com/onepeloton.com?size=200", local: false },
  { name: "Fabletics", src: "https://logo.clearbit.com/fabletics.com?size=200", local: false },
  { name: "AG1", src: "https://logo.clearbit.com/drinkag1.com?size=200", local: false },
  { name: "Stanley", src: "https://logo.clearbit.com/stanley1913.com?size=200", local: false },
  { name: "HelloFresh", src: "https://logo.clearbit.com/hellofresh.com?size=200", local: false },
  { name: "Spanx", src: "https://logo.clearbit.com/spanx.com?size=200", local: false },
  { name: "QVC", src: "https://logo.clearbit.com/qvc.com?size=200", local: false },
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
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {brands.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center p-4 rounded-lg border border-border/50 bg-surface/50 hover:border-border-light hover:bg-surface transition-colors min-h-[80px]"
              >
                {brand.local ? (
                  <Image
                    src={brand.src}
                    alt={brand.name}
                    width={120}
                    height={48}
                    className="max-w-[80px] max-h-[36px] w-auto h-auto object-contain brightness-0 invert opacity-80"
                    loading="lazy"
                  />
                ) : (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    src={brand.src}
                    alt={brand.name}
                    className="max-w-[80px] max-h-[36px] w-auto h-auto object-contain brightness-0 invert opacity-80"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                <span className="text-[9px] text-text-muted mt-2 text-center leading-tight">
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
