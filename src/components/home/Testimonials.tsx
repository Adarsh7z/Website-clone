import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { store } from "@/data/store.config";

export function Testimonials() {
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
    <section ref={containerRef} id="testimonials" className="section-y bg-[#ffffff] border-b border-silver-100">
      <div className="shell">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="label text-muted text-xs tracking-[0.2em] mb-3">
            VOICES OF DISTINCTION
          </p>
          <h2 className="t-head text-ink font-light">
            What our patrons say.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {store.testimonials.map((t) => (
            <div
              key={t.id}
              className="testimonial-card p-8 bg-[#fafafa] rounded-sm border border-silver-100 flex flex-col justify-between hover:border-silver-300 transition-colors shadow-sm"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 text-ink mb-6" aria-label="5 star rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="text-sm">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-display text-xl text-ink/90 font-normal italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>

              {/* Author & Location */}
              <div className="pt-4 border-t border-silver-200/70">
                <p className="font-sans text-sm font-semibold text-ink">
                  {t.author}
                </p>
                <p className="label text-[0.65rem] tracking-wider text-muted mt-0.5">
                  {t.role} • {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
