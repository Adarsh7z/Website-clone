import React from "react";
import { clinicData } from "@/data/dentalData";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenBooking: () => void;
}

export function Footer({ onNavigate, onOpenBooking }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-[#080D0E] text-white pt-20 pb-12 border-t border-white/10 select-none">
      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#142226] border border-[#14B8A6]/40 flex items-center justify-center text-[#14B8A6]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2C8 2 6 5 6 8c0 4 2 9 3 13 0 .5.5 1 1 1h.5c.5 0 1-.5 1.5-3 .5-2 1-3 2-3s1.5 1 2 3c.5 2.5 1 3 1.5 3h.5c.5 0 1-.5 1-1 1-4 3-9 3-13 0-3-2-6-6-6Z" />
                </svg>
              </div>
              <div>
                <span className="font-sans font-bold text-xl text-white tracking-tight leading-none block">
                  {clinicData.name}
                </span>
                <span className="font-sans text-[0.62rem] font-semibold text-brand-muted tracking-[0.25em] uppercase leading-none block mt-1">
                  {clinicData.tagline}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-sm mb-6">
              Healthy Smile, Happy Life. High-technology, pain-free clinical dentistry
              delivered with a warm human touch in our Manhattan pavilion.
            </p>

            <button
              onClick={onOpenBooking}
              className="btn-cyan text-xs py-2.5 px-5"
            >
              <span>Schedule Next Visit</span>
            </button>
          </div>

          {/* Clinical Departments */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-300 uppercase mb-5">
              DEPARTMENTS
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 font-normal">
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Preventive Dentistry
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Cosmetic & Whitening
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Invisalign Diamond Aligners
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Digital 3D Dental Implants
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Pediatric Care
                </button>
              </li>
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-300 uppercase mb-5">
              PRACTICE
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 font-normal">
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-[#14B8A6] transition-colors">
                  Clinical Innovations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-[#14B8A6] transition-colors">
                  Specialist Doctors
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("testimonials")} className="hover:text-[#14B8A6] transition-colors">
                  Patient Case Reviews
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("location")} className="hover:text-[#14B8A6] transition-colors">
                  Hours & Parking
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-300 uppercase mb-5">
              EMERGENCY CARE
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p>
                <span className="text-slate-200 font-medium block">Front Desk:</span>
                {clinicData.phone}
              </p>
              <p>
                <span className="text-red-400 font-medium block">24/7 Triage:</span>
                {clinicData.emergencyPhone}
              </p>
              <p>
                <span className="text-slate-200 font-medium block">Pavilion:</span>
                {clinicData.address}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>
            © 2026 {clinicData.fullBrand}. All rights reserved. HIPAA Compliant & ADA Accredited.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Painless Dentistry Protocol</span>
            <button
              onClick={scrollToTop}
              className="text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
