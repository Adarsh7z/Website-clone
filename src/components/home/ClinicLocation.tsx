import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { clinicData } from "@/data/dentalData";

export function ClinicLocation() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".location-content", {
        x: -35,
        autoAlpha: 0,
        duration: 0.85,
        ease: EASE,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        },
      });

      gsap.from(".location-map-wrap", {
        x: 35,
        autoAlpha: 0,
        duration: 0.85,
        ease: EASE,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="location" className="section-pad bg-[#0D1517] border-t border-white/5 relative">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Details Column */}
          <div className="location-content max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142226] border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Pavilion Location & Hours</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Visit Our Dental Pavilion <br />
              <span className="text-[#14B8A6]">in Manhattan.</span>
            </h2>

            <p className="text-base text-slate-300 font-normal leading-relaxed mb-8">
              Centrally located with validated valet parking and direct private elevator
              access to Suite 400. Walk-ins accommodated for acute emergencies.
            </p>

            {/* Details List */}
            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#142226] border border-white/10 flex items-center justify-center text-[#14B8A6] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Clinic Address</h4>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {clinicData.address}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#142226] border border-white/10 flex items-center justify-center text-[#14B8A6] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Operating Hours</h4>
                  <div className="space-y-0.5">
                    {clinicData.hours.map((h, idx) => (
                      <p key={idx} className="text-xs text-slate-400">
                        <span className="text-slate-200 font-medium">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Emergency Hotline */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#142226] border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">24/7 Dental Emergency Triage</h4>
                  <a
                    href={`tel:${clinicData.emergencyPhone}`}
                    className="text-xs sm:text-sm text-red-400 hover:text-red-300 font-bold transition-colors"
                  >
                    {clinicData.emergencyPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(clinicData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan text-xs"
              >
                <span>Open Google Maps</span>
              </a>
              <a
                href={`tel:${clinicData.phone}`}
                className="btn-glass text-xs"
              >
                <span>Call Clinic Desk</span>
              </a>
            </div>
          </div>

          {/* Right Map Column */}
          <div className="location-map-wrap w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0E1416]">
            <iframe
              title="BrightSmile Dental Clinic Pavilion Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-73.9720%2C40.7680%2C-73.9580%2C40.7780&layer=mapnik&marker=40.7725%2C-73.9650"
              className="w-full h-full border-0 filter invert contrast-[1.2] hue-rotate-[180deg] brightness-[0.85]"
              loading="lazy"
            />

            {/* Custom Location Overlay Card */}
            <div className="absolute top-4 right-4 bg-[#0E1416]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#14B8A6]/40 shadow-xl flex items-center gap-2.5 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white leading-tight">BrightSmile Pavilion</p>
                <p className="text-[0.65rem] text-brand-muted">Suite 400 • Valet Available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
