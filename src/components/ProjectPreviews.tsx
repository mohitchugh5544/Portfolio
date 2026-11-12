"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Activity,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Maximize2,
  Mic,
  ShoppingBag,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

/**
 * Full-height, vertically centered mock for Fitness+ Vision
 * with an enlarged, legible skeletal pose graphic and telemetry readouts.
 */
export function FitnessVisionMock() {
  return (
    <div className="flex h-full w-full flex-col justify-center rounded-xl border border-white/10 bg-[#090910] p-5 sm:p-6">
      {/* Top Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2.5">
          <Activity className="h-4 w-4 text-indigo-400 shrink-0" />
          <span className="text-sm font-medium text-white">
            Fitness+ Vision · Real-Time Pose Studio
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-sm font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          30 FPS Live
        </span>
      </div>

      {/* Enlarged Skeleton Visual + Legible Labels */}
      <div className="my-4 flex flex-col items-center justify-center rounded-xl border border-white/10 bg-[#06060b] px-4 py-5">
        <svg
          viewBox="0 0 260 190"
          className="h-52 w-full max-w-[300px] overflow-visible"
          role="img"
          aria-label="Biomechanical skeletal tracking diagram showing Shoulder 164 degrees, Hip 88.1 degrees, and Knee 92.4 degrees"
        >
          {/* Floor baseline */}
          <line
            x1="20"
            y1="172"
            x2="240"
            y2="172"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1.5"
          />

          {/* Knee angle guide arc */}
          <path
            d="M 105 112 A 22 22 0 0 1 112 142"
            fill="none"
            stroke="rgba(129, 140, 248, 0.75)"
            strokeWidth="2"
            strokeDasharray="4 4"
          />

          {/* Skeletal Bones */}
          <polyline
            fill="none"
            stroke="#6366f1"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="92,24 84,62 56,108 118,124 90,168"
          />

          {/* Keypoints & Legible Labels */}
          {[
            { x: 92, y: 24, label: "Head", lx: 112, ly: 28 },
            { x: 84, y: 62, label: "Shoulder 164°", lx: 104, ly: 66 },
            { x: 56, y: 108, label: "Hip 88.1°", lx: 76, ly: 104 },
            { x: 118, y: 124, label: "Knee 92.4°", lx: 136, ly: 128 },
            { x: 90, y: 168, label: "Ankle 79°", lx: 110, ly: 168 },
          ].map((pt, idx) => (
            <g key={idx}>
              <circle
                cx={pt.x}
                cy={pt.y}
                r="7.5"
                className="fill-indigo-500/30 stroke-indigo-400"
                strokeWidth="2"
              />
              <circle cx={pt.x} cy={pt.y} r="3" className="fill-white" />
              <text
                x={pt.lx}
                y={pt.ly}
                fill="#e4e4e7"
                fontSize="13.5"
                fontWeight="500"
                fontFamily="monospace"
              >
                {pt.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Bottom Readout Strip */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
          <div className="text-sm text-zinc-300">Exercises</div>
          <div className="mt-0.5 font-mono text-sm font-semibold text-white">
            Squat · Curl · Push-up
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
          <div className="text-sm text-zinc-300">Landmarks</div>
          <div className="mt-0.5 font-mono text-sm font-semibold text-white">
            33 Keypoints
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
          <div className="text-sm text-zinc-300">Speed</div>
          <div className="mt-0.5 font-mono text-sm font-semibold text-white">
            30 FPS Real-Time
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Full-height interactive mobile showcase for Riya Dresses Storefront.
 * Features a realistic mobile device mockup, carousel controls, and screen switcher.
 */
export function WebStorefrontMock({
  images = ["/rd-1.jpeg", "/rd-2.jpeg", "/rd-3.jpeg"],
}: {
  images?: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const screens = [
    { label: "Lookbook", caption: "Editorial Hero & Collection Showcase" },
    { label: "Catalog", caption: "Category Filters & Restock Inquiry" },
    { label: "Social", caption: "Embedded Atelier Instagram Reels" },
  ];

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightboxOpen, images.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentScreen = screens[currentIndex] || {
    label: `Screen ${currentIndex + 1}`,
    caption: `Screenshot ${currentIndex + 1}`,
  };

  return (
    <>
      <div className="flex h-full w-full flex-col justify-between rounded-xl border border-white/10 bg-[#090910] p-4 sm:p-5">
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-4 w-4 text-indigo-400 shrink-0" />
            <span className="text-sm font-medium text-white">
              Riya Dresses · Mobile Storefront
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Live App
            </span>
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label="Expand screenshot"
              title="Expand screenshot"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
            <a
              href="https://riya-dresses.web.app"
              target="_blank"
              rel="noopener noreferrer"
              title="Open Live App"
              aria-label="Open Live App"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Center Phone Frame Mockup */}
        <div className="my-auto py-2 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-[210px] sm:max-w-[230px] rounded-[2.2rem] border-[3px] border-zinc-700/80 bg-zinc-950 p-2 shadow-2xl shadow-indigo-950/40 ring-1 ring-white/10">
            {/* Top Speaker / Camera Notch */}
            <div className="mx-auto mb-1.5 flex h-3.5 w-20 items-center justify-end rounded-full bg-black px-2">
              <span className="h-1.5 w-1.5 rounded-full bg-zinc-800" />
            </div>

            {/* Screen Display Container */}
            <div
              onClick={() => setLightboxOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLightboxOpen(true);
                }
              }}
              aria-label={`Zoom ${currentScreen.label} screenshot`}
              className="group relative aspect-[9/18.5] max-h-[340px] sm:max-h-[370px] w-full cursor-zoom-in overflow-hidden rounded-[1.6rem] bg-zinc-900 border border-white/5"
            >
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`Riya Dresses — ${screens[index]?.caption ?? `screenshot ${index + 1}`}`}
                  fill
                  sizes="(max-width: 640px) 210px, 230px"
                  className={`object-cover object-top transition-opacity duration-300 ${
                    index === currentIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              ))}

              {/* Prev / Next Chevrons */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                    className="absolute left-1.5 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-1 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95 border border-white/15"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next screenshot"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-1 text-white backdrop-blur-md transition-all hover:bg-black/90 hover:scale-110 active:scale-95 border border-white/15"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Home Indicator */}
            <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-white/30" />
          </div>
        </div>

        {/* Bottom Screen Switcher & Status */}
        <div className="border-t border-white/10 pt-3 flex flex-col items-center gap-2">
          {/* Caption */}
          <div className="text-center">
            <span className="font-mono text-xs font-semibold text-indigo-400">
              {currentScreen.label}:
            </span>{" "}
            <span className="text-xs text-zinc-300">
              {currentScreen.caption}
            </span>
          </div>

          {/* Screen Dots */}
          <div className="flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to screenshot ${idx + 1}`}
                className={`transition-all duration-300 h-2 rounded-full ${
                  idx === currentIndex
                    ? "w-6 bg-indigo-400"
                    : "w-2 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Fullscreen Inspection */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label="Riya Dresses screenshot preview"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[90vh] flex-col items-center gap-3"
          >
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              aria-label="Close preview"
              className="absolute -top-2 -right-2 z-30 rounded-full border border-white/20 bg-zinc-900 p-2 text-zinc-200 shadow-lg transition-colors hover:bg-zinc-800 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative h-[75vh] w-[min(85vw,380px)] overflow-hidden rounded-2xl border border-white/15 bg-zinc-950 shadow-2xl">
              <Image
                src={images[currentIndex]}
                alt={`Riya Dresses — ${currentScreen.caption}`}
                fill
                sizes="380px"
                className="object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous screenshot"
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 p-2 text-white backdrop-blur-md hover:bg-black"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next screenshot"
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/70 p-2 text-white backdrop-blur-md hover:bg-black"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            <div className="rounded-full border border-white/10 bg-zinc-900/90 px-4 py-1.5 text-xs text-zinc-200">
              <span className="font-mono font-semibold text-indigo-400">
                {currentScreen.label}
              </span>{" "}
              · {currentScreen.caption} ({currentIndex + 1}/{images.length})
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * Full-height, vertically centered mock for Jarvis Multimodal Voice & OS Assistant.
 */
export function JarvisHudMock() {
  const audioBars = [40, 75, 55, 90, 60, 100, 70, 85, 45, 95, 65, 80, 50, 70, 35];

  return (
    <div className="flex h-full w-full flex-col justify-center rounded-xl border border-white/10 bg-[#090910] p-5 sm:p-6">
      {/* Top Window Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3.5">
        <div className="flex items-center gap-2.5">
          <Mic className="h-4 w-4 text-indigo-400 shrink-0" />
          <span className="text-sm font-medium text-white">
            Jarvis · Multimodal OS Neural Bridge
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-sm font-medium text-emerald-300">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Wake Word Active (&quot;Hey Jarvis&quot;)
        </span>
      </div>

      {/* Acoustic Orb & Tool-Execution Showcase */}
      <div className="my-4 flex flex-col gap-3.5 rounded-xl border border-white/10 bg-[#06060b] p-4">
        {/* Real-Time Audio Spectrum / Acoustic HUD */}
        <div className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3.5 py-2.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-400" />
            <span className="font-mono text-xs text-zinc-300">Acoustic HUD · 16kHz Stream</span>
          </div>
          <div className="flex items-end gap-1 h-5">
            {audioBars.map((height, i) => (
              <span
                key={i}
                style={{ height: `${height}%` }}
                className="w-1 rounded-full bg-gradient-to-t from-indigo-500 to-indigo-300 opacity-80"
              />
            ))}
          </div>
        </div>

        {/* User Voice Input Transcript */}
        <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/[0.05] p-3">
          <div className="flex items-center gap-2 text-xs font-medium text-indigo-300">
            <Mic className="h-3.5 w-3.5 shrink-0" />
            <span>Whisper int8 STT Transcript</span>
          </div>
          <p className="mt-1 text-sm font-medium text-zinc-100">
            &ldquo;Hey Jarvis, summarize the error on screen and set volume to 50%&rdquo;
          </p>
        </div>

        {/* Gemini Function Dispatching & Win32 Execution */}
        <div className="rounded-lg border border-white/10 bg-white/[0.02] p-3 space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-white/5 pb-1.5">
            <div className="flex items-center gap-1.5 text-indigo-400">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              <span className="font-mono font-medium">Gemini API · Tool Dispatch</span>
            </div>
            <span className="font-mono text-[11px] text-emerald-400">HTTP 200 OK</span>
          </div>
          <div className="space-y-1 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              <Terminal className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span>vision.inspect_screen() &rarr; GDI screenshot parsed</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-300">
              <Terminal className="h-3.5 w-3.5 text-indigo-400 shrink-0" />
              <span>win32.set_volume(level=50) &rarr; pycaw CoreAudio executed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Readout Strip */}
      <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
          <div className="text-sm text-zinc-300">Speech Engine</div>
          <div className="mt-0.5 font-mono text-sm font-semibold text-white">
            Whisper int8
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
          <div className="text-sm text-zinc-300">OS Automation</div>
          <div className="mt-0.5 font-mono text-sm font-semibold text-white">
            Win32 + CoreAudio
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-3.5 py-2.5">
          <div className="text-sm text-zinc-300">Remote Bridge</div>
          <div className="mt-0.5 font-mono text-sm font-semibold text-white">
            iOS Siri / Shortcuts
          </div>
        </div>
      </div>
    </div>
  );
}
