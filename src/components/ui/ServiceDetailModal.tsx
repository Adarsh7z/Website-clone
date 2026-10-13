import React, { useEffect } from "react";
import { ServiceItem } from "@/data/dentalData";

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: () => void;
}

export function ServiceDetailModal({ service, onClose, onBook }: ServiceDetailModalProps) {
  useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [service]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0E1416] border border-[#14B8A6]/40 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="mb-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#14B8A6]">
            {service.category}
          </span>
          <h3 className="text-2xl font-bold text-white mt-1">
            {service.title}
          </h3>
          <span className="text-xs text-brand-muted bg-white/5 px-2.5 py-1 rounded-md mt-2 inline-block">
            ⏱ Typical Procedure Duration: {service.duration}
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
          {service.description}
        </p>

        <div className="mb-8 p-4 rounded-xl bg-[#142226] border border-white/10">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
            What is Included in This Session:
          </h4>
          <ul className="space-y-2.5">
            {service.features.map((f, i) => (
              <li key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                <span className="text-[#14B8A6] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onClose();
              onBook();
            }}
            className="btn-cyan flex-1 justify-center text-sm"
          >
            <span>Book This Service</span>
            <span>→</span>
          </button>
          <button
            onClick={onClose}
            className="btn-glass text-sm"
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
