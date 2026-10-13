import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE, DURATION } from "@/lib/gsap";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import { store } from "@/data/store.config";

interface StoryBandProps {
  onReadStory: () => void;
}

export function StoryBand({ onReadStory }: StoryBandProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true,
        },
      });

      tl.from(".story-image-wrap", {
        opacity: 0,
        x: -30,
        duration: DURATION.slow,
        ease: EASE,
      }).from(
        ".story-content > *",
        {
          opacity: 0,
          y: 25,
          duration: DURATION.base,
          ease: EASE,
          stagger: 0.1,
        },
        "-=0.7"
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="our-story"
      className="section-y bg-[#0a0a0a] text-white overflow-hidden relative"
    >
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Workshop Image on Left */}
          <div className="story-image-wrap flex flex-col">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden rounded-sm bg-neutral-900 border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?q=80&w=1200&auto=format&fit=crop"
                alt="Tailor Atelier Workshop"
                className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.1]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <p className="label text-[0.65rem] tracking-[0.25em] text-silver-400 mt-3 uppercase">
              {store.placeLine}
            </p>
          </div>

          {/* Editorial Copy on Right */}
          <div className="story-content flex flex-col justify-center max-w-xl">
            <p className="label text-silver-300 text-xs tracking-[0.25em] mb-4">
              OUR STORY
            </p>

            <h2 className="t-head type-silver-dark font-light mb-6">
              A store you can walk into, now at your fingertips.
            </h2>

            <p className="t-body text-bone/80 text-base mb-5 font-light leading-relaxed">
              We have been fitting gentlemen in {store.city}, {store.state} for years.
              Not a franchise, not a warehouse — one atelier, a dedicated team of master
              craftsmen who know every hanger on it, and an unwavering habit of telling
              customers the honest truth about fit and fabric.
            </p>

            <p className="t-body text-bone/80 text-base mb-8 font-light leading-relaxed">
              This site is that same atelier, minus the physical commute. Browse what is on
              the rail today, pick a size, and message us. We will confirm your measurements,
              alter if it needs it at zero extra charge, and send it out ready to wear.
            </p>

            <div>
              <button
                onClick={onReadStory}
                className="btn btn-ghost inline-flex items-center gap-2 group"
              >
                <span>Read Our Story</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
