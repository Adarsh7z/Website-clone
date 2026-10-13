import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";

export function Craftsmanship() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".craft-pillar", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE,
        stagger: 0.12,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  const pillars = [
    {
      title: "Honest Natural Fabrics",
      tagline: "WOVEN FOR CLIMATE",
      description:
        "We source solely natural wools, flax linens, and mulberry silks. Fabrics that breathe in intense weather, drape with natural weight, and age with grace.",
    },
    {
      title: "Bespoke In-House Fit",
      tagline: "COMPLIMENTARY ALTERATION",
      description:
        "Every body is unique. When you select a piece, our master cutter takes your sleeve, chest, and hem preferences and bastes them to measure at no added cost.",
    },
    {
      title: "Direct Tailor Concierge",
      tagline: "NO ANONYMOUS CARTS",
      description:
        "You talk directly with our atelier team on WhatsApp. Send photos of the event, ask about fabrics, and receive personalized advice before placing an order.",
    },
  ];

  return (
    <section ref={containerRef} className="section-y bg-[#ffffff] border-b border-silver-100">
      <div className="shell">
        <div className="max-w-2xl mb-14 text-center mx-auto">
          <p className="label text-muted text-xs tracking-[0.25em] mb-3">
            OUR PHILOSOPHY
          </p>
          <h2 className="t-head text-ink font-light">
            Crafted for the modern gentleman.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="craft-pillar p-8 bg-[#fbfbfa] rounded-sm border border-silver-100 flex flex-col justify-between hover:border-silver-300 transition-colors"
            >
              <div>
                <span className="label text-[0.65rem] tracking-[0.2em] text-silver-500 block mb-3">
                  0{idx + 1} / {pillar.tagline}
                </span>
                <h3 className="font-display text-2xl text-ink font-normal mb-3">
                  {pillar.title}
                </h3>
                <p className="t-body text-muted text-sm font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
