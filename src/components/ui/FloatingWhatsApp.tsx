import React, { useState } from "react";
import { WhatsAppIcon, CloseIcon } from "@/components/ui/Icons";
import { store } from "@/data/store.config";

export function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Quick popup dialog */}
      {showTooltip && (
        <div className="mb-3 w-72 bg-white rounded-lg shadow-2xl border border-silver-200 p-4 animate-fade-in text-ink relative">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close message"
            className="absolute top-3 right-3 text-silver-400 hover:text-ink"
          >
            <CloseIcon className="w-4 h-4" />
          </button>

          <p className="label text-[0.62rem] text-muted tracking-widest mb-1">
            ATELIER TAILOR CONCIERGE
          </p>
          <p className="font-sans text-xs text-ink mb-3 leading-relaxed">
            Need advice on sizes, custom alterations, or wedding attire? We're active on WhatsApp.
          </p>
          <a
            href={`https://wa.me/${store.whatsappNumber}?text=Hello%20${encodeURIComponent(store.name)}%2C%20I%20have%20a%20question%20about%20your%20collection.`}
            target="_blank"
            rel="noopener noreferrer"
            className="label text-[0.68rem] tracking-wider bg-ink text-white py-2 px-3.5 rounded-full flex items-center justify-center gap-2 hover:bg-neutral-800 transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Chat with Tailor</span>
          </a>
        </div>
      )}

      {/* Circular Floating Button */}
      <button
        onClick={() => setShowTooltip(!showTooltip)}
        onMouseEnter={() => setShowTooltip(true)}
        aria-label="Contact tailor on WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-ink text-white rounded-full flex items-center justify-center shadow-2xl border border-white/20 hover:scale-105 transition-all duration-300 relative group cursor-pointer"
      >
        <WhatsAppIcon className="w-6 h-6 sm:w-7 sm:h-7" />

        {/* Online Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#25D366] border-2 border-ink rounded-full" />
      </button>
    </div>
  );
}
