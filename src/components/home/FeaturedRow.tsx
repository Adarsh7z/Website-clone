import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger, EASE } from "@/lib/gsap";
import { ArrowRightIcon, WhatsAppIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import productsData from "@/data/products.json";
import { store } from "@/data/store.config";

interface FeaturedRowProps {
  onSelectProduct: (product: any) => void;
  onExploreAll: () => void;
}

export function FeaturedRow({ onSelectProduct, onExploreAll }: FeaturedRowProps) {
  const containerRef = useRef<HTMLElement>(null);
  const railRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const products = productsData.products.filter((p) => {
    if (activeTab === "all") return true;
    return p.category === activeTab;
  });

  useGSAP(
    () => {
      gsap.from(".featured-header", {
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

      gsap.from(".product-card-item", {
        y: 40,
        autoAlpha: 0,
        duration: 0.8,
        ease: EASE,
        stagger: 0.08,
        scrollTrigger: {
          trigger: railRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef, dependencies: [activeTab] }
  );

  const filterTabs = [
    { id: "all", label: "All Curations" },
    { id: "office-casuals", label: "Office Casuals" },
    { id: "blazers", label: "Blazers & Suiting" },
    { id: "kurta-pajama", label: "Kurta Pajama" },
  ];

  return (
    <section ref={containerRef} id="featured-rail" className="section-y bg-[#fafafa] border-t border-silver-100">
      <div className="shell">
        {/* Header */}
        <div className="featured-header flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <p className="label text-muted text-xs tracking-[0.2em] mb-3">
              SELECTED BY US
            </p>
            <h2 className="t-head text-ink font-light">Picked for you</h2>
          </div>

          <button
            onClick={onExploreAll}
            className="label inline-flex items-center gap-2 text-ink hover:text-black transition-colors self-start md:self-auto group"
          >
            <span>VIEW ALL COLLECTIONS</span>
            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`label text-[0.68rem] tracking-wider px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-ink text-white shadow-md"
                  : "bg-white text-muted border border-silver-200/80 hover:border-silver-400 hover:text-ink"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid / Horizontal Rail */}
        <div
          ref={railRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.slice(0, 8).map((product) => (
            <div
              key={product.id}
              className="product-card-item group bg-paper rounded-sm overflow-hidden border border-silver-100 hover:border-silver-300 transition-all duration-300 flex flex-col hover:shadow-lg"
            >
              {/* Product Image Frame */}
              <div
                className="relative aspect-[3/4] w-full overflow-hidden bg-silver-100 cursor-pointer"
                onClick={() => onSelectProduct(product)}
              >
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Quick View overlay on desktop hover */}
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="label bg-white/95 text-ink px-4 py-2 rounded-full text-[0.65rem] tracking-widest shadow-md flex items-center gap-1.5 transition-transform group-hover:scale-105">
                    <span>Quick View</span>
                    <ArrowUpRightIcon className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Fabric Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="label bg-white/90 backdrop-blur-sm text-ink px-2.5 py-1 rounded-sm text-[0.6rem] tracking-widest">
                    {product.fabric.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-display text-xl text-ink font-normal hover:text-black cursor-pointer transition-colors"
                  >
                    {product.name}
                  </h3>
                  <p className="label text-[0.65rem] text-muted tracking-wider mt-1">
                    {product.fabricNote ? product.fabricNote.slice(0, 42) + "..." : product.fabric}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-silver-100 flex items-center justify-between">
                  <span className="font-medium text-sm text-ink">
                    {product.priceFormatted}
                  </span>

                  <a
                    href={`https://wa.me/${store.whatsappNumber}?text=Hello%20${encodeURIComponent(store.name)}%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}%20(${product.priceFormatted}).`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full text-muted hover:text-[#25D366] hover:bg-black/5 transition-colors"
                    title="Enquire on WhatsApp"
                    aria-label={`Enquire about ${product.name} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
