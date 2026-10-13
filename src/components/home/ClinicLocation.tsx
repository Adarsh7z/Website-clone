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
              <span className="text-[#14B8A6]">in Secunderabad.</span>
            </h2>

            <p className="text-base text-slate-300 font-normal leading-relaxed mb-8">
              Conveniently located at Fairmount Downtown, Bolarum. Dedicated visitor parking,
              accessible ground-floor entry, and direct call support at 040-27638169.
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
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {clinicData.address}
                  </p>
                  <p className="text-xs text-[#14B8A6] font-semibold mt-1">
                    Landmark: Fairmount Downtown
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
                  <h4 className="text-sm font-bold text-white mb-1">Consultation Hours</h4>
                  <div className="space-y-0.5">
                    {clinicData.hours.map((h, idx) => (
                      <p key={idx} className="text-xs text-slate-400">
                        <span className="text-slate-200 font-medium">{h.days}:</span> {h.time}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hotline */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#142226] border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">Office & Consultation Line</h4>
                  <a
                    href={`tel:${clinicData.phoneRaw}`}
                    className="text-sm sm:text-base text-[#14B8A6] hover:text-[#2DD4BF] font-extrabold transition-colors tracking-wide"
                  >
                    {clinicData.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={`tel:${clinicData.phoneRaw}`}
                className="btn-cyan text-sm py-3 px-6 shadow-cyan-glow"
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>Call Now: {clinicData.phone}</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(clinicData.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glass text-xs py-3 px-5"
              >
                <span>Open in Google Maps ↗</span>
              </a>
            </div>
          </div>

          {/* Right Map Column */}
          <div className="location-map-wrap w-full h-[380px] sm:h-[450px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-[#0E1416]">
            <iframe
              title="BrightSmile Dental Clinic Pavilion Map - Fairmount Downtown Secunderabad"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.2989948810596!2d78.48810077564602!3d17.540945783372653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85003d67f433%3A0xa5e59ad0e763ae41!2sFairmount%20Downtown!5e0!3m2!1sen!2sin!4v1779493339468!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0"
            />

            {/* Custom Location Overlay Card */}
            <div className="absolute top-4 right-4 bg-[#0E1416]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#14B8A6]/40 shadow-xl flex items-center gap-2.5 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-pulse" />
              <div>
                <p className="text-xs font-bold text-white leading-tight">Fairmount Downtown</p>
                <p className="text-[0.65rem] text-brand-muted">Bolarum, Secunderabad</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
