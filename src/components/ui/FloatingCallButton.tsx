import React from "react";
import { clinicData } from "@/data/dentalData";

export function FloatingCallButton() {
  return (
    <aside
      aria-label="Direct Phone Consultation"
      className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 select-none"
    >
      <a
        href={`tel:${clinicData.phoneRaw}`}
        aria-label={`Call BrightSmile Dental Care at ${clinicData.phone}`}
        className="group relative flex items-center gap-3 bg-gradient-to-r from-[#14B8A6] to-[#0D9488] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-[0_10px_30px_rgba(20,184,166,0.45)] hover:shadow-[0_12px_36px_rgba(20,184,166,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 border border-white/25 focus:outline-none focus:ring-4 focus:ring-[#14B8A6]/40"
      >
        {/* Pulsing Concentric Radar Ring */}
        <span
          className="absolute -inset-1 rounded-full bg-[#14B8A6]/40 animate-ping pointer-events-none"
          aria-hidden="true"
        />

        {/* Phone Receiver Icon with Animated Shake on Group Hover */}
        <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-sm shadow-inner group-hover:rotate-12 transition-transform duration-300 flex-shrink-0">
          <svg
            className="w-5 h-5 text-white animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>

          {/* Active Status Dot */}
          <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-300 border-2 border-[#0D9488] rounded-full" />
        </div>

        {/* Text Stack */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-extrabold tracking-wide uppercase leading-tight drop-shadow-sm">
              Call Now
            </span>
            <span className="hidden sm:inline-block text-[0.68rem] bg-black/20 text-emerald-100 font-semibold px-2 py-0.5 rounded-full">
              9:30 AM – 6 PM
            </span>
          </div>
          <span className="text-xs sm:text-sm font-bold tracking-wider text-white/95 leading-none mt-0.5">
            {clinicData.phone}
          </span>
        </div>

        {/* Arrow vector indicator */}
        <span className="hidden md:inline-block text-white/80 group-hover:translate-x-1 group-hover:text-white transition-transform text-sm font-bold pl-1">
          ↗
        </span>
      </a>
    </aside>
  );
}
