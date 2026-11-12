"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Search,
  Home,
  FolderGit2,
  Mail,
  Github,
  Linkedin,
  GraduationCap,
  Cpu,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setActiveIndex(0);
    }
  }, [isOpen]);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopiedEmail(true);
    setTimeout(() => {
      setCopiedEmail(false);
      onClose();
    }, 900);
  };

  const navigateTo = (selector: string) => {
    onClose();
    const el = document.querySelector(selector);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const actions = [
    {
      id: "home",
      label: "Go to Home",
      icon: Home,
      action: () => navigateTo("#home"),
    },
    {
      id: "projects",
      label: "View Featured Projects",
      icon: FolderGit2,
      action: () => navigateTo("#projects"),
    },
    {
      id: "skills",
      label: "View Technical Skills",
      icon: Cpu,
      action: () => navigateTo("#skills"),
    },
    {
      id: "education",
      label: "View Education & Timeline",
      icon: GraduationCap,
      action: () => navigateTo("#education"),
    },
    {
      id: "contact",
      label: "Go to Contact",
      icon: Mail,
      action: () => navigateTo("#contact"),
    },
    {
      id: "copy-email",
      label: copiedEmail
        ? "Copied mohitchughmmc@gmail.com!"
        : `Copy Email (${portfolioData.personal.email})`,
      icon: copiedEmail ? Check : Mail,
      action: copyEmail,
    },
    {
      id: "github",
      label: "Open GitHub (@mohitchugh5544)",
      icon: Github,
      external: true,
      action: () => {
        window.open(portfolioData.personal.socials.github, "_blank");
        onClose();
      },
    },
    {
      id: "linkedin",
      label: "Connect on LinkedIn",
      icon: Linkedin,
      external: true,
      action: () => {
        window.open(portfolioData.personal.socials.linkedin, "_blank");
        onClose();
      },
    },
  ];

  const filtered = actions.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown" && filtered.length > 0) {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % filtered.length);
      } else if (e.key === "ArrowUp" && filtered.length > 0) {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
      } else if (e.key === "Enter" && filtered[activeIndex]) {
        e.preventDefault();
        filtered[activeIndex].action();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filtered, activeIndex]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.15 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: -8 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-2xl border border-white/15 bg-[#101018] shadow-2xl"
          >
            {/* Search input header */}
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
              <Search className="h-4 w-4 text-indigo-400 shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search sections or actions..."
                className="w-full bg-transparent text-sm text-white placeholder-zinc-400 focus:outline-none"
              />
              <button
                onClick={onClose}
                className="inline-flex min-h-[36px] items-center rounded-lg border border-white/10 bg-white/5 px-2.5 text-sm text-zinc-300 hover:text-white"
              >
                Esc
              </button>
            </div>

            {/* Command list */}
            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-zinc-400">
                  No matching commands found.
                </div>
              ) : (
                <div className="space-y-1">
                  {filtered.map((item, idx) => {
                    const Icon = item.icon;
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={item.id}
                        onClick={item.action}
                        onMouseEnter={() => setActiveIndex(idx)}
                        className={`flex min-h-[44px] w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition-colors group ${
                          isActive
                            ? "bg-indigo-500/15 text-white"
                            : "text-zinc-200 hover:bg-indigo-500/15 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-indigo-400 shrink-0" />
                          <span className="font-medium">{item.label}</span>
                        </div>
                        {item.external ? (
                          <ArrowUpRight
                            className={`h-4 w-4 transition-colors ${
                              isActive
                                ? "text-indigo-400"
                                : "text-zinc-400 group-hover:text-indigo-400"
                            }`}
                          />
                        ) : (
                          <span
                            className={`text-sm transition-colors ${
                              isActive
                                ? "text-indigo-300"
                                : "text-zinc-400 group-hover:text-indigo-300"
                            }`}
                          >
                            ↵
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
