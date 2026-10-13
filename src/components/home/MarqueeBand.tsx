import React, { useRef, useEffect } from "react";
import { gsap, checkReducedMotion } from "@/lib/gsap";
import { store } from "@/data/store.config";

export function MarqueeBand() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    if (checkReducedMotion() || !trackRef.current) return;

    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 28,
      repeat: -1,
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  const items = [
    ...store.marqueeItems,
    ...store.marqueeItems,
    ...store.marqueeItems,
  ];

  return (
    <div
      className="w-full bg-[#fbfbfa] border-y border-silver-100 py-4.5 overflow-hidden select-none"
      onMouseEnter={() => tweenRef.current?.pause()}
      onMouseLeave={() => tweenRef.current?.play()}
      aria-label="Atelier features marquee"
    >
      <div
        ref={trackRef}
        className="flex items-center gap-8 whitespace-nowrap will-change-transform"
        style={{ width: "max-content" }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="label text-[0.7rem] tracking-[0.22em] text-muted font-medium hover:text-ink transition-colors">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-silver-300" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
