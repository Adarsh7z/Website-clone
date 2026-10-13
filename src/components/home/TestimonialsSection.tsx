import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { clinicData } from "@/data/dentalData";

export function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-card", {
        y: 40,
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
    <section ref={containerRef} id="testimonials" className="section-pad bg-[#0E1416] border-t border-white/5 relative">
      <div className="shell">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142226] border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>Verified Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Transformations We Are <br />
            <span className="text-[#14B8A6]">Proud to Protect.</span>
          </h2>
          <p className="text-base text-slate-300 font-normal">
            Read unedited reviews from executives, artists, and families who trust
            their oral health and aesthetics to BrightSmile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clinicData.testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card p-8 rounded-2xl bg-[#111A1D] border border-white/10 hover:border-[#14B8A6]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-400 text-sm mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                  <span className="text-xs text-brand-muted ml-2 font-mono">5.0 Verified</span>
                </div>

                {/* Treatment Tag */}
                <span className="text-[0.68rem] font-bold tracking-wider uppercase text-[#14B8A6] bg-[#142226] px-2.5 py-1 rounded mb-4 inline-block">
                  {t.treatment}
                </span>

                {/* Quote */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal italic mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Patient Profile */}
              <div className="pt-5 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.patientName}
                  className="w-11 h-11 rounded-full object-cover border border-[#14B8A6]/40"
                />
                <div>
                  <p className="text-sm font-bold text-white">
                    {t.patientName}
                  </p>
                  <p className="text-xs text-brand-muted">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
