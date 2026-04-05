"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    src: "/images/guardian-station.jpg",
    alt: "BRINC Guardian Responder Station — autonomous DFR deployment",
    label: "Guardian Responder Station",
    desc: "Autonomous DFR deployment — Starlink connected, 8-mile range",
  },
  {
    src: "/images/guardian-camera.jpg",
    alt: "BRINC Guardian camera system — multi-sensor payload",
    label: "Guardian Camera System",
    desc: "Industry-leading multi-sensor payload for real-time situational awareness",
  },
  {
    src: "/images/guardian-landing.jpg",
    alt: "BRINC Guardian on landing pad at emergency services facility",
    label: "Guardian Field Deployment",
    desc: "Deployed at public safety facilities — ready for 911 response in under 2 minutes",
  },
  {
    src: "/images/lemur-case.png",
    alt: "BRINC Lemur tactical drone in transport case",
    label: "Lemur 2 Tactical Kit",
    desc: "SWAT-ready indoor reconnaissance drone — the product that started it all",
  },
];

export default function ProductGallery() {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xs font-mono text-text-muted tracking-[0.2em] uppercase mb-3">
            The Hardware
          </h2>
          <p className="text-xl sm:text-2xl font-bold">
            What I&apos;m selling. What I believe in.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {products.map((product, i) => (
            <motion.div
              key={i}
              className="relative group rounded-xl overflow-hidden border border-border bg-surface"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                <Image
                  src={product.src}
                  alt={product.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-sm font-bold mb-1">{product.label}</h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {product.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
