"use client";

import { motion } from "framer-motion";
import { dependencies } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const groups = Object.entries(dependencies) as [
  keyof typeof dependencies,
  { name: string; level: string }[]
][];

export default function Dependencies() {
  return (
    <section id="deps" className="border-t border-border px-5 sm:px-8 lg:px-12 py-16 md:py-24">
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
              ## Dependencies
            </p>
            <h2
              className="font-display italic text-ink leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              Stack
            </h2>
            <p className="font-mono text-[11px] text-muted leading-relaxed">
              # ★&nbsp; production-ready
              <br />
              # ◐&nbsp; actively growing
              <br />
              # ○&nbsp; familiar
            </p>
          </motion.div>

          {/* Right — groups grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-10">
              {groups.map(([group, items], gi) => (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE, delay: gi * 0.06 }}
                >
                  <p className="font-mono text-[11px] text-accent tracking-widest uppercase mb-2">
                    {group}
                  </p>
                  <div className="w-full h-px bg-border mb-3" />
                  <ul className="space-y-2">
                    {items.map((item, ii) => (
                      <motion.li
                        key={item.name}
                        className="flex items-center justify-between font-mono text-xs gap-2"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: gi * 0.06 + ii * 0.03 }}
                      >
                        <span className="text-ink truncate">{item.name}</span>
                        <span
                          className={`flex-shrink-0 ${
                            item.level === "★"
                              ? "text-accent"
                              : item.level === "◐"
                              ? "text-muted"
                              : "text-border"
                          }`}
                        >
                          {item.level}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
