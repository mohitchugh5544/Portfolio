"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { getVisibleMetrics, portfolioData } from "@/data/portfolio";
import { SpotlightCard } from "@/components/SpotlightCard";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import {
  FitnessVisionMock,
  JarvisHudMock,
  WebStorefrontMock,
} from "@/components/ProjectPreviews";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07070a]";

const chipStyle =
  "inline-flex items-center rounded-md border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 text-sm font-medium text-zinc-300";

export default function PortfolioPage() {
  const [commandOpen, setCommandOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Global Ctrl+K / Cmd+K shortcut listener
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const fadeUp = {
    initial: prefersReducedMotion ? false : { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.35,
      ease: "easeOut" as const,
    },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#07070a] text-zinc-100 selection:bg-indigo-500/30">
      {/* Subtle Single-Hue Indigo Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[480px] w-[760px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />
      </div>

      {/* Fixed Navbar */}
      <Navbar onOpenCommand={() => setCommandOpen(true)} />

      {/* Command Palette Modal (Ctrl + K) */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
      />

      {/* Main Content Container */}
      <main className="relative z-10 mx-auto max-w-5xl px-4 pt-16 sm:px-6">
        {/* ================================================================
            SECTION 1: HERO (TWO-COLUMN DESKTOP, PHOTO ABOVE ON MOBILE)
           ================================================================ */}
        <motion.section
          id="home"
          {...fadeUp}
          className="scroll-mt-24 border-b border-white/10 py-16 md:py-24 lg:py-28"
        >
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
            {/* Photo Column: Above text on mobile (smaller), Right column on desktop */}
            <div className="order-1 md:order-2 md:col-span-4 flex md:justify-end">
              <div className="relative h-28 w-28 sm:h-32 sm:w-32 md:h-60 md:w-60 lg:h-64 lg:w-64 shrink-0 overflow-hidden rounded-2xl border border-white/15 bg-[#11111a] aspect-square">
                <Image
                  src="/profile.jpg"
                  alt={portfolioData.personal.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 128px, 256px"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Text Column: Below photo on mobile, Left column on desktop */}
            <div className="order-2 md:order-1 md:col-span-8">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-sm font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>{portfolioData.personal.availability}</span>
              </div>

              {/* Name & Headline */}
              <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {portfolioData.personal.name}
              </h1>

              <p className="mt-3 text-lg font-medium text-indigo-400 sm:text-xl">
                {portfolioData.personal.role}
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-200 sm:text-lg">
                {portfolioData.personal.bio}
              </p>

              {/* Hero Actions: View Projects, Download Resume, GitHub, LinkedIn */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <a
                  href="#projects"
                  className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 ${focusRing}`}
                >
                  <span>View Projects</span>
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
                >
                  <Download className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>Download Resume</span>
                </a>

                <div className="flex items-center gap-3">
                  <a
                    href={portfolioData.personal.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[44px] flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white ${focusRing}`}
                  >
                    <Github className="h-4 w-4 shrink-0" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={portfolioData.personal.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[44px] flex-1 sm:flex-initial items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
                  >
                    <Linkedin className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* ================================================================
            SECTION 2: FEATURED PROJECTS
           ================================================================ */}
        <section
          id="projects"
          className="scroll-mt-24 border-b border-white/10 py-16 md:py-24 lg:py-28"
        >
          <div>
            <p className="text-sm font-medium text-indigo-400">Projects</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Featured Work
            </h2>
            <p className="mt-2 text-base text-zinc-300">
              Selected AI computer vision and full-stack web systems I&apos;ve designed and shipped.
            </p>
          </div>

          {/* Project Cards List */}
          <div className="mt-8 space-y-8">
            {portfolioData.projects.map((project, index) => (
              <SpotlightCard
                key={project.id}
                delay={index * 0.08}
                className="p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch">
                  {/* Left Column: Text + Metrics + Bottom Action Buttons */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="mt-1 text-base font-medium text-indigo-400">
                        {project.subtitle}
                      </p>

                      <p className="mt-3 text-base leading-relaxed text-zinc-200">
                        {project.description}
                      </p>

                      {/* Key Engineering Highlights */}
                      <ul className="mt-4 space-y-2">
                        {project.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm leading-relaxed text-zinc-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-indigo-400 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Optional Project Metrics (hides TODO placeholders automatically) */}
                      {getVisibleMetrics(project).length > 0 && (
                        <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                          {getVisibleMetrics(project).map((m) => (
                            <div
                              key={m.label}
                              className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-2.5"
                            >
                              <div className="text-sm text-zinc-300">
                                {m.label}
                              </div>
                              <div className="mt-0.5 text-sm font-medium text-white">
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Lightened Tech Tags */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className={chipStyle}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Conditional Action Buttons Anchored at the Bottom of the Card */}
                    {(project.liveUrl || project.githubUrl) && (
                      <div className="flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row sm:items-center">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-indigo-500 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-400 ${focusRing}`}
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="h-4 w-4 shrink-0" />
                          </a>
                        )}

                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-zinc-200 transition-colors hover:border-white/25 hover:bg-white/[0.08] hover:text-white ${focusRing}`}
                          >
                            <Github className="h-4 w-4 shrink-0" />
                            <span>View Code</span>
                          </a>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Video Recording (if provided), Image, or Full-Height Mock */}
                  <div className="lg:col-span-6 flex h-full">
                    {project.videoUrl ? (
                      <video
                        src={project.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`${project.title} demo recording`}
                        className="h-full w-full rounded-xl border border-white/10 object-cover"
                      />
                    ) : project.previewType === "fitness-vision" ? (
                      <FitnessVisionMock />
                    ) : project.previewType === "jarvis-hud" ? (
                      <JarvisHudMock />
                    ) : project.previewType === "web-storefront" ? (
                      <WebStorefrontMock images={project.images} />
                    ) : project.imageUrl ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={project.imageUrl}
                        alt={`${project.title} preview`}
                        className="h-full w-full rounded-xl border border-white/10 object-cover"
                      />
                    ) : (
                      <WebStorefrontMock images={project.images} />
                    )}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* ================================================================
            SECTION 3: SKILLS
           ================================================================ */}
        <motion.section
          id="skills"
          {...fadeUp}
          className="scroll-mt-24 border-b border-white/10 py-16 md:py-24 lg:py-28"
        >
          <div>
            <p className="text-sm font-medium text-indigo-400">Skills</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Technical Stack
            </h2>
            <p className="mt-2 text-base text-zinc-300">
              Languages, frameworks, and tools I work with regularly.
            </p>
          </div>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {portfolioData.skills.map((group) => (
              <div
                key={group.category}
                className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-4">
                  <h3 className="text-base font-semibold text-white">
                    {group.category}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-300">
                    {group.description}
                  </p>
                </div>

                {/* Static Row of Lightened Tech Chips */}
                <div className="flex flex-wrap gap-2 md:col-span-8">
                  {group.items.map((skill) => (
                    <span key={skill} className={chipStyle}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================================================================
            SECTION 4: EDUCATION & TIMELINE
           ================================================================ */}
        <motion.section
          id="education"
          {...fadeUp}
          className="scroll-mt-24 border-b border-white/10 py-16 md:py-24 lg:py-28"
        >
          <div>
            <p className="text-sm font-medium text-indigo-400">Education</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Academic Background &amp; Experience
            </h2>
          </div>

          <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {portfolioData.timeline.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 gap-4 py-7 md:grid-cols-12 md:items-start"
              >
                <div className="md:col-span-3">
                  <div className="font-mono text-sm font-medium text-zinc-300">
                    {item.period}
                  </div>
                  {item.current && (
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-0.5 text-sm font-medium text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      <span>Current</span>
                    </div>
                  )}
                </div>

                <div className="md:col-span-9">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <div className="mt-1 text-sm font-medium text-indigo-400">
                    {item.organization}
                  </div>
                  <p className="mt-3 text-base leading-relaxed text-zinc-200">
                    {item.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className={chipStyle}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ================================================================
            SECTION 5: CONTACT SECTION
           ================================================================ */}
        <motion.section
          id="contact"
          {...fadeUp}
          className="scroll-mt-24 py-16 md:py-24 lg:py-28"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-indigo-400">Contact</p>
            <h2 className="mt-1 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-200">
              I&apos;m currently looking for AI/ML and Software Engineering
              internship opportunities. Feel free to reach out via email or
              connect with me on LinkedIn and GitHub.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400 ${focusRing}`}
              >
                <Mail className="h-4 w-4 shrink-0" />
                <span>Send an Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-300">
                      Copied {portfolioData.personal.email}
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400 shrink-0" />
                    <span>Copy {portfolioData.personal.email}</span>
                  </>
                )}
              </button>

              <a
                href={portfolioData.personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-indigo-500/40 hover:bg-indigo-500/10 hover:text-white ${focusRing}`}
              >
                <Linkedin className="h-4 w-4 text-indigo-400 shrink-0" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>

              <a
                href={portfolioData.personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-zinc-200 transition-colors hover:border-white/30 hover:bg-white/[0.08] hover:text-white ${focusRing}`}
              >
                <Github className="h-4 w-4 shrink-0" />
                <span>GitHub</span>
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm text-zinc-300 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {portfolioData.personal.name}. B.Tech
            CSE (AI &amp; ML) · Class of 2028.
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setCommandOpen(true)}
              className={`min-h-[44px] rounded-lg px-2 font-mono text-sm text-zinc-300 transition-colors hover:text-indigo-400 ${focusRing}`}
            >
              Press Ctrl + K
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
}
