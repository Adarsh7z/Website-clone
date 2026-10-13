import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { ArrowRightIcon } from "@/components/ui/Icons";

export function HowOrdering() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".step-card", {
        y: 35,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE,
        stagger: 0.15,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  const steps = [
    {
      num: "01",
      title: "Browse the Rail",
      desc: "Find what moves you — from Italian wool blazers to hand-stitched linen kurtas. No artificial inventory: if you see it, it is in stock.",
    },
    {
      num: "02",
      title: "Direct WhatsApp Fit Check",
      desc: "Tap the WhatsApp button on any item. Message us your height, chest, or usual sizing. We personally verify whether it needs an adjustment.",
    },
    {
      num: "03",
      title: "Altered & Hand-Delivered",
      desc: "Our tailors alter sleeves, cuffs, or waists in-house. Your order is steamed, packaged in dust-proof garment bags, and dispatched safely.",
    },
  ];

  return (
    <section ref={containerRef} className="section-y bg-[#f5f5f3] border-b border-silver-200/60">
      <div className="shell">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <p className="label text-muted text-xs tracking-[0.2em] mb-3">
              EFFORTLESS PROCESS
            </p>
            <h2 className="t-head text-ink font-light">
              How ordering works.
            </h2>
          </div>
          <p className="t-body text-muted max-w-sm text-sm">
            No robotic checkouts or mysterious sizing charts. Real tailoring made simple over conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="step-card p-8 bg-paper rounded-sm border border-silver-100 flex flex-col justify-between shadow-sm relative group hover:border-silver-400 transition-colors"
            >
              <div>
                <span className="font-display text-4xl text-silver-300 font-light block mb-4 group-hover:text-ink transition-colors">
                  {step.num}
                </span>
                <h3 className="font-display text-2xl text-ink font-normal mb-3">
                  {step.title}
                </h3>
                <p className="t-body text-muted text-sm font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10 text-silver-400">
                  <ArrowRightIcon className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
