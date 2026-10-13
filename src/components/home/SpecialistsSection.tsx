import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, checkReducedMotion, EASE } from "@/lib/gsap";
import { clinicData } from "@/data/dentalData";
import doctorPhoto from "@/assets/dr-chandra-sekar-anam.png";

interface SpecialistsSectionProps {
  onOpenBooking?: () => void;
}

export function SpecialistsSection({ onOpenBooking }: SpecialistsSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const doc = clinicData.doctor;

  useGSAP(
    () => {
      if (checkReducedMotion()) return;

      gsap.from(".doc-header", {
        y: 35,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
      });

      gsap.from(".doc-portrait-card", {
        x: -35,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE,
        scrollTrigger: {
          trigger: ".doc-main-grid",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".doc-content-col", {
        x: 35,
        autoAlpha: 0,
        duration: 0.9,
        ease: EASE,
        scrollTrigger: {
          trigger: ".doc-main-grid",
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".doc-badge-item", {
        scale: 0.95,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: EASE,
        scrollTrigger: {
          trigger: ".doc-badges-wrap",
          start: "top 85%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="about"
      className="section-pad bg-gradient-to-b from-[#0E1416] via-[#0A1012] to-[#0D1517] border-t border-white/5 relative isolate overflow-hidden"
    >
      {/* Background radial glow */}
      <div className="cyan-ambient top-1/4 -right-20 opacity-30 pointer-events-none" aria-hidden="true" />
      <div className="cyan-ambient -bottom-40 -left-20 opacity-25 pointer-events-none" aria-hidden="true" />

      <div className="shell">
        {/* Section Eyebrow & Headline */}
        <div className="doc-header max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142226] border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
            <span>Senior Clinical & Academic Leadership</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Meet <span className="text-[#14B8A6]">{doc.name}</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {doc.title}. With decades of university teaching, national clinical leadership,
            and specialized restorative mastery, Dr. Anam provides evidence-based oral rehabilitation
            focused on lifelong biological durability.
          </p>
        </div>

        {/* Main Grid: Portrait (Left) + Detailed Credentials & Philosophy (Right) */}
        <div className="doc-main-grid grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* =========================================================================
              LEFT COLUMN (5 Cols): Real Doctor Photo Frame + Fast Qualifications
             ========================================================================= */}
          <div className="doc-portrait-card lg:col-span-5 flex flex-col gap-6">
            
            {/* The Photo Frame Card */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#14252A] to-[#0E1719] border border-[#14B8A6]/40 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              
              {/* Photo Container */}
              <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] w-full rounded-2xl overflow-hidden bg-[#0A1012]">
                <img
                  src={doctorPhoto}
                  alt="Dr. Chandra Sekar Anam, MDS - Senior Professor, Prosthodontist & Implantologist"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.04] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1719] via-transparent to-transparent opacity-75 pointer-events-none" />

                {/* Overhead halo accent */}
                <div className="absolute top-3 right-3 w-16 h-16 rounded-full bg-[#14B8A6]/20 filter blur-xl pointer-events-none" />

                {/* Bottom Floating Identity Chip on Photo */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0E1416]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 shadow-lg">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-sm sm:text-base font-extrabold text-white leading-tight">
                        {doc.shortName}
                      </h3>
                      <p className="text-[0.7rem] text-[#14B8A6] font-semibold mt-0.5">
                        {doc.academicRole}
                      </p>
                    </div>
                    <span className="text-[0.65rem] uppercase font-bold tracking-wider px-2 py-1 rounded bg-[#142226] text-emerald-300 border border-[#14B8A6]/30">
                      30+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>

              {/* Direct Consultation Call Action */}
              <div className="pt-4 px-1 pb-1">
                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="btn-cyan w-full justify-center text-sm py-3 px-5 shadow-cyan-glow group"
                  aria-label={`Call for consultation with Dr. Chandra Sekar Anam at ${clinicData.phone}`}
                >
                  <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call to Consult: {clinicData.phone}</span>
                </a>
              </div>
            </div>

            {/* Academic Qualifications Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#111A1D] border border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[#14B8A6] font-bold text-sm">🎓</span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Academic Qualifications
                </h4>
              </div>

              <div className="space-y-3.5">
                {doc.qualifications.map((q, idx) => (
                  <div key={idx} className="border-l-2 border-[#14B8A6]/60 pl-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-sm font-bold text-white">{q.degree}</span>
                      <span className="text-xs text-slate-300 font-medium">({q.institution})</span>
                    </div>
                    <p className="text-[0.72rem] text-slate-400 mt-0.5 leading-relaxed">
                      {q.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* =========================================================================
              RIGHT COLUMN (7 Cols): Leadership, Memberships, Specialisations, Philosophy
             ========================================================================= */}
          <div className="doc-content-col lg:col-span-7 flex flex-col gap-8">
            
            {/* Leadership & Professional Standing Banner */}
            <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-[#121E22] via-[#0E1719] to-[#14252A] border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-[#14B8A6] flex items-center gap-2">
                  <span>🏛️</span> National & State Leadership
                </span>
                <span className="text-[0.68rem] text-brand-muted bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
                  National Standing
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
                Elected Leadership in Premier Dental Bodies
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                {doc.leadership.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#0A1012]/80 border border-white/10 flex flex-col justify-between"
                  >
                    <span className="text-xs font-bold text-[#14B8A6] leading-tight">
                      {item.role}
                    </span>
                    <p className="text-xs text-slate-300 font-medium mt-1 leading-snug">
                      {item.organization}
                    </p>
                  </div>
                ))}
              </div>

              {/* Professional Memberships */}
              <div className="pt-4 border-t border-white/10">
                <h5 className="text-[0.7rem] uppercase font-bold tracking-wider text-slate-400 mb-3">
                  Key Professional Memberships & Fellowships
                </h5>
                <div className="doc-badges-wrap flex flex-wrap gap-2.5">
                  {doc.memberships.map((mem, idx) => (
                    <div
                      key={idx}
                      className="doc-badge-item inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#142226] border border-[#14B8A6]/30 text-xs text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                      <span className="font-semibold text-white">{mem.name}</span>
                      <span className="text-[0.68rem] text-slate-400">({mem.status})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Core Clinical Specialisations (2x2 Grid) */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Core Clinical Specialisations
                </h3>
                <span className="text-xs text-[#14B8A6] font-semibold">
                  Prosthodontic & Surgical Focus
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doc.specialisations.map((spec, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#111A1D] border border-white/10 hover:border-[#14B8A6]/40 hover:bg-[#142226] transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-8 h-8 rounded-lg bg-[#14282D] border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6] mb-3 font-bold text-xs">
                        0{idx + 1}
                      </div>
                      <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                        {spec.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-normal">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practice Philosophy & Ethical Positioning */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#111A1D] border border-white/10 relative">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#14B8A6]">
                  Practice Philosophy
                </span>
                <span className="text-xs text-slate-500">•</span>
                <span className="text-xs text-slate-300 font-semibold">
                  Academic Authority, Not Commercial Dentistry
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                {doc.philosophy.headline}
              </h4>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                {doc.philosophy.subheadline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-white/10">
                {doc.philosophy.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#14B8A6] font-bold text-sm leading-none mt-0.5">✓</span>
                    <div>
                      <h5 className="text-xs font-bold text-white mb-0.5">{pt.title}</h5>
                      <p className="text-[0.7rem] text-slate-400 leading-relaxed font-normal">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Fast Action Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#14282D] via-[#0E1719] to-[#14282D] border border-[#14B8A6]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
              Need a Specialist Consultation or Second Opinion?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Direct consultations with Senior Professor Dr. Chandra Sekar Anam, MDS at Fairmount Downtown, Secunderabad.
            </p>
          </div>

          <a
            href={`tel:${clinicData.phoneRaw}`}
            className="btn-cyan text-sm py-3 px-6 shadow-cyan-glow flex-shrink-0"
          >
            <span>Call Now: {clinicData.phone}</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
