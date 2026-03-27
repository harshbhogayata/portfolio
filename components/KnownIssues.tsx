"use client";

import { motion } from "framer-motion";
import { knownIssues } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function KnownIssues() {
  return (
    <section className="border-t border-border px-5 sm:px-8 lg:px-12 py-16 md:py-24">
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
              ## Known Issues
            </p>
            <h2
              className="font-display italic text-ink leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              Honest
              <br />
              Bugs
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed">
              Every release has them. Here are mine — tracked and being fixed.
            </p>
          </motion.div>

          {/* Right — checklist */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <div className="w-full h-px bg-border" />
            <ul className="divide-y divide-border">
              {knownIssues.map((issue, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-4 py-5"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                >
                  <span
                    className={`font-mono text-sm mt-0.5 flex-shrink-0 ${
                      issue.fixed ? "text-green-600" : "text-muted"
                    }`}
                  >
                    {issue.fixed ? "[x]" : "[ ]"}
                  </span>
                  <span
                    className={`font-sans text-sm leading-relaxed ${
                      issue.fixed
                        ? "text-muted line-through decoration-border"
                        : "text-ink"
                    }`}
                  >
                    {issue.text}
                  </span>
                </motion.li>
              ))}
            </ul>
            <div className="w-full h-px bg-border" />
          </div>

        </div>
      </div>
    </section>
  );
}
