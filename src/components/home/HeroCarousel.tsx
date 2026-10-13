import React, { useState, useEffect, useRef, useCallback } from "react";
import { gsap, checkReducedMotion, EASE, DURATION } from "@/lib/gsap";
import { ArrowRightIcon, ArrowUpRightIcon, PlayIcon, PauseIcon } from "@/components/ui/Icons";
import productsData from "@/data/products.json";
import { store } from "@/data/store.config";

interface HeroCarouselProps {
  onSelectProduct: (product: any) => void;
  onExploreCategory: (categorySlug: string) => void;
}

export function HeroCarousel({ onSelectProduct, onExploreCategory }: HeroCarouselProps) {
  const slides = productsData.products.filter((p) => p.heroSlide);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isReduced = useRef(false);

  useEffect(() => {
    isReduced.current = checkReducedMotion();
    if (isReduced.current) setIsPlaying(false);
  }, []);

  // GSAP slide transition
  useEffect(() => {
    if (isReduced.current) return;

    slidesRef.current.forEach((slideNode, idx) => {
      if (!slideNode) return;
      const img = slideNode.querySelector("img");

      if (idx === currentIndex) {
        gsap.to(slideNode, {
          autoAlpha: 1,
          duration: 1.0,
          ease: EASE,
        });
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.08 },
            { scale: 1.0, duration: 1.6, ease: EASE }
          );
        }
      } else {
        gsap.to(slideNode, {
          autoAlpha: 0,
          duration: 0.8,
          ease: EASE,
        });
      }
    });
  }, [currentIndex]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying || isReduced.current) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPlaying, slides.length]);

  const currentProduct = slides[currentIndex] || slides[0];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[92vh] sm:min-h-screen bg-ink text-white flex flex-col justify-between overflow-hidden isolate"
      aria-roledescription="carousel"
      aria-label="Atelier Featured Pieces"
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
      }}
      tabIndex={0}
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            ref={(el) => (slidesRef.current[idx] = el)}
            className="absolute inset-0 transition-opacity"
            style={{ opacity: idx === 0 ? 1 : 0 }}
          >
            <img
              src={slide.images[0]}
              alt={slide.name}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.05]"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {/* Cinematic Scrim overlay */}
        <div
          className="absolute inset-0 z-10 bg-gradient-to-b from-ink/80 via-ink/40 to-ink/90 pointer-events-none"
          aria-hidden="true"
        />
        <div className="scrim-blur z-10" aria-hidden="true" />
      </div>

      {/* Hero Content - Centered */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-28 pb-32 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="label text-silver-200 text-xs tracking-[0.25em] mb-6">
          CASUALS • BLAZERS • KURTAS — {store.placeLine.toUpperCase()}
        </p>

        {/* Grand Headline with brushed metallic silver gradient */}
        <h1 className="t-display type-silver-dark max-w-3xl mb-6">
          <span className="block">Welcome to</span>
          <span className="block font-normal mt-1">{store.name} {store.tagline}</span>
        </h1>

        {/* Subhead */}
        <p className="t-body text-bone/90 max-w-md mx-auto mb-10 text-base sm:text-lg font-light tracking-wide">
          {store.promise}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => onExploreCategory("office-casuals")}
            className="btn btn-paper w-full sm:w-auto group"
          >
            <span>Shop Office Casuals</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onExploreCategory("kurta-pajama")}
            className="btn btn-ghost w-full sm:w-auto hover:bg-white/10"
          >
            <span>Shop Kurta Pajama</span>
          </button>
        </div>
      </div>

      {/* Slide Peek / Caption Card (Bottom Left) */}
      <div className="absolute left-6 sm:left-12 bottom-24 sm:bottom-12 z-20 hidden sm:block">
        <button
          onClick={() => onSelectProduct(currentProduct)}
          className="group flex items-center gap-4 text-left transition-all duration-300"
        >
          <div>
            <span className="label text-[0.65rem] tracking-[0.2em] text-silver-300 block">
              {currentProduct.fabric.toUpperCase()}
            </span>
            <span className="font-display text-lg text-bone group-hover:text-white transition-colors">
              {currentProduct.name}
            </span>
          </div>

          <span className="label flex items-center gap-1.5 rounded-full border border-white/30 bg-ink/50 px-3.5 py-1.5 text-bone backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-ink/75">
            <span>View</span>
            <ArrowUpRightIcon className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </span>
        </button>
      </div>

      {/* Slide Indicators & Controls (Bottom Right) */}
      <div className="relative z-20 px-6 sm:px-12 pb-8 flex items-center justify-between sm:justify-end gap-6 max-w-7xl mx-auto w-full">
        {/* Slide Counter */}
        <div className="label text-silver-300 text-xs tracking-widest hidden sm:flex items-center gap-2">
          <span>{String(currentIndex + 1).padStart(2, "0")}</span>
          <span className="text-silver-500">/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>

        {/* Progress Dots/Lines */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className="py-2 focus:outline-none"
            >
              <span
                className={`block h-[2px] transition-all duration-500 rounded-full ${
                  idx === currentIndex
                    ? "w-8 bg-white"
                    : "w-4 bg-white/30 hover:bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-bone hover:border-white/50 transition-colors"
        >
          {isPlaying ? <PauseIcon className="w-3 h-3" /> : <PlayIcon className="w-3 h-3" />}
          <span className="label text-[0.6rem]">{isPlaying ? "Pause" : "Play"}</span>
        </button>
      </div>
    </section>
  );
}
