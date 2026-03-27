"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { meta } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Installation() {
  return (
    <section id="install" className="border-t border-border px-5 sm:px-8 lg:px-12 py-16 md:py-24">
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
              ## Installation
            </p>
            <h2
              className="font-display italic text-ink leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              Let&apos;s work
              <br />
              together.
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed">
              If you&apos;re building something real and need someone who ships — let&apos;s talk.
            </p>
          </motion.div>

          {/* Right — options */}
          <motion.div
            className="lg:col-span-8 flex flex-col justify-center space-y-10"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
          >
            {/* Option A */}
            <div>
              <p className="font-mono text-[11px] text-muted mb-3 tracking-widest">
                # Option A — Direct
              </p>
              <div className="w-full h-px bg-border mb-4" />
              <a
                href={`mailto:${meta.email}`}
                className="group inline-flex items-center gap-2 font-sans text-base md:text-lg text-ink border-b border-border pb-1 hover:border-accent hover:text-accent transition-colors duration-200"
              >
                {meta.email}
                <ArrowUpRight
                  size={16}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                />
              </a>
            </div>

            {/* Option B */}
            <div>
              <p className="font-mono text-[11px] text-muted mb-3 tracking-widest">
                # Option B — Browse first
              </p>
              <div className="w-full h-px bg-border mb-4" />
              <div className="space-y-3">
                <a
                  href={meta.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-mono text-sm text-ink hover:text-accent transition-colors duration-150"
                >
                  <span className="text-muted">$</span>
                  github.com/harshbhogayata
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  />
                </a>
                <a
                  href={meta.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 font-mono text-sm text-ink hover:text-accent transition-colors duration-150"
                >
                  <span className="text-muted">$</span>
                  linkedin.com/in/harshbhogayata
                  <ArrowUpRight
                    size={12}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-150"
                  />
                </a>
              </div>
            </div>

            {/* Status */}
            <div className="bg-code border border-border rounded-sm px-4 py-3">
              <p className="font-mono text-[11px] text-muted mb-1">currently</p>
              <p className="font-mono text-sm text-ink">
                Available · India or Remote · Open to most things
              </p>
            </div>
          </motion.div>

        </div>

        {/* Footer */}
        <motion.div
          className="mt-16 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="font-mono text-[11px] text-muted">
            {meta.name} · {meta.version} · {meta.year}
          </span>
          <span className="font-mono text-[11px] text-muted">
            built with next.js
          </span>
        </motion.div>
      </div>
    </section>
  );
}
