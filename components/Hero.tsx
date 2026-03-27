"use client";

import { motion } from "framer-motion";
import { meta } from "@/lib/data";

const EASE = [0.22, 1, 0.36, 1] as const;

function Rule({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="w-full h-px bg-border"
      style={{ transformOrigin: "left" }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    />
  );
}

// Syntax-highlighted package.json card — right side on desktop
function PackageCard() {
  const lines = [
    { key: '"name"',        val: '"harsh-bhogayata"',   type: "string" },
    { key: '"version"',     val: '"2.3.1"',              type: "string" },
    { key: '"license"',     val: '"open-to-work"',       type: "accent"  },
    { key: '"main"',        val: '"full-stack"',         type: "string" },
    { key: '"keywords"',    val: null,                   type: "array"  },
    { key: null,            val: '"react"',              type: "indent"  },
    { key: null,            val: '"django"',             type: "indent"  },
    { key: null,            val: '"typescript"',         type: "indent"  },
    { key: null,            val: '"docker"',             type: "indent"  },
    { key: null,            val: '"security"',           type: "indent"  },
    { key: '"available"',   val: 'true',                 type: "bool"   },
  ];

  return (
    <motion.div
      className="bg-surface border border-border rounded-sm p-5 font-mono text-[12px] leading-relaxed"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
    >
      <p className="text-muted mb-2">{"{"}</p>
      {lines.map((line, i) => (
        <p key={i} className={line.type === "indent" ? "pl-6" : "pl-3"}>
          {line.key && (
            <span className="text-muted">{line.key}: </span>
          )}
          {line.val && (
            <span
              className={
                line.type === "accent"
                  ? "text-accent"
                  : line.type === "bool"
                  ? "text-green-600"
                  : line.type === "indent"
                  ? "text-ink"
                  : "text-ink"
              }
            >
              {line.val}
              {line.type !== "array" && i < lines.length - 1 ? "," : ""}
            </span>
          )}
          {line.type === "array" && (
            <span className="text-muted"> {"["}</span>
          )}
        </p>
      ))}
      <p className="pl-3 text-muted">{"],"}</p>
      <p className="text-muted">{"}"}</p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[94vh] flex flex-col justify-center px-6 md:px-12 pt-20 pb-16">

      {/* File label */}
      <motion.p
        className="font-mono text-[11px] text-accent tracking-[0.25em] uppercase mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        CHANGELOG.md — {meta.version}
      </motion.p>

      {/* Two-column grid on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">

        {/* LEFT — name + meta */}
        <div className="md:col-span-7">

          {/* Name — overflow-hidden clips during slide-up, pb gives descender room */}
          <div className="overflow-hidden pb-2 mb-5">
            <motion.h1
              className="font-display italic text-ink leading-none tracking-tight"
              style={{ fontSize: "clamp(52px, 8.5vw, 130px)" }}
              initial={{ y: "108%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.85, ease: EASE, delay: 0.15 }}
            >
              {meta.name}
            </motion.h1>
          </div>

          <Rule delay={0.55} />

          {/* Meta row */}
          <motion.div
            className="flex flex-wrap items-center gap-x-4 gap-y-1 py-3 font-mono text-[11px] text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.75 }}
          >
            <span className="text-accent font-medium">{meta.version}</span>
            <span>·</span>
            <span>{meta.status}</span>
            <span>·</span>
            <span>{meta.location}</span>
            <span>·</span>
            <span>{meta.year}</span>
          </motion.div>

          <Rule delay={0.85} />

          {/* Role + tagline */}
          <motion.div
            className="mt-7 flex flex-col gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 1.0 }}
          >
            <p className="font-sans font-medium text-ink text-lg md:text-xl">
              {meta.role}
            </p>
            <p className="font-mono text-sm text-muted">
              # {meta.tagline}
            </p>
          </motion.div>

          {/* Activity badges */}
          <motion.div
            className="mt-8 flex flex-wrap gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            {["hackathons", "dev conferences", "open source", "civic tech"].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] text-muted bg-code border border-border px-2.5 py-1 rounded-sm"
              >
                + {tag}
              </span>
            ))}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            className="mt-14 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="relative w-px h-10 bg-border overflow-hidden">
              <motion.div
                className="absolute inset-x-0 top-0 h-full bg-accent"
                animate={{ y: ["-100%", "100%"] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              />
            </div>
            <span className="font-mono text-[10px] text-muted tracking-[0.2em] uppercase">
              scroll to read
            </span>
          </motion.div>
        </div>

        {/* RIGHT — package.json card (desktop only) */}
        <div className="hidden md:flex md:col-span-5 flex-col justify-center">
          <PackageCard />
        </div>
      </div>
    </section>
  );
}
