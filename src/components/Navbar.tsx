"use client";

import React, { useEffect, useState } from "react";
import { Github, Linkedin, Menu, Terminal, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface NavbarProps {
  onOpenCommand: () => void;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070a]";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "education", label: "Education", href: "#education" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-white/10 bg-[#07070a]/90 backdrop-blur-2xl">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Monogram */}
        <a
          href="#home"
          onClick={() => setMobileMenuOpen(false)}
          className={`flex min-h-[44px] items-center gap-3 rounded-lg px-1 text-sm font-semibold tracking-tight text-white group ${focusRing}`}
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 font-mono text-sm font-bold text-indigo-300 transition-colors group-hover:bg-indigo-500 group-hover:text-white">
            MC
          </div>
          <span className="text-base font-semibold text-white">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-300">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`inline-flex min-h-[44px] items-center rounded-lg px-3.5 transition-colors ${
                  isActive
                    ? "bg-indigo-500/15 text-white"
                    : "text-zinc-300 hover:bg-white/5 hover:text-white"
                } ${focusRing}`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions — Command hidden below md, icon-only on md tablets, full on lg+ */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCommand}
            aria-label="Open Command Menu"
            title="Open Command Menu (Ctrl+K)"
            className={`hidden md:inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
          >
            <Terminal className="h-4 w-4 text-indigo-400 shrink-0" />
            <span className="hidden lg:inline">Command</span>
            <kbd className="hidden lg:inline-block rounded bg-white/10 px-1.5 py-0.5 font-mono text-xs text-zinc-300">
              Ctrl K
            </kbd>
          </button>

          <a
            href={portfolioData.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white ${focusRing}`}
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={portfolioData.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className={`inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-300 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
          >
            <Linkedin className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className={`md:hidden inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#09090e]/95 px-4 py-3 backdrop-blur-2xl">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-[44px] items-center rounded-xl px-3.5 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-indigo-500/15 text-white"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  } ${focusRing}`}
                >
                  {item.label}
                </a>
              );
            })}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCommand();
              }}
              className={`mt-1 flex min-h-[44px] items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
            >
              <Terminal className="h-4 w-4 text-indigo-400 shrink-0" />
              <span>Open Command Menu</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
