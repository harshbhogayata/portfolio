"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { writing, paper, meta } from "@/lib/data";

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
              Research and technical writing on cryptography, security, and the systems shaping the next internet.
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

          {/* Right — paper + articles */}
          <div className="lg:col-span-8 flex flex-col gap-8">

            {/* Research paper — featured */}
            <motion.a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-code border border-border rounded-sm p-6 hover:border-accent transition-colors duration-200"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EASE }}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono text-[10px] text-accent bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-sm">
                    research paper
                  </span>
                  <span className="font-mono text-[10px] text-muted">{paper.date}</span>
                </div>
                <div className="flex items-center gap-1 font-mono text-[11px] text-accent whitespace-nowrap flex-shrink-0">
                  read <ArrowUpRight size={11} />
                </div>
              </div>
              <h3
                className="font-display italic text-ink mb-2 leading-tight group-hover:text-accent transition-colors duration-150"
                style={{ fontSize: "clamp(17px, 1.8vw, 22px)" }}
              >
                {paper.title}
              </h3>
              <p className="font-sans text-sm text-muted leading-relaxed mb-3">
                {paper.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {paper.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-muted border border-border px-1.5 py-0.5 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>

            {/* Articles */}
            <div>
              <p className="font-mono text-[11px] text-muted tracking-widest mb-3">
                # Technical Series — Medium
              </p>
              <div className="w-full h-px bg-border" />
              <ul className="divide-y divide-border">
                {writing.map((article, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: EASE, delay: i * 0.05 }}
                  >
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-4"
                    >
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className="font-sans text-sm text-ink leading-snug group-hover:text-accent transition-colors duration-150">
                          {article.title}
                        </h3>
                        <ArrowUpRight
                          size={12}
                          className="text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex-shrink-0 mt-0.5"
                        />
                      </div>
                      <p className="font-sans text-xs text-muted leading-relaxed">
                        {article.excerpt}
                      </p>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="w-full h-px bg-border" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
