"use client";

import { useEffect, useState } from "react";
import { meta } from "@/lib/data";

const links = [
  { label: "latest",     href: "#latest" },
  { label: "changelog",  href: "#changelog" },
  { label: "features",   href: "#features" },
  { label: "writing",    href: "#writing" },
  { label: "deps",       href: "#deps" },
  { label: "install",    href: "#install" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 px-6 md:px-12 h-12 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "border-b border-border bg-paper/90 backdrop-blur-sm" : ""
        }`}
      >
        {/* Shell prompt */}
        <a
          href="#"
          className="font-mono text-xs text-accent tracking-tight select-none"
          onClick={() => setOpen(false)}
        >
          {meta.name.split(" ")[0].toLowerCase()}@{meta.version}
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-[11px] text-muted hover:text-ink tracking-widest uppercase transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-ink transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </header>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-paper flex flex-col justify-center px-8 md:hidden">
          <nav className="flex flex-col gap-8">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="font-display italic text-ink"
                style={{ fontSize: "clamp(36px, 10vw, 56px)" }}
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="font-mono text-xs text-muted mt-16 tracking-widest">
            {meta.version} · {meta.status}
          </p>
        </div>
      )}
    </>
  );
}
