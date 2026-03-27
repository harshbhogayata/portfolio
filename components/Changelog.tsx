"use client";

import { motion } from "framer-motion";
import { changelog } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Changelog() {
  return (
    <section id="changelog" className="border-t border-border px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left — heading */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <p className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase mb-2">
              ## Changelog
            </p>
            <h2
              className="font-display italic text-ink leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              The Story
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed">
              How a B.Com grad became a full-stack engineer who ships secure products.
            </p>
          </motion.div>

          {/* Right — timeline */}
          <div className="lg:col-span-8">
            {changelog.map((entry, i) => (
              <motion.div
                key={entry.version}
                className="flex gap-5 md:gap-7"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: EASE, delay: i * 0.08 }}
              >
                {/* Dot + line */}
                <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
                  <div
                    className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${
                      entry.breaking
                        ? "bg-accent"
                        : "bg-paper border-2 border-border"
                    }`}
                  />
                  {i < changelog.length - 1 && (
                    <div className="w-px flex-1 bg-border mt-2 mb-0 min-h-[48px]" />
                  )}
                </div>

                {/* Content */}
                <div className={`pb-12 ${i === changelog.length - 1 ? "pb-0" : ""}`}>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`font-mono text-[11px] px-2 py-0.5 rounded-sm border ${
                        entry.breaking
                          ? "text-accent bg-orange-50 border-orange-200"
                          : "text-muted bg-code border-border"
                      }`}
                    >
                      {entry.version}
                    </span>
                    {entry.breaking && entry.label && (
                      <span className="font-mono text-[10px] text-accent font-medium tracking-wide uppercase">
                        {entry.label}
                      </span>
                    )}
                    <span className="font-mono text-[11px] text-muted">{entry.date}</span>
                  </div>

                  <h3
                    className="font-display italic text-ink mb-3 leading-tight"
                    style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
                  >
                    {entry.title}
                  </h3>

                  <ul className="space-y-2">
                    {entry.changes.map((change, j) => (
                      <motion.li
                        key={j}
                        className="flex items-start gap-2.5 font-sans text-sm text-muted"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.08 + j * 0.04 }}
                      >
                        <span className="font-mono text-accent mt-0.5 flex-shrink-0 text-xs">+</span>
                        {change}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
