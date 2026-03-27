"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

const featured = [features[0], features[1]]; // TO (wip) + Research Paper

export default function Latest() {
  return (
    <section id="latest" className="border-t border-border px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-10"
        >
          <p className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase mb-1">
            ## Latest
          </p>
          <p className="font-sans text-sm text-muted">What&apos;s shipping in v2.x</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featured.map((project, i) => (
            <motion.a
              key={project.version}
              href={project.link ?? project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-surface border border-border rounded-sm p-6 md:p-8 hover:border-accent transition-colors duration-200"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: EASE, delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[11px] text-accent bg-code border border-border px-2 py-0.5 rounded-sm">
                    {project.version}
                  </span>
                  <span
                    className={`font-mono text-[10px] px-2 py-0.5 rounded-sm border ${
                      project.status === "wip"
                        ? "text-amber-600 bg-amber-50 border-amber-200"
                        : "text-green-700 bg-green-50 border-green-200"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0 mt-0.5"
                />
              </div>

              <h3
                className="font-display italic text-ink mb-3 leading-tight"
                style={{ fontSize: "clamp(20px, 2.2vw, 28px)" }}
              >
                {project.title}
              </h3>

              <p className="font-sans text-sm text-muted leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.deps.map((dep) => (
                  <span
                    key={dep}
                    className="font-mono text-[11px] text-muted bg-code px-2 py-0.5 rounded-sm"
                  >
                    {dep}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
