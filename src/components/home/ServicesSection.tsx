import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { clinicData, ServiceItem } from "@/data/dentalData";

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenBooking: () => void;
}

export function ServicesSection({ onSelectService, onOpenBooking }: ServicesSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".services-header", {
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

      gsap.from(".service-card", {
        y: 45,
        autoAlpha: 0,
        duration: 0.85,
        ease: EASE,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="services"
      className="section-pad bg-[#0D1517] border-t border-white/5 relative isolate"
    >
      <div className="shell">
        {/* Section Header */}
        <div className="services-header max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#142226] border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-semibold tracking-wider uppercase mb-4">
            <span>Core Clinical Specialisations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Specialized Prosthodontic & <br className="hidden sm:inline" />
            <span className="text-[#14B8A6]">Implantology Services.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            From single-tooth implants and computer-guided full mouth rehabilitation to precision
            crowns, bridges, and complex bite corrections — delivered with academic authority and lifetime durability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {clinicData.services.map((service) => (
            <div
              key={service.id}
              className={`service-card group rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                service.popular
                  ? "bg-gradient-to-b from-[#14282D] to-[#0E1719] border-[#14B8A6]/50 shadow-cyan-glow"
                  : "bg-[#111A1D] border-white/10 hover:border-[#14B8A6]/40 hover:bg-[#142226]"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 right-6">
                  <span className="text-[0.65rem] font-bold tracking-widest uppercase bg-[#14B8A6] text-white px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <div>
                {/* Category & Duration */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#14B8A6]">
                    {service.category}
                  </span>
                  <span className="text-xs text-brand-muted bg-white/5 px-2.5 py-1 rounded-md">
                    ⏱ {service.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#14B8A6] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-400">
                      <span className="text-[#14B8A6] font-bold">✓</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Actions */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service)}
                  className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Details</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>

                <a
                  href={`tel:${clinicData.phoneRaw}`}
                  className="text-xs font-semibold text-[#14B8A6] hover:text-[#2DD4BF] transition-colors flex items-center gap-1"
                >
                  <span>Call to Enquire</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
