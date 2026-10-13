import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { clinicData } from "@/data/dentalData";

interface SpecialistsSectionProps {
  onOpenBooking: () => void;
}

export function SpecialistsSection({ onOpenBooking }: SpecialistsSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".specialist-card", {
        y: 45,
        autoAlpha: 0,
        duration: 0.85,
        ease: EASE,
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="section-pad bg-[#0D1517] border-t border-white/5 relative">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142226] border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-semibold tracking-wider uppercase mb-4">
              <span>Medical Faculty</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Meet Our Board-Certified <br />
              <span className="text-[#14B8A6]">Dental Specialists.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-300 font-normal max-w-md">
            Ivy League educated clinicians dedicated to conservative, pain-free oral
            medicine with artistic aesthetic outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinicData.specialists.map((doc, idx) => (
            <div
              key={idx}
              className="specialist-card bg-[#111A1D] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#14B8A6]/40 transition-all duration-300 group"
            >
              {/* Doctor Headshot Frame */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
                <img
                  src={doc.image}
                  alt={doc.name}
                  className="w-full h-full object-cover object-top filter brightness-[0.95] contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111A1D] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-4 left-5 right-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#14B8A6] block mb-1">
                    {doc.specialty}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {doc.name}
                  </h3>
                </div>
              </div>

              {/* Details & Bio */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-300 mb-2">
                    {doc.credentials}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed font-normal mb-6">
                    {doc.experience}
                  </p>
                </div>

                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="btn-glass w-full text-xs font-semibold justify-center hover:bg-[#14B8A6] hover:text-white hover:border-[#14B8A6] transition-all flex items-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call to Consult ({clinicData.phone})</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
