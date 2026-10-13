import React, { useEffect, useRef } from "react";
import { gsap, EASE } from "@/lib/gsap";
import { CloseIcon, WhatsAppIcon, ArrowUpRightIcon } from "@/components/ui/Icons";
import { store } from "@/data/store.config";

interface FloatingMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
}

export function FloatingMenu({
  isOpen,
  onClose,
  onNavigate,
}: FloatingMenuProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const tl = gsap.timeline();
      tl.to(backdropRef.current, {
        autoAlpha: 1,
        duration: 0.35,
        ease: "power2.out",
      }).fromTo(
        panelRef.current,
        { x: "100%", autoAlpha: 0 },
        { x: "0%", autoAlpha: 1, duration: 0.45, ease: EASE },
        "-=0.2"
      ).fromTo(
        ".nav-menu-item",
        { y: 15, autoAlpha: 0 },
        { y: 0, autoAlpha: 1, duration: 0.35, stagger: 0.05, ease: EASE },
        "-=0.25"
      );
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { id: "home", label: "Home" },
    { id: "office-casuals", label: "Office Casuals" },
    { id: "blazers", label: "Blazers & Suiting" },
    { id: "kurta-pajama", label: "Kurta Pajama Sets" },
    { id: "featured-rail", label: "Selected Rail" },
    { id: "our-story", label: "Our Story" },
    { id: "pricing", label: "Bespoke Pricing" },
    { id: "testimonials", label: "Patron Reviews" },
    { id: "visit-store", label: "Visit The Store" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    onClose();
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm flex justify-end opacity-0"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="w-full max-w-sm sm:max-w-md h-full bg-[#0a0a0a] text-white flex flex-col justify-between p-8 border-l border-white/10 shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-8">
            <div>
              <span className="font-display text-2xl text-white block">
                {store.name}
              </span>
              <span className="label text-[0.6rem] tracking-[0.3em] text-silver-400">
                {store.tagline} • MENSWEAR
              </span>
            </div>

            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2 text-silver-400 hover:text-white transition-colors"
            >
              <CloseIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Items */}
          <nav className="space-y-4">
            {links.map((link) => (
              <div key={link.id} className="nav-menu-item">
                <button
                  onClick={() => handleLinkClick(link.id)}
                  className="w-full text-left font-display text-2xl text-bone/85 hover:text-white hover:translate-x-1.5 transition-all py-1 flex items-center justify-between group"
                >
                  <span>{link.label}</span>
                  <span className="text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </button>
              </div>
            ))}
          </nav>
        </div>

        {/* Footer Contact */}
        <div className="pt-8 border-t border-white/10 mt-8">
          <p className="label text-[0.65rem] tracking-[0.2em] text-silver-400 mb-3">
            ATELIER CONCIERGE
          </p>

          <a
            href={`https://wa.me/${store.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded bg-white/10 hover:bg-white/15 text-sm font-medium transition-colors mb-3"
          >
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <div>
              <p className="text-white text-xs font-semibold">Message on WhatsApp</p>
              <p className="text-silver-400 text-[0.65rem]">{store.phone}</p>
            </div>
          </a>

          <p className="text-xs text-silver-400 font-light">
            {store.address.line1}, {store.city}, {store.state}
          </p>
        </div>
      </div>
    </div>
  );
}
