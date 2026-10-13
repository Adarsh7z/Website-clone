import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { clinicData } from "@/data/dentalData";

export function ClinicalExcellence() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".stat-box", {
        y: 35,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".stats-container",
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".tech-card", {
        y: 40,
        autoAlpha: 0,
        duration: 0.85,
        ease: EASE,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".tech-grid",
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  const innovations = [
    {
      title: "Computer-Guided Implant Navigation",
      tag: "SURGICAL RIGOR",
      desc: "Custom 3D titanium surgical stents ensure sub-millimeter implant placement with zero guesswork and accelerated healing.",
    },
    {
      title: "Digital Occlusal Articulation",
      tag: "BITE CALIBRATION",
      desc: "Scientific digital bite analysis eliminates premature contacts, protecting crowns and natural teeth against fractures.",
    },
    {
      title: "Monolithic Biocompatible Ceramics",
      tag: "DURABILITY FOCUS",
      desc: "High-translucency zirconium and lithium disilicate materials engineered to withstand decades of chewing forces.",
    },
    {
      title: "3D Digital Optical Scanners",
      tag: "PRECISION MARGINS",
      desc: "Micron-accurate digital impressions replace messy silicone trays, capturing exact dental margins instantly.",
    },
  ];

  return (
    <section ref={containerRef} id="excellence" className="section-pad bg-[#0E1416] border-t border-white/5 relative">
      <div className="shell">
        
        {/* Stats Row */}
        <div className="stats-container grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 sm:mb-28">
          {clinicData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="stat-box p-6 sm:p-8 rounded-2xl bg-[#142226]/60 border border-white/10 backdrop-blur-md flex flex-col justify-center items-center text-center"
            >
              <div className="flex items-baseline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                <span>{stat.value}</span>
                <span className="text-[#14B8A6]">{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142226] border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>Academic & Clinical Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Where Academic Precision Meets <br />
            <span className="text-[#14B8A6]">Lifelong Dental Longevity.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Led by a senior professor of prosthodontics, our clinic utilizes evidence-based
            protocols and high-precision restorative workflows to ensure every restoration endures.
          </p>
        </div>

        {/* Innovation Cards Grid */}
        <div className="tech-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {innovations.map((item, idx) => (
            <div
              key={idx}
              className="tech-card p-7 rounded-2xl bg-[#111A1D] border border-white/10 hover:border-[#14B8A6]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-[0.65rem] font-bold tracking-widest text-[#14B8A6] uppercase block mb-3">
                  {item.tag}
                </span>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#14B8A6] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
