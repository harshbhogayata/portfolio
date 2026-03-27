"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { writing, meta } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Writing() {
  return (
    <section id="writing" className="border-t border-border px-5 sm:px-8 lg:px-12 py-16 md:py-24">
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
              ## Writing
            </p>
            <h2
              className="font-display italic text-ink leading-tight mb-4"
              style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
            >
              Published
            </h2>
            <p className="font-sans text-sm text-muted leading-relaxed mb-4">
              Technical writing on cryptography, security, and the systems shaping the next internet.
            </p>
            <a
              href={meta.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-mono text-[11px] text-accent hover:underline underline-offset-2"
            >
              all articles <ArrowUpRight size={11} />
            </a>
          </motion.div>

          {/* Right — articles */}
          <div className="lg:col-span-8">
            <div className="w-full h-px bg-border" />
            <ul className="divide-y divide-border">
              {writing.map((article, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, ease: EASE, delay: i * 0.06 }}
                >
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block py-5"
                  >
                    <div className="flex items-start justify-between gap-4 mb-1.5">
                      <h3 className="font-sans text-sm text-ink font-medium leading-snug group-hover:text-accent transition-colors duration-150">
                        {article.title}
                      </h3>
                      <ArrowUpRight
                        size={13}
                        className="text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0 mt-0.5"
                      />
                    </div>
                    <p className="font-sans text-xs text-muted leading-relaxed mb-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="font-mono text-[10px] text-muted">{article.date}</span>
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-muted bg-code border border-border px-1.5 py-0.5 rounded-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </a>
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
