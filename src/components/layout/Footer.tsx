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
                <span className="font-sans text-[0.62rem] font-semibold text-[#14B8A6] tracking-[0.18em] uppercase leading-none block mt-1">
                  DR. CHANDRA SEKAR ANAM, MDS
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-sm mb-6">
              Senior Professor, Prosthodontist & Implantologist. Decades of university teaching,
              national leadership, and evidence-based restorative care focused on lifetime durability.
            </p>

            <a
              href={`tel:${clinicData.phoneRaw}`}
              className="btn-cyan text-xs py-2.5 px-5 inline-flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: {clinicData.phone}</span>
            </a>
          </div>

          {/* Clinical Departments */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-300 uppercase mb-5">
              SPECIALISATIONS
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 font-normal">
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Dental Implants & Full Mouth
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Prosthodontics, Crowns & Bridges
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Bite Correction & Occlusal Therapy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Precision Restorations Mastery
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("services")} className="hover:text-[#14B8A6] transition-colors">
                  Clinical Diagnostics & Prophylaxis
                </button>
              </li>
            </ul>
          </div>

          {/* Practice */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-300 uppercase mb-5">
              ABOUT DOCTOR
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400 font-normal">
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-[#14B8A6] transition-colors">
                  Academic & Clinical Profile
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-[#14B8A6] transition-colors">
                  National Leadership (IPS & IDA)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("about")} className="hover:text-[#14B8A6] transition-colors">
                  AAID Fellow & Memberships
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("testimonials")} className="hover:text-[#14B8A6] transition-colors">
                  Patient Reviews & Outcomes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate("location")} className="hover:text-[#14B8A6] transition-colors">
                  Hours & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs font-bold tracking-widest text-slate-300 uppercase mb-5">
              CLINIC CONTACT
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p>
                <span className="text-slate-200 font-medium block">Office Number:</span>
                <a href={`tel:${clinicData.phoneRaw}`} className="text-[#14B8A6] hover:underline font-bold text-sm">
                  {clinicData.phone}
                </a>
              </p>
              <p>
                <span className="text-slate-200 font-medium block">Consultation Hours:</span>
                Monday – Saturday: 9:30 AM – 6:00 PM
              </p>
              <p>
                <span className="text-slate-200 font-medium block">Location:</span>
                Fairmount Downtown, X Road, Doolapally Rd, Bolarum, Secunderabad, Telangana 500100
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
