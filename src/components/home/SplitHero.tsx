import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, checkReducedMotion, EASE } from "@/lib/gsap";
import { clinicData } from "@/data/dentalData";

interface SplitHeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export function SplitHero({ onOpenBooking, onExploreServices }: SplitHeroProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (checkReducedMotion()) return;

      const tl = gsap.timeline({
        defaults: { ease: EASE },
      });

      // Staggered entrance animation
      tl.from(".hero-badge", {
        y: 20,
        autoAlpha: 0,
        duration: 0.6,
      })
        .from(
          ".hero-h1-line",
          {
            y: 45,
            autoAlpha: 0,
            duration: 0.9,
            stagger: 0.12,
          },
          "-=0.4"
        )
        .from(
          ".hero-paragraph",
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-cta-group",
          {
            y: 25,
            autoAlpha: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-trust-metrics",
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ".hero-panorama-container",
          {
            scale: 1.05,
            autoAlpha: 0,
            duration: 1.3,
          },
          "<"
        )
        .from(
          ".hero-floating-card",
          {
            y: 30,
            autoAlpha: 0,
            duration: 0.75,
            stagger: 0.15,
          },
          "-=0.7"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen w-full bg-[#0E1416] text-white pt-24 lg:pt-28 flex items-stretch overflow-hidden isolate"
    >
      {/* Background Ambient Glows */}
      <div className="cyan-ambient -top-40 -left-40 z-0" aria-hidden="true" />
      <div className="cyan-ambient top-1/2 -right-20 opacity-40 z-0" aria-hidden="true" />

      {/* Main Container - The Split Hero Engine */}
      <div className="w-full flex flex-col lg:flex-row items-stretch relative z-10">
        
        {/* =========================================================================
            LEFT COLUMN (approx 45% width): Dark, moody, high-typography block
           ========================================================================= */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-12 lg:py-24 bg-gradient-to-br from-[#0D1517] via-[#0E1416] to-[#142226] relative z-20">
          
          {/* Top Eyebrow Chip */}
          <div className="hero-badge inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#142226] border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm w-fit">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span>Next-Generation Healthcare</span>
          </div>

          {/* Main H1 Header: "Healthy Smile, Happy Life" */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
            <span className="hero-h1-line block text-white drop-shadow-sm">
              Healthy Smile,
            </span>
            <span className="hero-h1-line block text-[#14B8A6] mt-1 drop-shadow-md">
              Happy Life
            </span>
          </h1>

          {/* Paragraph Copy: Wide-line-height geometric sub-heading */}
          <p className="hero-paragraph text-base sm:text-lg lg:text-xl text-slate-300 font-normal leading-relaxed max-w-xl mb-10">
            Advanced dental care with a personalized approach for you and your family.
            Experience state-of-the-art pain-free dentistry in our ultra-modern clinic.
          </p>

          {/* Primary Call-to-Action Button Group */}
          <div className="hero-cta-group flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              onClick={onOpenBooking}
              className="btn-cyan group relative overflow-hidden"
              aria-label="Book Your Appointment"
            >
              <span className="relative z-10 text-base font-semibold text-white tracking-wide">
                Book Your Appointment
              </span>
              <span className="relative z-10 text-lg transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
              {/* Subtle hover pulse shimmer */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={onExploreServices}
              className="btn-glass text-sm"
              aria-label="Explore Clinical Services"
            >
              <span>Explore Services</span>
            </button>
          </div>

          {/* Trust Metrics & Badges */}
          <div className="hero-trust-metrics pt-8 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Patient avatar"
                    className="w-8 h-8 rounded-full border-2 border-[#0E1416] object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center text-amber-400 text-xs">
                  <span>★★★★★</span>
                  <span className="ml-1.5 text-white font-bold">{clinicData.rating}</span>
                </div>
                <p className="text-[0.72rem] text-brand-muted">
                  from {clinicData.reviewCount} Patients
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#142226] border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6]">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-white">100% Pain-Free</p>
                <p className="text-[0.72rem] text-brand-muted">Sedation & Laser Tech</p>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            RIGHT COLUMN (approx 55% width): Wide high-resolution clinic panorama
           ========================================================================= */}
        <div className="hero-panorama-container w-full lg:w-[55%] relative min-h-[500px] lg:min-h-auto flex items-center overflow-hidden bg-[#0A1012]">
          
          {/* High-Resolution Operating Theater Photography */}
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1800&auto=format&fit=crop"
            alt="Pristine high-end dental operating theater with turquoise dental chair and medical lighting arms"
            className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.08]"
          />

          {/* The Halo Lighting Ring: Warm circular overhead lighting fixture */}
          <div className="halo-ring top-10 right-10 lg:right-24" aria-hidden="true" />
          <div className="halo-ring -bottom-20 left-10 opacity-70" aria-hidden="true" />

          {/* Stark white accent spot */}
          <div
            className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-white/10 filter blur-2xl pointer-events-none"
            aria-hidden="true"
          />

          {/* The "Overlapping Cut" Effect: Seamless blend from right photo into left container */}
          <div
            className="hidden lg:block absolute inset-y-0 left-0 w-36 overlapping-cut-left z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="lg:hidden absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0E1416] to-transparent z-10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-x-0 bottom-0 h-32 overlapping-cut-bottom z-10 pointer-events-none"
            aria-hidden="true"
          />

          {/* Floating Interactive Status Badge 1: Next Available Slot */}
          <div className="hero-floating-card absolute top-8 right-6 sm:right-10 z-20 bg-[#0E1416]/85 backdrop-blur-xl border border-white/15 rounded-xl p-3.5 sm:p-4 shadow-2xl max-w-xs transition-all duration-300 hover:border-[#14B8A6]/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#142226] border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6] flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[0.68rem] font-bold text-emerald-400 tracking-wider uppercase">
                    Available Today
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                  Next Opening: 2:30 PM
                </p>
                <p className="text-[0.7rem] text-slate-400">
                  With Dr. Sarah Mitchell, DDS
                </p>
              </div>
            </div>
          </div>

          {/* Floating Interactive Status Badge 2: Diagnostic & Comfort Tech */}
          <div className="hero-floating-card absolute bottom-10 left-6 sm:left-12 z-20 bg-[#0E1416]/90 backdrop-blur-xl border border-white/15 rounded-xl p-3.5 sm:p-4 shadow-2xl max-w-xs transition-all duration-300 hover:border-[#14B8A6]/60">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#14B8A6]/20 border border-[#14B8A6] flex items-center justify-center text-[#14B8A6] flex-shrink-0">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-semibold text-white">
                  3D CBCT Intraoral Scan
                </p>
                <p className="text-[0.72rem] text-slate-300 mt-0.5">
                  Zero-Radiation Micro-Sensor Diagnostics
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
