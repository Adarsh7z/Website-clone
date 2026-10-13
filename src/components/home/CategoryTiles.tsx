import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { ArrowUpRightIcon } from "@/components/ui/Icons";
import productsData from "@/data/products.json";

interface CategoryTilesProps {
  onSelectCategory: (categorySlug: string) => void;
}

export function CategoryTiles({ onSelectCategory }: CategoryTilesProps) {
  const containerRef = useRef<HTMLElement>(null);
  const categories = productsData.categories;

  useGSAP(
    () => {
      gsap.from(".collection-header", {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      });

      gsap.from(".collection-card", {
        y: 45,
        autoAlpha: 0,
        duration: 0.85,
        ease: EASE,
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".collections-grid",
          start: "top 82%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="collections" className="section-y bg-paper">
      <div className="shell">
        {/* Section Header with Split Headline & Manifesto */}
        <div className="collection-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-xl">
            <p className="label text-muted text-xs tracking-[0.2em] mb-3">
              THE COLLECTIONS
            </p>
            <h2 className="t-head text-ink font-light">
              Three collections, kept tight.
            </h2>
          </div>

          <p className="t-body text-muted max-w-md text-sm sm:text-base font-light">
            We only make and stock what we can sell you properly. That is why
            there are three collections and not forty.
          </p>
        </div>

        {/* 3 Interactive Category Cards */}
        <div className="collections-grid grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.slug}
              onClick={() => onSelectCategory(cat.slug)}
              className="collection-card group relative bg-bone rounded-sm overflow-hidden cursor-pointer flex flex-col transition-all duration-500 hover:shadow-xl"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-silver-100">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.95]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Corner Category Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="label bg-white/90 backdrop-blur-md text-ink px-3 py-1.5 rounded-full text-[0.65rem] tracking-widest shadow-sm">
                    {cat.shortName}
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="p-6 bg-paper border border-t-0 border-silver-100/80 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl text-ink font-normal mb-2 group-hover:text-black">
                    {cat.name}
                  </h3>
                  <p className="t-body text-muted text-sm line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-silver-100 flex items-center justify-between text-ink">
                  <span className="label text-[0.7rem] tracking-wider text-muted group-hover:text-ink transition-colors">
                    View Pieces
                  </span>
                  <div className="w-8 h-8 rounded-full border border-silver-300 flex items-center justify-center transition-all duration-300 group-hover:bg-ink group-hover:border-ink group-hover:text-white">
                    <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
