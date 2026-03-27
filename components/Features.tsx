"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Features() {
  return (
    <section id="features" className="border-t border-border px-5 sm:px-8 lg:px-12 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-12"
        >
          <p className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase mb-1">
            ## Features
          </p>
          <h2
            className="font-display italic text-ink leading-tight"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Shipped
          </h2>
        </motion.div>

        <div>
          {features.map((project, i) => (
            <motion.div
              key={project.version}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: EASE, delay: i * 0.05 }}
            >
              <div className="w-full h-px bg-border" />
              <div className="py-6 md:py-7">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6">

                  {/* Version + status — top on mobile, left col on desktop */}
                  <div className="md:col-span-2 flex md:flex-col items-start gap-2 pt-0.5">
                    <span className="font-mono text-[11px] text-accent bg-code border border-border px-2 py-0.5 rounded-sm whitespace-nowrap">
                      {project.version}
                    </span>
                    <span
                      className={`font-mono text-[10px] px-2 py-0.5 rounded-sm border whitespace-nowrap ${
                        project.status === "wip"
                          ? "text-amber-600 bg-amber-50 border-amber-200"
                          : "text-green-700 bg-green-50 border-green-200"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  {/* Title + description + deps */}
                  <div className="md:col-span-8">
                    <h3
                      className="font-display italic text-ink mb-2 leading-tight"
                      style={{ fontSize: "clamp(18px, 2vw, 26px)" }}
                    >
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.deps.map((dep) => (
                        <span
                          key={dep}
                          className="font-mono text-[11px] text-muted bg-code border border-border px-2 py-0.5 rounded-sm"
                        >
                          {dep}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="md:col-span-2 flex md:flex-col items-center md:items-end justify-start gap-3 pt-0.5">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-[11px] text-accent hover:underline underline-offset-2 whitespace-nowrap"
                      >
                        live <ArrowUpRight size={11} />
                      </a>
                    )}
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 font-mono text-[11px] text-muted hover:text-ink hover:underline underline-offset-2 transition-colors whitespace-nowrap"
                      >
                        repo <ArrowUpRight size={11} />
                      </a>
                    )}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
          <div className="w-full h-px bg-border" />
        </div>
      </div>
    </section>
  );
}
