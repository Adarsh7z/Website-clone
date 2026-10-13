import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { store } from "@/data/store.config";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface PricingSectionProps {
  onSelectTier: (tierId: string) => void;
}

export function PricingSection({ onSelectTier }: PricingSectionProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".pricing-card", {
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
    <section ref={containerRef} id="pricing" className="section-y bg-[#f7f7f6] border-b border-silver-100">
      <div className="shell">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label text-muted text-xs tracking-[0.25em] mb-3">
            INVESTMENT IN ELEGANCE
          </p>
          <h2 className="t-head text-ink font-light mb-4">
            Transparent pricing & bespoke services.
          </h2>
          <p className="t-body text-muted text-sm sm:text-base font-light">
            No unexpected fitting fees or fine-print alterations. Every piece purchased
            includes complimentary sleeve shortening, collar adjustments, and pressing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {store.pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`pricing-card rounded-sm p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.popular
                  ? "bg-ink text-white shadow-2xl scale-[1.02] border border-silver-500/40"
                  : "bg-paper text-ink border border-silver-200/80 shadow-sm hover:border-silver-400"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="label bg-white text-ink px-4 py-1 rounded-full text-[0.62rem] tracking-[0.2em] shadow-md font-bold">
                    MOST REQUESTED
                  </span>
                </div>
              )}

              <div>
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-normal mb-1">
                    {tier.name}
                  </h3>
                  <p
                    className={`text-xs ${
                      tier.popular ? "text-silver-300" : "text-muted"
                    }`}
                  >
                    {tier.subtitle}
                  </p>
                </div>

                <div className="mb-8 pb-6 border-b border-silver-500/20">
                  <span
                    className={`label text-[0.65rem] block mb-1 ${
                      tier.popular ? "text-silver-300" : "text-muted"
                    }`}
                  >
                    {tier.period}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl sm:text-5xl font-light">
                      {tier.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-10">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-light">
                      <span
                        className={`text-base leading-none mt-0.5 ${
                          tier.popular ? "text-silver-200" : "text-ink"
                        }`}
                      >
                        ✓
                      </span>
                      <span className={tier.popular ? "text-bone/85" : "text-ink/80"}>
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onSelectTier(tier.id)}
                className={`w-full btn ${
                  tier.popular ? "btn-paper" : "btn-ink"
                }`}
              >
                <span>{tier.ctaText}</span>
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
